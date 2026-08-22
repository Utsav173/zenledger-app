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
              The Temporal PRO upgrade is a one-time ₹49 lifetime purchase, and
              all sales are final. Because the license is applied permanently to
              your local installation and grants access immediately, we are
              unable to reverse it after checkout.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              Duplicate Charges
            </h2>
            <p className="mb-4">
              If you were charged more than once due to a payment gateway
              timeout or error during checkout, contact us within 7 business
              days with your payment details and we will investigate and refund
              any genuine duplicate charge. Refunds are not offered for change
              of mind or buyer remorse.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
