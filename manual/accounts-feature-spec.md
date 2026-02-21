# Accounts Module: Feature Specification & Edge Cases

## 1. Overview

The Accounts module allows users to segment their financial data into different logical "accounts" (e.g., Personal, Business, Savings, Cash). This provides a higher-level categorization than the `categories` table, allowing for separate insights and reporting.

## 2. Core Features

- **Account Creation**: Users can create accounts by providing a unique name.
- **Default Account**:
  - One account is always marked as the "Default".
  - New transactions are automatically assigned to the default account if no other account is selected.
  - Only one account can be the default at any given time.
- **Transaction Linking**: Every transaction must be linked to an account (via `accountId`).
- **Account-Specific Insights**: Users can filter reports and dashboards by account to see specific spending patterns.
- **Subscription Tiers**:
  - **Free Tier**: Limited to 1 account (Default).
  - **PRO Tier**: Unlimited accounts. Ability to switch the default account.

## 3. Edge Case Considerations

### 3.1 Account Deletion

- **Blocking Deletion**: An account cannot be deleted if it contains transactions. The user must first move or delete those transactions.
- **Default Account**: The "Default" account cannot be deleted. The user must promote another account to "Default" before the old one can be removed.

### 3.2 Existing User Migration

- **Backfilling**: Existing users will not have any accounts. We must run a migration script that:
  1. Creates a "Main Account" for them.
  2. Marks it as "Default".
  3. Assigns all their existing transactions to this new account.

### 3.3 Subscription Downgrade (PRO -> Free)

- **Behavior**: If a user goes from PRO to Free but has multiple accounts:
  - Existing transactions remain linked.
  - User can still view insights for all existing accounts.
  - User is restricted from creating _new_ accounts until they upgrade again.
  - User cannot change the "Default" status once downgraded if they have $>1$ account.

### 3.4 Unique Names

- Account names must be unique per user to avoid confusion in selectors.
