import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledger Engine | Temporal",
  description:
    "Understanding the underlying double-entry SQLite database of Temporal.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the ledger persist data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data is persisted instantly to the on-device SQLite instance. There is zero database lag and zero network latency.",
      },
    },
  ],
};

export default function LedgerPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-32">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            System Specifications
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            The Ledger Engine
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            Strictly typed, mathematically verifiable double-entry bookkeeping
            infrastructure.
          </p>
        </section>

        <section className="group relative mb-24 border-l-4 border-white py-12 pl-8">
          <div className="absolute top-0 left-[-4px] h-[4px] w-8 bg-white"></div>
          <span className="mb-4 block font-mono text-xs text-[#888888] transition-none group-hover:text-white">
            SPEC_01 // SPEED
          </span>
          <h2 className="mb-6 font-serif text-2xl italic">
            Zero-Latency Mutation
          </h2>
          <div className="space-y-6 font-sans leading-relaxed font-light text-[#888888]">
            <p>
              Because there are no network hops, creating a ledger entry takes
              less than 3 milliseconds. The application does not display generic
              loading spinners. Transactions happen instantly.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
