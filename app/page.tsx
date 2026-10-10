import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import { AIExtractionDemo } from "@/components/AIExtractionDemo";
import { IntelligenceOrchestrationHub } from "@/components/IntelligenceOrchestrationHub";
import { MultiAssetPortfolioShowcase } from "@/components/MultiAssetPortfolioShowcase";
import { LedgerHorizonPreview } from "@/components/LedgerHorizonPreview";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SystemArchitectureInteractive } from "@/components/SystemArchitectureInteractive";
import { EcosystemRoadmap } from "@/components/EcosystemRoadmap";
import { MobileStickyDownloadBar } from "@/components/MobileStickyDownloadBar";
import { VideoLaunchShowcase } from "@/components/VideoLaunchShowcase";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com",
  },
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
    "Viterbi Trellis solver",
    "SpatialLattice KDE",
    "sub-35ms categorization",
    "Ledger Horizon",
    "deterministic financial OS",
    "LiteRT on-device LLM",
    "air-gapped bank statement parser",
    "Viterbi Trellis MATH_LOCK",
    "AMFI mutual fund tracker offline",
    "cognitive vector search",
  ],
  openGraph: { images: ["/og/default.png"] },
  twitter: { images: ["/og/default.png"] },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Temporal",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android",
  softwareVersion: "2.17",
  downloadUrl: "https://temporal.khatriutsav.com/download",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "INR",
  },
  description:
    "A high-performance offline financial operating system and investment portfolio tracker with dual on-device AI intelligence (LiteRT Gemma 2B + Viterbi Trellis & SpatialLattice System 1) and zero cloud data leaks.",
  featureList: [
    "Offline double-entry ledger with encrypted SQLite vaults",
    "On-device AI statement scanning (Gemma 2B LLM via LiteRT) for PDF, CSV, XLS, TXT",
    "System 1 SpatialLattice KDE & Viterbi Trellis solver for deterministic transaction balance verification",
    "On-device Camera Receipt OCR & Automated Transaction Entry",
    "Atomic Conversational Agent for instant text-based transaction creation",
    "Cognitive TF-IDF Semantic Search across transaction histories",
    "Deterministic Viterbi Trellis Dynamic Programming & Diophantine balance alignment with [MATH_LOCK]",
    "Stocks, AMFI mutual funds, gold bullion, and fixed deposit tracking with live telemetry",
    "XIRR and CAGR portfolio performance with Horizon projections and cash chromatography",
    "Biometric security with hardware KeyStore encryption",
    "Encrypted data export — 100% air-gapped by default, zero account requirement",
  ],
};

const STATS = [
  { value: "0%", label: "Cloud Exposure" },
  { value: "60fps", label: "Scroll Performance" },
  { value: "On-Device", label: "AI Processing" },
  { value: "SQLite", label: "Local Database" },
];

