import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Temporal — Local-First Finance with On-Device AI",
    short_name: "Temporal",
    description:
      "Privacy-focused, local-first personal finance app with on-device AI statement scanning. No cloud, no account.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
