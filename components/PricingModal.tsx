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

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Temporal Pro pricing"
    >
      {/* Backdrop */}
      <div
        className="animate-fade-in absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="animate-slide-up relative z-10 w-full max-w-2xl">
        <div className="relative overflow-hidden border-4 border-white bg-black p-6 shadow-[0_0_80px_rgba(255,255,255,0.15)] md:p-12">
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
            className="absolute top-6 right-4 font-mono text-[10px] text-[#888888] transition-none hover:text-white md:top-8 md:right-6 md:text-sm"
          >
            [CLOSE]
          </button>

          <div className="mt-8 md:mt-4">
            <div className="mb-6 inline-block bg-white px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-black uppercase md:mb-8">
              TEMPORAL PRO
            </div>

            <h2 className="mb-6 font-serif text-3xl italic md:text-5xl">
              One Payment.
              <br />
              Lifetime Clarity.
            </h2>
            <div className="mb-4 font-sans text-4xl font-extrabold tracking-tighter text-white md:text-7xl">
              ₹49
            </div>

            <p className="mb-12 font-mono text-xs tracking-widest text-[#888888] uppercase">
              LIFETIME UNLOCK. NO SUBSCRIPTIONS. NO RECURRING FEES.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest">Free Layer</div>
                <ul className="space-y-3 font-mono text-xs text-[#666666]">
                  <li>- 500 Ledger Entries</li>
                  <li>- Core Categories</li>
                  <li>- Manual Transaction Entry</li>
                  <li>- Full Offline Mode</li>
                </ul>
              </div>
              <div>
                <div className="mb-4 font-mono text-[10px] text-white uppercase tracking-widest">PRO Layer (Unlocked)</div>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li>+ UNLIMITED Ledger Entries</li>
                  <li>+ Advanced Portfolio (Stocks/MF)</li>
                  <li>+ Real-time XIRR & CAGR</li>
                  <li>+ Automated Receipt Parsing</li>
                  <li>+ Encrypted Data Exports</li>
                  <li>+ Hardware Biometric Lock</li>
                </ul>
              </div>
            </div>

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
