import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const glowX = useTransform(springX, (v) => `${v}px`);
  const glowY = useTransform(springY, (v) => `${v}px`);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'];

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' as const } },
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center"
    >
      {/* ── Cursor-reactive glow ── */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Static ambient glows ── */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-pink-600/5 blur-[160px] pointer-events-none" />

      {/* ── Noise grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* ── Thin horizontal rule at top ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent origin-left"
      />

      {/* ── Main content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24"
      >
        {/* Top row: badge + availability dot */}
        <motion.div variants={fadeUp} className="flex items-center justify-between mb-10 md:mb-14">
          <span className="font-montserrat inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
            <Sparkles size={11} className="text-purple-400" />
            Full Stack Developer
          </span>

          <span className="font-montserrat hidden md:inline-flex items-center gap-2 text-xs text-gray-500 font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            Available for work
          </span>
        </motion.div>

        {/* ── Giant name — the hero moment ── */}
        <motion.div variants={fadeUp} className="mb-6 overflow-hidden">
          <h1 className="font-montserrat font-black leading-[0.85] tracking-[-0.04em] text-[clamp(52px,11vw,148px)]">
            <span className="block text-white">Mouhcine</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Zhirou
            </span>
          </h1>
        </motion.div>

        {/* ── Two-column lower section ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mt-8 lg:mt-12">

          {/* Left: tagline + skills */}
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              className="font-montserrat text-lg md:text-xl text-gray-400 leading-relaxed mb-8 font-light"
            >
              I craft{' '}
              <span className="text-white font-semibold">beautiful, fast</span> websites &
              web applications. Every pixel intentional — every interaction considered.
            </motion.p>

            {/* Skill pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-montserrat text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] text-gray-400 hover:bg-purple-500/15 hover:text-purple-300 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: CTAs + counter */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5 lg:items-end">



            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-montserrat group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-sm font-bold rounded-xl tracking-wide shadow-[0_8px_32px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] transition-shadow duration-300"
              >
                View My Work
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.07] backdrop-blur-sm text-white text-sm font-bold rounded-xl tracking-wide hover:bg-white/[0.12] transition-all duration-300"
              >
                Get In Touch
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Decorative divider line ── */}
        <motion.div
          variants={fadeIn}
          className="mt-16 md:mt-20 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* ── Bottom row: role tags ── */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex flex-wrap gap-3">
            {['Frontend Dev', 'Backend Dev', 'Web Design'].map((role) => (
              <span
                key={role}
                className="font-montserrat text-[10px] text-gray-600 font-medium tracking-[0.15em] uppercase"
              >
                {role}
              </span>
            ))}
          </div>
          <span className="font-montserrat text-[10px] text-gray-600 tracking-[0.15em] uppercase font-medium">
            Casablanca, Morocco
          </span>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent"
        />
        <span className="font-montserrat text-[9px] text-gray-600 tracking-[0.25em] uppercase">Scroll</span>
      </motion.div>
    </div>
  );
}