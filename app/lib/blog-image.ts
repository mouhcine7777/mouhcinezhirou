import { existsSync } from "node:fs";
import path from "node:path";

// Server-only: true once public/blog/<slug>.jpg exists.
export function hasBlogImage(slug: string): boolean {
  return existsSync(path.join(process.cwd(), "public", "blog", `${slug}.jpg`));
}
