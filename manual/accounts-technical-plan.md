# Accounts Module: Technical Implementation & Robustness

## 1. Convex Data Model

### 1.1 `accounts` Table

```typescript
accounts: defineTable({
  name: v.string(),
  userId: v.id("users"),
  isDefault: v.boolean(),
  createdAt: v.number(),
}).index("by_user", ["userId"]);
```

### 1.2 `transactions` Table Modification

```typescript
transactions: defineTable({
  // ... existing fields
  accountId: v.id("accounts"),
}).index("by_user_account", ["userId", "accountId"]);
```

## 2. Robust API Design

### 2.1 Atomic Default Switching

When setting a new default account, use a `mutation` that ensures atomicity:

1. Search for existing account where `userId == current && isDefault == true`.
2. Clear that flag sets `isDefault = false`.
3. Set the new account to `isDefault = true`.
4. Wrap in a single Convex mutation to prevent "no-default" or "double-default" states.

### 2.2 Account Guarding (PRO Status)

In the `create` mutation, we must strictly check the `userProfiles` table:

- If `profile.subscriptionStatus !== 'pro'`, count the user's accounts.
- If count $\ge 1$, throw `PRO_REQUIRED`.

### 2.3 Transaction Integrity

- **Mutation Hooks**: All transaction creation and update logic should automatically inject the `defaultAccount` if `accountId` is missing.
- **Deletion Check**: The `accounts:remove` mutation must check for linked transactions using `ctx.db.query("transactions").withIndex("by_user_account", (q) => q.eq("userId", userId).eq("accountId", args.id)).first()`. If a record exists, ABORT.

## 3. Performance & Optimizations

- **Indexing**: The `by_user_account` index is critical for the "Account Specific Insights" screen.
- **Aggregations**: Use specialized queries that utilize the index to sum transaction amounts per account, avoiding full table scans.
- **Caching**: UI should subscribe only to the accounts it needs (e.g., the current selected account's stats).

## 4. Migration Strategy

To ensure zero downtime and robust data integrity:

1. **Schema Update**: Add `accountId` as `v.optional` first.
2. **Backfill Script**:
   - Loop through all users in `users`.
   - Create a `Main Account` (Default).
   - Update all transactions for that `userId` to point to the new `accountId`.
3. **Schema Enforcement**: Update schema to make `accountId` mandatory (`v.id("accounts")`).
