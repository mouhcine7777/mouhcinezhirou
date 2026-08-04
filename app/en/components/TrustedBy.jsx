import Image from "next/image";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { useRef, useEffect } from "react";

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

const logos = [
  { src: "/logos/alhabtoor.svg",        alt: "Alhabtoor"        },
  { src: "/logos/palooza.png",           alt: "Palooza"          },
  { src: "/logos/parthenon.png",         alt: "Parthenon"        },
  { src: "/logos/bigdistrict.png",       alt: "Big District"     },
  { src: "/logos/nostalgialovers.webp",  alt: "Nostalgia Lovers" },
  { src: "/logos/magicgarden.png",       alt: "Magic Garden"     },
  { src: "/logos/pe.png",                alt: "Public Events"    },
  { src: "/logos/oxygen.png",            alt: "Oxygen Village"   },
  { src: "/logos/chiringuito.png",       alt: "Chiringuito"      },
  { src: "/logos/guepard.png",           alt: "Le Guépard"       },
  { src: "/logos/tangerino.png",         alt: "Tangerino"        },
  { src: "/logos/ayta.png",              alt: "Ayta"             },
  { src: "/logos/gardenbakes.png",       alt: "Garden Bakes"     },
  { src: "/logos/adventureroad.png",     alt: "Adventure Road"   },
  { src: "/logos/greenautoexpo.png",     alt: "Green Auto Expo"  },
  { src: "/logos/govelodrome.png",       alt: "Go Velodrome"     },
  { src: "/logos/fanzone.png",           alt: "Fanzone"          },
  { src: "/logos/gardencorner.png",      alt: "Magic Corner"     },
];

const row1Logos = logos.slice(0, 9);
const row2Logos = logos.slice(9);

function LogoItem({ logo }) {
  return (
    <div className="mx-4 flex shrink-0 items-center justify-center md:mx-8">
      <div className="relative h-10 w-20 md:h-16 md:w-36">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="(max-width: 768px) 80px, 144px"
          className="object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
        />
      </div>
    </div>
  );
}

// JS-driven marquee using requestAnimationFrame.
// Renders exactly 2 identical copies side-by-side.
// When pos reaches the width of 1 copy, it snaps back to 0 —
// which is invisible because copy 2 is sitting exactly where copy 1 was.
function Marquee({ logos, speed = 0.4, direction = "left" }) {
  const trackRef = useRef(null);
  const posRef   = useRef(0);
  const rafRef   = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!trackRef.current) return;
      const halfWidth = track.scrollWidth / 2;

      if (direction === "left") {
        posRef.current += speed;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
      } else {
        posRef.current -= speed;
        if (posRef.current <= 0) posRef.current += halfWidth;
      }

      track.style.transform = `translateX(${-posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    // For "right" direction start mid-way so logos enter from the right naturally
    if (direction === "right") posRef.current = track.scrollWidth / 2;

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  return (
    <div
      ref={trackRef}
      className="flex will-change-transform"
      style={{ width: "max-content" }}
    >
      {logos.map((logo, i) => <LogoItem key={`a-${i}`} logo={logo} />)}
      {logos.map((logo, i) => <LogoItem key={`b-${i}`} logo={logo} />)}
    </div>
  );
}

export default function TrustedSection() {
  return (
    <section
    id="clients"
      className={`${bricolage.variable} ${instrument.variable} relative w-full overflow-hidden bg-[#080808]`}
    >
      <div className="h-px w-full bg-white/[0.06]" />

      {/* ── HEADER ── */}
      <div className="relative z-10 flex flex-col items-center justify-center border-b border-white/[0.06] px-5 py-12 text-center md:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-bricolage)] font-extrabold leading-none tracking-tighter text-white/[0.02]"
          style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
        >
          18+
        </span>

        <div className="relative flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-[#e8ff47]" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/35">
              Trusted By
            </span>
            <div className="h-px w-8 bg-[#e8ff47]" />
          </div>
          <h2
            className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            Brands that trust
          </h2>
          <h2
            className="font-[family-name:var(--font-instrument)] italic leading-[0.9] tracking-[-0.02em] text-white/30"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            my work
          </h2>
          <p className="mt-3 max-w-md text-center font-[family-name:var(--font-bricolage)] text-sm leading-relaxed text-white/40">
            Freelance web development trusted by brands across Morocco and beyond.
          </p>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative py-10 md:py-14">

        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#080808] to-transparent md:w-48" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#080808] to-transparent md:w-48" />

        {/* Row 1 — scrolls left */}
        <div className="mb-4 overflow-hidden border-y border-white/[0.05] py-3 md:py-4">
          <Marquee logos={row1Logos} speed={0.4} direction="left" />
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden border-b border-white/[0.05] py-3 md:py-4">
          <Marquee logos={row2Logos} speed={0.35} direction="right" />
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div className="grid grid-cols-3 border-t border-white/[0.06]">
        {[
          { n: "18+", l: "Brands"     },
          { n: "5+",  l: "Industries" },
          { n: "3",   l: "Countries"  },
        ].map((s, i) => (
          <div
            key={s.n}
            className={`flex flex-col items-center justify-center gap-1 py-7 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}
          >
            <span
              className="font-[family-name:var(--font-bricolage)] font-extrabold leading-none tracking-tight text-[#e8ff47]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {s.n}
            </span>
            <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-white/25">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}