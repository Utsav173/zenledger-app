export default function DocsIntroduction() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00] Introduction
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Master the Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Temporal is not a traditional app. It is a local-only financial engine designed for extreme transparency and absolute data sovereignty.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">Learn the System</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          This documentation is split into two perspectives. Most of what you will read is about <strong className="text-gray-200 font-semibold">Use Cases</strong> (75%)—how to actually leverage Temporal to achieve financial clarity. The rest is <strong className="text-gray-200 font-semibold">Technical Specs</strong> (25%)—the underlying architecture that makes this privacy possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
          <div className="p-8 border border-white/10 bg-white/2">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">The End-User POV</h3>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "How do I track my XIRR?" "How can I group home expenses?" "Why should I use vaults?"
            </p>
          </div>
          <div className="p-8 border border-white/10 bg-white/2">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">The Technical POV</h3>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "How is SQLite configured?" "What is the NAV caching policy?" "How does local-auth work?"
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl italic mb-6">Getting Started</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          The best way to learn Temporal is by doing. Download the APK, create your first Vault (or Account), and log a transaction.
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
