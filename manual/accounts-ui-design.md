# Accounts Module: UI & Design Philosophy

## 1. Design Ideology

The Accounts feature follows the **Swiss Brutalist** and **Future Financial** aesthetic of ZenLedger. It prioritizes raw data visibility, industrial typography (monospaced), and high-contrast layouts.

## 2. User Experience (UX) Pillars

- **Minimal Interaction Cost**: The system should automatically handle account assignment for 90% of cases via the "Default" mechanism.
- **Visual Distinction**: Accounts should feel like distinct "vaults" for data.
- **Thumb-Zone Accessibility**: Selector placement must be reachable for one-handed entry on mobile devices.

## 3. UI Implementation Details

### 3.1 Transaction Form (`AddEntryScreen` / `EditEntryScreen`)

- **Account Selector**:
  - Located in the "Advanced" or secondary section of the form (likely near the Date/Note section).
  - Uses a "Horizontal Pill Rail" (similar to Categories) for quick tapping.
  - Initial state: Always pre-selected with the "Default" account.
  - Monospaced labels: `ACC: PHYSICAL_CASH`, `ACC: MAIN_BANK`.

### 3.2 Detail View (`TransactionDetailScreen`)

- **The Receipt Aesthetic**: The account name is rendered as a metadata field on the digital receipt.
- **Label**: `ACCOUNT:// [NAME]` or `VAULT_ID: [NAME]`.
- Location: Placed near the "Reference Code" or "Date" for an industrial feel.

### 3.3 Account Management Screen

- **The "Vault Manager"**:
  - List of accounts with chunky borders and secondary meta-info (Record count, creation date).
  - Clear "DEFAULT" status marker using the primary theme color.
  - Interactive "Add Account" button that triggers a PRO upsell if limit is reached.

### 3.4 Filtering UI

- **Perspective Shift**: The Dashboard's "Graph" and "List" can stay the same, but the header could potentially show a "Current View: [Account Name]" if filtered.
- **Global Filter**: Ability to toggle between "ALL ACCOUNTS" and specific accounts globally.
