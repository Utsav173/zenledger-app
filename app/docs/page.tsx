import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation & System Architecture | Temporal",
  description: "Official Temporal technical documentation: local-first SQLite WAL architecture, dual-system cognitive ingestion, Viterbi balance verification, FIFO investment math, and zero-knowledge cryptographic recovery.",
  openGraph: { images: ["/og/docs.png"] },
  twitter: { images: ["/og/docs.png"] },
};

const CHAPTERS = [
  {
    group: "The System",
    items: [
      {
        href: "/docs",
        tag: "00",
        title: "Master the Ledger",
        description: "Foundational philosophy, dual-perspective guide, and operational invariants.",
      },
      {
        href: "/docs/core",
        tag: "00.1",
        title: "Local-First Architecture",
        description: "Zero cloud telemetry, SQLite WAL mode, Self-Healing Schema Guard across 13 relations, and atomic local persistence.",
      },
    ],
  },
  {
    group: "Daily Finance",
    items: [
      {
        href: "/docs/ledger",
        tag: "01",
        title: "Vaults & The Ledger",
        description: "Multi-vault liquidity architecture, atomic double-entry self-sweeps, and transit rail peeling.",
      },
      {
        href: "/docs/transactions",
        tag: "01.1",
        title: "Transaction Engine",
        description: "RFC 4180 parsing, delimiter entropy detection, Viterbi Trellis balance continuity, and [MATH_LOCK].",
      },
      {
        href: "/docs/categories",
        tag: "01.2",
        title: "Custom Categories & Cognitive Mapping",
        description: "On-device Multinomial Naive Bayes MAP, Information Entropy token isolation, and trigram fuzzy matching.",
      },
    ],
  },
  {
    group: "Wealth Tracking",
    items: [
      {
        href: "/docs/investments",
        tag: "02",
        title: "Portfolio Overview & Telemetry",
        description: "Newton-Raphson XIRR solver (10⁻⁷ convergence), Herfindahl HHI concentration, and Pareto 80/20 telemetry.",
      },
      {
        href: "/docs/stocks-mf",
        tag: "02.1",
        title: "Stocks & Mutual Funds",
        description: "Chronological FIFO lot depletion, corporate action split invariants (ΔCostBasis ≡ 0), and direct AMFI NAV ingestion.",
      },
      {
        href: "/docs/commodities",
        tag: "02.2",
        title: "Gold & Commodities",
        description: "PAXG spot bullion feed, karat purity scaling (K = Karat / 24), and making charge capitalization.",
      },
      {
        href: "/docs/fixed-income",
        tag: "02.3",
        title: "Fixed Income (FD)",
        description: "Daily compound accrual engine with fixed-point integer math and statutory benchmarks (PPF, EPF).",
      },
    ],
  },
  {
    group: "Security & Sovereignty",
    items: [
      {
        href: "/docs/security",
        tag: "03",
        title: "Biometric Enclave & Local Security",
        description: "Hardware keystore derivation, zero outbound telemetry sockets, and instantaneous nuclear wipe.",
      },
      {
        href: "/docs/recovery",
        tag: "03.1",
        title: "The Cryptographic Recovery Kit",
        description: "Universal AES-256-GCM recovery envelope with PBKDF2-SHA256 (600,000 rounds) across all 13 SQLite relations.",
      },
      {
        href: "/docs/data",
        tag: "03.2",
        title: "Data Sovereignty & Universal Portability",
        description: "Cross-platform SQLite database portability across Mobile, Desktop (Tauri/Electron), and Web (WASM OPFS).",
      },
      {
        href: "/docs/ai",
        tag: "04",
        title: "Dual-System Cognitive Topology",
        description: "System 1 deterministic algorithmic engines (SpatialLattice, Viterbi Trellis) coupled with System 2 on-device LiteRT neural models.",
      },
    ],
  },
];

export default function DocsIntroduction() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00] Introduction
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Master the Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Temporal is an air-gapped, zero-knowledge financial operating system engineered for absolute privacy and mathematical invariance.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">System Foundations</h2>
        <p className="mb-8 leading-relaxed text-gray-400">
          Financial operating systems must not be built on best-effort heuristics, probabilistic AI hallucinations, or surveillance-based third-party aggregators. Temporal runs entirely on-device, storing all state inside an air-gapped SQLite database protected by hardware biometric enclaves.
        </p>

        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div className="border border-white/10 bg-black p-8">
            <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The Sovereign User Perspective
            </h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Clear, practical guides detailing multi-vault liquidity management, automated bank statement discovery, tax-lot accounting for stock splits, and generational bullion tracking.
            </p>
          </div>
          <div className="border border-white/10 bg-black p-8">
            <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The Rigorous Engineering Specs (25%)
            </h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Complete mathematical formulations, fixed-point integer scaling ($100\times$ fiat, $10,000\times$ assets), Viterbi Trellis DP algorithms, and AES-256-GCM authenticated envelopes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 font-serif text-3xl italic">Documentation Index</h2>
        <div className="space-y-12">
          {CHAPTERS.map((chapter) => (
            <div key={chapter.group} className="border-t border-white/10 pt-8">
              <h3 className="mb-6 font-mono text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                {chapter.group}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {chapter.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block border border-white/10 bg-black p-6 transition-colors hover:border-white/30 hover:bg-white/[0.02]"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-gray-500">
                        [{item.tag}]
                      </span>
                      <span className="font-mono text-xs text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </div>
                    <h4 className="mb-2 font-serif text-lg text-white italic group-hover:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            System Invariants
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            The 5 Mathematical Invariants of Temporal
          </h2>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">1. Fixed-Point Scaling:</span> Fiat amounts scaled 100× (paise/cents); asset units scaled 10,000× (4 decimals). IEEE 754 float drift is mathematically eliminated.
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">2. Viterbi Balance Continuity:</span> Verified statement rows satisfying Balance[t] = Balance[t-1] &plusmn; Amount[t] receive immutable <span className="text-[#10B981]">[MATH_LOCK]</span> and cannot be modified by heuristics.
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">3. FIFO Lot Invariant:</span> Chronological depletion (`ORDER BY date ASC, _creationTime ASC`). Corporate actions (bonus/split) adjust quantities but preserve cost basis (&Delta;Invested &equiv; 0).
            </div>
            <div className="border-b border-white/5 pb-3">
              <span className="font-bold text-white">4. Transit Rail Peeling:</span> Payment rails (UPI, IMPS, NEFT, POS, BBPS, NACH) are isolated as transport protocols; `cat_transfer` is strictly reserved for self-account sweeps.
            </div>
            <div>
              <span className="font-bold text-white">5. Complete Air-Gap Sovereignty:</span> Zero outbound telemetry sockets, hardware biometric keystore salt, and universal AES-256-GCM portability across Mobile, Desktop, and Web.
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
