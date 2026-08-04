import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Freelance Full Stack Web Developer in Morocco | Custom Website Development",
  description:
    "Looking for a developer to build your website? Freelance full stack developer based in Casablanca: business websites, e-commerce and custom web apps in React & Next.js. Free quote.",
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/en",
    languages: {
      "x-default": "https://www.mouhcinezhirou.com/",
      "fr": "https://www.mouhcinezhirou.com/",
      "en": "https://www.mouhcinezhirou.com/en",
    },
  },
  openGraph: {
    title:
      "Freelance Full Stack Web Developer in Morocco | Custom Website Development",
    description:
      "Freelance full stack developer based in Casablanca: business websites, e-commerce and custom web apps in React & Next.js.",
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