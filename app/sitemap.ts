import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://temporal.khatriutsav.com";
  
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
  ].map((route) => ({
    url: `${baseUrl}/docs${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...docsRoutes,
  ];
}
