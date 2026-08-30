import { Metadata } from "next";
import Link from "next/link";
import { KNOWLEDGE_BASE_QUERIES } from "@/components/data/knowledgeBaseQueries";
import { KnowledgeBaseSearch } from "@/components/KnowledgeBaseSearch";

export const metadata: Metadata = {
  title: "Knowledge Base & System Queries | Temporal Financial OS",
  description:
    "Comprehensive answers to all user questions regarding on-device AI statement scanning, biometric security, balance continuity DAG solving, portfolio returns, UPI screenshots, and recovery kits in Temporal.",
  keywords: [
    "Temporal FAQ",
    "Temporal queries",
    "local-first finance questions",
    "on-device AI statement scanner FAQ",
    "offline portfolio tracker help",
    "recovery kit explanation",
    "Gemma 2B finance questions",
    "UPI screenshot transaction parser",
    "XIRR portfolio return solver",
    "LiteRT Android finance",
    "bank PDF password security"
  ],
  openGraph: { images: ["/og/default.png"] },
  twitter: { images: ["/og/default.png"] },
};

export default function QueriesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00b2ff] selection:text-black">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-24 sm:pt-32 pb-24">
        {/* Breadcrumb & Technical Overline */}
        <div className="mb-6 flex items-center gap-2 font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-[#00b2ff]">SYSTEM_QUERIES</span>
        </div>

        {/* Page Title & Subtitle */}
        <div className="mb-12 sm:mb-16 border-b-2 border-white/20 pb-8 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white tracking-tight leading-none mb-4">
            System Queries.
          </h1>
          <p className="max-w-2xl font-mono text-xs sm:text-sm text-gray-400 leading-relaxed uppercase tracking-wider">
            Everything you need to know about Temporal&apos;s on-device AI, local security, portfolio mathematics, and recovery kits.
          </p>
        </div>

        {/* Interactive Search & Filter Hub */}
        <KnowledgeBaseSearch queries={KNOWLEDGE_BASE_QUERIES} />

        {/* Bottom CTA Block */}
        <div className="mt-20 border border-white/20 bg-[#050505] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#00b2ff] uppercase mb-1">
              [ DIRECT HUMAN ASSISTANCE ]
            </div>
            <h3 className="text-xl sm:text-2xl font-serif italic text-white">
              Still have a unique query?
            </h3>
            <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
              Our engineering team responds to all technical and usage inquiries directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="btn btn-outline px-6 py-3 font-mono text-xs tracking-widest uppercase"
            >
              TECHNICAL DOCS
            </Link>
            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="btn btn-primary px-6 py-3 font-mono text-xs tracking-widest uppercase font-bold"
            >
              DOWNLOAD APK
            </a>
          </div>
        </div>

        {/* Structured Data (Schema.org FAQPage for All 32 Items) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: KNOWLEDGE_BASE_QUERIES.map((item) => ({
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
    </div>
  );
}
