"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

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
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen border-t border-white/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": DOCS_NAV.flatMap((group) => group.items).map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `http://temporal.khatriutsav.com${item.href}`,
            })),
          }),
        }}
      />
      {/* Docs Sidebar */}
      <aside className="fixed top-20 left-0 bottom-0 w-64 overflow-y-auto border-r border-white/10 bg-black px-6 py-10 md:block hidden">
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
      <main className="flex-1 md:ml-64 px-6 py-20 pb-40">
        <div className="mx-auto max-w-3xl">
          <div className="docs-container animate-fade-in">{children}</div>
        </div>
      </main>
    </div>
  );
}
