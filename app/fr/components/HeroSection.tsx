"use client";

import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
  { n: "5+",  l: "Années"  },
  { n: "40+", l: "Projets" },
  { n: "28+", l: "Clients" },
];

const stack = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "Tailwind", "Docker", "AWS", "GraphQL", "Prisma",
];

const navLinks = [
  { label: "Projets",  href: "#work",    id: "work"    },
  { label: "Clients",  href: "#clients", id: "clients" },
  { label: "Contact",  href: "#contact", id: "contact" },
];

/* ─── Animated counter ─── */
function Counter({ target, duration = 1600 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.includes("+") ? "+" : "";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setDisplay(Math.floor(ease * num) + suffix);
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(num + suffix);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ─── Smooth scroll ─── */
function smoothScrollTo(id: string, duration = 900) {
  const target = document.getElementById(id);
  if (!target) return;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  const ease = (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  const animate = (now: number) => {
    const p = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * ease(p));
    if (p < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

/* ─── Scroll button hook ─── */
function useScrollToWork() {
  const [animating, setAnimating] = useState(false);
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (animating) return;
    setAnimating(true);
    smoothScrollTo("work");
    setTimeout(() => setAnimating(false), 1100);
  };
  return { animating, scrollToWork };
}

/* ─── Scroll progress line ─── */
function ScrollProgressLine() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black/5">
      <div className="h-full bg-black/25 transition-none" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ─── Language Switcher ─── */
function LangSwitcher() {
  const router = useRouter();
  const switchToEn = () => {
    // Set cookie so middleware knows this was a manual choice — won't redirect back to /fr
    document.cookie = "lang-pref=en; path=/; max-age=31536000; SameSite=Lax";
    router.push("/");
  };
  return (
    <button
      onClick={switchToEn}
      aria-label="Switch to English"
      className="flex items-center gap-1.5 group"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
    >
      <span
        className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-black/35 transition-colors duration-200 group-hover:text-black/65 sm:text-[0.5rem]"
      >
        EN
      </span>
      <span className="h-[10px] w-px bg-black/15" />
      <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-black/20 transition-colors duration-200 group-hover:text-black/40 hidden sm:inline">
        English
      </span>
    </button>
  );
}

export default function HeroSectionFr() {
  const { animating, scrollToWork } = useScrollToWork();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const intersecting = new Map(navLinks.map(({ id }) => [id, false]));
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          intersecting.set(id, entry.isIntersecting);
          const visible = navLinks.map((l) => l.id).filter((sid) => intersecting.get(sid));
          setActiveSection(visible.length > 0 ? visible[0] : null);
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setClickedItem(id);
    smoothScrollTo(id);
    setTimeout(() => setClickedItem(null), 500);
  };

  return (
    <main
      className={`
        ${bricolage.variable} ${instrument.variable}
        relative w-full bg-[#F2F0EB]
        lg:h-screen lg:overflow-hidden lg:flex lg:flex-col
      `}
    >
      {/* ── LEFT COLUMN — desktop only ── */}
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-[88px] flex-col items-center justify-center border-r border-black/10 z-20">
        <span
          className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-medium uppercase tracking-[0.28em] text-black/25"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Portfolio
        </span>
      </div>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav
        className={`
          sticky top-0 z-30 w-full border-b border-black/10
          bg-[#F2F0EB]/90 backdrop-blur-md
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_2px_20px_0_rgba(0,0,0,0.06)]" : ""}
          lg:pl-[88px]
        `}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-14">

          {/* Left: monogram */}
          <span className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-black/40">
            MZ
          </span>

          {/* Center: nav links */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              const isClicked = clickedItem === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="relative flex flex-col items-center gap-[3px] group"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                      fontSize: "0.5rem",
                      color: isActive ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.75)",
                      transform: isClicked ? "scale(0.93)" : "scale(1)",
                      transition: "color 0.3s ease, transform 0.15s ease",
                      display: "block",
                    }}
                    className="sm:text-[0.54rem] lg:text-[0.56rem]"
                  >
                    {item.label}
                  </span>

                  {/* Active underline */}
                  <span
                    style={{
                      display: "block",
                      height: "1.5px",
                      borderRadius: "9999px",
                      background: "rgba(0,0,0,0.8)",
                      width: isActive ? "100%" : "0%",
                      opacity: isActive ? 1 : 0,
                      transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
                    }}
                  />

                  {/* Hover underline */}
                  <span
                    className="block h-[1px] w-0 rounded-full bg-black/40 transition-all duration-200 group-hover:w-full"
                    style={{ marginTop: "-3px", display: isActive ? "none" : "block" }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right: lang switcher + availability */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <LangSwitcher />

            {/* Thin separator */}
            <span className="hidden h-[10px] w-px bg-black/12 sm:block" />

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-emerald-500" />
              <span className="hidden font-[family-name:var(--font-bricolage)] text-[0.5rem] font-medium uppercase tracking-[0.16em] text-black/35 sm:inline">
                Disponible
              </span>
            </div>
          </div>
        </div>

        <ScrollProgressLine />
      </nav>

      {/* ══════════════════════════════════════
          MOBILE LAYOUT (< lg)
      ══════════════════════════════════════ */}
      <div className="flex flex-col lg:hidden">

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

        <div className="border-b border-black/10 px-5 py-6">
          <p
            className="font-[family-name:var(--font-instrument)] italic leading-[1.4] tracking-[-0.01em] text-black/60"
            style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)" }}
          >
            "Transformer des problèmes complexes en produits digitaux rapides et élégants — du premier commit au dernier pixel."
          </p>
        </div>

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
                <Counter target={s.n} />
              </span>
              <span className="font-[family-name:var(--font-bricolage)] text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-black/28">
                {s.l}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-b border-black/10 px-5 py-6">
          <button
            onClick={scrollToWork}
            className={`
              relative overflow-hidden bg-black px-6 py-3
              font-[family-name:var(--font-bricolage)] text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB]
              transition-all duration-300 cursor-pointer
              ${animating ? "scale-[0.97] opacity-80" : "hover:opacity-75"}
            `}
          >
            <span className={`inline-flex items-center gap-2 transition-all duration-500 ${animating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
              Mes Réalisations
            </span>
            <span className={`absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-500 ${animating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ animation: animating ? "bounceDown 0.5s ease infinite alternate" : "none" }}>
                <path d="M6 1v10M6 11L2 7M6 11l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Défilement…
            </span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-white/40 transition-all ease-linear ${animating ? "w-full duration-[850ms]" : "w-0 duration-0"}`} />
          </button>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-bricolage)] text-[0.55rem] font-bold uppercase tracking-[0.16em] text-black/35 underline underline-offset-4 transition-colors hover:text-black/65"
          >
            Discutons →
          </a>
        </div>

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
          DESKTOP LAYOUT (lg+)
      ══════════════════════════════════════ */}
      <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:pl-[88px]">
        <div className="relative flex flex-1 flex-col justify-between px-14 py-10">

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
                  Développeur Full Stack
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

          <div className="my-4 flex items-center gap-5">
            <div className="h-px flex-1 bg-black/8" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-medium uppercase tracking-[0.22em] text-black/20">
              Depuis 2019
            </span>
            <div className="h-px w-12 bg-black/8" />
          </div>

          <div className="flex items-end justify-between">
            <div className="max-w-[420px]">
              <p
                className="font-[family-name:var(--font-instrument)] italic leading-[1.35] tracking-[-0.01em] text-black/65"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
              >
                "Transformer des problèmes complexes en produits digitaux rapides et élégants — du premier commit au dernier pixel."
              </p>
              <div className="mt-7 flex items-center gap-5">
                <button
                  onClick={scrollToWork}
                  className={`
                    group relative overflow-hidden bg-black px-7 py-3.5 cursor-pointer
                    font-[family-name:var(--font-bricolage)] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB]
                    transition-all duration-300
                    ${animating ? "scale-[0.97]" : "hover:bg-black/85"}
                  `}
                >
                  <span className={`flex items-center gap-2.5 transition-all duration-500 ${animating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
                    Mes Réalisations
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-300 ${animating ? "" : "group-hover:translate-y-0.5"}`}>
                      <path d="M5 1v8M5 9L2 6M5 9l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ${animating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ animation: animating ? "bounceDown 0.6s ease infinite alternate" : "none" }}>
                      <path d="M6 1v10M6 11L2 7M6 11l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Défilement…
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-white/40 transition-all ease-linear ${animating ? "w-full duration-[850ms]" : "w-0 duration-0"}`} />
                </button>

                <a
                  href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-black/35 underline underline-offset-4 transition-colors hover:text-black/65"
                >
                  Discutons →
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
                    <Counter target={s.n} />
                  </span>
                  <span className="font-[family-name:var(--font-bricolage)] text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-black/28">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

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
        @keyframes bounceDown {
          from { transform: translateY(-2px); }
          to   { transform: translateY(2px); }
        }
      `}</style>
    </main>
  );
}