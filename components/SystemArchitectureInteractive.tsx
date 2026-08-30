"use client";

import React, { useState } from "react";

type SchematicMode = "topology" | "ai_pipeline" | "spec";

export function SystemArchitectureInteractive() {
  const [activeTab, setActiveTab] = useState<SchematicMode>("topology");

  const currentIframeSrc =
    activeTab === "ai_pipeline"
      ? "/architecture/ai-pipeline.html"
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
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#00b2ff] font-bold uppercase mb-3 px-2.5 py-1 border border-[#00b2ff]/30 bg-[#00b2ff]/5">
              <span className="h-1.5 w-1.5 bg-[#00b2ff] animate-pulse" />
              SYSTEM_TOPOLOGY // VERIFIED_IR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
              Deterministic Architecture.
            </h2>
            <p className="font-mono text-[11px] sm:text-xs text-gray-400 uppercase tracking-widest mt-3 leading-relaxed">
              Zero-leakage local hardware boundary &middot; On-device neural parsing &middot; Real-time portfolio math
            </p>
          </div>

          {/* Subsystem Switcher Toolbar */}
          <div className="flex flex-wrap sm:flex-nowrap items-center border border-white/20 bg-[#050505] p-1 shadow-inner self-start lg:self-auto shrink-0">
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-3 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === "topology"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [01. TOPOLOGY]
            </button>
            <button
              onClick={() => setActiveTab("ai_pipeline")}
              className={`px-3 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === "ai_pipeline"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [02. AI_PIPELINE]
            </button>
            <button
              onClick={() => setActiveTab("spec")}
              className={`px-3 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === "spec"
                  ? "bg-white text-black font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [03. SPEC_IR]
            </button>
            <a
              href={currentIframeSrc}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 border-l border-white/10 font-mono text-[10px] sm:text-[11px] text-[#00b2ff] hover:text-white hover:bg-[#00b2ff]/10 tracking-wider uppercase transition-all flex items-center gap-1 whitespace-nowrap"
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
                  ? "ZENLEDGER_AI_GEMMA_DATAFLOW_V2.16"
                  : "ZENLEDGER_FOS_CORE_TOPOLOGY_V2.16"}
              </span>
              <span className="text-emerald-400 hidden xs:inline">[ STATUS: 9/9 CHECKS VERIFIED ]</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[8px] sm:text-[9px] text-gray-500">
              <span>CANVAS: #000000</span>
              <span className="hidden sm:inline">GRID: 4PX</span>
              <span>LATENCY: &lt;16MS</span>
            </div>
          </div>

          {/* View Container */}
          {activeTab !== "spec" ? (
            <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] bg-black">
              <iframe
                key={activeTab}
                src={currentIframeSrc}
                className="w-full h-full border-none"
                title="ZenLedger System Architecture Interactive Diagram"
              />
            </div>
          ) : (
            <div className="p-4 sm:p-6 h-[520px] sm:h-[620px] md:h-[720px] overflow-auto font-mono text-xs text-gray-300 bg-[#050505]">
              <pre className="text-emerald-400/90 leading-relaxed whitespace-pre-wrap">
{`{
  "system": "ZenLedger Financial Operating System",
  "security_model": "Zero-Trust Local Hardware Enclave",
  "storage_engine": "Expo SQLite Encrypted (ACID Compliant)",
  "intelligence": {
    "engine": "LiteRT / Google Gemma 2B",
    "execution_target": "NPU / CPU On-Device",
    "telemetry": "Zero Remote Cloud Ingestion",
    "preprocessor": "LayoutAnalyzer Spatial Bounding Normalizer",
    "dag_solver": "LedgerPathFinder O(N^2) Dynamic Programming Solver"
  },
  "market_telemetry": {
    "mutual_funds": "AMFI Live NAV Stream",
    "equities": "Yahoo Finance Vector Engine",
    "commodities": "Spot Gold Aggregator"
  },
  "client_runtime": {
    "framework": "Expo SDK 55 + React 19 + React Native 0.83",
    "virtualization": "@legendapp/list 60fps Native",
    "haptics": "expo-haptics Heavy Industrial switches"
  }
}`}
              </pre>
            </div>
          )}

          {/* Bottom Footnote Bar */}
          <div className="border-t border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 bg-black flex flex-col sm:flex-row items-center justify-between font-mono text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-widest gap-2">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="text-white">PROVENANCE:</span>
              <span>Compiled via Archify deterministic intermediate representation</span>
            </div>
            <div className="text-gray-400">
              [ 100% AIR-GAPPED BY DEFAULT ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
