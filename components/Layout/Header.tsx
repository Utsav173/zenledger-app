"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchModal } from "../SearchModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-white/20 bg-black/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="font-mono text-sm font-bold tracking-[0.2em] text-white">
              <Link
                href="/"
                className="flex items-center gap-2 hover:bg-transparent! hover:text-white! hover:underline"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                TEMPORAL
              </Link>
            </div>
          </div>

          {/* Desktop Meta */}
          <nav className="hidden items-center gap-6 font-mono text-[10px] tracking-[0.15em] text-gray-500 md:flex">
            <Link
              href="/ledger"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              LEDGER
            </Link>
            <Link
              href="/vault"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              VAULT
            </Link>
            <Link
              href="/manual"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              MANUAL
            </Link>
            <Link
              href="/queries"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              QUERIES
            </Link>
            <Link
              href="/docs"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              DOCS
            </Link>
            <span className="text-white/10">|</span>
            <span className="text-white/40">[ SYSTEM_LIVE ]</span>
          </nav>

          {/* CTA & Search & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="font-mono text-[10px] text-gray-500 hover:text-white hidden sm:block border border-white/20 px-2 py-1"
            >
              SEARCH <span className="opacity-30 ml-1">⌘K</span>
            </button>

            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="border-2 border-white bg-black px-3 py-1.5 min-h-[38px] flex items-center justify-center font-mono text-[10px] font-bold tracking-widest text-white uppercase transition-none hover:bg-white hover:text-black active:bg-white active:text-black"
              download
            >
              <span className="hidden sm:inline">GET_SYSTEM.APK</span>
              <span className="sm:hidden">GET_APK</span>
            </a>

            {/* Mobile Search Icon - Min 44px Tap Target */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden font-mono text-xs text-gray-400 hover:text-white active:text-white min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
              aria-label="Open search"
            >
              [ Q ]
            </button>

            {/* Mobile Menu Toggle - Min 44px Tap Target */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-mono text-[10px] font-bold tracking-widest text-gray-400 transition-colors hover:text-white active:text-white min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/15 px-2 md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? "[ X ]" : "[ MENU ]"}
            </button>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onOpen={() => setIsSearchOpen(true)}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black/98 pt-20 px-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col items-stretch justify-center gap-3 text-center font-mono max-w-xs mx-auto w-full">
            <Link
              href="/ledger"
              className="px-4 py-3 min-h-[48px] flex items-center justify-center border border-white/10 text-base tracking-[0.2em] text-white hover:bg-white hover:text-black transition-none uppercase"
            >
              /LEDGER
            </Link>
            <Link
              href="/vault"
              className="px-4 py-3 min-h-[48px] flex items-center justify-center border border-white/10 text-base tracking-[0.2em] text-white hover:bg-white hover:text-black transition-none uppercase"
            >
              /VAULT
            </Link>
            <Link
              href="/manual"
              className="px-4 py-3 min-h-[48px] flex items-center justify-center border border-white/10 text-base tracking-[0.2em] text-white hover:bg-white hover:text-black transition-none uppercase"
            >
              /MANUAL
            </Link>
            <Link
              href="/docs"
              className="px-4 py-3 min-h-[48px] flex items-center justify-center border border-white/10 text-base tracking-[0.2em] text-white hover:bg-white hover:text-black transition-none uppercase"
            >
              /DOCS
            </Link>
            <Link
              href="/queries"
              className="px-4 py-3 min-h-[48px] flex items-center justify-center border border-white/10 text-base tracking-[0.2em] text-white hover:bg-white hover:text-black transition-none uppercase"
            >
              /QUERIES
            </Link>

            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              download
              className="mt-4 px-4 py-3.5 min-h-[48px] flex items-center justify-center border-2 border-white bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-none"
            >
              ↓ DOWNLOAD ANDROID APK
            </a>

            <div className="mt-8 flex flex-col gap-2 text-[10px] tracking-[0.15em] text-gray-500 border-t border-white/10 pt-4">
              <span>[ ENCRYPTION: HARDWARE AES-256 ]</span>
              <span>[ ENGINE: ON-DEVICE LITERT + GEMMA ]</span>
              <span className="text-gray-600">
                TEMPORAL FOS v2.5 · 100% AIR-GAPPED
              </span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
