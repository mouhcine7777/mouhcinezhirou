import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "../components/Footer";
import WhatsAppLink from "../components/WhatsAppLink";
import SiteHeader from "../components/SiteHeader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const ACCENT = "#e8ff47";
const SITE = "https://www.mouhcinezhirou.com";
const HOME = "/";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0";

export const metadata: Metadata = {
  title: "Site Web pour Restaurant au Maroc | Menu Digital & QR Code",
  description:
    "Création de site web pour restaurant au Maroc : menu digital, QR code sans contact, réservation en ligne, design sur mesure. 6 restaurants déjà équipés, par un développeur freelance à Casablanca.",
  keywords: [
    "site web restaurant maroc",
    "création site internet restaurant maroc",
    "menu digital restaurant",
    "menu digital restaurant maroc",
    "qr code menu restaurant",
    "site vitrine restaurant maroc",
    "site web restaurant casablanca",
    "site web restaurant tanger",
    "site web restaurant marrakech",
    "développeur site restaurant maroc",
    "réservation en ligne restaurant",
    "menu numérique restaurant",
  ],
  alternates: { canonical: `${SITE}/site-web-restaurant-maroc` },
  openGraph: {
    title: "Site Web pour Restaurant au Maroc | Menu Digital & QR Code",
    description:
      "Menu digital, QR code sans contact, réservation en ligne, design sur mesure : des sites web pensés pour les restaurants au Maroc. 6 restaurants déjà équipés.",
    url: `${SITE}/site-web-restaurant-maroc`,
    locale: "fr_MA",
    type: "website",
  },
};

/* ── Data ── */
const stats = [
  { n: "6+", l: "Restaurants équipés" },
  { n: "100%", l: "Responsive mobile" },
  { n: "<2s", l: "Temps de chargement" },
];

const marquee = [
  "Menu digital",
  "QR Code sans contact",
  "Réservation en ligne",
  "Galerie & ambiance",
  "Multilingue",
  "SEO local",
  "Google Maps & avis",
  "Design sur mesure",
];

type RestaurantProject = {
  title: string;
  city: string;
  cuisine: string;
  description: string;
  image: string;
  url: string;
};

// Real, live client work — not mockups. Pulled from the same portfolio
// shown on the homepage, filtered to food & beverage projects.
const projects: RestaurantProject[] = [
  {
    title: "Chiringuito Tanger",
    city: "Tanger",
    cuisine: "Méditerranéenne",
    description: "Restaurant de plage avec vue côtière — menu digital et ambiance mise en scène par la photo.",
    image: "/projects/Chiringuito-portfolio.jpeg",
    url: "https://chiringuito-tanger.com/",
  },
  {
    title: "Tangerino Restaurant",
    city: "Tanger & Rabat",
    cuisine: "Cuisine locale",
    description: "Deux adresses, un seul site : structure multi-établissement pensée pour évoluer avec l'enseigne.",
    image: "/projects/tangerino-portfolio.jpeg",
    url: "https://tangerino-restaurant.com/",
  },
  {
    title: "Le Guépard Tanger",
    city: "Tanger",
    cuisine: "Gastronomique",
    description: "Restaurant gastronomique — design raffiné qui reflète le positionnement haut de gamme de l'adresse.",
    image: "/projects/leguepard-portfolio.jpeg",
    url: "http://leguepard-tanger.com/",
  },
  {
    title: "Garden Eataly",
    city: "Casablanca",
    cuisine: "Italienne",
    description: "Pizzeria italienne — menu digital clair, pensé pour la commande rapide en heure de pointe.",
    image: "/projects/gardeneataly-portfolio.jpeg",
    url: "https://gardeneataly.vercel.app",
  },
  {
    title: "Anzar Restaurant Tanger",
    city: "Tanger",
    cuisine: "Marocaine",
    description: "Menu et ambiance mis en valeur avec un design chaleureux, pensé pour convertir un visiteur en réservation.",
    image: "/projects/anzar-portfolio.jpeg",
    url: "https://anzar-morocco.com/",
  },
  {
    title: "Garden Bake's",
    city: "Casablanca",
    cuisine: "Boulangerie & pâtisserie",
    description: "Boulangerie artisanale — catalogue produits et ambiance chaleureuse pour une boutique gourmande.",
    image: "/projects/gardenbakes-portfolio.jpeg",
    url: "https://gardenbakes.vercel.app",
  },
];

