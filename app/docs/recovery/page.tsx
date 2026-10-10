import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/recovery",
  },
  title: "The Recovery Kit | Temporal Docs",
  description: "Restore your complete financial history on a new device using Temporal's encrypted AES-256-GCM Recovery Kit backup envelope.",
  openGraph: { images: ["/og/docs-recovery.png"] },
  twitter: { images: ["/og/docs-recovery.png"] },
};

export default function RecoveryDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [04.1] Survival Protocols
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          The Recovery Kit.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Client-side AES-256-GCM envelope &middot; 13 SQLite tables &middot; Universal portability
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Why the Recovery Kit Is Your Single Source of Truth
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal runs zero cloud databases. If you switch to a new phone, lose your device,
              or reinstall the operating system, your entire financial record moves with your{" "}
              <strong className="font-semibold text-gray-200">
                Recovery Kit (.zenkit)
              </strong>.
              It packages your complete transaction ledger, investment lots, custom categories,
              and cryptographic license receipt into an authenticated file.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Storage &amp; Backup Hygiene
            </h3>
            <p className="leading-relaxed text-gray-400">
              Because your Recovery Kit is protected by military-grade encryption, you can safely store
              it on your personal cloud drive (Google Drive, iCloud, ProtonDrive), keep it on an air-gapped
              USB drive, or archive it in your password manager.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Cross-Device Migration in 10 Seconds
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I purchased a new flagship phone. How do I move 5 years of financial history?&quot;
              Generate a Recovery Kit on your old device, transfer the `.zenkit` file via AirDrop, Bluetooth,
              or local cable, and tap &apos;Import Recovery Kit&apos; on your new device. All accounts, lots, and
              audited transactions restore instantaneously.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Cryptographic Recovery Specification
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                AES-256-GCM Authenticated Envelope
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The payload contains a complete normalized relational dump of all 13 SQLite tables (transactions, accounts, holding_lots, categories, ai_chats, etc.). Ciphertext is sealed using AES-256 in Galois/Counter Mode (GCM) with a 128-bit authentication tag and a 96-bit cryptographically random IV. Tampered or corrupted backup files are rejected prior to database ingestion.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                PBKDF2-SHA256 Key Derivation (600,000 Rounds)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Master encryption keys are derived from your user passphrase using PBKDF2 with HMAC-SHA256, a 32-byte secure salt, and 600,000 hashing rounds. This computationally heavy iteration count renders brute-force and dictionary attacks computationally infeasible on modern GPU clusters.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Universal Portability Specification
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The `.zenkit` archive adheres to the Universal Database Schema documented in our architecture specification. It is cross-platform compatible across Android, iOS, Desktop (Tauri/Electron), and Web (Next.js OPFS WASM SQLite), ensuring zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
