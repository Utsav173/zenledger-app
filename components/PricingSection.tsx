"use client";

import { useState } from "react";
import { PricingModal } from "./PricingModal";

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden px-6 py-32">
        {/* Atmospheric glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03] blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] translate-x-1/3 translate-y-1/3 rounded-full bg-white/[0.02] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            [ UPGRADE ]
          </div>
          <h2 className="mb-6 font-serif text-5xl italic md:text-7xl">
            Upgrade your temporal experience.
          </h2>
          <p className="mx-auto mb-12 max-w-xl font-mono text-xs leading-relaxed tracking-[0.15em] text-gray-500 uppercase">
            Unlock absolute financial clarity with lifetime access to premium features. Zero recurring fees. Control your data.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary px-10 py-4 text-sm"
          >
            → VIEW PRO PRICING
          </button>
        </div>
      </section>

      <PricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
