"use client";

import React, { useState, useEffect } from "react";

export function AIExtractionDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "[01] INPUT PDF", active: step === 0 },
    { label: "[02] LITER-RT OCR", active: step === 1 },
    { label: "[03] GEMMA LLM", active: step === 2 },
    { label: "[04] STRUCTURED JSON", active: step === 3 },
  ];

  return (
    <div className="w-full h-[400px] border-2 border-white bg-black p-6 font-mono scanlines relative overflow-hidden flex flex-col group">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-start text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-6">
        <div>// INFERENCE_PIPELINE</div>
        <div className="text-emerald-400 animate-pulse">[ ACTIVE ]</div>
      </div>

      <div className="relative z-10 flex flex-1 gap-6 h-full min-h-0">
        {/* Pipeline Steps (Sidebar) */}
        <div className="flex flex-col justify-between w-1/3 border-r-2 border-gray-800 pr-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-center text-[10px] sm:text-xs tracking-widest transition-all duration-300 ${
                s.active
                  ? "text-white font-bold translate-x-2"
                  : "text-gray-600"
              }`}
            >
              {s.active && <span className="mr-2 text-emerald-400">►</span>}
              {!s.active && <span className="mr-2 opacity-0">►</span>}
              {s.label}
            </div>
          ))}
        </div>

        {/* Console Output (Main Area) */}
        <div className="w-2/3 flex flex-col relative h-full">
          <div className="text-[10px] text-emerald-400/70 mb-3 tracking-widest flex justify-between">
            <span>TERMINAL // ROOT</span>
            <span className="animate-pulse bg-emerald-400/20 px-1">_</span>
          </div>
          <div className="text-xs text-gray-300 font-mono flex-1 overflow-hidden relative">
            
            {/* Step 0 */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${step === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="text-gray-500">
                <span className="text-white">&gt;</span> Initialize target: <span className="text-emerald-400">statement_jan_2026.pdf</span><br />
                <span className="text-white">&gt;</span> Size: 1.2MB<br />
                <span className="text-white">&gt;</span> Awaiting processing...
              </div>
            </div>

            {/* Step 1 */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${step === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="text-gray-400 leading-relaxed">
                <span className="text-white">&gt;</span> Executing Tesseract/LiteRT...<br />
                <div className="mt-2 pl-2 border-l-2 border-gray-700 font-serif italic text-white/50 text-[10px] sm:text-xs">
                  12/01/26 *AMZN MKTPLACE 45.00 CR<br />
                  15/01/26 SALARY DEPOSIT 4500.00 DR
                </div>
                <br />
                <span className="text-emerald-400">&gt; OCR Complete.</span> Passing to LLM...
              </div>
            </div>

            {/* Step 2 */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${step === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="text-sky-400/90 leading-relaxed">
                <span className="text-white">&gt;</span> Waking Gemma 2B (On-Device)...<br />
                <span className="text-white">&gt;</span> Processing context (8192 tokens)...<br />
                <span className="text-white">&gt;</span> Applying schema constraints...<br />
                <span className="text-white">&gt;</span> Inferring categories...<br />
                <span className="animate-pulse mt-2 block bg-sky-400/20 w-fit px-1">Thinking...</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${step === 3 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="text-emerald-400 h-full overflow-hidden">
                <span className="text-white mb-2 block">&gt; Structured Output:</span>
                <pre className="text-[9px] sm:text-[10px] leading-tight text-emerald-300/80">
{`[
  {
    "date": "2026-01-12T00:00:00Z",
    "amount": -45.00,
    "description": "AMZN MKTPLACE",
    "category": "Shopping",
    "type": "Expense"
  }
]`}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
