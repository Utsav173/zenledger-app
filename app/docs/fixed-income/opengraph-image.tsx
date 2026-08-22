import { generateOgImage } from "@/components/SEO/OgImageFactory";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fixed Income (FD) — Temporal";

export default function OpengraphImage() {
  return generateOgImage("Fixed Income (FD)", "TEMPORAL DOCS");
}
