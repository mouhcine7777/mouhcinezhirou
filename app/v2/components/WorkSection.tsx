import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Public Events Website",
      description: "A modern platform for discovering and managing public events with seamless user experience",
      url: "https://newpe-5j8u.vercel.app/",
      tags: ["Events", "Web App", "Real-time"],
      image: "/projects/pe-portfolio.jpeg",
    },
    {
      id: 2,
      title: "Parthenon Holding",
      description: "Corporate website showcasing investment portfolio and company vision with elegant design",
      url: "https://www.parthenon.ma",
      tags: ["Corporate", "Portfolio", "Business"],
      image: "/projects/parthenon-portfolio.jpeg",
    },
    {
      id: 3,
      title: "Adventure Road",
      description: "Polaris Buggies Club in Marrakesh thrilling off-road adventures through desert and mountain landscapes",
      url: "https://www.adventure-road.ma/",
      tags: ["Adventure", "Off-Road", "Marrakesh"],
      image: "/projects/adventure-road-portfolio.jpeg",
    },
    {
      id: 4,
      title: "Nostalgia Lovers Festival",
      description: "Retro-themed festival platform bringing together music lovers for an unforgettable experience",
      url: "https://nostalgialovers.ma/",
      tags: ["Music", "Festival", "Entertainment"],
      image: "/projects/nostalgia-portfolio.jpeg",
    },
    {
      id: 5,
      title: "Big District Dubai",
      description: "Digital agency website designed with a clean, modern look to showcase services, portfolio and branding identity",
      url: "https://bigdistrict.agency/",
      tags: ["Agency", "Digital", "Branding"],
      image: "/projects/bigdistrict-portfolio.jpeg",
    },
    {
      id: 6,
      title: "Garden Eataly",
      description: "Italian restaurant and pizzeria offering an authentic taste of Italy with a fresh, garden-inspired atmosphere",
      url: "https://gardeneataly.vercel.app",
      tags: ["Restaurant", "Italian", "Pizzeria"],
      image: "/projects/gardeneataly-portfolio.jpeg",
    },
    {
      id: 7,
      title: "Ayta d'bladi Festival",
      description: "Cultural festival website celebrating local traditions with vibrant visuals and event information",
      url: "http://aytadbladi.com/",
      tags: ["Festival", "Culture", "Events"],
      image: "/projects/aytadbladi-portfolio.jpeg",
    },
    {
      id: 8,
      title: "Chiringuito Tanger",
      description: "Beach restaurant website featuring Mediterranean cuisine with stunning coastal views",
      url: "https://chiringuito-tanger.com/",
      tags: ["Restaurant", "Hospitality", "Food"],
      image: "/projects/Chiringuito-portfolio.jpeg",
    },
    {
      id: 9,
      title: "Palooza Park",
      description: "Entertainment park website with interactive features and booking system for family fun",
      url: "https://www.paloozaland.com",
      tags: ["Entertainment", "Park", "Family"],
      image: "/projects/palooza-portfolio.jpeg",
    },
    {
      id: 10,
      title: "Alhabtoor City Hotels",
      description: "Luxury hotel chain website with elegant design, booking system, and premium experience",
      url: "https://alhabtoorcity.com/",
      tags: ["Hospitality", "Luxury", "Hotels"],
      image: "/projects/alhabtoorcity-portfolio.jpeg",
    },
    {
      id: 11,
      title: "Garden Bake's",
      description: "Artisan bakery offering freshly baked breads, pastries, and treats with a warm and welcoming experience",
      url: "https://gardenbakes.vercel.app",
      tags: ["Bakery", "Food", "Artisan"],
      image: "/projects/gardenbakes-portfolio.jpeg",
    },
    {
      id: 12,
      title: "Tangerino Tanger & Rabat",
      description: "Authentic restaurant with locations in Tanger and Rabat, offering a rich culinary experience rooted in local flavors",
      url: "https://tangerino-restaurant.com/",
      tags: ["Restaurant", "Hospitality", "Food"],
      image: "/projects/tangerino-portfolio.jpeg",
    },
    {
      id: 13,
      title: "Magic Garden Festival",
      description: "Enchanting lights festival — a magical garden experience brought to life with stunning illuminations",
      url: "https://magicgarden.ma/",
      tags: ["Festival", "Lights", "Entertainment"],
      image: "/projects/magicgarden-portfolio.jpeg",
    },
    {
      id: 14,
      title: "Parthenon Project Manager",
      description: "Full-featured project management application with team collaboration and task tracking",
      url: "https://clickdown-mauve.vercel.app/",
      tags: ["SaaS", "Management", "Enterprise"],
      image: "/projects/clickdown-portflio.jpeg",
    },
    {
      id: 15,
      title: "Green Auto Expo",
      description: "Sustainable automotive exhibition platform promoting eco-friendly transportation solutions",
      url: "https://greenautoexpo.vercel.app/",
      tags: ["Automotive", "Sustainability", "Expo"],
      image: "/projects/greenauto-portfolio.jpeg",
    },
    {
      id: 16,
      title: "ONMT Event App",
      description: "Confidential event management system for national tourism office with advanced features",
      url: null,
      tags: ["Government", "Events", "Confidential"],
      image: "/projects/onmt-portfolio.jpeg",
    },
    {
      id: 17,
      title: "Fanzone Arena CAN 2025",
      description: "Official fanzone platform for Africa Cup of Nations 2025 with interactive features and live updates",
      url: "https://fanzone-taupe.vercel.app",
      tags: ["Sports", "Events", "Entertainment"],
      image: "/projects/fanzone-portfolio.jpeg",
    },
    {
      id: 18,
      title: "Cash Smart Guide",
      description: "Smart financial guidance platform helping users make informed decisions about money and personal finance",
      url: "https://cashsmartguide.com/",
      tags: ["Finance", "Guide", "Smart Money"],
      image: "/projects/cashsmartguide-portfolio.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <div
      id="projects-section"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] -top-24 left-[15%] animate-pulse pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] -bottom-24 right-[15%] animate-pulse pointer-events-none" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-[72px]"
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-block mb-5"
          >
            <span className="font-montserrat px-5 py-[6px] bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300/85 text-sm font-medium tracking-wide backdrop-blur-sm">
              My Portfolio
            </span>
          </motion.div>

          <h2 className="font-montserrat text-5xl md:text-6xl font-extrabold text-white mb-5 leading-[1.05] tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="font-montserrat text-lg text-slate-400/80 max-w-[520px] mx-auto leading-relaxed font-normal">
            A collection of web applications and websites I've crafted with passion and precision
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => {
            const isLocked = !project.url;

            const cardClasses = [
              'group relative rounded-[20px] overflow-hidden flex flex-col',
              'bg-white/[0.04] border border-white/10',
              'transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              isLocked
                ? 'opacity-55 cursor-not-allowed'
                : 'cursor-pointer hover:-translate-y-2 hover:scale-[1.012] hover:border-violet-400/45 hover:shadow-[0_32px_64px_rgba(139,92,246,0.18),0_0_0_1px_rgba(167,139,250,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]',
            ].join(' ');

            const inner = (
              <div className={cardClasses} style={{ height: '100%' }}>

                {/* Glow overlay */}
                {!isLocked && (
                  <div className="absolute inset-[-1px] rounded-[21px] bg-gradient-to-br from-violet-400/15 via-pink-400/8 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0 pointer-events-none" />
                )}

                {/* Image — 1500×713 ratio */}
                <div className="relative w-full overflow-hidden flex-shrink-0 bg-slate-800" style={{ paddingTop: '47.53%' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={[
                      'absolute inset-0 w-full h-full object-cover object-top',
                      isLocked
                        ? 'grayscale brightness-[0.3]'
                        : 'brightness-[0.88] saturate-90',
                    ].join(' ')}
                  />
                  {/* Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[rgba(10,15,28,0.9)] to-transparent z-[1] pointer-events-none" />

                  {/* Lock overlay */}
                  {isLocked && (
                    <div className="absolute inset-0 z-[4] flex items-center justify-center bg-slate-900/60">
                      <div className="flex flex-col items-center gap-2">
                        <Lock size={22} color="rgba(148,163,184,0.5)" />
                        <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-slate-400/60 font-semibold">
                          Confidential
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="relative z-[2] flex flex-col flex-1 p-5 border-t border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent group-hover:border-t-violet-400/20 transition-colors duration-300">

                  {/* Shimmer bar */}
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-violet-400 to-pink-400 via-transparent transition-[width] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3 mb-[10px]">
                    <h3
                      className={[
                        'font-montserrat text-base font-bold leading-snug tracking-tight transition-colors duration-300',
                        isLocked ? 'text-slate-400/40' : 'text-white/90 group-hover:text-white',
                      ].join(' ')}
                    >
                      {project.title}
                    </h3>
                    <div
                      className={[
                        'flex-shrink-0 w-[34px] h-[34px] rounded-full border flex items-center justify-center transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isLocked
                          ? 'border-white/10 bg-white/[0.04] text-white/20'
                          : 'border-white/12 bg-white/[0.04] text-white/30 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-purple-500 group-hover:border-transparent group-hover:text-white group-hover:scale-110 group-hover:-rotate-[5deg] group-hover:shadow-[0_8px_20px_rgba(124,58,237,0.4)]',
                      ].join(' ')}
                    >
                      {isLocked ? <Lock size={13} /> : <ArrowUpRight size={14} />}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={[
                      'font-montserrat text-[12.5px] leading-relaxed font-normal mb-4 transition-colors duration-300',
                      isLocked ? 'text-slate-400/25' : 'text-slate-400/65 group-hover:text-slate-400/90',
                    ].join(' ')}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-[6px] mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={[
                          'font-montserrat text-[10px] font-medium tracking-wide px-[10px] py-1 rounded-full border transition-all duration-300',
                          isLocked
                            ? 'bg-white/[0.03] border-white/[0.06] text-slate-400/25'
                            : 'bg-white/[0.06] border-white/10 text-slate-400/70 group-hover:bg-purple-500/12 group-hover:border-violet-400/30 group-hover:text-violet-300',
                        ].join(' ')}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer button */}
                  <div className="mt-4 pt-[14px] border-t border-white/[0.06] group-hover:border-violet-400/15 transition-colors duration-300">
                    {isLocked ? (
                      <div className="font-montserrat flex items-center justify-center gap-2 w-full py-[11px] px-4 rounded-[10px] bg-white/[0.03] border border-white/[0.07] text-slate-400/30 text-xs font-semibold tracking-wide cursor-not-allowed">
                        <Lock size={12} />
                        Private Project
                      </div>
                    ) : (
                      <div className="font-montserrat flex items-center justify-center gap-2 w-full py-[11px] px-4 rounded-[10px] bg-white/[0.05] border border-white/10 text-white/65 text-xs font-semibold tracking-wide transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-gradient-to-r group-hover:from-violet-600/35 group-hover:to-purple-500/25 group-hover:border-violet-400/50 group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(124,58,237,0.2)]">
                        View Project
                        <ExternalLink size={13} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div key={project.id} variants={cardVariants} style={{ height: '100%' }}>
                {isLocked ? (
                  inner
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {inner}
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-montserrat text-lg text-slate-400/70 mb-6 font-normal">
            Interested in working together?
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat inline-flex items-center gap-[10px] px-9 py-4 bg-gradient-to-r from-violet-600 to-purple-500 text-white text-[15px] font-bold rounded-xl tracking-wide shadow-[0_8px_32px_rgba(124,58,237,0.3)] hover:shadow-[0_20px_48px_rgba(124,58,237,0.45)] transition-shadow duration-300"
          >
            Let's Create Something Amazing
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}