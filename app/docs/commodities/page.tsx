import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/commodities",
  },
  title: "Gold & Commodities Tracking | Temporal Docs",
  description: "Track physical bullion, digital gold, and sovereign bonds in Temporal with live spot pricing, karat purity adjustments, and making charge cost basis invariants.",
  openGraph: { images: ["/og/docs-commodities.png"] },
  twitter: { images: ["/og/docs-commodities.png"] },
};

export default function CommoditiesDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [02.2] Hard Assets
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Gold & Commodities.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Physical bullion, Sovereign Gold Bonds, and digital gold with real-time spot valuation and karat purity scaling.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The Sovereign Investor Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Hard Asset Precision: Karat Purity Scaling
            </h3>
            <p className="leading-relaxed text-gray-400">
              Gold is rarely held as pure 24K bullion alone. Temporal provides native support for tracking diverse physical forms—from 24K bullion bars and coins to 22K (916 hallmark) and 18K jewelry, Sovereign Gold Bonds (SGBs), and tokenized gold (PAXG). By isolating karat purity (K = Karat / 24), your liquidation value dynamically reflects real market scrap spot rates rather than generic jewelry retail quotes.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Making Charge Capitalization vs. Market Liquidation
            </h3>
            <p className="leading-relaxed text-gray-400">
              Traditional portfolio tools either ignore making charges completely or inflate your asset value by treating labor charges as bullion weight. Temporal enforces a strict separation: making charges, wastage fees, and purity premiums are recorded into your <strong className="font-semibold text-gray-200">Total Invested Cost Basis</strong>, while <strong className="font-semibold text-gray-200">Current Market Value</strong> is calculated strictly against net bullion weight and live spot rate. This delivers an honest, unvarnished view of your real break-even hurdle.
            </p>
          </div>

          <div className="border border-white/10 bg-black p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Generational Jewelry & Bullion Allocation
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I inherited physical family gold across various purities and hold digital gold as an inflation hedge." In Temporal, each piece is recorded with net gram weight (scaled to $10,000\times$ fixed-point precision), purity karat, and purchase date. Temporal streams spot bullion price updates offline-first, updating your consolidated net worth without exposing your physical holdings to external networks.
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
            Bullion Valuation Engine & Schema
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Spot Feed Architecture & Troy Ounce Normalization
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal consumes keyless, institutional spot bullion quotes via Paxos Gold (PAXG) on CoinGecko, representing 1 fine troy ounce (31.1034768 grams) of London Good Delivery gold. Spot rates are converted to local fiat currency (INR/USD/EUR) and cached in SQLite with a 1-hour TTL, enabling complete offline functionality:
              </p>
              <div className="mt-3 border border-white/10 bg-[#0a0a0a] p-4 font-mono text-[11px] text-gray-300">
                SpotPricePerGram(24K) = SpotPricePerTroyOunce / 31.1034768<br />
                EffectivePricePerGram(K) = SpotPricePerGram(24K) × (Karat / 24)<br />
                CurrentValue = Math.round((ScaledGrams × EffectivePricePerGram(K)) / 10000)
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Fixed-Point Storage Invariant
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                To prevent floating-point accumulation drift over fractional precious metal weights, all gram quantities are stored in SQLite scaled by 10,000× (e.g., 15.5432 grams → 155432). Financial prices and making charges are stored in integer cents/paise scaled by 100×, maintaining absolute integer precision across all portfolio aggregations.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Database Schema (`holdings`)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Commodities are persisted in the normalized `holdings` table with `assetType = 'commodity'`, accompanied by metadata fields for purity, making charges, and physical location notes encrypted at rest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
