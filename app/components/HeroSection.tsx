import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";

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

const stats = [
  { n: "5+",  l: "Years"    },
  { n: "40+", l: "Projects" },
  { n: "28+", l: "Clients"  },
];

const stack = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "Tailwind", "Docker", "AWS", "GraphQL", "Prisma",
];

export default function HeroSection() {
  return (
    <main
      className={`
        ${bricolage.variable} ${instrument.variable}
        relative w-full bg-[#F2F0EB]
        lg:h-screen lg:overflow-hidden lg:flex lg:flex-col
      `}
    >
      {/* ── LEFT COLUMN — desktop only ── */}
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-[88px] flex-col items-center justify-between border-r border-black/10 py-10">
        <span className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-medium tracking-[0.2em] text-black/30">
          01
        </span>
        <span
          className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-medium uppercase tracking-[0.28em] text-black/25"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Portfolio — 2026
        </span>
        <div className="h-2 w-2 rounded-full bg-black/15" />
      </div>

      {/* ══════════════════════════════════════
          MOBILE LAYOUT (< lg)
      ══════════════════════════════════════ */}
      <div className="flex flex-col lg:hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <span className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-black/35">
            Full Stack Developer
          </span>
          <div className="flex items-center gap-2">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-emerald-500" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-medium uppercase tracking-[0.16em] text-black/35">
              Available
            </span>
          </div>
        </div>

        {/* Name */}
        <div className="border-b border-black/10 px-5 pt-8 pb-6">
          <h1
            className="block font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.87] tracking-[-0.04em] text-black"
            style={{ fontSize: "clamp(3.5rem, 16vw, 5rem)" }}
          >
            Mouhcine
          </h1>
          <h1
            className="block font-[family-name:var(--font-instrument)] italic leading-[0.87] tracking-[-0.02em] text-black"
            style={{ fontSize: "clamp(3.5rem, 16vw, 5rem)" }}
          >
            Zhirou
          </h1>
        </div>

        {/* Quote */}
        <div className="border-b border-black/10 px-5 py-6">
          <p
            className="font-[family-name:var(--font-instrument)] italic leading-[1.4] tracking-[-0.01em] text-black/60"
            style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)" }}
          >
            "Turning complex problems into fast, beautiful digital products — from the first commit to the final pixel."
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-b border-black/10">
          {stats.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-col gap-1 px-5 py-6 ${i < 2 ? "border-r border-black/10" : ""}`}
            >
              <span
                className="font-[family-name:var(--font-bricolage)] font-extrabold leading-none tracking-tight text-black"
                style={{ fontSize: "clamp(1.8rem, 7vw, 2.5rem)" }}
              >
                {s.n}
              </span>
              <span className="font-[family-name:var(--font-bricolage)] text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-black/28">
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 border-b border-black/10 px-5 py-6">
          <a
            href="#work"
            className="bg-black px-6 py-3 font-[family-name:var(--font-bricolage)] text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-opacity hover:opacity-75"
          >
            Selected Work
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
            className="font-[family-name:var(--font-bricolage)] text-[0.55rem] font-bold uppercase tracking-[0.16em] text-black/35 underline underline-offset-4"
          >
            Let's talk →
          </a>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 border-b border-black/10 px-5 py-5">
          {["React", "Node.js", "TypeScript", "PostgreSQL", "Next.js", "Docker"].map((t) => (
            <span
              key={t}
              className="border border-black/12 px-3 py-1 font-[family-name:var(--font-bricolage)] text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-black/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Ticker */}
        <div className="overflow-hidden">
          <div
            className="flex whitespace-nowrap py-3"
            style={{ animation: "ticker 22s linear infinite" }}
          >
            {[...stack, ...stack, ...stack].map((t, i) => (
              <span key={i} className="mx-6 font-[family-name:var(--font-bricolage)] text-[0.46rem] font-semibold uppercase tracking-[0.2em] text-black/18">
                {t}<span className="ml-6 text-black/10">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT (lg+) — unchanged
      ══════════════════════════════════════ */}
      <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:pl-[88px]">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/10 px-14 py-5">
          <span className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-black/35">
            Full Stack Developer
          </span>
          <div className="flex items-center gap-2">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-emerald-500" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.58rem] font-medium uppercase tracking-[0.2em] text-black/35">
              Available
            </span>
          </div>
        </div>

        {/* Core */}
        <div className="relative flex flex-1 flex-col justify-between px-14 py-10">

          {/* Name block */}
          <div className="mt-2">
            <div className="flex items-baseline gap-6 leading-none">
              <h1
                className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.045em] text-black"
                style={{ fontSize: "clamp(3.8rem, 11vw, 10.5rem)" }}
              >
                Mouhcine
              </h1>
              <div className="mb-2 flex flex-col gap-1.5">
                <span className="h-px w-8 bg-black/20" />
                <span className="font-[family-name:var(--font-bricolage)] text-[0.55rem] font-medium uppercase tracking-[0.22em] text-black/30">
                  React · Node · Postgres
                </span>
              </div>
            </div>
            <h1
              className="font-[family-name:var(--font-instrument)] italic leading-[0.88] tracking-[-0.02em] text-black"
              style={{ fontSize: "clamp(3.8rem, 11vw, 10.5rem)" }}
            >
              Zhirou
            </h1>
          </div>

          {/* Divider */}
          <div className="my-4 flex items-center gap-5">
            <div className="h-px flex-1 bg-black/8" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-medium uppercase tracking-[0.22em] text-black/20">
              Est. 2019
            </span>
            <div className="h-px w-12 bg-black/8" />
          </div>

          {/* Bottom — desc + stats */}
          <div className="flex items-end justify-between">
            <div className="max-w-[420px]">
              <p
                className="font-[family-name:var(--font-instrument)] italic leading-[1.35] tracking-[-0.01em] text-black/65"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
              >
                "Turning complex problems into fast, beautiful digital products — from the first commit to the final pixel."
              </p>
              <div className="mt-7 flex items-center gap-5">
                <a
                  href="#work"
                  className="bg-black px-7 py-3.5 font-[family-name:var(--font-bricolage)] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-opacity hover:opacity-75"
                >
                  Selected Work
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
                  className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-black/35 underline underline-offset-4 transition-colors hover:text-black/65"
                >
                  Let's talk →
                </a>
              </div>
            </div>

            <div className="flex gap-14">
              {stats.map((s) => (
                <div key={s.n} className="flex flex-col gap-1">
                  <span
                    className="font-[family-name:var(--font-bricolage)] font-extrabold leading-none tracking-tight text-black"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {s.n}
                  </span>
                  <span className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-black/28">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden border-t border-black/10">
          <div
            className="flex whitespace-nowrap py-3.5"
            style={{ animation: "ticker 22s linear infinite" }}
          >
            {[...stack, ...stack, ...stack].map((t, i) => (
              <span key={i} className="mx-7 font-[family-name:var(--font-bricolage)] text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-black/18">
                {t}<span className="ml-7 text-black/10">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </main>
  );
}