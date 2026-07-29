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
const HOME = "/fr";
const PAGE_PATH = "/developpeur-web-freelance-casablanca";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0";

export const metadata: Metadata = {
  title: "Développeur Web Freelance à Casablanca",
  description:
    "Développeur web freelance à Casablanca, spécialisé React & Next.js. Un seul interlocuteur, un devis clair sous 24h, aucune sous-traitance. Sites vitrines, e-commerce et applications sur mesure pour les entreprises de Casablanca.",
  keywords: [
    "développeur web freelance Casablanca",
    "développeur freelance Casablanca",
    "développeur web Casablanca",
    "freelance informatique Casablanca",
    "développeur React Casablanca",
    "développeur Next.js Casablanca",
    "développeur indépendant Casablanca",
    "créer un site web Casablanca",
    "développeur full stack Casablanca",
    "webdesigner freelance Casablanca",
  ],
  alternates: { canonical: `${SITE}${PAGE_PATH}` },
  openGraph: {
    title: "Développeur Web Freelance à Casablanca | Mouhcine Zhirou",
    description:
      "Un seul interlocuteur, un devis clair sous 24h, zéro sous-traitance. Développeur web freelance à Casablanca spécialisé React & Next.js.",
    url: `${SITE}${PAGE_PATH}`,
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

const comparison = [
  {
    critere: "Qui code réellement votre site",
    freelance: "Moi, directement — du premier croquis au dernier déploiement",
    agence: "Un chef de projet, qui répartit le travail à des devs que vous ne rencontrez jamais",
  },
  {
    critere: "Structure de prix",
    freelance: "Un tarif qui reflète le travail — pas de marge d'agence ni de frais de structure",
    agence: "Les mêmes prestations, majorées des frais commerciaux et de gestion",
  },
  {
    critere: "Délai de réponse",
    freelance: "Je réponds moi-même sur WhatsApp, en général en moins d'une heure",
    agence: "Vous passez par un compte manager, qui relaie ensuite à l'équipe technique",
  },
  {
    critere: "Si quelque chose casse à 22h",
    freelance: "Vous m'écrivez directement, je regarde le code que je connais par cœur",
    agence: "Ticket de support, file d'attente, et parfois un dev qui découvre le projet",
  },
  {
    critere: "Flexibilité en cours de route",
    freelance: "On ajuste ensemble, sans avenant ni validation hiérarchique",
    agence: "Toute modification repasse par un processus de devis complémentaire",
  },
];

const stack = [
  { t: "React", d: "Interfaces rapides et interactives, sans rechargement de page." },
  { t: "Next.js", d: "Rendu serveur et SEO natif — vos pages sont indexées correctement dès la mise en ligne." },
  { t: "Node.js", d: "Un back-end unique en JavaScript, plus simple à maintenir sur la durée." },
  { t: "TypeScript", d: "Du code typé, donc moins de bugs qui remontent en production." },
  { t: "PostgreSQL", d: "Une base de données fiable pour vos commandes, utilisateurs et contenus." },
  { t: "Tailwind CSS", d: "Un design cohérent, sur mesure, sans template générique qui se voit." },
  { t: "Docker", d: "Un environnement identique du poste de dev à la mise en production." },
  { t: "AWS", d: "Hébergement scalable, capable d'encaisser un pic de trafic sans tomber." },
  { t: "GraphQL", d: "Des échanges de données précis, utiles dès que l'app grandit." },
  { t: "Prisma", d: "Un accès base de données typé, qui évite les requêtes cassées en silence." },
];

const steps = [
  {
    n: "01",
    t: "Un premier échange, sans détour",
    d: "Vous m'écrivez sur WhatsApp, on parle de votre projet 15 minutes. Pas de formulaire à rallonge, pas de rendez-vous commercial.",
  },
  {
    n: "02",
    t: "Un devis que vous comprenez",
    d: "Sous 24h, vous recevez un prix clair et détaillé — ce qui est inclus, ce qui ne l'est pas, et le délai réel de livraison.",
  },
  {
    n: "03",
    t: "Le développement, avec vous dans la boucle",
    d: "Vous suivez l'avancement à chaque étape clé, vous testez avant la mise en ligne, rien ne se décide sans vous.",
  },
  {
    n: "04",
    t: "La livraison, puis la suite",
    d: "Votre site est en ligne, optimisé SEO. Je reste disponible ensuite pour la maintenance ou de nouvelles évolutions.",
  },
];

// PLACEHOLDER — demo copy only. Replace each quote with the client's actual words
// (with their consent) before this section goes live.
const testimonials = [
  {
    quote:
      "Mouhcine a repris notre projet rapidement et on a eu un seul interlocuteur du début à la fin — beaucoup plus simple qu'avec une agence.",
    name: "Nostalgia Lovers",
    role: "Client — Casablanca",
    logo: "/logos/nostalgialovers.webp",
  },
  {
    quote:
      "On a apprécié d'avoir un devis clair dès le départ, sans surprise, et un suivi direct pendant tout le développement.",
    name: "Chiringuito",
    role: "Client — Tanger",
    logo: "/logos/chiringuito.png",
  },
  {
    quote:
      "Travailler à distance n'a posé aucun problème — réponses rapides sur WhatsApp et un résultat fidèle à ce qu'on voulait.",
    name: "Tangerino",
    role: "Client — Tanger",
    logo: "/logos/tangerino.png",
  },
  {
    quote:
      "Même en étant loin de Casablanca, tout s'est fait naturellement en visio et par téléphone, sans jamais perdre en réactivité.",
    name: "Oxygen Village",
    role: "Client — Midelt",
    logo: "/logos/oxygen.png",
  },
  {
    quote:
      "Un vrai gain de temps d'avoir un seul interlocuteur sur tout le projet, de la première maquette à la mise en ligne.",
    name: "Palooza",
    role: "Client — Marrakech",
    logo: "/logos/palooza.png",
  },
  {
    quote:
      "Bonne communication du début à la fin, et un site livré dans les délais annoncés.",
    name: "Garden Corner",
    role: "Client",
    logo: "/logos/gardencorner.png",
    invert: true,
  },
];

const faqs = [
  {
    q: "Pourquoi choisir un développeur freelance plutôt qu'une agence web à Casablanca ?",
    a: "Parce que vous parlez directement à la personne qui écrit le code — pas à un commercial qui transmet vos demandes à une équipe changeante. Résultat : des délais plus courts, un prix sans marge d'intermédiaire, et une vraie continuité si votre site évolue dans le temps.",
  },
  {
    q: "Travaillez-vous uniquement avec des entreprises basées à Casablanca ?",
    a: "Casablanca est ma base et la majorité de mes clients y sont installés (Maarif, Sidi Maarouf, CasaNearShore, Centre-Ville...), mais je travaille aussi en télétravail avec des clients partout au Maroc et à l'étranger. Un rendez-vous en présentiel à Casablanca est toujours possible si vous le préférez.",
  },
  {
    q: "Est-il possible de se rencontrer en personne avant de démarrer ?",
    a: "Oui, sans problème pour les clients basés à Casablanca ou de passage en ville. La plupart de mes clients démarrent toutefois directement par WhatsApp ou visio, ce qui suffit largement pour cadrer un projet.",
  },
  {
    q: "Que se passe-t-il si vous êtes indisponible après la livraison de mon site ?",
    a: "Le code vous appartient et reste propre, documenté et exploitable par n'importe quel développeur si besoin. Dans les faits, je reste l'interlocuteur de mes clients sur le long terme : plusieurs d'entre eux me recontactent des mois, voire des années après la première livraison.",
  },
  {
    q: "Un freelance est-il aussi fiable qu'une agence pour un projet important ?",
    a: "La fiabilité ne tient pas au statut juridique mais à la méthode : cahier des charges clair, jalons de validation, code versionné et testé. Sur des projets ambitieux, travailler avec un seul développeur senior évite justement les pertes d'information qui surviennent quand une agence fait tourner plusieurs profils sur le même dossier.",
  },
];

/* ── Structured data ── */
const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}${PAGE_PATH}#service`,
  name: "Mouhcine Zhirou — Développeur Web Freelance à Casablanca",
  description:
    "Développeur web freelance à Casablanca, spécialisé en React et Next.js. Création de sites vitrines, e-commerce et applications web sur mesure.",
  url: `${SITE}${PAGE_PATH}`,
  image: `${SITE}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  areaServed: {
    "@type": "City",
    name: "Casablanca",
  },
  provider: { "@id": `${SITE}/#person` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Développeur Web Freelance à Casablanca",
      item: `${SITE}${PAGE_PATH}`,
    },
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

