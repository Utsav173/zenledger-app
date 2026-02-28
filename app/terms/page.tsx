import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Temporal",
  description:
    "Terms and conditions for utilizing the Temporal application surface.",
};

const strictSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions - Temporal",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd schema={strictSchema} />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-24">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            System Legal
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            LAST UPDATED: FEBRUARY 2026 // SYSTEM V1.1
          </p>
        </section>

        <article className="space-y-16 font-sans leading-relaxed font-light text-[#888888]">
          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to Temporal ("we", "our", or "us"). By downloading,
              accessing, or using the Temporal mobile application and website,
              you agree to be bound by these Terms and Conditions. Temporal is a
              personal finance tracker and investment portfolio management
              application designed for individuals to track their offline and
              synced financial records.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              2. Use of Service
            </h2>
            <p className="mb-4">
              Temporal is provided as a tool for personal financial
              organization. You agree not to misuse the service, attempt to
              reverse-engineer the proprietary code, or use it for any illegal
              activities. The accuracy of the financial tracking completely
              depends on the data you manually input or sync.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              3. Pro Upgrades & Payments
            </h2>
            <p className="mb-4">
              Temporal offers a "PRO" upgrade, which unlocks premium features
              such as unlimited transaction history, advanced analytics, and
              data export. This is a one-time payment processed securely
              securely via third-party processors (e.g., Razorpay, Stripe). You
              agree to provide current, complete, and accurate purchase
              information for all purchases made.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              4. User Data & Security
            </h2>
            <p className="mb-4">
              Temporal explicitly prioritizes local-first architecture. Any data
              synced to our cloud infrastructure (via Convex) is encrypted and
              strictly tied to your authenticated account. For total offline
              privacy, users may restrict network access and use the app in an
              isolation mode. We are not liable for device loss resulting in
              data loss if cloud sync was intentionally disabled by you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              5. Financial Advice Disclaimer
            </h2>
            <p className="mb-4">
              Temporal is strictly a software tool. We do not provide financial,
              investment, legal, or tax advice. Any market data (such as stock
              or mutual fund prices) provided within the app is sourced from
              public feeds (e.g., Yahoo Finance) and is for informational
              purposes only. You should always consult a certified financial
              planner before making investment decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b border-[#333333] pb-2 font-mono text-sm tracking-widest text-white uppercase">
              6. Intellectual Property
            </h2>
            <p className="mb-4">
              All content, design, aesthetic elements ("Utilitarian Brutalism"),
              code, and algorithms are the exclusive property of Temporal and
              its creator. You may not distribute, modify, or reproduce the
              application or its assets without explicit permission.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
