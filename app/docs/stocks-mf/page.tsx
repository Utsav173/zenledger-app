import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stocks & Mutual Funds | Temporal Docs",
  description: "Track stocks and mutual funds in Temporal: chronological FIFO lot depletion, corporate action split invariants, and keyless AMFI feeds.",
  openGraph: { images: ["/og/docs-stocks-mf.png"] },
  twitter: { images: ["/og/docs-stocks-mf.png"] },
};

export default function StocksMfDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.1] Market Assets
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Stocks &amp; Mutual Funds.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          FIFO lot depletion &middot; Corporate action invariants &middot; Keyless market telemetry
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Unified Equity &amp; Mutual Fund Management
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal provides a unified ledger for both Indian equities (NSE/BSE) and 44,000+ AMFI Mutual Fund schemes.
              Instead of relying on broker APIs that revoke authorization every 30 days, Temporal records individual
              purchase tranches (&apos;Lots&apos;) locally, calculating realized capital gains and portfolio telemetry with zero external broker lock-in.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Market Watchlists &amp; Sparklines
            </h3>
            <p className="leading-relaxed text-gray-400">
              Beyond tracking what you own, Temporal provides a high-density Watchlist engine designed with Utilitarian Swiss Brutalism.
              Monitor prospective equities and benchmark indices with sub-16ms sparklines and live price-delta indicators without cluttering your actual portfolio balance sheet.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Clean Corporate Action Accounting
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;My stock announced a 1:5 stock split followed by a 1:1 bonus issue. Consumer apps botched my cost basis and showed fake 400% returns.&quot;
              Temporal enforces the Corporate Action Invariant: split and bonus factors adjust tranche quantities and unit prices proportionally, but your historical cost basis remains mathematically unaltered.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#111111] p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Financial Engine Invariants
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Chronological FIFO Lot Matching
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                When an asset lot is partially or fully liquidated, sell orders deplete unconsumed buy lots in strict chronological sequence (ORDER BY date ASC, _creationTime ASC). Realized short-term and long-term capital gains are computed tranche-by-tranche using fixed-point integer consideration arithmetic.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Corporate Action Cost Basis Invariant (&Delta;Invested &equiv; 0)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Corporate actions (stock split and bonus issues) scale remainingQuantity and pricePerUnit using adjustment factor F: Q&apos; = Math.round(Q &middot; F) and P&apos; = Math.round(P / F). Crucially, the totalInvested cost basis is never modified, preserving pristine records for capital gains tax filings.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Direct Keyless AMFI NAV Feed (44,000+ Schemes)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Mutual fund NAVs are ingested directly from the official AMFI master daily text feed. Schemes are indexed locally by Scheme Code and ISIN, bypassing broker APIs and rate-limited commercial aggregators.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Self-Healing NSE &harr; BSE Symbol Swapping
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                If an equity quote fails to resolve on one exchange due to trading halts or ticker symbol changes, the market proxy automatically performs reciprocal symbol swapping (e.g. RELIANCE.NS &harr; 500325.BO) to ensure uninterrupted portfolio tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
