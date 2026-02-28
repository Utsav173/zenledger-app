# Temporal // Public Site

**Utilitarian Wealth Tracking.** This is the public-facing documentation and landing page for Temporal, a high-performance personal finance tracking application.

## Tech Stack

- **Framework**: [Vinext](https://github.com/vinext/vinext) (Experimental Vite-based React framework)
- **Styling**: Tailwind CSS v4 (Utilitarian Brutalism)
- **Runtime**: [Bun](https://bun.sh)
- **Infrastructure**: Cloudflare Workers / Pages
- **Typography**: Newsreader (Serif), JetBrains Mono (Mono), Inter (Sans)

## Project Structure

- `app/`: React App Router tracks (`/`, `/manual`, `/ledger`, `/vault`, `/privacy`, `/terms`, `/refunds`)
- `components/`: Reusable UI components (Header, Footer, SEO)
- `public/`: Static assets, icons, and APK download binaries

## Local Development

Ensure you have [Bun](https://bun.sh) installed.

```bash
# Install dependencies
bun install

# Start development server
bun run dev:vinext
```

The dev server will be available at `http://localhost:3001`.

## Deployment

Deployment is handled via the root-level scripts:

1. `scripts/sync-public-site.sh`: Syncs the latest Android APK build into the public download folder.
2. `scripts/deploy-to-cloudflare.sh`: Compiles the Vinext bundle and deploys to Cloudflare Workers.

## Aesthetic Guidelines

Temporal follows a strict **Utilitarian Brutalist** philosophy:

- 0px border radius on all elements.
- Absolute monochrome palette (#000000 / #FFFFFF).
- High-contrast, instantaneous hover states (no transitions).
- Heavy structural borders (1px to 4px).
- Monospace metadata metadata paired with elegant italic serifs.

---

© 2026 TEMPORAL SYSTEMS INC.
