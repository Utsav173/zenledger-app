"use client";

import { useState } from "react";
import { clsx } from "clsx";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y-2 divide-white/20 border-t-2 border-white/20">
      {items.map((item, index) => (
        <div key={index} className="group overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            className="flex w-full items-start gap-4 sm:gap-6 py-6 sm:py-8 text-left transition-colors duration-300 hover:bg-white/[0.02]"
          >
            <span className="mt-1 shrink-0 font-mono text-[10px] tracking-widest text-gray-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-sans text-lg font-semibold text-white sm:text-xl">
                  {item.question}
                </h3>
                <span className={clsx(
                  "font-mono text-xs transition-transform duration-300",
                  openIndex === index ? "rotate-45" : "rotate-0"
                )}>
                  [ + ]
                </span>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === index ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
