export default function CommoditiesDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.2] Hard Assets
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Gold & Commodities.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Track your physical and digital bullion with precision.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Hard Asset Valuation</h3>
            <p className="text-gray-400 leading-relaxed">
              Temporal supports tracking Gold, Silver, and other physical assets. You can record the <strong className="text-gray-200 font-semibold">Purity (e.g., 22k vs 24k)</strong> and <strong className="text-gray-200 font-semibold">Making Charges</strong>, giving you a more accurate "Sell Value" compared to standard market spot prices.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">The Wealth Safeguard</h3>
            <p className="text-gray-400 leading-relaxed">
              Commodities often act as a hedge against inflation. By including them in your Net Worth calculation, you get a full picture of your "True Wealth," including assets that aren't sitting in a bank account.
            </p>
          </div>

          <div className="p-8 border-l-2 border-white bg-white/3">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: Jewelry Inventory</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I have family gold that I want to track but not sell." You can add these as holdings with a 'Note' describing the items. Temporal will track their value growth over decades without you needing to do anything.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 border border-white/10 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">Asset Logic</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Live Price Feeds</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Commodity prices are fetched via specialized feeds that provide global spot prices for Gold and Silver. This is then adjusted locally based on the purity metric you've specified for the holding.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Making Charge Amortization</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                While the market value ignores making charges, Temporal stores them as part of your `totalInvested` cost basis, allowing for a more realistic calculation of your true profit/loss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