const features = [
  {
    t: "Menu digital interactif",
    d: "Votre carte présentée en ligne, organisée par catégories, avec photos — modifiable par vous-même à tout moment, sans dépendre de moi pour un changement de prix.",
    icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="1.6" />,
  },
  {
    t: "QR Code sans contact",
    d: "Un QR code généré pour vos tables : le client scanne, la carte s'affiche instantanément sur son téléphone. Standard depuis 2020, toujours attendu par une partie des clients.",
    icon: <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm2 11h1v1h-1v-1zm3 0h1v5h-5v-1h4v-4zm-5 3h1v2h-1v-2z" strokeWidth="1.4" />,
  },
  {
    t: "Réservation en ligne",
    d: "Un formulaire de réservation clair, connecté si besoin à WhatsApp Business pour un suivi rapide des demandes de table.",
    icon: <path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="1.6" />,
  },
  {
    t: "Galerie & ambiance",
    d: "Vos plats et votre cadre mis en valeur avec des photos optimisées — l'expérience se vend avant même l'arrivée du client.",
    icon: <path d="M3 5h18v14H3V5zm3 10 4-5 3 4 2-2 4 3" strokeWidth="1.6" />,
  },
  {
    t: "Google Maps & avis",
    d: "Localisation, horaires et avis clients intégrés — les mêmes informations que Google Business Profile, mais sur votre propre site, sous votre contrôle.",
    icon: <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" strokeWidth="1.6" />,
  },
  {
    t: "Multilingue",
    d: "Français, anglais, espagnol selon votre clientèle : une carte comprise par vos clients marocains comme par les touristes de passage.",
    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeWidth="1.5" />,
  },
];

const reasons = [
  {
    t: "Le menu digital n'est plus optionnel",
    d: "Depuis 2020, une partie de vos clients cherche le QR code par réflexe. Ne pas l'avoir, c'est une friction — parfois une image de marque datée — dès la première minute.",
  },
  {
    t: "Google est le nouveau bouche-à-oreille",
    d: "« restaurant [votre ville] », « meilleur [cuisine] près de moi » : sans site optimisé, ces recherches profitent à vos concurrents, pas à vous.",
  },
  {
    t: "La photo vend avant le plat",
    d: "Un client choisit rarement un restaurant sans avoir vu son cadre ou sa carte. Un site rapide et visuel transforme un visiteur curieux en réservation.",
  },
  {
    t: "Votre carte change, votre site doit suivre",
    d: "Prix, plats du jour, nouveautés : je construis le site pour que vous puissiez mettre à jour votre menu vous-même, sans repasser par moi à chaque changement.",
  },
];

const steps = [
  { n: "01", t: "Échange & devis gratuit", d: "On discute de votre restaurant, votre carte et vos objectifs sur WhatsApp. Devis clair sous 24h." },
  { n: "02", t: "Design & menu digital", d: "Je conçois le site et structure votre menu digital, avec vos photos et votre identité visuelle." },
  { n: "03", t: "Mise en ligne & QR code", d: "Votre site est publié, votre QR code généré pour vos tables, et le référencement local optimisé." },
];

