export default function CommoditiesDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03.2] Hard Assets
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Gold & Commodities.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Track your physical and digital bullion with precision.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Hard Asset Valuation
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal supports tracking Gold, Silver, and other physical
              assets. You can record the{" "}
              <strong className="font-semibold text-gray-200">
                Purity (e.g., 22k vs 24k)
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-gray-200">
                Making Charges
              </strong>
              , giving you a more accurate "Sell Value" compared to standard
              market spot prices.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Wealth Safeguard
            </h3>
            <p className="leading-relaxed text-gray-400">
              Commodities often act as a hedge against inflation. By including
              them in your Net Worth calculation, you get a full picture of your
              "True Wealth," including assets that aren't sitting in a bank
              account.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Jewelry Inventory
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I have family gold that I want to track but not sell." You can
              add these as holdings with a 'Note' describing the items. Temporal
              will track their value growth over decades without you needing to
              do anything.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Asset Logic
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Live Price Feeds
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Commodity prices are fetched via specialized feeds that provide
                global spot prices for Gold and Silver. This is then adjusted
                locally based on the purity metric you've specified for the
                holding.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Making Charge Amortization
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                While the market value ignores making charges, Temporal stores
                them as part of your `totalInvested` cost basis, allowing for a
                more realistic calculation of your true profit/loss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
