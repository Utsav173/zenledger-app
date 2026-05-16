"use client";

import { useState, useEffect } from "react";

export function LedgerHorizonPreview() {
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let animationFrame: number;
    const animate = () => {
      setPhase((prev) => prev + 0.01);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const lines = Array.from({ length: 12 }).map((_, i) => {
    const yOffset = i * 20;
    const currentPhase = mounted ? phase : 0;

    const path = Array.from({ length: 51 })
      .map((_, j) => {
        const x = j * 16;
        const noise =
          Math.sin(j * 0.15 + i * 0.4 + currentPhase) * 20 +
          Math.cos(j * 0.3 - i * 0.2 + currentPhase * 1.2) * 12;

        const edgeFactor = Math.sin((j / 50) * Math.PI);
        const y = yOffset - noise * edgeFactor * 1.8;
        return `${j === 0 ? "M" : "L"} ${x},${y}`;
      })
      .join(" ");

    return (
      <path
        key={i}
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className={`transition-all duration-700 ${
          i === 0 ? "text-amber-400 stroke-2" : "text-white/20"
        } group-hover:text-amber-400/40`}
        style={{
          opacity: 1 - i / 12,
        }}
      />
    );
  });

  return (
    <div className="group relative h-[450px] w-full brutalist-luxe p-px transition-all duration-700">
      <div className="relative z-10 flex h-full flex-col glass-brutalist overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 px-4 md:px-8 py-4 md:py-5 bg-white/[0.03] gap-2">
          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-amber-500 shadow-[0_0_8px_#fbbf24]" />
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-white/90 font-bold uppercase">PROJECTION::HORIZON_ENGINE</span>
          </div>
          <div className="flex gap-6 items-center">
             <div className="text-[9px] text-amber-400 font-bold uppercase tracking-[0.2em] border border-amber-500/30 px-2 py-0.5">[ ALPHA_LAYER ]</div>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(circle_at_50%_120%,#fbbf2408,transparent_70%)] overflow-hidden">
          {/* Grain Overlay for Projection */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')]" />

          {/* 3D Perspective Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.05]" 
               style={{ 
                 perspective: "1200px",
                 transformStyle: "preserve-3d" 
               }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
                 style={{ 
                   transform: "rotateX(75deg) translateY(0%) scale(2)",
                   transformOrigin: "center top"
                 }} />
          </div>

          <div className="relative z-10 w-full h-full pt-16">
            <svg
              viewBox="0 0 800 300"
              className="w-full h-full overflow-visible translate-y-16"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow-amber">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g style={{ filter: "url(#glow-amber)" }}>
                {lines}
              </g>
            </svg>
          </div>

          {/* Floating Data Nodes - Refined */}
          <div className="absolute top-24 sm:top-28 left-4 sm:left-16 animate-pulse duration-[4000ms]">
             <div className="border-l-2 border-amber-500 bg-black/60 p-3 sm:p-4 backdrop-blur-xl border border-white/5">
                <div className="text-[7px] text-amber-500/60 mb-2 uppercase font-black tracking-widest">NET_WORTH::CURRENT</div>
                <div className="text-xs sm:text-sm text-white font-bold tracking-tight tabular-nums">₹42,85,200.00</div>
             </div>
          </div>

          <div className="absolute bottom-32 sm:bottom-40 right-4 sm:right-16 animate-pulse duration-[5000ms]">
             <div className="border-r-2 border-emerald-500 bg-black/60 p-3 sm:p-4 backdrop-blur-xl border border-white/5 text-right">
                <div className="text-[7px] text-emerald-500/60 mb-2 uppercase font-black tracking-widest">PROJECTION::2030_EST</div>
                <div className="text-xs sm:text-sm text-emerald-400 font-bold tracking-tight tabular-nums">+₹1,20,42,000</div>
             </div>
          </div>
        </div>

        {/* Footer Stats - High Density */}
        <div className="px-4 md:px-8 py-4 md:py-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12 bg-black/40">
          {[
            { l: "VOLATILITY", v: "0.14_SIGMA" },
            { l: "CONFIDENCE", v: "94.2_PCT" },
            { l: "XIRR_HIST", v: "+14.22%" },
            { l: "RISK_SCORE", v: "LOW_V" }
          ].map(stat => (
            <div key={stat.l} className="group/stat">
              <div className="text-[7px] text-gray-600 uppercase mb-1.5 font-black tracking-[0.2em] group-hover/stat:text-amber-500/50 transition-colors">{stat.l}</div>
              <div className="text-[10px] text-white/80 font-bold tabular-nums">{stat.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
