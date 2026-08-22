import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://temporal.khatriutsav.com";

  const staticRoutes = [
    "",
    "/ledger",
    "/vault",
    "/manual",
    "/manifesto",
    "/privacy",
    "/terms",
    "/refunds",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
  const docsRoutes = [
    "",
    "/core",
    "/ledger",
    "/transactions",
    "/categories",
    "/investments",
    "/stocks-mf",
    "/commodities",
    "/fixed-income",
    "/security",
    "/recovery",
    "/data",
    "/ai",
  ].map((route) => ({
    url: `${baseUrl}/docs${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...docsRoutes];
}
