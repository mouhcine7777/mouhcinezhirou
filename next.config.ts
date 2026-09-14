import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: the whole site is prerendered HTML (confirmed —
  // every route builds as static/SSG, nothing needs a server per request).
  // Deploying that as-is to Cloudflare Pages' static hosting means no
  // Worker/CPU-time budget is involved in serving it at all, which is what
  // kept tripping Cloudflare's Worker CPU-time limit (Error 1102) under
  // Workers-based hosting. Security headers, the apex->www redirect, and
  // the old /fr redirect all move to host-level config for the same
  // reason: `headers()` and `middleware.ts` can't run at request time
  // without a server, so Cloudflare Pages' `_headers` / `_redirects`
  // files (see public/) take over that job instead.
  output: "export",
  // Inline the (small) CSS into the HTML so it no longer blocks first paint.
  experimental: {
    inlineCss: true,
  },
  images: {
    // Next.js's built-in image optimizer needs sharp, which isn't
    // available on Cloudflare Workers — it falls back to a slow JS/WASM
    // codec that was blowing through the Worker's CPU time limit on any
    // page rendering a real (non-placeholder) <Image>, i.e. every blog
    // page. Serving files as-is avoids running that optimizer at all.
    // Also required for static export, which can't run the optimizer.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
