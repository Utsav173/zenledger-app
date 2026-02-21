# Finvest Module: Feature Specification

> Investment & asset tracking module for ZenLedger. PRO-gated feature.
> **Scope constraint:** No crypto. No paid APIs. No API keys. India-first userbase.

---

## 1. Overview

The Finvest module allows users to track investments across asset classes — stocks, mutual funds, fixed deposits, gold, PPF/NPS, and custom assets. It works alongside (not replacing) the existing transaction ledger, providing:

- **Portfolio snapshot** — total invested, current value, returns
- **Per-holding tracking** — buy/sell lots, cost basis, P&L
- **Auto-link to transactions** — investment buys/sells create corresponding expense/income entries
- **Dashboard integration** — portfolio widget on the main dashboard
- **Reports integration** — investment P&L appears in monthly analytics

---

## 2. Asset Classes (MVP)

| Class               | Price Source                 | Tracking Method                      |
| ------------------- | ---------------------------- | ------------------------------------ |
| **Stocks (Indian)** | Manual entry                 | Buy lots, sell lots, dividend income |
| **Mutual Funds**    | AMFI NAV feed (free, no key) | SIP/lumpsum, NAV-based valuation     |
| **Fixed Deposits**  | Pure math                    | Principal + rate + tenure → maturity |
| **Gold**            | Manual price per gram        | Grams held × price                   |
| **PPF / NPS / EPF** | Manual entry                 | Yearly contribution + interest rate  |
| **Custom / Other**  | Manual entry                 | Name + invested + current value      |

### 2.1 AMFI NAV Feed (Mutual Funds)

- **Source:** `https://www.amfiindia.com/spages/NAVAll.txt`
- **Format:** Pipe-delimited text, ~45,000 rows
- **Cost:** Free, no API key, no rate limit, public data
- **Refresh:** Once per day via Convex cron job, cached in `navCache` table
- **Lookup:** By scheme code (AMFI code) — user selects fund by name, we store the code
- **Fallback:** If feed is down, show last cached NAV with "stale" indicator

### 2.2 FD Calculator (Pure Math)

```
maturityAmount = principal × (1 + rate/n)^(n × t)

where:
  principal = deposit amount (in cents, integer)
  rate = annual interest rate (decimal, e.g., 0.07 for 7%)
  n = compounding frequency (quarterly = 4)
  t = tenure in years
```

No external dependency. All computation happens in the Convex action or client-side.

---

## 3. Core Features

### 3.1 Holdings CRUD

- **Add Holding:** Select asset class → fill details (name, symbol/code, quantity, buy price, buy date)
- **Edit Holding:** Update current price, add more lots, record dividends
- **Delete Holding:** Soft-delete; linked transactions remain untouched
- **View Holding:** Detail screen with lot history, P&L, allocation %

### 3.2 Portfolio Dashboard

- **Total Invested** — sum of all cost basis
- **Current Value** — sum of all (quantity × current price)
- **Absolute Return** — current value − invested
- **Return %** — ((current − invested) / invested) × 100
- **Allocation Pie** — by asset class (stocks vs MF vs FD vs gold vs other)

### 3.3 Transaction Auto-Link

When a user adds an investment buy lot:

1. System auto-creates an **expense transaction** in the main ledger
2. Transaction gets:
   - `merchant`: holding name (e.g., "HDFC Bank" or "Axis Bluechip Fund")
   - `categoryId`: auto-assigned "Investment" category (system default)
   - `type`: "expense"
   - `amount`: buy price × quantity
   - `note`: "Investment: BUY 10 shares @ ₹1,500"
   - `accountId`: user's default account
3. A `investmentTransactionId` field on the lot links back to the transaction
4. When user sells:
   - System auto-creates an **income transaction** for the sale proceeds
   - P&L is recorded on the lot

### 3.4 SIP Tracking (Mutual Funds)

- User creates a SIP: fund name, monthly amount, start date, end date (optional)
- **No auto-charge** — this is tracking, not execution
- Each month, user can "record installment" which:
  - Creates a new lot at current NAV
  - Auto-creates expense transaction in ledger
- SIP dashboard shows: total installments, total invested, current value, XIRR

### 3.5 FD Maturity Tracker

- User adds FD: bank name, principal, rate, tenure, start date, compounding frequency
- System calculates: maturity amount, interest earned, maturity date
- **Maturity reminder** — shows "maturing in X days" badge
- On maturity, user can "mark matured" which:
  - Creates income transaction for interest earned
  - Moves FD to "Matured" section

### 3.6 Dividend / Interest Income

- User can record dividend/interest on any holding
- This auto-creates an income transaction in the main ledger
- Dividend yield % calculated on cost basis

