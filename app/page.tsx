import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import { AIExtractionDemo } from "@/components/AIExtractionDemo";
import { LedgerHorizonPreview } from "@/components/LedgerHorizonPreview";
import { FAQAccordion } from "@/components/FAQAccordion";

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
  { value: "60fps", label: "Scroll Performance" },
  { value: "On-Device", label: "AI Processing" },
  { value: "SQLite", label: "Local Database" },
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
      "Not by default. Temporal runs an on-device AI pipeline (LiteRT + Gemma LLM). All optical character recognition (OCR) and natural language processing happen directly on your device's NPU/CPU, and your financial data never touches our servers. Cloud AI providers are strictly opt-in — you supply your own API key.",
  },
  {
    question: "How does it handle large datasets?",
    answer:
      "The app employs an offline-first SQLite repository pattern combined with high-performance list virtualization (@legendapp/list). It is engineered to handle decades of transaction history with instantaneous load times.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "Since we don't store your data on our servers, you are responsible for your backups. Temporal provides an encrypted Data Export feature, allowing you to restore your entire financial history on a new device instantly.",
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

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-20 pb-12 md:pt-32 md:pb-24">
          {/* Overline */}
          <div
            className="mb-8 animate-fade-in font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase leading-relaxed md:leading-normal max-w-sm md:max-w-none"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            [ SYSTEM: TEMPORAL v2.5 ] — [ PIPELINE: GEMMA / LITERT ] — [ MODE:
            OFFLINE ]
          </div>

          {/* Headline */}
          <div className="relative">
            {/* Structural Brackets */}
            <div className="absolute -top-12 -left-12 font-mono text-gray-800 text-4xl hidden lg:block">⌜</div>
            <div className="absolute -bottom-12 -right-12 font-mono text-gray-800 text-4xl hidden lg:block">⌟</div>

            <h1
              className="mb-8 max-w-6xl animate-slide-up font-serif text-fluid-h1 tracking-tight italic"
              style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            >
              Financial
              <br />
              <span className="relative">
                Intelligence.
                <span className="absolute bottom-4 left-0 h-[4px] w-full bg-white/10 -z-10" />
              </span>
              <span className="block text-gray-500 mt-3 md:mt-0 text-2xl sm:text-4xl md:text-5xl not-italic font-mono tracking-tighter opacity-50 uppercase">
                Autonomous & Local.
              </span>
            </h1>
          </div>

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
            className="mb-12 md:mb-20 flex animate-fade-in flex-col sm:flex-row gap-4"
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
            <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 md:grid-cols-4 gap-x-4">
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
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  SYSTEM_INTELLIGENCE - Luxe Brutalism Editorial                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#050505] border-y border-white/5">
        {/* Cinematic Ambient Glow & Noise */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_0%,#10b98115,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Top Editorial Header */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 md:items-end justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-emerald-500/30 bg-emerald-500/5 mb-8 accent-shimmer relative overflow-hidden">
                 <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] tracking-[0.4em] text-emerald-500 font-bold uppercase relative z-10">SYSTEM_INTELLIGENCE</span>
              </div>
              <h2 className="text-fluid-h2 text-white font-black leading-[0.9] tracking-tighter">
                BEYOND SIMPLE<br/>
                <span className="text-emerald-500 italic font-serif pr-4">AUTOMATION.</span>
              </h2>
            </div>
            <div className="max-w-sm md:pb-4">
                <p className="text-gray-500 text-sm font-mono leading-relaxed uppercase tracking-[0.05em] border-l border-emerald-500/30 pl-4">
                  Temporal doesn't just read data; it understands it. Proprietary neural engines reconstruct shattered bank statements into a cohesive financial narrative.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left Offset Slabs */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8 pt-0 lg:pt-16">
              <div className="manifesto-slab group p-6 sm:p-8 brutalist-luxe hover:border-emerald-500/40 transition-all duration-700">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                      01
                    </div>
                    <div className="text-[9px] font-bold tracking-widest text-emerald-500/40 uppercase">
                       [ ENCRYPTED ]
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">On-Device Neural Extraction</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Every document is processed locally using a optimized LLM architecture. Your financial DNA never leaves your hardware.
                    </p>
                  </div>
                </div>
              </div>

              <div className="manifesto-slab group p-6 sm:p-8 brutalist-luxe hover:border-amber-500/40 transition-all duration-700 lg:-translate-x-8">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-amber-500 group-hover:bg-amber-500/10 transition-colors">
                      02
                    </div>
                    <div className="text-[9px] font-bold tracking-widest text-amber-500/40 uppercase">
                       [ MULTI-VECTOR ]
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Multi-Vector Normalization</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Unified tracking across NIFTY 50, NASDAQ, and Private Equity. We handle the currency fluctuations and tax implications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cinematic Demo */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl rounded-full opacity-50 pointer-events-none" />
              <AIExtractionDemo />
              
              <div className="absolute -bottom-4 right-2 sm:right-4 md:-bottom-6 md:-right-8 p-[1px] bg-gradient-to-br from-amber-500/20 to-transparent shadow-2xl z-20 brutalist-luxe">
                <div className="bg-[#050505] p-2 sm:p-3 border border-white/5 flex flex-col gap-1 sm:gap-2 min-w-[160px] sm:min-w-[200px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-amber-500 uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                      </span>
                      ANALYSIS_ENGINE
                    </div>
                    <span className="text-[8px] font-mono text-white/20">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-1">
                    <span className="text-[8px] font-mono text-white/30 tracking-widest">STATE:</span>
                    <span className="text-[8px] font-mono text-white/70 tracking-widest">ACTIVE_0X42</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  TECHNICAL SHOWCASE - The Horizon Projection                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-40 bg-black relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-5 mb-10 lg:mb-0">
               <div className="text-[10px] tracking-[0.5em] text-amber-500 font-bold uppercase mb-8">HORIZON_PROJECTION</div>
               <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter mb-8">
                 PREDICTIVE<br/>WEALTH.
               </h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Stop looking at where you were. Start engineering where you will be. Our horizon engine uses XIRR-weighted simulations to project your wealth trajectory — transparent math you can audit, not a black box.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk" className="px-8 py-4 bg-white text-black font-black hover:bg-amber-500 transition-all duration-500 uppercase tracking-widest text-xs text-center">
                    DOWNLOAD_APK
                  </a>
                  <Link href="/docs" className="px-8 py-4 border border-white/20 text-white font-black hover:bg-white/5 transition-all duration-500 uppercase tracking-widest text-xs text-center">
                    READ_DOCS
                  </Link>
                </div>
            </div>
            <div className="lg:col-span-7">
               <LedgerHorizonPreview />
            </div>
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
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            [ PHILOSOPHY ]
          </div>
          <Link href="/manifesto" className="group block">
            <blockquote className="font-serif text-3xl leading-snug italic text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-4xl md:text-5xl">
              &ldquo;Your financial intelligence should not require surrendering
              your data. True innovation lies in running the models locally.&rdquo;
            </blockquote>
            <div className="mt-8 font-mono text-xs tracking-widest text-gray-600 uppercase transition-colors duration-300 group-hover:text-gray-400">
              — Read The Temporal Manifesto →
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  FAQ — Interactive accordion-style with Schema                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-white/20 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-16">
            <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              [ KNOWLEDGE BASE ]
            </div>
            <h2 className="font-serif text-4xl italic text-white sm:text-5xl">
              System Queries.
            </h2>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />

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
