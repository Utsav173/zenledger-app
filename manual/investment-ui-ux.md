# Finvest Module: UI & UX Design Guide

> Design direction for the investment module that feels like a purpose-built financial terminal — not a generic dashboard slapped with a stock chart.

---

## 1. Design Intent

**Who is this human?**
An Indian professional who track expenses in ZenLedger and wants one place to see their full financial picture — FDs, mutual funds, stocks, gold. They're not day-traders. They're long-term holders who check portfolio maybe weekly.

**What must they accomplish?**
Answer: "Am I on track?" — see total returns, know which holdings are up/down, track FD maturity dates, record a new SIP installment.

**What should this feel like?**
Like a **private financial vault** — dense with information but never overwhelming. Cold precision of a Bloomberg terminal meets the quiet confidence of a Swiss bank statement. Mono typefaces, sharp edges, data-dense but orderly.

> This is NOT a brokerage app. There are no live tickers, no candlestick charts, no price alerts. It's a **ledger** that happens to understand what an investment is.

---

## 2. Design Signature: The Ledger Grid

The signature element is the **Ledger Grid** — a system of cells with sharp hairline borders that organize holdings like entries in a physical ledger book.

```
┌─────────────────────────────────────────────────┐
│  FINVEST // PORTFOLIO                    [+]    │
├─────────────────┬───────────────────────────────┤
│ INVESTED        │ CURRENT VALUE                 │
│ ₹4,85,000       │ ₹5,12,340                     │
│                 │ +₹27,340 (+5.6%)    ▲         │
├─────────────────┴───────────────────────────────┤
│  STOCKS  MUTUAL_FUNDS  FD  GOLD  PPF  ALL      │
├─────────────────────────────────────────────────┤
│  ┌─ HDFC BANK ─────────────── NSE:HDFCBANK ─┐  │
│  │  100 shares @ ₹1,500    →  ₹1,72,000     │  │
│  │  COST: ₹1,50,000           +14.6% ▲      │  │
│  └───────────────────────────────────────────┘  │
│  ┌─ AXIS BLUECHIP FUND ──── AMFI:120503 ────┐  │
│  │  312.45 units @ ₹48.12  →  ₹18,234       │  │
│  │  COST: ₹15,000             +21.5% ▲      │  │
│  │  SIP: ₹5,000/mo            ACTIVE        │  │
│  └───────────────────────────────────────────┘  │
│  ┌─ SBI FD ──────────────── 7.1% / 2Y ──────┐  │
│  │  ₹2,00,000 principal                     │  │
│  │  MATURITY: ₹2,30,148     │ 142 DAYS      │  │
│  │  INTEREST: ₹30,148       │ REMAINING     │  │
│  └───────────────────────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  END_OF_HOLDINGS // 3 ASSETS                    │
└─────────────────────────────────────────────────┘
```

### Key design rules:

- **Hairline borders** (`1px`, `theme.border` opacity) — never thick
- **No rounded corners** — everything is sharp, 0 border-radius
- **Mono typography** — JetBrains Mono for all data, numbers, labels
- **Color only for meaning** — green for profit, red for loss, primary for actions
- **No shadows** — depth via borders and background shifts only
- **No gradients** — flat surfaces, brutalist
- **No icons on holding cards** — the data IS the content

---

## 3. Screen Breakdown

### 3.1 Portfolio Overview (`investment/index.tsx`)

**Layout: Single ScrollView with sections**

```
[SafeAreaView]
  ├── Header: "FINVEST // PORTFOLIO" + [+] button
  ├── Summary Card (2 columns: invested vs current)
  │   └── Return amount + percentage + direction arrow
  ├── Asset Class Filter Rail (horizontal scroll, pill buttons)
  ├── Holdings List (LegendList, recycled)
  │   └── HoldingCard per item
  ├── Allocation Section (horizontal bar, not pie chart)
  └── Footer: "END_OF_HOLDINGS // {count} ASSETS"
```

**Allocation visualization — NOT a pie chart:**

Pie charts are overused and hard to read at small slices. Instead, use a **stacked horizontal bar**:

```
ALLOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
████████████████░░░░░░░░░░░▓▓▓▓▓▓▓▓▓░░░░░░░░░░░
STOCKS 42%      MF 28%     FD 22%     GOLD 8%
```

One horizontal bar. Segment colors. Labels below. Clean. Dense. Scannable.

### 3.2 Holding Detail (`investment/[id].tsx`)

**Layout:**

