import { generateOgImage } from "@/components/SEO/OgImageFactory";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Security & Privacy — Temporal";

export default function OpengraphImage() {
  return generateOgImage("Security & Privacy", "TEMPORAL DOCS");
}
