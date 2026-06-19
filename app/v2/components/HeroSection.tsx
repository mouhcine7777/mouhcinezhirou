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
  CONCEPT — "The website that builds itself"

    step 0  BOOT       terminal types the build command
    step 2  WIREFRAME  blueprint skeletons of every block
    step 3  BUILD      real content compiles in + code card types
    step 4  PAINT      acid highlight sweeps, grid fades, "Available"

  VIEWPORT-PROPORTIONAL SCALING
  Every size is `max(mobileMinimum, X vw)` — proportional to the
  viewport with NO maximum. Reference design: 1440px wide.
  Zooming out or viewing on a huge monitor shows the exact same
  composition filling the screen, like permanent 100% zoom.

  AUTO-PLAY RULE
  The sequence auto-plays on page load at most 3 times per
  visitor (localStorage counter "hero-build-count"). After that,
  the page loads directly in its final state and the animation
  is only available via the "Replay the build" button.
  ──────────────────────────────────────────────────────────
*/

/* X = px size in the 1440px reference design → vw = X/14.4 */
const fl = (minRem: number, vw: number) => `max(${minRem}rem, ${vw}vw)`;

const fs = {
  micro:   fl(0.5,  0.6),   //  ~8.6px  @1440 — labels, nav, ticker
  small:   fl(0.58, 0.72),  // ~10.4px  @1440 — eyebrow, buttons
  mono:    fl(0.66, 0.87),  // ~12.5px  @1440 — code card
  boot:    fl(0.8,  1.05),  // ~15px    @1440 — boot terminal
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

const BOOT_CMD = "$ npm run build:portfolio";
const BOOT_OK  = "✓ Compiled in 0.9s — 0 errors";

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
   BUILD SEQUENCE HOOK
════════════════════════════════════════════ */
function useBuildSequence() {
  // step: 0 boot · 2 wireframe · 3 build · 4 done
  const [step, setStep] = useState(0);
  const [runId, setRunId] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const play = useCallback(() => {
    clear();
    setStep(0);
    setRunId((r) => r + 1);
    const t = (fn: () => void, ms: number) => timeouts.current.push(setTimeout(fn, ms));
    t(() => setStep(2), 1450);
    t(() => setStep(3), 2450);
    t(() => setStep(4), 3450);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(4);
      return clear;
    }
    // Auto-play on reload at most 3 times; afterwards only via "Replay the build"
    let count = 0;
    try { count = parseInt(localStorage.getItem("hero-build-count") || "0", 10) || 0; } catch {}
    if (count < 3) {
      try { localStorage.setItem("hero-build-count", String(count + 1)); } catch {}
      play();
    } else {
      setStep(4);
    }
    return clear;
  }, [play]);

  return { step, runId, replay: play };
}

