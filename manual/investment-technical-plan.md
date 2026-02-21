# Finvest Module: Technical Implementation Plan

> Code-level architecture for the investment tracking module.
> Built on: Convex (backend), React Native + Expo (frontend), Vercel composition patterns.

---

## 1. Schema Design

### New Convex Tables

```typescript
// convex/schema.ts — additions

// ==========================================================================
// INVESTMENT HOLDINGS
// ==========================================================================
holdings: defineTable({
  userId: v.id("users"),
  // Asset classification
  assetClass: v.union(
    v.literal("stocks"),
    v.literal("mutual_funds"),
    v.literal("fixed_deposit"),
    v.literal("gold"),
    v.literal("ppf_nps"),
    v.literal("custom")
  ),
  // Display name (e.g., "HDFC Bank", "Axis Bluechip Fund")
  name: v.string(),
  // Optional identifier (NSE symbol, AMFI scheme code)
  symbol: v.optional(v.string()),
  // Current price per unit (in cents, integer) — manually updated or NAV-fetched
  currentPrice: v.number(),
  // Last time currentPrice was updated (Unix ms)
  priceUpdatedAt: v.number(),
  // -- FD-specific fields --
  fdRate: v.optional(v.number()),            // Annual rate as decimal (0.07 = 7%)
  fdTenureMonths: v.optional(v.number()),    // Tenure in months
  fdCompounding: v.optional(v.number()),     // Compounding frequency per year (4 = quarterly)
  fdStartDate: v.optional(v.number()),       // Unix ms
  fdMaturityDate: v.optional(v.number()),    // Computed: Unix ms
  fdMatured: v.optional(v.boolean()),        // Has it matured?
  // -- SIP-specific fields --
  sipMonthlyAmount: v.optional(v.number()),  // Monthly SIP amount (cents)
  sipStartDate: v.optional(v.number()),      // Unix ms
  sipEndDate: v.optional(v.number()),        // Optional end date
  sipActive: v.optional(v.boolean()),
  // -- General --
  note: v.optional(v.string()),
  // Soft delete
  isDeleted: v.optional(v.boolean()),
  createdAt: v.number(),
})
  .index("by_user", ["userId"])
  .index("by_user_class", ["userId", "assetClass"]),

// ==========================================================================
// HOLDING LOTS (Buy/Sell records)
// ==========================================================================
holdingLots: defineTable({
  holdingId: v.id("holdings"),
  userId: v.id("users"),
  type: v.union(v.literal("buy"), v.literal("sell"), v.literal("dividend")),
  // Quantity (in smallest unit — shares, grams, units)
  // Stored as integer × 10000 to handle fractional shares (MF units)
  quantity: v.number(),
  // Price per unit at time of transaction (cents)
  pricePerUnit: v.number(),
  // Total amount (cents) = quantity × pricePerUnit / 10000
  amount: v.number(),
  // Date of this lot (Unix ms)
  date: v.number(),
  // Optional link to auto-created transaction
  transactionId: v.optional(v.id("transactions")),
  note: v.optional(v.string()),
  createdAt: v.number(),
})
  .index("by_holding", ["holdingId"])
  .index("by_user", ["userId"])
  .index("by_holding_date", ["holdingId", "date"]),

// ==========================================================================
// NAV CACHE (Mutual Fund prices)
// ==========================================================================
navCache: defineTable({
  // AMFI scheme code (string, e.g., "120503")
  schemeCode: v.string(),
  // Scheme name for display
  schemeName: v.string(),
  // NAV value (stored as integer × 10000 for precision)
  nav: v.number(),
  // NAV date
  navDate: v.string(),
  // When we fetched this
  fetchedAt: v.number(),
})
  .index("by_scheme", ["schemeCode"])
  .searchIndex("by_name", { searchField: "schemeName" }),
```

### Schema Changes to Existing Tables

```typescript
// transactions table — add optional investment link
transactions: defineTable({
  // ... existing fields ...
  // NEW: optional link back to the holding lot that created this transaction
  investmentLotId: v.optional(v.id("holdingLots")),
});
```

### System Category

On first Finvest access, auto-create:

```typescript
{
  name: "Investment",
  icon: "trending-up",
  color: "#6366F1",  // Indigo
  isDefault: true,
  userId: undefined,  // System category
}
```

---

## 2. Convex Functions

### File Structure

```
convex/
├── holdings.ts          // Holdings CRUD
├── holdingLots.ts       // Lot management + FIFO logic
├── navFeed.ts           // AMFI NAV fetch + cache
├── investmentCalc.ts    // FD calculator, XIRR, returns
└── crons.ts             // Add NAV refresh cron
```

### `holdings.ts`