export default function DeveloppeurWebFreelanceCasablanca() {
  return (
    <main className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }} />
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
          <Eyebrow>Freelance basé à Casablanca — disponible cette semaine</Eyebrow>

          <h1 className="reveal max-w-4xl text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] text-black md:text-7xl">
            Développeur web freelance à{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              Casablanca
            </span>
          </h1>

          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Je m&apos;appelle Mouhcine, <strong className="font-semibold text-black/80">développeur web freelance basé à Casablanca</strong>.
            Pas d&apos;agence entre nous, pas de commercial, pas de sous-traitance : je conçois et je code moi-même
            chaque site, du premier appel WhatsApp à la mise en ligne — en{" "}
            <strong className="font-semibold text-black/80">React et Next.js</strong>.
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
              href="#freelance-vs-agence"
              className="group flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black"
            >
              <span className="border-b border-black/20 pb-0.5 transition-colors group-hover:border-black">
                Freelance vs agence
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
            Ils m&apos;ont fait confiance à Casablanca et ailleurs
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

      {/* ══ FREELANCE VS AGENCE ══ */}
      <section id="freelance-vs-agence" className="bg-[#080808] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow dark>Freelance ou agence ?</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Ce qui change vraiment{" "}
            <span className="font-[family-name:var(--font-instrument)] italic">quand vous engagez un freelance</span>
          </h2>
          <p className="reveal mt-5 max-w-2xl text-white/45 md:text-lg">
            Aucune des deux options n&apos;est mauvaise en soi. Voici, honnêtement, ce qui distingue les deux
            façons de travailler, pour que vous choisissiez en connaissance de cause.
          </p>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/35">Critère</th>
                  <th className="py-4 pr-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                    Moi, en freelance
                  </th>
                  <th className="py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/35">Une agence</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.critere} className="reveal border-b border-white/10 align-top">
                    <td className="py-5 pr-4 text-sm font-bold text-white md:text-base">{row.critere}</td>
                    <td className="py-5 pr-4 text-sm leading-relaxed text-white/75 md:text-base">{row.freelance}</td>
                    <td className="py-5 text-sm leading-relaxed text-white/40 md:text-base">{row.agence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section className="px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Ma stack technique</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Les outils que j&apos;utilise, et pourquoi
          </h2>
          <p className="reveal mt-5 max-w-2xl text-black/55 md:text-lg">
            Pas de générateur de site ni de thème générique : chaque projet est codé avec les mêmes technologies
            que les équipes techniques des grandes entreprises, adaptées à la taille de votre projet.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {stack.map((s) => (
              <div key={s.t} className="reveal bg-[#F2F0EB] p-6">
                <h3 className="text-base font-extrabold text-black">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="border-t border-black/10 bg-[#F2F0EB] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Comment on travaille ensemble</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            De WhatsApp à la mise en ligne
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* ══ TESTIMONIALS — placeholder copy, replace before publishing ══ */}
      <section className="border-t border-black/10 px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Ce qu&apos;en disent mes clients</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Des retours de clients à Casablanca
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal flex flex-col justify-between bg-[#F2F0EB] p-7">
                <p className="text-base leading-relaxed text-black/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-14 items-center justify-center bg-[#0d0d0d] p-2">
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={80}
                      height={32}
                      className={`max-h-6 w-auto object-contain ${t.invert ? "brightness-0 invert" : ""}`}
                    />
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

      {/* ══ FAQ ══ */}
      <section className="border-t border-black/10 px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-4xl">
            Avant d&apos;engager un freelance à Casablanca
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
            <Link href="/faq" className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              FAQ complète
            </Link>
            , ou découvrez l&apos;ensemble de mes services de{" "}
            <Link href="/creation-site-web-maroc" className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black">
              création de site web au Maroc
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Un projet web à{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              Casablanca
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Écrivez-moi sur WhatsApp — je réponds moi-même, en général en moins d&apos;une heure.
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