/* ════════════════════════════════════════════
   BOOT OVERLAY — typing terminal
════════════════════════════════════════════ */
function BootOverlay({ step, runId }: { step: number; runId: number }) {
  const [chars, setChars] = useState(0);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (step !== 0) return;
    setChars(0);
    setOk(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setChars(i);
      if (i >= BOOT_CMD.length) {
        clearInterval(id);
        setTimeout(() => setOk(true), 280);
      }
    }, 26);
    return () => clearInterval(id);
  }, [step, runId]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-40 flex flex-col justify-between bg-[#F2F0EB]"
      style={{
        opacity: step === 0 ? 1 : 0,
        visibility: step === 0 ? "visible" : "hidden",
        transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), visibility 0s linear 0.55s",
        padding: `${fl(1.5, 2.8)} ${sp.padX}`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex items-center justify-center border border-black/20 font-[family-name:var(--font-bricolage)] font-extrabold text-black/70"
          style={{ fontSize: fs.micro, width: fl(1.5, 1.7), height: fl(1.5, 1.7) }}
        >
          MZ
        </span>
        <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.24em] text-black/25" style={{ fontSize: fs.micro }}>
          Initializing
        </span>
      </div>

      <div className="font-mono leading-[2.2] text-black/75" style={{ fontSize: fs.boot }}>
        <p className="m-0">
          {BOOT_CMD.slice(0, chars)}
          <span className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.18em]" style={{ background: ACCENT, animation: "blink 0.9s step-end infinite" }} />
        </p>
        <p className="m-0 text-black/45" style={{ opacity: ok ? 1 : 0, transition: "opacity 0.3s ease" }}>
          {BOOT_OK}
        </p>
      </div>

      <div className="h-px w-full bg-black/8">
        <div
          className="h-full"
          style={{
            background: ACCENT,
            width: ok ? "100%" : `${(chars / BOOT_CMD.length) * 80}%`,
            transition: "width 0.3s ease",
            boxShadow: `0 0 12px ${ACCENT}`,
          }}
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   BLOCK — wireframe skeleton → real content
════════════════════════════════════════════ */
function Block({
  tag,
  step,
  order,
  children,
  className = "",
}: {
  tag: string;
  step: number;
  order: number;
  children: React.ReactNode;
  className?: string;
}) {
  const built = step >= 3;
  const visible = step >= 2;
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-dashed border-black/30 bg-black/[0.015]"
        style={{
          opacity: visible && !built ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.985)",
          transition: built
            ? `opacity 0.35s ease ${delay}ms, transform 0.35s ease ${delay}ms`
            : `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${order * 70}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${order * 70}ms`,
        }}
      >
        <span className="absolute -top-[1px] left-0 -translate-y-full bg-black/70 px-1.5 py-0.5 font-mono text-[#F2F0EB]" style={{ fontSize: fs.micro }}>
          {tag}
        </span>
        <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-black/50" />
        <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-black/50" />
        <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-black/50" />
        <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-black/50" />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   TYPING CODE CARD — starts when the build lands
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
  const { step, runId, replay } = useBuildSequence();
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
      {/* ── BLUEPRINT GRID — fades once built ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: done ? 0.22 : 1,
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

      {/* ── BOOT TERMINAL OVERLAY ── */}
      <BootOverlay step={step} runId={runId} />

      {/* ══════════════ NAVBAR ══════════════ */}
      <nav
        className={`
          sticky top-0 z-30 w-full border-b border-black/10
          bg-[#F2F0EB]/90 backdrop-blur-md
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_2px_20px_0_rgba(0,0,0,0.06)]" : ""}
        `}
        style={{
          opacity: step >= 2 ? 1 : 0,
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
                {done ? "Available" : "Compiling…"}
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
            <Block tag="<role/>" step={step} order={0} className="w-fit" >
              <div className="flex items-center gap-3 px-0.5 py-0.5">
                <span className="h-px" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, width: fl(2, 2.2) }} />
                <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.28em] text-black/45" style={{ fontSize: fs.small }}>
                  Full Stack Developer — Since 2019
                </span>
              </div>
            </Block>

            {/* Headline */}
            <Block tag="<h1/>" step={step} order={1} className="w-fit max-w-full" >
              <h1
                className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.045em] text-black"
                style={{ fontSize: fs.h1, marginTop: fl(1.4, 1.6) }}
              >
                Mouhcine
              </h1>
            </Block>

            <Block tag="<h1/>" step={step} order={2} className="mt-1 w-fit max-w-full">
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
            <Block tag="<p/>" step={step} order={3} className="w-fit" >
              <p
                className="font-[family-name:var(--font-instrument)] italic leading-[1.45] text-black/60"
                style={{ fontSize: fs.tagline, maxWidth: fl(20, 32), marginTop: fl(1.4, 1.8) }}
              >
                You just watched this website build itself live.{" "}
                <span className="text-black">Imagine what we could build together</span> — from first commit to final pixel.
              </p>
            </Block>

            {/* CTAs */}
            <Block tag="<cta/>" step={step} order={4} className="w-fit" >
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
                    Let's chat on WhatsApp
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
              <Block tag="<code/>" step={step} order={3} className="w-full">
                <div className="mx-auto w-full" style={{ maxWidth: fl(24, 29) }}>
                  <CodeCard start={built} runId={runId} />
                </div>
              </Block>
            </div>

            {/* Stats */}
            <Block tag="<stats/>" step={step} order={5}>
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

        {/* ── BOTTOM BAR — replay + ticker + time ── */}
        <Block tag="<footer/>" step={step} order={6}>
          <div className="border-t border-black/10 bg-[#F2F0EB]">
            <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:items-stretch">

              {/* Replay */}
              <button
                onClick={replay}
                className="group flex items-center justify-center gap-2.5 border-b border-black/10 cursor-pointer transition-colors hover:bg-black/[0.03] md:border-b-0 md:border-r"
                style={{ background: "none", padding: `${fl(0.8, 0.95)} ${fl(1.8, 2.2)}` }}
              >
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-black/40 transition-transform duration-500 group-hover:rotate-[-200deg] group-hover:text-black"
                  style={{ width: "1em", height: "1em", fontSize: fs.small }}
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 3v5h5" />
                </svg>
                <span className="whitespace-nowrap font-[family-name:var(--font-bricolage)] font-bold uppercase tracking-[0.2em] text-black/40 transition-colors group-hover:text-black" style={{ fontSize: fs.micro }}>
                  Replay the build
                </span>
              </button>

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