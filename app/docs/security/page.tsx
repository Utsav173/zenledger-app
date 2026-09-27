import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Privacy | Temporal Docs",
  description: "Temporal's security model: hardware Secure Enclave biometric locks, PBKDF2-SHA256 derivation, and air-gapped zero-network isolation.",
  openGraph: { images: ["/og/docs-security.png"] },
  twitter: { images: ["/og/docs-security.png"] },
};

export default function SecurityDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [04] Security &amp; Sovereignty
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          The Fortress.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Hardware KeyStore biometric gates &middot; AES-256-GCM authenticated cipher &middot; Zero remote telemetry
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              No Centralized &quot;Forgot Password&quot; Backdoor
            </h3>
            <p className="leading-relaxed text-gray-400">
              Traditional finance apps offer password resets because they hold your database on their servers.{" "}
              <strong className="font-semibold text-gray-200">
                Temporal stores zero user credentials or data in the cloud.
              </strong>{" "}
              Your database exists exclusively on your physical phone silicon. If you lose your phone without
              backing up your Recovery Kit, your records cannot be recovered by anyone. This architectural rigor
              is the prerequisite for true financial sovereignty.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Hardware Biometric Gate
            </h3>
            <p className="leading-relaxed text-gray-400">
              Temporal binds database decryption to your device&apos;s biometric security module (Fingerprint / Face ID).
              Whenever you switch apps or turn off your screen, transient memory is scrubbed, and the biometric gate
              re-engages immediately.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The Sovereign Guarantee: Zero Telemetry
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              Temporal contains zero advertising networks, zero user tracking SDKs, zero crashlytics beacons,
              and zero third-party aggregators (no Plaid, no MX). Your balance sheets and transactions are never
              monetized, profiled, or indexed.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#111111] p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Cryptographic Architecture
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                SecureStore &amp; Hardware KeyStore Management
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Master database keys, biometrics salts, and optional cloud BYOK keys are anchored directly into the Android KeyStore / iOS Keychain Secure Enclave. Keys cannot be extracted via root access or unauthenticated memory inspection.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                AES-256-GCM Cryptographic Envelope
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                All exports, secure storage objects, and recovery archives use authenticated AES-256 in Galois/Counter Mode with 128-bit authentication tags and 96-bit random IVs. Key derivation enforces PBKDF2-HMAC-SHA256 with 600,000 iterations.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Nuclear Wipe Protocol
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The Nuclear Wipe routine executes cryptographic sanitization: it overwrites active memory buffers, drops all 13 SQLite tables, purges WAL files, destroys KeyStore keys, and resets application storage to zero bytes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
