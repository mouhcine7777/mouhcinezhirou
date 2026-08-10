import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "../components/Footer";
import WhatsAppLink from "../components/WhatsAppLink";

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
const PAGE_PATH = "/developpeur-web-freelance-maroc";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0";

export const metadata: Metadata = {
  title: "Développeur Web Freelance : Casablanca, Rabat, Tanger et Plus",
  description:
    "Développeur web freelance basé à Casablanca, disponible en télétravail à Rabat, Tanger, Marrakech, Agadir et partout au Maroc. Sites sur mesure en React et Next.js.",
  keywords: [
    "développeur web freelance maroc",
    "développeur freelance maroc",
    "développeur web maroc",
    "développeur react next.js maroc",
    "créer un site web maroc",
    "développeur freelance à distance maroc",
  ],
  alternates: { canonical: `${SITE}${PAGE_PATH}` },
  openGraph: {
    title: "Développeur Web Freelance : Casablanca, Rabat, Tanger et Plus",
    description:
      "Basé à Casablanca, disponible en télétravail dans les plus grandes villes du Maroc. Sites sur mesure en React et Next.js.",
    url: `${SITE}${PAGE_PATH}`,
    locale: "fr_MA",
    type: "website",
  },
};

const stats = [
  { n: "5+", l: "Ans d'expérience" },
  { n: "40+", l: "Projets livrés" },
  { n: "5", l: "Villes desservies" },
];

const logos = [
  { src: "/logos/bigdistrict.png", alt: "Big District" },
  { src: "/logos/pe.png", alt: "Public Events" },
  { src: "/logos/nostalgialovers.webp", alt: "Nostalgia Lovers" },
  { src: "/logos/chiringuito.png", alt: "Chiringuito" },
  { src: "/logos/tangerino.png", alt: "Tangerino" },
  { src: "/logos/ayta.png", alt: "Ayta" },
  { src: "/logos/parthenon.png", alt: "Parthenon" },
  { src: "/logos/gardenbakes.png", alt: "Garden Bakes" },
  { src: "/logos/palooza.png", alt: "Palooza" },
  { src: "/logos/oxygen.png", alt: "Oxygen" },
];

/* Small line icons, one motif per city's actual economy — not decoration for
   decoration's sake. Same stroke style as the rest of the site's iconography. */
function IconPin() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5">
      <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function IconColumns() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5">
      <path d="M2 14h12M3 14V6l5-3 5 3v8M6 14V8M10 14V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconAnchor() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5">
      <path d="M8 2.2v2.6M6.2 3.6h3.6M8 4.8v8.2M4 9a4 4 0 0 0 8 0M2.3 9h2.2M11.5 9h2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M12.8 3.2l-1.4 1.4M4.6 11.4l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconWave() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5">
      <path d="M1 6.5c1.4-1.4 2.9-1.4 4.3 0s2.9 1.4 4.3 0 2.9-1.4 4.3 0M1 10.5c1.4-1.4 2.9-1.4 4.3 0s2.9 1.4 4.3 0 2.9-1.4 4.3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const featured = {
  city: "Casablanca",
  slug: "developpeur-web-freelance-casablanca",
  tag: "Ma base",
  blurb:
    "La majorité de mes clients sont installés à Casablanca. C'est là que je suis basé, et un rendez-vous en présentiel reste toujours possible si vous le préférez à un échange à distance.",
  Icon: IconPin,
};

const directory = [
  {
    city: "Rabat",
    slug: "developpeur-web-freelance-rabat",
    blurb: "Institutions, cabinets et sièges d'entreprises : des sites sobres, rigoureux et rapides.",
    Icon: IconColumns,
  },
  {
    city: "Tanger",
    slug: "developpeur-web-freelance-tanger",
    blurb: "Sites multilingues pensés pour des entreprises tournées vers l'Europe et l'export.",
    Icon: IconAnchor,
  },
  {
    city: "Marrakech",
    slug: "developpeur-web-freelance-marrakech",
    blurb: "Sites tourisme et événementiel, rapides et multilingues, avec réservation en ligne.",
    Icon: IconSun,
  },
  {
    city: "Agadir",
    slug: "developpeur-web-freelance-agadir",
    blurb: "Sites tourisme balnéaire et export agricole, adaptés à deux publics très différents.",
    Icon: IconWave,
  },
];

const remoteSteps = [
  {
    n: "01",
    t: "Un premier échange sur WhatsApp",
    d: "Peu importe la ville, tout commence pareil : vous m'écrivez, on parle de votre projet 15 minutes. Pas de commercial, pas de formulaire à rallonge.",
  },
  {
    n: "02",
    t: "Le même fuseau horaire, un vrai avantage",
    d: "Pas de décalage horaire à gérer entre Casablanca et le reste du Maroc : les points d'étape se calent facilement dans votre journée de travail.",
  },
  {
    n: "03",
    t: "Un lien de prévisualisation à chaque étape",
    d: "Vous voyez le site avancer en temps réel via un lien privé, sans attendre la livraison finale pour découvrir le résultat.",
  },
  {
    n: "04",
    t: "Livraison, puis suivi à distance",
    d: "Le site est mis en ligne et optimisé SEO. La maintenance et les évolutions se font ensuite exactement de la même façon, où que vous soyez.",
  },
];

