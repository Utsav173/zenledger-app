"use client";

import { useEffect } from "react";

export function PricingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl animate-slide-up">
        <div className="relative overflow-hidden border-4 border-white bg-black p-6 md:p-12 shadow-[0_0_80px_rgba(255,255,255,0.15)]">
          {/* Striped aesthetic top border */}
          <div
            className="absolute top-0 left-0 h-3 w-full"
            style={{
              background:
                "repeating-linear-gradient(45deg, #fff, #fff 2px, transparent 2px, transparent 8px)",
            }}
          ></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-6 md:right-6 md:top-8 font-mono text-[10px] md:text-sm text-[#888888] transition-none hover:text-white"
          >
            [CLOSE]
          </button>

          <div className="mt-8 md:mt-4">
            <div className="mb-6 md:mb-8 inline-block bg-white px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-black uppercase">
              TEMPORAL PRO
            </div>

            <h2 className="mb-6 font-serif text-3xl italic md:text-5xl">
              One Payment.<br />Lifetime Clarity.
            </h2>
            <div className="mb-4 font-sans text-4xl font-extrabold tracking-tighter text-white md:text-7xl">
              ₹49
            </div>

            <p className="mb-12 font-mono text-xs tracking-widest text-[#888888] uppercase">
              LIFETIME UNLOCK. NO SUBSCRIPTIONS. NO RECURRING FEES.
            </p>

            <ul className="mb-12 space-y-4 border-t border-[#333333] pt-8 font-mono text-sm text-[#888888]">
              <li className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">+</span>{" "}
                Unlimited Transaction History
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">+</span>{" "}
                Advanced Reports Analytics
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">+</span>{" "}
                Complete CSV/JSON Data Export
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">+</span>{" "}
                Investment Portfolios Tracking with XIRR and CAGR
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">+</span>{" "}
                Unlimited vaults support
              </li>
            </ul>

            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="block w-full border-2 border-white bg-white py-5 text-center font-mono text-xs font-bold tracking-[0.15em] text-black uppercase transition-none hover:bg-black hover:text-white"
            >
              → UNLOCK IN APP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
