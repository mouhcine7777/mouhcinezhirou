import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "../../components/Footer";
import WhatsAppLink from "../../components/WhatsAppLink";
import BlogCover from "../../components/BlogCover";
import { blogPosts, getBlogPost, blogImagePath, type BlogBlock } from "../../lib/blog-posts";
import { hasBlogImage } from "../../lib/blog-image";

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

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${SITE}/blog/${post.slug}`;
  const ogImages = hasBlogImage(post.slug)
    ? [{ url: `${SITE}${blogImagePath(post.slug)}`, width: 1200, height: 630, alt: post.title }]
    : undefined;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      locale: "fr_MA",
      publishedTime: post.date,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ogImages?.map((i) => i.url),
    },
  };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal mb-6 flex items-center gap-3">
      <span className="h-px w-10" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-black/45">
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

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="reveal mt-14 text-2xl font-extrabold tracking-[-0.02em] text-black md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="reveal mt-10 text-xl font-bold tracking-[-0.01em] text-black">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="reveal mt-5 text-lg leading-relaxed text-black/65">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="reveal mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-black/65">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="reveal relative mt-10 border-l-2 border-black py-2 pl-8">
          <p className="font-[family-name:var(--font-instrument)] text-2xl italic leading-snug text-black/85 md:text-3xl">
            "{block.text}"
          </p>
        </blockquote>
      );
  }
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${post.slug}`;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    image: hasBlogImage(post.slug) ? [`${SITE}${blogImagePath(post.slug)}`] : undefined,
    author: { "@type": "Person", name: "Mouhcine Zhirou", url: SITE },
    publisher: { "@type": "Person", name: "Mouhcine Zhirou", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} bg-[#F2F0EB] font-[family-name:var(--font-bricolage)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
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

      {/* ══ BREADCRUMB ══ */}
      <div className="px-6 pt-8 md:px-14">
        <nav className="mx-auto flex max-w-2xl items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-black/35">
          <Link href={HOME} className="transition-colors hover:text-black">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-black">Blog</Link>
        </nav>
      </div>

      {/* ══ ARTICLE HEADER ══ */}
      <header className="px-6 pb-10 pt-6 md:px-14">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="reveal text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-black md:text-5xl">
            {post.title}
          </h1>
          <p className="reveal mt-6 text-lg leading-relaxed text-black/55">{post.description}</p>
          <div className="reveal mt-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black/35">
            <span>Mouhcine Zhirou</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </div>
      </header>

      {/* ══ COVER IMAGE ══ */}
      <div className="px-6 pb-10 md:px-14">
        <div className="mx-auto max-w-3xl">
          <BlogCover slug={post.slug} title={post.title} category={post.category} priority />
        </div>
      </div>

      {/* ══ ARTICLE BODY ══ */}
      <article className="px-6 pb-16 md:px-14">
        <div className="mx-auto max-w-2xl">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* ══ INLINE CTA ══ */}
      <section className="border-y border-black/10 bg-white/40 px-6 py-14 md:px-14">
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-[-0.02em] text-black">
              Un projet web à concrétiser ?
            </h2>
            <p className="mt-1.5 text-sm text-black/55">Devis clair et gratuit, réponse en moins d&apos;une heure.</p>
          </div>
          <WhatsAppLink
            href={WHATSAPP}
            className="shrink-0 bg-black px-6 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-colors hover:bg-transparent hover:text-black hover:border hover:border-black"
          >
            Discuter sur WhatsApp →
          </WhatsAppLink>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      {related.length > 0 && (
        <section className="px-6 py-16 md:px-14">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>À lire aussi</Eyebrow>
            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col justify-between bg-[#F2F0EB] p-8 transition-colors hover:bg-white/60"
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black/40">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-black transition-colors group-hover:underline">
                      {p.title}
                    </h3>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-black/50">
                    Lire →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
