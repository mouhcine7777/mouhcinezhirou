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

const projects = [
  { id: 1,  title: "Alhabtoor City Hotels",       description: "Luxury hotel chain website with elegant design, booking system, and premium experience.",               tags: ["Luxury", "Hotels"],         url: "https://alhabtoorcity.com/",              image: "/projects/alhabtoorcity-portfolio.jpeg" },
  { id: 2,  title: "Public Events Website",        description: "A modern platform for discovering and managing public events with seamless user experience.",            tags: ["Events", "Web App"],        url: "https://newpe-5j8u.vercel.app/",          image: "/projects/pe-portfolio.jpeg" },
  { id: 3,  title: "Adventure Road",               description: "Polaris Buggies Club in Marrakesh — thrilling off-road adventures through desert and mountains.",       tags: ["Adventure", "Marrakesh"],   url: "https://www.adventure-road.ma/",          image: "/projects/adventure-road-portfolio.jpeg" },
  { id: 4,  title: "Parthenon Holding",            description: "Corporate website showcasing investment portfolio and company vision with elegant design.",              tags: ["Corporate", "Business"],    url: "https://www.parthenon.ma",                image: "/projects/parthenon-portfolio.jpeg" },
  { id: 5,  title: "Nostalgia Lovers Festival",    description: "Retro-themed festival platform bringing together music lovers for an unforgettable experience.",        tags: ["Music", "Festival"],        url: "https://nostalgialovers.ma/",             image: "/projects/nostalgia-portfolio.jpeg" },
  { id: 6,  title: "Palooza Park",                 description: "Entertainment park website with interactive features and booking system for family fun.",               tags: ["Entertainment", "Family"],  url: "https://www.paloozaland.com",             image: "/projects/palooza-portfolio.jpeg" },
  { id: 7,  title: "Oxygen Village",               description: "A unique container hotel nestled in Midelt — nature, architecture and tranquility combined.",           tags: ["Hotel", "Eco", "Midelt"],   url: "https://oxygen-village.ma/",              image: "/projects/oxygen-portfolio.jpeg" },
  { id: 8,  title: "Garden Corner",                description: "Un univers pensé pour vivre, partager et profiter pleinement — a lifestyle destination.",               tags: ["Lifestyle", "Hospitality"], url: "https://gardencorner.vercel.app/",        image: "/projects/gardencorner-portfolio.jpeg" },
  { id: 9,  title: "Chiringuito Tanger",           description: "Beach restaurant website featuring Mediterranean cuisine with stunning coastal views.",                  tags: ["Restaurant", "Food"],       url: "https://chiringuito-tanger.com/",         image: "/projects/Chiringuito-portfolio.jpeg" },
  { id: 10, title: "Magic Garden Festival",        description: "Enchanting lights festival — a magical garden experience brought to life with stunning illuminations.",  tags: ["Festival", "Lights"],       url: "https://magicgarden.ma/",                 image: "/projects/magicgarden-portfolio.jpeg" },
  { id: 11, title: "Big District Dubai",           description: "Digital agency website designed to showcase services, portfolio and branding identity.",                 tags: ["Agency", "Branding"],       url: "https://bigdistrict.agency/",             image: "/projects/bigdistrict-portfolio.jpeg" },
  { id: 12, title: "Fanzone Arena CAN 2025",       description: "Official fanzone platform for Africa Cup of Nations 2025 with interactive features and live updates.",  tags: ["Sports", "Events"],         url: "https://fanzone-taupe.vercel.app",        image: "/projects/fanzone-portfolio.jpeg" },
  { id: 13, title: "Parthenon Project Manager",    description: "Full-featured project management application with team collaboration and task tracking.",               tags: ["SaaS", "Enterprise"],       url: "https://clickdown-mauve.vercel.app/",     image: "/projects/clickdown-portflio.jpeg" },
  { id: 14, title: "Ayta d'bladi Festival",        description: "Cultural festival website celebrating local traditions with vibrant visuals and event information.",     tags: ["Festival", "Culture"],      url: "http://aytadbladi.com/",                  image: "/projects/aytadbladi-portfolio.jpeg" },
  { id: 15, title: "Tangerino Restaurant",         description: "Authentic restaurant in Tanger and Rabat offering a rich culinary experience rooted in local flavors.", tags: ["Restaurant", "Food"],       url: "https://tangerino-restaurant.com/",       image: "/projects/tangerino-portfolio.jpeg" },
  { id: 16, title: "Le Guépard Tanger",            description: "An elegant restaurant in the heart of Tanger offering a refined dining experience.",                   tags: ["Restaurant", "Tanger"],     url: "http://leguepard-tanger.com/",           image: "/projects/leguepard-portfolio.jpeg" },
  { id: 17, title: "Garden Eataly",                description: "Italian restaurant and pizzeria offering an authentic taste of Italy with a garden-inspired atmosphere.", tags: ["Restaurant", "Italian"],    url: "https://gardeneataly.vercel.app",         image: "/projects/gardeneataly-portfolio.jpeg" },
  { id: 18, title: "ONMT Event App",               description: "Confidential event management system for national tourism office with advanced features.",               tags: ["Government", "Events"],     url: null,                                      image: "/projects/onmt-portfolio.jpeg" },
  { id: 19, title: "Green Auto Expo",              description: "Sustainable automotive exhibition platform promoting eco-friendly transportation solutions.",             tags: ["Automotive", "Expo"],       url: "https://greenautoexpo.vercel.app/",       image: "/projects/greenauto-portfolio.jpeg" },
  { id: 20, title: "Cash Smart Guide",             description: "Smart financial guidance platform helping users make informed decisions about personal finance.",         tags: ["Finance", "Smart Money"],   url: "https://cashsmartguide.com/",             image: "/projects/cashsmartguide-portfolio.jpeg" },
  { id: 21, title: "Garden Bake's",                description: "Artisan bakery offering freshly baked breads, pastries, and treats with a warm welcoming experience.",  tags: ["Bakery", "Artisan"],        url: "https://gardenbakes.vercel.app",          image: "/projects/gardenbakes-portfolio.jpeg" },
];

