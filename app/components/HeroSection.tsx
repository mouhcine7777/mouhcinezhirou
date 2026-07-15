"use client";

import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
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

const ACCENT = "#e8ff47";

/*
  ──────────────────────────────────────────────────────────
  CONCEPT — clean entrance reveal

    On load, every block fades / slides / un-blurs into place
    with a staggered delay. No boot terminal, no wireframe
    skeleton phase — content appears immediately and animates in.

  VIEWPORT-PROPORTIONAL SCALING
  Every size is `max(mobileMinimum, X vw)` — proportional to the
  viewport with NO maximum. Reference design: 1440px wide.
  ──────────────────────────────────────────────────────────
*/

/* X = px size in the 1440px reference design → vw = X/14.4 */
const fl = (minRem: number, vw: number) => `max(${minRem}rem, ${vw}vw)`;

const fs = {
  micro:   fl(0.5,  0.6),   //  ~8.6px  @1440 — labels, nav, ticker
  small:   fl(0.58, 0.72),  // ~10.4px  @1440 — eyebrow, buttons
  mono:    fl(0.66, 0.87),  // ~12.5px  @1440 — code card
  tagline: fl(1.05, 1.5),   // ~21.6px  @1440
  statNum: fl(1.7,  3.2),   // ~46px    @1440
  h1:      fl(3.4,  9.3),   // ~134px   @1440
};

const sp = {
  padX:    fl(1.25, 3.9),   // section side padding  (px-14 @1440)
  navGapY: fl(0.9,  1.1),   // nav vertical padding
  btnY:    fl(0.85, 1.1),
  btnX:    fl(1.6,  2.2),
  statY:   fl(1.3,  1.7),
  statX:   fl(1.0,  1.1),
  navGap:  fl(1.5,  2.8),   // gap between nav links
};

const stats = [
  { n: "5+",  l: "Years of experience" },
  { n: "40+", l: "Projects delivered"  },
  { n: "28+", l: "Happy clients"       },
];

const stack = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "Tailwind", "Docker", "AWS", "GraphQL", "Prisma",
];

const navLinks = [
  { label: "Work",    href: "#work",    id: "work"    },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/* ─── Code typed in the signature card ─── */
const codeLines = [
  { indent: 0, parts: [{ t: "const ", c: "key" }, { t: "dev", c: "var" }, { t: " = {", c: "plain" }] },
  { indent: 1, parts: [{ t: "name", c: "prop" }, { t: ": ", c: "plain" }, { t: "'Mouhcine Zhirou'", c: "str" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "role", c: "prop" }, { t: ": ", c: "plain" }, { t: "'Full Stack Dev'", c: "str" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "based", c: "prop" }, { t: ": ", c: "plain" }, { t: "'Morocco 🇲🇦'", c: "str" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "stack", c: "prop" }, { t: ": [", c: "plain" }, { t: "'React'", c: "str" }, { t: ", ", c: "plain" }, { t: "'Node'", c: "str" }, { t: ", ", c: "plain" }, { t: "'…'", c: "str" }, { t: "],", c: "plain" }] },
  { indent: 1, parts: [{ t: "coffee", c: "prop" }, { t: ": ", c: "plain" }, { t: "Infinity", c: "num" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "available", c: "prop" }, { t: ": ", c: "plain" }, { t: "true", c: "num" }, { t: ",", c: "plain" }] },
  { indent: 0, parts: [{ t: "};", c: "plain" }] },
];

const codeColors: Record<string, string> = {
  key:   "#c792ea",
  var:   "#82aaff",
  prop:  "rgba(255,255,255,0.78)",
  str:   ACCENT,
  num:   "#f78c6c",
  plain: "rgba(255,255,255,0.45)",
};

/* ════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════ */

function Counter({ target, duration = 1400 }: { target: string; duration?: number }) {
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
      <div className="h-full bg-black/30 transition-none" style={{ width: `${progress}%` }} />
    </div>
  );
}

