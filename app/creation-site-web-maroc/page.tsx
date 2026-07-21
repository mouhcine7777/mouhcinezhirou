import type { Metadata } from "next";
import Link from "next/link";
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
const HOME = "/fr";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0";

export const metadata: Metadata = {
  title:
    "Création de Site Web au Maroc | Développeur Web Freelance à Casablanca",
  description:
    "Création de site web au Maroc par un développeur freelance à Casablanca : sites vitrines, e-commerce et applications sur mesure en React & Next.js. Sites rapides, modernes, responsive et optimisés SEO. Devis gratuit sous 24h.",
  keywords: [
    "création site web Maroc",
    "création site web Casablanca",
    "création site internet Maroc",
    "développeur web freelance Maroc",
    "développeur web Casablanca",
    "créer un site web Maroc",
    "faire un site web Casablanca",
    "création site e-commerce Maroc",
    "création boutique en ligne Maroc",
    "site vitrine Maroc",
    "refonte site web Maroc",
    "webmaster Maroc",
    "site responsive Maroc",
    "référencement naturel Maroc",
    "développeur React Next.js Maroc",
  ],
  alternates: { canonical: `${SITE}/creation-site-web-maroc` },
  openGraph: {
    title:
      "Création de Site Web au Maroc | Développeur Web Freelance à Casablanca",
    description:
      "Sites vitrines, e-commerce et applications sur mesure en React & Next.js. Développeur web freelance à Casablanca, Maroc. Devis gratuit sous 24h.",
    url: `${SITE}/creation-site-web-maroc`,
    locale: "fr_MA",
    type: "website",
  },
};

/* ── Data ── */
const stats = [
  { n: "5+", l: "Ans d'expérience" },
  { n: "40+", l: "Projets livrés" },
  { n: "28+", l: "Clients satisfaits" },
];

const marquee = [
  "Création de site web",
  "Site e-commerce",
  "Site vitrine",
  "Application web",
  "Refonte de site",
  "Référencement SEO",
  "Site responsive",
  "React · Next.js",
];

const services = [
  {
    title: "Création de site web sur mesure",
    desc: "Sites vitrines modernes, rapides et responsive pour présenter votre activité au Maroc et convertir vos visiteurs en clients.",
    icon: (
      <path d="M3 5h18M3 5v14h18V5M8 9h8M8 13h5" strokeWidth="1.6" />
    ),
  },
  {
    title: "Site e-commerce & boutique en ligne",
    desc: "Boutiques en ligne complètes pour vendre vos produits partout au Maroc et à l'international, avec paiement sécurisé et gestion des commandes.",
    icon: (
      <path d="M4 6h16l-1.5 10H5.5L4 6zM4 6L3 3M9 20h.01M16 20h.01" strokeWidth="1.6" />
    ),
  },
  {
    title: "Application web sur mesure",
    desc: "Applications web full stack performantes en React, Next.js et Node.js, pensées pour automatiser et faire grandir votre métier.",
    icon: (
      <path d="M8 3L3 12l5 9M16 3l5 9-5 9M13 3l-2 18" strokeWidth="1.6" />
    ),
  },
  {
    title: "Refonte de site web",
    desc: "Votre site est lent ou dépassé ? Je le refais moderne, rapide et adapté au mobile — sans perdre votre référencement Google.",
    icon: (
      <path d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 0 0-14-4M4 15a8 8 0 0 0 14 4" strokeWidth="1.6" />
    ),
  },
  {
    title: "Référencement naturel (SEO)",
    desc: "Optimisation SEO pour apparaître dans les résultats Google au Maroc : vitesse, structure, données structurées et mots-clés.",
    icon: (
      <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5" strokeWidth="1.6" />
    ),
  },
  {
    title: "Maintenance & évolution",
    desc: "Mises à jour, sauvegardes, sécurité et nouvelles fonctionnalités : votre site web reste rapide et à jour dans le temps.",
    icon: (
      <path d="M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" strokeWidth="1.6" />
    ),
  },
];

const reasons = [
  {
    t: "Un interlocuteur unique",
    d: "Vous parlez directement au développeur qui crée votre site — pas d'agence, pas d'intermédiaire, pas de surcoût.",
  },
  {
    t: "Des sites ultra-rapides",
    d: "Construits avec React & Next.js, vos sites se chargent en un éclair — un critère clé pour Google et vos clients.",
  },
  {
    t: "Optimisés pour Google",
    d: "Chaque site est pensé SEO dès le départ pour vous aider à être trouvé au Maroc sur les bons mots-clés.",
  },
  {
    t: "Un design qui vous ressemble",
    d: "Un site web unique et professionnel, sur mesure, adapté au mobile comme au desktop.",
  },
];

const steps = [
  { n: "01", t: "Échange & devis gratuit", d: "On discute de votre projet sur WhatsApp. Vous recevez un devis clair et gratuit sous 24h." },
  { n: "02", t: "Design & développement", d: "Je conçois et développe votre site web, avec des points d'étape réguliers pour valider ensemble." },
  { n: "03", t: "Mise en ligne & suivi", d: "Votre site est publié, optimisé pour le référencement Google, avec maintenance disponible." },
];