export default function WorkSection() {
  return (
    <section id="work" className={`${bricolage.variable} ${instrument.variable} w-full bg-[#080808]`}>

      {/* ── HEADER ── */}
      <div className="flex items-end justify-between border-b border-white/10 px-5 py-10 md:px-14 md:py-14">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-[#e8ff47]" />
            <span className="font-[family-name:var(--font-bricolage)] text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/35">
              Selected Work
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-bricolage)] font-extrabold leading-[0.88] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            Projects
          </h2>
          <h2
            className="font-[family-name:var(--font-instrument)] italic leading-[0.88] tracking-[-0.02em] text-white/30"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            & Work
          </h2>
        </div>
      </div>

      {/* ── GRID ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        style={{ border: "1px solid rgba(255,255,255,0.1)", borderBottom: "none", borderRight: "none" }}
      >
        {projects.map((project, index) => {
          const isNDA = !project.url;

          const card = (
            <div className="group flex flex-col border-b border-r border-white/10 bg-[#080808] transition-colors duration-300 hover:bg-[#0d0d0d]">

              {/* IMAGE */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1500/770" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 font-[family-name:var(--font-bricolage)] text-[0.46rem] font-semibold tracking-[0.2em] text-white/50">
                  {String(index + 1).padStart(2, "0")}
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
                    Confidential
                  </span>
                ) : (
                  <div className="mt-0.5 flex shrink-0 items-center gap-2 border border-white/20 px-3 py-2 transition-all duration-200 group-hover:border-white/40 group-hover:bg-white/5">
                    <span className="font-[family-name:var(--font-bricolage)] text-[0.48rem] font-bold uppercase tracking-[0.14em] text-white/70 transition-colors duration-200 group-hover:text-white">
                      Visit
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

      
    </section>
  );
}