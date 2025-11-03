import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const itemTransition = {
    duration: 0.8,
    ease: "easeOut" as const
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Minimal glow accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] top-0 left-1/4 -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px] bottom-0 right-1/4 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} transition={itemTransition} className="mb-8">
          <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          transition={itemTransition}
          className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            Mouhcine Zhirou
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          transition={itemTransition}
          className="font-montserrat text-xl md:text-2xl lg:text-3xl text-gray-300 text-center mb-8 max-w-3xl"
        >
          Full Stack Web Developer
        </motion.p>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          transition={itemTransition}
          className="font-montserrat text-base md:text-lg text-gray-400 text-center mb-12 max-w-2xl"
        >
          I craft beautiful, responsive websites and web applications with modern technologies. 
          Let's build something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          transition={itemTransition}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects-section');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300 cursor-pointer"
          >
            View My Work
          </motion.button>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div 
          variants={itemVariants}
          transition={itemTransition}
          className="flex flex-wrap justify-center gap-6"
        >
          {['⚛️', '📱', '🎨', '⚡'].map((emoji, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl">{emoji}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={floatingAnimation}
          transition={floatingTransition}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}