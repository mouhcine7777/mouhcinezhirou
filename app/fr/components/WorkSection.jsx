import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { useState, useRef } from "react";

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

const projects = [
  { id: 1,  title: "Alhabtoor City Hotels",       description: "Site web d'une chaîne hôtelière de luxe avec un design élégant, un système de réservation et une expérience haut de gamme.",               tags: ["Luxe", "Hôtels"],           url: "https://alhabtoorcity.com/",              image: "/projects/alhabtoorcity-portfolio.jpeg" },
  { id: 2,  title: "Adventure Road",               description: "Club Polaris Buggies à Marrakech — aventures tout-terrain palpitantes à travers le désert et les montagnes.",                              tags: ["Aventure", "Marrakech"],    url: "https://www.adventure-road.ma/",          image: "/projects/adventure-road-portfolio.jpeg" },
  { id: 3,  title: "Palooza Park",                 description: "Site web de parc de loisirs avec des fonctionnalités interactives et un système de réservation pour le plaisir en famille.",              tags: ["Loisirs", "Famille"],       url: "https://www.paloozaland.com",             image: "/projects/palooza-portfolio.jpeg" },
  { id: 4,  title: "Parthenon Holding",            description: "Site web corporate présentant le portefeuille d'investissements et la vision de l'entreprise avec un design raffiné.",                    tags: ["Corporate", "Business"],    url: "https://www.parthenon.ma",                image: "/projects/parthenon-portfolio.jpeg" },
  { id: 5,  title: "Nostalgia Lovers Festival",    description: "Plateforme de festival rétro réunissant les amateurs de musique pour une expérience inoubliable.",                                        tags: ["Musique", "Festival"],      url: "https://nostalgialovers.ma/",             image: "/projects/nostalgia-portfolio.jpeg" },
  { id: 6,  title: "Oxygen Village",               description: "Un hôtel en containers unique niché à Midelt — nature, architecture et tranquillité réunies.",                                            tags: ["Hôtel", "Éco", "Midelt"],   url: "https://oxygen-village.ma/",              image: "/projects/oxygen-portfolio.jpeg" },
  { id: 7,  title: "Garden Corner",                description: "Un univers pensé pour vivre, partager et profiter pleinement — une destination lifestyle.",                                               tags: ["Lifestyle", "Hospitalité"], url: "https://gardencorner.ma/",        image: "/projects/gardencorner-portfolio.jpeg" },
  { id: 8,  title: "Public Events Website",        description: "Une plateforme moderne pour découvrir et gérer des événements publics avec une expérience utilisateur fluide.",                             tags: ["Événements", "Web App"],    url: "https://newpe-5j8u.vercel.app/",          image: "/projects/pe-portfolio.jpeg" },
  { id: 9,  title: "Chiringuito Tanger",           description: "Site web de restaurant de plage proposant une cuisine méditerranéenne avec une vue côtière époustouflante.",                              tags: ["Restaurant", "Cuisine"],    url: "https://chiringuito-tanger.com/",         image: "/projects/Chiringuito-portfolio.jpeg" },
  { id: 10, title: "Magic Garden Festival",        description: "Festival d'illuminations enchanteresses — une expérience magique dans un jardin féerique aux lumières éblouissantes.",                   tags: ["Festival", "Lumières"],     url: "https://magicgarden.ma/",                 image: "/projects/magicgarden-portfolio.jpeg" },
  { id: 11, title: "Big District Dubai",           description: "Site web d'agence digitale conçu pour présenter les services, le portfolio et l'identité de marque.",                                    tags: ["Agence", "Branding"],       url: "https://bigdistrict.agency/",             image: "/projects/bigdistrict-portfolio.jpeg" },
  { id: 12, title: "Fanzone Arena CAN 2025",       description: "Plateforme officielle de la fanzone pour la CAN 2025 avec des fonctionnalités interactives et des mises à jour en direct.",              tags: ["Sport", "Événements"],      url: "https://fanzone-taupe.vercel.app",        image: "/projects/fanzone-portfolio.jpeg" },
  { id: 13, title: "Parthenon Project Manager",    description: "Application complète de gestion de projets avec collaboration d'équipe et suivi des tâches.",                                            tags: ["SaaS", "Entreprise"],       url: "https://clickdown-mauve.vercel.app/",     image: "/projects/clickdown-portflio.jpeg" },
  { id: 14, title: "Ayta d'bladi Festival",        description: "Site web de festival culturel célébrant les traditions locales avec des visuels vibrants et des informations sur les événements.",       tags: ["Festival", "Culture"],      url: "http://aytadbladi.com/",                  image: "/projects/aytadbladi-portfolio.jpeg" },
  { id: 15, title: "Tangerino Restaurant",         description: "Restaurant authentique à Tanger et Rabat offrant une riche expérience culinaire ancrée dans les saveurs locales.",                       tags: ["Restaurant", "Cuisine"],    url: "https://tangerino-restaurant.com/",       image: "/projects/tangerino-portfolio.jpeg" },
  { id: 16, title: "Le Guépard Tanger",            description: "Un restaurant élégant au cœur de Tanger offrant une expérience gastronomique raffinée.",                                                 tags: ["Restaurant", "Tanger"],     url: "http://leguepard-tanger.com/",            image: "/projects/leguepard-portfolio.jpeg" },
  { id: 17, title: "Garden Eataly",                description: "Restaurant et pizzeria italien proposant une expérience authentique avec une atmosphère inspirée des jardins.",                           tags: ["Restaurant", "Italien"],    url: "https://gardeneataly.vercel.app",         image: "/projects/gardeneataly-portfolio.jpeg" },
  { id: 18, title: "ONMT Event App",               description: "Système confidentiel de gestion d'événements pour l'office national du tourisme avec des fonctionnalités avancées.",                     tags: ["Gouvernement", "Événements"], url: null,                                    image: "/projects/onmt-portfolio.jpeg" },
  { id: 19, title: "Green Auto Expo",              description: "Plateforme d'exposition automobile durable promouvant des solutions de transport écologiques.",                                           tags: ["Automobile", "Expo"],       url: "https://greenautoexpo.vercel.app/",       image: "/projects/greenauto-portfolio.jpeg" },
  { id: 20, title: "Cash Smart Guide",             description: "Plateforme de conseil financier intelligent aidant les utilisateurs à prendre des décisions éclairées sur leurs finances personnelles.",  tags: ["Finance", "Gestion"],       url: "https://cashsmartguide.com/",             image: "/projects/cashsmartguide-portfolio.jpeg" },
  { id: 21, title: "Garden Bake's",                description: "Boulangerie artisanale proposant pains, pâtisseries et gourmandises fraîchement préparés dans une atmosphère chaleureuse.",              tags: ["Boulangerie", "Artisan"],   url: "https://gardenbakes.vercel.app",          image: "/projects/gardenbakes-portfolio.jpeg" },
];

