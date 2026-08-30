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
          <div className="flex items-center gap-2 sm:gap-4">
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
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="font-mono text-[10px] text-gray-500 hover:text-white hidden sm:block border border-white/20 px-2 py-1"
            >
              SEARCH <span className="opacity-30 ml-1">⌘K</span>
            </button>

            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/public/download/app-release.apk"
              className="border-2 border-white bg-black px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-white uppercase transition-none hover:bg-white hover:text-black"
              download
            >
              <span className="hidden sm:inline">GET_SYSTEM.APK</span>
              <span className="sm:hidden">GET_APK</span>
            </a>

            {/* Mobile Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden font-mono text-[10px] text-gray-400 hover:text-white"
            >
              [ Q ]
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="font-mono text-[10px] font-bold tracking-widest text-gray-400 transition-colors hover:text-white md:hidden"
            >
              {isMobileMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
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
        <div className="fixed inset-0 z-40 flex flex-col bg-black/95 pt-20 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center justify-center gap-6 px-6 pb-20 text-center font-mono">
            <Link
              href="/ledger"
              className="px-4 py-2 text-xl tracking-[0.2em] text-white transition-none hover:bg-white hover:text-black"
            >
              LEDGER
            </Link>
            <Link
              href="/vault"
              className="px-4 py-2 text-xl tracking-[0.2em] text-white transition-none hover:bg-white hover:text-black"
            >
              VAULT
            </Link>
            <Link
              href="/manual"
              className="px-4 py-2 text-xl tracking-[0.2em] text-white transition-none hover:bg-white hover:text-black"
            >
              MANUAL
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 text-xl tracking-[0.2em] text-white transition-none hover:bg-white hover:text-black"
            >
              DOCS
            </Link>

            <div className="mt-8 flex flex-col gap-4 text-xs tracking-[0.15em] text-gray-500">
              <span>[ ENCRYPTION: AES-256 ]</span>
              <span>[ MODE: OFFLINE ]</span>
              <span className="mt-4 border-t border-white/20 pt-4 text-[10px]">
                TEMPORAL ARCHITECTURE v2.0
              </span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