const faqs = [
  {
    q: "Combien coûte un site web pour restaurant au Maroc ?",
    a: "Un site vitrine avec menu digital se situe généralement entre 4 000 et 9 000 MAD, selon le nombre de sections de carte et les fonctionnalités (réservation, multilingue). Le détail complet des prix est dans mon guide des tarifs pour un site web au Maroc.",
  },
  {
    q: "Le menu digital remplace-t-il complètement le menu papier ?",
    a: "C'est vous qui décidez. Beaucoup de mes clients gardent le menu papier pour l'ambiance en salle et utilisent le menu digital pour le site, les réseaux sociaux et le QR code sur table — les deux se complètent très bien.",
  },
  {
    q: "Puis-je mettre à jour mon menu moi-même après la livraison ?",
    a: "Oui, c'est pensé pour ça dès le départ. Je vous montre comment modifier vos plats et vos prix vous-même, sans dépendre de moi pour chaque petit changement de carte.",
  },
  {
    q: "Proposez-vous la réservation en ligne et le QR code pour les tables ?",
    a: "Oui, les deux sont inclus dans une offre restaurant : un formulaire de réservation connecté à WhatsApp Business, et un QR code généré pour vos tables qui pointe directement vers votre menu digital.",
  },
  {
    q: "Combien de temps pour avoir mon site en ligne ?",
    a: "Comptez 2 à 3 semaines pour un site restaurant complet (menu digital, réservation, photos), en fonction de la disponibilité de votre contenu (photos, carte, textes).",
  },
];

const cities = ["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir"];
const citySlugs: Record<string, string> = {
  Casablanca: "developpeur-web-freelance-casablanca",
  Rabat: "developpeur-web-freelance-rabat",
  Marrakech: "developpeur-web-freelance-marrakech",
  Tanger: "developpeur-web-freelance-tanger",
  Agadir: "developpeur-web-freelance-agadir",
};

/* ── Structured data ── */
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Création de site web pour restaurant",
  name: "Site web pour restaurant au Maroc",
  description:
    "Création de sites web pour restaurants au Maroc : menu digital, QR code, réservation en ligne, design sur mesure.",
  provider: { "@type": "Person", name: "Mouhcine Zhirou", url: SITE },
  areaServed: [{ "@type": "Country", name: "Morocco" }, ...cities.map((c) => ({ "@type": "City", name: c }))],
  url: `${SITE}/site-web-restaurant-maroc`,
};

const portfolioLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sites web restaurant réalisés au Maroc",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "WebSite",
      name: p.title,
      url: p.url,
      about: { "@type": "Restaurant", name: p.title, servesCuisine: p.cuisine, address: { "@type": "PostalAddress", addressLocality: p.city, addressCountry: "MA" } },
    },
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
    { "@type": "ListItem", position: 3, name: "Site web restaurant Maroc", item: `${SITE}/site-web-restaurant-maroc` },
  ],
};

/* ── UI atoms ── */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="reveal mb-6 flex items-center gap-3">
      <span className="h-px w-10" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
      <span className={`text-[0.66rem] font-semibold uppercase tracking-[0.28em] ${dark ? "text-white/45" : "text-black/45"}`}>
        {children}
      </span>
    </div>
  );
}

// Decorative digital-menu mockup for the hero — kept as inline SVG/markup
// (matches the site's coded-aesthetic branding, e.g. the "dev.ts" mock on
// the homepage) instead of a stock photo, and costs nothing at request
// time since the whole site is static.
function MenuMock() {
  const rows = [
    { name: "Salade César", price: "65 MAD" },
    { name: "Tajine d'agneau", price: "110 MAD" },
    { name: "Pizza Margherita", price: "85 MAD" },
    { name: "Jus d'orange frais", price: "35 MAD" },
  ];
  return (
    <div className="reveal relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden border border-black/10 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between border-b border-black/10 bg-[#080808] px-5 py-4">
          <span className="font-[family-name:var(--font-instrument)] text-lg italic text-white">Le Menu</span>
          <span className="flex h-8 w-8 items-center justify-center border border-white/20" style={{ background: ACCENT }}>
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <rect x="3" y="3" width="7" height="7" fill="#000" />
              <rect x="14" y="3" width="7" height="7" fill="#000" />
              <rect x="3" y="14" width="7" height="7" fill="#000" />
              <rect x="15" y="15" width="2" height="2" fill="#000" />
              <rect x="19" y="15" width="2" height="2" fill="#000" />
              <rect x="15" y="19" width="2" height="2" fill="#000" />
              <rect x="19" y="19" width="2" height="2" fill="#000" />
            </svg>
          </span>
        </div>
        <div className="divide-y divide-black/5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between px-5 py-4">
              <span className="text-sm font-semibold text-black/80">{r.name}</span>
              <span className="text-sm font-bold text-black/40">{r.price}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-black/10 px-5 py-4">
          <span className="block w-full bg-black py-2.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB]">
            Réserver une table
          </span>
        </div>
      </div>
      {/* floating QR chip */}
      <div className="absolute -right-4 -top-5 flex h-16 w-16 -rotate-6 items-center justify-center border-2 border-black bg-white shadow-lg sm:-right-8">
        <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
          <rect x="3" y="3" width="7" height="7" fill="#000" />
          <rect x="14" y="3" width="7" height="7" fill="#000" />
          <rect x="3" y="14" width="7" height="7" fill="#000" />
          <rect x="15" y="15" width="2" height="2" fill="#000" />
          <rect x="19" y="15" width="2" height="2" fill="#000" />
          <rect x="15" y="19" width="2" height="2" fill="#000" />
          <rect x="19" y="19" width="2" height="2" fill="#000" />
          <rect x="17" y="17" width="2" height="2" fill="#000" />
        </svg>
      </div>
      <span
        aria-hidden
        className="absolute -bottom-6 -left-6 -z-10 h-28 w-28 rounded-full opacity-60 blur-3xl"
        style={{ background: ACCENT }}
      />
    </div>
  );
}

