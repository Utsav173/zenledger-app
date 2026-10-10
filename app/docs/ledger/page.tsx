import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/ledger",
  },
  title: "Vaults & The Double-Entry Ledger | Temporal Docs",
  description: "Explore Temporal's multi-vault architecture and double-entry transaction engine: atomic self-sweeps, transit rail peeling, SQLite WAL mode, and 13-table schema integrity.",
  openGraph: { images: ["/og/docs-ledger.png"] },
  twitter: { images: ["/og/docs-ledger.png"] },
};

export default function LedgerDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01] Daily Finance
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Vaults & The Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          A multi-vault liquidity architecture backed by an atomic double-entry SQLite engine.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Multi-Vault Architecture
            </h3>
            <p className="leading-relaxed text-gray-400">
              In Temporal, accounts are modeled as sovereign <strong className="font-semibold text-gray-200">Vaults</strong>. A vault can represent an on-demand checking account, a high-yield savings repository, physical cash reserves, an offshore brokerage, or a purpose-built sub-vault (e.g., "Tax Escrow", "Real Estate Capital"). Grouping balances into vaults gives you an instantaneous audit of your total liquid capital versus allocated reserves.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Double-Entry Internal Sweeps
            </h3>
            <p className="leading-relaxed text-gray-400">
              Moving capital between your own vaults must never distort your income or expense metrics. When you transfer funds from Checking to Savings, Temporal executes an atomic internal sweep. Your consolidated Net Worth remains invariant (&Delta;NetWorth &equiv; 0), while individual vault balances update in lockstep.
            </p>
          </div>

          <div className="border border-white/10 bg-black p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Commingled Freelance & Personal Cashflows
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I receive client retainers into my business account and transfer a fixed monthly draw into my personal checking." With separate Business and Personal vaults, your draw is logged as an internal sweep. Your business ledger reflects the outbound disbursement, your personal vault reflects the inbound liquidity, and your tax reports remain perfectly segmented without manual spreadsheet reconciliations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Architecture (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            13-Table Schema & Engine Invariants
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                SQLite WAL Mode & Zero-Lock Concurrency
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The database is initialized in Write-Ahead Logging mode (`PRAGMA journal_mode = 'wal'`) with strict foreign keys (`PRAGMA foreign_keys = ON`). Readers never block writers, and writers never block readers. UI state updates from background statement ingestion execute asynchronously without UI hitching or dropped frames.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                The Transit Rail Peeling Invariant
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Standard consumer apps blindly classify transactions containing transit markers like `UPI`, `IMPS`, `NEFT`, `POS`, `BBPS`, or `Razorpay` as internal transfers or generic payments. Temporal enforces the <strong className="font-semibold text-gray-200">Transit Rail Peeling Invariant</strong>: transit protocols are treated strictly as transport-layer artifacts. Counterparties and merchants are isolated via entropy reduction, and `cat_transfer` is strictly reserved for verified self-account sweeps and P2P transfers.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Fixed-Point Monetary Scaling
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                All fiat balances and transaction amounts are stored in 64-bit integers scaled by $100\times$ (paise/cents). Floating-point IEEE 754 representations are strictly prohibited across all repositories, eliminating rounding accumulation errors during balance reconciliation.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Self-Healing Schema Guard
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                On initialization, `database.ts` executes an idempotent migration harness checking table definitions across all 13 core relations (`accounts`, `transactions`, `categories`, `holdings`, `trades`, `corporate_actions`, `fixed_deposits`, `budgets`, `goals`, `counterparties`, `ml_vocabulary`, `audit_logs`, `key_value_store`). Any missing columns or indexes are patched automatically without destructive schema migrations or data loss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
