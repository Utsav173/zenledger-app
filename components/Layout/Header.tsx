"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <header className="sticky top-0 z-50 border-b border-white/20 bg-black/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="font-mono text-sm font-bold tracking-[0.2em] text-white">
              <Link
                href="/"
                className="hover:bg-transparent! hover:text-white! hover:underline"
              >
                TEMPORAL
              </Link>
            </div>
          </div>

          {/* Desktop Meta */}
          <nav className="hidden items-center gap-6 font-mono text-[10px] tracking-[0.15em] text-gray-500 md:flex">
            <Link
              href="/docs"
              className="px-2 py-1 transition-none hover:bg-white hover:text-black"
            >
              DOCS
            </Link>
            <span className="text-white/10">|</span>
            <span>[ ENCRYPTION: AES-256 ]</span>
            <span>[ MODE: OFFLINE ]</span>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Utsav173/zenledger-app/raw/main/download/app-release.apk"
              className="border border-white bg-black px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-white uppercase transition-none hover:bg-white hover:text-black"
              download
            >
              <span className="hidden sm:inline">GET_SYSTEM.APK</span>
              <span className="sm:hidden">GET_APK</span>
            </a>

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

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black/95 pt-20 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center justify-center gap-8 px-6 pb-20 text-center font-mono">
            <Link
              href="/docs"
              className="px-4 py-2 text-2xl tracking-[0.2em] text-white transition-none hover:bg-white hover:text-black"
            >
              DOCUMENTATION
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
