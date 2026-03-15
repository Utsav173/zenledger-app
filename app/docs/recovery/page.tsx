export default function RecoveryDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [04.1] Survival Protocols
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          The Recovery Kit.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Your backup. Your way back. Your responsibility.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Why it matters</h3>
            <p className="text-gray-400 leading-relaxed">
              Temporal does not use cloud accounts. If you uninstall the app or lose your phone, your data goes with it. The <strong className="text-gray-200 font-semibold">Recovery Kit</strong> is a digital snapshot of your setup. If you have this kit, you can regain control of your financial history on any new device.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">How to store it</h3>
            <p className="text-gray-400 leading-relaxed">
              We recommend saving your Recovery Kit in multiple secure locations—a password manager, an encrypted cloud drive, or even a physical USB drive. Treat it with the same level of care you would a bank locker key.
            </p>
          </div>

          <div className="p-8 border-l-2 border-white bg-white/3">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: Device Migration</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I'm upgrading to a new phone. How do I move my data?" Simply generate a Recovery Kit on your old device, transfer the file to your new device, and select 'Import Recovery Kit' during the initial setup of the Temporal app.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 border border-white/10 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">Kit Structure</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">JSON Encapsulation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                The kit is a structured JSON object containing your `categories`, `accounts`, and basic configuration settings. Currently, it serves as a lightweight "Setup Snapshot" rather than a full transaction backup, which is handled via the separate Data Export feature.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Seedless Architecture</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlike crypto wallets, we don't use 12-word seeds because we don't derive addresses. The Recovery Kit simply re-initializes your local SQLite environment with your preferred metadata and structure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
