"use client";

import { useState, useEffect } from "react";

export function LedgerHorizonPreview() {
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let animationFrame: number;
    const animate = () => {
      setPhase((prev) => prev + 0.015);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Generate brutalist ridge plot lines using deterministic sine waves (fixes hydration & adds animation)
  const lines = Array.from({ length: 15 }).map((_, i) => {
    const yOffset = i * 15;
    const currentPhase = mounted ? phase : 0;

    // Generate smooth wave points
    const path = Array.from({ length: 41 })
      .map((_, j) => {
        const x = j * 20; // 0 to 800
        
        // Combine multiple sine waves for organic noise
        const noise =
          Math.sin(j * 0.2 + i * 0.5 + currentPhase) * 15 +
          Math.cos(j * 0.4 - i * 0.3 + currentPhase * 1.3) * 10 +
          Math.sin(j * 0.1 + currentPhase * 0.5) * 5;

        // Taper the edges to 0 so the waves merge smoothly at the sides
        const edgeFactor = Math.sin((j / 40) * Math.PI);

        const y = yOffset - noise * edgeFactor * 1.5;
        return `${j === 0 ? "M" : "L"} ${x},${y}`;
      })
      .join(" ");

    return (
      <path
        key={i}
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`transition-colors duration-500 ${
          i % 4 === 0 ? "text-amber-400/60" : "text-white/30"
        } hover:text-amber-400 hover:opacity-100 cursor-crosshair`}
      />
    );
  });

  return (
    <div className="w-full h-[400px] border-2 border-white bg-black p-6 font-mono scanlines relative group overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-start text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-6">
        <div>// HORIZON_PROJECTION</div>
        <div className="text-amber-400 text-right leading-relaxed">
          [ XIRR: +14.2% ]<br />
          [ CAGR: +11.8% ]
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-1 h-full min-h-0 border-t-2 border-gray-800 pt-6 mt-2">
        <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 800 250"
            className="w-[120%] h-[120%] preserve-3d absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: "translate(-50%, -50%) rotateX(15deg)" }}
          >
            {lines}
          </svg>
        </div>

        <div className="flex justify-between items-end text-[10px] tracking-widest text-gray-500 uppercase border-t-2 border-gray-800 pt-4 mt-4">
          <div className="group-hover:text-white transition-colors duration-300">&lt; 2021</div>
          <div className="text-white font-bold tracking-[0.3em]">2026 // NOW</div>
        </div>
      </div>
    </div>
  );
}
