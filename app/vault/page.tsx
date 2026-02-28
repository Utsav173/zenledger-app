import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Vault | Temporal",
  description:
    "Biometric and application-level security features within Temporal.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Temporal Biometrically Locked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Within Temporal PRO, the user can enforce hardware-level FaceID/TouchID locks to prevent any unauthorized ledger access.",
      },
    },
  ],
};

export default function VaultPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-32">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            System Security
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            The Encrypted Vault
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            You own your data. We have designed the system so that you do not
            need to trust us.
          </p>
        </section>

        <section className="group relative mb-24 border-l-4 border-white py-12 pl-8">
          <div className="absolute top-0 left-[-4px] h-[4px] w-8 bg-white"></div>
          <span className="mb-4 block font-mono text-xs text-[#888888] transition-none group-hover:text-white">
            SEC_01 // BIOMETRICS
          </span>
          <h2 className="mb-6 font-serif text-2xl italic">
            Device-Level Defense
          </h2>
          <div className="space-y-6 font-sans leading-relaxed font-light text-[#888888]">
            <p>
              When the Biometric Lock is armed, Temporal completely shrouds the
              application state upon leaving memory. Restoring the application
              instance requires physical device biometrics via the host OS
              secure enclave.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
