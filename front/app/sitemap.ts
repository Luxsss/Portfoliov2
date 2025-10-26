import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexs-portfolioV2.vercel.app";
  const lastModified = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1.0,
    },
  ];
}
