import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Search + AI answer engines we WANT crawling us.
        // OAI-SearchBot powers ChatGPT Search citations (distinct from GPTBot).
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "meta-externalagent",
        ],
        allow: "/",
      },
      {
        userAgent: ["Bytespider", "CCBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://temporal.khatriutsav.com/sitemap.xml",
  };
}
