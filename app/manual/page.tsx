import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Temporal Operational Manual // Field Engineering Handbook",
  description:
    "Official operational manual for Temporal: hands-on guide to air-gapped vault management, precision numpad logging, Viterbi statement discovery, multi-asset wealth engines, and zero-knowledge cryptographic recovery.",
  openGraph: { images: ["/og/manual.png"] },
  twitter: { images: ["/og/manual.png"] },
};

const manualSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Temporal Operational Manual // Field Engineering Handbook",
  description:
    "A comprehensive operator's guide to Temporal: mastering the local-first financial operating system, Viterbi balance solver, and multi-asset wealth registry.",
  articleSection: "Finance Technology",
  keywords: [
    "Temporal user manual",
    "air-gapped financial OS",
    "local-first personal finance",
    "Viterbi Trellis solver guide",
    "FIFO tax lot accounting",
    "AMFI offline mutual fund tracker",
    "AES-256-GCM recovery kit",
  ],
};

const MANUAL_SECTIONS = [
  {
    code: "SECTION_01",
    tag: "SETUP & LIQUIDITY",
    title: "Air-Gapped Vaults & Sovereign Setup",
    summary:
      "Initialize your primary ledger, configure biometric hardware lock, and establish multi-vault liquidity buckets without creating a cloud account.",
    content: [
      "On initial launch, Temporal provisions a local SQLite WAL database directly inside protected device sandbox storage. No phone number, email address, or third-party OAuth provider is ever requested.",
      "Vaults represent sovereign liquidity repositories: Checking, Cash Reserve, Offshore Brokerage, or dedicated project pots (e.g. 'Tax Escrow'). Moving capital between vaults creates an atomic double-entry sweep (ΔNetWorth ≡ 0).",
      "Biometric lock engages Android BiometricPrompt and iOS LocalAuthentication, binding database session access to local hardware Secure Enclave / KeyStore keys.",
    ],
    docLink: "/docs/ledger",
    docLabel: "TECH_SPEC: /docs/ledger",
    queryTag: "vault",
    queryLabel: "KB_QUERIES: Vault Architecture",
  },
  {
    code: "SECTION_02",
    tag: "LEDGER DISCIPLINE",
    title: "Precision Transaction Entry & Versioned Audits",
    summary:
      "Execute sub-second transaction logging via the custom tactile numpad with immutable micro-diff audit trail tracking.",
    content: [
      "Tap the center [+] button to launch the precision numpad. Toggle between Red (Expense) and Green (Income), assign a category bucket, select the target Vault, and commit with haptic confirmation.",
      "Every mutation is recorded into the transaction_audits table, capturing pre-edit and post-edit JSON micro-diffs with timestamp and origin source (MANUAL_ENTRY, AI_INGESTION, or RULE_ENGINE).",
      "Transactions can be split across multiple category envelopes (e.g., splitting a supermarket bill into Groceries and Household Supplies) while preserving single-line bank statement continuity.",
    ],
    docLink: "/docs/transactions",
    docLabel: "TECH_SPEC: /docs/transactions",
    queryTag: "ledger",
    queryLabel: "KB_QUERIES: Transaction Engine",
  },
  {
    code: "SECTION_03",
    tag: "COGNITIVE INGESTION",
    title: "Bank Statement Ingestion & Viterbi Trellis Discovery",
    summary:
      "Ingest multi-page PDF, CSV, Excel, and text bank statements with deterministic mathematical proof and [MATH_LOCK] stamping.",
    content: [
      "Navigate to Intelligence → Statement Simplifier. Tap to select statements from any bank or broker. Temporal decrypts password-protected PDFs entirely in-memory using local SecureStore keys.",
      "SpatialLattice executes 1D Gaussian Kernel Density Estimation (σ = 10 pt) to discover column gutters dynamically, eliminating brittle bank-specific regex scrapers.",
      "The ViterbiBalanceSolver verifies balance continuity (Balance[t] = Balance[t-1] ± Amount[t]). Verified multi-hop rows receive the immutable [MATH_LOCK] badge, mathematically preventing AI hallucinations and duplicate entries.",
    ],
    docLink: "/docs/ai",
    docLabel: "TECH_SPEC: /docs/ai",
    queryTag: "ai",
    queryLabel: "KB_QUERIES: Ingestion & Viterbi",
  },
  {
    code: "SECTION_04",
    tag: "WEALTH ENGINES",
    title: "Multi-Asset Registry: Equities, Mutual Funds, Gold & FDs",
    summary:
      "Track multi-currency equities, 44,000+ AMFI mutual fund schemes, physical gold bullion, and compounding fixed deposits with exact quant math.",
    content: [
      "Equities & Mutual Funds: Chronological FIFO lot depletion (ORDER BY date ASC, _creationTime ASC). Corporate action splits and bonuses automatically adjust unit quantities while strictly preserving totalInvested cost basis (ΔCostBasis ≡ 0).",
      "Direct AMFI NAV Feed: Daily keyless synchronization directly from AMFI servers for 44,000+ mutual fund schemes. Zero third-party broker API keys required.",
      "Gold & Bullion: CoinGecko PAXG spot bullion pricing normalized to troy ounces. Native karat purity scaling (K = Karat / 24) isolates pure scrap liquidation value from capitalized making charges.",
      "Fixed Income: Daily compound accrual engine with statutory benchmarks (PPF, EPF) and maturity yield schedules.",
      "Portfolio Telemetry: Newton-Raphson XIRR engine converges to 10⁻⁷ precision with strict boundary guards, Herfindahl HHI concentration indices, and Pareto 80/20 distribution metrics.",
    ],
    docLink: "/docs/investments",
    docLabel: "TECH_SPEC: /docs/investments",
    queryTag: "investments",
    queryLabel: "KB_QUERIES: Multi-Asset Math",
  },
  {
    code: "SECTION_05",
    tag: "COGNITIVE SUBSYSTEM",
    title: "On-Device Neural REPL & Semantic Search",
    summary:
      "Interact with your financial ledger through an on-device LiteRT Gemma conversational agent and offline stemmed vector search.",
    content: [
      "System 1 Categorization: BayesianLearner computes Maximum A Posteriori (MAP) token probabilities locally. InformationEntropyDecomposer strips transit rail noise (UPI, IMPS, NEFT, POS, BBPS) to isolate true counterparty stems.",
      "System 2 Neural Coordinator: On-device quantized LiteRT Gemma array coordinates camera receipt OCR and conversational REPL entries ('Logged ₹1,200 diesel from HDFC Vault'). Zero data ever leaves the device.",
      "Semantic Search: Offline stemmed TF-IDF vector search indexes transactions, merchant aliases, and audit notes with sub-10ms response times.",
    ],
    docLink: "/docs/ai",
    docLabel: "TECH_SPEC: /docs/ai",
    queryTag: "ai",
    queryLabel: "KB_QUERIES: Cognitive Subsystem",
  },
  {
    code: "SECTION_06",
    tag: "CRYPTOGRAPHIC SOVEREIGNTY",
    title: "The Cryptographic Recovery Kit & Universal Portability",
    summary:
      "Export, restore, and migrate complete 13-table SQLite snapshots across Mobile, Desktop, and Web using AES-256-GCM envelopes.",
    content: [
      "The Recovery Kit (.temporal format) seals all 13 database tables into a single authenticated envelope using AES-256-GCM and PBKDF2-SHA256 (600,000 rounds) derived from your master passphrase or 12/24-word seed phrase.",
      "Universal Schema Portability: The exported envelope restores identically across Android, iOS, macOS Catalyst, Tauri Desktop, and Next.js / Web OPFS editions with 100% schema parity.",
      "Nuclear Wipe: A hardware-level emergency wipe command immediately truncates all SQLite tables, revokes Biometric KeyStore keys, purges AsyncStorage preferences, and zeroes volatile memory caches.",
    ],
    docLink: "/docs/recovery",
    docLabel: "TECH_SPEC: /docs/recovery",
    queryTag: "security",
    queryLabel: "KB_QUERIES: Security & Portability",
  },
  {
    code: "SECTION_07",
    tag: "FUTURE ECOSYSTEM",
    title: "The 5 Sovereign Engineering Blueprints (PRDs)",
    summary:
      "Explore the architectural roadmaps actively engineering Temporal's upcoming local cron daemon, envelope budgeting, and peer-to-peer sync.",
    content: [
      "PRD 06 (Vault Sync): Peer-to-peer LAN sync via local mDNS/TLS sockets, animated camera-to-screen QR migration, and user-owned WebDAV storage.",
      "PRD 07 (Local Cron): 100% on-device hardware alarm scheduling for bill dues (T-3/T-1), FD maturities, and velocity budget burn warnings. Zero cloud push telemetry.",
      "PRD 08 (Velocity Budgeting): Zero-based envelope allocation with real-time burn rate velocity telemetry (v = ΔSpent / Δt) and 4-state overheat indicators.",
      "PRD 09 (Automation Engine): Deterministic Boolean AST and regex rule engine with virtual pending cashflow queues and 1-tap statement reconciliation.",
      "PRD 10 (Hot-Folder Batching): Background watched directory for statement drops with hardware SecureStore bank password keychain unlocking.",
    ],
    docLink: "/docs",
    docLabel: "ROADMAP_SPECS: /docs",
    queryTag: "all",
    queryLabel: "KB_QUERIES: Explore All 77 Q&As",
  },
];

