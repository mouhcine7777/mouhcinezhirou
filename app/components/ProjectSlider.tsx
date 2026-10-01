"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export type SliderProject = {
  title: string;
  meta: string;
  image: string;
  url: string;
  alt: string;
};

const COPIES = 3;

// Side gutter of the track, arrows and left fade. Defaults to the page padding;
// pages with a narrower centred column pass their own so cards line up with it.
type Gutter = { pad: string; scrollPad: string; fadeWidth: string };
const DEFAULT_GUTTER: Gutter = {
  pad: "px-6 md:px-14",
  scrollPad: "scroll-pl-6 md:scroll-pl-14",
  fadeWidth: "w-6 md:w-14",
};

export default function ProjectSlider({
  projects,
  gutter = DEFAULT_GUTTER,
  cta,
}: {
  projects: SliderProject[];
  gutter?: Gutter;
  cta?: { label: string; href: string };
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<number | undefined>(undefined);

  // Width of one full set of cards (including the gap after the last one).
  const setWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    return cards[projects.length].offsetLeft - cards[0].offsetLeft;
  };

  // Three identical sets, kept centred on the middle one: whenever the
  // visitor drifts into a clone set, jump by exactly one set width. The
  // jump lands on an identical card, so the loop looks endless.
  const recentre = () => {
    const el = trackRef.current;
    const w = setWidth();
    if (!el || !w) return;
    if (el.scrollLeft < w * 0.5) el.scrollLeft += w;
    else if (el.scrollLeft > w * 1.5) el.scrollLeft -= w;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = setWidth();
    const onResize = () => {
      el.scrollLeft = setWidth();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = () => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(recentre, 140);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrow =
    "flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#e8ff47] hover:text-[#e8ff47]";

  const items = Array.from({ length: COPIES }, (_, copy) =>
    projects.map((p) => ({ ...p, copy }))
  ).flat();

  return (
    <div className="reveal relative mt-14">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${gutter.pad} ${gutter.scrollPad}`}
      >
        {items.map((p, i) => {
          const isClone = p.copy !== 1;
          return (
            <a
              key={`${p.title}-${i}`}
              data-card
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={isClone}
              tabIndex={isClone ? -1 : 0}
              className="group block w-[80vw] shrink-0 snap-start sm:w-[440px] lg:w-[520px]"
              style={{ textDecoration: "none" }}
            >
              <div className="relative overflow-hidden border border-white/10 transition-colors duration-300 group-hover:border-white/30">
                <img
                  src={p.image}
                  alt={isClone ? "" : p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1500/770] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-end justify-center bg-black/0 pb-6 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <span className="border border-[#e8ff47] bg-black/80 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#e8ff47] backdrop-blur-sm">
                    Visiter le site →
                  </span>
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="truncate text-base font-bold text-white/85 transition-colors group-hover:text-white">
                  {p.title}
                </h3>
                <span className="shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-[#e8ff47]">
                  {p.meta}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Soft fade over the card peeking in on the left */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 h-[calc(100%-0.5rem)] bg-gradient-to-r from-[#080808] to-transparent ${gutter.fadeWidth}`}
      />

      <div className={`mt-8 flex flex-wrap items-center justify-between gap-4 ${gutter.pad}`}>
        <div className="flex gap-3">
          <button type="button" onClick={() => scrollByCard(-1)} aria-label="Projet précédent" className={arrow}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button type="button" onClick={() => scrollByCard(1)} aria-label="Projet suivant" className={arrow}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {cta && (
          <Link
            href={cta.href}
            className="group inline-flex h-12 items-center gap-3 bg-[#e8ff47] px-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.98]"
          >
            {cta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
