export default function TransactionDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01.1] Ledger Mechanics
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          The Transaction Engine.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Precision entry. Instant feedback. Total clarity.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Expense vs Income vs Transfer</h3>
            <p className="text-gray-400 leading-relaxed">
              Temporal handles three primary transaction types. <strong className="text-gray-200 font-semibold">Expenses</strong> reduce your net worth, <strong className="text-gray-200 font-semibold">Income</strong> increases it, and <strong className="text-gray-200 font-semibold">Transfers</strong> move money between your Vaults without affecting your total wealth. Using these correctly ensures your analytics remain accurate.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Adding Notes & Merchant Context</h3>
            <p className="text-gray-400 leading-relaxed">
              Every transaction supports optional notes and merchant names. This helps you remember <em className="text-gray-300 italic">why</em> a particular expense happened—essential for auditing your spending during monthly reviews.
            </p>
          </div>

          <div className="p-8 border-l-2 border-white bg-white/3">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: Subscription Tracking</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I have a lot of recurring SaaS subscriptions." By tagging these with a specific category and adding the merchant name (e.g., 'Netflix'), you can easily search and see exactly how much your digital lifestyle costs you annually.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 border border-white/10 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">Transaction Indexing</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Query Optimization</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transactions are indexed by `userId` and `date`. This allows the UI to fetch thousands of records and calculate running balances in milliseconds, even on mid-range Android devices.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Client-Side UUIDs</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                To prevent collisions and ensure offline reliability, every transaction is assigned a Version 4 UUID upon creation. This allows the system to remain consistent if we ever implement optional multi-device sync in the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
