---
colors:
  primary: "#FFFFFF"
  canvas: "#000000"
  text-primary: "#FFFFFF"
  text-muted: "#888888"
  accent-emerald: "#34D399"
  accent-sky: "#38BDF8"
  accent-amber: "#FBBF24"
  border-industrial: "#333333"
typography:
  family-mono: "JetBrainsMono"
  family-sans: "Inter"
  family-serif: "Newsreader"
  size-hero: "144px"
  size-title: "48px"
spacing:
  base: "4px"
  section: "96px"
rounded:
  none: "0px"
components:
  hero-headline:
    textColor: "{colors.text-primary}"
    typography: "{typography.family-serif}"
  technical-label:
    textColor: "{colors.text-muted}"
    typography: "{typography.family-mono}"
  btn-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
  feature-accent-emerald:
    backgroundColor: "{colors.accent-emerald}"
  feature-accent-sky:
    backgroundColor: "{colors.accent-sky}"
  feature-accent-amber:
    backgroundColor: "{colors.accent-amber}"
  border-line:
    backgroundColor: "{colors.border-industrial}"
  technical-marquee:
    typography: "{typography.family-mono}"
    textColor: "{colors.border-industrial}"
---

# Overview: Cinematic Brutalism
The Public Site is the marketing face of the ZenLedger ecosystem. It employs **Cinematic Brutalism**—a high-fidelity extension of the app's utilitarian identity. It combines technical precision with atmospheric lighting, noise textures, and cinematic typography to create a sense of premium financial authority.

# Visual Identity & Textures
- **Atmospheric Foundation**: Deep black (`#000000`) with fix-positioned noise overlays (2.5% opacity) to provide a film-grain texture.
- **Atmospheric Glows**: Subtle, large-scale radial gradients (white at 0.03 opacity, 120px blur) used to create depth without violating the flat-aesthetic rule.
- **Scanlines**: Subtle horizontal line patterns (4px intervals) used in philosophy sections to simulate old CRT monitor outputs.

# Typography: The Editorial Contrast
The public site uses a high-contrast typographic hierarchy to guide the user's focus:
- **Newsreader Italic**: Primary tool for headlines and pull-quotes. It provides a "Human/Editorial" soul to the "Machine" interface.
- **JetBrains Mono**: Used for all "System Metadata," statistics, and technical overlines. Must be uppercase with 0.3em letter-spacing.
- **Inter**: Reserved for body descriptions and documentation prose for maximum legibility.

# Layout: The High-Resolution Grid
- **2px Hard Lines**: Primary sections are separated by 2px solid white or subtle-border lines.
- **Full-Viewport Sections**: Hero and high-impact statements should occupy 100vh to maintain cinematic immersion.
- **Interactive Inversion**: Hover states should trigger immediate color inversion (Black -> White) without transitions to maintain the brutalist feel.

# Motion & Transitions
- **Static First**: Interaction should feel instant. Avoid soft fades for buttons.
- **Entrance Animations**: Use `slide-up` (0.8s) for headlines and `fade-in` (0.6s) for sub-content during initial page load.
- **Technical Marquee**: Use infinite scrolling monospace strings in the background at low opacity (0.04) to suggest a "Living Engine" behind the site.

# Do's and Don'ts
### Do
- Use uppercase for all mono-spaced technical labels.
- Use `cursor: crosshair` for interactive sections to reinforce the precision theme.
- Align feature blocks to a perfect 3-column grid with 1px internal gaps.
- Use high-fidelity SVG diagrams for architecture visualizations.

### Don't
- **NEVER** use standard consumer colors; stick to White, Black, and specific functional accents (Emerald, Sky, Amber).
- **NEVER** use rounded corners.
- Avoid using standard "stock" photography; prefer technical renders or stylized code/data visualization.
- Don't use gradients for text; use them only for atmospheric glows in the background.
