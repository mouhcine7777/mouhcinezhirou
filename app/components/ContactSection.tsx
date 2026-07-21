"use client";

import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";

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
const WA_GREEN = "#25D366";
const PHONE = "%2B212694738906";

const fl = (minRem: number, vw: number) => `max(${minRem}rem, ${vw}vw)`;

const fs = {
  micro:   fl(0.5,  0.6),
  small:   fl(0.58, 0.72),
  body:    fl(0.72, 0.85),
  pill:    fl(0.62, 0.74),
  handle:  fl(0.72, 0.9),
  tagline: fl(0.95, 1.25),
  ctaMain: fl(0.95, 1.35),
  ctaSub:  fl(0.56, 0.68),
  h2:      fl(2.4,  5.0),
  band:    fl(0.95, 1.5),
};

const sp = {
  padX: fl(1.25, 3.9),
};

const quickMessages = [
  { label: "💼 I have a web project",   text: "Hi Mouhcine 👋 I have a web project I'd love to discuss with you." },
  { label: "💰 I'd like a quote",       text: "Hi Mouhcine! I'd like to get a quote for my project. When can we talk?" },
  { label: "⚡ Quick question",         text: "Hey Mouhcine, I have a quick question for you!" },
];

const waLink = (text?: string) =>
  `https://api.whatsapp.com/send/?phone=${PHONE}${text ? `&text=${encodeURIComponent(text)}` : "&text"}&type=phone_number&app_absent=0`;

const socials = [
  {
    label: "Call",
    handle: "+212 694 738 906",
    url: "tel:+212694738906",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "mouhcine-zhirou",
    url: "https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "mouhcine7777",
    url: "https://github.com/mouhcine7777",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    handle: "mouhssinezhirou@gmail.com",
    url: "mailto:mouhssinezhirou@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1em", height: "1em" }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

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

function WaIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function GiantWhatsAppButton() {
  return (
    <WhatsAppLink
      href={waLink(quickMessages[0].text)}
      className="group relative inline-flex w-full max-w-full items-center justify-between overflow-hidden bg-black text-left sm:w-auto"
      style={{
        padding: `${fl(1.1, 1.4)} ${fl(1.4, 2)}`,
        gap: fl(1.2, 2.2),
        animation: "ctaGlow 2.6s ease-in-out infinite",
        borderRadius: "2px",
      }}
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" style={{ background: ACCENT }} />

      <span className="relative flex shrink-0 items-center justify-center" style={{ width: fl(3, 3.8), height: fl(3, 3.8) }}>
        <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: WA_GREEN }} />
        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full text-white" style={{ background: WA_GREEN }}>
          <WaIcon style={{ width: "55%", height: "55%" }} />
        </span>
      </span>

      <span className="relative z-10 flex min-w-0 flex-1 flex-col" style={{ gap: fl(0.2, 0.25) }}>
        <span className="font-[family-name:var(--font-bricolage)] font-extrabold uppercase leading-none tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-black" style={{ fontSize: fs.ctaMain }}>
          Message on WhatsApp
        </span>
        <span className="font-[family-name:var(--font-bricolage)] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-black/60" style={{ fontSize: fs.ctaSub }}>
          Message ready to send — reply in &lt; 1h
        </span>
      </span>

      <span
        className="relative z-10 flex shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:border-black/30 group-hover:text-black"
        style={{ width: fl(2.4, 3), height: fl(2.4, 3) }}
      >
        <svg viewBox="0 0 12 12" fill="none" style={{ width: "40%", height: "40%" }}>
          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </WhatsAppLink>
  );
}

