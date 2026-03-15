export default function InvestmentsDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [03] Wealth Tracking
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Wealth Tracking & Performance.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Move beyond simple balance tracking. Understand the true velocity of
          your investments.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Tracking Portfolio Growth
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal aggregates different asset classes—Stocks, Mutual Funds,
              Gold, and Fixed Income—into a unified portfolio view. This allows
              you to see your{" "}
              <strong className="font-semibold text-gray-200">
                Allocated Distribution
              </strong>{" "}
              in real-time, helping you identify if you are over-exposed to a
              particular risk.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Why XIRR vs Absolute Gain?
            </h3>
            <p className="leading-relaxed text-gray-400">
              Absolute gain tells you how much money you made. XIRR (Extended
              Internal Rate of Return) tells you how{" "}
              <em className="text-gray-300 italic">efficient</em> your capital
              was over time, accounting for different entry dates. In Temporal,
              we prioritize XIRR so you can compare your portfolio performance
              directly against benchmarks like the FD rate or Index Funds.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The SIP Tracker
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I invest ₹10,000 every month into an ELSS fund. How do I know if
              I'm actually beating inflation?" By logging each 'Lot' in
              Temporal, the system automatically calculates the compound annual
              growth rate of your systematic contributions.
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
            The Performance Engine
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                XIRR Algorithm
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal implements the Newton-Raphson method to solve for the
                discount rate that makes the net present value (NPV) of all
                transaction 'lots' zero. This calculation is performed entirely
                on your device's CPU, ensuring zero data leakage.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                NAV Caching Strategy
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Real-time market data is fetched via the Mutual Fund API and
                cached in the local `nav_cache` table. To respect API limits and
                battery life, NAVs are refreshed once every 24 hours or manually
                upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