function LangSwitcher() {
  const router = useRouter();
  const switchToFr = () => {
    // Set cookie so middleware knows this was a manual choice — won't redirect back to /
    document.cookie = "lang-pref=fr; path=/; max-age=31536000; SameSite=Lax";
    router.push("/fr");
  };
  return (
    <button
      onClick={switchToFr}
      aria-label="Passer en français"
      className="flex items-center gap-1.5 group cursor-pointer"
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.16em] text-black/35 transition-colors duration-200 group-hover:text-black/70" style={{ fontSize: fs.micro }}>
        FR
      </span>
      <span className="w-px bg-black/15" style={{ height: "0.7em", fontSize: fs.micro }} />
      <span className="hidden font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.16em] text-black/20 transition-colors duration-200 group-hover:text-black/45 sm:inline" style={{ fontSize: fs.micro }}>
        Français
      </span>
    </button>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Casablanca",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}

/* ════════════════════════════════════════════
   ENTRANCE SEQUENCE HOOK  (no boot / no wireframe)
════════════════════════════════════════════ */
function useBuildSequence() {
  // step: 0 = pre-entrance (hidden) · 4 = entered (done)
  const [step, setStep] = useState(0);
  const [runId, setRunId] = useState(0);
  const raf = useRef(0);

  const play = useCallback(() => {
    cancelAnimationFrame(raf.current);
    setStep(0);
    setRunId((r) => r + 1);
    // paint the hidden state for one frame, then animate everything in
    raf.current = requestAnimationFrame(() => {
      raf.current = requestAnimationFrame(() => setStep(4));
    });
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(4);
      return;
    }
    play();
    return () => cancelAnimationFrame(raf.current);
  }, [play]);

  return { step, runId, replay: play };
}

