import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Full Stack Developer in Morocco",
  description:
    "Freelance full stack web developer based in Casablanca, Morocco. Custom websites, e-commerce and web apps in React and Next.js. Free quote.",
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/en",
    languages: {
      "x-default": "https://www.mouhcinezhirou.com/",
      "fr": "https://www.mouhcinezhirou.com/",
      "en": "https://www.mouhcinezhirou.com/en",
    },
  },
  openGraph: {
    title: "Freelance Full Stack Developer in Morocco",
    description:
      "Custom websites, e-commerce and web apps in React and Next.js. Freelance developer based in Casablanca, Morocco.",
    url: "https://www.mouhcinezhirou.com/en",
    locale: "en_US",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}