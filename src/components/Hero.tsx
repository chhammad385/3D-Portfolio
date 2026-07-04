import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Code, Database, ChevronDown } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Hero({ activeSection }: { activeSection?: string }) {
  const nameLetters = "Hammad".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
          type: "spring" as const,
        damping: 12,
        stiffness: 120,
      },
    },
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    alert("CV Download started! (Mock)");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full glow-sphere-1 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full glow-sphere-2 blur-3xl -z-10"></div>
      
      {/* Star Field effect */}
      <div className="absolute inset-0 bg-stars opacity-40 -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text column */}
        <div className="lg:col-span-6 space-y-6 text-left relative z-10 lg:pr-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-violet-400 font-semibold text-sm md:text-base tracking-wider uppercase"
          >
            <span>Hello, I'm</span>
          </motion.div>

          <div className="relative select-none h-[66px] sm:h-[80px] md:h-[112px] flex flex-col justify-center">
            {/* Screen-reader-friendly accessible text for SEO */}
            <h1 className="sr-only">Hammad</h1>

            {/* Typographic animated name - Letter by Letter */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            className="signature-title inline-flex items-center whitespace-nowrap px-3 pt-2 pb-4 text-[2.95rem] sm:text-[5.15rem] md:text-[5.95rem] tracking-wide leading-none bg-gradient-to-r from-violet-300 via-violet-100 to-indigo-200 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 35px rgba(168,85,247,0.4)" }}
            >
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block hover:text-violet-300 transition-colors duration-200 cursor-default"
                  whileHover={{ y: -10, scale: 1.1, transition: { duration: 0.15 } }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Glowing laser underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              style={{ originX: 0 }}
              transition={{ delay: 1.2, duration: 1.0, ease: "easeOut" }}
              className="absolute bottom-0 left-2 h-[4px] bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)] w-[55%] md:w-[73%]"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight"
          >
            Full Stack <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Web Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-light"
          >
            I build scalable web applications, enterprise systems and AI-powered solutions with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-0.5 cursor-pointer btn-view-work"
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3.5 rounded-full bg-transparent hover:bg-violet-600/10 border border-violet-500/40 hover:border-violet-400 text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer btn-download-cv"
            >
              Download CV
            </button>
          </motion.div>

          <motion.button
            onClick={handleScrollToProjects}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:flex items-center space-x-2 text-xs text-gray-500 hover:text-violet-400 font-semibold tracking-widest uppercase pt-12 transition-colors cursor-pointer"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 text-violet-500 animate-bounce" />
          </motion.button>
        </div>

        {/* Right 3D Avatar & Floating cards Column */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[450px] md:h-[550px] w-full lg:pl-4">
          
          {/* Main 3D Avatar Image with glass frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-violet-500/30 bg-gradient-to-b from-indigo-950/20 to-black/40 backdrop-blur-sm shadow-2xl shadow-indigo-500/10 flex items-center justify-center"
          >
            {activeSection === "hero" ? (
              <HammadAvatar mode="hero" />
            ) : (
              <div className="w-full h-full" />
            )}
          </motion.div>

          {/* Floating Card: Code snippet (Java) */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="absolute -top-12 sm:top-4 right-2 sm:-right-8 lg:-right-2 lg:translate-x-2 xl:translate-x-4 z-20 w-[220px] sm:w-[240px] scale-[0.85] sm:scale-100 origin-top-right bg-slate-950/80 backdrop-blur-xl border border-indigo-950 rounded-xl p-4 shadow-2xl shadow-black/60 font-mono text-left text-[11px]"
          >
            <div className="flex items-center justify-between border-b border-indigo-950 pb-2 mb-2">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-gray-500 text-[9px] font-sans">Hammad.java</span>
            </div>
            <p className="text-pink-400">public class <span className="text-indigo-300">Hammad</span> &#123;</p>
            <p className="text-pink-400 pl-4">public static void <span className="text-indigo-300">main</span>(String[] args) &#123;</p>
            <p className="text-cyan-400 pl-8">System.out.println(</p>
            <p className="text-amber-300 pl-12">"Building Great Things!"</p>
            <p className="text-cyan-400 pl-8">);</p>
            <p className="text-pink-400 pl-4">&#125;</p>
            <p className="text-pink-400">&#125;</p>
          </motion.div>

          {/* Floating Pill 1: Spring Boot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-16 right-0 md:right-4 z-20 flex items-center space-x-2 bg-emerald-950/45 backdrop-blur-md border border-emerald-500/30 px-4 py-2.5 rounded-full shadow-lg shadow-emerald-950/20"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Code className="w-3 h-3 text-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-emerald-300">Spring Boot</span>
          </motion.div>

          {/* Floating Pill 2: MySQL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-28 left-0 md:left-4 z-20 flex items-center space-x-2 bg-sky-950/45 backdrop-blur-md border border-sky-500/30 px-4 py-2.5 rounded-full shadow-lg shadow-sky-950/20"
          >
            <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center">
              <Database className="w-3 h-3 text-sky-400" />
            </div>
            <span className="text-xs font-semibold text-sky-300">MySQL</span>
          </motion.div>

          {/* Abstract Floating Rings/Paths */}
          <div className="absolute inset-0 pointer-events-none border border-dashed border-violet-500/10 rounded-full scale-105 animate-[spin_50s_linear_infinite] -z-10"></div>
          <div className="absolute inset-0 pointer-events-none border border-violet-500/5 rounded-full scale-110 animate-[spin_80s_linear_infinite] -z-10"></div>
        </div>

      </div>
    </section>
  );
}
