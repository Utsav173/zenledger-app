import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wealth Tracking & Performance | Temporal Docs",
  description: "Portfolio performance tracking in Temporal: Newton-Raphson XIRR solver, Herfindahl concentration index, and real-time asset telemetry.",
  openGraph: { images: ["/og/docs-investments.png"] },
  twitter: { images: ["/og/docs-investments.png"] },
};

export default function InvestmentsDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03] Wealth Tracking
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Wealth Tracking &amp; Performance.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Newton-Raphson XIRR &middot; Herfindahl concentration &middot; Pareto telemetry
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Multi-Asset Portfolio Telemetry
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal aggregates diverse asset classes—Equities, AMFI Mutual Funds, Spot Bullion Gold, and Fixed Deposits—into a single mathematical dashboard.
              Gain instant clarity into your actual capital allocation and portfolio beta without relying on multiple disjointed broker interfaces.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Why XIRR Over Simple Absolute Gain?
            </h3>
            <p className="leading-relaxed text-gray-400">
              Absolute percentage gains hide the drag of cash flow timing. Extended Internal Rate of Return (XIRR) computes the exact annualized velocity of your capital across recurring SIPs, variable lump sums, and partial profit withdrawals.
              Temporal solves XIRR directly on your device CPU with zero data transmission.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The SIP Reality Check
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I have invested in 8 different mutual funds and 15 stocks over 4 years. How do I know if I&apos;m truly beating the index net of drag?&quot;
              Temporal&apos;s Newton-Raphson solver calculates exact annualized XIRR across every lot, while Herfindahl concentration telemetry alerts you if 80% of your gains depend on just two positions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-dashed border-white/20 bg-black/40 p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/20 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Mathematical Quant Telemetry
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Newton-Raphson XIRR Engine (10⁻⁷ Convergence)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Solves for discount rate r such that NPV = &Sigma; [C_i / (1 + r)^((d_i - d_0) / 365)] = 0. Uses derivative f&apos;(r) iterations with strict boundary guards r &isin; [-0.99, 100.0] and a 10⁻⁷ convergence limit. Handles irregular cash flows, corporate dividends, and multi-year withdrawals accurately.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Herfindahl-Hirschman Index (HHI) Concentration
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Measures concentration risk across positions and sectors: HHI = &Sigma; s_i&sup2; (where s_i is percentage allocation). Alerts when HHI exceeds 2,500, indicating highly concentrated idiosyncratic risk.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Pareto 80/20 Distribution Analytics
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Computes cumulative capital distribution to reveal whether 20% of your holdings account for 80% of your capital or volatility, facilitating institutional-grade rebalancing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
