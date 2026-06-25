import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/fr",
    languages: {
      "x-default": "https://www.mouhcinezhirou.com/",
      "fr": "https://www.mouhcinezhirou.com/fr",
    },
  },
  openGraph: {
    url: "https://www.mouhcinezhirou.com/fr",
    locale: "fr_MA",
  },
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}