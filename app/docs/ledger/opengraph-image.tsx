import { generateOgImage } from "@/components/SEO/OgImageFactory";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vaults & The Ledger — Temporal";

export default function OpengraphImage() {
  return generateOgImage("Vaults & The Ledger", "TEMPORAL DOCS");
}
