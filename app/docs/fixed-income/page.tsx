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
          Track your deposits, maturity dates, and compounding interest.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Stability Anchor
            </h3>
            <p className="leading-relaxed text-gray-400">
              Fixed Deposits (FDs) and Bonds are the backbone of many
              portfolios. Temporal lets you track interest rates, compounding
              frequency, and{" "}
              <strong className="font-semibold text-gray-200">
                Maturity Dates
              </strong>
              . This ensures you never miss a renewal deadline.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Projected Maturity Value
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal automatically calculates the projected value of your
              deposit at maturity based on the rates you provide. This helps you
              plan for future big-ticket expenses with confidence.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Laddering FDs
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I have 5 different FDs maturing at different times." By using the
              Maturity Date view, you can 'ladder' your income, ensuring you
              always have liquidity when you need it while maximizing interest
              rates.
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
            Compounding Logic
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Accumulation Algorithm
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal supports Monthly, Quarterly, and Yearly compounding
                models. We calculate the accumulated interest using the standard
                compound interest formula, adjusted daily to give you a "Current
                Value" estimate.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                TDS Deductions
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The schema includes flags for TDS (Tax Deducted at Source),
                allowing the system to subtract projected tax liabilities from
                your net-of-tax maturity value for more realistic planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
