import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Apex -> www. Done here (instead of next.config.ts's `redirects()`)
  // because Cloudflare's Next.js adapter doesn't interpolate ":path*" in
  // config-level redirect destinations the way Vercel's edge does — it was
  // sending back a literal "Location: https://www.mouhcinezhirou.com/:path*".
  // Building the URL by hand in middleware avoids that entirely.
  if (request.nextUrl.hostname === "mouhcinezhirou.com") {
    const url = request.nextUrl.clone();
    url.hostname = "www.mouhcinezhirou.com";
    return NextResponse.redirect(url, 308);
  }

  // "/fr" used to be the French homepage; French now lives at "/".
  // 301 this so the SEO equity already built up on "/fr" carries over.
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return NextResponse.redirect(
      new URL(pathname.replace(/^\/fr/, "") || "/", request.url),
      308
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything except static assets / Next internals, since the
    // apex->www redirect needs to apply to all paths.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
