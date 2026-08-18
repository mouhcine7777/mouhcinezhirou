// Generated at build time by scripts/generate-blog-images.mjs by scanning
// public/blog/. Deliberately NOT an fs.existsSync() runtime check: on
// Cloudflare Workers, public/ is served as edge static assets and isn't
// readable via node:fs at request time, so that check always returned
// false in production. A build-time-baked list works the same everywhere.
import blogImageSlugs from "./blog-images.generated.json";

const slugsWithImage = new Set<string>(blogImageSlugs as string[]);

// True once public/blog/<slug>.jpg existed at build time.
export function hasBlogImage(slug: string): boolean {
  return slugsWithImage.has(slug);
}
