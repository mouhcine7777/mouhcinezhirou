import Image from "next/image";

function BrowserWindow({
  url,
  image,
  alt,
  priority = false,
}: {
  url: string;
  image: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#F7F6F2] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded bg-white px-2.5 py-0.5 text-center font-mono text-[0.58rem] text-black/45">
          {url}
        </div>
      </div>
      <Image
        src={image}
        alt={alt}
        width={1500}
        height={770}
        priority={priority}
        sizes="(max-width: 1280px) 90vw, 480px"
        className="block h-auto w-full"
      />
    </div>
  );
}

export type ShowcaseWindow = { url: string; image: string; alt: string };

const DEFAULT_WINDOWS: [ShowcaseWindow, ShowcaseWindow, ShowcaseWindow] = [
  { url: "tangerino-restaurant.com", image: "/projects/tangerino-portfolio.jpeg", alt: "Tangerino Restaurant — site web créé par Mouhcine Zhirou" },
  { url: "paloozaland.com", image: "/projects/palooza-portfolio.jpeg", alt: "Palooza Park — site web créé par Mouhcine Zhirou" },
  { url: "alhabtoorcity.com", image: "/projects/alhabtoorcity-portfolio.jpeg", alt: "Alhabtoor City Hotels, Dubaï — site web créé par Mouhcine Zhirou" },
];

// Real client sites, layered like open browser windows: [back, middle, front].
// Two on small screens, three on wide desktops so the column is as tall as the
// text beside it.
export default function HeroShowcase({
  windows = DEFAULT_WINDOWS,
}: {
  windows?: [ShowcaseWindow, ShowcaseWindow, ShowcaseWindow];
}) {
  const [back, middle, front] = windows;
  return (
    <a
      href="#realisations"
      className="reveal group relative block aspect-[5/4] w-full xl:aspect-[4/5]"
      style={{ textDecoration: "none" }}
      aria-label="Voir mes réalisations"
    >
      <div className="absolute right-0 top-0 w-[76%] rotate-[3deg] transition-transform duration-500 group-hover:-translate-y-1 xl:w-[74%]">
        <BrowserWindow {...back} priority />
      </div>

      <div className="absolute left-0 top-[31%] hidden w-[70%] -rotate-[2deg] transition-transform duration-500 group-hover:-translate-x-1 xl:block">
        <BrowserWindow {...middle} />
      </div>

      <div className="absolute bottom-[6%] left-0 w-[84%] -rotate-[2deg] transition-transform duration-500 group-hover:translate-y-1 xl:bottom-[5%] xl:left-auto xl:right-[2%] xl:w-[78%] xl:rotate-[1.5deg]">
        <BrowserWindow {...front} priority />
      </div>

      {/* Availability */}
      <div className="absolute -top-3 left-[4%] flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-lg sm:left-[8%] xl:left-[2%]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-black/70">
          Disponible pour vos projets
        </span>
      </div>

      {/* Reach */}
      <div className="absolute bottom-0 right-0 bg-[#080808] px-4 py-3 shadow-xl sm:px-5 sm:py-4 xl:bottom-[1%] xl:left-0 xl:right-auto">
        <div className="text-xl font-extrabold leading-none tracking-tight text-[#e8ff47] sm:text-2xl">40+</div>
        <div className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-white/60">
          Projets · Maroc &amp; international
        </div>
      </div>

      {/* Stack */}
      <div className="absolute left-[-2%] top-[34%] hidden flex-col gap-1.5 sm:flex xl:left-auto xl:right-[-2%] xl:top-[42%] xl:items-end">
        {["React", "Next.js", "Node.js"].map((t) => (
          <span
            key={t}
            className="w-fit border border-black/10 bg-[#F2F0EB]/95 px-2.5 py-1 font-mono text-[0.62rem] font-semibold text-black/70 shadow-sm backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