const PROJECTS_PER_PAGE = 9;

export default function WorkSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    setTimeout(() => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }, 0);
  };

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className={`${bricolage.variable} ${instrument.variable} w-full bg-[#080808]`}
    >

      {/* ── HEADER ── */}
      <div className="flex items-end justify-between border-b border-white/10 px-5 py-10 md:px-14 md:py-14">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[#e8ff47]" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/35">
              Mes Réalisations
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            Projets
          </h2>
          <h2
            className="font-[family-name:var(--font-instrument)] italic leading-[0.88] tracking-[-0.02em] text-white/30"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            & Travaux
          </h2>
          <p className="mt-5 max-w-md font-[family-name:var(--font-bricolage)] text-sm leading-relaxed text-white/40">
            Sites web, boutiques e-commerce et applications — conçus et développés pour des marques au Maroc et à l&apos;international.
          </p>
        </div>
        
        {/* Page indicator */}
        <div className="hidden md:block">
          <span className="font-[family-name:var(--font-bricolage)] text-sm text-white/40">
            Page {currentPage} sur {totalPages}
          </span>
        </div>
      </div>

      {/* ── GRID ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        style={{ border: "1px solid rgba(255,255,255,0.1)", borderBottom: "none", borderRight: "none" }}
      >
        {currentProjects.map((project, index) => {
          const isNDA = !project.url;
          const globalIndex = startIndex + index;

          const card = (
            <div className="group flex flex-col border-b border-r border-white/10 bg-[#080808] transition-colors duration-300 hover:bg-[#0d0d0d]">

              {/* IMAGE */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1500/770" }}>
                <img
                  src={project.image}
                  alt={`${project.title} — site web conçu et développé par Mouhcine Zhirou, développeur web full stack freelance`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 font-[family-name:var(--font-bricolage)] text-[0.46rem] font-semibold tracking-[0.2em] text-white/50">
                  {String(globalIndex + 1).padStart(2, "0")}
                </span>
                {isNDA && (
                  <span className="absolute right-3 top-3 border border-white/10 bg-black/60 px-2.5 py-1 font-[family-name:var(--font-bricolage)] text-[0.42rem] font-bold uppercase tracking-[0.16em] text-white/30 backdrop-blur-sm">
                    NDA
                  </span>
                )}
              </div>

              {/* INFO BAR */}
              <div className="flex items-start justify-between gap-4 px-4 py-4 md:px-5 md:py-5">
                <div className="flex min-w-0 flex-col gap-2">
                  <h3
                    className="font-[family-name:var(--font-bricolage)] font-bold leading-tight tracking-[-0.02em] text-white/80 transition-colors duration-300 group-hover:text-white"
                    style={{ fontSize: "clamp(0.82rem, 1.4vw, 1rem)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-[family-name:var(--font-bricolage)] text-[0.62rem] font-normal leading-[1.6] text-white/35 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/[0.08] px-2 py-0.5 font-[family-name:var(--font-bricolage)] text-[0.4rem] font-semibold uppercase tracking-[0.12em] text-white/22"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {isNDA ? (
                  <span className="mt-0.5 shrink-0 font-[family-name:var(--font-bricolage)] text-[0.44rem] font-semibold uppercase tracking-[0.18em] text-white/20">
                    Confidentiel
                  </span>
                ) : (
                  <div className="mt-0.5 flex shrink-0 items-center gap-2 border border-white/20 px-3 py-2 transition-all duration-200 group-hover:border-white/40 group-hover:bg-white/5">
                    <span className="font-[family-name:var(--font-bricolage)] text-[0.48rem] font-bold uppercase tracking-[0.14em] text-white/70 transition-colors duration-200 group-hover:text-white">
                      Visiter
                    </span>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeOpacity="0.7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );

          if (isNDA) return <div key={project.id}>{card}</div>;

          return (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              {card}
            </a>
          );
        })}
      </div>

      {/* ── PAGINATION ── */}
      <div className="flex items-center justify-center gap-2 px-5 py-10 md:px-14 md:py-14">

        {/* Précédent */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 border px-2.5 py-1 md:gap-2 md:px-4 md:py-2 font-[family-name:var(--font-bricolage)] text-[0.44rem] md:text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
            currentPage === 1
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-white/30 text-white/70 hover:border-white/60 hover:bg-white/5 hover:text-white"
          }`}
        >
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="md:w-3 md:h-3">
            <path d="M7 3L4 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Précédent
        </button>

        {/* Page numbers — unchanged */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isFirst = page === 1;
            const isLast = page === totalPages;
            const isCurrent = page === currentPage;
            const isNeighbor = Math.abs(page - currentPage) === 1;
            
            if (isFirst || isLast || isCurrent || isNeighbor) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`h-8 w-8 font-[family-name:var(--font-bricolage)] text-sm font-semibold transition-all duration-200 ${
                    isCurrent
                      ? "bg-[#e8ff47] text-black"
                      : "text-white/50 hover:bg-white/10 hover:text-white/80"
                  }`}
                >
                  {page}
                </button>
              );
            }
            
            if (page === currentPage - 2 && page > 2) {
              return <span key={page} className="text-white/30">...</span>;
            }
            if (page === currentPage + 2 && page < totalPages - 1) {
              return <span key={page} className="text-white/30">...</span>;
            }
            
            return null;
          })}
        </div>

        {/* Suivant */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 border px-2.5 py-1 md:gap-2 md:px-4 md:py-2 font-[family-name:var(--font-bricolage)] text-[0.44rem] md:text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
            currentPage === totalPages
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-white/30 text-white/70 hover:border-white/60 hover:bg-white/5 hover:text-white"
          }`}
        >
          Suivant
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="md:w-3 md:h-3">
            <path d="M5 3L8 6L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile page indicator */}
      <div className="pb-8 text-center md:hidden">
        <span className="font-[family-name:var(--font-bricolage)] text-xs text-white/40">
          Page {currentPage} sur {totalPages}
        </span>
      </div>
    </section>
  );
}