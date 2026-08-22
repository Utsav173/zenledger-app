import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">
        [ ERROR_CODE: 404 ]
      </div>
      <h1 className="mb-6 font-serif text-5xl italic text-white md:text-7xl">
        Signal lost.
      </h1>
      <p className="mb-12 max-w-md font-mono text-xs leading-relaxed tracking-widest text-gray-500 uppercase">
        The route you requested does not exist in this system.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="border-2 border-white bg-white px-8 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
        >
          Return Home
        </Link>
        <Link
          href="/docs"
          className="border border-white/20 px-8 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/5"
        >
          Browse Docs
        </Link>
      </div>
    </main>
  );
}