| Function              | Type     | Description                                                                |
| --------------------- | -------- | -------------------------------------------------------------------------- |
| `list`                | query    | All holdings for user (exclude soft-deleted)                               |
| `listByClass`         | query    | Filter by asset class                                                      |
| `get`                 | query    | Single holding with computed fields (totalInvested, currentValue, return%) |
| `getPortfolioSummary` | query    | Aggregate: total invested, current value, returns, allocation breakdown    |
| `create`              | mutation | Create holding + first buy lot + auto-link transaction                     |
| `update`              | mutation | Update holding details (name, current price, notes)                        |
| `updatePrice`         | mutation | Update current price + priceUpdatedAt                                      |
| `softDelete`          | mutation | Set isDeleted, nullify transactionId links                                 |

### `holdingLots.ts`

| Function               | Type     | Description                                         |
| ---------------------- | -------- | --------------------------------------------------- |
| `listByHolding`        | query    | All lots for a holding, ordered by date             |
| `addBuyLot`            | mutation | Add buy lot + create expense transaction            |
| `addSellLot`           | mutation | Add sell lot (FIFO P&L) + create income transaction |
| `recordDividend`       | mutation | Add dividend lot + create income transaction        |
| `recordSipInstallment` | mutation | Add buy lot at current NAV + create transaction     |

### FIFO Sell Logic (Critical)

```typescript
// Pseudocode for addSellLot
async function addSellLot(ctx, { holdingId, quantity, pricePerUnit, date }) {
  // 1. Get all buy lots ordered by date (FIFO)
  const buyLots = await ctx.db
    .query("holdingLots")
    .withIndex("by_holding_date", (q) => q.eq("holdingId", holdingId))
    .filter((q) => q.eq(q.field("type"), "buy"))
    .collect();

  // 2. Calculate remaining quantity per lot
  const sellLots = await ctx.db
    .query("holdingLots")
    .withIndex("by_holding", (q) => q.eq("holdingId", holdingId))
    .filter((q) => q.eq(q.field("type"), "sell"))
    .collect();

  // 3. Walk FIFO: consume oldest lots first
  let remainingToSell = quantity;
  let totalCostBasis = 0;

  for (const lot of buyLots) {
    const lotRemaining = lot.quantity - soldFromLot(lot, sellLots);
    if (lotRemaining <= 0) continue;

    const sellFromThis = Math.min(remainingToSell, lotRemaining);
    totalCostBasis += sellFromThis * lot.pricePerUnit;
    remainingToSell -= sellFromThis;

    if (remainingToSell <= 0) break;
  }

  if (remainingToSell > 0) throw new Error("Cannot sell more than held");

  // 4. Record sell lot
  const sellAmount = quantity * pricePerUnit;
  const pnl = sellAmount - totalCostBasis;

  // 5. Auto-create income transaction
  const transactionId = await ctx.db.insert("transactions", {
    amount: sellAmount,
    merchant: holding.name,
    categoryId: investmentCategoryId,
    date,
    userId,
    type: "income",
    note: `Investment: SELL ${quantity} @ ₹${pricePerUnit / 100}`,
    investmentLotId: lotId,
  });
}
```

### `navFeed.ts`

```typescript
// Convex action (HTTP call to AMFI)
export const fetchNavFeed = action({
  handler: async (ctx) => {
    const response = await fetch("https://www.amfiindia.com/spages/NAVAll.txt");
    const text = await response.text();

    // Parse pipe-delimited format:
    // Scheme Code;ISIN Div Payout;ISIN Growth;Scheme Name;NAV;Date
    const lines = text.split("\n");
    const entries = [];

    for (const line of lines) {
      const parts = line.split(";");
      if (parts.length >= 6 && !isNaN(parseFloat(parts[4]))) {
        entries.push({
          schemeCode: parts[0].trim(),
          schemeName: parts[3].trim(),
          nav: Math.round(parseFloat(parts[4]) * 10000), // Store as integer
          navDate: parts[5].trim(),
          fetchedAt: Date.now(),
        });
      }
    }

    // Batch upsert into navCache (chunked for Convex limits)
    await ctx.runMutation(internal.navFeed.upsertBatch, { entries });
  },
});
```

### `investmentCalc.ts`

