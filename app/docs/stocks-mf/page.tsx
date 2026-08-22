import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stocks & Mutual Funds | Temporal Docs",
  description: "Track stocks and mutual funds in Temporal with holdings management and portfolio insights, fully offline.",
};

export default function StocksMfDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.1] Market Assets
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Stocks & Mutual Funds.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Deep analytics for your equity and debt portfolios.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Unified Portfolio Management
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal allows you to track both Stocks and Mutual Funds in a
              single interface. By adding your 'Lots' (purchase history), the
              app automatically handles price updates and computes your weighted
              gains.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Market Watchlists
            </h3>
            <p className="leading-relaxed text-gray-400">
              Beyond tracking what you own, Temporal provides a high-density{" "}
              <strong className="font-semibold text-gray-200">Watchlist</strong>{" "}
              engine. Designed with "Financial Brutalism" in mind, it allows you
              to monitor Indian Equities (NIFTY 50) and Mutual Funds with
              zero-latency price updates and sparkline visualizations.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Market Sentiment
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I want to track the NIFTY Next 50 but I'm not ready to buy yet."
              By adding symbols like `HDFCBANK.NS` to your watchlist, you can
              keep a pulse on the market without cluttering your actual
              portfolio.
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
            Market Data Integration
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Market Price Feed
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Market quotes for NSE/BSE symbols are sourced through a
                lightweight price-feed service covering 1-minute to 1-day
                intervals — no brokerage login or user-side authentication
                required. Quotes are cached locally so your portfolio view
                stays fast and works with previously fetched data even offline.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                NAV Fetching Engine
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Mutual Fund NAVs are sourced via AMFI APIs. All data is stored
                locally in the `nav_cache` table, utilizing a delayed-focus
                loading strategy to ensure the UI remains flicker-free during
                heavy data refreshes.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                XIRR Precision
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The XIRR calculation iterates until the NPV is less than 0.0001,
                providing high-precision return metrics. All calculation logic
                is contained within the `src/lib/investmentCalc.ts` module.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
