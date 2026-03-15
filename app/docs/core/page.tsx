export default function CoreDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00.1] System Core
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Local-First Architecture.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Why we chose to build an app that doesn't live in the cloud.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Zero Latency, Instant Feedback</h3>
            <p className="text-gray-400 leading-relaxed">
              Most finance apps feel sluggish because every action requires a round-trip to a database in Virginia or Mumbai. In Temporal, the database is in your pocket. This results in an interface that feels "mechanical" and responsive—no spinners, no loading states.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Immunity to Service Outages</h3>
            <p className="text-gray-400 leading-relaxed">
              If our company's servers go down, or if you lose your internet connection, Temporal remains 100% functional. You can still track expenses, view your portfolio, and analyze your wealth. You are not dependent on us to manage your money.
            </p>
          </div>

          <div className="p-8 border border-white bg-white/5">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">The "Air-Gap" Philosophy</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               By keeping data offline, we eliminate entire classes of security vulnerabilities like data breaches, man-in-the-middle attacks, and cloud-side identity theft. Your phone is your fortress.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 bg-[#0a0a0a] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">The SQLite Engine</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Transactional Integrity</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Temporal uses `expo-sqlite` to manage data. We wrap critical operations (like investment lot creation) in SQL transactions to ensure that the database never ends up in a partial state.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Migration Strategy</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                As we release new features, we use a incremental migration system based on the `user_version` PRAGMA. This allows us to safely evolve your local database schema without risk of data loss or corruption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