const cities = [
  "Casablanca", "Rabat", "Marrakech", "Tanger", "Fès",
  "Agadir", "Meknès", "Oujda", "Kénitra", "Tétouan",
];

/* ── Structured data ── */
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Création de site web",
  name: "Création de site web au Maroc",
  description:
    "Création de sites web, sites e-commerce et applications sur mesure au Maroc par un développeur web freelance à Casablanca.",
  provider: {
    "@type": "Person",
    name: "Mouhcine Zhirou",
    url: SITE,
  },
  areaServed: [
    { "@type": "Country", name: "Morocco" },
    ...cities.map((c) => ({ "@type": "City", name: c })),
  ],
  url: `${SITE}/creation-site-web-maroc`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Création de site web au Maroc",
      item: `${SITE}/creation-site-web-maroc`,
    },
  ],
};

/* ── UI atoms ── */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="reveal mb-6 flex items-center gap-3">
      <span className="h-px w-10" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
      <span
        className={`text-[0.66rem] font-semibold uppercase tracking-[0.28em] ${dark ? "text-white/45" : "text-black/45"}`}
      >
        {children}
      </span>
    </div>
  );
}

export default function CreationSiteWebMaroc() {
  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

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
            className="hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black sm:inline"
          >
            Portfolio
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
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-14 md:pt-24">
        {/* grid texture */}
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
          <Eyebrow>Développeur Web Freelance — Casablanca, Maroc</Eyebrow>

          <h1 className="reveal max-w-4xl text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] text-black md:text-7xl">
            Création de site web{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1"
                style={{ background: ACCENT }}
              />
              au Maroc
            </span>
          </h1>

          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Vous cherchez un <strong className="font-semibold text-black/80">développeur web freelance au Maroc</strong>{" "}
            pour créer votre site ? Je conçois des{" "}
            <strong className="font-semibold text-black/80">sites web modernes, rapides et optimisés pour Google</strong>{" "}
            — sites vitrines, boutiques e-commerce et applications sur mesure en React &amp; Next.js. Basé à
            Casablanca, je travaille avec des clients partout au Maroc et à l&apos;international.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={WHATSAPP}
              className="group bg-black px-7 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-transform hover:scale-[0.98]"
            >
              Discuter de mon projet
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </WhatsAppLink>
            <Link
              href={HOME}
              className="group flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black"
            >
              <span className="border-b border-black/20 pb-0.5 transition-colors group-hover:border-black">
                Voir mes réalisations
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* stats */}
          <div className="reveal mt-16 grid max-w-2xl grid-cols-3 border-y border-black/10">
            {stats.map((s, i) => (
              <div key={s.l} className={`py-6 ${i < 2 ? "border-r border-black/10" : ""}`}>
                <div className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">{s.n}</div>
                <div className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-black/30">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="relative overflow-hidden border-y-2 border-black" style={{ background: ACCENT }}>
        <div className="flex whitespace-nowrap py-3.5" style={{ animation: "lpTicker 28s linear infinite" }}>
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center text-sm font-extrabold uppercase tracking-wide text-black">
              <span className="mx-6">{m}</span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section className="bg-[#080808] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow dark>Mes services</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Ce que je crée pour vous
          </h2>
          <p className="reveal mt-5 max-w-2xl text-white/45 md:text-lg">
            De la simple page vitrine à la boutique e-commerce complète : des solutions web sur mesure,
            pensées pour votre activité au Maroc.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="reveal group bg-[#080808] p-8 transition-colors hover:bg-[#0d0d0d]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ACCENT}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-5 h-7 w-7"
                >
                  {s.icon}
                </svg>
                <h3 className="text-lg font-bold leading-snug text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY ME ══ */}
      <section className="px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Pourquoi me choisir</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Un <span className="font-[family-name:var(--font-instrument)] italic">développeur freelance</span> à vos côtés
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

      {/* ══ PROCESS ══ */}
      <section className="border-t border-black/10 bg-[#F2F0EB] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            De l&apos;idée à la mise en ligne
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
      <section className="border-t border-black/10 px-6 py-16 md:px-14">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Zones desservies</Eyebrow>
          <h2 className="reveal max-w-3xl text-2xl font-extrabold tracking-[-0.02em] text-black md:text-3xl">
            Création de site web partout au Maroc
          </h2>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            {cities.map((c) => (
              <span
                key={c}
                className="border border-black/15 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/55"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ TEASER ══ */}
      <section className="border-t border-black/10 px-6 py-16 md:px-14">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-black md:text-3xl">
              Des questions sur les prix et les délais ?
            </h2>
            <p className="mt-2 text-black/55">Combien coûte un site web au Maroc, en combien de temps… tout est ici.</p>
          </div>
          <Link
            href="/faq"
            className="shrink-0 border border-black px-6 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-black hover:text-[#F2F0EB]"
          >
            Voir la FAQ →
          </Link>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Prêt à créer votre{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              site web
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Parlons de votre projet dès aujourd&apos;hui. Devis gratuit, réponse en moins d&apos;une heure.
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
        @keyframes lpTicker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
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
          [style*="lpTicker"] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
