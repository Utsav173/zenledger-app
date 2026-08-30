"use client";

import React, { useState, useMemo } from "react";
import { clsx } from "clsx";
import { FAQQuery } from "@/components/data/knowledgeBaseQueries";

interface KnowledgeBaseSearchProps {
  queries: FAQQuery[];
}

const CATEGORIES = [
  "All Queries",
  "AI & Statement Extraction",
  "Privacy, Encryption & Hardware Security",
  "Double-Entry Ledger & DAG Engine",
  "Portfolio, Investments & Horizon Math",
  "Data Portability, Recovery & Exports",
  "Licensing, Payments & Transparency",
  "Edge Cases, Multi-Asset & Troubleshooting"
] as const;

export function KnowledgeBaseSearch({ queries }: KnowledgeBaseSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Queries");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const filteredQueries = useMemo(() => {
    return queries.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Queries" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [queries, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search Input Bar (High-Contrast Brutalist) */}
      <div className="relative">
        <div className="flex items-center border border-white/25 bg-[#050505] focus-within:border-[#00b2ff] focus-within:ring-1 focus-within:ring-[#00b2ff] transition-all shadow-lg">
          <span className="pl-4 pr-2 font-mono text-[11px] text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap select-none">
            [SEARCH]
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g., 'offline AI', 'lost phone', 'XIRR', 'bank statement', 'pricing')..."
            className="w-full bg-transparent px-3 py-3.5 font-mono text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="pr-4 font-mono text-[11px] text-gray-400 hover:text-white uppercase tracking-wider whitespace-nowrap"
            >
              [CLEAR]
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills (Refined Wrap & Spacing) */}
      <div className="flex flex-wrap gap-2 pt-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                "px-3.5 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all border",
                isSelected
                  ? "bg-white text-black border-white font-bold shadow-md"
                  : "border-white/15 bg-black/60 text-gray-400 hover:text-white hover:border-white/35 hover:bg-white/[0.04]"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Result Count Indicator */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] tracking-widest text-gray-400 uppercase">
        <div>
          FILTERED_MATCHES: <span className="text-[#00b2ff] font-bold">{filteredQueries.length}</span> / {queries.length}
        </div>
        <div className="hidden sm:block text-emerald-400 font-bold">
          [ 100% AIR-GAPPED BY DEFAULT ]
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="divide-y border-t border-b border-white/15 divide-white/10">
        {filteredQueries.length === 0 ? (
          <div className="py-16 text-center">
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
              [ NO_QUERY_MATCHED ]
            </div>
            <p className="text-sm text-gray-400">
              No matching answers found for "{searchQuery}". Try searching with different keywords.
            </p>
          </div>
        ) : (
          filteredQueries.map((item, idx) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id} className="group overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 sm:gap-6 py-6 text-left transition-colors duration-200 hover:bg-white/[0.02] cursor-pointer"
                >
                  <span className="mt-1 shrink-0 font-mono text-[11px] tracking-widest text-gray-500 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 pr-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#00b2ff] bg-[#00b2ff]/10 px-2 py-0.5 border border-[#00b2ff]/25 font-bold">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="font-mono text-[9px] tracking-widest uppercase text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/30 font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-sans text-base sm:text-lg font-semibold text-white group-hover:text-[#00b2ff] transition-colors leading-snug">
                        {item.question}
                      </h3>
                      <span
                        className={clsx(
                          "font-mono text-xs text-gray-400 transition-transform duration-300 shrink-0 select-none",
                          isOpen ? "rotate-45 text-[#00b2ff]" : "rotate-0"
                        )}
                      >
                        [ + ]
                      </span>
                    </div>
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="max-w-3xl text-sm leading-relaxed text-gray-300 font-sans border-l-2 border-[#00b2ff]/50 pl-4 py-1.5 bg-white/[0.01]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
