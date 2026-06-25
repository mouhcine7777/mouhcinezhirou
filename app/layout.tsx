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
  title: "Mouhcine Zhirou | Développeur Web Full Stack – Maroc",
  description:
    "Mouhcine Zhirou, développeur web full stack basé au Maroc. Création de sites web modernes, applications web et mobile. Disponible pour des projets freelance.",
  keywords: [
    "développeur web Maroc",
    "développeur site web",
    "full stack developer Morocco",
    "création site web Maroc",
    "développeur freelance Maroc",
    "React developer Morocco",
    "Next.js developer",
    "développeur web Casablanca",
    "Mouhcine Zhirou",
    "web developer Morocco",
    "website freelancer",
    "développeur de site web",
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
    title: "Mouhcine Zhirou | Développeur Web Full Stack – Maroc",
    description:
      "Développeur web full stack basé au Maroc. Création de sites web modernes et applications sur mesure.",
    url: "https://www.mouhcinezhirou.com/",
    siteName: "Mouhcine Zhirou",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mouhcine Zhirou | Développeur Web Full Stack – Maroc",
    description:
      "Développeur web full stack basé au Maroc. Création de sites web modernes et applications sur mesure.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mouhcine Zhirou",
  url: "https://www.mouhcinezhirou.com",
  jobTitle: "Développeur Web Full Stack",
  description:
    "Développeur web full stack basé au Maroc, spécialisé en React, Next.js et Node.js.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  sameAs: [
    "https://github.com/mouhcine7777",
    "https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0",
  ],
  knowsAbout: [
    "React", "Next.js", "Node.js", "TypeScript",
    "Web Development", "Full Stack Development",
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