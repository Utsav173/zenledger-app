export default function LedgerDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01] Daily Finance
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Vaults & The Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          More than just accounts. A multi-layered system for total financial organization.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">What are Vaults?</h3>
            <p className="text-gray-400 leading-relaxed">
              In Temporal, we call accounts "Vaults." A vault can be your physical wallet (Cash), a bank account, or even a virtual bucket for a specific project (e.g., "Europe Trip Fund"). By separating your money into vaults, you get a clear view of your <strong className="text-gray-200 font-semibold">Liquidity Distribution</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">The Transaction Engine</h3>
            <p className="text-gray-400 leading-relaxed">
              Every expense, income, or transfer is logged into the Ledger. We've designed the input flow to be "Hyper-Fast." You can add notes, tags, and custom categories in seconds.
            </p>
          </div>

          <div className="p-8 border-l-2 border-[#888888] bg-white/[0.03]">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: The Business/Personal Split</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I'm a freelancer and my personal and business money often gets mixed." In Temporal, you can create a 'Business' Vault and 'Personal' Vault. When you move money from one to the other, use the <strong className="text-gray-200 font-semibold">Transfer</strong> type to ensure your Net Worth remains accurate while your expense tracking stays clean.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 border border-white/10 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">The Database Schema</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Transaction Consistency</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transactions use a robust schema that links to `categoryId` and `accountId`. We use SQLite Foreign Keys with `ON DELETE SET NULL` or `CASCADE` to maintain data integrity even if you delete a category.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">WAL-Mode Performance</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                The Ledger uses Write-Ahead Logging (WAL). This means reading your transaction list for reports is lightning-fast and doesn't block the UI while you are writing new data into the database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