```
[SafeAreaView]
  ├── Header: ← back + "{HOLDING_NAME}" + "..." menu
  ├── Price Section
  │   ├── Current price (large)
  │   ├── Return: +₹X,XXX (+X.X%)
  │   └── "Last updated: {timestamp}" (for MF/manual)
  ├── Stats Grid (2×2)
  │   ├── INVESTED    │ QUANTITY
  │   ├── AVG COST    │ CURRENT VALUE
  ├── Lot History (Section header: "TRANSACTION LOG")
  │   └── Each lot: BUY/SELL badge + qty + price + date
  ├── Actions Section
  │   ├── [ADD MORE]  [SELL]  [DIVIDEND]
  │   └── (For FD: [MARK MATURED])
  └── Footer
```

**Lot history uses the same brutalist list style as the transaction list:**

```
┌─ BUY ── 21 JAN 2026 ────────────────────────┐
│  50 shares @ ₹1,480           ₹74,000       │
│  → linked to TXN:A8F3                        │
├─ BUY ── 15 FEB 2026 ────────────────────────┤
│  50 shares @ ₹1,520           ₹76,000       │
│  → linked to TXN:B2C1                        │
├─ SELL ── 10 MAR 2026 ────────────────────────┤
│  20 shares @ ₹1,650           ₹33,000       │
│  P&L: +₹3,400 (FIFO)                        │
│  → linked to TXN:C4D9                        │
└──────────────────────────────────────────────┘
```

### 3.3 Add Holding (`investment/add.tsx`)

**Flow:**

1. **Select asset class** (full-screen grid, 6 tiles like category selection)
2. **Class-specific form** (composed via composition pattern):
   - **Stocks:** Name, Symbol (optional), Quantity, Buy Price, Date
   - **MF:** Search fund name (AMFI), Units, Buy NAV (auto-filled), Date, SIP toggle
   - **FD:** Bank name, Principal, Rate%, Tenure, Compounding, Start Date
   - **Gold:** Grams, Price per gram, Date
   - **PPF/NPS:** Name, Amount, Date
   - **Custom:** Name, Invested, Current Value

**Form uses the same TransactionForm-style layout:**

- Header bar with cancel/save
- Content area with input fields (ScrollView for small screens)
- No numpad — this uses standard TextInput with numeric keyboard

**MF fund search — autocomplete from navCache:**

```
SEARCH FUND
┌──────────────────────────────────────────────┐
│  🔍 axis blue                                │
├──────────────────────────────────────────────┤
│  AXIS BLUECHIP FUND - GROWTH                 │
│  AMFI: 120503   NAV: ₹48.12                 │
├──────────────────────────────────────────────┤
│  AXIS BLUECHIP FUND - DIRECT GROWTH          │
│  AMFI: 120505   NAV: ₹52.67                 │
├──────────────────────────────────────────────┤
│  AXIS BLUE CHIP FUND - DIVIDEND              │
│  AMFI: 120504   NAV: ₹22.31                 │
└──────────────────────────────────────────────┘
```

Uses Convex `searchIndex` on `navCache.schemeName`. Debounced input (300ms).

### 3.4 FD Calculator (`investment/fd-calculator.tsx`)

**This is the FREE hook — accessible without PRO.**

The FD calculator is a standalone tool that doesn't save anything. It's purely computational:

```
FD CALCULATOR // FREE TOOL
━━━━━━━━━━━━━━━━━━━━━━━━━━
PRINCIPAL         [₹__________]
ANNUAL RATE       [____%]
TENURE            [__] MONTHS
COMPOUNDING       [QUARTERLY ▼]

──────────────────────────────
RESULT
──────────────────────────────
MATURITY AMOUNT    ₹2,30,148
INTEREST EARNED    ₹30,148
EFFECTIVE YIELD    7.23% p.a.
MATURITY DATE      21 FEB 2028

──────────────────────────────
[SAVE AS HOLDING]  ← PRO gate
```

The "SAVE AS HOLDING" button triggers the PRO upsell for free users.

---

## 4. Interaction Patterns

### 4.1 Haptics

| Action                | Haptic                             |
| --------------------- | ---------------------------------- |
| Tap holding card      | `ImpactFeedbackStyle.Light`        |
| Add lot               | `ImpactFeedbackStyle.Medium`       |
| Delete holding        | `NotificationFeedbackType.Warning` |
| Successfully saved    | `NotificationFeedbackType.Success` |
| Filter rail selection | `selectionAsync`                   |

### 4.2 Animations

- **Summary card numbers** — count-up animation on mount (300ms, easing deceleration)
- **Holding cards** — staggered fade-in on list load (50ms per item)
- **Allocation bar** — width animates from 0 to final on mount (400ms)
- **Return arrows** — subtle pulse when positive (Animated.loop, opacity 0.6→1.0)

