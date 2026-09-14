"use client";

import React, { useState, useEffect } from "react";

export function MobileStickyDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past the hero section (approx 480px)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile download bar"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t-2 border-white/25 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] transition-all duration-300 shadow-[0_-10px_35px_rgba(0,0,0,0.95)]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-widest text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            TEMPORAL // ANDROID
          </div>
          <div className="font-mono text-[10px] text-gray-400 uppercase truncate">
            100% OFFLINE · ~42MB APK
          </div>
        </div>
        <a
          href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
          download
          className="flex items-center justify-center gap-2 border-2 border-white bg-white text-black font-mono text-xs font-bold px-4 py-2.5 min-h-[44px] tracking-wider uppercase whitespace-nowrap active:bg-black active:text-white transition-none"
        >
          <span>GET APK</span>
          <span className="text-sm">↓</span>
        </a>
      </div>
    </aside>
  );
}
