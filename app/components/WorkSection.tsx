import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Public Events Website",
      description: "A modern platform for discovering and managing public events with seamless user experience and dynamic content",
      url: "https://newpe-5j8u.vercel.app/",
      tags: ["Events", "Web App", "Real-time"],
      image: "/projects/pe-portfolio.jpeg"
    },
    {
      id: 2,
      title: "Parthenon Holding",
      description: "Corporate website showcasing investment portfolio and company vision with elegant design",
      url: "https://parthenonholding.vercel.app/",
      tags: ["Corporate", "Portfolio", "Business"],
      image: "/projects/parthenon-portfolio.jpeg"
    },
    {
      id: 3,
      title: "Ayta d'bladi Festival",
      description: "Cultural festival website celebrating local traditions with vibrant visuals and event information",
      url: "http://aytadbladi.com/",
      tags: ["Festival", "Culture", "Events"],
      image: "/projects/aytadbladi-portfolio.jpeg"
    },
    {
      id: 4,
      title: "Nostalgia Lovers Festival",
      description: "Retro-themed festival platform bringing together music lovers for an unforgettable experience",
      url: "https://nostalgialovers.ma/",
      tags: ["Music", "Festival", "Entertainment"],
      image: "/projects/nostalgia-portfolio.jpeg"
    },
    {
      id: 5,
      title: "Chiringuito Tanger",
      description: "Beach restaurant website featuring Mediterranean cuisine with stunning coastal views",
      url: "https://chiringuito-tanger.com/",
      tags: ["Restaurant", "Hospitality", "Food"],
      image: "/projects/Chiringuito-portfolio.jpeg"
    },
    {
      id: 6,
      title: "Palooza Park",
      description: "Entertainment park website with interactive features and booking system for family fun",
      url: "https://paloozaland.vercel.app/",
      tags: ["Entertainment", "Park", "Family"],
      image: "/projects/palooza-portfolio.jpeg"
    },
    {
      id: 7,
      title: "Alhabtoor City Hotels",
      description: "Luxury hotel chain website with elegant design, booking system, and premium experience",
      url: "https://alhabtoorcity.com/",
      tags: ["Hospitality", "Luxury", "Hotels"],
      image: "/projects/alhabtoorcity-portfolio.jpeg"
    },
    {
      id: 8,
      title: "Parthenon Project Manager",
      description: "Full-featured project management application with team collaboration and task tracking",
      url: "https://clickdown-mauve.vercel.app/",
      tags: ["SaaS", "Management", "Enterprise"],
      image: "/projects/clickdown-portflio.jpeg"
    },
    {
      id: 9,
      title: "ONMT Event App",
      description: "Confidential event management system for national tourism office with advanced features",
      url: null,
      tags: ["Government", "Events", "Confidential"],
      image: "/projects/onmt-portfolio.jpeg"
    },
    {
      id: 10,
      title: "Green Auto Expo",
      description: "Sustainable automotive exhibition platform promoting eco-friendly transportation solutions",
      url: "https://greenautoexpo.vercel.app/",
      tags: ["Automotive", "Sustainability", "Expo"],
      image: "/projects/greenauto-portfolio.jpeg"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div id="projects-section" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full filter blur-[150px] top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600/30 rounded-full filter blur-[150px] bottom-0 right-1/4 animate-pulse"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              💼 My Portfolio
            </span>
          </motion.div>
          
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          
          <p className="font-montserrat text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of web applications and websites I've crafted with passion and precision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 flex flex-col">

                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover ${!project.url ? 'grayscale' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80"></div>
                  
                  {/* Confidential overlay */}
                  {!project.url && (
                    <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                        <span className="text-gray-500 text-sm font-semibold">Confidential</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-6 z-20 flex-1 flex flex-col">
                  <h3 className={`font-montserrat text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 ${!project.url ? 'text-gray-500' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`font-montserrat text-sm mb-4 line-clamp-2 ${!project.url ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs backdrop-blur-sm transition-all duration-300 ${
                          !project.url 
                            ? 'bg-white/5 border border-white/10 text-gray-600' 
                            : 'bg-white/10 border border-white/20 text-gray-300 group-hover:bg-purple-500/20 group-hover:border-purple-400/40 group-hover:text-purple-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-auto">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-gray-500 rounded-lg font-semibold cursor-not-allowed border border-white/10"
                      >
                        <Lock className="w-4 h-4" />
                        Private Project
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="font-montserrat text-gray-400 mb-6 text-lg">
            Interested in working together?
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 font-montserrat px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            Let's Create Something Amazing
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}