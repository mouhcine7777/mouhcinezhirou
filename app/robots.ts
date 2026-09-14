import { MetadataRoute } from "next";

// Required for static export — this route has no dynamic input, but Next
// needs the flag stated explicitly to prerender it at build time.
export const dynamic = "force-static";

const BASE = "https://www.mouhcinezhirou.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
