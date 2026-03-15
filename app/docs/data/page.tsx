export default function DataDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [05] Data Sovereignty
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Your Data. Your Control.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Temporal is built on the principle that digital tools should not hold
          your data hostage.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Exporting for External Use
            </h3>
            <p className="leading-relaxed text-gray-400">
              Whether it's for tax filing, deep-diving in Excel, or simply peace
              of mind, Temporal allow you to export your entire database in
              universal formats like{" "}
              <strong className="font-semibold text-gray-200">CSV</strong> and{" "}
              <strong className="font-semibold text-gray-200">JSON</strong>. We
              believe that if you can't leave a service with your data, you
              don't really own it.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Offline Reliability
            </h3>
            <p className="leading-relaxed text-gray-400">
              Because Temporal stores data locally, it works perfectly in
              "Flight Mode" or areas with zero connectivity. Your transactions
              are saved instantly without waiting for a server handshake.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: The Auditor's Flow
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "My accountant needs a list of all my investment sells this year."
              Instead of manually copying data, you can generate a filtered JSON
              export of your `holding_lots` and send it over in seconds.
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
            The Export Pipeline
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                JSON Serialization
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Our export engine transforms internal SQLite rows into a
                standardized JSON schema. This schema includes normalized
                timestamps and UID references, making it easy to parse with any
                modern programming language (Python, Node.js, etc.).
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                FileSystem Integration
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Temporal uses `expo-sharing` to pass the generated file directly
                to your device's native sharing sheet. The file is created in a
                temporary directory and wiped immediately after the share intent
                is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
