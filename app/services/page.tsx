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
  title: "Services de Développement Web au Maroc",
  description:
    "Sites vitrines, e-commerce, applications sur mesure, SEO et maintenance : tous les services d'un développeur web freelance full stack à Casablanca, Maroc.",
  keywords: [
    "services développement web Maroc",
    "développeur web freelance services",
    "création site vitrine Maroc",
    "création site e-commerce Maroc",
    "développement application web sur mesure Maroc",
    "refonte site web Maroc",
    "référencement SEO Maroc",
    "maintenance site web Maroc",
    "audit site web Maroc",
    "intégration API paiement Maroc",
    "développeur React Next.js Maroc",
    "développeur full stack freelance Casablanca",
  ],
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    title: "Services de Développement Web au Maroc | Mouhcine Zhirou",
    description:
      "Sites vitrines, e-commerce, applications sur mesure, refonte, SEO et maintenance. Développeur web freelance full stack à Casablanca, Maroc.",
    url: `${SITE}/services`,
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
  "Sites vitrines",
  "E-commerce",
  "Applications sur mesure",
  "Refonte de site",
  "SEO technique",
  "Maintenance",
  "Intégrations & API",
  "Audit performance",
];

const services = [
  {
    n: "01",
    title: "Sites vitrines sur mesure",
    desc: "Un site qui présente votre activité, inspire confiance et convertit vos visiteurs en clients : design sur mesure, message clair, rapide sur mobile comme sur desktop.",
    bullets: ["Design sur mesure", "100% responsive", "Formulaire de contact", "SEO de base inclus", "Mise en ligne comprise"],
    icon: "M3 5h18M3 5v14h18V5M8 9h8M8 13h5",
    img: "/services/sites-vitrines.jpg",
    href: "/creation-site-web-maroc",
    hrefLabel: "En savoir plus sur la création de site vitrine",
  },
  {
    n: "02",
    title: "E-commerce & boutiques en ligne",
    desc: "Une boutique en ligne complète pour vendre vos produits au Maroc et à l'international : catalogue, paiement sécurisé, gestion des commandes et des stocks.",
    bullets: ["Catalogue produits", "Paiement en ligne sécurisé", "Gestion commandes & stocks", "Espace client", "Optimisée conversion"],
    icon: "M4 6h16l-1.5 10H5.5L4 6zM4 6L3 3M9 20h.01M16 20h.01",
    img: "/services/ecommerce.jpg",
  },
  {
    n: "03",
    title: "Applications web sur mesure",
    desc: "Outils internes, plateformes SaaS ou tableaux de bord : des applications web full stack pensées pour automatiser vos process et faire grandir votre activité.",
    bullets: ["Cahier des charges", "Base de données sur mesure", "Authentification & rôles", "Tableaux de bord", "API REST / GraphQL"],
    icon: "M8 3L3 12l5 9M16 3l5 9-5 9M13 3l-2 18",
    img: "/services/applications-sur-mesure.jpg",
  },
  {
    n: "04",
    title: "Refonte de site web",
    desc: "Votre site actuel est lent, dépassé ou mal affiché sur mobile ? Je le reconstruis de zéro, moderne et rapide, en préservant — et souvent en améliorant — votre référencement.",
    bullets: ["Audit du site actuel", "Nouveau design moderne", "Migration du contenu", "SEO préservé", "Vitesse optimisée"],
    icon: "M4 4v6h6M20 20v-6h-6M20 9a8 8 0 0 0-14-4M4 15a8 8 0 0 0 14 4",
    img: "/services/refonte-site-web.jpg",
    href: "/blog/site-web-lent-wordpress-vitesse-maroc",
    hrefLabel: "Pourquoi votre site web est lent",
  },
  {
    n: "05",
    title: "Référencement naturel (SEO)",
    desc: "Un site rapide et bien construit ne suffit pas s'il n'est pas trouvé sur Google. J'optimise la structure, la vitesse, les données structurées et le SEO local pour le Maroc.",
    bullets: ["Audit SEO technique", "Core Web Vitals", "Données structurées (Schema.org)", "SEO local / Google Business", "Maillage interne"],
    icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5",
    img: "/services/seo.jpg",
    href: "/blog/seo-local-maroc-referencement-google-casablanca",
    hrefLabel: "Guide du SEO local au Maroc",
  },
  {
    n: "06",
    title: "Maintenance & support technique",
    desc: "Un site web n'est jamais vraiment « fini ». Mises à jour, sauvegardes, sécurité et petites évolutions : je garde votre site rapide, sûr et à jour dans la durée.",
    bullets: ["Mises à jour régulières", "Sauvegardes automatiques", "Monitoring & sécurité", "Corrections de bugs", "Support réactif"],
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    img: "/services/maintenance.jpg",
  },
  {
    n: "07",
    title: "Intégrations & automatisations",
    desc: "Paiement en ligne, CRM, emailing, WhatsApp Business : je connecte votre site aux outils dont vous avez besoin pour vous faire gagner du temps au quotidien.",
    bullets: ["Paiement (CMI, Stripe, PayPal)", "CRM & emailing", "WhatsApp Business API", "Analytics & tracking", "Automatisation de tâches"],
    icon: "M13 2L3 14h7l-1 8 10-12h-7l1-8z",
    img: "/services/integrations-automatisations.jpg",
  },
  {
    n: "08",
    title: "Audit technique & performance",
    desc: "Vous voulez savoir où se situe votre site avant d'investir ? J'analyse la vitesse, le SEO technique et le code, et je vous remets un plan d'action clair et priorisé.",
    bullets: ["Analyse Core Web Vitals", "Audit SEO technique", "Revue de code", "Rapport détaillé", "Plan d'action priorisé"],
    icon: "M4 15a8 8 0 1 1 16 0M12 15l4-4",
    img: "/services/audit-performance.jpg",
  },
];

