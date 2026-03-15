export default function DocsIntroduction() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00] Introduction
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Master the Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Temporal is not a traditional app. It is a local-only financial engine
          designed for extreme transparency and absolute data sovereignty.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">Learn the System</h2>
        <p className="mb-8 leading-relaxed text-gray-400">
          This documentation is split into two perspectives. Most of what you
          will read is about{" "}
          <strong className="font-semibold text-gray-200">Use Cases</strong>—how
          to actually leverage Temporal to achieve financial clarity. The rest
          is{" "}
          <strong className="font-semibold text-gray-200">
            Technical Specs
          </strong>{" "}
          (25%)—the underlying architecture that makes this privacy possible.
        </p>

        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div className="border border-white/10 bg-white/2 p-8">
            <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The End-User POV
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 italic">
              "How do I track my XIRR?" "How can I group home expenses?" "Why
              should I use vaults?"
            </p>
          </div>
          <div className="border border-white/10 bg-white/2 p-8">
            <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The Technical POV
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 italic">
              "How is SQLite configured?" "What is the NAV caching policy?" "How
              does local-auth work?"
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-serif text-3xl italic">Getting Started</h2>
        <p className="mb-6 leading-relaxed text-gray-400">
          The best way to learn Temporal is by doing. Download the APK, create
          your first Vault (or Account), and log a transaction.
        </p>
        <ul className="space-y-4 font-mono text-sm text-gray-400">
          <li className="flex items-start gap-3">
            <span className="text-white">+</span>
            <span>Setup your local biometric lock.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white">+</span>
            <span>Generate your Recovery Kit (Keep it safe!).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white">+</span>
            <span>Import your portfolio assets.</span>
          </li>
        </ul>
      </section>
    </article>
  );
}
