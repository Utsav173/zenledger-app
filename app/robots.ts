import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Applebot-Extended"],
        allow: "/",
      },
      {
        userAgent: ["Amazonbot", "Bytespider", "CCBot"],
        disallow: "/",
      },
    ],
    sitemap: "http://temporal.khatriutsav.com/sitemap.xml",
  };
}
