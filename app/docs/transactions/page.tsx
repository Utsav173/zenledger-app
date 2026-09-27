import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Transaction Engine | Temporal Docs",
  description: "How Temporal's transaction engine works: Viterbi Trellis balance continuity solver, SpatialLattice KDE extraction, and fixed-point math.",
  openGraph: { images: ["/og/docs-transactions.png"] },
  twitter: { images: ["/og/docs-transactions.png"] },
};

export default function TransactionDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01.1] Ledger Mechanics
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          The Transaction Engine.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Viterbi Trellis solver &middot; [MATH_LOCK] continuity &middot; Fixed-point precision
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Expense vs Income vs Transfer
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal handles three primary transaction primitives.{" "}
              <strong className="font-semibold text-gray-200">Expenses</strong>{" "}
              reduce net worth,{" "}
              <strong className="font-semibold text-gray-200">Income</strong>{" "}
              increases it, and{" "}
              <strong className="font-semibold text-gray-200">Transfers</strong>{" "}
              execute balanced double-entry sweeps between Vaults without altering overall
              wealth. Enforcing the Transit Rail Peeling Invariant ensures transit protocols
              (UPI, IMPS, NEFT) in merchant narrations are never misclassified as transfers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Deterministic AI Statement Discovery
            </h3>
            <p className="leading-relaxed text-gray-400">
              Manual entry is the primary failure mode of personal finance. Temporal couples
              an on-device <strong className="font-semibold text-gray-200">SpatialLattice</strong> geometry parser
              with the <strong className="font-semibold text-gray-200">ViterbiBalanceSolver</strong>. Upload a bank statement PDF
              or scan a paper receipt: the system isolates transaction columns, validates balance continuity,
              and locks verified rows into your ledger with 0% cloud exposure.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The Multi-Page Bulk Reconciliation
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I have 300 transactions spread across a 24-page bank statement with scrambled same-day ordering.&quot;
              Instead of manually cross-checking balances, Temporal&apos;s Trellis solver calculates the exact forward and reverse
              state trajectory. Verified rows receive the emerald [MATH_LOCK] badge, giving you audit-grade certainty in seconds.
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
            Extraction &amp; Ledger Specifications
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Viterbi Trellis Balance Solver &amp; [MATH_LOCK]
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Solves balance continuity over candidate transaction sequences: Balance[t] = Balance[t-1] &plusmn; Amount[t] with an integer tolerance &epsilon; = 5 cents. Solves in both forward and reverse directions, picking the path with maximum verified rows (&ge; 90% confidence). Verified rows are stamped with immutable [MATH_LOCK] flags, preventing probabilistic model hallucination.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Fixed-Point Integer Scaling (Zero Float Drift)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal eliminates IEEE 754 binary floating-point errors by storing all fiat monetary values as 64-bit integers scaled by 100&times; (paise/cents). Quantities are scaled by 10,000&times; (4 decimal places). Consideration formula: amountCents = Math.round((scaledQuantity * pricePerUnitCents) / 10000).
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Transit Rail Peeling Invariant
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Narration strings are processed by the InformationEntropyDecomposer. Transit protocol markers (UPI, IMPS, NEFT, BBPS, POS, Razorpay, NACH) and reference UTR hashes are peeled as transport metadata, preventing merchant transactions from contaminating the &apos;cat_transfer&apos; double-entry category.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Universal Delimiter Entropy Parser
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                For CSV statements, an RFC 4180 lexer calculates delimiter entropy across comma, semicolon, tab, and pipe characters to auto-detect delimiters. Indian number formatting (lakhs/crores) and accounting parentheses are parsed with dedicated lexers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