const stack = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "Tailwind", "Docker", "AWS", "GraphQL", "Prisma",
];

const reasons = [
  {
    t: "Un seul développeur, tous les services",
    d: "Là où une agence fait intervenir plusieurs personnes, vous échangez directement avec la personne qui conçoit, code et déploie votre projet — du premier message à la mise en ligne.",
  },
  {
    t: "Du design au référencement",
    d: "Un site beau mais invisible sur Google ne sert à rien. Chaque projet est pensé design, performance et SEO ensemble, pas comme trois métiers séparés.",
  },
  {
    t: "Des technologies modernes",
    d: "React, Next.js, Node.js et TypeScript : des sites rapides, sécurisés et faciles à faire évoluer, plutôt que des solutions figées ou dépassées.",
  },
  {
    t: "Un accompagnement dans la durée",
    d: "La mise en ligne n'est pas la fin du service : maintenance, évolutions et support restent disponibles bien après la livraison de votre projet.",
  },
];

const steps = [
  { n: "01", t: "Écoute de votre besoin", d: "On discute de votre projet et de vos objectifs sur WhatsApp — sans jargon technique inutile." },
  { n: "02", t: "Devis clair & gratuit", d: "Vous recevez une proposition détaillée sous 24h : périmètre, délais et prix, sans surprise." },
  { n: "03", t: "Design & développement", d: "Je conçois et développe votre projet, avec des points d'étape réguliers pour valider ensemble." },
  { n: "04", t: "Mise en ligne, SEO & suivi", d: "Votre projet est publié et optimisé pour Google, avec maintenance et support disponibles ensuite." },
];

const faqs = [
  {
    q: "Proposez-vous uniquement la création de sites, ou aussi la maintenance ?",
    a: "Les deux. Je conçois des sites et applications web sur mesure, et je reste disponible ensuite pour la maintenance, les mises à jour et les évolutions — beaucoup de mes clients me confient leur site sur plusieurs années.",
  },
  {
    q: "Puis-je vous confier seulement une partie du projet ?",
    a: "Oui. Si votre design est déjà prêt, si vous avez besoin uniquement d'une intégration, d'un audit ou d'une refonte technique, on adapte le périmètre du service à votre besoin réel.",
  },
  {
    q: "Travaillez-vous avec des indépendants et petites entreprises ?",
    a: "Oui, la majorité de mes clients sont des indépendants, TPE et PME au Maroc. Les projets sont dimensionnés à votre budget et à vos objectifs, pas l'inverse.",
  },
  {
    q: "Proposez-vous un accompagnement SEO après la mise en ligne ?",
    a: "Oui. Le référencement naturel est un service à part entière que je propose en continu : suivi des positions, contenu, maillage interne et optimisations techniques au fil du temps.",
  },
];

/* ── Structured data ── */
const person = { "@type": "Person", name: "Mouhcine Zhirou", url: SITE };

const servicesLd = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    serviceType: s.title,
    name: s.title,
    description: s.desc,
    provider: person,
    areaServed: { "@type": "Country", name: "Morocco" },
    url: `${SITE}/services`,
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

