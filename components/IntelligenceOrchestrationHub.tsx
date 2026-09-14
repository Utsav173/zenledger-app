"use client";

import React, { useState, useEffect } from "react";

interface SubFeature {
  id: string;
  code: string;
  tag: string;
  title: string;
  summary: string;
  pillColor: string;
  specs: { label: string; value: string }[];
  command: string;
  interactiveType: "statement" | "vision" | "chat" | "categorize" | "insights" | "search";
  mockData: {
    heading: string;
    subheading: string;
    items: { label: string; detail: string; status?: string; badge?: string }[];
  };
}

const ORCHESTRATION_NODES: SubFeature[] = [
  {
    id: "statement_simplifier",
    code: "01",
    tag: "MULTI-FORMAT PARSER",
    title: "Statement Simplifier Engine",
    summary:
      "Ingests raw PDF, CSV, XLS, XLSX, and TXT bank or card statements. Employs in-memory password unlocking and deterministic DAG pattern alignment without leaking unencrypted text.",
    pillColor: "border-sky-500/30 bg-sky-500/5 text-sky-400",
    specs: [
      { label: "INGESTION_TYPES", value: "PDF, CSV, XLS, XLSX, TXT" },
      { label: "PASSWORD_SECURITY", value: "VOLATILE_RAM_ONLY" },
      { label: "PARSER_PIPELINE", value: "SPATIAL_DAG_NORMALIZER" },
    ],
    command: "EXEC::FILE_SIMPLIFIER --AUTO-MAP",
    interactiveType: "statement",
    mockData: {
      heading: "HDFC_BANK_STATEMENT_DEC2025.PDF",
      subheading: "PASSWORD VERIFIED · 148 ENTRIES DETECTED",
      items: [
        { label: "2025.12.28", detail: "ZERODHA BROKING LTD", status: "-₹45,000.00", badge: "EQUITY" },
        { label: "2025.12.24", detail: "AMZN MKTP IN PAYMENTS", status: "-₹2,499.00", badge: "SHOPPING" },
        { label: "2025.12.15", detail: "SALARY CREDIT - ACME CORP", status: "+₹1,85,000.00", badge: "INCOME" },
      ],
    },
  },
  {
    id: "vision_receipt",
    code: "02",
    tag: "ON-DEVICE VISION",
    title: "Receipt & Invoice Scanner",
    summary:
      "Point-and-shoot camera pipeline using on-device Gemma Vision. Directly extracts merchant, total amount, taxes, timestamp, and payment method in under 80ms.",
    pillColor: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    specs: [
      { label: "INPUT_STREAM", value: "HARDWARE_CAMERA_RAW" },
      { label: "OCR_TARGET", value: "LITERT_GEMMA_VISION" },
      { label: "ACCURACY_INDEX", value: "99.2% RECOGNITION" },
    ],
    command: "SCAN::OPTICAL_LAYER --ENCRYPTED",
    interactiveType: "vision",
    mockData: {
      heading: "CAMERA_FEED::FRAME_0891.RAW",
      subheading: "BOUNDING BOX DETECTED · CONFIDENCE 99.4%",
      items: [
        { label: "MERCHANT", detail: "BLUE TOKAI COFFEE ROASTERS", status: "MATCHED" },
        { label: "TIMESTAMP", detail: "2026-01-14T14:32:00Z", status: "VERIFIED" },
        { label: "AMOUNT_PAID", detail: "₹480.00 (TAX INCL)", status: "GST: ₹24.00" },
      ],
    },
  },
  {
    id: "atomic_chat",
    code: "03",
    tag: "CONVERSATIONAL AGENT",
    title: "Atomic Chat Orchestrator",
    summary:
      "Interactive natural language financial copilot. Ask 'What did I spend on groceries in August?' or instruct 'Log ₹4,500 fuel expense from HDFC' for instant execution.",
    pillColor: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400",
    specs: [
      { label: "AGENT_RUNTIME", value: "STRUCTURED_TOOL_CALL" },
      { label: "LEDGER_WRITE", value: "ATOMIC_ACID_COMMIT" },
      { label: "PRIVACY_FENCE", value: "LOCAL_DEVICE_AIR_GAP" },
    ],
    command: "DISPATCH::AGENT_QUERY --REALTIME",
    interactiveType: "chat",
    mockData: {
      heading: "CONVERSATIONAL_AGENT // REPL",
      subheading: "INTENT: RECORD_TRANSACTION · TOOL: CREATE_ENTRY",
      items: [
        { label: "USER >", detail: "Log ₹4,500 petrol from HDFC Bank yesterday", status: "INPUT" },
        { label: "AGENT <", detail: "Saved: -₹4,500.00 [Transport: Fuel] Account: HDFC", status: "COMMITTED" },
        { label: "STATUS", detail: "Balance updated · Ledger checksum verified", status: "ACID_OK" },
      ],
    },
  },
  {
    id: "smart_categorize",
    code: "04",
    tag: "AUTO TAGGING",
    title: "Neural Smart Categorizer",
    summary:
      "Continuously learns spending taxonomy to auto-tag uncategorized entries. Converts cryptic merchant descriptors (e.g. 'POS_049182_AMZN_IN') into clean structured categories.",
    pillColor: "border-amber-500/30 bg-amber-500/5 text-amber-400",
    specs: [
      { label: "TAXONOMY_MAP", value: "DYNAMIC_CATEGORY_V2" },
      { label: "CONFIDENCE_GATE", value: "> 94% APPROVAL_REQ" },
      { label: "BULK_CAPACITY", value: "500 TX / 0.14 SEC" },
    ],
    command: "APPLY::SMART_TAXONOMY --BATCH",
    interactiveType: "categorize",
    mockData: {
      heading: "TAXONOMY_INFERENCE // CLASSIFIER",
      subheading: "VECTOR SIMILARITY COSINE SCORE: 0.968",
      items: [
        { label: "RAW_STRING", detail: "UPI/234910293/SWIGGY_BLR", status: "FOOD & DINING", badge: "98.4%" },
        { label: "RAW_STRING", detail: "ACH_DR_ZERODHA_MKT_NSE", status: "INVESTMENTS", badge: "99.1%" },
        { label: "RAW_STRING", detail: "NETFLIX_DIGITAL_ENT_MUM", status: "SUBSCRIPTIONS", badge: "97.5%" },
      ],
    },
  },
  {
    id: "spending_insights",
    code: "05",
    tag: "TELEMETRY SYNTHESIS",
    title: "Spending Patterns & Outlier Telemetry",
    summary:
      "Autonomous financial auditor that surfaces hidden recurring subscriptions, lifestyle creep, cash leaks, and budget variances in crisp, actionable bullet points.",
    pillColor: "border-rose-500/30 bg-rose-500/5 text-rose-400",
    specs: [
      { label: "AUDIT_WINDOW", value: "ROLLING_30_90_365D" },
      { label: "LEAK_DETECTION", value: "SUBSCRIPTION_DRIFT" },
      { label: "OUTPUT_FORMAT", value: "BRUTALIST_BRIEFING" },
    ],
    command: "GENERATE::AUDIT_REPORT --FULL",
    interactiveType: "insights",
    mockData: {
      heading: "AUTONOMOUS_AUDIT // SIGNAL_SYNTHESIS",
      subheading: "ANALYSIS COMPLETED IN 14MS ON LOCAL CHIP",
      items: [
        { label: "SIGNAL_01", detail: "Dining expenses rose 18.4% vs 90d baseline", status: "DRIFT" },
        { label: "SIGNAL_02", detail: "3 recurring SaaS subscriptions detected (₹3,420/mo)", status: "RECURRING" },
        { label: "SIGNAL_03", detail: "Cash savings rate maintained at +42.8%", status: "OPTIMAL" },
      ],
    },
  },
  {
    id: "cognitive_search",
    code: "06",
    tag: "LOCAL VECTOR SEARCH",
    title: "Cognitive TF-IDF Semantic Explorer",
    summary:
      "Search across years of transaction memos and merchant names using semantic concept vectors. Instant zero-cloud retrieval even with misspelled queries or vague terms.",
    pillColor: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
    specs: [
      { label: "INDEX_ENGINE", value: "ON-DEVICE_TF-IDF_BM25" },
      { label: "LATENCY_PROFILE", value: "< 4MS DETERMINISTIC" },
      { label: "CLOUD_DEPENDENCY", value: "0.00% AIR-GAPPED" },
    ],
    command: "QUERY::TFIDF_INDEX --SEMANTIC",
    interactiveType: "search",
    mockData: {
      heading: "COGNITIVE_SEARCH::CORPUS_QUERY",
      subheading: "QUERY: 'plane tickets to tokyo' -> 4 MATCHES",
      items: [
        { label: "2025.10.12", detail: "ALL NIPPON AIRWAYS TYO", status: "₹64,200.00", badge: "TRAVEL" },
        { label: "2025.10.14", detail: "SHINJUKU PRINCE HOTEL", status: "₹38,900.00", badge: "HOTEL" },
        { label: "2025.08.19", detail: "NARITA AIRPORT EXPRESS", status: "₹2,150.00", badge: "TRANSIT" },
      ],
    },
  },
];

