import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
  matcher: ["/fr", "/fr/:path*"],
};
