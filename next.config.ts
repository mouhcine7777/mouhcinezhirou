import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
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
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Apex -> www redirect moved to middleware.ts: Cloudflare's Next.js
  // adapter doesn't interpolate ":path*" in redirects() destinations the
  // way Vercel does, which produced a broken literal "/:path*" redirect.
};

export default nextConfig;
