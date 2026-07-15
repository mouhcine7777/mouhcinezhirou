import { MetadataRoute } from "next";

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
          fr: `${BASE}/fr`,
        },
      },
    },
    {
      url: `${BASE}/fr`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "x-default": `${BASE}/`,
          fr: `${BASE}/fr`,
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
      url: `${BASE}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
