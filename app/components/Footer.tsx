import Link from "next/link";

const COPY = {
  en: {
    tagline: "Freelance full stack web developer — Casablanca, Morocco",
    links: [
      { label: "Home", href: "/" },
      { label: "Web development", href: "/creation-site-web-maroc" },
      { label: "FAQ", href: "/faq" },
    ],
    rights: "All rights reserved",
  },
  fr: {
    tagline: "Développeur web full stack freelance — Casablanca, Maroc",
    links: [
      { label: "Accueil", href: "/fr" },
      { label: "Création de site web", href: "/creation-site-web-maroc" },
      { label: "FAQ", href: "/faq" },
    ],
    rights: "Tous droits réservés",
  },
};

export default function Footer({ lang = "en" }: { lang?: "en" | "fr" }) {
  const t = COPY[lang];
  const year = 2025;

  return (
    <footer className="w-full border-t border-white/10 bg-[#080808] px-6 py-10 md:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center border border-white/25 text-[0.6rem] font-extrabold tracking-widest text-white/70">
            MZ
          </span>
          <span className="text-[0.72rem] leading-snug text-white/40">
            {t.tagline}
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {t.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-[#e8ff47]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-[#e8ff47]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mouhcine7777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-[#e8ff47]"
          >
            GitHub
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-white/5 pt-6">
        <span className="text-[0.62rem] tracking-wide text-white/25">
          © {year} Mouhcine Zhirou. {t.rights}.
        </span>
      </div>
    </footer>
  );
}
