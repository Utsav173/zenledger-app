import { generateOgImage } from "@/components/SEO/OgImageFactory";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Local-First Architecture — Temporal";

export default function OpengraphImage() {
  return generateOgImage("Local-First Architecture", "TEMPORAL DOCS");
}
