import Link from "next/link";

const ROADMAP_PILLARS = [
  {
    code: "PRD_06",
    tag: "ZERO-KNOWLEDGE RECOVERY",
    title: "Cryptographic Vault & P2P Air-Gap Sync",
    badge: "SPECIFIED // P2P_LAN",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    description:
      "Universal .temporal cryptographic envelope sealed with AES-256-GCM and PBKDF2-SHA256 (600,000 rounds). Enables direct peer-to-peer LAN sync via local mDNS/TLS sockets, animated camera-to-screen QR streams, and user-owned private WebDAV storage. Zero centralized backup servers.",
    invariants: [
      "12/24-Word BIP-39 Mnemonic Seed or Master Passphrase",
      "Full 13-Table SQLite Serialization with SHA-256 Checksum",
      "Transactional SAVEPOINT Rollback & Collision Deduplication",
    ],
    docLink: "/docs/recovery",
  },
  {
    code: "PRD_07",
    tag: "AUTONOMOUS TIME DAEMON",
    title: "Sovereign Local Cron & Notification Engine",
    badge: "ZERO_CLOUD_PUSH",
    badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    description:
      "A 100% on-device cron engine scheduled directly into operating system hardware alarms via expo-notifications. Eliminates third-party push telemetry (FCM/APNs) while delivering proactive alerts for bill dues (T-3/T-1), Fixed Deposit maturities, SIP trade dates, and weekly audits.",
    invariants: [
      "Zero Cloud Push: Zero telemetry or schedule leaks to external servers",
      "Dynamic Velocity Trigger: Alerts when burn rate > 140% of linear pace",
      "Quiet Hours Guardrail: Automatic deferral of night alerts to 08:30",
    ],
    docLink: "/docs/core",
  },
  {
    code: "PRD_08",
    tag: "CAPITAL ALLOCATION",
    title: "Sovereign Envelope & Velocity Budgeting",
    badge: "BURN_RATE_TELEMETRY",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    description:
      "Forward-looking zero-based capital allocation engine coupled with real-time spending burn rate evaluation. Features a 4-state Overheat State Machine (Optimal, Balanced, Warning, Breach) and an automatic month-to-month surplus/deficit rollover accumulator.",
    invariants: [
      "Fixed-Point Math: Stored in 64-bit integer cents/paise (scaled 100×)",
      "Daily Linear Run-Rate vs. Actual Daily Spending Velocity",
      "Conservation Law: Sum of Envelope Allocations <= Monthly Net Inflow",
    ],
    docLink: "/docs/transactions",
  },
  {
    code: "PRD_09",
    tag: "DETERMINISTIC PIPELINE",
    title: "Automation Rules & Recurring Cashflow Engine",
    badge: "BOOLEAN_AST // ZERO_AI",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    description:
      "Deterministic Boolean AST and regex rule execution engine for automated transaction enrichment, custom tax-deductible tagging, and auto-splitting. Couples with a Virtual Pending Cashflow Queue that projects future recurring debits without polluting verified historical ledgers.",
    invariants: [
      "100% Deterministic Regex & AST Execution with ACID Commit",
      "Virtual Pending Queue: 1-Tap Reconciliation against Viterbi rows",
      "Transit Rail Peeling: Isolates UPI/NEFT/POS from canonical merchants",
    ],
    docLink: "/docs/categories",
  },
  {
    code: "PRD_10",
    tag: "STREAMLINED INGESTION",
    title: "Hot-Folder Watcher & Keystore Password Vault",
    badge: "BACKGROUND_QUEUE",
    badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    description:
      "Automated filesystem hot-folder watcher for Documents/Temporal/Drop/. Ingests multi-statement PDF and CSV batches in parallel. Bank-specific password formulas (PAN + DOB) stored encrypted in hardware SecureStore unlock statements automatically with zero manual prompts.",
    invariants: [
      "SecureStore Password Keychain: Automated hardware-backed PDF decrypt",
      "Concurrent SpatialLattice & ViterbiBalanceSolver Batch Execution",
      "Micro-Diff Staging Buffer: Preview discovered rows before commit",
    ],
    docLink: "/docs/ai",
  },
];

export function EcosystemRoadmap() {
  return (
    <section className="relative overflow-hidden border-b-2 border-white/20 bg-black py-24 sm:py-32">
      {/* Background Accent Grids */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">
              [ ARCHITECTURAL BLUEPRINT // 2026-2027 ]
            </span>
            <span className="border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-gray-400">
              5_SOVEREIGN_PILLARS
            </span>
          </div>

          <h2 className="font-serif text-4xl italic text-white sm:text-5xl md:text-6xl">
            The Sovereign Ecosystem Roadmap.
          </h2>
          <p className="mt-6 max-w-3xl font-mono text-sm leading-relaxed text-gray-400">
            Temporal is not a disposable one-shot AI prototype. It is an evolving, air-gapped financial operating system built upon strict mathematical invariants, local-first SQLite WAL storage, and zero-knowledge cryptography. Explore the 5 technical specifications currently engineering the next frontier of personal financial autonomy.
          </p>

          {/* Tri-Pillar Navigation Matrix Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
            <Link
              href="/manual"
              className="border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              OPERATIONAL MANUAL →
            </Link>
            <Link
              href="/docs"
              className="border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              TECHNICAL DOCS (13 SPECS) →
            </Link>
            <Link
              href="/queries"
              className="border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              KNOWLEDGE BASE (77 Q&As) →
            </Link>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {ROADMAP_PILLARS.map((pillar, index) => {
            const isWide = index === 0 || index === 1;
            return (
              <div
                key={pillar.code}
                className={`border border-white/15 bg-[#0a0a0a] p-6 sm:p-8 transition-colors hover:border-white/40 ${
                  isWide ? "lg:col-span-6" : "lg:col-span-4"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gray-500">
                    [{pillar.code}] // {pillar.tag}
                  </span>
                  <span
                    className={`border px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase ${pillar.badgeColor}`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl text-white italic">
                  {pillar.title}
                </h3>

                <p className="mb-6 font-sans text-xs leading-relaxed text-gray-400">
                  {pillar.description}
                </p>

                <div className="mb-6 border-t border-white/10 pt-4">
                  <div className="mb-2 font-mono text-[10px] tracking-wider text-gray-500 uppercase">
                    Core Invariants:
                  </div>
                  <ul className="space-y-1.5 font-mono text-[11px] text-gray-300">
                    {pillar.invariants.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-400">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={pillar.docLink}
                    className="font-mono text-xs text-white/70 transition-colors hover:text-white"
                  >
                    EXPLORE ARCHITECTURE →
                  </Link>
                  <span className="font-mono text-[10px] text-gray-600">
                    AIR_GAPPED_SYSTEM
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Manifesto Anchor */}
        <div className="mt-12 border border-white/15 bg-black p-6 font-mono text-xs text-gray-400 sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="font-bold text-white">RELIABILITY INVARIANT:</span>{" "}
            All upcoming features maintain complete local-first air-gap compatibility. Zero external cloud servers required.
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/manifesto"
              className="text-white underline underline-offset-4 hover:text-emerald-400"
            >
              READ THE MANIFESTO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
