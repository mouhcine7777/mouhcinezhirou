import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      label: "Email",
      value: "mouhssinezhirou@gmail.com",
      href: "mailto:mouhssinezhirou@gmail.com",
      color: "from-red-500 to-orange-500",
      hoverColor: "hover:shadow-red-500/30"
    },
    {
      id: 2,
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+212 694 738 906",
      href: "https://api.whatsapp.com/send/?phone=%2B212694738906&text&type=phone_number&app_absent=0",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/30"
    },
    {
      id: 3,
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mouhcine Zhirou",
      href: "https://www.linkedin.com/in/mouhcine-zhirou-499a8a1b0/",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      id: 4,
      icon: Github,
      label: "GitHub",
      value: "@mouhcine7777",
      href: "https://github.com/mouhcine7777",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/30"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
  };

  const floatingTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-purple-500/20 rounded-full top-1/4 left-1/4"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border border-pink-500/20 rounded-full bottom-1/4 right-1/4"
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full filter blur-[150px] top-1/4 left-1/3 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-600/20 rounded-full filter blur-[150px] bottom-1/4 right-1/3 animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={floatingAnimation}
            transition={floatingTransition}
            className="inline-block mb-6"
          >
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              📬 Get In Touch
            </span>
          </motion.div>

          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Connect
            </span>
          </h2>

          <p className="font-montserrat text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-white/20 ${method.hoverColor} hover:shadow-xl overflow-hidden`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-center gap-4 md:gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <p className="font-montserrat text-xs md:text-sm text-gray-400 mb-1">
                        {method.label}
                      </p>
                      <p className="font-montserrat text-sm md:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 break-all md:break-normal">
                        {method.value}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="font-montserrat text-gray-300 mb-2">
              Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-purple-500/20 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-pink-500/20 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}