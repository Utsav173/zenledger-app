import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/ai",
  },
  title: "The AI Engine | Temporal Docs",
  description: "How Temporal's cognitive AI works: on-device dual-system architecture combining System 1 Viterbi symbolic solvers with System 2 LiteRT Gemma neural models.",
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
          Deterministic System 1 symbolic solvers &middot; System 2 on-device neural array &middot; Zero remote telemetry
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The Dual-System Cognitive Architecture
            </h3>
            <p className="leading-relaxed text-gray-400 mb-4">
              Temporal rejects pure generative LLM guesswork for financial ledgers. Instead, it implements a hybrid cognitive architecture coupling <strong className="font-semibold text-gray-200">System 1 Deterministic Symbolic Engines</strong> with a <strong className="font-semibold text-gray-200">System 2 Neural Model Array (LiteRT Gemma)</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border border-white/10 bg-black/60 p-5">
                <div className="font-mono text-xs font-bold text-cyan-400 mb-2">[ SYSTEM 1: DETERMINISTIC ENGINES ]</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sub-35ms algorithmic processors executing directly on device CPU: SpatialLattice 1D Gaussian KDE for column gutter discovery, ViterbiBalanceSolver Trellis DP for balance continuity, Shannon entropy decomposition, and continuous on-device Bayesian MAP learning. Zero token hallucination risk.
                </p>
              </div>
              <div className="border border-white/10 bg-black/60 p-5">
                <div className="font-mono text-xs font-bold text-emerald-400 mb-2">[ SYSTEM 2: ON-DEVICE NEURAL ARRAY ]</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Quantized INT4 Google Gemma 2B, Gemma 3 1B, and Qwen 2.5 1.5B running via LiteRT on device NPU/GPU. Dispatched for complex visual document parsing, camera receipt OCR, autonomous financial queries, and unstructured spatial table reconstruction.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              The [MATH_LOCK] Invariant Guarantee
            </h3>
            <p className="leading-relaxed text-gray-400">
              When Temporal parses a multi-page bank statement, rows verified by the Viterbi solver receive an immutable <code className="text-[#00b2ff] bg-[#00b2ff]/10 px-1.5 py-0.5 border border-[#00b2ff]/20 font-mono text-xs">[MATH_LOCK]</code> stamp. Because balance continuity is mathematically proven (<code className="font-mono text-xs text-gray-300">Balance[t] = Balance[t-1] &plusmn; Amount[t]</code>), these rows cannot be altered, guessed, or hallucinated by language models.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Optional Cloud Engines (Strictly BYOK)
            </h3>
            <p className="leading-relaxed text-gray-400">
              If your device lacks an NPU or you prefer accelerated throughput for massive 100-page statements, you can connect an optional API key from Google Gemini, NVIDIA NIM, or OpenRouter. Cloud inference is strictly opt-in: your keys remain sealed in hardware KeyStore, and zero telemetry is collected by Temporal.
            </p>
          </div>

          <div className="border-l-2 border-white bg-white/3 p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: In-Flight Statement Ingestion
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              &quot;I landed on an international flight with no cellular reception and 6 months of scrambled PDF statements.&quot; Temporal&apos;s System 1 and System 2 pipelines execute completely offline in airplane mode. Statements are parsed, validated against mathematical balance continuity, and categorized without sending a single packet over the network.
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
            Engine Specifications &amp; Invariants
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                SpatialLattice &amp; 1D Gaussian KDE
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                SpatialLattice groups PDF text tokens into a 2D anisotropic proximity graph with baseline tolerance (|&Delta;y| &le; 4.0pt). Document column gutters are computed dynamically via 1D Gaussian Kernel Density Estimation (&sigma; = 10pt): Density(x) = &Sigma; [exp(-(x - x_left)&sup2; / 2&sigma;&sup2;) + 0.5 &middot; exp(-(x - x_center)&sup2; / 2&sigma;&sup2;)]. Multi-page Redundant Spatial Information (RSI) lattice snapping aligns drifted columns across pages without regex.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                ViterbiBalanceSolver &amp; Diophantine Subset-Sum
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Modeled as Trellis Dynamic Programming, the solver evaluates forward and reverse chronological sequences in integer cents (&epsilon; = 5 cents). For same-day batch transactions where banks omit intermediate balances, a combinatorial branch-and-bound subset-sum solver solves for the exact sign combination &Sigma; s_k &middot; A_k = &Delta;B.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                InformationEntropyDecomposer &amp; Transit Rail Peeling
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Calculates Shannon entropy H(X) across token distributions to separate meaningful merchant names from random terminal codes. Transit protocol layers (UPI, IMPS, NEFT, BBPS, POS, Razorpay, NACH) are peeled automatically, reserving &apos;cat_transfer&apos; strictly for self-account sweeps and P2P transfers.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                BayesianLearner (On-Device Continuous MAP)
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                A Multinomial Naive Bayes classifier backed by an encrypted SQLite vocabulary token frequency matrix. Calculates Maximum A Posteriori (MAP) log-likelihood probabilities across narration tokens, continuously adapting to your personalized spending habits without retraining a neural network.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                LiteRT Runtime Acceleration
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Google Gemma 2B INT4, Gemma 3 1B, and Qwen 2.5 1.5B execute via react-native-litert-lm with automatic acceleration targeting the device NPU, GPU, or quantized multi-threaded CPU. Malformed outputs are schema-validated with strict JSON-schema guards before database commit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
