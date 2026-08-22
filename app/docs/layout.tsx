"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useState, useEffect } from "react";

const DOCS_NAV = [
  {
    title: "The System",
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Local-First Architecture", href: "/docs/core" },
    ],
  },
  {
    title: "Daily Finance",
    items: [
      { name: "Vaults & Accounts", href: "/docs/ledger" },
      { name: "Transaction Engine", href: "/docs/transactions" },
      { name: "Custom Categories", href: "/docs/categories" },
    ],
  },
  {
    title: "Wealth Tracking",
    items: [
      { name: "Portfolio Overview", href: "/docs/investments" },
      { name: "Stocks & Mutual Funds", href: "/docs/stocks-mf" },
      { name: "Gold & Commodities", href: "/docs/commodities" },
      { name: "Fixed Income (FD)", href: "/docs/fixed-income" },
    ],
  },
  {
    title: "Security & Sovereignty",
    items: [
      { name: "Biometric Enclave", href: "/docs/security" },
      { name: "The Recovery Kit", href: "/docs/recovery" },
      { name: "Data Portability", href: "/docs/data" },
      { name: "The AI Engine", href: "/docs/ai" },
    ],
  },
];

const SITE_URL = "https://temporal.khatriutsav.com";

function buildBreadcrumbSchema(pathname: string) {
  const current =
    DOCS_NAV.flatMap((group) => group.items).find(
      (item) => item.href === pathname
    ) ?? null;
  const trail: Array<{ name: string; item?: string }> = [
    { name: "Home", item: SITE_URL },
    { name: "Documentation", item: `${SITE_URL}/docs` },
  ];
  if (current && current.href !== "/docs") {
    trail.push({ name: current.name, item: `${SITE_URL}${current.href}` });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  };
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Prevent background scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen border-t border-white/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(pathname)),
        }}
      />
      
      {/* Mobile Sticky Docs Context Bar */}
      <div className="sticky top-14 z-30 flex h-12 w-full items-center justify-between border-b border-white/10 bg-black/90 px-6 backdrop-blur-md md:hidden">
        <span className="font-mono text-[10px] tracking-widest text-gray-500">
          DOCS INDEX
        </span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="font-mono text-[10px] font-bold tracking-widest text-white transition-colors hover:text-gray-400"
        >
          {isSidebarOpen ? "[ CLOSE ]" : "[ OPEN TOC ]"}
        </button>
      </div>

      {/* Docs Sidebar Backdrop (Mobile Only) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Docs Sidebar */}
      <aside 
        className={clsx(
          "fixed top-14 bottom-0 z-40 w-72 overflow-y-auto border-r border-white/10 bg-black px-6 py-10 transition-transform duration-300 md:w-64 md:top-20 md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:block" // Hidden explicitly on mobile when false, but overridden by translate on open
        )}
      >
        <nav className="space-y-8">
          {DOCS_NAV.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block font-mono text-sm tracking-wide transition-colors duration-200",
                        pathname === item.href
                          ? "text-white font-medium"
                          : "text-gray-400 hover:text-white"
                      )}
                    >
                      {pathname === item.href ? "→ " : ""} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-auto md:ml-64 px-6 py-10 pb-40 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="docs-container animate-fade-in">{children}</div>

          {/* Prev / Next navigation */}
          {(() => {
            const flat = DOCS_NAV.flatMap((group) => group.items);
            const idx = flat.findIndex((item) => item.href === pathname);
            const prev = idx > 0 ? flat[idx - 1] : null;
            const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
            if (!prev && !next) return null;
            return (
              <nav
                aria-label="Documentation pagination"
                className="mt-24 flex items-stretch justify-between gap-4 border-t border-white/10 pt-8 font-mono text-xs"
              >
                {prev ? (
                  <Link
                    href={prev.href}
                    className="group max-w-[48%] text-left"
                  >
                    <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400">
                      ← Previous
                    </span>
                    <span className="text-gray-400 transition-colors group-hover:text-white">
                      {prev.name}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    href={next.href}
                    className="group max-w-[48%] text-right"
                  >
                    <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400">
                      Next →
                    </span>
                    <span className="text-gray-400 transition-colors group-hover:text-white">
                      {next.name}
                    </span>
                  </Link>
                )}
              </nav>
            );
          })()}
        </div>
      </main>
    </div>
  );
}