export default function ContactSectionEn() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="contact"
      className={`${bricolage.variable} ${instrument.variable} flex w-full flex-col overflow-hidden bg-[#F2F0EB] lg:h-[100svh]`}
    >

      {/* ══════════════ CENTER STAGE ══════════════ */}
      <div
        className="flex min-h-0 flex-1 flex-col items-center justify-center border-t border-black/10 text-center"
        style={{ padding: `${fl(2, 1.8)} ${sp.padX} ${fl(1.8, 1.6)}` }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3" style={{ marginBottom: fl(1, 1.2) }}>
          <span className="h-px" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, width: fl(2, 2.2) }} />
          <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.28em] text-black/40" style={{ fontSize: fs.small }}>
            Get in touch — Last step
          </span>
          <span className="h-px" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, width: fl(2, 2.2) }} />
        </div>

        {/* Headline */}
        <h2
          className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.9] tracking-[-0.04em] text-black"
          style={{ fontSize: fs.h2 }}
        >
          Got a project?
        </h2>
        <h2
          className="relative w-fit font-[family-name:var(--font-instrument)] italic leading-[0.95] tracking-[-0.02em] text-black"
          style={{ fontSize: fs.h2 }}
        >
          <span
            aria-hidden="true"
            className="absolute -inset-x-[0.12em] inset-y-[0.06em] -z-10 -rotate-1"
            style={{ background: ACCENT }}
          />
          Let's talk.
        </h2>

        {/* Sub */}
        <p
          className="font-[family-name:var(--font-instrument)] italic leading-[1.5] text-black/55 lg:whitespace-nowrap"
          style={{ fontSize: fs.tagline, marginTop: fl(0.9, 1.0) }}
        >
          One click — the message is already written for you.{" "}
          <span className="text-black">All you have to do is hit send.</span>
        </p>

        {/* THE BUTTON */}
        <div className="w-full sm:w-auto" style={{ marginTop: fl(1.3, 1.6) }}>
          <GiantWhatsAppButton />
        </div>

        {/* Trust microcopy */}
        <div
          className="flex flex-wrap items-center justify-center font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.18em] text-black/35"
          style={{ fontSize: fs.micro, gap: fl(0.9, 1.4), marginTop: fl(0.9, 1.0) }}
        >
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 12 12" fill="none" style={{ width: "1em", height: "1em" }}>
              <path d="M2 6.5L4.8 9.5L10 3" stroke={WA_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free
          </span>
          <span className="text-black/15">·</span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 12 12" fill="none" style={{ width: "1em", height: "1em" }}>
              <path d="M2 6.5L4.8 9.5L10 3" stroke={WA_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No commitment
          </span>
          <span className="text-black/15">·</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex" style={{ width: fl(0.42, 0.5), height: fl(0.42, 0.5) }}>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
            </span>
            Available now — Casablanca <LocalTime />
          </span>
        </div>
      </div>

      {/* ══════════════ OTHER CHANNELS ══════════════ */}
      <div className="grid grid-cols-2 border-t border-black/10 lg:grid-cols-4">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex items-center justify-between border-black/10 transition-colors duration-200 hover:bg-black/[0.03]
              ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i < 3 ? "lg:border-r" : "lg:border-r-0"}
            `}
            style={{ padding: `${fl(0.9, 1.0)} ${fl(1.1, 1.5)}` }}
          >
            <div className="flex min-w-0 items-center" style={{ gap: fl(0.7, 0.85) }}>
              <div className="shrink-0 text-black/30 transition-colors group-hover:text-black/60" style={{ fontSize: fl(0.85, 1) }}>
                {s.icon}
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.2em] text-black/30" style={{ fontSize: fs.micro }}>
                  {s.label}
                </span>
                <span className="truncate font-[family-name:var(--font-bricolage)] font-bold tracking-[-0.01em] text-black/65 transition-colors group-hover:text-black" style={{ fontSize: fs.handle }}>
                  {s.handle}
                </span>
              </div>
            </div>
            <svg viewBox="0 0 12 12" fill="none" className="ml-2 shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100" style={{ width: "0.7em", height: "0.7em", fontSize: fs.body }}>
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>

      {/* ══════════════ ACID BAND — second-chance CTA ══════════════ */}
      <WhatsAppLink
        href={waLink(quickMessages[0].text)}
        aria-label="Message on WhatsApp"
        className="group relative block overflow-hidden border-y-2 border-black"
        style={{ background: ACCENT }}
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
        <div
          className="relative flex whitespace-nowrap"
          style={{ animation: "contactTicker 18s linear infinite", paddingTop: fl(0.6, 0.7), paddingBottom: fl(0.6, 0.7) }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center font-[family-name:var(--font-bricolage)] font-extrabold uppercase text-black transition-colors duration-300 group-hover:text-[#e8ff47]"
              style={{ fontSize: fs.band, gap: fl(1.2, 1.6), marginRight: fl(1.2, 1.6) }}
            >
              Message on WhatsApp
              <WaIcon style={{ width: "0.85em", height: "0.85em" }} />
              <span className="font-[family-name:var(--font-instrument)] font-normal normal-case italic tracking-normal">
                reply in less than an hour
              </span>
              <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </WhatsAppLink>

      {/* ══════════════ FOOTER BAR ══════════════ */}
      <div
        className="flex flex-col items-center justify-between gap-3 sm:flex-row"
        style={{ padding: `${fl(0.9, 1.0)} ${sp.padX}` }}
      >
        <span className="font-[family-name:var(--font-bricolage)] font-medium uppercase tracking-[0.22em] text-black/25" style={{ fontSize: fs.micro }}>
          © 2026 Mouhcine Zhirou — All rights reserved
        </span>

        <nav className="flex items-center gap-x-5 gap-y-1" style={{ fontSize: fs.micro }}>
          {[
            { label: "Home", href: "/" },
            { label: "Web development", href: "/creation-site-web-maroc" },
            { label: "FAQ", href: "/faq" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-bricolage)] font-semibold uppercase tracking-[0.22em] text-black/35 transition-colors hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={scrollTop}
          className="group flex cursor-pointer items-center gap-2 font-[family-name:var(--font-bricolage)] font-bold uppercase tracking-[0.2em] text-black/35 transition-colors hover:text-black"
          style={{ background: "none", border: "none", padding: 0, fontSize: fs.micro }}
        >
          Back to top
          <span className="flex items-center justify-center border border-black/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-black" style={{ width: fl(1.4, 1.6), height: fl(1.4, 1.6) }}>
            <svg viewBox="0 0 12 12" fill="none" style={{ width: "0.6em", height: "0.6em", fontSize: fs.body }}>
              <path d="M6 10V2M6 2L2.5 5.5M6 2l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      <style>{`
        @keyframes contactTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 10px 40px -12px rgba(0,0,0,0.45), 0 0 0 0 rgba(37,211,102,0); }
          50%      { box-shadow: 0 10px 40px -12px rgba(0,0,0,0.45), 0 0 0 10px rgba(37,211,102,0.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="contactTicker"], [style*="ctaGlow"] { animation: none !important; }
          .animate-ping { animation: none !important; }
        }
      `}</style>
    </section>
  );
}