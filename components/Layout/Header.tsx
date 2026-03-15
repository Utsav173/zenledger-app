import Link from "next/link";

export default function Header() {
  return (
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
            className="transition-none hover:bg-white hover:text-black px-2 py-1"
          >
            DOCS
          </Link>
          <span className="text-white/10">|</span>
          <span>[ ENCRYPTION: AES-256 ]</span>
          <span>[ MODE: OFFLINE ]</span>
        </nav>

        {/* CTA */}
        <a
          href="https://github.com/Utsav173/zenledger-app/raw/main/download/app-release.apk"
          className="border border-white bg-black px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-white uppercase transition-none hover:bg-white hover:text-black"
          download
        >
          GET_SYSTEM.APK
        </a>
      </div>
    </header>
  );
}
