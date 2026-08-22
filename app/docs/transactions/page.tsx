import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Transaction Engine | Temporal Docs",
  description: "How Temporal's transaction engine works: fast entry, AI-powered statement parsing, and high-performance history.",
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
          Precision entry. Instant feedback. Total clarity.
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
              Temporal handles three primary transaction types.{" "}
              <strong className="font-semibold text-gray-200">Expenses</strong>{" "}
              reduce your net worth,{" "}
              <strong className="font-semibold text-gray-200">Income</strong>{" "}
              increases it, and{" "}
              <strong className="font-semibold text-gray-200">Transfers</strong>{" "}
              move money between your Vaults without affecting your total
              wealth. Using these correctly ensures your analytics remain
              accurate.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              AI-Powered Extraction
            </h3>
            <p className="leading-relaxed text-gray-400">
              Manual entry is the bottleneck of financial clarity. Temporal
              solves this with an{" "}
              <strong className="font-semibold text-gray-200">AI-First</strong>{" "}
              discovery engine. Simply upload a PDF of your bank statement, and
              the system automatically identifies transactions, normalizes
              merchant names, and suggests categories.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The Monthly Bulk Sync
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I have 200 transactions this month from three different banks."
              Instead of typing them one-by-one, you can drop your PDFs into the
              Discovery Pass. The AI will refine the "shattered" rows of the PDF
              into a clean ledger, saving you hours of manual work.
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
            Extraction Intelligence
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Discovery & Refinement Model
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal employs a two-stage extraction process. First, a
                programmatic parser identifies potential transaction blocks in
                the PDF. Second, the on-device Gemma LLM performs a "Refinement Pass" to
                heal OCR errors and normalize chaotic merchant strings into
                human-readable entities.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Privacy-Preserving Inference
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                By default, AI inference runs entirely on your device using the
                bundled Gemma model — your PDF never leaves the phone. If you
                opt into a cloud provider with your own API key, Temporal still
                does not store your PDF or extracted data on any server; only
                the raw text chunks required for extraction are processed, and
                the structured result is returned directly to your device.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Client-Side UUIDs
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                To prevent collisions and ensure offline reliability, every
                transaction—whether manual or AI-generated—is assigned a Version
                4 UUID upon creation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
