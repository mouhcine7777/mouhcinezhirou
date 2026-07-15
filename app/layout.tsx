import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Développeur Web Full Stack Freelance au Maroc | Création de Site Web – Mouhcine Zhirou",
    template: "%s | Mouhcine Zhirou",
  },
  description:
    "Développeur web full stack freelance au Maroc (Casablanca). Création de sites web modernes, e-commerce et applications sur mesure en React & Next.js. Devis gratuit — disponible pour vos projets.",
  keywords: [
    "développeur web freelance",
    "développeur full stack freelance",
    "création site web",
    "création site web Maroc",
    "création site web Casablanca",
    "développeur web Maroc",
    "développeur web Casablanca",
    "développeur freelance Maroc",
    "créer un site web",
    "faire un site web",
    "développeur React",
    "développeur Next.js",
    "développeur site e-commerce",
    "agence web Maroc",
    "web developer Morocco",
    "full stack developer Morocco",
    "freelance web developer",
    "Mouhcine Zhirou",
  ],
  authors: [{ name: "Mouhcine Zhirou", url: "https://www.mouhcinezhirou.com" }],
  creator: "Mouhcine Zhirou",
  metadataBase: new URL("https://www.mouhcinezhirou.com"),
  alternates: {
    canonical: "https://www.mouhcinezhirou.com/",
    languages: {
      "x-default": "https://www.mouhcinezhirou.com/",
      "fr": "https://www.mouhcinezhirou.com/fr",
    },
  },
  openGraph: {
    title:
      "Développeur Web Full Stack Freelance au Maroc | Création de Site Web",
    description:
      "Création de sites web modernes, e-commerce et applications sur mesure en React & Next.js. Développeur freelance basé à Casablanca, Maroc — disponible pour vos projets.",
    url: "https://www.mouhcinezhirou.com/",
    siteName: "Mouhcine Zhirou — Développeur Web Freelance",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Développeur Web Full Stack Freelance au Maroc | Création de Site Web",
    description:
      "Création de sites web modernes et applications sur mesure en React & Next.js. Développeur freelance à Casablanca, Maroc.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Io7wIEZKDVMIb5MKAoY-zaQYGs_MZcUqvktz7QZmLpI",
  },
};

const SITE = "https://www.mouhcinezhirou.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Mouhcine Zhirou",
      url: SITE,
      jobTitle: "Développeur Web Full Stack Freelance",
      description:
        "Développeur web full stack freelance basé au Maroc, spécialisé dans la création de sites web et d'applications sur mesure en React, Next.js et Node.js.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
      sameAs: [
        "https://github.com/mouhcine7777",
        "https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0",
      ],
      knowsLanguage: ["fr", "en", "ar"],
      knowsAbout: [
        "React", "Next.js", "Node.js", "TypeScript",
        "Création de site web", "Développement web", "E-commerce",
        "Full Stack Development", "Web Design",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: "Mouhcine Zhirou — Développeur Web Freelance",
      url: SITE,
      image: `${SITE}/opengraph-image`,
      priceRange: "$$",
      description:
        "Création de sites web modernes, sites vitrines, e-commerce et applications web sur mesure. Développeur full stack freelance au Maroc, disponible en télétravail dans le monde entier.",
      provider: { "@id": `${SITE}/#person` },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Rabat" },
        { "@type": "City", name: "Marrakech" },
        { "@type": "Country", name: "Morocco" },
        { "@type": "Country", name: "France" },
        "Worldwide",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      availableLanguage: ["French", "English", "Arabic"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de développement web",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Création de site web vitrine",
              description:
                "Sites web modernes et performants pour présenter votre activité.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Création de site e-commerce",
              description:
                "Boutiques en ligne sur mesure pour vendre vos produits.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Développement d'application web sur mesure",
              description:
                "Applications web full stack en React, Next.js et Node.js.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Mouhcine Zhirou — Développeur Web Freelance",
      inLanguage: "fr-MA",
      publisher: { "@id": `${SITE}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-28JHD3CS6T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-28JHD3CS6T');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}