export default function LedgerDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01] Daily Finance
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Vaults & The Ledger.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          More than just accounts. A multi-layered system for total financial
          organization.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              What are Vaults?
            </h3>
            <p className="leading-relaxed text-gray-400">
              In Temporal, we call accounts "Vaults." A vault can be your
              physical wallet (Cash), a bank account, or even a virtual bucket
              for a specific project (e.g., "Europe Trip Fund"). By separating
              your money into vaults, you get a clear view of your{" "}
              <strong className="font-semibold text-gray-200">
                Liquidity Distribution
              </strong>
              .
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Transaction Engine
            </h3>
            <p className="leading-relaxed text-gray-400">
              Every expense, income, or transfer is logged into the Ledger.
              We've designed the input flow to be "Hyper-Fast." You can add
              notes, tags, and custom categories in seconds.
            </p>
          </div>

          <div className="border-l-2 border-[#888888] bg-white/[0.03] p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The Business/Personal Split
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I'm a freelancer and my personal and business money often gets
              mixed." In Temporal, you can create a 'Business' Vault and
              'Personal' Vault. When you move money from one to the other, use
              the{" "}
              <strong className="font-semibold text-gray-200">Transfer</strong>{" "}
              type to ensure your Net Worth remains accurate while your expense
              tracking stays clean.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            The Database Schema
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Transaction Consistency
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Transactions use a robust schema that links to `categoryId` and
                `accountId`. We use SQLite Foreign Keys with `ON DELETE SET
                NULL` or `CASCADE` to maintain data integrity even if you delete
                a category.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                WAL-Mode Performance
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The Ledger uses Write-Ahead Logging (WAL). This means reading
                your transaction list for reports is lightning-fast and doesn't
                block the UI while you are writing new data into the database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
