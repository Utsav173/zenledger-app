"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { clsx } from "clsx";

const ALL_PAGES = [
  { name: "Home", href: "/", category: "System" },
  { name: "Ledger Engine", href: "/ledger", category: "System" },
  { name: "Secure Vault", href: "/vault", category: "System" },
  { name: "Operational Handbook", href: "/manual", category: "System" },
  { name: "Manifesto", href: "/manifesto", category: "System" },
  { name: "Introduction", href: "/docs", category: "Docs" },
  { name: "Local-First Architecture", href: "/docs/core", category: "Docs" },
  { name: "Vaults & Accounts", href: "/docs/ledger", category: "Docs" },
  { name: "Transaction Engine", href: "/docs/transactions", category: "Docs" },
  { name: "Custom Categories", href: "/docs/categories", category: "Docs" },
  { name: "Portfolio Overview", href: "/docs/investments", category: "Docs" },
  { name: "Stocks & Mutual Funds", href: "/docs/stocks-mf", category: "Docs" },
  { name: "Gold & Commodities", href: "/docs/commodities", category: "Docs" },
  { name: "Fixed Income (FD)", href: "/docs/fixed-income", category: "Docs" },
  { name: "Biometric Enclave", href: "/docs/security", category: "Docs" },
  { name: "The Recovery Kit", href: "/docs/recovery", category: "Docs" },
  { name: "Data Portability", href: "/docs/data", category: "Docs" },
  { name: "The AI Engine", href: "/docs/ai", category: "Docs" },
];

export function SearchModal({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return [];
    return ALL_PAGES.filter((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery(""); // Reset query when opening
          onOpen();
        }
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 sm:pt-40">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-xl overflow-hidden border-2 border-white bg-black shadow-2xl animate-slide-up">
        <div className="flex items-center border-b border-white/20 px-4 py-4">
          <span className="font-mono text-xs text-gray-500 mr-4 tracking-widest">[SEARCH]</span>
          <input
            autoFocus
            type="text"
            placeholder="Type to find specs, docs, or manual..."
            className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="font-mono text-[10px] text-gray-500 hover:text-white">
            ESC
          </button>
        </div>

        <div className="max-h-[300px] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded px-3 py-3 transition-colors hover:bg-white hover:text-black group"
                >
                  <span className="font-mono text-xs tracking-wide">{page.name}</span>
                  <span className="font-mono text-[10px] opacity-50 group-hover:opacity-100 uppercase tracking-widest">
                    {page.category}
                  </span>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="py-12 text-center">
              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                No specifications found.
              </p>
            </div>
          ) : (
            <div className="py-6 px-4">
              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4">
                Quick Suggestions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ALL_PAGES.slice(0, 4).map(p => (
                  <Link key={p.href} href={p.href} onClick={onClose} className="border border-white/10 p-3 hover:border-white transition-colors">
                    <span className="font-mono text-[10px] text-white block">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t border-white/10 bg-white/[0.02] px-4 py-2 flex justify-between items-center">
          <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">
            Temporal Search v1.0
          </div>
          <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">
            {results.length} Matches
          </div>
        </div>
      </div>
    </div>
  );
}
