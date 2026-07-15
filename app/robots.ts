import { MetadataRoute } from "next";

const BASE = "https://www.mouhcinezhirou.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/v2"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
