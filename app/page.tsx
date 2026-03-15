import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Temporal | Local-First Wealth Tracker & Net Worth Tracker 2026",
  description:
    "Master your net worth with Temporal. A privacy-focused, local-first personal finance app with zero cloud dependencies. Track Stocks, Mutual Funds, and Hard Assets securely and offline.",
  keywords: [
    "local-first finance",
    "privacy wealth tracker",
    "net worth app 2026",
    "offline investment tracker",
    "secure portfolio manager",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Temporal",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "INR",
  },
  description:
    "A high-performance offline ledger and investment portfolio tracker.",
};

const STATS = [
  { value: "0%", label: "Cloud Exposure" },
  { value: "100%", label: "Local Processing" },
  { value: "AES-256", label: "Encrypted Core" },
  { value: "SQLite", label: "Direct File Engine" },
];

const FEATURES = [
  {
    id: "01",
    title: "Local-First Sovereignty",
    description:
      "Your financial ledger lives entirely on your device. Powered by a high-performance SQLite engine, ensuring true data ownership, zero latency, and absolute privacy.",
    accent: "border-l-emerald-400",
  },
  {
    id: "02",
    title: "Investment Portfolios",
    description:
      "Aggregate diverse asset classes into a singular view. The system processes market data local-side to calculate real-time XIRR, CAGR, and total return metrics.",
    accent: "border-l-sky-400",
  },
  {
    id: "03",
    title: "Zero Cloud Dependency",
    description:
      "No syncing delays. No third-party servers reading your transactions. Fast, offline-first architecture designed for maximum security and absolute privacy.",
    accent: "border-l-amber-400",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is my data shared with any servers?",
    answer:
      "Absolutely not. Temporal is built on a Local-First architecture. Every transaction, category, and investment lot is stored in an encrypted SQLite database directly on your device. We have zero cloud dependencies for core functionality.",
  },
  {
    question: "How does it work without bank linking?",
    answer:
      "We prioritize privacy over convenience. Temporal uses manual entry and file imports to track your wealth. This eliminates the need for intrusive bank API access, ensuring your account balances remain your business only.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "Since we don't store your data on our servers, you are responsible for your backups. Temporal provides a Recovery Kit and Data Export feature, allowing you to restore your entire financial history on a new device instantly.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  HERO — Full-viewport cinematic entrance                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden border-b border-white/20">
        {/* Atmospheric glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-white/[0.02] blur-[100px]" />
        </div>

        {/* Scrolling marquee background texture */}
        <div className="pointer-events-none absolute top-1/2 left-0 z-[0] w-full -translate-y-1/2 overflow-hidden opacity-[0.04] select-none">
          <div className="animate-marquee font-mono text-[8rem] md:text-[12rem] font-black tracking-tighter whitespace-nowrap text-white">
            LOCAL-FIRST — ZERO DEPENDENCES — SECURE ENCLAVE — PURE DATA —
            LOCAL-FIRST — ZERO DEPENDENCES — SECURE ENCLAVE — PURE DATA —
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
          {/* Overline */}
          <div
            className="mb-8 animate-fade-in font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-relaxed md:leading-normal max-w-sm md:max-w-none"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            [ SYSTEM: TEMPORAL v2.0 ] — [ MODE: OFFLINE ] — [ ENCRYPTION:
            AES-256 ]
          </div>

          {/* Headline */}
          <h1
            className="mb-8 max-w-5xl animate-slide-up font-serif text-5xl leading-[0.95] tracking-tight italic sm:text-7xl md:text-8xl lg:text-[9rem]"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            Wealth is
            <br />
            predictable.
            <span className="block text-gray-500 mt-2 md:mt-0">If you track it.</span>
          </h1>

          {/* Subline */}
          <p
            className="mb-16 max-w-lg animate-fade-in font-mono text-xs leading-loose tracking-[0.15em] text-gray-400 uppercase sm:text-sm"
            style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
          >
            A secure, local-first personal finance and investment tracking
            application. Your data never leaves your device.
          </p>

          {/* CTA Row */}
          <div
            className="mb-20 flex animate-fade-in flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
          >
            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="btn btn-primary group relative overflow-hidden px-8 py-4 text-sm"
            >
              <span className="relative z-10">→ DOWNLOAD APK</span>
            </a>
            <Link
              href="/docs"
              className="btn btn-outline px-8 py-4 text-sm"
            >
              VIEW DOCUMENTATION
            </Link>
          </div>

          {/* Stats Band */}
          <div
            className="animate-fade-in border-t border-white/10 pt-10"
            style={{ animationDelay: "0.9s", animationFillMode: "backwards" }}
          >
            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-serif text-3xl italic text-white transition-colors duration-300 group-hover:text-gray-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.15em] text-gray-600 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FEATURES — Asymmetric grid with colored accents                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative border-b border-white/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                [ CAPABILITIES ]
              </div>
              <h2 className="max-w-md font-serif text-4xl italic text-white sm:text-5xl">
                Built for those who
                <br />
                demand control.
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] tracking-widest text-gray-600 md:block">
              03 MODULES
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-crosshair border-l-2 ${feature.accent} bg-black p-10 transition-all duration-300 hover:bg-white/[0.04]`}
              >
                <div className="mb-6 font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-400">
                  [{feature.id}]
                </div>
                <h3 className="mb-4 font-serif text-2xl italic text-white transition-colors duration-300 group-hover:text-white sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  PHILOSOPHY — Full-width statement section                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-white/20 py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            [ PHILOSOPHY ]
          </div>
          <blockquote className="font-serif text-3xl leading-snug italic text-gray-300 sm:text-4xl md:text-5xl">
            &ldquo;Your financial data is sovereign territory. No corporation,
            no cloud, no algorithm should have access to it without your
            explicit consent.&rdquo;
          </blockquote>
          <div className="mt-8 font-mono text-xs tracking-widest text-gray-600 uppercase">
            — The Temporal Manifesto
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FAQ — Interactive accordion-style with Schema                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-b border-white/20 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              [ FAQ ]
            </div>
            <h2 className="font-serif text-4xl italic text-white sm:text-5xl">
              Common questions.
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="group py-8">
                <div className="flex items-start gap-6">
                  <span className="mt-1 shrink-0 font-mono text-[10px] tracking-widest text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-4 font-sans text-lg font-semibold text-white sm:text-xl">
                      {item.question}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* PRO Pricing */}
      <PricingSection />
    </>
  );
}
