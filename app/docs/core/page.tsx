import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/core",
  },
  title: "Local-First Architecture | Temporal Docs",
  description: "How Temporal's local-first architecture works: on-device SQLite WAL storage, self-healing schema guard, fixed-point units, and zero cloud dependencies.",
  openGraph: { images: ["/og/docs-core.png"] },
  twitter: { images: ["/og/docs-core.png"] },
};

export default function CoreDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00.1] System Core
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Local-First Architecture.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          SQLite WAL engine &middot; 13 relational schemas &middot; Self-healing integrity guard
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Zero Latency, Instant Mechanical Feedback
            </h3>
            <p className="leading-relaxed text-gray-400">
              Most personal finance apps suffer from network latency because every tap requires
              a round-trip to cloud servers in remote data centers. In Temporal, the database lives
              directly on your device silicon. Coupled with @legendapp/list 60fps virtualization,
              the interface responds instantaneously with zero loading skeletons or spinners.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Absolute Immunity to Service Outages
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal has no backend user database that can suffer an outage, get acquired, or leak your data.
              If third-party servers go down or you enter a subterranean vault with zero connectivity,
              Temporal remains 100% operational. You retain uninterrupted sovereignty over your money.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The Air-Gapped Sovereign Philosophy
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              By keeping your financial ledger strictly on your local hardware boundary, we eliminate
              entire vectors of systemic vulnerability: data broker leaks, third-party aggregator breaches
              (no Plaid, no MX), and telemetry scraping. Your device is your sovereign financial vault.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0a] p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            The SQLite Core &amp; Mathematical Invariants
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Write-Ahead Logging (WAL Mode) &amp; Foreign Keys
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal initializes `zenledger.db` with `PRAGMA journal_mode = 'wal'` and `PRAGMA synchronous = NORMAL`. This provides concurrency where background reads never block interactive write operations. Relational integrity is strictly enforced with `PRAGMA foreign_keys = ON`.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Self-Healing Schema Guard (13 Relational Tables)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                On every application startup, a programmatic migration guard inspects column schemas across all 13 core tables (transactions, accounts, holding_lots, categories, ai_chats, etc.). Missing columns or tables are repaired automatically using non-destructive transactional DDL statements.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Fixed-Point Unit Scaling (Zero Float Drift)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                To guarantee audit-grade arithmetic, all fiat currency amounts are scaled by 100&times; (integer paise/cents), and all asset quantities are scaled by 10,000&times; (4 decimal places). Calculations are performed using 64-bit integer math, eliminating IEEE 754 floating-point rounding errors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
