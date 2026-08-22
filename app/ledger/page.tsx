import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledger Engine | Temporal",
  description:
    "Understanding the underlying double-entry SQLite database of Temporal.",
  openGraph: { images: ["/og/ledger.png"] },
  twitter: { images: ["/og/ledger.png"] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the ledger persist data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data is persisted instantly to the on-device SQLite instance. There is zero database lag and zero network latency.",
      },
    },
  ],
};

export default function LedgerPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-48 relative">
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-h-[1200px] bg-[radial-gradient(ellipse_at_top,#10b98110,transparent_50%)] pointer-events-none z-[-1]" />
        <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />

        {/* Hero Section */}
        <section className="mb-32 relative">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-emerald-500/30 bg-emerald-500/5 mb-8 accent-shimmer relative overflow-hidden">
             <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] tracking-[0.4em] text-emerald-500 font-bold uppercase relative z-10">ENGINE_SPEC_v2.5</span>
          </div>
          <h1 className="mb-12 font-serif text-fluid-h1 italic tracking-tighter leading-[0.85] text-white">
            The Ledger
            <br />
            Engine.
          </h1>
          <div className="max-w-2xl border-t border-white/20 pt-10">
            <p className="font-mono text-sm leading-relaxed tracking-tight text-gray-400 uppercase">
              Strictly typed, mathematically verifiable double-entry bookkeeping
              infrastructure. Zero latency. Absolute integrity. Built for persistence.
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {[
              {
                id: "SPEC_01",
                title: "Zero-Latency Mutation",
                content: "Because there are no network hops, creating a ledger entry takes less than 3 milliseconds. The application does not display generic loading spinners. Transactions happen instantly.",
                meta: "CORE_MUTATION_PERF"
              },
              {
                id: "SPEC_02",
                title: "Double-Entry Integrity",
                content: "Temporal utilizes a strict double-entry system. Every debit has a corresponding credit, ensuring your balance is always mathematically sound. No \"lost\" transactions, no rounding errors.",
                meta: "MATHEMATICAL_VERIFICATION"
              },
              {
                id: "SPEC_03",
                title: "Virtual List Engine",
                content: "Scrolling through 10,000 transactions feels as smooth as scrolling through ten. Our virtualization engine only renders what is on screen, maintaining a constant 60fps even on mid-range hardware.",
                meta: "UI_VIRTUALIZATION_60FPS"
              }
            ].map((section) => (
              <section 
                key={section.id} 
                className="group relative p-10 brutalist-luxe hover:border-emerald-500/40 transition-all duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 shrink-0 font-mono text-[10px] tracking-[0.3em] text-[#666666] group-hover:text-emerald-500 transition-colors pt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#666666] group-hover:bg-emerald-500 transition-colors" />
                    {section.id}
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4 font-serif text-3xl italic text-white group-hover:translate-x-2 transition-transform duration-700" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      {section.title}
                    </h2>
                    <p className="max-w-xl font-sans text-base font-light text-[#888888] leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                      {section.content}
                    </p>
                    <div className="mt-8 font-mono text-[9px] tracking-widest text-emerald-500/40 uppercase">
                      // STATUS::VERIFIED — ENGINE::{section.meta}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Pilot Cockpit Sidebar */}
          <aside className="lg:col-span-4 relative h-fit">
            <div className="sticky top-24 space-y-6 glass-brutalist p-8">
              
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-6 mb-6">
                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] tracking-widest text-white font-bold uppercase">SYSTEM_TELEMETRY</span>
              </div>

              {/* Modules */}
              <div className="space-y-6">
                <div className="border border-white/10 p-5 bg-[#0a0a0a] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-gray-700">CHECKSUM_v1</div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-3 relative z-10">Verification Checksum</div>
                  <div className="font-mono text-[10px] text-emerald-500/70 break-all leading-normal uppercase relative z-10">
                    SHA256: 8f3c...b2e1...d4f5...a1b2
                  </div>
                </div>

                <div className="border-l-2 border-emerald-500 p-5 bg-emerald-500/5 relative">
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <span className="w-1 h-3 bg-emerald-500/40 animate-pulse" style={{animationDelay: '0s'}} />
                    <span className="w-1 h-3 bg-emerald-500/60 animate-pulse" style={{animationDelay: '0.2s'}} />
                    <span className="w-1 h-3 bg-emerald-500/80 animate-pulse" style={{animationDelay: '0.4s'}} />
                  </div>
                  <div className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-3">Technical Note</div>
                  <p className="font-mono text-[10px] text-emerald-500/70 leading-relaxed uppercase">
                    Ledger Horizon visualization utilizes high-frequency polling of the SQLite change log for real-time reactive updates.
                  </p>
                </div>

                <div className="border border-white/10 p-5 font-mono text-[10px] leading-relaxed bg-black/40">
                  <div className="mb-4 text-white tracking-[0.2em] opacity-40 uppercase">// ENGINE_STATS</div>
                  <div className="space-y-3 opacity-80 text-gray-400">
                    <div className="flex justify-between"><span>[ DB ]</span><span className="text-white">SQLITE_3_WAL</span></div>
                    <div className="flex justify-between"><span>[ ATOM ]</span><span className="text-white">ACID_COMPLIANT</span></div>
                    <div className="flex justify-between"><span>[ TRIG ]</span><span className="text-white">RECALC_ON_MUT</span></div>
                    <div className="flex justify-between"><span>[ INDX ]</span><span className="text-white">BTREE_TIMESTAMP</span></div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
