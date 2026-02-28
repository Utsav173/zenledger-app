import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Temporal",
  description: "Temporal PRO refund policy conditions.",
};

const strictSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund Policy - Temporal",
};

export default function RefundsPage() {
  return (
    <>
      <JsonLd schema={strictSchema} />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-24">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            System Legal
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            Refund Policy
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            STRICT NON-REFUNDABLE TERMS FOR THE ₹49 PRO LICENSE.
          </p>
        </section>

        <article className="space-y-16 font-sans leading-relaxed font-light text-[#888888]">
          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              Non-Refundable Purchases
            </h2>
            <p className="mb-4">
              The Temporal PRO upgrade explicitly operates on a strictly
              non-refundable basis. Because the fee of ₹49 acts as an
              unrecoverable, one-time lifetime unlock mechanism that permanently
              rewrites local configuration arrays, we cannot confidently reverse
              access parameters post-checkout. All sales are final.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              Charge Dispute Logic
            </h2>
            <p className="mb-4">
              If an errant secondary charge event happens due to a gateway
              timeout loop or banking sync failure during the checkout protocol,
              notify us within 7 working protocols to review logs for genuine
              duplicate auth-drops. Normal dissatisfaction or buyer remorse is
              entirely excluded from refunds.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
