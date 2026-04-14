import type { MetadataRoute } from "next";

const SITE = "https://www.flippolandandwildlife.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
