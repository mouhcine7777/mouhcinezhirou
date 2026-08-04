import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "../components/Footer";
import WhatsAppLink from "../components/WhatsAppLink";
import BlogCover from "../components/BlogCover";
import { blogPosts } from "../lib/blog-posts";

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
  title: "Blog : Conseils sur la création de site web au Maroc",
  description:
    "Conseils, guides et retours d'expérience sur la création de site web, le prix d'un site au Maroc, le SEO et le développement React & Next.js, par un développeur web freelance à Casablanca.",
  keywords: [
    "blog développeur web maroc",
    "conseils création site web",
    "prix site web maroc",
    "guide seo maroc",
  ],
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "Blog : Conseils sur la création de site web au Maroc",
    description:
      "Guides et conseils sur la création de site web, le prix, et le SEO au Maroc, par un développeur web freelance à Casablanca.",
    url: `${SITE}/blog`,
    locale: "fr_MA",
    type: "website",
  },
};

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Mouhcine Zhirou, Développeur Web Freelance",
  url: `${SITE}/blog`,
  blogPost: sorted.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE}/blog/${p.slug}`,
    datePublished: p.date,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
  ],
};

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const [featured, ...rest] = sorted;

  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
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
            className="bg-[#e8ff47] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.97]"
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
        <div className="relative mx-auto max-w-7xl">
          <Eyebrow>Le blog</Eyebrow>
          <h1 className="reveal max-w-3xl text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] text-black md:text-7xl">
            Conseils &amp;{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1"
                style={{ background: ACCENT }}
              />
              guides
            </span>
          </h1>
          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Prix, technologies, SEO et retours d&apos;expérience sur la création de site web au
            Maroc, écrit par la personne qui code, pas par un service marketing.
          </p>
        </div>
      </section>

      {/* ══ FEATURED ══ */}
      {featured && (
        <section className="px-6 pb-8 md:px-14">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/blog/${featured.slug}`}
              className="reveal group grid grid-cols-1 overflow-hidden border border-black/10 bg-white/40 transition-colors hover:border-black/25 md:grid-cols-2"
              style={{ textDecoration: "none" }}
            >
              <BlogCover slug={featured.slug} title={featured.title} category={featured.category} priority fill />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="w-fit border border-black/15 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black/55">
                  {featured.category}
                </span>
                <span className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/35">
                  {formatDate(featured.date)} · {featured.readTime} de lecture
                </span>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-black transition-colors group-hover:underline md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-black/55">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-black">
                  Lire l&apos;article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══ ARTICLE GRID ══ */}
      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="reveal group flex flex-col justify-between bg-[#F2F0EB] transition-colors hover:bg-white/60"
                style={{ textDecoration: "none" }}
              >
                <BlogCover slug={post.slug} title={post.title} category={post.category} />
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black/40">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-black transition-colors group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/55">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-black/35">
                    <span>
                      {formatDate(post.date)} · {post.readTime}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-[#080808] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Un projet web en{" "}
            <span className="relative inline-block text-black">
              <span aria-hidden className="absolute -inset-x-2 inset-y-1 -z-10 -rotate-1" style={{ background: ACCENT }} />
              tête
            </span>{" "}
            ?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/50">
            Parlons-en directement. Devis clair et gratuit, réponse en moins d&apos;une heure.
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
              Voir le portfolio
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