All animations use `useNativeDriver: true`.

### 4.3 Empty States

**No holdings yet:**

```
      ∅

  EMPTY PORTFOLIO

  Track your investments alongside
  your daily transactions.

  [ ADD FIRST HOLDING ]
```

**No holdings in filtered class:**

```
  [ ]
  NO STOCKS IN PORTFOLIO
  Add your first stock holding.
```

### 4.4 Loading States

Use the existing `SkeletonLoader` component:

- Summary card: 2 skeleton blocks
- Holdings list: 3 skeleton cards
- Allocation bar: 1 horizontal skeleton

---

## 5. Color System

| Element             | Color Token                           | Usage                     |
| ------------------- | ------------------------------------- | ------------------------- |
| Positive return     | `theme.success`                       | Green text, arrow up      |
| Negative return     | `theme.error`                         | Red text, arrow down      |
| Zero/neutral        | `theme.textMeta`                      | Gray text                 |
| FD maturity warning | `theme.warning`                       | Amber for "maturing soon" |
| Asset class chips   | `theme.surface` bg + `theme.border`   | Unselected                |
| Active class chip   | `theme.text` bg + `theme.canvas` text | Selected                  |
| SIP badge           | `theme.primary`                       | Active SIP indicator      |

**No new colors.** Every element uses existing theme tokens. This is critical for dark mode consistency.

---

## 6. Typography Hierarchy

| Element                                    | Variant | Size   | Weight                     |
| ------------------------------------------ | ------- | ------ | -------------------------- |
| Portfolio total value                      | `mono`  | `2xl`  | Bold                       |
| Return percentage                          | `mono`  | `sm`   | Regular                    |
| Holding name                               | `mono`  | `base` | Bold                       |
| Holding detail (qty, price)                | `mono`  | `sm`   | Regular                    |
| Section labels ("STOCKS", "01 // SUMMARY") | `mono`  | `xs`   | Regular + letterSpacing: 2 |
| Lot dates                                  | `mono`  | `xs`   | Regular                    |

---

## 7. Navigation

```
Tab Bar (existing)
├── Dashboard   ← portfolio widget appears here
├── Reports     ← investment P&L appears here
├── Settings
│   └── ... existing ...
│
Investment Entry Points:
├── Dashboard → "Portfolio Card" → investment/index.tsx
├── Settings → "FINVEST" row → investment/index.tsx
├── Reports → "INVESTMENT" section → investment/index.tsx
└── FD Calculator → investment/fd-calculator.tsx (free)

Investment Stack:
├── investment/index.tsx       (Portfolio Overview)
├── investment/add.tsx         (Add Holding → class picker → form)
├── investment/[id].tsx        (Holding Detail)
└── investment/fd-calculator.tsx (Standalone FD calc)
```

No new tab. Investment is a **deep screen** accessed from multiple entry points, not a primary tab destination. This follows the avoid-feature-creep principle — it enhances existing surfaces rather than demanding its own nav slot.

---

## 8. Dashboard Widget

A compact card on the main dashboard (below the sparkline, above the transaction list):

```
┌─ FINVEST ──────────────────────────────────┐
│  ₹5,12,340         +5.6% ▲                │
│  3 ASSETS           LAST SYNC: 2H AGO     │
│                                    [ → ]   │
└────────────────────────────────────────────┘
```

- Tapping navigates to `investment/index.tsx`
- Only shown to PRO users
- If no holdings, shows: `"START TRACKING INVESTMENTS →"`

---

## 9. PRO Upsell Touchpoints

| Where            | Trigger                                |
| ---------------- | -------------------------------------- |
| Dashboard widget | Free user taps "FINVEST" card → upsell |
| FD Calculator    | "SAVE AS HOLDING" button → upsell      |
| Settings         | "FINVEST" row → upsell                 |
| Reports          | "INVESTMENT" section → upsell          |

Each upsell shows the existing `ProUpsellModal` with Finvest-specific copy:

> "Track investments, mutual funds, FDs, and gold alongside your transactions. Get the full financial picture."

---

## 10. Responsive Behavior

| Screen Size            | Adaptation                                         |
| ---------------------- | -------------------------------------------------- |
| **Compact** (<700pt)   | Summary card stacks vertically, smaller font sizes |
| **Medium** (700-850pt) | Side-by-side summary, standard sizing              |
| **Expanded** (>850pt)  | Wider holding cards, larger allocation bar         |

Use existing `useResponsive()` hook. No new breakpoints needed.
