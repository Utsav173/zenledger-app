import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import { AIExtractionDemo } from "@/components/AIExtractionDemo";
import { LedgerHorizonPreview } from "@/components/LedgerHorizonPreview";

export const metadata: Metadata = {
  title: "Temporal | AI-Powered Financial Intelligence Ecosystem",
  description:
    "Master your net worth with Temporal. A privacy-focused, local-first personal finance app powered by on-device AI (Gemma LLM). Track Stocks, Mutual Funds, and Hard Assets securely and offline.",
  keywords: [
    "local-first finance",
    "privacy wealth tracker",
    "net worth app 2026",
    "offline investment tracker",
    "secure portfolio manager",
    "on-device AI",
    "Gemma LLM finance",
    "Ledger Horizon",
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
    "A high-performance offline ledger and investment portfolio tracker with on-device AI intelligence.",
};

const STATS = [
  { value: "0%", label: "Cloud Exposure" },
  { value: "60fps", label: "Virtualization" },
  { value: "LiteRT", label: "NPU Pipeline" },
  { value: "SQLite", label: "Direct Engine" },
];

const FEATURES = [
  {
    id: "01",
    title: "On-Device Intelligence",
    description:
      "Powered by Google's Gemma LLM via LiteRT. The system ingests bank statements and receipts locally, parsing complex unstructured text into precise, categorized JSON—without ever sending your data to the cloud.",
    accent: "border-l-emerald-400",
  },
  {
    id: "02",
    title: "High-Density Virtualization",
    description:
      "Built on @legendapp/list for flawless 60fps performance. Render thousands of transaction records instantly with optimized memory management and zero scroll lag.",
    accent: "border-l-sky-400",
  },
  {
    id: "03",
    title: "Ledger Horizon",
    description:
      "Visualize your financial trajectory with precision. Proprietary ridge-plot modeling renders your wealth accumulation as a dynamic, high-fidelity landscape.",
    accent: "border-l-amber-400",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is my data sent to an AI server?",
    answer:
      "Absolutely not. Temporal utilizes an on-device AI pipeline (LiteRT + Gemma LLM). All optical character recognition (OCR) and natural language processing happen directly on your device's NPU/CPU. Your financial data never touches an external server.",
  },
  {
    question: "How does it handle large datasets?",
    answer:
      "The app employs an offline-first SQLite repository pattern combined with high-performance list virtualization (@legendapp/list). It is engineered to handle decades of transaction history with instantaneous load times.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "Since we don't store your data on our servers, you are responsible for your backups. Temporal provides an encrypted Data Export feature, allowing you to restore your entire financial history and AI learning models on a new device instantly.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  HERO — Full-viewport cinematic entrance                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden border-b-2 border-white">
        {/* Atmospheric glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-white/[0.02] blur-[100px]" />
        </div>

        {/* Scrolling marquee background texture */}
        <div className="pointer-events-none absolute top-1/2 left-0 z-[0] w-full -translate-y-1/2 overflow-hidden opacity-[0.04] select-none">
          <div className="animate-marquee font-mono text-[8rem] md:text-[12rem] font-black tracking-tighter whitespace-nowrap text-white">
            FINANCIAL INTELLIGENCE — ON-DEVICE LLM — 60FPS VIRTUALIZATION —
            FINANCIAL INTELLIGENCE — ON-DEVICE LLM — 60FPS VIRTUALIZATION —
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
          {/* Overline */}
          <div
            className="mb-8 animate-fade-in font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-relaxed md:leading-normal max-w-sm md:max-w-none"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            [ SYSTEM: TEMPORAL v2.5 ] — [ PIPELINE: GEMMA / LITERT ] — [ MODE:
            OFFLINE ]
          </div>

          {/* Headline */}
          <h1
            className="mb-8 max-w-5xl animate-slide-up font-serif text-5xl leading-[0.95] tracking-tight italic sm:text-7xl md:text-8xl lg:text-[9rem]"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            Financial
            <br />
            Intelligence.
            <span className="block text-gray-500 mt-2 md:mt-0">
              Autonomous & Local.
            </span>
          </h1>

          {/* Subline */}
          <p
            className="mb-16 max-w-lg animate-fade-in font-mono text-xs leading-loose tracking-[0.15em] text-gray-400 uppercase sm:text-sm"
            style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
          >
            A high-performance ecosystem leveraging on-device LLMs and generative
            visualizations. True data sovereignty without compromise.
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
            <Link href="/docs" className="btn btn-outline px-8 py-4 text-sm">
              VIEW ARCHITECTURE
            </Link>
          </div>

          {/* Stats Band */}
          <div
            className="animate-fade-in border-t-2 border-white/20 pt-10"
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
      {/*  TECHNICAL SHOWCASE — Modules Grid                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative border-b-2 border-white/20 py-24 bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                [ ARCHITECTURE ]
              </div>
              <h2 className="max-w-md font-serif text-4xl italic text-white sm:text-5xl">
                Engineered for absolute control.
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] tracking-widest text-gray-600 md:block">
              03 MODULES
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-3 border-2 border-white/20">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-crosshair border-l-4 ${feature.accent} bg-black p-10 transition-all duration-300 hover:bg-white/[0.04]`}
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
      {/*  INTERACTIVE DEMOS                                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b-2 border-white/20 py-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-emerald-500 uppercase">
              [ ON-DEVICE INFERENCE ]
            </div>
            <AIExtractionDemo />
          </div>
          <div>
            <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-amber-500 uppercase">
              [ HORIZON MODELING ]
            </div>
            <LedgerHorizonPreview />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  PHILOSOPHY — Full-width statement section                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b-2 border-white/20 py-32 scanlines">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            [ PHILOSOPHY ]
          </div>
          <blockquote className="font-serif text-3xl leading-snug italic text-gray-300 sm:text-4xl md:text-5xl">
            &ldquo;Your financial intelligence should not require surrendering
            your data. True innovation lies in running the models locally.&rdquo;
          </blockquote>
          <div className="mt-8 font-mono text-xs tracking-widest text-gray-600 uppercase">
            — The Temporal Manifesto
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FAQ — Interactive accordion-style with Schema                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-white/20 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              [ KNOWLEDGE BASE ]
            </div>
            <h2 className="font-serif text-4xl italic text-white sm:text-5xl">
              System Queries.
            </h2>
          </div>

          <div className="divide-y-2 divide-white/20 border-t-2 border-white/20">
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
                    <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
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
