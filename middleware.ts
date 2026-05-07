import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run on the root path
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // 1. If the user manually chose a language, respect it — don't redirect
  const langPref = request.cookies.get("lang-pref")?.value;
  if (langPref) {
    if (langPref === "fr") {
      return NextResponse.redirect(new URL("/fr", request.url));
    }
    // langPref === "en" → stay on "/"
    return NextResponse.next();
  }

  // 2. No manual preference yet — fall back to Accept-Language
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLang = parsePreferredLanguage(acceptLanguage);

  if (preferredLang === "fr") {
    return NextResponse.redirect(new URL("/fr", request.url));
  }

  return NextResponse.next();
}

function parsePreferredLanguage(acceptLanguage: string): string {
  if (!acceptLanguage) return "en";

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=");
      return {
        code: code.trim().toLowerCase().split("-")[0],
        quality: q ? parseFloat(q) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  return languages[0]?.code || "en";
}

export const config = {
  matcher: ["/"],
};