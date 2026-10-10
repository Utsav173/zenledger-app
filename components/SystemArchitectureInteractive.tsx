"use client";

import React, { useState } from "react";

type SchematicMode = "topology" | "ai_pipeline" | "laya_engine" | "spec";

export function SystemArchitectureInteractive() {
  const [activeTab, setActiveTab] = useState<SchematicMode>("topology");

  const currentIframeSrc =
    activeTab === "ai_pipeline"
      ? "/architecture/ai-pipeline.html"
      : activeTab === "laya_engine"
      ? "/architecture/laya-decision-engine.html"
      : "/architecture/zenledger-architecture.html";

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#000000] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 relative z-10">
        {/* Header Title & Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-[#00b2ff] font-bold uppercase mb-3 px-2.5 py-1 border border-[#00b2ff]/30 bg-[#00b2ff]/5">
              <span className="h-1.5 w-1.5 bg-[#00b2ff]" />
              SYSTEM ARCHITECTURE // SPECIFICATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
              Local-First System Architecture.
            </h2>
            <p className="font-mono text-[11px] sm:text-xs text-gray-400 uppercase tracking-widest mt-3 leading-relaxed">
              Air-Gapped Local SQLite WAL &middot; On-Device LiteRT Extraction &middot; Sub-5ms Autonomous Decision Engine
            </p>
          </div>

          {/* Subsystem Switcher Toolbar */}
          <div className="flex flex-wrap sm:flex-nowrap items-center border border-white/20 bg-[#050505] p-1 shadow-inner self-start lg:self-auto shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-3 py-2.5 min-h-[44px] flex-1 sm:flex-initial font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap text-center ${
                activeTab === "topology"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              [01. TOPOLOGY]
            </button>
            <button
              onClick={() => setActiveTab("ai_pipeline")}
              className={`px-3 py-2.5 min-h-[44px] flex-1 sm:flex-initial font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap text-center ${
                activeTab === "ai_pipeline"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              [02. INGESTION]
            </button>
            <button
              onClick={() => setActiveTab("laya_engine")}
              className={`px-3 py-2.5 min-h-[44px] flex-1 sm:flex-initial font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap text-center ${
                activeTab === "laya_engine"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              [03. DECISION_ENGINE]
            </button>
            <button
              onClick={() => setActiveTab("spec")}
              className={`px-3 py-2.5 min-h-[44px] flex-1 sm:flex-initial font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap text-center ${
                activeTab === "spec"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
              }`}
            >
              [04. SPEC_IR]
            </button>
            <a
              href={currentIframeSrc}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2.5 min-h-[44px] border-l border-white/10 font-mono text-[10px] sm:text-[11px] text-[#00b2ff] hover:text-white hover:bg-[#00b2ff]/10 active:bg-[#00b2ff]/20 tracking-wider uppercase transition-all flex items-center justify-center gap-1 whitespace-nowrap w-full sm:w-auto"
              title="Open full standalone schematic"
            >
              <span>FULLSCREEN</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Brutalist Frame */}
        <div className="border border-white/20 bg-[#020202] relative shadow-2xl overflow-hidden">
          {/* Top Industrial Bar */}
          <div className="border-b border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/[0.02] flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-[10px] text-gray-400 gap-2">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white font-bold tracking-widest">
                {activeTab === "ai_pipeline"
                  ? "ZENLEDGER_INGESTION_PIPELINE"
                  : activeTab === "laya_engine"
                  ? "LAYA_AUTONOMOUS_DECISION_ENGINE"
                  : "ZENLEDGER_CORE_ARCHITECTURE"}
              </span>
              <span className="text-emerald-400 hidden xs:inline">[ VECTOR SVG · ZERO RUNTIME JS ]</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[8px] sm:text-[9px] text-gray-500">
              <span>CANVAS: #090A0F</span>
              <span className="hidden sm:inline">GRID: 4PX</span>
              <span className="text-[#00b2ff]">INVARIANTS: 13/13 LOCKED</span>
            </div>
          </div>

          {/* View Container */}
          {activeTab !== "spec" ? (
            <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] bg-black">
              <iframe
                key={activeTab}
                src={currentIframeSrc}
                className="w-full h-full border-none"
                title="ZenLedger System Architecture Diagram"
              />
            </div>
          ) : (
            <div className="p-4 sm:p-6 h-[520px] sm:h-[620px] md:h-[720px] overflow-auto font-mono text-xs text-gray-300 bg-[#050505] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_#050505]">
              <pre className="text-emerald-400/90 leading-relaxed whitespace-pre-wrap">
{`{
  "system": "ZenLedger Operating System",
  "version": "3.0.0",
  "security_architecture": {
    "boundary": "100% Air-Gapped Local Hardware Sandbox",
    "cryptography": "AES-256-GCM Backup Envelope with PBKDF2-SHA256 (600,000 iterations)",
    "hardware_keystore": "Biometric Secure Enclave Key Derivation",
    "telemetry": "Zero Remote Cloud Ingestion / Zero Outbound Sockets"
  },
  "storage_engine": {
    "database": "SQLite 3 (WAL Mode, Foreign Keys Enforced)",
    "tables": "13 Relational Schemas with Self-Healing Migration Guard",
    "fiat_precision": "Fixed-Point 100x Integer Paise/Cents (Zero IEEE 754 Float Drift)",
    "asset_precision": "Fixed-Point 10,000x Integer Units (4 Decimal Places)"
  },
  "statement_ingestion_pipeline": {
    "spatial_geometry": "SpatialLattice 2D Proximity Graph + 1D Gaussian KDE Column Discovery",
    "trellis_solver": "ViterbiBalanceSolver (Balance[t] = Balance[t-1] ± Amount[t])",
    "invariant_protection": "[MATH_LOCK] Stamped Immutable Rows (No LLM Mutation)",
    "entropy_filter": "Shannon Entropy H(X) Transit Protocol Peeler"
  },
  "neural_subsystem": {
    "local_runtime": "Google LiteRT (react-native-litert-lm)",
    "quantized_models": ["Gemma 2B INT4", "Gemma 3 1B", "Qwen 2.5 1.5B"],
    "execution_hardware": "On-Device NPU / Quantized CPU",
    "counterparty_cache": "MerchantMemoryGraph Trigram Fuzzy Normalizer"
  },
  "financial_quant_engines": {
    "lot_depletion": "Strict Chronological FIFO (ORDER BY date ASC, _creationTime ASC)",
    "corporate_actions": "Split & Bonus Factor F (RemainingQty * F, Price / F, ΔInvested ≡ 0)",
    "xirr_engine": "Newton-Raphson Solver with 10^-7 Convergence Limit & [-0.99, 100.0] Guards",
    "market_feeds": ["Direct AMFI NAV (44,000+ Schemes)", "Cloudflare Worker Yahoo Proxy", "PAXG Spot Gold"]
  },
  "client_runtime": {
    "stack": "Expo SDK 55 + React 19 + React Native 0.83.2",
    "styling": "Utilitarian Financial Editorial (Clean Tokens, 1px Hairlines)"
  }
}`}
              </pre>
            </div>
          )}

          {/* Bottom Footnote Bar */}
          <div className="border-t border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 bg-black flex flex-col sm:flex-row items-center justify-between font-mono text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest gap-2">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="text-white">STANDARDS:</span>
              <span>Self-contained SVG vector · 4px coordinate grid · 0 external JS dependencies</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00b2ff]">[ VITERBI TRELLIS LOCKED ]</span>
              <span className="text-gray-400">[ 100% AIR-GAPPED BY DEFAULT ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
