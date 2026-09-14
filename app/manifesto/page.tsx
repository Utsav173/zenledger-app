import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Temporal Manifesto | Data Sovereignty",
  description: "Our philosophy on financial intelligence, privacy, and local-first architecture.",
  openGraph: { images: ["/og/manifesto.png"] },
  twitter: { images: ["/og/manifesto.png"] },
};

export default function ManifestoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-48">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Document Content */}
        <div className="flex-1">
          <section className="mb-24">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                [ DOC_REF: TMPRL_MNFSTO_2026 ]
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h1 className="mb-12 font-serif text-6xl leading-[0.9] italic sm:text-7xl md:text-[9rem]">
              The Temporal
              <br />
              Manifesto.
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 mb-16 font-mono text-[10px] text-gray-600 uppercase tracking-widest border-y border-white/10 py-4">
              <div>AUTHOR: UTSAV KHATRI</div>
              <div>VERSION: 2.5.0</div>
              <div>HASH: 8F3C...B2E1</div>
              <div className="ml-auto flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                VERIFIED_ENCRYPTED
              </div>
            </div>
          </section>

          <article className="prose prose-invert prose-p:leading-loose prose-headings:font-serif prose-headings:italic max-w-none">
            <div className="space-y-16 font-sans text-xl font-light text-gray-400">
              <p className="font-serif italic text-white text-2xl mb-24 leading-snug">
                In an era where personal financial data is treated as a commodity,
                Temporal stands as an act of resistance. We believe that your wealth,
                your spending habits, and your financial trajectory are yours alone.
              </p>

              <section className="p-6 sm:p-8 border border-white/20 bg-black/50 transition-all hover:border-white/50 hover:bg-white/[0.02]">
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">PRINCIPLE // 01</div>
                <h2 className="text-white font-serif italic text-2xl sm:text-3xl mb-4">01 / The Local-First Imperative</h2>
                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                  The cloud is just someone else&apos;s computer. For something as intimate
                  as financial records, &ldquo;secure servers&rdquo; are not enough. The only
                  truly secure data is the data that never leaves your physical possession.
                  Temporal is built on a local-first architecture: your device is the
                  exclusive source of truth.
                </p>
              </section>

              <section className="p-6 sm:p-8 border border-white/20 bg-black/50 transition-all hover:border-white/50 hover:bg-white/[0.02]">
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">PRINCIPLE // 02</div>
                <h2 className="text-white font-serif italic text-2xl sm:text-3xl mb-4">02 / Intelligence Without Surveillance</h2>
                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                  Artificial Intelligence does not require a data harvest. By leveraging
                  on-device LLMs (Gemma via LiteRT), we provide sophisticated financial
                  insights without a single byte of your ledger ever touching an external
                  inference server. Intelligence should serve the user, not the provider.
                </p>
              </section>

              <section className="p-6 sm:p-8 border border-white/20 bg-black/50 transition-all hover:border-white/50 hover:bg-white/[0.02]">
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">PRINCIPLE // 03</div>
                <h2 className="text-white font-serif italic text-2xl sm:text-3xl mb-4">03 / Utilitarian Brutalism</h2>
                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                  We reject the &ldquo;gamification&rdquo; of finance. We do not use dopamine-loops
                  or cluttered interfaces. Temporal is a tool for clarity. We prioritize
                  high-density information, mathematical precision, and professional-grade
                  performance (60fps virtualization). It is designed for the serious,
                  the stoic, and the sovereign.
                </p>
              </section>

              <div className="pt-16 sm:pt-24 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-white opacity-40">
                  [ DATA SOVEREIGNTY OR NOTHING ]
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Marginalia Sidebar */}
        <aside className="hidden lg:block w-64 pt-64">
          <div className="sticky top-64 space-y-12">
            <div className="border-t border-white/20 pt-4">
              <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest mb-2">[ ANNOTATION_01 ]</div>
              <p className="font-mono text-[10px] text-gray-500 leading-relaxed">
                SQLite local db encryption layer ensures zero-knowledge access even if device hardware is compromised.
              </p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest mb-2">[ ANNOTATION_02 ]</div>
              <p className="font-mono text-[10px] text-gray-500 leading-relaxed">
                NPU-based inference eliminates the latency and security vulnerabilities of REST-based AI pipelines.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
