import Image from "next/image";
import { hasBlogImage } from "../lib/blog-image";
import { blogImagePath } from "../lib/blog-posts";

const ACCENT = "#e8ff47";

export default function BlogCover({
  slug,
  title,
  category,
  priority = false,
  className = "",
  fill: fillCell = false,
}: {
  slug: string;
  title: string;
  category: string;
  priority?: boolean;
  className?: string;
  /** Stretch to fill the parent's height instead of a fixed 1200:630 box — use when the sibling column can be taller (e.g. the featured card). */
  fill?: boolean;
}) {
  const boxClass = fillCell ? "h-full min-h-[240px] w-full" : "aspect-[1200/630] w-full";

  if (hasBlogImage(slug)) {
    return (
      <div className={`relative overflow-hidden ${boxClass} ${className}`}>
        <Image
          src={blogImagePath(slug)}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>
    );
  }

  // Branded placeholder — swap in a real cover by adding public/blog/<slug>.jpg
  return (
    <div
      aria-hidden
      className={`relative flex items-end overflow-hidden bg-[#080808] ${boxClass} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "8% 16%",
        }}
      />
      <span
        className="absolute -right-6 -top-10 select-none font-[family-name:var(--font-instrument)] italic leading-none text-white/[0.06]"
        style={{ fontSize: "9rem" }}
      >
        MZ
      </span>
      <span
        aria-hidden
        className="absolute -inset-x-2 top-1/2 h-1.5 -translate-y-1/2 -rotate-2"
        style={{ background: ACCENT, boxShadow: `0 0 24px ${ACCENT}` }}
      />
      <span className="relative z-10 m-6 w-fit border border-white/20 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/70">
        {category}
      </span>
    </div>
  );
}
