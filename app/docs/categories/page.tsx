import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://temporal.khatriutsav.com/docs/categories",
  },
  title: "Taxonomy & Cognitive Categorization | Temporal Docs",
  description: "Learn how Temporal couples user-defined custom categories with on-device Naive Bayes MAP classification, Information Entropy token decomposition, and trigram fuzzy matching.",
  openGraph: { images: ["/og/docs-categories.png"] },
  twitter: { images: ["/og/docs-categories.png"] },
};

export default function CategoriesDocs() {
  return (
    <article className="prose prose-invert prose-p:leading-loose prose-headings:tracking-tight max-w-none">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01.2] Organization & AI
        </div>
        <h1 className="mb-8 font-serif text-5xl italic md:text-7xl">
          Custom Categories & Cognitive Mapping.
        </h1>
        <p className="font-mono text-sm leading-relaxed tracking-wider text-gray-400 uppercase">
          Total taxonomy sovereignty backed by an on-device Multinomial Naive Bayes classifier.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-6 font-serif text-3xl italic">
          The End-User Perspective
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Sovereign Financial Taxonomy
            </h3>
            <p className="leading-relaxed text-gray-400">
              Generic personal finance tools enforce rigid, opinionated categories that fail to mirror real life. Temporal provides complete taxonomic freedom: construct custom category hierarchies, customize visual tokens with bespoke hex palettes and icons, or archive obsolete categories without breaking historical spending audits.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xl font-bold text-white">
              Self-Learning Auto-Categorization
            </h3>
            <p className="leading-relaxed text-gray-400">
              When importing raw bank statements or scanning receipts, you shouldn't have to categorize hundreds of transactions by hand. As you classify transactions, Temporal learns your personalized allocation habits locally. The next time a statement contains a cryptic narration, Temporal classifies it automatically with mathematical confidence scoring.
            </p>
          </div>

          <div className="border border-white/10 bg-black p-8">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase">
              Use Case: Project & Capital Expenditure Segregation
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "I am renovating an apartment and need to track distinct sub-categories for carpentry, electrical fixtures, and permits, but want to collapse them into a single report after completion." In Temporal, you can create dedicated project categories. When the renovation concludes, archiving the category preserves every transaction and receipt attachment with full historical fidelity.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="relative overflow-hidden border border-white/10 bg-black p-8">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">
            Technical Architecture (25%)
          </div>
          <h2 className="mb-6 font-serif text-2xl text-white/90 italic">
            Cognitive Classification Subsystem
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                `InformationEntropyDecomposer`: Rail & Token Peeling
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Raw bank narrations are plagued by high-entropy noise: transit markers (`UPI/`, `NEFT-`, `POS`), alphanumeric reference sequences, and payment gateway hashes. Temporal's `InformationEntropyDecomposer` calculates token entropy $H(X)$, strips transit rail noise, and isolates high-signal counterparty stems before classification begins.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                `BayesianLearner`: Multinomial Naive Bayes MAP
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Classification is driven by an on-device Multinomial Naive Bayes engine with Laplace smoothing ($k=1$). Stored in the `ml_vocabulary` table, it computes Maximum A Posteriori (MAP) probabilities over token distributions:
              </p>
              <div className="mt-3 border border-white/10 bg-[#0a0a0a] p-4 font-mono text-[11px] text-gray-300">
                P(C | w₁, ..., wₙ) ∝ P(C) · ∏ P(wᵢ | C)<br />
                P(wᵢ | C) = (count(wᵢ, C) + 1) / (∑ count(w, C) + |V|)
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Every manual user correction immediately updates the local vocabulary frequency matrix, delivering zero-latency personalization without cloud model fine-tuning.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                `CategoryMapper`: Trigram Fuzzy Similarity
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                For unseen tokens or initial unseeded vaults, `CategoryMapper` computes character-level trigram similarity (S<sub>trigram</sub> &ge; 0.65) across category keywords and counterparty aliases, ensuring accurate classification even in the presence of minor bank typos and truncated narrations.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-bold tracking-tighter text-[#aaaaaa] uppercase">
                Referential Integrity & O(1) Memory Cache
              </h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Categories are loaded into an in-memory O(1) hash map (`CategoryContext`) during app launch. Foreign key relationships enforce `ON DELETE SET NULL` on `transactions.categoryId`, guaranteeing that deleting a custom category will never orphan, corrupt, or erase historical transaction ledgers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
