"use client";

import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { gtagSendEvent } from "../lib/gtag";

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

const socials = [
  {
    label: "Call",
    handle: "+212 694 738 906",
    url: "tel:+212694738906",
    tracked: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "mouhcine-zhirou",
    url: "https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0/",
    tracked: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    tracked: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "mouhssinezhirou@gmail.com",
    url: "mailto:mouhssinezhirou@gmail.com",
    tracked: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`${bricolage.variable} ${instrument.variable} w-full bg-[#F2F0EB]`}>

      <div className="grid grid-cols-1 border-t border-black/10 lg:grid-cols-2 lg:items-stretch">

        {/* LEFT — heading + whatsapp CTA */}
        <div className="flex flex-col justify-between border-b border-black/10 px-5 py-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-14 lg:h-full">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-8 bg-black" />
              <span className="font-[family-name:var(--font-bricolage)] text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-black/35">
                Get in Touch
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.04em] text-black"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Let's Work
            </h2>
            <h2
              className="font-[family-name:var(--font-instrument)] italic leading-[0.88] tracking-[-0.02em] text-black/30"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Together
            </h2>
          </div>

          {/* WhatsApp — primary CTA */}
          <div className="mt-10 lg:mt-8">
            <p className="mb-5 max-w-xs font-[family-name:var(--font-bricolage)] text-[0.65rem] leading-[1.8] text-black/40">
              The fastest way to reach me. Send a message and I'll get back to you within the hour.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtagSendEvent()}
              className="group inline-flex items-center gap-3 bg-black px-7 py-4 transition-opacity hover:opacity-80"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span className="font-[family-name:var(--font-bricolage)] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white">
                Message on WhatsApp
              </span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-60">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="mt-3 font-[family-name:var(--font-bricolage)] text-[0.55rem] font-medium uppercase tracking-[0.2em] text-black/25">
              +212 694 738 906
            </p>
          </div>
        </div>

        {/* RIGHT — socials */}
        <div className="flex flex-col divide-y divide-black/10">

          {/* Availability */}
          <div className="flex items-center gap-2 px-5 py-5 lg:px-14">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-emerald-500" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-black/35">
              Available for new projects
            </span>
          </div>

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={s.tracked ? () => gtagSendEvent() : undefined}
              className="group flex flex-1 items-center justify-between px-5 py-7 transition-colors duration-200 hover:bg-black/[0.03] lg:px-14 lg:py-0"
            >
              <div className="flex items-center gap-4">
                <div className="text-black/30 transition-colors group-hover:text-black/60">
                  {s.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-black/30">
                    {s.label}
                  </span>
                  <span
                    className="font-[family-name:var(--font-bricolage)] font-bold tracking-[-0.01em] text-black/65 transition-colors group-hover:text-black"
                    style={{ fontSize: "clamp(0.78rem, 1.3vw, 1rem)" }}
                  >
                    {s.handle}
                  </span>
                </div>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-black/10 opacity-0 transition-all duration-200 group-hover:border-black/25 group-hover:opacity-100">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="flex flex-col items-center justify-between gap-3 border-t border-black/10 px-5 py-5 sm:flex-row md:px-14">
        <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-medium uppercase tracking-[0.22em] text-black/22">
          © 2026 Mouhcine Zhirou — All rights reserved
        </span>
        <span className="font-[family-name:var(--font-bricolage)] text-[0.5rem] font-medium uppercase tracking-[0.22em] text-black/22">
          Full Stack Developer — Morocco
        </span>
      </div>
    </section>
  );
}