import type { SliderProject } from "../components/ProjectSlider";
import type { ShowcaseWindow } from "../components/HeroShowcase";

type FeaturedProject = Omit<SliderProject, "alt"> & { cities?: string[] };

// Live client sites shown in the "Réalisations" sliders. The first nine match
// page 1 of the homepage portfolio; the rest only surface on their city page.
const POOL: FeaturedProject[] = [
  { title: "Alhabtoor City Hotels", meta: "Hôtellerie de luxe", image: "/projects/alhabtoorcity-portfolio.jpeg", url: "https://alhabtoorcity.com/" },
  { title: "Adventure Road", meta: "Marrakech · Aventure", image: "/projects/adventure-road-portfolio.jpeg", url: "https://www.adventure-road.ma/", cities: ["Marrakech"] },
  { title: "Palooza Park", meta: "Loisirs · Famille", image: "/projects/palooza-portfolio.jpeg", url: "https://www.paloozaland.com", cities: ["Marrakech"] },
  { title: "Parthenon Holding", meta: "Corporate", image: "/projects/parthenon-portfolio.jpeg", url: "https://www.parthenon.ma" },
  { title: "Nostalgia Lovers Festival", meta: "Festival · Musique", image: "/projects/nostalgia-portfolio.jpeg", url: "https://nostalgialovers.ma/", cities: ["Casablanca"] },
  { title: "Oxygen Village", meta: "Midelt · Hôtel éco", image: "/projects/oxygen-portfolio.jpeg", url: "https://oxygen-village.ma/" },
  { title: "Tangerino Restaurant", meta: "Tanger & Rabat · Restaurant", image: "/projects/tangerino-portfolio.jpeg", url: "https://tangerino-restaurant.com/", cities: ["Tanger", "Rabat"] },
  { title: "Garden Corner", meta: "Lifestyle · Hospitalité", image: "/projects/gardencorner-portfolio.jpeg", url: "https://gardencorner.ma/" },
  { title: "Chiringuito Tanger", meta: "Tanger · Restaurant", image: "/projects/Chiringuito-portfolio.jpeg", url: "https://chiringuito-tanger.com/", cities: ["Tanger"] },
  { title: "Le Guépard Tanger", meta: "Tanger · Restaurant", image: "/projects/leguepard-portfolio.jpeg", url: "http://leguepard-tanger.com/", cities: ["Tanger"] },
  { title: "Anzar Restaurant Tanger", meta: "Tanger · Restaurant", image: "/projects/anzar-portfolio.jpeg", url: "https://anzar-morocco.com/", cities: ["Tanger"] },
  { title: "Magic Garden Festival", meta: "Marrakech · Festival", image: "/projects/magicgarden-portfolio.jpeg", url: "https://magicgarden.ma/", cities: ["Marrakech"] },
];

const DEFAULT_COUNT = 9;

/** Up to 9 projects, with the given city's own projects first. */
export function featuredProjects(city?: string): SliderProject[] {
  const local = city ? POOL.filter((p) => p.cities?.includes(city)) : [];
  const rest = POOL.slice(0, DEFAULT_COUNT).filter((p) => !local.includes(p));
  return [...local, ...rest].slice(0, DEFAULT_COUNT).map((p) => ({
    title: p.title,
    meta: p.meta,
    image: p.image,
    url: p.url,
    alt: `${p.title} — ${p.meta} — site web créé par Mouhcine Zhirou, développeur web freelance`,
  }));
}

// Hero browser windows [back, middle, front] for cities with enough local work;
// other pages fall back to the default set in HeroShowcase.
const HERO_WINDOWS: Record<string, [ShowcaseWindow, ShowcaseWindow, ShowcaseWindow]> = {
  Tanger: [
    { url: "chiringuito-tanger.com", image: "/projects/Chiringuito-portfolio.jpeg", alt: "Chiringuito Tanger — site web créé par Mouhcine Zhirou" },
    { url: "tangerino-restaurant.com", image: "/projects/tangerino-portfolio.jpeg", alt: "Tangerino Restaurant, Tanger — site web créé par Mouhcine Zhirou" },
    { url: "anzar-morocco.com", image: "/projects/anzar-portfolio.jpeg", alt: "Anzar Restaurant Tanger — site web créé par Mouhcine Zhirou" },
  ],
  Marrakech: [
    { url: "paloozaland.com", image: "/projects/palooza-portfolio.jpeg", alt: "Palooza Park, Marrakech — site web créé par Mouhcine Zhirou" },
    { url: "adventure-road.ma", image: "/projects/adventure-road-portfolio.jpeg", alt: "Adventure Road, Marrakech — site web créé par Mouhcine Zhirou" },
    { url: "magicgarden.ma", image: "/projects/magicgarden-portfolio.jpeg", alt: "Magic Garden Festival, Marrakech — site web créé par Mouhcine Zhirou" },
  ],
};

export function heroWindows(city?: string) {
  return city ? HERO_WINDOWS[city] : undefined;
}

// Lines the slider up with a centred max-w-7xl (80rem) content column.
export const COLUMN_7XL_GUTTER = {
  pad: "px-[max(1.5rem,calc((100%_-_80rem)/2))] md:px-[max(3.5rem,calc((100%_-_80rem)/2))]",
  scrollPad: "scroll-pl-[max(1.5rem,calc((100%_-_80rem)/2))] md:scroll-pl-[max(3.5rem,calc((100%_-_80rem)/2))]",
  fadeWidth: "w-[max(1.5rem,calc((100%_-_80rem)/2))] md:w-[max(3.5rem,calc((100%_-_80rem)/2))]",
};
