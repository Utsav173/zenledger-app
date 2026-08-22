import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Vault | Temporal",
  description:
    "Biometric and application-level security features within Temporal.",
  openGraph: { images: ["/og/vault.png"] },
  twitter: { images: ["/og/vault.png"] },
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
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-48 relative">
        {/* Secure Enclave Atmospheric Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-h-[1200px] bg-[radial-gradient(ellipse_at_top,#10b98110,transparent_50%)] pointer-events-none z-[-1]" />
        <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />

        {/* Hero Section */}
        <section className="mb-32 relative">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-emerald-500/30 bg-emerald-500/5 mb-8 accent-shimmer relative overflow-hidden">
             <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] tracking-[0.4em] text-emerald-500 font-bold uppercase relative z-10">SEC_SYSTEM_v4.2</span>
          </div>
          <h1 className="mb-12 font-serif text-fluid-h1 italic tracking-tighter leading-[0.85] text-white">
            The Encrypted
            <br />
            Vault.
          </h1>
          <div className="max-w-2xl border-t border-white/20 pt-10">
            <p className="font-mono text-sm leading-relaxed tracking-tight text-gray-400 uppercase">
              You own your data. We have designed the system so that you do not
              need to trust us. Zero cloud. Zero surveillance. Direct hardware isolation.
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {[
              {
                id: "SEC_01",
                title: "Device-Level Defense",
                content: "When the Biometric Lock is armed, Temporal completely shrouds the application state upon leaving memory. Restoring the application instance requires physical device biometrics via the host OS secure enclave.",
                meta: "BIOMETRIC_ISOLATION"
              },
              {
                id: "SEC_02",
                title: "AES-256 Storage",
                content: "Your database is not just a file; it is a vault. Using SQLCipher, every byte of your financial history is encrypted with AES-256. Even if a malicious actor gains access to your device's filesystem, your ledger remains an undecipherable wall of noise.",
                meta: "STORAGE_ENCRYPTION"
              },
              {
                id: "SEC_03",
                title: "The Recovery Kit",
                content: "Since we store nothing, we cannot \"reset\" your password. Upon setup, Temporal generates a high-entropy Recovery Kit. This is your only backdoor. We recommend printing it and storing it in a physical safe.",
                meta: "PROTOCOL_Z"
              }
            ].map((section) => (
              <section 
                key={section.id} 
                className="group relative p-10 brutalist-luxe hover:border-emerald-500/40 transition-all duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors duration-700" />
                <div className="flex flex-col md:flex-row gap-8 items-start pl-4">
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
                      // STATUS::VERIFIED — TYPE::{section.meta}
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
                 <span className="text-[10px] tracking-widest text-white font-bold uppercase">SECURITY_TELEMETRY</span>
              </div>

              {/* Modules */}
              <div className="space-y-6">
                <div className="border border-white/10 p-5 bg-[#0a0a0a] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-gray-700">VAULT_LOCK_v1</div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-3 relative z-10">Security Status</div>
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-500/70">ENCLAVE_ACTIVE</span>
                  </div>
                </div>

                <div className="border-l-2 border-emerald-500 p-5 bg-emerald-500/5 relative">
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <span className="w-1 h-3 bg-emerald-500/40 animate-pulse" style={{animationDelay: '0s'}} />
                    <span className="w-1 h-3 bg-emerald-500/60 animate-pulse" style={{animationDelay: '0.2s'}} />
                    <span className="w-1 h-3 bg-emerald-500/80 animate-pulse" style={{animationDelay: '0.4s'}} />
                  </div>
                  <div className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-3">Encryption Standard</div>
                  <p className="font-mono text-[10px] text-emerald-500/70 leading-relaxed uppercase">
                    Utilizing FIPS 140-2 compliant cryptographic modules for all on-device persistence layers.
                  </p>
                </div>

                <div className="border border-white/10 p-5 font-mono text-[10px] leading-relaxed bg-black/40">
                  <div className="mb-4 text-white tracking-[0.2em] opacity-40 uppercase">// SECURITY_PROTOCOL</div>
                  <div className="space-y-3 opacity-80 text-gray-400">
                    <div className="flex justify-between"><span>[ ARCH ]</span><span className="text-white">ZERO_KNOWLEDGE</span></div>
                    <div className="flex justify-between"><span>[ KEYS ]</span><span className="text-white">TEE_HARDWARE</span></div>
                    <div className="flex justify-between"><span>[ ENTR ]</span><span className="text-white">256_BIT_GEN</span></div>
                    <div className="flex justify-between"><span>[ STND ]</span><span className="text-white">BIP39_SUPPORT</span></div>
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
