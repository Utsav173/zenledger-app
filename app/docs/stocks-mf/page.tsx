export default function StocksMfDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.1] Market Assets
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Stocks & Mutual Funds.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Deep analytics for your equity and debt portfolios.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Unified Portfolio Management</h3>
            <p className="text-gray-400 leading-relaxed">
              Temporal allows you to track both Stocks and Mutual Funds in a single interface. By adding your 'Lots' (purchase history), the app automatically handles price updates and computes your weighted gains.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Understanding Lot-Wise Performance</h3>
            <p className="text-gray-400 leading-relaxed">
              Every time you buy more shares of a stock or units of a fund, you create a new 'Lot'. Temporal tracks these individually, showing you which specific purchase is performing best. This is crucial for tax harvesting strategies.
            </p>
          </div>

          <div className="p-8 border border-white bg-white/5">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: Rebalancing</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "My portfolio is 80% small-cap stocks, and the market is volatile." By viewing your <strong className="text-gray-200 font-semibold">Asset Allocation</strong> chart, you can quickly identify where you need to trim positions or add to more stable fund classes.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 bg-[#111111] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">Market Data Integration</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">NAV Fetching Engine</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                 Mutual Fund NAVs are sourced via AMFI APIs, while Stock prices are tracked using Yahoo Finance symbols. The data is stored in the `nav_cache` table with a `fetchedAt` timestamp to ensure the UI doesn't display stale data.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">XIRR Precision</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                The XIRR calculation iterates until the NPV is less than 0.0001, providing high-precision return metrics. All calculation logic is contained within the `src/lib/investmentCalc.ts` module.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
