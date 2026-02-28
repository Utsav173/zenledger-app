import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temporal Manual | Operational Handbook",
  description:
    "A comprehensive guide to mastering Temporal's minimalist interface and gaining complete financial clarity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Temporal synchronize data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data synchronizes automatically across devices when online. Full functionality is available offline, and changes queue to upload once connectivity is restored.",
      },
    },
    {
      "@type": "Question",
      name: "How do I log a transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tap the + button to launch precision entry mode. Enter the amount on the custom numpad, toggle between Expense and Income, assign a category, and save.",
      },
    },
  ],
};

export default function ManualPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />

      <main className="mx-auto max-w-3xl px-6 pt-24 pb-48">
        <section className="mb-32">
          <div className="mb-4 font-mono text-xs tracking-widest text-[#888888] uppercase">
            Operational Handbook
          </div>
          <h1 className="mb-8 font-serif text-4xl leading-none font-bold italic md:text-6xl">
            Temporal User Manual // v1.0
          </h1>
          <p className="max-w-xl font-sans text-xl leading-relaxed font-light text-[#888888]">
            Financial Purity. Designed for the modern stoic. This manual guides
            you through mastering the minimalist interface to gain complete
            clarity over your finances.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="h-[2px] w-24 self-center bg-white"></div>
            <span className="font-mono text-[10px] text-[#888888]">
              START_WALKTHROUGH (SCROLL)
            </span>
          </div>
        </section>

        <div className="space-y-12">
          {/* Section 01 */}
          <section className="group relative mb-24 border-l-4 border-white py-12 pl-8">
            <div className="absolute top-0 left-[-4px] h-[4px] w-8 bg-white"></div>
            <span className="mb-4 block font-mono text-xs text-[#888888] transition-none group-hover:text-white">
              SECTION_01 // GETTING_STARTED
            </span>
            <h2 className="mb-6 font-serif text-2xl italic">
              Initial Setup & Dashboard
            </h2>
            <div className="space-y-6 font-sans leading-relaxed font-light text-[#888888]">
              <p>
                Upon first launch, Temporal operates immediately with no lengthy
                onboarding. The <strong>Hub</strong> is your central command
                center, featuring a sparkline representing spending velocity,
                time travel navigation via arrows, and key metrics including
                Income, Expenses, and Savings Rate.
              </p>
              <div className="border border-[#333333] bg-[#1a1a1a] p-6 font-mono text-xs">
                <div className="mb-2 text-white">// CAPABILITY MATRIX</div>
                - Account Creation for Secure Storage
                <br />
                - Automatic Cloud Sync via Convex
                <br />- Robust Offline Queue Support
              </div>
            </div>
          </section>

          {/* Section 02 */}
          <section className="group relative mb-24 border-l-4 border-white py-12 pl-8">
            <div className="absolute top-0 left-[-4px] h-[4px] w-8 bg-white"></div>
            <span className="mb-4 block font-mono text-xs text-[#888888] transition-none group-hover:text-white">
              SECTION_02 // TRANSACTIONS
            </span>
            <h2 className="mb-6 font-serif text-2xl italic">Ledger Entries</h2>
            <div className="space-y-6 font-sans leading-relaxed font-light text-[#888888]">
              <p>
                To add an entry, tap the center <strong>[+]</strong> button to
                launch the precision numpad. Toggle between Red (Expense) and
                Green (Income), assign a category bucket, attach an optional
                context note, and commit the transaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#333333] p-4 text-center sm:text-left">
                  <div className="mb-2 font-mono text-[10px] text-white">
                    [///] MODIFY
                  </div>
                  <p className="text-xs">
                    Tap a transaction card and select the Edit icon to alter
                    metadata.
                  </p>
                </div>
                <div className="border border-[#333333] p-4 text-center sm:text-left">
                  <div className="mb-2 font-mono text-[10px] text-white">
                    [XXX] DELETE
                  </div>
                  <p className="text-xs">
                    Tap the Trash icon to permanently purge a record from the
                    ledger.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 03 */}
          <section className="group relative mb-24 border-l-4 border-white py-12 pl-8">
            <div className="absolute top-0 left-[-4px] h-[4px] w-8 bg-white"></div>
            <span className="mb-4 block font-mono text-xs text-[#888888] transition-none group-hover:text-white">
              SECTION_03 // ANALYTICS
            </span>
            <h2 className="mb-6 font-serif text-2xl italic">
              Reports & Visualizations
            </h2>
            <div className="space-y-6 font-sans leading-relaxed font-light text-[#888888]">
              <p>
                Navigate to the Reports tab to unlock financial intelligence.
                Use the period selector to pivot views between THIS MONTH, LAST
                3 MONTHS, LAST 6 MONTHS, and YEAR-TO-DATE (YTD).
              </p>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex gap-3">
                  <span className="text-white">[X]</span> SPENDING BREAKDOWN
                  DONUT
                </li>
                <li className="flex gap-3">
                  <span className="text-white">[X]</span> TOP EXPENSE IDENTIFIER
                </li>
                <li className="flex gap-3">
                  <span className="text-white">[X]</span> 6-MONTH TRAILING
                  COMPARISON
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="mt-32 border-t border-[#333333] pt-16 text-center">
          <h3 className="mb-6 font-mono text-xl">Ready for Implementation?</h3>
          <p className="mx-auto mb-10 max-w-sm font-sans text-sm font-light text-[#888888]">
            Temporal is available for manual installation on compatible mobile
            hardware.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="/download/app-release.apk"
              className="btn btn-primary"
              download
            >
              DOWNLOAD_APK_V1.1
            </a>
            <div className="font-mono text-[10px] text-[#888888]">
              SHA-256: 8f3c...b2e1
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
