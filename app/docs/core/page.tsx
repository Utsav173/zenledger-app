export default function CoreDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [00.1] System Core
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Local-First Architecture.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Why we chose to build an app that doesn't live in the cloud.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Zero Latency, Instant Feedback
            </h3>
            <p className="leading-relaxed text-gray-400">
              Most finance apps feel sluggish because every action requires a
              round-trip to a database in Virginia or Mumbai. In Temporal, the
              database is in your pocket. This results in an interface that
              feels "mechanical" and responsive—no spinners, no loading states.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Immunity to Service Outages
            </h3>
            <p className="leading-relaxed text-gray-400">
              If our company's servers go down, or if you lose your internet
              connection, Temporal remains 100% functional. You can still track
              expenses, view your portfolio, and analyze your wealth. You are
              not dependent on us to manage your money.
            </p>
          </div>

          <div className="border border-white bg-white/5 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              The "Air-Gap" Philosophy
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              By keeping data offline, we eliminate entire classes of security
              vulnerabilities like data breaches, man-in-the-middle attacks, and
              cloud-side identity theft. Your phone is your fortress.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0a] p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Specs (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            The SQLite Engine
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Transactional Integrity
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal uses `expo-sqlite` to manage data. We wrap critical
                operations (like investment lot creation) in SQL transactions to
                ensure that the database never ends up in a partial state.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Migration Strategy
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                As we release new features, we use a incremental migration
                system based on the `user_version` PRAGMA. This allows us to
                safely evolve your local database schema without risk of data
                loss or corruption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
