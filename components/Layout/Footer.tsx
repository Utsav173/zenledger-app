import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/20 bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 font-mono text-sm font-bold tracking-widest text-white uppercase">
              TEMPORAL
            </div>
            <p className="max-w-xs font-sans text-xs leading-relaxed text-gray-500">
              Utilitarian tools for personal financial sovereignty. Developed
              for those who prefer data over interfaces.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
            <div className="border-b border-white/10 pb-2 text-gray-500">
              Navigate
            </div>
            <Link
              href="/docs"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Documentation
            </Link>
            <Link
              href="/docs/ledger"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Ledger
            </Link>
            <Link
              href="/docs/investments"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Investments
            </Link>
            <Link
              href="/docs/security"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Security
            </Link>
          </div>

          {/* Legal */}
          <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
            <div className="border-b border-white/10 pb-2 text-gray-500">
              Legal
            </div>
            <Link
              href="/privacy"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Privacy
            </Link>
            <Link
              href="/terms"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Terms
            </Link>
            <Link
              href="/refunds"
              className="block w-max px-1 text-gray-500 hover:bg-white hover:text-black"
            >
              /Refunds
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="font-mono text-[10px] text-gray-600">
            © {new Date().getFullYear()} TEMPORAL SYSTEMS — DATA SOVEREIGNTY
            SINCE 2024
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-gray-500">
              SYSTEM_STATUS: NOMINAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
