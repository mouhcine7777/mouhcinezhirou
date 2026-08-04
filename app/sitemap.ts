import { MetadataRoute } from "next";
import { blogPosts } from "./lib/blog-posts";

const BASE = "https://www.mouhcinezhirou.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "x-default": `${BASE}/`,
          fr: `${BASE}/`,
          en: `${BASE}/en`,
        },
      },
    },
    {
      url: `${BASE}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "x-default": `${BASE}/`,
          fr: `${BASE}/`,
          en: `${BASE}/en`,
        },
      },
    },
    {
      url: `${BASE}/creation-site-web-maroc`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/developpeur-web-freelance-casablanca`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
