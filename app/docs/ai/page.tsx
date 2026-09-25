import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Engine | Temporal Docs",
  description: "How Temporal's AI works: on-device dual-engine intelligence with the bundled Gemma model and Laya Decision Engine, plus opt-in cloud providers.",
  openGraph: { images: ["/og/docs-ai.png"] },
  twitter: { images: ["/og/docs-ai.png"] },
};

export default function AiDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [05] Intelligence Core
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          The AI Engine.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          On-device by default. Cloud only if you ask for it.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Dual-Engine Local AI Architecture
            </h3>
            <p className="leading-relaxed text-gray-400 mb-4">
              Temporal utilizes a decoupled dual-engine paradigm for on-device intelligence: a <strong className="font-semibold text-gray-200">System 1 Fast Decision Engine (Laya)</strong> and a <strong className="font-semibold text-gray-200">System 2 Generative Model (Gemma 2B)</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border border-white/10 bg-black/60 p-4">
                <div className="font-mono text-xs font-bold text-amber-400 mb-1">[ SYSTEM 1: LAYA DECISION ENGINE ]</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A 185 MB Int4 non-autoregressive encoder (based on mmBERT / ModernBERT) executing in 15–35ms. Dispatched for deterministic classification: statement column auto-detection, transaction category prediction, and payment rail disambiguation (UPI, P2P, P2M, POS) with zero token generation overhead and zero hallucination risk.
                </p>
              </div>
              <div className="border border-white/10 bg-black/60 p-4">
                <div className="font-mono text-xs font-bold text-emerald-400 mb-1">[ SYSTEM 2: GEMMA 2B GENERATIVE ]</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Google&apos;s multimodal Gemma 2B running via LiteRT on device NPU/GPU. Dispatched for complex visual document parsing, camera receipt extraction, conversational queries, and unstructured spatial table reconstruction.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Optional Cloud Engines
            </h3>
            <p className="leading-relaxed text-gray-400">
              If your device cannot run the local model — or you simply want
              faster results — you can route AI tasks through OpenRouter,
              NVIDIA NIM, or Google AI. These are strictly opt-in: you supply
              your own API key, and Temporal charges you nothing. When a cloud
              engine is active, transaction fragments are processed by that
              provider under their privacy terms, so switch back to the Native
              engine whenever data sovereignty matters more than speed.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Choosing Models
            </h3>
            <p className="leading-relaxed text-gray-400">
              Each cloud provider comes with a curated catalog of models —
              free-tier options included — which you can browse, search, and
              filter in the app. If the model you want isn&apos;t listed, you
              can add any custom model ID yourself.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Airport Statement Scan
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I landed in another country with no SIM card and three weeks
              of untracked expenses.&quot; With the Native engine, scanning your
              statements works in flight mode. Nothing to configure, nothing
              transmitted — the extraction happens between your fingers and
              your screen.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Older Device
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;My phone is a few years old and can&apos;t load the local
              model.&quot; Switch the engine to a cloud provider, paste an API
              key from OpenRouter (which offers free models), and statement
              scanning works instantly — with a clear on-screen warning that
              you&apos;ve left the offline sandbox.
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
            Engine Architecture
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                LiteRT Acceleration (Gemma 2B)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                The generative model runs through LiteRT-LM with automatic backend
                selection across NPU, GPU, and CPU. If hardware acceleration
                fails on a device, Temporal permanently falls back to a stable
                CPU path so extraction never becomes unusable.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                System 1 Decision Engine (Laya)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Laya is an air-gapped non-autoregressive decision model running directly on-device. With an execution envelope of 15ms–35ms per transaction, it classifies complex Indian and international banking narrations into structured categories and detects statement column headers with 99%+ deterministic confidence.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Structured Output
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Extraction requests return schema-validated JSON, not free-form
                text. Malformed responses are retried against fallback models
                before surfacing an error, keeping your ledger free of
                half-parsed entries.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Key Storage
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Cloud API keys are stored locally on your device only and are
                sent directly to the provider you chose. Temporal has no server
                that could see, store, or leak them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
