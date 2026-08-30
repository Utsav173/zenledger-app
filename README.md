# Temporal // Public Site

**Utilitarian Wealth Tracking.** This is the public-facing documentation, interactive architectural schematics, and 60-question knowledge base for Temporal.

## Tech Stack

- **Framework**: [Vinext](https://github.com/vinext/vinext) (Vite 7-based React framework)
- **Architecture Schematics**: [Archify](https://github.com/tt-a1i/archify) (Validated SVG/HTML schematics)
- **Styling**: Tailwind CSS v4 (Utilitarian Financial Brutalism)
- **Runtime**: [Bun](https://bun.sh)
- **Infrastructure**: Cloudflare Workers / Pages
- **Typography**: Newsreader (Serif), JetBrains Mono (Mono), Inter (Sans)

## Routes & Pages

- `/`: Main landing page with interactive terminal, feature grid, and embedded Archify topology.
- `/queries`: Comprehensive 60-item system query knowledge base with live keyword search and `FAQPage` schema.
- `/docs`: Technical documentation hub (Core, Ledger, AI, Security, Investments, Recovery).
- `/ledger` & `/vault`: Interactive ledger previews and double-entry breakdowns.
- `/manual` & `/manifesto`: Engineering philosophy and operation guides.
- `/architecture/zenledger-architecture.html`: Standalone Core System Topology schematic.
- `/architecture/ai-pipeline.html`: Standalone On-Device Neural Statement Pipeline dataflow.

## Local Development

Ensure you have [Bun](https://bun.sh) installed.

```bash
# Navigate to public-site
cd public-site

# Install dependencies
bun install

# Start development server
bun run dev:vinext
```

The site will be available at `http://localhost:3000`.

## Production Build

```bash
bun run build
```

---

© 2026 TEMPORAL SYSTEMS INC.