const faqs = [
  {
    q: "Travaillez-vous avec des villes en dehors de cette liste ?",
    a: "Oui. Ces cinq villes sont celles où j'ai le plus de clients, mais je travaille en télétravail avec des entreprises partout au Maroc, quelle que soit la ville. Le fonctionnement (WhatsApp, visio, devis clair sous 24h) reste exactement le même.",
  },
  {
    q: "Le prix change-t-il selon la ville ?",
    a: "Non. Mes tarifs sont basés sur la complexité du projet, pas sur la localisation du client. Le détail des prix par type de projet est disponible dans mon guide des tarifs.",
  },
  {
    q: "Faut-il forcément passer par une agence pour un projet dans une grande ville ?",
    a: "Non, et c'est justement pour ça que ce site existe. Que vous soyez à Casablanca, Rabat, Tanger, Marrakech ou Agadir, un freelance sérieux couvre la grande majorité des projets de site vitrine, e-commerce ou application sur mesure, avec un interlocuteur unique du début à la fin.",
  },
  {
    q: "Comment se passe le suivi si on ne se rencontre jamais en personne ?",
    a: "Exactement comme un suivi en présentiel, mais par visio et WhatsApp : points d'étape réguliers, lien de prévisualisation du site en cours de développement, et une réponse rapide à chaque message. Plusieurs clients à Tanger et Marrakech travaillent avec moi de cette façon depuis le premier jour.",
  },
  {
    q: "Quelle est la différence entre ce site et la page dédiée à ma ville ?",
    a: "Cette page présente ma couverture nationale. Chaque ville a ensuite sa propre page avec un contenu spécifique à son contexte économique local (par exemple l'export pour Tanger et Agadir, ou le tourisme pour Marrakech), plutôt qu'un texte générique recopié d'une ville à l'autre.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PAGE_PATH}#service`,
  name: "Mouhcine Zhirou — Développeur Web Freelance au Maroc",
  description:
    "Développeur web freelance basé à Casablanca, disponible en télétravail dans les principales villes du Maroc : Rabat, Tanger, Marrakech, Agadir.",
  url: `${SITE}${PAGE_PATH}`,
  image: `${SITE}/opengraph-image`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Tanger" },
    { "@type": "City", name: "Marrakech" },
    { "@type": "City", name: "Agadir" },
    { "@type": "Country", name: "Morocco" },
  ],
  provider: { "@id": `${SITE}/#person` },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Villes desservies par Mouhcine Zhirou, développeur web freelance",
  itemListElement: [featured, ...directory].map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Développeur Web Freelance à ${d.city}`,
    url: `${SITE}/${d.slug}`,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Développeur Web Freelance au Maroc", item: `${SITE}${PAGE_PATH}` },
  ],
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

export default function DeveloppeurWebFreelanceMaroc() {
  return (
    <main className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ══ TOP BAR ══ */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-[#F2F0EB]/90 px-6 py-4 backdrop-blur-md md:px-14">
        <Link href={HOME} className="group flex items-center gap-3" style={{ textDecoration: "none" }}>
          <span className="flex h-8 w-8 items-center justify-center border border-black/25 text-[0.6rem] font-extrabold tracking-widest text-black/70 transition-all group-hover:border-black group-hover:bg-black group-hover:text-[#e8ff47]">
            MZ
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/45">
            Mouhcine Zhirou
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href={HOME}
            className="bg-[#e8ff47] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.97]"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black sm:inline"
          >
            Blog
          </Link>
          <WhatsAppLink
            href={WHATSAPP}
            className="border border-black bg-black px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-colors hover:bg-transparent hover:text-black"
          >
            Devis gratuit
          </WhatsAppLink>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-6 pb-14 pt-16 md:px-14 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "3vw 3vw",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Eyebrow>Basé à Casablanca, disponible partout</Eyebrow>
          <h1 className="reveal max-w-4xl text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] text-black md:text-7xl">
            Développeur web freelance dans les{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              grandes villes
            </span>{" "}
            du Maroc
          </h1>
          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Je m&apos;appelle Mouhcine, développeur web full stack basé à Casablanca. Je travaille en télétravail
            avec des entreprises dans les plus grandes villes du pays, sans jamais passer par une agence ni un
            intermédiaire, en{" "}
            <strong className="font-semibold text-black/80">React et Next.js</strong>. Choisissez votre ville
            ci-dessous pour voir comment je travaille avec des clients près de chez vous.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={WHATSAPP}
              className="group bg-black px-7 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-transform hover:scale-[0.98]"
            >
              Discuter de mon projet
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </WhatsAppLink>
            <a
              href="#villes"
              className="group flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black"
            >
              <span className="border-b border-black/20 pb-0.5 transition-colors group-hover:border-black">
                Voir les villes
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="reveal mt-16 grid max-w-2xl grid-cols-3 border-y border-black/10">
            {stats.map((s, i) => (
              <div key={s.l} className={`py-6 pl-4 first:pl-0 ${i < 2 ? "border-r border-black/10" : ""}`}>
                <div className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">{s.n}</div>
                <div className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-black/30">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOGOS ══ */}
      <section className="border-y border-black/10 bg-[#F2F0EB] px-6 py-14 md:px-14">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-center text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-black/35">
            Ils m&apos;ont fait confiance au Maroc
          </p>
          <div className="reveal mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((l) => (
              <div
                key={l.alt}
                className="flex h-20 items-center justify-center bg-[#0d0d0d] p-4 transition-transform hover:scale-[1.03]"
                title={l.alt}
              >
                <Image src={l.src} alt={l.alt} width={120} height={48} className="max-h-9 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CITY DIRECTORY ══ */}
      <section id="villes" className="border-t border-black/10 px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Villes desservies</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Choisissez votre ville
          </h2>
          <p className="reveal mt-5 max-w-2xl text-black/55 md:text-lg">
            Chaque ville a son propre contexte économique, donc sa propre page, pas un texte générique recopié
            cinq fois avec le nom changé.
          </p>

          {/* Featured: Casablanca, the home base */}
          <Link
            href={`/${featured.slug}`}
            className="reveal group relative mt-12 flex flex-col justify-between gap-6 overflow-hidden border border-black/10 bg-[#080808] p-8 transition-colors hover:border-black/25 sm:flex-row sm:items-center md:p-12"
            style={{ textDecoration: "none" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "3vw 3vw",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.14]"
              style={{ background: ACCENT }}
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-white">
                  <featured.Icon />
                </span>
                <span className="border border-white/20 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/60">
                  {featured.tag}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-white transition-colors md:text-3xl">
                {featured.city}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">{featured.blurb}</p>
            </div>
            <span className="relative inline-flex shrink-0 items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#e8ff47]">
              Voir la page Casablanca
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {/* The other four cities */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {directory.map((d) => (
              <Link
                key={d.slug}
                href={`/${d.slug}`}
                className="reveal group flex flex-col justify-between border border-black/10 bg-white/50 p-7 transition-colors hover:border-black/25 hover:bg-white/80"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <span className="flex h-10 w-10 items-center justify-center border border-black/15 text-black/60 transition-colors group-hover:border-black/30 group-hover:text-black">
                    <d.Icon />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-black transition-colors group-hover:underline">
                    {d.city}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/55">{d.blurb}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-black/70">
                  Voir la page {d.city}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-sm text-black/45">
            Votre ville n&apos;est pas dans la liste ? Ce n&apos;est pas un problème : je travaille en télétravail
            avec des clients partout au Maroc. Découvrez aussi mes services de{" "}
            <Link href="/creation-site-web-maroc" className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              création de site web au Maroc
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══ COMMENT ÇA MARCHE À DISTANCE ══ */}
      <section className="border-t border-black/10 bg-[#080808] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow dark>Comment ça marche à distance</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Le télétravail, sans en avoir l&apos;inconvénient
          </h2>
          <p className="reveal mt-5 max-w-2xl text-white/45 md:text-lg">
            Que vous soyez à 300 km de Casablanca ou à 5 minutes à pied de chez moi, le fonctionnement ne change
            pas. Voici concrètement comment ça se passe.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {remoteSteps.map((s) => (
              <div key={s.n} className="reveal border-t-2 border-white/20 pt-5">
                <span className="text-sm font-extrabold" style={{ color: ACCENT }}>{s.n}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="border-t border-black/10 px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-4xl">
            Avant de choisir votre ville
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
            Une idée plus précise du budget de votre projet ? Consultez le{" "}
            <Link href="/blog/combien-coute-un-site-web-au-maroc" className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              guide des prix d&apos;un site web au Maroc
            </Link>
            , ou le{" "}
            <Link href="/blog/guide-complet-creation-site-web-maroc-2026" className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              guide complet pour créer un site web en 2026
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Un projet web{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              où que vous soyez
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Écrivez-moi sur WhatsApp, je réponds moi-même, en général en moins d&apos;une heure.
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
        @keyframes lpReveal {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .reveal { animation: lpReveal 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @supports (animation-timeline: view()) {
          .reveal { animation-timeline: view(); animation-range: entry 0% cover 22%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
        }
      `}</style>
    </main>
  );
}