export function IntelligenceOrchestrationHub() {
  const [selectedId, setSelectedId] = useState<string>("statement_simplifier");
  const [pulseTick, setPulseTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const activeFeature =
    ORCHESTRATION_NODES.find((f) => f.id === selectedId) ||
    ORCHESTRATION_NODES[0];

  return (
    <section className="relative py-20 md:py-32 bg-[#030303] border-b border-white/10 overflow-hidden">
      {/* Structural crosshair & grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#00b2ff] font-bold uppercase mb-3 px-2.5 py-1 border border-[#00b2ff]/30 bg-[#00b2ff]/5">
              <span className="h-1.5 w-1.5 bg-[#00b2ff] animate-pulse" />
              INTELLIGENCE_HUB // 6X AI WORKFLOWS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
              Autonomous Intelligence Array.
            </h2>
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-3">
              Six dedicated AI features running 100% on-device. Zero subscriptions. Zero cloud reliance.
            </p>
          </div>
          <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              [ ENGINE: LITERT + GEMMA ]
            </span>
            <span className="hidden sm:inline text-gray-600">[ NPU_ACCELERATED ]</span>
          </div>
        </div>

        {/* Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Feature Selector Tabs (Horizontal pill strip on mobile, vertical stack on desktop) */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 scrollbar-none touch-pan-x overscroll-x-contain pr-4 lg:pr-0">
            {ORCHESTRATION_NODES.map((node) => {
              const isSelected = selectedId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  className={`text-left p-3 sm:p-4 border transition-all duration-300 relative group cursor-pointer shrink-0 min-w-[200px] sm:min-w-[240px] lg:min-w-0 ${
                    isSelected
                      ? "border-white bg-white/10 shadow-lg shadow-white/5"
                      : "border-white/10 bg-black/40 hover:border-white/30 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-gray-500 font-bold">
                        [{node.code}]
                      </span>
                      <span
                        className={`text-[8px] font-mono font-bold tracking-widest px-1.5 py-0.2 border ${node.pillColor}`}
                      >
                        {node.tag}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00b2ff] animate-pulse" />
                    )}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white tracking-tight group-hover:text-gray-200 truncate">
                    {node.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Node Terminal View */}
          <div className="lg:col-span-7 border-2 border-white/20 bg-[#020202] p-4 sm:p-7 md:p-10 relative brutalist-luxe">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-[10px] uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">●</span>
                <span className="text-white font-bold">
                  NODE::{activeFeature.code}_{activeFeature.id.toUpperCase()}
                </span>
              </div>
              <span className="text-gray-500">[ SECURITY_ISOLATED ]</span>
            </div>

            {/* Title & Description */}
            <div className="mb-8">
              <div className="inline-block border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-3">
                {activeFeature.tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-white mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed min-h-[60px] sm:min-h-[48px]">
                {activeFeature.summary}
              </p>
            </div>

            {/* Interactive Simulated Terminal Feed */}
            <div className="border border-white/15 bg-black/80 p-4 sm:p-5 mb-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="font-mono text-[9px] text-[#00b2ff] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00b2ff] animate-ping" />
                  {activeFeature.mockData.heading}
                </div>
                <div className="font-mono text-[8px] text-gray-500 uppercase">
                  {activeFeature.mockData.subheading}
                </div>
              </div>

              <div className="space-y-2.5 font-mono text-xs min-h-[145px]">
                {activeFeature.mockData.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/[0.02] border border-white/5 p-2.5 gap-2 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-[10px] w-20 shrink-0 uppercase">{item.label}</span>
                      <span className="text-gray-200 font-bold text-xs truncate max-w-[240px] sm:max-w-[280px]">
                        {item.detail}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {item.badge && (
                        <span className="text-[8px] px-1.5 py-0.5 border border-white/10 text-gray-400 uppercase">
                          {item.badge}
                        </span>
                      )}
                      {item.status && (
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry Specs */}
            <div className="border border-white/10 bg-black/40 p-4 sm:p-5 mb-8">
              <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-3">
                // SYSTEM_SPECIFICATIONS
              </div>
              <div className="space-y-2.5 font-mono text-xs">
                {activeFeature.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2 gap-1"
                  >
                    <span className="text-gray-500 uppercase text-[11px]">{spec.label}</span>
                    <span className="text-emerald-400 font-bold uppercase text-[11px]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Command Prompt Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-4 font-mono text-xs gap-3">
              <div className="text-gray-400 flex items-center gap-2 truncate">
                <span className="text-[#00b2ff] font-bold">&gt;</span>
                <span className="truncate text-gray-300">{activeFeature.command}</span>
              </div>
              <a
                href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
                className="px-5 py-2.5 border border-white bg-white text-black font-bold text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-all text-center whitespace-nowrap"
              >
                TEST IN APP →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
