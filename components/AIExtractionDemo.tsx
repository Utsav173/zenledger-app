"use client";

import React, { useState, useEffect } from "react";

const STEP_DURATION = 3200;

const steps = [
  {
    id: "01",
    label: "INPUT_STREAM",
    sublabel: "Secure ingestion",
    color: "emerald",
  },
  {
    id: "02",
    label: "LITERT_SCAN",
    sublabel: "Pixel vectorization",
    color: "emerald",
  },
  {
    id: "03",
    label: "GEMMA_INFER",
    sublabel: "Neural inference",
    color: "emerald",
  },
  {
    id: "04",
    label: "STRUCT_DATA",
    sublabel: "Output assembly",
    color: "emerald",
  },
];

function CornerMarks() {
  return (
    <>
      {/* Top-left */}
      <span className="pointer-events-none absolute top-0 left-0 z-20">
        <span className="block h-4 w-px bg-emerald-500/40" />
        <span className="block h-px w-4 bg-emerald-500/40" />
      </span>
      {/* Top-right */}
      <span className="pointer-events-none absolute top-0 right-0 z-20 flex flex-col items-end">
        <span className="block h-4 w-px bg-emerald-500/40" />
        <span className="block h-px w-4 bg-emerald-500/40" />
      </span>
      {/* Bottom-left */}
      <span className="pointer-events-none absolute bottom-0 left-0 z-20 flex flex-col justify-end">
        <span className="block h-px w-4 bg-emerald-500/20" />
        <span className="block h-4 w-px bg-emerald-500/20" />
      </span>
      {/* Bottom-right */}
      <span className="pointer-events-none absolute bottom-0 right-0 z-20 flex flex-col items-end justify-end">
        <span className="block h-px w-4 bg-emerald-500/20" />
        <span className="block h-4 w-px bg-emerald-500/20" />
      </span>
    </>
  );
}

function StepInputVisualization() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 font-mono">
      <div className="mb-5 text-[9px] font-bold tracking-[0.4em] text-emerald-400 uppercase">
        / SYSTEM_READY /
      </div>
      <div className="space-y-3 text-[10px] leading-relaxed uppercase">
        {[
          { k: "SOURCE", v: "LOCAL_FS_ENCRYPTED" },
          { k: "TYPE", v: "PDF_FINANCIAL_X4" },
          { k: "SIZE", v: "1.42_MB" },
          { k: "HASH", v: "SHA256:8f3c...b2e1" },
        ].map((row) => (
          <div key={row.k} className="flex items-baseline gap-3">
            <span className="w-14 shrink-0 text-white/30">{row.k}</span>
            <span className="text-white/70">{row.v}</span>
          </div>
        ))}
      </div>
      <div className="mt-7">
        <span className="inline-flex items-center gap-2 border border-emerald-500/40 px-3 py-1.5 text-[9px] text-emerald-400 tracking-widest uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          INIT_DEEP_SCAN
        </span>
      </div>
    </div>
  );
}

function StepScanVisualization() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 font-mono w-full">
      <div className="mb-5 text-[9px] tracking-[0.2em] text-white/30 uppercase">
        [ PIXEL_TO_VECTOR_CONVERSION ]
      </div>
      <div className="space-y-3 mb-8">
        {[100, 67, 83, 50, 90].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[8px] text-white/20 w-4">{i + 1}</span>
            <div className="flex-1 h-px bg-white/5 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-emerald-500/50 animate-scan"
                style={{ width: `${w}%`, animationDelay: `${i * 0.18}s` }}
              />
            </div>
            <span className="text-[8px] text-white/20 w-6">{w}%</span>
          </div>
        ))}
      </div>
      <div className="font-serif text-xl leading-snug text-white/50 italic">
        &ldquo;Deconstructing tabular structures...&rdquo;
      </div>
    </div>
  );
}

