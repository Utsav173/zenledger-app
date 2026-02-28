import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Temporal",
  description: "Privacy policy detailing local data sovereignty on Temporal.",
};

const strictSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - Temporal",
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd schema={strictSchema} />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-24">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            System Legal
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            Privacy Policy
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            YOUR DATA. LOCAL-FIRST. ZERO TELEMETRY.
          </p>
        </section>

        <article className="space-y-16 font-sans leading-relaxed font-light text-[#888888]">
          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              1. Local Storage
            </h2>
            <p className="mb-4">
              Temporal uses an embedded SQLite database configured to operate
              local-side. By default, your ledger entries are entirely localized
              on your disk drive architecture. We do not transmit, analyze, or
              process your transactional ledgers for advertising vectors under
              any conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              2. Cloud Node Sync
            </h2>
            <p className="mb-4">
              When synced, we utilize Convex edge-networks to establish
              real-time redundancy arrays of your local states, protected via
              OAuth and asymmetric bindings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              3. Zero Third-Party Sharing
            </h2>
            <p className="mb-4">
              We flatly refuse all third-party data broker deals. Your private
              financial velocity is not for sale. Period.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