```typescript
// Pure functions — no DB, can run client-side too

export function calculateFdMaturity(
  principal: number, // cents
  annualRate: number, // decimal (0.07)
  tenureMonths: number,
  compoundingPerYear: number = 4
): { maturityAmount: number; interestEarned: number; maturityDate: number } {
  const t = tenureMonths / 12;
  const maturity = Math.round(
    principal *
      Math.pow(1 + annualRate / compoundingPerYear, compoundingPerYear * t)
  );
  return {
    maturityAmount: maturity,
    interestEarned: maturity - principal,
    maturityDate: Date.now() + tenureMonths * 30 * 24 * 60 * 60 * 1000,
  };
}

export function calculateXIRR(
  cashFlows: { amount: number; date: number }[]
): number {
  // Newton-Raphson method for XIRR
  // cashFlows: negative for outflows (buys), positive for inflows (sells/current value)
  // Returns annualized return rate as decimal

  const DAYS_PER_YEAR = 365;
  let rate = 0.1; // Initial guess 10%

  for (let i = 0; i < 100; i++) {
    let f = 0,
      df = 0;
    const t0 = cashFlows[0].date;

    for (const cf of cashFlows) {
      const years = (cf.date - t0) / (DAYS_PER_YEAR * 24 * 60 * 60 * 1000);
      const factor = Math.pow(1 + rate, years);
      f += cf.amount / factor;
      df -= (years * cf.amount) / (factor * (1 + rate));
    }

    const newRate = rate - f / df;
    if (Math.abs(newRate - rate) < 1e-7) return newRate;
    rate = newRate;
  }

  return rate;
}
```

### Cron Job

```typescript
// convex/crons.ts
import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Refresh MF NAV once daily at 10 PM IST (after market close + AMFI update)
crons.daily(
  "refresh-nav-feed",
  { hourUTC: 16, minuteUTC: 30 }, // 10 PM IST = 4:30 PM UTC
  internal.navFeed.fetchNavFeed
);

export default crons;
```

---

## 3. Frontend Architecture

### File Structure (Composition Pattern)

```
src/components/investment/
├── InvestmentContext.tsx       // State interface + context + hook
├── InvestmentProvider.tsx      // State management provider
├── InvestmentUI.tsx            // Shared UI components
├── HoldingForm/
│   ├── HoldingFormContext.tsx  // Form-specific context
│   ├── HoldingFormProvider.tsx
│   └── HoldingFormUI.tsx      // Form sub-components
├── FdCalculator.tsx           // Standalone FD calculator (free feature)
└── index.tsx                  // Compound component export

app/(protected)/
├── investment/
│   ├── _layout.tsx            // Stack navigator for investment screens
│   ├── index.tsx              // Portfolio overview
│   ├── [id].tsx               // Holding detail
│   ├── add.tsx                // Add holding
│   └── fd-calculator.tsx      // FD calculator (accessible to free users)
```

### Context Interface

```typescript
// InvestmentContext.tsx
interface InvestmentState {
  holdings: Holding[];
  portfolio: PortfolioSummary;
  isLoading: boolean;
}

interface InvestmentActions {
  refreshPrice: (holdingId: Id<"holdings">) => Promise<void>;
  deleteHolding: (holdingId: Id<"holdings">) => Promise<void>;
}

interface InvestmentMeta {
  filterClass: AssetClass | "all";
  setFilterClass: (c: AssetClass | "all") => void;
  sortBy: "name" | "value" | "return";
  setSortBy: (s: "name" | "value" | "return") => void;
}
```

### Compound Component API

```tsx
// Consumer usage in app/(protected)/investment/index.tsx
<Investment.Provider>
  <Investment.Header />
  <Investment.Summary />
  <Investment.ClassFilter />
  <Investment.HoldingsList />
  <Investment.Modals />
</Investment.Provider>
```

---

## 4. Performance Considerations

| Concern                       | Strategy                                              |
| ----------------------------- | ----------------------------------------------------- |
| Portfolio summary computation | Server-side Convex query with aggregate               |
| NAV cache (45K rows)          | Indexed by `schemeCode`, search index on `schemeName` |
| Holding list rendering        | LegendList with `React.memo` + `useCallback`          |
| XIRR calculation              | Run in Convex action (not blocking UI thread)         |
| FD maturity polling           | Computed field, no polling needed                     |
| Large lot history             | Paginated query with cursor                           |

---

## 5. Migration Strategy

### For Existing Users

1. No migration needed — Finvest is additive.
2. "Investment" system category created on first module access.
3. No existing data is modified.

### Schema Deployment

1. Deploy schema with new tables (non-breaking, additive).
2. Add `investmentLotId` optional field to transactions (non-breaking).
3. Deploy cron job for NAV refresh.
4. Deploy frontend screens behind PRO gate.

---

## 6. Testing Strategy

| Layer           | What                             | How                          |
| --------------- | -------------------------------- | ---------------------------- |
| **Unit**        | FD calculator, XIRR              | Pure functions, Jest         |
| **Unit**        | FIFO sell logic                  | Mock lots, verify cost basis |
| **Integration** | Auto-link transactions           | Convex test harness          |
| **Integration** | NAV feed parsing                 | Mock AMFI response           |
| **E2E**         | Add holding → verify transaction | Expo + manual                |
| **Edge**        | Sell more than held              | Expect error                 |
| **Edge**        | Zero-price holding               | Verify -100% display         |
| **Edge**        | PRO → Free downgrade             | Verify read-only             |
