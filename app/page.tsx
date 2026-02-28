import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Temporal: Utilitarian Personal Finance Tracker",
  description:
    "A comprehensive personal finance and investment tracking application. Pure data. Zero distractions.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Temporal",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "INR",
  },
  description:
    "A high-performance offline ledger and investment portfolio tracker.",
};

export default function Home() {
  return (
    <>
      <JsonLd schema={softwareSchema} />

      {/* Dynamic CSS Marquee Background */}
      <div className="pointer-events-none fixed top-24 left-0 z-[-1] w-full overflow-hidden opacity-10 select-none">
        <div className="animate-marquee font-mono text-9xl font-bold tracking-tighter whitespace-nowrap text-white">
          PURE DATA // ZERO DISTRACTIONS // OFFLINE LEDGER // HIGH PERFORMANCE
          // PURE DATA // ZERO DISTRACTIONS // OFFLINE LEDGER
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col justify-center border-b border-white px-6">
        <div className="mx-auto w-full max-w-5xl pt-20 pb-32">
          <h1 className="mb-12 max-w-4xl font-serif text-6xl leading-[0.9] tracking-tight italic md:text-8xl lg:text-[8rem]">
            Wealth is predictable.
            <br />
            If you track it.
          </h1>

          <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-2">
            <p className="max-w-md font-mono text-sm leading-relaxed tracking-widest text-[#888888] uppercase md:text-base">
              TEMPORAL IS A COMPREHENSIVE PERSONAL FINANCE AND INVESTMENT
              TRACKING APPLICATION. PURE DATA. ZERO DISTRACTIONS.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row md:ml-auto">
              <a
                href="https://github.com/Utsav173/zenledger/raw/main/public-site/public/download/app-release.apk"
                className="btn btn-primary"
              >
                → DOWNLOAD APK
              </a>
              <Link href="/manual" className="btn btn-outline">
                VIEW MANUAL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-b border-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="group cursor-crosshair p-12 transition-none hover:bg-white hover:text-black">
            <div className="mb-8 font-mono text-xs tracking-widest text-[#888888] group-hover:text-black">
              [+] FEATURE_01
            </div>
            <h3 className="mb-6 font-serif text-3xl italic">
              Offline First Vault
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[#888888] group-hover:text-black">
              Zero-trust architecture. Your complete financial ledger resides
              strictly on your local device. No cloud synchronization required
              for operation. Absolute data sovereignty.
            </p>
          </div>

          <div className="group cursor-crosshair p-12 transition-none hover:bg-white hover:text-black">
            <div className="mb-8 font-mono text-xs tracking-widest text-[#888888] group-hover:text-black">
              [+] FEATURE_02
            </div>
            <h3 className="mb-6 font-serif text-3xl italic">
              Investment Portfolios
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[#888888] group-hover:text-black">
              Aggregate diverse asset classes into a singular view. The system
              processes market data local-side to calculate real-time XIRR,
              CAGR, and total return metrics.
            </p>
          </div>

          <div className="group cursor-crosshair p-12 transition-none hover:bg-white hover:text-black">
            <div className="mb-8 font-mono text-xs tracking-widest text-[#888888] group-hover:text-black">
              [+] FEATURE_03
            </div>
            <h3 className="mb-6 font-serif text-3xl italic">
              Advanced Analytics
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[#888888] group-hover:text-black">
              Generate comprehensive CSV and JSON exports instantly. View raw
              expense velocity and precise diversification spread without visual
              noise.
            </p>
          </div>
        </div>
      </section>

      {/* PRO Pricing */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden border-4 border-white bg-black p-12">
            {/* Striped aesthetic top border */}
            <div
              className="absolute top-0 left-0 h-3 w-full"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #fff, #fff 2px, transparent 2px, transparent 8px)",
              }}
            ></div>

            <div className="mt-8">
              <div className="mb-8 inline-block bg-white px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-black uppercase">
                TEMPORAL PRO
              </div>

              <h2 className="mb-6 font-serif text-4xl italic md:text-5xl">
                One Payment. Lifetime Clarity.
              </h2>
              <div className="mb-4 font-sans text-5xl font-extrabold tracking-tighter text-white md:text-7xl">
                ₹49
              </div>

              <p className="mb-12 font-mono text-xs tracking-widest text-[#888888] uppercase">
                LIFETIME UNLOCK. NO SUBSCRIPTIONS. NO RECURRING FEES.
              </p>

              <ul className="mb-12 space-y-4 border-t border-[#333333] pt-8 font-mono text-sm text-[#888888]">
                <li className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">+</span>{" "}
                  Unlimited Transaction History
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">+</span>{" "}
                  Advanced Portfolio Analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">+</span>{" "}
                  Complete CSV/JSON Data Export
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">+</span> Local
                  Biometric Vault Locks
                </li>
              </ul>

              <a
                href="#"
                className="block w-full border-2 border-white bg-white py-5 text-center font-mono text-xs font-bold tracking-[0.15em] text-black uppercase transition-none hover:bg-black hover:text-white"
              >
                → UPGRADE NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
