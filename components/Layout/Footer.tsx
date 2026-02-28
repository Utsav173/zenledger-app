import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-white bg-black px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 font-mono text-sm font-bold tracking-widest text-white uppercase">
              TEMPORAL_SYSTEMS
            </div>
            <p className="max-w-xs font-sans text-xs leading-relaxed text-[#888888]">
              Utilitarian tools for personal financial sovereignty. Developed
              for those who prefer data over interfaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
              <div className="border-b border-[#333333] pb-2 text-white">
                Directory
              </div>
              <Link
                href="/manual"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Manual
              </Link>
              <Link
                href="/ledger"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Ledger
              </Link>
              <Link
                href="/vault"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Vault
              </Link>
            </div>

            <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
              <div className="border-b border-[#333333] pb-2 text-white">
                Legal
              </div>
              <Link
                href="/privacy"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Privacy
              </Link>
              <Link
                href="/terms"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Terms
              </Link>
              <Link
                href="/refunds"
                className="block w-max px-1 text-[#888888] hover:bg-white hover:text-black"
              >
                /Refunds
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#333333] pt-8 md:flex-row">
          <div className="font-mono text-[10px] text-[#888888]">
            © {new Date().getFullYear()} TEMPORAL SYSTEMS INC. | BLD: 26.02.28
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-none bg-white"></span>
            <span className="font-mono text-[10px] text-white">
              SYSTEM_STATUS: NOMINAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