export default function ManualPage() {
  return (
    <>
      <JsonLd schema={manualSchema} />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 pb-48">
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/*  TRI-PILLAR SYSTEM NAVIGATION MATRIX                              */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="mb-12 border border-white/20 bg-black p-4 font-mono text-xs">
          <div className="mb-3 text-[10px] tracking-[0.25em] text-gray-500 uppercase">
            // TEMPORAL ARCHITECTURAL TOPOLOGY · TRI-PILLAR MATRIX
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="border border-white bg-white p-3 text-black">
              <div className="text-[10px] font-bold tracking-wider">[ 01 · ACTIVE ]</div>
              <div className="font-bold">OPERATIONAL MANUAL</div>
              <div className="mt-1 text-[10px] text-gray-800">
                Workflows, UI interactions, numpad, vault management
              </div>
            </div>

            <Link
              href="/docs"
              className="border border-white/20 bg-white/5 p-3 text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <div className="text-[10px] text-gray-400">[ 02 · SPECS ]</div>
              <div className="font-bold">TECHNICAL DOCS (13) →</div>
              <div className="mt-1 text-[10px] text-gray-400">
                Mathematical proofs, Viterbi Trellis, SQLite schemas, KDF
              </div>
            </Link>

            <Link
              href="/queries"
              className="border border-white/20 bg-white/5 p-3 text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <div className="text-[10px] text-gray-400">[ 03 · KNOWLEDGE ]</div>
              <div className="font-bold">SYSTEM QUERIES (77) →</div>
              <div className="mt-1 text-[10px] text-gray-400">
                Verified Q&As answering security, privacy, and quant math
              </div>
            </Link>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/*  PAGE HEADER                                                      */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">
              OPERATIONAL HANDBOOK // V2.17
            </span>
            <span className="border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-gray-400">
              APP: TEMPORAL · REPO: ZENLEDGER
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl leading-none font-bold italic md:text-7xl">
            Temporal Manual.
          </h1>
          <p className="max-w-3xl font-mono text-sm leading-relaxed text-gray-400">
            A comprehensive, rigorous operational manual for Temporal. Designed for privacy purists, quant investors, and sovereign operators who refuse to compromise their financial data to centralized cloud custodians.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs text-gray-500">
            <div className="h-[2px] w-12 bg-white"></div>
            <span>RUNTIME: REACT NATIVE 0.83 + EXPO 55</span>
            <span>·</span>
            <span>STORAGE: AIR-GAPPED SQLITE WAL</span>
            <span>·</span>
            <span>ENCRYPTION: AES-256-GCM</span>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/*  MANUAL CHAPTERS                                                  */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="space-y-16">
          {MANUAL_SECTIONS.map((section) => (
            <section
              key={section.code}
              className="group relative border-l-2 border-white/20 bg-black p-6 pl-8 transition-colors hover:border-white sm:p-8 sm:pl-10"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-gray-500 group-hover:text-emerald-400">
                  {section.code} // {section.tag}
                </span>
                <span className="font-mono text-[10px] text-gray-600">
                  TEMPORAL_KERNEL_V2
                </span>
              </div>

              <h2 className="mb-4 font-serif text-3xl italic text-white">
                {section.title}
              </h2>

              <p className="mb-6 font-mono text-xs text-gray-300">
                {section.summary}
              </p>

              <div className="space-y-4 font-sans text-sm leading-relaxed text-gray-400">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Cross-Connection Bar (Connecting to Docs & Queries) */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 font-mono text-xs">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={section.docLink}
                    className="border border-white/15 bg-white/5 px-3 py-1 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    {section.docLabel} →
                  </Link>
                  <Link
                    href={`/queries?tag=${section.queryTag}`}
                    className="border border-white/15 bg-white/5 px-3 py-1 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
                  >
                    {section.queryLabel} →
                  </Link>
                </div>
                <span className="text-[10px] text-gray-600 uppercase">
                  ZERO_CLOUD_EXPOSURE
                </span>
              </div>
            </section>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/*  SECTION 08: THE 5 MATHEMATICAL INVARIANTS CHEAT SHEET            */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="mt-24 border border-white/20 bg-black p-8 sm:p-10">
          <div className="mb-2 font-mono text-xs font-bold tracking-widest text-emerald-400 uppercase">
            // CHEAT SHEET FOR USERS & AI AGENTS
          </div>
          <h2 className="mb-6 font-serif text-3xl italic text-white">
            The 5 Mathematical Invariants of Temporal.
          </h2>

          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">1. Fixed-Point Scaling:</span> Fiat currency scaled 100× (integer cents/paise); asset units scaled 10,000× (4 decimal places). Floating-point IEEE 754 drift is mathematically eliminated.
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">2. Viterbi Balance Continuity:</span> Verified statement rows satisfying Balance[t] = Balance[t-1] &plusmn; Amount[t] receive immutable <span className="text-emerald-400">[MATH_LOCK]</span> and cannot be modified by heuristics.
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">3. FIFO Lot Invariant:</span> Chronological depletion (ORDER BY date ASC, _creationTime ASC). Corporate splits/bonuses adjust quantities but preserve cost basis (&Delta;Invested &equiv; 0).
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">4. Transit Rail Peeling:</span> Transit protocols (UPI, IMPS, NEFT, POS, BBPS, NACH) are peeled as transport layers; cat_transfer is strictly reserved for self-account sweeps.
            </div>
            <div>
              <span className="font-bold text-white">5. Complete Air-Gap Sovereignty:</span> Zero outbound telemetry sockets, hardware biometric keystore salt, and universal AES-256-GCM portability across Mobile, Desktop, and Web.
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/*  CALL TO ACTION & DOWNLOAD                                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="mt-24 border-t-2 border-white/20 pt-16 text-center">
          <h3 className="mb-4 font-serif text-3xl italic text-white">
            Install the Sovereign Operating System.
          </h3>
          <p className="mx-auto mb-10 max-w-md font-mono text-xs leading-relaxed text-gray-400">
            Temporal is delivered as a standalone, de-Googled APK. Zero account sign-up. Zero cloud heartbeats. Complete cryptographic data sovereignty from day one.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="border border-white bg-white px-8 py-4 font-mono text-xs font-bold tracking-widest text-black transition-colors hover:bg-emerald-400 hover:border-emerald-400 uppercase"
            >
              DOWNLOAD_APK (V2.17)
            </a>
            <Link
              href="/docs"
              className="border border-white/20 bg-black px-8 py-4 font-mono text-xs font-bold tracking-widest text-white transition-colors hover:bg-white/10 uppercase"
            >
              READ TECHNICAL SPECS →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
