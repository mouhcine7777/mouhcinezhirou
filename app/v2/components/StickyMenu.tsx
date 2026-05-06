import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Mail, Menu, X } from 'lucide-react';

type Language = 'en' | 'fr';

export default function CreativeNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Navigation items with icons
  const navItems = [
    { 
      id: 'hero', 
      label: { en: 'Home', fr: 'Accueil' }, 
      icon: Home 
    },
    { 
      id: 'projects-section', 
      label: { en: 'Projects', fr: 'Projets' }, 
      icon: Briefcase 
    },
    { 
      id: 'contact', 
      label: { en: 'Contact', fr: 'Contact' }, 
      icon: Mail 
    }
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.id);
      const current = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Handle language change with actual navigation
  const switchLanguage = (lang: Language) => {
    const newPath = lang === 'fr' ? '/fr' : '/';
    window.location.href = newPath;
  };

  return (
    <>
      {/* Desktop Navigation - Floating Sidebar Style */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50"
      >
        <div className={`relative backdrop-blur-xl rounded-full p-2 border transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/90 border-purple-500/30 shadow-lg shadow-purple-500/20' 
            : 'bg-slate-900/50 border-white/10'
        }`}>
          {/* Active indicator background */}
          <motion.div
            layoutId="activeNav"
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
            style={{
              top: `${navItems.findIndex(item => item.id === activeSection) * 64}px`,
              height: '56px',
              width: '100%'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Navigation Items */}
          <div className="relative flex flex-col gap-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={(e) => handleScrollToSection(e, item.id)}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-slate-900 border border-purple-500/30 rounded-lg px-4 py-2 shadow-lg">
                      <span className="text-white font-medium text-sm">
                        {item.label[currentLang]}
                      </span>
                      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-900"></div>
                    </div>
                  </motion.div>
                </motion.button>
              );
            })}

            {/* Language Switcher - Visual Buttons */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <motion.button
                  onClick={() => switchLanguage('en')}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentLang === 'en'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}>
                    EN
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-slate-900 border border-blue-500/30 rounded-lg px-4 py-2 shadow-lg">
                      <span className="text-white font-medium text-sm">English</span>
                      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-900"></div>
                    </div>
                  </motion.div>
                </motion.button>

                <motion.button
                  onClick={() => switchLanguage('fr')}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentLang === 'fr'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}>
                    FR
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-slate-900 border border-red-500/30 rounded-lg px-4 py-2 shadow-lg">
                      <span className="text-white font-medium text-sm">Français</span>
                      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-900"></div>
                    </div>
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-lg' 
            : 'bg-slate-900/50 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              MZ
            </div>
            <span className="text-white font-bold text-lg">Mouhcine</span>
          </div>

          {/* Language Switcher & Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Visual Language Buttons */}
            <div className="flex gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  currentLang === 'en'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage('fr')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  currentLang === 'fr'
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400'
                }`}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-slate-900/95 backdrop-blur-xl"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="container mx-auto px-6 py-4 space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleScrollToSection(e, item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer touch-manipulation ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-white/5 text-gray-400 active:bg-white/10 active:text-white'
                      }`}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label[currentLang]}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Indicator - Desktop */}
      <motion.div
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
            >
              <motion.div
                className={`w-1 h-12 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-b from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                    : 'bg-white/20'
                }`}
              />
              {activeSection === item.id && (
                <motion.div
                  layoutId="scrollIndicator"
                  className="absolute -right-2 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-slate-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}