function StepInferVisualization() {
  return (
    <div className="animate-in fade-in duration-700 flex flex-col items-center text-center w-full">
      <div className="relative mb-6 h-28 w-28">
        <div className="absolute inset-0 animate-ping rounded-full border border-emerald-500/15 duration-[3000ms]" />
        <div className="absolute inset-3 animate-pulse rounded-full border border-emerald-500/30 duration-[2000ms]" />
        <div className="absolute inset-6 rounded-full border border-emerald-500/50" />
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase">
            GEMMA
          </span>
        </div>
      </div>
      <div className="max-w-[200px] text-[8px] leading-loose tracking-[0.3em] text-white/25 uppercase">
        Semantic synthesis active on secure enclave
      </div>
      <div className="mt-5 flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="w-1 bg-emerald-500/40 animate-pulse rounded-sm"
            style={{
              height: `${8 + Math.sin(i) * 6}px`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StepOutputVisualization() {
  const rows = [
    { k: "TX_DATE", v: "2026.01.12" },
    { k: "AMOUNT", v: "₹1,24,000.00" },
    { k: "CATEGORY", v: "EQUITY_SETTLE" },
    { k: "MERCHANT", v: "ZERODHA_MKT" },
  ];
  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-700 w-full">
      <div className="mb-5 flex items-center gap-2 text-[9px] font-bold tracking-[0.4em] text-emerald-400 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        RECOVERY_COMPLETE
      </div>
      <div className="grid grid-cols-2 gap-px bg-white/[0.06] overflow-hidden border border-white/10">
        {rows.map((item) => (
          <div
            key={item.k}
            className="group/item bg-[#070707] p-4 transition-colors duration-500 hover:bg-emerald-500/[0.04]"
          >
            <div className="mb-1.5 text-[7px] font-bold tracking-widest text-white/25 uppercase">
              {item.k}
            </div>
            <div className="text-[11px] font-bold text-white/80 group-hover/item:text-emerald-400 transition-colors">
              {item.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIExtractionDemo() {
  const [step, setStep] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, STEP_DURATION);
    const tickTimer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 1200);
    return () => {
      clearInterval(stepTimer);
      clearInterval(tickTimer);
    };
  }, []);

  const mem = (0.8 + (tick % 5) * 0.03).toFixed(2);
  const temp = (34.1 + (tick % 3) * 0.15).toFixed(1);

  return (
    <div className="brutalist-luxe relative w-full overflow-hidden min-h-[420px] md:h-[500px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,#10b98110,transparent_60%)] pointer-events-none" />

      {/* Laser scanner line */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-30 h-px shadow-[0_0_16px_2px_#10b981] transition-all duration-[3200ms] ease-linear"
        style={{
          top: `${(step / 3) * 84 + 8}%`,
          opacity: 0.55,
          background: "linear-gradient(90deg, transparent, #10b981, transparent)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 sm:px-6 py-3 md:py-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.45em] text-white/90 uppercase">
              MODULE::NEURAL_EXTRACTOR
            </span>
          </div>
          <div className="flex gap-4 font-mono text-[8px] md:text-[9px] tracking-tight text-gray-600 uppercase">
            <span className="hidden xs:inline">[ LATENCY_42ms ]</span>
            <span className="text-emerald-500/70">[ STATUS_OPTIMAL ]</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* Pipeline rail sidebar */}
          <div className="relative flex w-14 md:w-40 shrink-0 flex-col border-r border-white/10 bg-black/30">
            <div className="absolute left-[26px] md:left-[25.5px] top-6 bottom-6 w-px bg-white/5 z-0" />
            <div
              className="absolute left-[26px] md:left-[25.5px] top-6 w-px bg-emerald-500/40 z-0 transition-all duration-[3200ms] ease-linear"
              style={{ height: `${(step / 3) * 78}%` }}
            />

            <div className="flex flex-col justify-around h-full py-6 px-3 md:px-5 relative z-10">
              {steps.map((s, i) => {
                const isActive = step === i;
                const isDone = step > i;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      isActive
                        ? "opacity-100"
                        : isDone
                        ? "opacity-40"
                        : "opacity-15"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    {/* Node dot */}
                    <div
                      className={`h-3 w-3 shrink-0 rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-emerald-500 bg-emerald-500 shadow-[0_0_10px_#10b981]"
                          : isDone
                          ? "border-emerald-500/50 bg-emerald-500/30"
                          : "border-white/15 bg-transparent"
                      }`}
                    />
                    <div className="hidden md:block min-w-0">
                      <div
                        className={`text-[8px] font-black tracking-[0.2em] uppercase leading-tight truncate transition-colors ${
                          isActive ? "text-emerald-400" : "text-white/50"
                        }`}
                      >
                        {s.label}
                      </div>
                      <div className="text-[7px] text-white/20 tracking-wide truncate mt-0.5">
                        {s.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visualization area */}
          <div className="relative flex-1 overflow-hidden">
            {/* Inner grid crosshair background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Corner precision marks */}
            <CornerMarks />

            <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8 md:p-10">
              <div className="w-full max-w-xs">
                {step === 0 && <StepInputVisualization />}
                {step === 1 && <StepScanVisualization />}
                {step === 2 && <StepInferVisualization />}
                {step === 3 && <StepOutputVisualization />}
              </div>
            </div>

            {/* Step label watermark bottom-right */}
            <div className="absolute bottom-4 right-4 font-mono text-[8px] tracking-widest text-white/10 uppercase pointer-events-none">
              {steps[step].id} / {steps[step].label}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-black/50 px-4 sm:px-6 py-2.5 font-mono text-[7px] md:text-[8px] tracking-[0.15em] md:tracking-widest text-white/20 uppercase">
          <div className="flex items-center gap-3 md:gap-5">
            <span>ID: 0x42_FL</span>
            <span className="text-emerald-500/40 hidden xs:inline">ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <span
              className="transition-all duration-700"
              style={{ color: `rgba(255,255,255,${0.15 + (tick % 3) * 0.05})` }}
            >
              T: {temp}°C
            </span>
            <span
              className="transition-all duration-700"
              style={{ color: `rgba(255,255,255,${0.15 + (tick % 4) * 0.04})` }}
            >
              M: {mem}GB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