export default function ServicesPage() {
  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ══ TOP BAR ══ */}
      <SiteHeader
        links={[
          { type: "pill", label: "Portfolio", href: HOME },
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
        <div className="relative mx-auto max-w-7xl">
          <Eyebrow>Développeur Web Freelance — Casablanca, Maroc</Eyebrow>

          <h1 className="reveal max-w-4xl text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] text-black md:text-7xl">
            Des services web{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              complets
            </span>
            , un seul interlocuteur
          </h1>

          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            De la <strong className="font-semibold text-black/80">création de site vitrine</strong> à l&apos;
            <strong className="font-semibold text-black/80">application web sur mesure</strong>, en passant par
            l&apos;e-commerce, le référencement et la maintenance : je conçois, je développe et j&apos;accompagne
            votre projet web au Maroc, du premier échange au suivi dans la durée.
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
              <div key={s.l} className={`py-6 pl-4 first:pl-0 ${i < 2 ? "border-r border-black/10" : ""}`}>
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
        <div className="flex whitespace-nowrap py-3.5" style={{ animation: "svcTicker 28s linear infinite" }}>
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center text-sm font-extrabold uppercase tracking-wide text-black">
              <span className="mx-6">{m}</span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES — detailed list ══ */}
      <section className="bg-[#080808] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow dark>Mes services</Eyebrow>
          <h2 className="reveal max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Tout ce dont votre projet web a besoin
          </h2>
          <p className="reveal mt-5 max-w-2xl text-white/45 md:text-lg">
            Huit services, une seule personne pour les piloter — pensés pour couvrir tout le cycle de vie de votre
            site ou application web au Maroc.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="reveal group flex flex-col bg-[#080808] transition-colors duration-300 hover:bg-[#0d0d0d]">
                <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-white/10">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border-b border-r border-white/10 bg-[#080808]/80 text-xs font-extrabold text-white/40 backdrop-blur-sm">
                    {s.n}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#080808]/80 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d={s.icon} strokeWidth="1.6" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/45">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <span
                        key={b}
                        className="border border-white/10 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white/50"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {s.href && (
                    <Link
                      href={s.href}
                      prefetch={false}
                      className="group/link mt-6 inline-flex w-fit items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#e8ff47]"
                    >
                      {s.hrefLabel}
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section className="border-b border-black/10 px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Stack technique</Eyebrow>
          <h2 className="reveal max-w-2xl text-2xl font-extrabold tracking-[-0.02em] text-black md:text-3xl">
            Des technologies modernes, pas des solutions dépassées
          </h2>
          <p className="reveal mt-4 max-w-2xl text-black/55">
            Chaque service s&apos;appuie sur la même stack, éprouvée et performante — pour des sites et
            applications rapides, sécurisés et faciles à faire évoluer.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="border border-black/15 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/55"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY ME ══ */}
      <section className="px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Pourquoi me choisir</Eyebrow>
          <h2 className="reveal max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            Une manière de travailler{" "}
            <span className="font-[family-name:var(--font-instrument)] italic">différente</span>
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

          <p className="reveal mt-14 max-w-2xl text-black/55">
            Vous hésitez entre un freelance et une agence ? Je détaille les différences concrètes (prix, délais,
            suivi) dans{" "}
            <Link
              href="/blog/developpeur-freelance-vs-agence-web-maroc"
              className="font-semibold text-black underline decoration-black/20 underline-offset-2 hover:decoration-black"
            >
              cet article comparatif
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="border-t border-black/10 bg-[#F2F0EB] px-6 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-5xl">
            De votre besoin à la mise en ligne
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
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

      {/* ══ MINI FAQ ══ */}
      <section className="border-t border-black/10 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="reveal text-3xl font-extrabold tracking-[-0.03em] text-black md:text-4xl">
            Sur mes services, en bref
          </h2>

          <div className="reveal mt-10 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-base font-bold leading-snug text-black md:text-lg">{f.q}</h3>
                  <span className="mt-1 shrink-0 text-2xl leading-none text-black/40 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-black/60">{f.a}</p>
              </details>
            ))}
          </div>

          <Link
            href="/faq"
            className="reveal mt-8 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black/60 transition-colors hover:text-black"
          >
            Voir toutes les questions (prix, délais…)
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Par où commencer{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              votre projet
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Décrivez-moi votre besoin sur WhatsApp — je réponds en moins d&apos;une heure avec un devis clair et
            gratuit.
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
        @keyframes svcTicker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes svcReveal {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .reveal { animation: svcReveal 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @supports (animation-timeline: view()) {
          .reveal { animation-timeline: view(); animation-range: entry 0% cover 22%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
          [style*="svcTicker"] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