const FAQ_ITEMS = [
  {
    question: "Is my financial data or bank statement text sent to an AI server?",
    answer:
      "No. Temporal runs an entirely air-gapped, on-device AI pipeline (LiteRT + Gemma LLM on NPU/CPU). All optical character recognition (OCR), multi-format bank statement parsing (PDF, CSV, Excel, TXT), and natural language processing happen directly on your physical device. Your financial data never touches remote servers. Cloud AI providers are strictly opt-in via private BYOK keys.",
  },
  {
    question: "How does the ViterbiBalanceSolver prevent hallucinations and duplicate statement rows?",
    answer:
      "Temporal uses a Trellis Dynamic Programming and branch-and-bound subset-sum Diophantine solver that enforces balance continuity: Balance[t] = Balance[t-1] ± Amount[t] in integer paise/cents. When mathematical continuity is proven across multi-hop transactions, rows receive an immutable [MATH_LOCK] badge, eliminating hallucinations and duplicate entries without relying on probabilistic LLM guessing.",
  },
  {
    question: "Why does Temporal use integer fixed-point math instead of floating point numbers?",
    answer:
      "IEEE 754 floating-point numbers create rounding drift in financial ledgers. Temporal enforces strict Fixed-Point Unit Scaling: fiat amounts are scaled 100× as 64-bit integer paise/cents, and asset quantities are scaled 10,000× as integer units (4 decimal places), ensuring exact penny-level consideration math across all holdings.",
  },
  {
    question: "What types of statements and receipts can Temporal import?",
    answer:
      "Temporal supports camera receipt scanning (OCR) as well as multi-page bank, credit card, and broker statements in PDF (with in-memory password unlock), CSV, XLS, XLSX, TXT, and JSON. SpatialLattice 1D Gaussian KDE discovers column gutters dynamically without brittle regex.",
  },
  {
    question: "How does FIFO lot matching preserve cost basis during stock splits and bonus issues?",
    answer:
      "Temporal enforces the Corporate Action Invariant: stock splits and bonus issues adjust remainingQuantity and pricePerUnit using adjustment factor F, but MUST NEVER alter totalInvested (cost basis). Chronological FIFO lot depletion ensures capital gains are calculated accurately for tax compliance.",
  },
  {
    question: "How does Temporal track Stocks, Mutual Funds, and Gold offline?",
    answer:
      "Temporal stores your complete investment registry in encrypted local SQLite tables. When online, it fetches direct keyless telemetry from AMFI (for 44,000+ mutual fund NAVs), Yahoo Finance (for global equities), and PAXG Spot Bullion feeds to compute real-time Newton-Raphson XIRR (10⁻⁷ convergence), CAGR, and HHI concentration.",
  },
  {
    question: "How does it handle large datasets?",
    answer:
      "The app employs an offline-first SQLite WAL repository pattern combined with high-performance list virtualization (@legendapp/list). It is engineered to handle decades of transaction history (100,000+ rows) with sub-16ms frame times and instantaneous search.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "Since we store zero data on remote servers, your Recovery Kit (.zenkit) is your master backup. Sealed with client-side AES-256-GCM encryption and PBKDF2-SHA256 (600,000 rounds), you can restore your complete financial ledger and investment lots on a new device in seconds.",
  },
  {
    question: "How much does Temporal cost?",
    answer:
      "Temporal is free to start with up to 500 ledger entries. The PRO upgrade is a one-time ₹49 lifetime purchase — zero subscriptions, zero recurring fees, zero account required, and zero DRM heartbeats.",
  },
  {
    question: "Does Temporal need an internet connection?",
    answer:
      "No. Temporal is 100% offline-first. Transactions, portfolio tracking, statement simplifier, atomic chat, and AI-powered scanning run locally on your device, operating flawlessly in flight mode or on de-Googled custom ROMs.",
  },
  {
    question: "Which platforms does Temporal support?",
    answer:
      "Temporal is available for Android as a standalone APK. It is optimized for devices with 4GB+ RAM for local LiteRT on-device AI; older devices can run all core tracking and System 1 symbolic solvers with zero lag, and optionally configure cloud AI keys.",
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
            FINANCIAL INTELLIGENCE · ON-DEVICE LLM · 60FPS VIRTUALIZATION ·
            FINANCIAL INTELLIGENCE · ON-DEVICE LLM · 60FPS VIRTUALIZATION ·
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pt-20 pb-12 md:pt-32 md:pb-24">
          {/* Overline */}
          <div
            className="mb-8 animate-fade-in font-mono text-[10px] tracking-[0.3em] text-gray-400 uppercase leading-relaxed md:leading-normal max-w-sm md:max-w-none"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            [ SYSTEM: TEMPORAL v2.5 ] · [ PIPELINE: GEMMA + LAYA DUAL-AI ] · [ MODE: OFFLINE ]
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
            className="mb-12 sm:mb-16 max-w-lg animate-fade-in font-mono text-xs leading-loose tracking-[0.15em] text-gray-400 uppercase sm:text-sm"
            style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
          >
            A high-performance ecosystem leveraging on-device LLMs, multi-asset telemetry, and generative
            visualizations. True data sovereignty without compromise.
          </p>

          {/* CTA Row - Thumb friendly on mobile */}
          <div
            className="mb-12 md:mb-20 flex animate-fade-in flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
          >
            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="btn btn-primary group relative overflow-hidden px-8 py-4 text-sm w-full sm:w-auto min-h-[48px] text-center"
            >
              <span className="relative z-10">→ DOWNLOAD APK (v2.5)</span>
            </a>
            <Link href="/docs" className="btn btn-outline px-8 py-4 text-sm w-full sm:w-auto min-h-[48px] text-center">
              VIEW ARCHITECTURE
            </Link>
          </div>

          {/* Stats Band */}
          <div
            className="animate-fade-in border-t-2 border-white/20 pt-8 sm:pt-10"
            style={{ animationDelay: "0.9s", animationFillMode: "backwards" }}
          >
            <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 md:grid-cols-4 gap-x-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-serif text-3xl italic text-white transition-colors duration-300 group-hover:text-gray-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.15em] text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  LAUNCH VIDEO SHOWCASE - Deterministic Engineering in Motion         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <VideoLaunchShowcase />

      {/*  SYSTEM_INTELLIGENCE - Luxe Brutalism Editorial                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#050505] border-y border-white/10">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,#10b98110,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Top Editorial Header */}
          <div className="mb-14 sm:mb-20 flex flex-col md:flex-row gap-8 md:items-end justify-between border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/5 mb-6">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] tracking-[0.35em] text-emerald-400 font-mono font-bold uppercase">
                   SYSTEM_INTELLIGENCE // ON-DEVICE
                 </span>
              </div>
              <h2 className="text-fluid-h2 text-white font-serif italic leading-none tracking-tight">
                Beyond Simple Automation.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-400 text-xs font-mono leading-relaxed uppercase tracking-wider border border-emerald-500/30 bg-emerald-500/[0.03] p-4 sm:p-5">
                Proprietary neural pipelines reconstruct bank PDF statements, receipts, and investment telemetry directly on your local hardware: 100% air-gapped without remote servers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Slabs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-white/15 bg-black/60 p-6 sm:p-7 hover:border-emerald-500/40 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">
                    01 // HARDWARE_BOUND
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                    [ ZERO_CLOUD ]
                  </span>
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  On-Device Neural Extraction
                </h3>
                <p className="text-gray-400 text-xs font-mono leading-relaxed">
                  Documents are tokenized locally via LiteRT and Google Gemma 2B. Your sensitive account numbers and balances never leave your physical device.
                </p>
              </div>

              <div className="border border-white/15 bg-black/60 p-6 sm:p-7 hover:border-amber-500/40 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 border border-amber-500/20">
                    02 // DETERMINISTIC_DAG
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                    [ AUTO_ALIGNED ]
                  </span>
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  Multi-Vector Normalization
                </h3>
                <p className="text-gray-400 text-xs font-mono leading-relaxed">
                  Unified balance verification across NSE/BSE stocks, 44,000+ AMFI mutual fund NAVs, Gold Bullion, and Fixed Deposits.
                </p>
              </div>

              <div className="border border-white/15 bg-black/60 p-6 sm:p-7 hover:border-sky-500/40 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 border border-sky-500/20">
                    03 // SYSTEM_1_DECISION
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                    [ &lt; 35MS LATENCY ]
                  </span>
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  Viterbi Trellis & Lattice
                </h3>
                <p className="text-gray-400 text-xs font-mono leading-relaxed">
                  1D Gaussian KDE column discovery and Trellis Dynamic Programming Diophantine solver stamping [MATH_LOCK] on verified statement balances.
                </p>
              </div>
            </div>

            {/* Right Cinematic Demo */}
            <div className="lg:col-span-7">
              <AIExtractionDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  INTELLIGENCE HUB — Interactive 6X Feature Matrix                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <IntelligenceOrchestrationHub />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  MULTI-VECTOR ASSETS — Finvest Portfolio Engine                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <MultiAssetPortfolioShowcase />

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
                  Stop looking at where you were. Start engineering where you will be. Our horizon engine uses XIRR-weighted simulations and Cash Chromatography to project your wealth trajectory — transparent math you can audit, not a black box.
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
      {/*  SYSTEM ARCHITECTURE — Interactive Brutalist Schematic (Archify)     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <SystemArchitectureInteractive />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  ECOSYSTEM ROADMAP — 5 Sovereign Engineering Pillars (PRDs)           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <EcosystemRoadmap />

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
            <div className="mt-8 font-mono text-xs tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover:text-white">
              [ READ THE TEMPORAL MANIFESTO → ]
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

          <div className="mt-12 text-center">
            <Link
              href="/queries"
              className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-xs text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase"
            >
              <span>EXPLORE ALL 77 SYSTEM QUERIES</span>
              <span>→</span>
            </Link>
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

      {/* Mobile Sticky Install Bar */}
      <MobileStickyDownloadBar />
    </>
  );
}
