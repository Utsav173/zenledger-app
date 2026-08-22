import { generateOgImage } from "@/components/SEO/OgImageFactory";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Data Export & Control — Temporal";

export default function OpengraphImage() {
  return generateOgImage("Data Export & Control", "TEMPORAL DOCS");
}
