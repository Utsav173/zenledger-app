# ZenLedger Design System: Future Financial Brutalism

## Philosophy

**Utilitarian / Swiss / Future Financial Brutalism**

This design system prioritizes **function over form**, **raw data presentation**, and **high-contrast precision**. It draws inspiration from:

- **Swiss Style**: Grid systems, sans-serif typography, high readability, objective photography/imagery.
- **Brutalism**: Raw materials, hard edges, lack of decoration, bold distinct visuals.
- **Bloomberg Terminal**: Data density, monospaced fonts, high contrast (black backgrounds).

## 1. Core Visual Principles

- **No Rounded Corners**: `border-radius: 0` everywhere. Buttons, inputs, modals – all sharp edges.
- **High Contrast**: Primary background is `#050505` (near black), text is `#EAEAEA` (off-white) or pure White.
- **Grid Lines**: Use visible 1px borders to separate content. "The Grid is the UI."
- **Data Density**: Don't be afraid of small, legible monospaced text for data.
- **Micro-Interactions**: Harsh, digital transitions. Haptic feedback on every interaction.

## 2. Typography

We use a mixed type scale to differentiate "Voice" (headings) from "Data" (content).

| Role                  | Font Family      | Variable         | Usage                                              |
| --------------------- | ---------------- | ---------------- | -------------------------------------------------- |
| **Data / Numbers**    | `JetBrains Mono` | `--font-mono`    | Prices, Dates, IDs, Input Fields, Tabular Data.    |
| **Labels / UI**       | `Inter`          | `--font-display` | Button Labels, Navigation, Form Labels, Body Text. |
| **Editorial / Heavy** | `Newsreader`     | `--font-serif`   | distinct headers, "The Brand Voice".               |

**Rules:**

- All numbers MUST be `font-mono`.
- Currency amounts should be prominent.

## 3. Color Palette

Strictly limited palette.

- **Canvas**: `#050505` (Main Background)
- **Surface**: `#121212` (Cards/Modals - rare, prefer borders)
- **Border**: `#333333` (The Grid Lines)
- **Text Primary**: `#EAEAEA`
- **Text Secondary**: `#888888` (Meta data)
- **Accent Primary**: `#00B2FF` (Cyan - Active states, Links)
- **Accent Success**: `#00FF00` (Terminal Green)
- **Accent Error**: `#FF0000` (Terminal Red - hard, bright)

## 4. Layout & Spacing

- **Spacing Scale**: 4px based. `p-1` (4px), `p-4` (16px).
- **The Grid**: Use `border-[1px] border-[#333333]` to define layout regions.
- **SafeArea**: Always account for notches and home indicators.
- **Touch Targets**: Minimum 44x44pt for all interactive elements.

## 5. UI Component Patterns

### Buttons

- **Style**: 1px Border (White or Border Color), Black Background.
- **Active State**: Invert (White BG, Black Text) OR Cyan Border/BG.
- **Shape**: Rectangular. No radius.
- **Text**: Uppercase `font-mono` or Bold `font-display`.

### Inputs

- **Style**: Bottom border only (`border-b border-[#333333]`) OR Full bold box.
- **Focus**: Hard color change on border (to White or Cyan).
- **Text**: Large, monospaced for financial entry.

### Lists

- **Separators**: Full width 1px lines.
- **Density**: Compressed, information-rich.

## 6. Accessibility & Responsiveness

- **Contrast**: Maintain strict 7:1 contrast ratio for text.
- **Touch**: Add `hitSlop` to small icons.
- **Screen Readers**: All inputs need labels. Images need alt text.
- **Device Support**: Test layouts on small screens (SE) and large (Max). Use `flex-1` and `ScrollView` to prevent clipping.
