import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/fixed-income",
  },
  title: "Fixed Income & FDs | Temporal Docs",
  description: "Track fixed deposits, PPF, and fixed-income instruments in Temporal: daily accrual compounding, maturity laddering, and fixed-point math.",
  openGraph: { images: ["/og/docs-fixed-income.png"] },
  twitter: { images: ["/og/docs-fixed-income.png"] },
};

export default function FixedIncomeDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.3] Stable Assets
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Fixed Income (FD).
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Daily compound accruals &middot; Maturity laddering &middot; PPF/EPF benchmarks
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Fixed-Income Liquidity Anchor
            </h3>
            <p className="leading-relaxed text-gray-400">
              Fixed Deposits (FDs), Public Provident Funds (PPF), and Employee Provident Funds (EPF) form
              the capital-preservation core of financial planning. Temporal provides automated daily compound
              interest accruals, tax withholding (TDS) projections, and renewal deadline alerts in a single view.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Projected Maturity &amp; Cash Flow Runway
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal computes the exact future maturity figure of your deposits based on contracted rates
              and compounding frequencies. This enables accurate planning for major planned capital expenditures.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Systematic FD Laddering
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I hold multiple deposits maturing across staggered quarters to optimize reinvestment yield.&quot;
              Temporal&apos;s Maturity Ladder console plots maturity dates chronologically, ensuring you maintain liquidity while capturing peak interest cycle returns.
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
            Compounding &amp; Interest Math
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Daily Compound Accrual Engine
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal supports Monthly, Quarterly, Half-Yearly, and Cumulative compounding models. Accrued interest is computed using fixed-point integer cents/paise: A = Math.round(P &middot; (1 + r / n)^(n &middot; t)), providing real-time accrued valuation without manual entries.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Statutory PPF &amp; EPF Yield Benchmarks
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Specialized calculation engines track government provident funds. Models account for the statutory rule where deposits made on or before the 5th of each month earn interest for that entire month, compounding annually at notified rates.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                TDS Tax Drag Modeling
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The engine incorporates Tax Deducted at Source (TDS) flags, computing post-tax maturity proceeds to prevent overstated liquidity estimates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