export default function SiteWebRestaurantMaroc() {
  return (
    <main className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ══ TOP BAR ══ */}
      <SiteHeader
        links={[
          { type: "pill", label: "Portfolio", href: HOME },
          { type: "text", label: "Services", href: "/services" },
          { type: "text", label: "Blog", href: "/blog" },
          { type: "cta", label: "Devis gratuit", href: WHATSAPP },
        ]}
      />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-14 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "3vw 3vw",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Développeur Web Freelance — Casablanca, Maroc</Eyebrow>

            <h1 className="reveal max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-black md:text-6xl">
              Le site web{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
                (et le menu digital)
              </span>{" "}
              qui remplit vos tables
            </h1>

            <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-black/60 md:text-xl">
              Création de <strong className="font-semibold text-black/80">site web pour restaurant au Maroc</strong> :
              menu digital, QR code sans contact, réservation en ligne et photos qui donnent envie — pour un client qui
              hésite entre deux adresses, choisisse la vôtre.
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppLink
                href={WHATSAPP}
                className="group bg-black px-7 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-transform hover:scale-[0.98]"
              >
                Discuter de mon restaurant
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </WhatsAppLink>
              <a
                href="#realisations"
                className="group flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black"
              >
                <span className="border-b border-black/20 pb-0.5 transition-colors group-hover:border-black">
                  Voir les restaurants équipés
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="reveal mt-16 grid max-w-xl grid-cols-3 border-y border-black/10">
              {stats.map((s, i) => (
                <div key={s.l} className={`py-6 pl-4 first:pl-0 ${i < 2 ? "border-r border-black/10" : ""}`}>
                  <div className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">{s.n}</div>
                  <div className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-black/30">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <MenuMock />
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="relative overflow-hidden border-y-2 border-black" style={{ background: ACCENT }}>
        <div className="flex whitespace-nowrap py-3.5" style={{ animation: "rwTicker 28s linear infinite" }}>
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center text-sm font-extrabold uppercase tracking-wide text-black">
              <span className="mx-6">{m}</span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ WHY ══ */}
      <section className="px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Pourquoi maintenant</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Un bon plat ne suffit plus{" "}
            <span className="font-[family-name:var(--font-instrument)] italic">à remplir la salle</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.t} className="reveal flex gap-5">
                <span className="text-sm font-extrabold text-black/25">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold text-black">{r.t}</h3>
                  <p className="mt-2 leading-relaxed text-black/55">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="bg-[#080808] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow dark>Ce qui est inclus</Eyebrow>
          <h2 className="reveal max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Tout ce dont un restaurant a besoin en ligne
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="reveal group bg-[#080808] p-8 transition-colors hover:bg-[#0d0d0d]">
                <svg viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeLinecap="round" strokeLinejoin="round" className="mb-5 h-7 w-7">
                  {f.icon}
                </svg>
                <h3 className="text-lg font-bold leading-snug text-white">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ══ */}
      <section id="realisations" className="scroll-mt-20 px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Réalisations</Eyebrow>
          <h2 className="reveal max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            6 restaurants déjà équipés au Maroc
          </h2>
          <p className="reveal mt-5 max-w-2xl text-black/55 md:text-lg">
            Pas de maquette : des sites réellement en ligne, utilisés chaque jour par de vrais établissements.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group flex flex-col overflow-hidden border border-black/10 bg-white/40 transition-colors hover:border-black/25 hover:bg-white/70"
                style={{ textDecoration: "none" }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-black/10">
                  <img
                    src={p.image}
                    alt={`Site web ${p.title} — ${p.city}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 border-b border-r border-black/10 bg-white/85 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-black/60 backdrop-blur-sm">
                    {p.city}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-black/35">{p.cuisine}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-black transition-colors group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">{p.description}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-black/70">
                    Visiter le site
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="border-t border-black/10 bg-[#F2F0EB] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Ce qu&apos;ils en disent</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Des restaurateurs qui en parlent mieux que moi
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
            {[
              {
                quote:
                  "On a apprécié d'avoir un devis clair dès le départ, sans surprise, et un suivi direct pendant tout le développement.",
                name: "Chiringuito",
                role: "Restaurant — Tanger",
                logo: "/logos/chiringuito.png",
              },
              {
                quote:
                  "Travailler à distance n'a posé aucun problème, réponses rapides sur WhatsApp et un résultat fidèle à ce qu'on voulait.",
                name: "Tangerino",
                role: "Restaurant — Tanger & Rabat",
                logo: "/logos/tangerino.png",
              },
            ].map((t) => (
              <div key={t.name} className="reveal flex flex-col justify-between bg-[#F2F0EB] p-8">
                <p className="text-base leading-relaxed text-black/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-16 items-center justify-center bg-[#0d0d0d] p-2">
                    <img src={t.logo} alt={t.name} className="max-h-6 w-auto object-contain" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black">{t.name}</div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black/40">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            De la carte au site en ligne
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="reveal border-t-2 border-black pt-5">
                <span className="text-sm font-extrabold" style={{ color: "#8a8a70" }}>{s.n}</span>
                <h3 className="mt-2 text-lg font-bold text-black">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CITIES ══ */}
      <section className="border-t border-black/10 bg-[#F2F0EB] px-6 py-16 md:px-14">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Zones desservies</Eyebrow>
          <h2 className="reveal max-w-3xl text-2xl font-extrabold tracking-[-0.02em] text-black md:text-3xl">
            Sites web pour restaurants partout au Maroc
          </h2>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            {cities.map((c) => (
              <Link
                key={c}
                href={`/${citySlugs[c]}`}
                prefetch={false}
                className="border border-black/15 bg-white/50 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/55 transition-colors hover:border-black hover:text-black"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="border-t border-black/10 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-4xl">
            Avant de digitaliser votre restaurant
          </h2>

          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-lg font-bold leading-snug text-black md:text-xl">{f.q}</h3>
                  <span className="mt-1 shrink-0 text-2xl leading-none text-black/40 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-black/60">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm text-black/45">
            Des questions sur les prix et les délais en général ? Consultez la{" "}
            <Link href="/faq" prefetch={false} className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              FAQ complète
            </Link>
            , ou découvrez l&apos;ensemble de mes{" "}
            <Link href="/services" prefetch={false} className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              services de développement web
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Prêt à digitaliser{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              votre restaurant
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Décrivez-moi votre carte et votre restaurant sur WhatsApp — devis clair et gratuit sous 24h.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppLink
              href={WHATSAPP}
              className="bg-[#e8ff47] px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.98]"
            >
              Me contacter sur WhatsApp →
            </WhatsAppLink>
            <Link
              href={HOME}
              className="border border-white/25 px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white hover:text-white"
            >
              Voir le portfolio complet
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="fr" />

      <style>{`
        @keyframes rwTicker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes rwReveal {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .reveal { animation: rwReveal 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @supports (animation-timeline: view()) {
          .reveal { animation-timeline: view(); animation-range: entry 0% cover 22%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
          [style*="rwTicker"] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
