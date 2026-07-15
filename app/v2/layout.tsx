import type { Metadata } from "next";

// Experimental route — keep it out of Google so it never competes
// with the real homepage for the same keywords.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/",
  },
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
