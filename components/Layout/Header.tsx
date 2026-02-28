import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-white bg-black">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="font-mono text-sm font-bold tracking-widest text-white">
            <Link
              href="/"
              className="hover:bg-transparent! hover:text-white! hover:underline"
            >
              TEMPORAL
            </Link>
          </div>
        </div>

        {/* Desktop Meta */}
        <div className="hidden gap-8 font-mono text-[10px] tracking-[0.2em] text-[#888888] md:flex">
          <span>[ STATUS: DEPLOYED ]</span>
          <span>[ ENCRYPTION: AES-256 ]</span>
          <span>[ MODE: OFFLINE ]</span>
        </div>

        {/* CTA */}
        <a
          href="https://github.com/Utsav173/zenledger-app/raw/main/download/app-release.apk"
          className="border border-white bg-black px-3 py-1 font-mono text-xs font-bold text-white uppercase transition-none hover:bg-white hover:text-black"
          download
        >
          GET_SYSTEM.APK
        </a>
      </div>
    </header>
  );
}
