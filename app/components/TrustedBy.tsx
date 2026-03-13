import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBySection() {
  const logos = [
    { src: '/logos/bigdistrict.png', alt: 'Big District' },
    { src: '/logos/pe.png', alt: 'Public Events' },
    { src: '/logos/nostalgialovers.webp', alt: 'Nostalgia Lovers' },
    { src: '/logos/chiringuito.png', alt: 'Chiringuito' },
    { src: '/logos/tangerino.png', alt: 'Tangerino' },
    { src: '/logos/ayta.png', alt: 'Ayta' },
    { src: '/logos/parthenon.png', alt: 'Parthenon' },
    { src: '/logos/alhabtoor.svg', alt: 'Alhabtoor' },
    { src: '/logos/gardenbakes.png', alt: 'Garden Bakes' },
    { src: '/logos/palooza.png', alt: 'Palooza' }
  ];

  // Quadruple logos for truly seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              Trusted Partners
            </span>
          </motion.div>
          
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Trusted By </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Amazing Brands
            </span>
          </h2>
          
          <p className="font-montserrat text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Proud to have collaborated with these incredible companies
          </p>
        </motion.div>

        {/* Logos Slider */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{
                x: ["0%", "-25%"]
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              className="flex gap-16 items-center min-w-max"
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}