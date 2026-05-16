"use client";

import { useState } from "react";
import { PricingModal } from "./PricingModal";

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-32 border-b-2 border-white/20 grid-crosshair">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-12 flex justify-center">
             <div className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.4em] border border-white/10 px-4 py-1">
               License_Tier // 01
             </div>
          </div>
          <h2 className="mb-8 font-serif text-5xl italic leading-[0.9] md:text-8xl">
            Upgrade your
            <br />
            <span className="text-gray-500">experience.</span>
          </h2>
          <p className="mx-auto mb-16 max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.1em] text-[#666666] uppercase">
            Unlock absolute financial clarity with lifetime access to premium features. One-time acquisition. Zero recurring fees. Absolute data sovereignty.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-4 sm:gap-6 border-2 border-white bg-white px-8 sm:px-12 py-4 sm:py-5 text-[10px] font-bold tracking-[0.3em] text-black transition-all hover:bg-black hover:text-white"
          >
            <span>EXPLORE PRO LAYER</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </section>

      <PricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
