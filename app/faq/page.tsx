import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "../components/Footer";

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
    "FAQ — Création de Site Web au Maroc | Prix, Délais & Développeur Freelance",
  description:
    "Questions fréquentes sur la création de site web au Maroc : prix, délais, technologies, référencement SEO, e-commerce et maintenance. Réponses d'un développeur web freelance à Casablanca.",
  keywords: [
    "prix création site web Maroc",
    "combien coûte un site web Maroc",
    "tarif création site internet Casablanca",
    "délai création site web",
    "création site web Casablanca prix",
    "développeur web freelance Maroc",
    "prix site e-commerce Maroc",
  ],
  alternates: { canonical: `${SITE}/faq` },
  openGraph: {
    title: "FAQ — Création de Site Web au Maroc | Prix, Délais & Développeur Freelance",
    description:
      "Prix, délais, technologies et référencement : les réponses d'un développeur web freelance à Casablanca.",
    url: `${SITE}/faq`,
    locale: "fr_MA",
    type: "website",
  },
};

const faqs = [
  {
    q: "Combien coûte la création d'un site web au Maroc ?",
    a: "Le prix d'un site web au Maroc dépend de vos besoins : un site vitrine simple démarre à quelques milliers de dirhams, tandis qu'un site e-commerce ou une application sur mesure coûte davantage. Je fournis toujours un devis clair et gratuit après un premier échange, sans engagement.",
  },
  {
    q: "Combien de temps faut-il pour créer un site web ?",
    a: "Un site vitrine est généralement livré en 1 à 3 semaines. Un site e-commerce ou une application web sur mesure prend en moyenne 3 à 8 semaines, selon la complexité et le contenu à intégrer.",
  },
  {
    q: "Quel est le prix d'un site e-commerce au Maroc ?",
    a: "Une boutique en ligne coûte plus qu'un site vitrine car elle inclut le catalogue produits, le panier, le paiement en ligne et la gestion des commandes. Le tarif dépend du nombre de produits et des fonctionnalités souhaitées. Contactez-moi pour un devis précis et gratuit.",
  },
  {
    q: "Quelles technologies utilisez-vous pour créer un site web ?",
    a: "Je développe des sites web modernes et rapides avec React, Next.js, Node.js et TypeScript. Ces technologies garantissent d'excellentes performances, une bonne sécurité et un référencement Google optimal.",
  },
  {
    q: "Optimisez-vous le site pour le référencement (SEO) ?",
    a: "Oui. Chaque site que je crée est optimisé pour le référencement naturel dès le départ : vitesse de chargement, structure des pages, données structurées et balises adaptées, afin de vous aider à apparaître dans les résultats de recherche Google au Maroc.",
  },
  {
    q: "Mon site sera-t-il adapté aux mobiles ?",
    a: "Absolument. Tous mes sites sont 100% responsive : ils s'affichent parfaitement sur mobile, tablette et ordinateur. C'est indispensable aujourd'hui, la majorité des visiteurs au Maroc naviguant depuis leur téléphone.",
  },
  {
    q: "Travaillez-vous avec des clients en dehors du Maroc ?",
    a: "Oui. Je suis basé à Casablanca mais je travaille en télétravail avec des clients partout au Maroc (Rabat, Marrakech, Tanger, Fès, Agadir) ainsi qu'à l'international, notamment en France et en Europe.",
  },
  {
    q: "Pouvez-vous refaire mon site web existant ?",
    a: "Oui, je réalise des refontes de sites web : je modernise le design, améliore la vitesse et l'expérience mobile, tout en préservant — et souvent en améliorant — votre référencement Google existant.",
  },
  {
    q: "Assurez-vous la maintenance du site après la livraison ?",
    a: "Oui, je propose la maintenance, les mises à jour et l'évolution de votre site web après sa mise en ligne, pour qu'il reste rapide, sécurisé et à jour dans le temps.",
  },
  {
    q: "Comment démarrer mon projet de site web ?",
    a: "C'est simple : contactez-moi sur WhatsApp pour me décrire votre projet. On en discute, je vous envoie un devis gratuit sous 24h, et on lance la création de votre site web dès validation.",
  },
];

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
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
            href="/creation-site-web-maroc"
            className="hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black sm:inline"
          >
            Création de site web
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-black px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-colors hover:bg-transparent hover:text-black"
          >
            Devis gratuit
          </a>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-6 pb-12 pt-16 md:px-14 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "3vw 3vw",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-black/45">
              Questions fréquentes
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-6xl">
            Création de site web au Maroc —{" "}
            <span className="font-[family-name:var(--font-instrument)] italic">vos questions</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black/60">
            Prix, délais, e-commerce, référencement… Voici les réponses aux questions que l&apos;on me pose le
            plus souvent sur la <strong className="font-semibold text-black/80">création de site web au Maroc</strong>.
          </p>
        </div>
      </section>

      {/* ══ FAQ LIST ══ */}
      <section className="mx-auto max-w-3xl px-6 pb-20 md:px-14">
        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h2 className="text-lg font-bold leading-snug text-black md:text-xl">{f.q}</h2>
                <span className="mt-1 shrink-0 text-2xl leading-none text-black/40 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-black/60">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Une autre question ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Écrivez-moi directement — je réponds en moins d&apos;une heure. Devis gratuit et sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e8ff47] px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.98]"
            >
              Poser ma question sur WhatsApp →
            </a>
            <Link
              href={HOME}
              className="border border-white/25 px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white hover:text-white"
            >
              Voir le portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="fr" />
    </main>
  );
}
