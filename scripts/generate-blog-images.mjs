// Scans public/blog for <slug>.jpg cover images and bakes the list into a
// static JSON file that ships inside the app bundle.
//
// Why this exists: the old approach used fs.existsSync() at render time to
// check for a cover file. That works with a real filesystem (local dev,
// Vercel), but on Cloudflare Workers, files under public/ are served as
// edge static assets and aren't readable via node:fs at request time — the
// check silently always returned false there, so every post fell back to
// the placeholder cover. Generating this list at build time (Node, real fs)
// and importing it as data sidesteps the issue entirely: it works the same
// everywhere because it's not a runtime filesystem check anymore.
import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogDir = path.join(root, "public", "blog");
const outDir = path.join(root, "app", "lib");
const outFile = path.join(outDir, "blog-images.generated.json");

let slugs = [];
try {
  slugs = readdirSync(blogDir)
    .filter((f) => f.toLowerCase().endsWith(".jpg"))
    .map((f) => f.slice(0, -4));
} catch {
  // public/blog doesn't exist yet — ship an empty list, everything falls
  // back to the placeholder cover.
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JSON.stringify(slugs, null, 2) + "\n");

console.log(`[generate-blog-images] wrote ${slugs.length} slug(s) to ${path.relative(root, outFile)}`);