/* ════════════════════════════════════════════
   BLOCK — staggered entrance reveal
════════════════════════════════════════════ */
function Block({
  step,
  order,
  children,
  className = "",
}: {
  step: number;
  order: number;
  children: React.ReactNode;
  className?: string;
}) {
  const built = step >= 3;
  const delay = order * 110;

  return (
    <div className={`relative ${className}`}>
      <div
        style={{
          opacity: built ? 1 : 0,
          transform: built ? "translateY(0)" : "translateY(14px)",
          filter: built ? "blur(0px)" : "blur(6px)",
          transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.6s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   TYPING CODE CARD — starts when the entrance lands
════════════════════════════════════════════ */
function CodeCard({ start, runId }: { start: boolean; runId: number }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [done, setDone] = useState(false);

  const totalChars = codeLines.reduce(
    (sum, line) => sum + line.parts.reduce((s, p) => s + p.t.length, 0),
    0
  );

  useEffect(() => {
    if (!start) {
      setVisibleChars(0);
      setDone(false);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisibleChars(totalChars);
      setDone(true);
      return;
    }
    setVisibleChars(0);
    setDone(false);
    let count = 0;
    const id = setInterval(() => {
      count += 2;
      if (count >= totalChars) {
        count = totalChars;
        clearInterval(id);
        setDone(true);
      }
      setVisibleChars(count);
    }, 24);
    return () => clearInterval(id);
  }, [start, runId, totalChars]);

  let charBudget = visibleChars;

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0d0d0d]"
      style={{ boxShadow: "0 35px 70px -25px rgba(0,0,0,0.35)" }}
    >
      {/* Window bar */}
      <div className="flex items-center justify-between border-b border-white/10" style={{ padding: `${fl(0.55, 0.7)} ${fl(0.9, 1.1)}` }}>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#ff5f56]" style={{ width: fl(0.42, 0.5), height: fl(0.42, 0.5) }} />
          <span className="rounded-full bg-[#ffbd2e]" style={{ width: fl(0.42, 0.5), height: fl(0.42, 0.5) }} />
          <span className="rounded-full bg-[#27c93f]" style={{ width: fl(0.42, 0.5), height: fl(0.42, 0.5) }} />
        </div>
        <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.2em] text-white/25" style={{ fontSize: fs.micro }}>
          dev.ts
        </span>
        <span className="font-[family-name:var(--font-bricolage)] font-medium uppercase tracking-[0.16em]" style={{ fontSize: fs.micro, color: done ? ACCENT : "rgba(255,255,255,0.2)" }}>
          {done ? "● compiled" : "○ typing…"}
        </span>
      </div>

      {/* Code */}
      <pre className="m-0 font-mono leading-[1.9]" style={{ tabSize: 2, fontSize: fs.mono, padding: `${fl(1.1, 1.4)} ${fl(1.1, 1.4)}` }}>
        {codeLines.map((line, li) => {
          const lineContent = line.parts.map((part, pi) => {
            if (charBudget <= 0) return null;
            const take = Math.min(part.t.length, charBudget);
            charBudget -= take;
            return (
              <span key={pi} style={{ color: codeColors[part.c] }}>
                {part.t.slice(0, take)}
              </span>
            );
          });
          return (
            <div key={li} className="flex">
              <span className="mr-4 w-4 select-none text-right text-white/15">{li + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 1.2}em` }}>{lineContent}</span>
            </div>
          );
        })}
        <div className="flex">
          <span className="mr-4 w-4" />
          <span
            className="inline-block h-[1.1em] w-[0.5em] align-middle"
            style={{ background: ACCENT, animation: "blink 1s step-end infinite" }}
          />
        </div>
      </pre>

      <span className="pointer-events-none absolute -bottom-px -right-px border-b-2 border-r-2" style={{ borderColor: ACCENT, width: fl(1.1, 1.4), height: fl(1.1, 1.4) }} />
    </div>
  );
}

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
export default function HeroSectionEn() {
  const { animating, scrollToWork } = useScrollToWork();
  const { step, runId } = useBuildSequence();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const done = step >= 4;
  const built = step >= 3;

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
        relative w-full overflow-hidden bg-[#F2F0EB]
        flex min-h-[100svh] flex-col
      `}
    >
      {/* ── BACKGROUND GRID ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: done ? 0.22 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "4.5vw 4.5vw",
          }}
        />
        {[
          { top: "22%", left: "12%" }, { top: "18%", left: "78%" },
          { top: "62%", left: "6%"  }, { top: "70%", left: "88%" },
          { top: "44%", left: "50%" },
        ].map((pos, i) => (
          <span key={i} className="absolute font-mono text-black/25" style={{ ...pos, fontSize: fs.micro }}>+</span>
        ))}
      </div>

      {/* ══════════════ NAVBAR ══════════════ */}
      <nav
        className={`
          sticky top-0 z-30 w-full border-b border-black/10
          bg-[#F2F0EB]/90 backdrop-blur-md
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_2px_20px_0_rgba(0,0,0,0.06)]" : ""}
        `}
        style={{
          opacity: built ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div className="flex w-full items-center justify-between" style={{ padding: `${sp.navGapY} ${sp.padX}` }}>
          <a href="#" className="group flex items-center" style={{ textDecoration: "none" }}>
            <span
              className="flex items-center justify-center border border-black/20 font-[family-name:var(--font-bricolage)] font-extrabold tracking-[0.05em] text-black/70 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-[#e8ff47]"
              style={{ fontSize: fs.micro, width: fl(1.5, 1.7), height: fl(1.5, 1.7) }}
            >
              MZ
            </span>
          </a>

          <div className="flex items-center" style={{ gap: sp.navGap }}>
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
                      fontSize: fs.micro,
                      color: isActive ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.75)",
                      transform: isClicked ? "scale(0.93)" : "scale(1)",
                      transition: "color 0.3s ease, transform 0.15s ease",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      height: "1.5px",
                      borderRadius: "9999px",
                      background: "rgba(0,0,0,0.85)",
                      width: isActive ? "100%" : "0%",
                      opacity: isActive ? 1 : 0,
                      transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
                    }}
                  />
                  <span
                    className="block h-[1px] w-0 rounded-full bg-black/40 transition-all duration-200 group-hover:w-full"
                    style={{ marginTop: "-3px", display: isActive ? "none" : "block" }}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <LangSwitcher />
            <span className="hidden w-px bg-black/10 sm:block" style={{ height: "0.7em", fontSize: fs.micro }} />
            <div className="flex items-center gap-2">
              <span className="relative flex" style={{ width: fl(0.42, 0.5), height: fl(0.42, 0.5) }}>
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${done ? "bg-emerald-400" : "bg-amber-400"}`} />
                <span className={`relative inline-flex h-full w-full rounded-full transition-colors duration-500 ${done ? "bg-emerald-500" : "bg-amber-500"}`} />
              </span>
              <span className="hidden font-[family-name:var(--font-bricolage)] font-medium uppercase tracking-[0.16em] text-black/35 sm:inline" style={{ fontSize: fs.micro }}>
                {done ? "Available" : "Loading…"}
              </span>
            </div>
          </div>
        </div>
        <ScrollProgressLine />
      </nav>

      {/* ══════════════ HERO BODY — two columns, full width ══════════════ */}
      <div className="relative z-10 flex w-full flex-1 flex-col">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">

          {/* LEFT: headline + tagline + CTAs */}
          <div
            className="flex flex-col justify-center border-b border-black/10 lg:border-b-0 lg:border-r"
            style={{
              paddingLeft: sp.padX,
              paddingRight: sp.padX,
              paddingTop: fl(3, 2.8),
              paddingBottom: fl(2.5, 2.5),
            }}
          >
            {/* Eyebrow */}
            <Block step={step} order={0} className="w-fit" >
              <div className="flex items-center gap-3 px-0.5 py-0.5">
                <span className="h-px" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, width: fl(2, 2.2) }} />
                <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.28em] text-black/45" style={{ fontSize: fs.small }}>
                  Freelance Full Stack Web Developer · Casablanca, Morocco
                </span>
              </div>
            </Block>

            {/* Headline */}
            <Block step={step} order={1} className="w-fit max-w-full" >
              <h1
                className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.045em] text-black"
                style={{ fontSize: fs.h1, marginTop: fl(1.4, 1.6) }}
              >
                Mouhcine
              </h1>
            </Block>

            <Block step={step} order={2} className="mt-1 w-fit max-w-full">
              <h1
                className="relative font-[family-name:var(--font-instrument)] italic leading-[0.95] tracking-[-0.02em] text-black"
                style={{ fontSize: fs.h1 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-[0.12em] inset-y-[0.06em] -z-10 origin-left"
                  style={{
                    background: ACCENT,
                    transform: done ? "scaleX(1) rotate(-1deg)" : "scaleX(0) rotate(-1deg)",
                    transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s",
                  }}
                />
                Zhirou
              </h1>
            </Block>

            {/* Tagline */}
            <Block step={step} order={3} className="w-fit" >
              <p
                className="font-[family-name:var(--font-instrument)] italic leading-[1.45] text-black/60"
                style={{ fontSize: fs.tagline, maxWidth: fl(20, 32), marginTop: fl(1.4, 1.8) }}
              >
                Freelance full stack web developer in Morocco, crafting fast, reliable custom websites and web apps — from first commit to final pixel.{" "}
                <span className="text-black">Let&apos;s build something great together</span>.
              </p>
            </Block>

            {/* CTAs */}
            <Block step={step} order={4} className="w-fit" >
              <div className="flex flex-wrap items-center p-0.5" style={{ gap: fl(1.1, 1.4), marginTop: fl(1.8, 2.2) }}>
                <button
                  onClick={scrollToWork}
                  className={`
                    group relative overflow-hidden bg-black cursor-pointer
                    font-[family-name:var(--font-bricolage)] font-bold uppercase tracking-[0.16em] text-[#F2F0EB]
                    transition-transform duration-300
                    ${animating ? "scale-[0.97]" : ""}
                  `}
                  style={{
                    fontSize: fs.small,
                    padding: `${sp.btnY} ${sp.btnX}`,
                  }}
                >
                  <span className={`relative z-10 flex items-center gap-2.5 transition-all duration-500 ${animating ? "-translate-y-[200%] opacity-0" : "translate-y-0 opacity-100"} group-hover:text-black`}>
                    View my work
                    <svg viewBox="0 0 10 10" fill="none" style={{ width: "0.9em", height: "0.9em" }}>
                      <path d="M5 1v8M5 9L2 6M5 9l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={`absolute inset-0 z-10 flex items-center justify-center gap-2 text-black transition-all duration-500 ${animating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
                    <svg viewBox="0 0 12 12" fill="none" style={{ width: "1em", height: "1em", animation: animating ? "bounceDown 0.6s ease infinite alternate" : "none" }}>
                      <path d="M6 1v10M6 11L2 7M6 11l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Scrolling…
                  </span>
                  <span
                    className={`absolute inset-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${animating ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`}
                    style={{ background: ACCENT }}
                  />
                </button>

                <a
                  href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-[family-name:var(--font-bricolage)] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black"
                  style={{ fontSize: fs.small }}
                >
                  <span className="border-b border-black/20 pb-0.5 transition-colors group-hover:border-black">
                    Let&apos;s chat on WhatsApp
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Block>
          </div>

          {/* RIGHT: code card + stats */}
          <div className="flex flex-col">
            <div
              className="flex flex-1 items-center justify-center border-b border-black/10"
              style={{ padding: `${fl(2.5, 2.8)} ${fl(1.25, 3.3)}` }}
            >
              <Block step={step} order={3} className="w-full">
                <div className="mx-auto w-full" style={{ maxWidth: fl(24, 29) }}>
                  <CodeCard start={built} runId={runId} />
                </div>
              </Block>
            </div>

            {/* Stats */}
            <Block step={step} order={5}>
              <div className="grid grid-cols-3">
                {stats.map((s, i) => (
                  <div
                    key={s.n}
                    className={`group flex flex-col gap-1.5 transition-colors duration-300 hover:bg-black/[0.025] ${i < 2 ? "border-r border-black/10" : ""}`}
                    style={{ padding: `${sp.statY} ${sp.statX}` }}
                  >
                    <span
                      className="font-[family-name:var(--font-bricolage)] font-extrabold leading-none tracking-tight text-black"
                      style={{ fontSize: fs.statNum }}
                    >
                      {built ? <Counter key={`${s.n}-${runId}`} target={s.n} /> : "0"}
                    </span>
                    <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase leading-snug tracking-[0.18em] text-black/30" style={{ fontSize: fs.micro }}>
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </div>

        {/* ── BOTTOM BAR — ticker + time ── */}
        <Block step={step} order={6}>
          <div className="border-t border-black/10 bg-[#F2F0EB]">
            <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:items-stretch">

              {/* Tech ticker */}
              <div className="relative overflow-hidden border-b border-black/10 md:border-b-0">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#F2F0EB] to-transparent md:w-24" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#F2F0EB] to-transparent md:w-24" />
                <div className="flex whitespace-nowrap" style={{ animation: "ticker 26s linear infinite", paddingTop: fl(0.8, 0.95), paddingBottom: fl(0.8, 0.95) }}>
                  {[...stack, ...stack, ...stack].map((t, i) => (
                    <span
                      key={i}
                      className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.2em] text-black/30 transition-colors duration-300 hover:text-black"
                      style={{ fontSize: fs.micro, marginLeft: fl(1.4, 1.7), marginRight: fl(1.4, 1.7) }}
                    >
                      {t}
                      <span className="text-black/15" style={{ marginLeft: fl(1.4, 1.7) }}>✦</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="hidden items-center justify-center gap-2 border-l border-black/10 md:flex" style={{ paddingLeft: fl(2, 2.8), paddingRight: fl(2, 2.8) }}>
                <span className="whitespace-nowrap font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.22em] text-black/30" style={{ fontSize: fs.micro }}>
                  Casablanca — <span className="text-black/55"><LocalTime /></span>
                </span>
              </div>
            </div>
          </div>
        </Block>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes bounceDown {
          from { transform: translateY(-2px); }
          to   { transform: translateY(2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ticker"] { animation: none !important; }
          * { animation-duration: 0.01ms !important; transition-duration: 0.15s !important; }
        }
      `}</style>
    </main>
  );
}