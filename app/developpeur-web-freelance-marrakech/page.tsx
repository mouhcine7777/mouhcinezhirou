import type { Metadata } from "next";
import CityLandingPage from "../components/CityLandingPage";
import { getCityPage } from "../lib/city-pages";

const SITE = "https://www.mouhcinezhirou.com";
const data = getCityPage("developpeur-web-freelance-marrakech")!;
const PAGE_PATH = `/${data.slug}`;

export const metadata: Metadata = {
  title: `Développeur Web Freelance à ${data.city}`,
  description: `Développeur web freelance pour Marrakech, spécialisé React et Next.js. Sites vitrines, réservation en ligne et e-commerce, devis clair sous 24h, travail à distance.`,
  keywords: data.metaKeywords,
  alternates: { canonical: `${SITE}${PAGE_PATH}` },
  openGraph: {
    title: `Développeur Web Freelance à ${data.city} | Mouhcine Zhirou`,
    description: `Un seul interlocuteur, devis clair sous 24h. Développeur web freelance pour Marrakech, spécialisé React et Next.js.`,
    url: `${SITE}${PAGE_PATH}`,
    locale: "fr_MA",
    type: "website",
  },
};

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PAGE_PATH}#service`,
  name: `Mouhcine Zhirou — Développeur Web Freelance à ${data.city}`,
  description: `Développeur web freelance pour ${data.city}, spécialisé en React et Next.js. Création de sites vitrines, e-commerce et applications web sur mesure, en télétravail.`,
  url: `${SITE}${PAGE_PATH}`,
  image: `${SITE}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  areaServed: { "@type": "City", name: data.city },
  provider: { "@id": `${SITE}/#person` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Développeur Web Freelance au Maroc", item: `${SITE}/developpeur-web-freelance-maroc` },
    { "@type": "ListItem", position: 3, name: `Développeur Web Freelance à ${data.city}`, item: `${SITE}${PAGE_PATH}` },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <CityLandingPage data={data} />
    </>
  );
}