---

## 4. PRO Gating Strategy

| Feature                    | Free | PRO            |
| -------------------------- | ---- | -------------- |
| View portfolio summary     | —    | ✅             |
| Add holdings               | —    | ✅ (unlimited) |
| FD calculator (standalone) | ✅   | ✅             |
| SIP tracking               | —    | ✅             |
| Auto-link transactions     | —    | ✅             |
| MF NAV auto-fetch          | —    | ✅             |
| XIRR calculation           | —    | ✅             |
| Portfolio in reports       | —    | ✅             |
| Dashboard widget           | —    | ✅             |

> **Rationale:** The entire Finvest module is PRO-only (except the FD calculator which doubles as a marketing hook). This keeps the free tier clean and positions Finvest as the flagship PRO feature.

---

## 5. Edge Cases

### 5.1 Zero-Value Holdings

- Stocks can go to ₹0 (delisted). Allow current_price = 0.
- Return % = -100% in this case. Display: "₹0.00 (−100%)"

### 5.2 Partial Sells

- User bought 100 shares, sells 40.
- System uses **FIFO** (First In, First Out) for cost basis calculation.
- Remaining 60 shares retain original buy lots.
- Sell creates income transaction for (40 × sell price).
- P&L = (sell price − FIFO cost) × quantity sold.

### 5.3 Stock Splits & Bonuses

- User can manually adjust quantity and cost basis.
- "Stock Split" action: multiply quantity by ratio, divide cost per share by ratio.
- Total invested stays the same.

### 5.4 Duplicate Holdings

- Allow multiple holdings of the same stock/fund (different accounts).
- Deduplicate by showing aggregate on portfolio view, detailed per-lot on holding detail.

### 5.5 Currency

- All amounts stored in user's configured currency (from CurrencyContext).
- No multi-currency portfolio in MVP.

### 5.6 Offline Behavior

- Holdings CRUD works offline (Convex handles this).
- NAV fetch requires network — show stale indicator with last fetch time.
- FD calculations are fully offline (pure math).

### 5.7 Subscription Downgrade (PRO → Free)

- Existing holdings remain visible in read-only mode.
- User cannot add/edit/delete holdings.
- Auto-linked transactions remain in the ledger.
- Dashboard widget hidden.
- "Upgrade to PRO" prompt on module entry.

### 5.8 Large Portfolio

- LegendList for holding lists (already used in dashboard/categories).
- Aggregate calculations done server-side in Convex query (not client).
- Allocations computed as a memo, not re-calculated per render.

### 5.9 NAV Cache Staleness

- Display last-updated timestamp on MF holdings.
- If cache is >24h old, show amber "STALE" badge.
- If cache is >7d old, show red "OFFLINE" badge and fallback to manual entry.

### 5.10 Investment Category Auto-Creation

- On first Finvest access, system creates an "Investment" category if it doesn't exist.
- This is a system default category (isDefault: true), not editable by user.
- All auto-linked transactions use this category.

### 5.11 Deletion Cascade

- Deleting a holding does NOT delete linked transactions.
- Transactions keep their data but lose the `investmentHoldingId` reference (set to null).
- User sees a note: "This transaction was linked to a deleted investment."

### 5.12 AMFI Feed Parsing Failures

- If the AMFI feed changes format, the cron job logs an error and retains last-good cache.
- Admin alert mechanism (future): Convex function can flag parse errors.
- UI shows "NAV unavailable" instead of crashing.

---

## 6. Data Relationships

```
┌─────────────┐     ┌──────────────────┐     ┌──────────────┐
│  holdings    │────▶│  holdingLots     │────▶│ transactions │
│              │     │  (buy/sell lots)  │     │ (auto-linked)│
│  userId      │     │  holdingId       │     │              │
│  assetClass  │     │  type: buy|sell  │     │              │
│  name        │     │  quantity        │     │              │
│  symbol      │     │  pricePerUnit    │     │              │
│  currentPrice│     │  date            │     │              │
│  ...         │     │  transactionId?  │     │              │
└─────────────┘     └──────────────────┘     └──────────────┘
                           │
                    ┌──────┴──────┐
                    │  navCache   │
                    │  schemeCode │
                    │  nav        │
                    │  date       │
                    │  fetchedAt  │
                    └─────────────┘
```

---

## 7. Success Metrics

| Metric                             | Target                                      |
| ---------------------------------- | ------------------------------------------- |
| PRO conversion from Finvest upsell | >5% of free users who see the FD calculator |
| Holdings per PRO user (30-day)     | ≥3                                          |
| Auto-linked transactions created   | >50% of holdings have linked transactions   |
| Module retention (7-day)           | >40% of users who add first holding return  |
