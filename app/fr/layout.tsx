import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Développeur Web Freelance au Maroc | Création de Site Web sur Mesure",
  description:
    "Vous cherchez un développeur pour créer votre site web ? Développeur full stack freelance à Casablanca : sites vitrines, e-commerce et applications sur mesure en React & Next.js. Devis gratuit.",
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/fr",
    languages: {
      "x-default": "https://www.mouhcinezhirou.com/",
      "fr": "https://www.mouhcinezhirou.com/fr",
    },
  },
  openGraph: {
    title:
      "Développeur Web Freelance au Maroc | Création de Site Web sur Mesure",
    description:
      "Développeur full stack freelance à Casablanca : sites vitrines, e-commerce et applications sur mesure en React & Next.js.",
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