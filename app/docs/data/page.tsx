import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/data",
  },
  title: "Data Export & Portability | Temporal Docs",
  description: "Universal data portability and exports in Temporal: RFC 4180 CSV lexer, delimiter entropy detection, and universal SQLite schema.",
  openGraph: { images: ["/og/docs-data.png"] },
  twitter: { images: ["/og/docs-data.png"] },
};

export default function DataDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [05] Data Sovereignty
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Your Data. Your Control.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          RFC 4180 lexer &middot; Delimiter entropy detector &middot; Universal portability specification
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Exporting for External Analysis
            </h3>
            <p className="leading-relaxed text-gray-400">
              Whether filing taxes, conducting deep quantitative analysis in Python/Excel,
              or safeguarding your records, Temporal provides full-fidelity exports in standard{" "}
              <strong className="font-semibold text-gray-200">CSV</strong>,{" "}
              <strong className="font-semibold text-gray-200">JSON</strong>, and authenticated{" "}
              <strong className="font-semibold text-gray-200">.zenkit</strong> envelopes.
              We believe that if an app makes it hard to leave with your raw data, you do not truly own your ledger.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Offline Data Pipeline
            </h3>
            <p className="leading-relaxed text-gray-400">
              Export pipelines operate completely on-device. Datasets with tens of thousands of rows
              are compiled, serialized, and formatted directly into device memory without sending
              a single byte to external servers.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The Auditor&apos;s Tax Package
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;My tax accountant requested a complete FIFO capital gains breakdown and journal audit for the financial year.&quot;
              Instead of manually compiling broker statements, generate a filtered CSV export of your `holding_lots` and audited transactions in one tap.
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
            Ingestion &amp; Export Specifications
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                RFC 4180 Lexer &amp; Delimiter Entropy Detector
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal incorporates a rigorous RFC 4180 streaming lexer. For messy third-party statements, a Delimiter Entropy Detector measures frequency variance across potential delimiters (comma, semicolon, tab, pipe) to deduce the exact column structure before tokenization.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Universal Database Schema Portability
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The database schema is engineered according to the Universal Portability Blueprint. The 13 core relational tables and fixed-point data types seamlessly serialize into desktop SQLite (Tauri/Electron) and browser WebAssembly SQLite (Next.js OPFS WASM) with zero schema drift.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Native File System Handshake
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Exports utilize native OS sharing intents via `expo-sharing`. Encrypted payloads are generated into transient sandbox directories and scrubbed immediately after file delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
