"use client";

import React, { useState, useEffect } from "react";

const STEP_DURATION = 4200;

interface PipelineStep {
  id: string;
  code: string;
  label: string;
  sublabel: string;
  status: string;
}

const STEPS: PipelineStep[] = [
  {
    id: "01",
    code: "RAM_INGEST",
    label: "INPUT_STREAM",
    sublabel: "In-memory volatile buffer",
    status: "PASS",
  },
  {
    id: "02",
    code: "DAG_ALIGN",
    label: "SPATIAL_DAG",
    sublabel: "Column & balance solver",
    status: "ALIGNED",
  },
  {
    id: "03",
    code: "DUAL_AI_INFER",
    label: "GEMMA + LAYA",
    sublabel: "Generative LLM + System 1 Classifier",
    status: "28MS",
  },
  {
    id: "04",
    code: "SQLITE_ACID",
    label: "COMMIT_LEDGER",
    sublabel: "Encrypted table write",
    status: "COMMITTED",
  },
];

function Step01Visualization() {
  return (
    <div className="font-mono w-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.3em] text-emerald-400 uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          STAGE_01 // SECURE_INGESTION
        </span>
        <span className="text-[8px] text-gray-500 uppercase">VOLATILE_RAM_ONLY</span>
      </div>

      <div className="border border-white/10 bg-black/90 p-3.5 space-y-2 text-[10px]">
        <div className="flex justify-between items-baseline border-b border-white/5 pb-1.5">
          <span className="text-gray-500 text-[9px] uppercase">SOURCE_FILE</span>
          <span className="text-white font-bold tracking-tight">HDFC_DEC_2025.PDF</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-white/5 pb-1.5">
          <span className="text-gray-500 text-[9px] uppercase">DECRYPTION</span>
          <span className="text-emerald-400 font-bold tracking-tight">IN-MEMORY (ZERO-DISK)</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-white/5 pb-1.5">
          <span className="text-gray-500 text-[9px] uppercase">EXTRACTED_RECORDS</span>
          <span className="text-white font-bold">148 TRANSACTIONS</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-gray-500 text-[9px] uppercase">SECURITY_BOUNDARY</span>
          <span className="text-sky-400 font-bold">HARDWARE_KEYSTORE</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-gray-500">
        <span>PARSING STATUS: 100% OK</span>
        <span className="text-emerald-400">0 BYTES TRANSMITTED</span>
      </div>
    </div>
  );
}

