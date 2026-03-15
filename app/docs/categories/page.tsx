export default function CategoriesDocs() {
  return (
    <article className="prose prose-invert max-w-none prose-p:leading-loose prose-headings:tracking-tight">
      <div className="mb-16">
        <div className="mb-4 font-mono text-xs tracking-widest text-gray-400 uppercase">
          [01.2] Organization
        </div>
        <h1 className="font-serif text-5xl italic md:text-7xl mb-8">
          Custom Categories.
        </h1>
        <p className="font-mono text-sm leading-relaxed text-gray-400 uppercase tracking-wider">
          Tailor the system to your life. No forced rigid structures.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="font-serif text-3xl italic mb-6">The End-User Perspective (75%)</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Define Your Own Rules</h3>
            <p className="text-gray-400 leading-relaxed">
              Standard finance apps give you generic categories like "Food" and "Rent." Temporal allows you to delete these and create your own. Want a category specifically for "Espresso" or "Cat Toys"? You can create it with custom icons and colors.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">The Power of Visual Cues</h3>
            <p className="text-gray-400 leading-relaxed">
              By assigning distinct colors and icons to your categories, your transaction list becomes a readable map of your lifestyle. You can quickly see patterns—like a sea of red indicating high impulsive spending on shopping.
            </p>
          </div>

          <div className="p-8 border border-white bg-white/5">
             <h4 className="font-mono text-xs font-bold tracking-widest mb-4 uppercase text-white">Use Case: Project Tracking</h4>
             <p className="text-sm text-gray-400 leading-relaxed italic">
               "I'm renovating my house and want to see only those costs." You can create a temporary category called 'Renovation.' Once the project is done, you can delete it or archive it—Temporal's database will keep the transaction records while unlinking the category.
             </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="p-8 bg-[#1a1a1a] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/30 uppercase">Technical Specs (25%)</div>
          <h2 className="font-serif text-2xl italic mb-6 text-white/90">Identity & Linkage</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Relational Integrity</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Categories are stored in the `categories` table. Every transaction holds a `categoryId`. If a category is deleted, the database is instructed to keep the transaction but set its category reference to `null`, ensuring your total expense records never disappear.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#aaaaaa] mb-2 uppercase tracking-tighter">Default Seeding</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                On first launch, the app seeds 15 default categories into your local SQLite db. These are marked with an `isDefault` flag, allowing them to be available to every vault you create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