function Step02Visualization() {
  return (
    <div className="font-mono w-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.3em] text-sky-400 uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          STAGE_02 // SPATIAL_DAG_NORMALIZATION
        </span>
        <span className="text-[8px] text-gray-500 uppercase">O(N^2) DP SOLVER</span>
      </div>

      <div className="border border-white/10 bg-black/90 p-3 space-y-2 text-[9px]">
        {[
          { metric: "DATE_COLUMN_ALIGNMENT", score: "100%", state: "ALIGNED" },
          { metric: "MERCHANT_NORMALIZATION", score: "99.4%", state: "RECONSTRUCTED" },
          { metric: "DEBIT_CREDIT_DISCRIMINATION", score: "100%", state: "BALANCED" },
          { metric: "RUNNING_BALANCE_DAG_PROOF", score: "99.8%", state: "VERIFIED" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
            <span className="text-gray-400">{item.metric}</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">{item.score}</span>
              <span className="text-[8px] text-sky-400 font-bold">[{item.state}]</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[8px] text-gray-500 uppercase tracking-widest flex justify-between">
        <span>GEOMETRY: 4-COLUMN MATRIX</span>
        <span className="text-sky-400">MATH_CONSISTENT</span>
      </div>
    </div>
  );
}

function Step03Visualization() {
  return (
    <div className="font-mono w-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.3em] text-indigo-400 uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          STAGE_03 // DUAL_AI_INFERENCE_PIPELINE
        </span>
        <span className="text-[8px] text-emerald-400 uppercase">LATENCY: 28MS (LAYA)</span>
      </div>

      <div className="border border-white/10 bg-black/90 p-3 space-y-2.5 text-[9px]">
        <div>
          <span className="text-gray-500 uppercase text-[8px]">INPUT_TOKEN_STREAM:</span>
          <div className="text-white font-bold bg-white/5 border border-white/10 p-2 mt-1 truncate">
            "UPI/60293019230/ZERODHA_BROKING/NSE_SETTLE"
          </div>
        </div>
        <div className="border-t border-white/5 pt-2 grid grid-cols-2 gap-2 text-[9px]">
          <div>
            <span className="text-gray-500 text-[8px] uppercase block">LAYA DECISION (SYS 1)</span>
            <span className="text-emerald-400 font-bold">EQUITY_INVESTMENT (99.4%)</span>
          </div>
          <div>
            <span className="text-gray-500 text-[8px] uppercase block">FLOW & RAIL</span>
            <span className="text-cyan-400 font-bold">OUTFLOW · P2M MERCHANT</span>
          </div>
        </div>
      </div>

      <div className="mt-3 text-[8px] text-gray-500 uppercase tracking-widest flex justify-between">
        <span>ENGINE: GEMMA_2B + LAYA_INT4</span>
        <span className="text-indigo-400">NO_CLOUD_LEAK</span>
      </div>
    </div>
  );
}

function Step04Visualization() {
  const rows = [
    { merchant: "ZERODHA BROKING", date: "2026.01.12", amt: "-₹1,24,000.00", cat: "INVESTMENTS", positive: false },
    { merchant: "AMAZON RETAIL BLR", date: "2026.01.10", amt: "-₹3,450.00", cat: "COMMERCE", positive: false },
    { merchant: "ACME CORP PAYROLL", date: "2026.01.01", amt: "+₹2,10,000.00", cat: "SALARY", positive: true },
  ];

  return (
    <div className="font-mono w-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.3em] text-emerald-400 uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          STAGE_04 // ACID_COMMIT_SUCCESS
        </span>
        <span className="text-[8px] text-emerald-400 uppercase">LOCAL_SQLITE</span>
      </div>

      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between border border-white/10 bg-black/90 p-2.5 hover:border-emerald-500/40 transition-colors text-[9px]"
          >
            <div>
              <div className="font-bold text-white uppercase tracking-tight">{r.merchant}</div>
              <div className="text-[8px] text-gray-500">{r.date} · {r.cat}</div>
            </div>
            <div className={`font-bold text-xs tabular-nums ${r.positive ? "text-emerald-400" : "text-gray-200"}`}>
              {r.amt}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[8px] text-gray-500 uppercase tracking-widest flex justify-between">
        <span>LEDGER STATE: ACID_PERSISTED</span>
        <span className="text-emerald-400 font-bold">COMMIT_HASH: 0x8F2B</span>
      </div>
    </div>
  );
}

export function AIExtractionDemo() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, STEP_DURATION);
    const tickInterval = setInterval(() => {
      setTick((t) => t + 1);
    }, 1800);
    return () => {
      clearInterval(stepInterval);
      clearInterval(tickInterval);
    };
  }, []);

  const memVal = (0.75 + (tick % 3) * 0.02).toFixed(2);
  const tempVal = (33.2 + (tick % 4) * 0.15).toFixed(1);

  return (
    <div className="border border-white/20 bg-[#030303] relative w-full overflow-hidden shadow-2xl">
      {/* Laser line: clean technical scanner indicator */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-20 h-px transition-all duration-[4200ms] ease-linear"
        style={{
          top: `${(activeStep / 3) * 80 + 10}%`,
          opacity: 0.35,
          background: "linear-gradient(90deg, transparent, #10b981, transparent)",
        }}
      />

      {/* Top HUD Frame */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 sm:px-5 py-3 gap-2">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-white uppercase">
            PIPELINE::ON_DEVICE_PARSER
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[9px] text-gray-500 uppercase">
          <span className="text-emerald-400">[ READY ]</span>
          <span className="hidden sm:inline">[ ZERO_CLOUD_SYNC ]</span>
        </div>
      </div>

      {/* Pipeline Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
        {/* Left Rail Steps (Horizontal on mobile, Vertical on desktop) */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 bg-black/60 p-2.5 sm:p-4 flex flex-col justify-between">
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1.5 pb-1 md:pb-0 scrollbar-none touch-pan-x overscroll-x-contain pr-4 md:pr-0">
            {STEPS.map((s, idx) => {
              const isCurrent = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`min-w-[130px] md:min-w-0 md:w-full text-left p-2 sm:p-2.5 border transition-all cursor-pointer shrink-0 ${
                    isCurrent
                      ? "border-emerald-500/80 bg-emerald-500/10"
                      : isPast
                      ? "border-white/10 bg-black/40 text-gray-400"
                      : "border-white/5 text-gray-600 hover:text-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] font-bold text-gray-500">[{s.id}]</span>
                      <span className={`font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${isCurrent ? "text-emerald-400" : "text-white"}`}>
                        {s.label}
                      </span>
                    </div>
                    <span className={`font-mono text-[7px] sm:text-[8px] font-bold uppercase px-1 py-0.2 border ${isCurrent ? "border-emerald-500/40 text-emerald-400" : "border-white/10 text-gray-600"}`}>
                      {s.status}
                    </span>
                  </div>
                  <div className="font-mono text-[7px] sm:text-[8px] text-gray-500 truncate pl-4 md:pl-5">
                    {s.sublabel}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-3 mt-3 hidden md:block">
            <div className="font-mono text-[8px] text-gray-500 uppercase tracking-widest mb-1">EXECUTION TARGETS</div>
            <div className="font-mono text-[9px] text-white font-bold">GEMMA 2B (NPU) · LAYA INT4 (CPU/NPU)</div>
          </div>
        </div>

        {/* Right Stage Display */}
        <div className="md:col-span-8 p-4 sm:p-6 flex items-center justify-center bg-black/80 relative">
          {/* Corner Precision Marks */}
          <span className="absolute top-2 left-2 block h-2 w-2 border-t border-l border-white/20 pointer-events-none" />
          <span className="absolute top-2 right-2 block h-2 w-2 border-t border-r border-white/20 pointer-events-none" />
          <span className="absolute bottom-2 left-2 block h-2 w-2 border-b border-l border-white/20 pointer-events-none" />
          <span className="absolute bottom-2 right-2 block h-2 w-2 border-b border-r border-white/20 pointer-events-none" />

          <div className="w-full max-w-md min-h-[220px] flex flex-col justify-center">
            {activeStep === 0 && <Step01Visualization />}
            {activeStep === 1 && <Step02Visualization />}
            {activeStep === 2 && <Step03Visualization />}
            {activeStep === 3 && <Step04Visualization />}
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black px-4 sm:px-5 py-2 font-mono text-[8px] text-gray-500 uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span>ENGINES: GEMMA_2B + LAYA_DECISION_INT4</span>
          <span className="text-emerald-400 hidden sm:inline">100% AIR_GAPPED</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TEMP: {tempVal}°C</span>
          <span>RAM: {memVal}GB</span>
        </div>
      </div>
    </div>
  );
}
