import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

interface HammadAvatarProps {
  mode: "hero" | "about" | "skills" | "projects" | "education" | "certificates" | "contact" | "footer";
}

const DIALOGUES: Record<string, string[]> = {
  hero: [
    "Hey there! I'm Hammad. Let's create something extraordinary!",
    "Full-Stack Web Developer. Code, Build, Deploy!",
    "I focus on writing clean, scalable, and highly optimized code.",
    "Ready to turn your complex ideas into functional realities?"
  ],
  about: [
    "A good cup of coffee and a terminal are my constant companions.",
    "I love solving real-world challenges through clever design.",
    "Constant learning is my core philosophy. Every project is an upgrade.",
    "I believe a stunning interface should match high-performance logic."
  ],
  skills: [
    "Here is my core technological arsenal!",
    "Fluent in Java, Spring Boot, React, and modern databases.",
    "Always keeping my developer inventory sharp and up to date.",
    "I choose the absolute best tool for each specific challenge."
  ],
  projects: [
    "These are some of my proudest creations!",
    "From desktop applications to secure, enterprise web systems.",
    "Hover over any project card to discover its inner tech stack.",
    "Each line of code is written with absolute precision and modularity."
  ],
  education: [
    "COMSATS University is where my computer science journey expanded.",
    "Theory meets practice in every single application I develop.",
    "Academic excellence combined with hands-on software building.",
    "Learning is a lifelong compiling process that never stops!"
  ],
  certificates: [
    "Validated skills from elite learning platforms.",
    "WordPress development, Java algorithms, and advanced frontend architectures.",
    "Continuous growth through structured certifications.",
    "My skills are verified, tested, and ready to deploy!"
  ],
  contact: [
    "Let's build something amazing together!",
    "Have a project in mind? Drop me a message right here.",
    "I am available for both full-time roles and premium freelance projects.",
    "I'll get back to your inquiry in less than 24 hours!"
  ],
  footer: [
    "Thank you so much for exploring my portfolio!",
    "Let's connect on LinkedIn or check out my GitHub projects.",
    "Have an absolutely amazing day coding and creating!",
    "Until next time! Keep pushing boundaries! 👋"
  ]
};

export default function HammadAvatar({ mode }: HammadAvatarProps) {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showDialogue, setShowDialogue] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isHero = mode === "hero";

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowDialogue(true);
    }, 1800);

    const cycleTimer = setInterval(() => {
      setDialogueIndex((prev) => (prev + 1) % (DIALOGUES[mode]?.length || 1));
      setShowDialogue(true);
      setTimeout(() => setShowDialogue(false), 6000);
    }, 14000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [mode]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // Range -1 to 1
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // Range -1 to 1
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleClickAvatar = () => {
    setDialogueIndex((prev) => (prev + 1) % (DIALOGUES[mode]?.length || 1));
    setShowDialogue(true);
  };

  const currentDialogue = DIALOGUES[mode]?.[dialogueIndex] || "Hello!";

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex flex-col items-center justify-center select-none"
    >
      {/* Speech Dialogue Bubble */}
      <AnimatePresence>
        {showDialogue && (
          <motion.a
            href={`https://wa.me/923056432815?text=${encodeURIComponent(`Hello Hammad! I reached out to you from your 3D Portfolio's ${mode.toUpperCase()} section avatar dialog. Let's connect! 🚀`)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className={`avatar-dialogue absolute z-40 bg-[#080718]/95 border border-violet-500/50 backdrop-blur-xl px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-[0_10px_35px_rgba(139,92,246,0.25)] text-center cursor-pointer transition-all duration-300 hover:border-violet-400/80 hover:shadow-[0_10px_40px_rgba(139,92,246,0.45)] hover:scale-[1.03] active:scale-[0.98] ${
              isHero 
                ? "-top-12 sm:-top-16 left-8 sm:-left-12 md:-left-16 lg:-left-12 max-w-[170px] sm:max-w-[250px]" 
                : mode === "contact"
                  ? "top-14 sm:top-18 left-1/2 -translate-x-1/2 w-[160px] sm:w-[240px] max-w-[220px] sm:max-w-[300px]"
                  : "-top-12 max-w-[170px] sm:max-w-[250px]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`avatar-dialogue-arrow absolute -bottom-2 w-4 h-4 bg-[#080718] border-r border-b border-violet-500/50 rotate-45 ${
              isHero ? "right-10 sm:right-16 md:right-20 lg:right-16" : "left-1/2 -translate-x-1/2"
            }`} />
            <p className="text-[10px] sm:text-xs text-white leading-relaxed font-sans font-medium">
              {currentDialogue}
            </p>
            <div className="mt-1 flex items-center justify-center gap-1 text-[8px] sm:text-[9px] text-violet-400 font-mono uppercase tracking-wider">
              <MessageSquare className="w-2.5 h-2.5 animate-pulse" />
              <span>Tap to chat</span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Holographic Glowing Base */}
      {mode !== "footer" && (
        <>
          <div className="absolute bottom-4 w-48 h-8 bg-violet-600/10 rounded-full blur-md animate-pulse"></div>
          <div className="absolute bottom-2 w-40 h-3 border border-violet-500/20 bg-violet-950/15 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
          </div>
        </>
      )}

      {/* Main Avatar Body Container */}
      <motion.div
        layoutId="global-hammad-avatar"
        onClick={handleClickAvatar}
        className="relative cursor-pointer w-full h-full max-w-full max-h-full flex items-center justify-center overflow-visible"
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
        initial={{ rotateY: 360 }}
        animate={{ 
          y: [0, -5, 0],
          rotateY: 0
        }}
        transition={{ 
          y: {
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          },
          rotateY: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            mass: 1.2
          },
          layout: {
            type: "spring",
            stiffness: 100,
            damping: 18,
            mass: 1.1
          }
        }}
      >
        {/* Soft back ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-indigo-500/5 to-transparent rounded-full filter blur-xl opacity-70 -z-10 animate-pulse"></div>

        {/* --- DYNAMIC HIGH-FIDELITY 3D VECTOR CHARACTER SVG --- */}
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-[0_15px_45px_rgba(0,0,0,0.75)] overflow-visible"
        >
          <defs>
            {/* 3D Realistic Skin Volumetric Gradient */}
            <radialGradient id="skin3D" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffebdf" />
              <stop offset="40%" stopColor="#ffd2ba" />
              <stop offset="85%" stopColor="#e29871" />
              <stop offset="100%" stopColor="#be7550" />
            </radialGradient>

            {/* Neck / Ear Shadows */}
            <linearGradient id="skinShadow3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b47451" />
              <stop offset="100%" stopColor="#8d4b29" />
            </linearGradient>

            {/* Black Volumetric Hair with Highlights */}
            <linearGradient id="hairBase3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#31313a" />
              <stop offset="50%" stopColor="#121215" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <linearGradient id="hairHighlight3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#55526c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#121215" stopOpacity="0" />
            </linearGradient>

            {/* Premium Black Hoodie fabric gradients with fine shading */}
            <linearGradient id="hoodieBase3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#252431" />
              <stop offset="35%" stopColor="#15141e" />
              <stop offset="100%" stopColor="#0a0910" />
            </linearGradient>
            <linearGradient id="hoodieFoldShadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08070d" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#15141e" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="hoodieHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#413f54" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#15141e" stopOpacity="0" />
            </linearGradient>

            {/* Neon Accent Glows */}
            <linearGradient id="neonGlow3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="cyanLaptopGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            {/* Premium Space Gray Laptop Lid Back */}
            <linearGradient id="laptopLidBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#313043" />
              <stop offset="50%" stopColor="#1e1d2b" />
              <stop offset="100%" stopColor="#0f0e17" />
            </linearGradient>
            <linearGradient id="goldCertificateGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>

            {/* Volumetric Eye Iris */}
            <radialGradient id="iris3D" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4e342e" />
              <stop offset="75%" stopColor="#1a0f0e" />
              <stop offset="100%" stopColor="#050505" />
            </radialGradient>

            {/* Soft Shadow Filters for high-end depth */}
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
            </filter>
            <filter id="rimGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="neonLight" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* VOLUMETRIC COLLOQUIAL 3D SHADING FILTERS (MATTE & ORGANIC) */}
            <filter id="realistic3DSkin" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
              <feDiffuseLighting in="blur" lightingColor="#fff8f5" surfaceScale="1.2" diffuseConstant="1.1" result="diffuse">
                <feDistantLight azimuth="240" elevation="60" />
              </feDiffuseLighting>
              <feComposite in="diffuse" in2="SourceGraphic" operator="in" result="diffuseCapped" />
              <feBlend mode="multiply" in="SourceGraphic" in2="diffuseCapped" result="shaded" />
              <feSpecularLighting in="blur" lightingColor="#ffffff" surfaceScale="1.0" specularConstant="0.25" specularExponent="35" result="spec">
                <feDistantLight azimuth="50" elevation="65" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specCapped" />
              <feBlend mode="screen" in="shaded" in2="specCapped" />
            </filter>

            <filter id="realistic3DClothing" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feDiffuseLighting in="blur" lightingColor="#f0f2ff" surfaceScale="1.5" diffuseConstant="1.0" result="diffuse">
                <feDistantLight azimuth="235" elevation="55" />
              </feDiffuseLighting>
              <feComposite in="diffuse" in2="SourceGraphic" operator="in" result="diffuseCapped" />
              <feBlend mode="multiply" in="SourceGraphic" in2="diffuseCapped" result="shaded" />
              <feSpecularLighting in="blur" lightingColor="#ffffff" surfaceScale="1.0" specularConstant="0.08" specularExponent="45" result="spec">
                <feDistantLight azimuth="50" elevation="65" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specCapped" />
              <feBlend mode="screen" in="shaded" in2="specCapped" />
            </filter>

            <filter id="realistic3DHair" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.0" result="blur" />
              <feDiffuseLighting in="blur" lightingColor="#ffffff" surfaceScale="1.4" diffuseConstant="1.0" result="diffuse">
                <feDistantLight azimuth="225" elevation="60" />
              </feDiffuseLighting>
              <feComposite in="diffuse" in2="SourceGraphic" operator="in" result="diffuseCapped" />
              <feBlend mode="multiply" in="SourceGraphic" in2="diffuseCapped" result="shaded" />
              <feSpecularLighting in="blur" lightingColor="#ffffff" surfaceScale="1.0" specularConstant="0.15" specularExponent="30" result="spec">
                <feDistantLight azimuth="45" elevation="60" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specCapped" />
              <feBlend mode="screen" in="shaded" in2="specCapped" />
            </filter>

            <filter id="glowingGadget3D" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
              <feDiffuseLighting in="blur" lightingColor="#ffffff" surfaceScale="1.5" diffuseConstant="1.2" result="diffuse">
                <feDistantLight azimuth="215" elevation="65" />
              </feDiffuseLighting>
              <feComposite in="diffuse" in2="SourceGraphic" operator="in" result="diffuseCapped" />
              <feBlend mode="multiply" in="SourceGraphic" in2="diffuseCapped" result="shaded" />
              <feSpecularLighting in="blur" lightingColor="#ffffff" surfaceScale="1.8" specularConstant="1.2" specularExponent="35" result="spec">
                <feDistantLight azimuth="40" elevation="55" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceGraphic" operator="in" result="specCapped" />
              <feBlend mode="screen" in="shaded" in2="specCapped" />
            </filter>
          </defs>

          {/* 3D Orbiting Technology Ring in Background */}
          <circle cx="100" cy="95" r="75" fill="none" stroke="url(#neonGlow3D)" strokeWidth="0.75" strokeDasharray="6,8" opacity="0.3" className="animate-spin-slow" />
          <circle cx="100" cy="95" r="71" fill="none" stroke="url(#neonGlow3D)" strokeWidth="0.25" opacity="0.1" />

          {/* ========================================================= */}
          {/*                   COMMON CHARACTER TEMPLATE               */}
          {/* ========================================================= */}
          {/* We define modular building blocks that are translated, scaled, and posed depending on active mode */}

          {/* MODE: HERO POSE */}
          {mode === "hero" && (
            <g id="pose-hero" className="overflow-visible">
              {/* Back Hood of Hoodie */}
              <path d="M 68 110 C 58 110, 50 125, 54 140 C 58 150, 68 155, 100 155 C 132 155, 142 150, 146 140 C 150 125, 142 110, 132 110 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              
              {/* Neck with realistic shading */}
              <path d="M 88 102 L 88 118 C 88 118, 100 124, 112 118 L 112 102 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 88 112 Q 100 118, 112 112 L 112 118 Q 100 124, 88 118 Z" fill="#753a1f" opacity="0.4" filter="url(#realistic3DSkin)" /> {/* Neck deep shadow */}

              {/* Ears with volumetric shape */}
              <circle cx="69" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 69 91 C 67 91, 65 93, 66 96 C 67 98, 69 98, 69 98 Z" fill="url(#skin3D)" opacity="0.9" filter="url(#realistic3DSkin)" />
              <circle cx="131" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 131 91 C 133 91, 135 93, 134 96 C 133 98, 131 98, 131 98 Z" fill="url(#skin3D)" opacity="0.9" filter="url(#realistic3DSkin)" />

              {/* Face Base */}
              <path d="M 73 92 C 73 118, 127 118, 127 92 C 127 64, 73 64, 73 92 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />

              {/* High-fidelity Cheek Rosiness & Face contour */}
              <ellipse cx="80" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.15" />
              <ellipse cx="120" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.15" />

              {/* Genuinely Groomed 3D Beard */}
              <path d="M 72 88 C 72 110, 100 122, 100 122 C 100 122, 128 110, 128 88 C 129 96, 129 104, 123 111 C 117 119, 109 123, 100 123 C 91 123, 83 119, 77 111 C 71 104, 71 96, 72 88 Z" fill="#15141b" filter="url(#realistic3DHair)" />
              <path d="M 75 92 Q 100 119, 125 92 Q 100 121, 75 92 Z" fill="#07070a" opacity="0.85" filter="url(#realistic3DHair)" /> {/* Secondary inner beard gradient */}
              
              {/* Mustache */}
              <path d="M 86 102 C 92 101, 98 101, 100 103 C 102 101, 108 101, 114 102 C 116 104, 110 106, 100 105 C 90 106, 84 104, 86 102 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />

              {/* Expressive Smiling Mouth */}
              <path d="M 90 107 Q 100 113, 110 107" fill="none" stroke="#753a1f" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 92 108 Q 100 112, 108 108" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.9" /> {/* Shiny white teeth preview */}

              {/* Nose with distinct 3D protrusion and shadow */}
              <path d="M 96 90 Q 100 84, 104 90 Q 100 100, 96 90 Z" fill="none" stroke="#be7550" strokeWidth="0.5" filter="url(#realistic3DSkin)" />
              <ellipse cx="100" cy="97" rx="3" ry="1.8" fill="#d0865e" filter="url(#realistic3DSkin)" />
              <circle cx="101" cy="96.5" r="0.8" fill="#ffebd6" opacity="0.6" /> {/* Nose tip highlight */}

              {/* Handsome thick eyebrows */}
              <path d="M 77 82 Q 86 76, 93 80" fill="none" stroke="#101014" strokeWidth="3" strokeLinecap="round" filter="url(#realistic3DHair)" />
              <path d="M 123 82 Q 114 76, 107 80" fill="none" stroke="#101014" strokeWidth="3" strokeLinecap="round" filter="url(#realistic3DHair)" />

              {/* Volumetric Eyes with dynamic tracking */}
              <g id="eyes">
                {/* Left Eye Sclera */}
                <ellipse cx="85.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <path d="M 80 87.5 Q 85.5 85, 91 87.5 Z" fill="#e29871" opacity="0.3" /> {/* Eye top lid shadow */}
                {/* Left Iris */}
                <circle cx={85.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                {/* Pupil Light Reflect */}
                <circle cx={86.5 + mousePosition.x * 1.5} cy={86.2 + mousePosition.y * 1.2} r="0.8" fill="#ffffff" />

                {/* Right Eye Sclera */}
                <ellipse cx="114.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <path d="M 109 87.5 Q 114.5 85, 120 87.5 Z" fill="#e29871" opacity="0.3" /> {/* Eye top lid shadow */}
                {/* Right Iris */}
                <circle cx={114.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                {/* Pupil Light Reflect */}
                <circle cx={115.5 + mousePosition.x * 1.5} cy={86.2 + mousePosition.y * 1.2} r="0.8" fill="#ffffff" />
              </g>

              {/* Stylish Glasses reflecting cyber environment */}
              <rect x="75" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" opacity="0.9" />
              <rect x="103" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" opacity="0.9" />
              <line x1="97" y1="87" x2="103" y2="87" stroke="#a855f7" strokeWidth="1.5" />
              {/* Glass surface reflection shine */}
              <path d="M 77 83 L 88 92" stroke="#ffffff" strokeWidth="0.75" opacity="0.4" strokeLinecap="round" />
              <path d="M 105 83 L 116 92" stroke="#ffffff" strokeWidth="0.75" opacity="0.4" strokeLinecap="round" />

              {/* Volumetric Stylish Hair (Thick South Asian style with neat rim highlight) */}
              <g id="3D-hair" filter="url(#realistic3DHair)">
                <path d="M 71 78 
                         C 63 60, 80 50, 100 48 
                         C 120 50, 137 60, 129 78 
                         C 127 70, 120 62, 115 63
                         C 110 54, 104 54, 100 56
                         C 96 54, 90 54, 85 63
                         C 80 62, 73 70, 71 78 Z" fill="url(#hairBase3D)" />
                {/* Hair volumetric layered strokes for depth */}
                <path d="M 74 74 Q 100 52, 126 74 Q 100 58, 74 74 Z" fill="url(#hairHighlight3D)" />
                <path d="M 83 61 Q 100 49, 117 61 Q 100 53, 83 61 Z" fill="#585672" opacity="0.6" />
                <path d="M 71 78 L 71 85 L 75 83 Z" fill="#15141b" /> {/* Left Sideburn */}
                <path d="M 129 78 L 129 85 L 125 83 Z" fill="#15141b" /> {/* Right Sideburn */}
              </g>

              {/* Premium 3D Hoodie - Torso and shoulders */}
              <g id="3D-hoodie" className="overflow-visible" filter="url(#realistic3DClothing)">
                {/* Left Shoulder */}
                <path d="M 52 142 C 40 146, 32 165, 30 195 L 85 195 C 80 175, 68 152, 52 142 Z" fill="url(#hoodieBase3D)" />
                {/* Right Shoulder */}
                <path d="M 148 142 C 160 146, 168 165, 170 195 L 115 195 C 120 175, 132 152, 148 142 Z" fill="url(#hoodieBase3D)" />
                {/* Center Chest */}
                <path d="M 52 142 C 68 152, 80 175, 85 195 L 115 195 C 120 175, 132 152, 148 142 C 140 138, 120 134, 100 134 C 80 134, 60 138, 52 142 Z" fill="url(#hoodieBase3D)" />

                {/* Fabric crease shadowing and highlighting */}
                <path d="M 40 165 Q 60 162, 75 180" fill="none" stroke="url(#hoodieFoldShadow)" strokeWidth="4" opacity="0.75" strokeLinecap="round" />
                <path d="M 160 165 Q 140 162, 125 180" fill="none" stroke="url(#hoodieFoldShadow)" strokeWidth="4" opacity="0.75" strokeLinecap="round" />
                <path d="M 45 158 Q 55 150, 68 162" fill="none" stroke="url(#hoodieHighlight)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 155 158 Q 145 150, 132 162" fill="none" stroke="url(#hoodieHighlight)" strokeWidth="1.5" strokeLinecap="round" />

                {/* Front cowl/opening of the hood */}
                <path d="M 68 128 Q 100 144, 132 128 Q 100 136, 68 128 Z" fill="#08070d" />
                {/* Outer rim of hood casting shadow */}
                <path d="M 66 122 C 66 122, 100 140, 134 122" fill="none" stroke="#2a283c" strokeWidth="2.5" strokeLinecap="round" />

                {/* Drawstrings with realistic 3D aglets */}
                <g id="drawstrings" filter="url(#glowingGadget3D)">
                  {/* Left drawstring */}
                  <path d="M 88 138 Q 85 155, 80 165" fill="none" stroke="#1d1b26" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="80" cy="165" r="2.5" fill="url(#neonGlow3D)" filter="url(#rimGlow)" />
                  {/* Right drawstring */}
                  <path d="M 112 138 Q 115 155, 120 165" fill="none" stroke="#1d1b26" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="120" cy="165" r="2.5" fill="url(#neonGlow3D)" filter="url(#rimGlow)" />
                </g>

                {/* Elegant 3D Glow-Embossed Logo: "CODE BUILD DEPLOY" */}
                <g transform="translate(100, 155)">
                  <rect x="-35" y="-5" width="70" height="24" rx="4" fill="#030206" opacity="0.4" stroke="#ffffff" strokeWidth="0.15" />
                  <text x="0" y="3" fill="#ffffff" fontSize="5.5" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.8" opacity="0.95">CODE</text>
                  <text x="0" y="9.5" fill="#a855f7" fontSize="5.5" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.8" filter="url(#neonLight)">BUILD</text>
                  <text x="0" y="15.5" fill="#ffffff" fontSize="4.5" fontFamily="sans-serif" fontWeight="800" textAnchor="middle" letterSpacing="0.5" opacity="0.7">DEPLOY</text>
                </g>
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: ABOUT ME POSE                     */}
          {/* ========================================================= */}
          {mode === "about" && (
            <g id="pose-about">
              {/* Back Hood */}
              <path d="M 72 108 C 62 108, 54 123, 58 138 C 62 148, 72 153, 104 153 C 136 153, 146 148, 150 138 C 154 123, 146 108, 136 108 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              
              {/* Neck & Ears with shadows */}
              <path d="M 92 100 L 92 116 Q 104 122, 116 116 L 116 100 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="73" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="135" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />

              {/* Head group slightly tilted downward (focused on laptop!) */}
              <g transform="rotate(4, 104, 90)">
                {/* Face base */}
                <path d="M 77 90 C 77 114, 131 114, 131 90 C 131 64, 77 64, 77 90 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                
                {/* Groomed Beard */}
                <path d="M 76 86 C 76 106, 104 118, 104 118 C 104 118, 132 106, 132 86 C 133 94, 133 101, 127 108 C 121 115, 113 119, 104 119 C 95 119, 87 115, 81 108 C 75 101, 75 94, 76 86 Z" fill="#15141b" filter="url(#realistic3DHair)" />
                <path d="M 79 90 Q 104 115, 129 90 Q 104 117, 79 90 Z" fill="#07070a" opacity="0.8" filter="url(#realistic3DHair)" />

                {/* Nose looking down */}
                <ellipse cx="104" cy="96" rx="2.5" ry="1.5" fill="#d0865e" filter="url(#realistic3DSkin)" />

                {/* Mustache & Mouth */}
                <path d="M 91 101 C 96 100, 101 100, 104 102 C 107 100, 112 100, 117 101 C 119 103, 113 105, 104 104 C 95 105, 89 103, 91 101 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
                <path d="M 94 106 Q 104 110, 114 106" fill="none" stroke="#753a1f" strokeWidth="2" strokeLinecap="round" />

                {/* Thick eyebrows */}
                <path d="M 81 80 Q 90 75, 96 79" fill="none" stroke="#101014" strokeWidth="2.5" strokeLinecap="round" filter="url(#realistic3DHair)" />
                <path d="M 127 80 Q 118 75, 112 79" fill="none" stroke="#101014" strokeWidth="2.5" strokeLinecap="round" filter="url(#realistic3DHair)" />

                {/* Eyes looking down at laptop screen */}
                <ellipse cx="89" cy="86" rx="5" ry="3" fill="#ffffff" />
                <circle cx={89 + mousePosition.x * 0.8} cy={87.2 + mousePosition.y * 0.8} r="2.2" fill="url(#iris3D)" />
                <circle cx={89.5 + mousePosition.x * 0.8} cy={86.5 + mousePosition.y * 0.8} r="0.6" fill="#ffffff" />

                <ellipse cx="119" cy="86" rx="5" ry="3" fill="#ffffff" />
                <circle cx={119 + mousePosition.x * 0.8} cy={87.2 + mousePosition.y * 0.8} r="2.2" fill="url(#iris3D)" />
                <circle cx={119.5 + mousePosition.x * 0.8} cy={86.5 + mousePosition.y * 0.8} r="0.6" fill="#ffffff" />

                {/* Glasses */}
                <rect x="79" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" opacity="0.8" />
                <rect x="107" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" opacity="0.8" />
                <line x1="99" y1="85" x2="107" y2="85" stroke="#a855f7" strokeWidth="1.2" />

                {/* Hair */}
                <path d="M 75 76 
                         C 67 58, 84 48, 104 46 
                         C 124 48, 141 58, 133 76 
                         C 131 68, 124 60, 119 61
                         C 114 52, 108 52, 104 54
                         C 100 52, 94 52, 89 61
                         C 84 60, 77 68, 75 76 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
                <path d="M 78 72 Q 104 50, 130 72 Q 104 56, 78 72 Z" fill="url(#hairHighlight3D)" opacity="0.85" filter="url(#realistic3DHair)" />
              </g>

              {/* Ambient Blue Laptop Screen reflection on face & hoodie */}
              <ellipse cx="104" cy="115" rx="35" ry="20" fill="url(#cyanLaptopGlow)" opacity="0.4" filter="url(#softShadow)" />

              {/* Hoodie Body (angled sitting down) */}
              <path d="M 55 140 C 44 144, 34 162, 32 192 L 176 192 C 174 162, 164 144, 153 140 C 145 136, 124 132, 104 132 C 84 132, 63 136, 55 140 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />
              <path d="M 72 126 Q 104 142, 136 126 Q 104 134, 72 126 Z" fill="#08070d" />

              {/* Both arms extended towards laptop (typing pose) */}
              <path d="M 45 162 Q 65 175, 76 182" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="11" strokeLinecap="round" filter="url(#realistic3DClothing)" />
              <circle cx="76" cy="182" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
              <path d="M 163 162 Q 143 175, 132 182" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="11" strokeLinecap="round" filter="url(#realistic3DClothing)" />
              <circle cx="132" cy="182" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />

              {/* Glowing Silver Laptop on lap - Corrected Facing Direction (Lid Back facing us, Screen facing him) */}
              <g transform="translate(64, 156)" filter="url(#glowingGadget3D)">
                {/* Laptop Base (with keyboard & trackpad visible) */}
                <path d="M 4 24 L 76 24 L 84 32 L -4 32 Z" fill="#475569" stroke="#1e293b" strokeWidth="0.8" />
                {/* Keyboard Area (trapezoid in perspective) */}
                <path d="M 10 25 L 70 25 L 73 29 L 7 29 Z" fill="#15141e" opacity="0.95" />
                {/* Keyboard Keys subtle indicators */}
                <line x1="11" y1="26.2" x2="69" y2="26.2" stroke="#475569" strokeWidth="0.5" opacity="0.6" />
                <line x1="9.5" y1="27.4" x2="70.5" y2="27.4" stroke="#475569" strokeWidth="0.5" opacity="0.6" />
                <line x1="8" y1="28.4" x2="72" y2="28.4" stroke="#475569" strokeWidth="0.5" opacity="0.6" />
                {/* Trackpad */}
                <path d="M 34 30 L 46 30 L 47 31.5 L 33 31.5 Z" fill="#64748b" opacity="0.6" />

                {/* Back of Laptop Lid (Facing us, tilted towards him) */}
                <path d="M 12 4 L 68 4 Q 72 4, 72 8 L 76 24 L 4 24 L 8 8 Q 8 4, 12 4 Z" fill="url(#laptopLidBack)" stroke="#334155" strokeWidth="1" />
                {/* Inner highlight for 3D metallic volume */}
                <path d="M 13 5 L 67 5 Q 71 5, 71 9 L 74.5 23 L 5.5 23 L 9 9 Q 9 5, 13 5 Z" fill="none" stroke="#64748b" strokeWidth="0.6" opacity="0.45" />

                {/* Glowing Developer Brand Logo in Center of Back Lid */}
                <g transform="translate(40, 13)">
                  <circle cx="0" cy="0" r="6" fill="#a855f7" opacity="0.3" filter="url(#rimGlow)" />
                  <circle cx="0" cy="0" r="3.2" fill="#a855f7" opacity="0.8" />
                  <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                  {/* Micro developer code indicator </ > */}
                  <path d="M -2.2 -0.8 L -3.2 0 L -2.2 0.8 M 2.2 -0.8 L 3.2 0 L 2.2 0.8" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" opacity="0.9" />
                </g>
              </g>

              {/* Steaming Coffee Cup on side table */}
              <g transform="translate(15, 155)">
                {/* Shadow */}
                <ellipse cx="10" cy="22" rx="7" ry="2.5" fill="#000000" opacity="0.5" />
                {/* Table Base */}
                <line x1="10" y1="22" x2="10" y2="42" stroke="#475569" strokeWidth="1.5" />
                <ellipse cx="10" cy="42" rx="10" ry="3" fill="#334155" />
                <ellipse cx="10" cy="22" rx="11" ry="3.5" fill="#1e293b" stroke="#475569" />

                {/* Ceramic Mug */}
                <rect x="5" y="10" width="10" height="12" rx="1.5" fill="#8b5cf6" filter="url(#glowingGadget3D)" />
                <path d="M 15 13 Q 19 16, 15 19" fill="none" stroke="#8b5cf6" strokeWidth="1.8" />
                <ellipse cx="10" cy="11" rx="5" ry="1.5" fill="#7c2d12" /> {/* Coffee surface */}
                {/* Steam */}
                <path d="M 8 7 Q 6 3, 9 -1 T 7 -10" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.5" className="animate-steam-1" />
                <path d="M 12 8 Q 14 4, 11 0 T 13 -8" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.5" className="animate-steam-2" />
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: SKILLS POSE                       */}
          {/* ========================================================= */}
          {mode === "skills" && (
            <g id="pose-skills">
              {/* Back Hood */}
              <path d="M 68 110 C 58 110, 50 125, 54 140 C 58 150, 68 155, 100 155 C 132 155, 142 150, 146 140 C 150 125, 142 110, 132 110 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              
              {/* Face and Head Structure */}
              <path d="M 88 102 L 88 118 Q 100 124, 112 118 L 112 102 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="69" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="131" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 73 92 C 73 118, 127 118, 127 92 C 127 64, 73 64, 73 92 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />

              {/* Facial features */}
              <ellipse cx="80" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.1" />
              <ellipse cx="120" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.1" />
              <path d="M 72 88 C 72 110, 100 122, 100 122 Q 128 110, 128 88 Q 100 123, 72 88 Z" fill="#15141b" filter="url(#realistic3DHair)" />
              <path d="M 86 102 Q 100 101, 114 102 Q 100 106, 86 102 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
              <path d="M 90 107 Q 100 113, 110 107" fill="none" stroke="#753a1f" strokeWidth="2.5" strokeLinecap="round" />
              <ellipse cx="100" cy="97" rx="3" ry="1.8" fill="#d0865e" filter="url(#realistic3DSkin)" />

              <g id="skills-eyes">
                <ellipse cx="85.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={85.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                <circle cx={86.5 + mousePosition.x * 1.5} cy={86.2 + mousePosition.y * 1.2} r="0.8" fill="#ffffff" />
                <ellipse cx="114.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={114.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                <circle cx={115.5 + mousePosition.x * 1.5} cy={86.2 + mousePosition.y * 1.2} r="0.8" fill="#ffffff" />
              </g>

              {/* Glasses */}
              <rect x="75" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <rect x="103" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <line x1="97" y1="87" x2="103" y2="87" stroke="#a855f7" strokeWidth="1.5" />

              {/* Hair */}
              <path d="M 71 78 C 63 60, 80 50, 100 48 C 120 50, 137 60, 129 78 Q 120 62, 100 56 Q 80 62, 71 78 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
              <path d="M 74 74 Q 100 52, 126 74 Q 100 58, 74 74 Z" fill="url(#hairHighlight3D)" opacity="0.8" filter="url(#realistic3DHair)" />

              {/* Hoodie Body */}
              <path d="M 52 142 C 40 146, 32 165, 30 195 L 170 195 C 168 165, 160 146, 148 142 Q 100 134, 52 142 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />
              <path d="M 68 128 Q 100 144, 132 128 Q 100 136, 68 128 Z" fill="#08070d" />

              {/* Drawstrings */}
              <path d="M 88 138 Q 85 155, 80 165" fill="none" stroke="#1d1b26" strokeWidth="2" strokeLinecap="round" filter="url(#glowingGadget3D)" />
              <path d="M 112 138 Q 115 155, 120 165" fill="none" stroke="#1d1b26" strokeWidth="2" strokeLinecap="round" filter="url(#glowingGadget3D)" />

              {/* POSE SPECIFIC ACTION: Arm pointing explicitly to the Left (where skills are!) */}
              <g id="pointing-left">
                {/* Pointing Arm path */}
                <path d="M 54 152 L 20 152" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="13" strokeLinecap="round" filter="url(#realistic3DClothing)" />
                <path d="M 54 152 L 20 152" fill="none" stroke="url(#hoodieHighlight)" strokeWidth="4" opacity="0.2" strokeLinecap="round" />
                
                {/* Hand pointing finger */}
                <circle cx="20" cy="152" r="6" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <path d="M 20 152 L 8 152" stroke="#ffd2ba" strokeWidth="3" strokeLinecap="round" filter="url(#realistic3DSkin)" /> {/* Extended Finger */}
                <circle cx="8" cy="152" r="1.5" fill="url(#neonGlow3D)" filter="url(#neonLight)" /> {/* Neon spark at finger tip */}
              </g>

              {/* Floating Orbiting Tech Node (React-like atom model) */}
              <g transform="translate(160, 105)" className="animate-pulse">
                <circle cx="0" cy="0" r="10" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.6" transform="rotate(30)" />
                <circle cx="0" cy="0" r="10" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.6" transform="rotate(90)" />
                <circle cx="0" cy="0" r="10" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.6" transform="rotate(150)" />
                <circle cx="0" cy="0" r="3.5" fill="#61dafb" filter="url(#neonLight)" />
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: PROJECTS POSE                     */}
          {/* ========================================================= */}
          {mode === "projects" && (
            <g id="pose-projects">
              {/* Similar high quality character but positioned to point to the Left (for bento cards) */}
              <path d="M 68 110 C 58 110, 50 125, 54 140 C 58 150, 68 155, 100 155 C 132 155, 142 150, 146 140 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              <path d="M 88 102 L 88 118 Q 100 124, 112 118 L 112 102 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="69" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="131" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 73 92 C 73 118, 127 118, 127 92 C 127 64, 73 64, 73 92 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />

              <path d="M 72 88 C 72 110, 100 122, 100 122 Q 128 110, 128 88 Z" fill="#15141b" filter="url(#realistic3DHair)" />
              <path d="M 86 102 Q 100 101, 114 102 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
              <path d="M 90 107 Q 100 113, 110 107" fill="none" stroke="#753a1f" strokeWidth="2.5" strokeLinecap="round" />
              <ellipse cx="100" cy="97" rx="3" ry="1.8" fill="#d0865e" filter="url(#realistic3DSkin)" />

              <g id="projects-eyes">
                <ellipse cx="85.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={85.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                <ellipse cx="114.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={114.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
              </g>

              {/* Glasses */}
              <rect x="75" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <rect x="103" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <line x1="97" y1="87" x2="103" y2="87" stroke="#a855f7" strokeWidth="1.5" />

              {/* Hair */}
              <path d="M 71 78 C 63 60, 80 50, 100 48 C 120 50, 137 60, 129 78 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
              <path d="M 74 74 Q 100 52, 126 74 Z" fill="url(#hairHighlight3D)" filter="url(#realistic3DHair)" />

              {/* Hoodie Body */}
              <path d="M 52 142 C 40 146, 32 165, 30 195 L 170 195 C 168 165, 160 146, 148 142 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />
              <path d="M 68 128 Q 100 144, 132 128 Q 100 136, 68 128 Z" fill="#08070d" />

              {/* Pointing Arm */}
              <g id="projects-point">
                <path d="M 54 154 Q 30 154, 16 142" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="12" strokeLinecap="round" filter="url(#realistic3DClothing)" />
                <circle cx="16" cy="142" r="5.5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <path d="M 16 142 L 5 136" stroke="#ffd2ba" strokeWidth="2.5" strokeLinecap="round" filter="url(#realistic3DSkin)" />
                <circle cx="5" cy="136" r="2.5" fill="#a855f7" filter="url(#neonLight)" />
              </g>

              {/* Micro-dashboard hologram floating near pointing hand */}
              <g transform="translate(10, 95)" className="animate-pulse" filter="url(#glowingGadget3D)">
                <rect x="-8" y="-8" width="25" height="16" rx="2" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="0.8" filter="url(#neonLight)" />
                <line x1="-4" y1="-3" x2="10" y2="-3" stroke="#ffffff" strokeWidth="0.8" />
                <line x1="-4" y1="1" x2="4" y2="1" stroke="#a855f7" strokeWidth="0.6" />
                <circle cx="10" cy="1" r="1" fill="#22d3ee" />
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: EDUCATION POSE                    */}
          {/* ========================================================= */}
          {mode === "education" && (
            <g id="pose-education">
              {/* Character head tilted downwards focusing deeply on a glowing holographic book */}
              <path d="M 72 108 C 62 108, 54 123, 58 138 C 62 148, 72 153, 104 153 C 136 153, 146 148, 150 138 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              
              {/* Neck & Ears with shadows */}
              <path d="M 92 100 L 92 116 Q 104 122, 116 116 L 116 100 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="73" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="135" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />

              {/* Head group slightly tilted downwards (studying!) */}
              <g transform="rotate(6, 104, 90)">
                <path d="M 77 90 C 77 114, 131 114, 131 90 C 131 64, 77 64, 77 90 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <path d="M 76 86 C 76 106, 104 118, 104 118 Q 132 106, 132 86 Z" fill="#15141b" filter="url(#realistic3DHair)" />
                <ellipse cx="104" cy="96" rx="2.5" ry="1.5" fill="#d0865e" filter="url(#realistic3DSkin)" />
                <path d="M 91 101 Q 104 103, 117 101 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
                {/* Gentle study smile */}
                <path d="M 95 106 Q 104 111, 113 106" fill="none" stroke="#753a1f" strokeWidth="2.2" strokeLinecap="round" />

                <g id="edu-eyes">
                  <ellipse cx="89" cy="86" rx="5" ry="3.5" fill="#ffffff" />
                  <circle cx="89" cy="87.5" r="2.2" fill="url(#iris3D)" />
                  <ellipse cx="119" cy="86" rx="5" ry="3.5" fill="#ffffff" />
                  <circle cx="119" cy="87.5" r="2.2" fill="url(#iris3D)" />
                </g>

                {/* Glasses */}
                <rect x="79" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" />
                <rect x="107" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" />
                <line x1="99" y1="85" x2="107" y2="85" stroke="#a855f7" strokeWidth="1.2" />

                {/* Hair */}
                <path d="M 75 76 C 67 58, 84 48, 104 46 C 124 48, 141 58, 133 76 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
                <path d="M 78 72 Q 104 50, 130 72 Z" fill="url(#hairHighlight3D)" filter="url(#realistic3DHair)" />
              </g>

              {/* Ambient Book Glow reflecting upwards on chest & neck */}
              <ellipse cx="104" cy="120" rx="30" ry="16" fill="url(#skin3D)" opacity="0.1" />
              <ellipse cx="104" cy="125" rx="35" ry="18" fill="url(#neonGlow3D)" opacity="0.3" filter="url(#rimGlow)" />

              {/* Hoodie Torso */}
              <path d="M 55 140 C 44 144, 34 162, 32 192 L 176 192 C 174 162, 164 144, 153 140 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />

              {/* Hands holding the glowing book */}
              <g id="glowing-book-scene" transform="translate(62, 146)">
                {/* Book cover shadow */}
                <ellipse cx="42" cy="24" rx="28" ry="4" fill="#000000" opacity="0.5" />
                {/* Book cover (left & right flaps) */}
                <path d="M 42 20 C 35 12, 12 11, 4 16 L 4 3 L 42 7 Z" fill="#6d28d9" stroke="#5b21b6" strokeWidth="1" filter="url(#glowingGadget3D)" />
                <path d="M 42 20 C 49 12, 72 11, 80 16 L 80 3 L 42 7 Z" fill="#5b21b6" stroke="#4c1d95" strokeWidth="1" filter="url(#glowingGadget3D)" />
                {/* Glowing inner pages casting massive neon light */}
                <path d="M 42 19 C 35 13, 13 12, 6 15 L 6 4 C 13 1, 35 2, 42 6 Z" fill="#ffffff" filter="url(#neonLight)" />
                <path d="M 42 19 C 49 13, 71 12, 78 15 L 78 4 C 71 1, 49 2, 42 6 Z" fill="#faf5ff" filter="url(#neonLight)" />
                <line x1="42" y1="6" x2="42" y2="20" stroke="#c084fc" strokeWidth="1.5" />

                {/* Shimmering magical letters rising from book */}
                <text x="25" y="-1" fill="#c084fc" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.8" className="animate-float-letter-1">A</text>
                <text x="42" y="-6" fill="#818cf8" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.95" className="animate-float-letter-2">1</text>
                <text x="58" y="-3" fill="#a78bfa" fontSize="7" fontFamily="monospace" fontWeight="bold" opacity="0.75" className="animate-float-letter-3">0</text>

                {/* Left hand holding edge */}
                <circle cx="6" cy="14" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                {/* Right hand holding edge */}
                <circle cx="78" cy="14" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: CERTIFICATES POSE                 */}
          {/* ========================================================= */}
          {mode === "certificates" && (
            <g id="pose-certificates">
              {/* Similar look but holding a golden glowing smartphone */}
              <path d="M 72 108 C 62 108, 54 123, 58 138 C 62 148, 72 153, 104 153 C 136 153, 146 148, 150 138 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              <path d="M 92 100 L 92 116 Q 104 122, 116 116 L 116 100 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="73" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="135" cy="92" r="7" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />

              {/* Head group focused downwards */}
              <g transform="rotate(2, 104, 90)">
                <path d="M 77 90 C 77 114, 131 114, 131 90 C 131 64, 77 64, 77 90 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <path d="M 76 86 C 76 106, 104 118, 104 118 Q 132 106, 132 86 Z" fill="#15141b" filter="url(#realistic3DHair)" />
                <ellipse cx="104" cy="96" rx="2.5" ry="1.5" fill="#d0865e" filter="url(#realistic3DSkin)" />
                <path d="M 91 101 Q 104 103, 117 101 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
                <path d="M 95 106 Q 104 111, 113 106" fill="none" stroke="#753a1f" strokeWidth="2.2" strokeLinecap="round" />

                <g id="cert-eyes">
                  <ellipse cx="89" cy="86" rx="5" ry="3.5" fill="#ffffff" />
                  <circle cx="89" cy="87.5" r="2.2" fill="url(#iris3D)" />
                  <ellipse cx="119" cy="86" rx="5" ry="3.5" fill="#ffffff" />
                  <circle cx="119" cy="87.5" r="2.2" fill="url(#iris3D)" />
                </g>

                {/* Glasses */}
                <rect x="79" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" />
                <rect x="107" y="80" width="20" height="11" rx="3" fill="none" stroke="#a855f7" strokeWidth="1" filter="url(#glowingGadget3D)" />
                <line x1="99" y1="85" x2="107" y2="85" stroke="#a855f7" strokeWidth="1.2" />

                {/* Hair */}
                <path d="M 75 76 C 67 58, 84 48, 104 46 C 124 48, 141 58, 133 76 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
                <path d="M 78 72 Q 104 50, 130 72 Z" fill="url(#hairHighlight3D)" filter="url(#realistic3DHair)" />
              </g>

              {/* Gold screen reflection */}
              <ellipse cx="104" cy="120" rx="30" ry="15" fill="url(#goldCertificateGlow)" opacity="0.35" filter="url(#softShadow)" />

              {/* Hoodie Torso */}
              <path d="M 55 140 C 44 144, 34 162, 32 192 L 176 192 C 174 162, 164 144, 153 140 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />

              {/* Smartphone holding scene with gold glowing digital badge */}
              <g id="glowing-phone" transform="translate(84, 140)" filter="url(#glowingGadget3D)">
                {/* Phone Body */}
                <rect x="10" y="4" width="20" height="34" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />
                {/* Golden/Yellow Screen Glow */}
                <rect x="12" y="6" width="16" height="30" rx="2.5" fill="url(#goldCertificateGlow)" opacity="0.4" filter="url(#neonLight)" />
                
                {/* Golden Badge Illustration inside screen */}
                <g transform="translate(20, 20)">
                  <circle cx="0" cy="-3" r="5" fill="#fbbf24" filter="url(#neonLight)" />
                  <circle cx="0" cy="-3" r="2" fill="#d97706" />
                  <polygon points="-3,3 0,-1 3,3 0,7" fill="#fbbf24" />
                </g>

                {/* Hand holding phone with detailed fingers */}
                <path d="M 5 22 Q 10 20, 12 24" stroke="url(#skin3D)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="10" cy="24" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <path d="M 35 22 Q 30 20, 28 24" stroke="url(#skin3D)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="30" cy="24" r="5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
              </g>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: CONTACT POSE                      */}
          {/* ========================================================= */}
          {mode === "contact" && (
            <g id="pose-contact">
              {/* Back Hood */}
              <path d="M 68 110 C 58 110, 50 125, 54 140 C 58 150, 68 155, 100 155 C 132 155, 142 150, 146 140 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              
              {/* Face and Head */}
              <path d="M 88 102 L 88 118 Q 100 124, 112 118 L 112 102 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="69" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="131" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <path d="M 73 92 C 73 118, 127 118, 127 92 C 127 64, 73 64, 73 92 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />

              <ellipse cx="80" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.1" />
              <ellipse cx="120" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.1" />
              <path d="M 72 88 C 72 110, 100 122, 100 122 Q 128 110, 128 88 Z" fill="#15141b" filter="url(#realistic3DHair)" />
              <path d="M 86 102 Q 100 101, 114 102 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
              {/* Confident big warm smile */}
              <path d="M 88 106 Q 100 114, 112 106" fill="none" stroke="#753a1f" strokeWidth="2.8" strokeLinecap="round" />
              <ellipse cx="100" cy="97" rx="3" ry="1.8" fill="#d0865e" filter="url(#realistic3DSkin)" />

              <g id="contact-eyes">
                <ellipse cx="85.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={85.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                <ellipse cx="114.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                <circle cx={114.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
              </g>

              {/* Glasses */}
              <rect x="75" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <rect x="103" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
              <line x1="97" y1="87" x2="103" y2="87" stroke="#a855f7" strokeWidth="1.5" />

              {/* Hair */}
              <path d="M 71 78 C 63 60, 80 50, 100 48 C 120 50, 137 60, 129 78 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
              <path d="M 74 74 Q 100 52, 126 74 Z" fill="url(#hairHighlight3D)" filter="url(#realistic3DHair)" />

              {/* Hoodie Body */}
              <path d="M 52 142 C 40 146, 32 165, 30 195 L 170 195 C 168 165, 160 146, 148 142 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />
              <path d="M 68 128 Q 100 144, 132 128 Q 100 136, 68 128 Z" fill="#08070d" />

              {/* POSE SPECIFIC ACTION: Professional Confident Crossed Arms */}
              <g id="crossed-arms">
                {/* Thick volumetric arm paths overlapping nicely */}
                <path d="M 45 158 Q 100 182, 155 158" fill="none" stroke="#0f0e16" strokeWidth="15" strokeLinecap="round" />
                <path d="M 45 158 Q 100 182, 155 158" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="11" strokeLinecap="round" filter="url(#realistic3DClothing)" />
                <path d="M 45 158 Q 100 182, 155 158" fill="none" stroke="url(#hoodieHighlight)" strokeWidth="4" opacity="0.25" strokeLinecap="round" />
                
                {/* Hand peeking out of sleeves */}
                <circle cx="56" cy="168" r="5.5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <circle cx="144" cy="168" r="5.5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
              </g>

              {/* Logo CODE BUILD DEPLOY visible on chest above crossed arms */}
              <text x="100" y="148" fill="#ffffff" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.8">CODE BUILD DEPLOY</text>
            </g>
          )}

          {/* ========================================================= */}
          {/*                   MODE: FOOTER AVATAR                     */}
          {/* ========================================================= */}
          {mode === "footer" && (
            <g id="pose-footer">
              {/* Friendly waving avatar inside circular profile */}
              <path d="M 68 110 C 58 110, 50 125, 54 140 C 58 150, 68 155, 100 155 C 132 155, 142 150, 146 140 Z" fill="#0d0d14" filter="url(#realistic3DClothing)" />
              <path d="M 88 102 L 88 118 Q 100 124, 112 118 L 112 102 Z" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="69" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              <circle cx="131" cy="94" r="7.5" fill="url(#skinShadow3D)" filter="url(#realistic3DSkin)" />
              
              {/* Friendly tilted head */}
              <g transform="rotate(-3, 100, 110)">
                <path d="M 73 92 C 73 118, 127 118, 127 92 C 127 64, 73 64, 73 92 Z" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                <ellipse cx="80" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.15" />
                <ellipse cx="120" cy="98" rx="6" ry="3.5" fill="#ef4444" opacity="0.15" />
                <path d="M 72 88 C 72 110, 100 122, 100 122 Q 128 110, 128 88 Z" fill="#15141b" filter="url(#realistic3DHair)" />
                <path d="M 86 102 Q 100 101, 114 102 Z" fill="#0c0c0e" filter="url(#realistic3DHair)" />
                <path d="M 88 105 Q 100 114, 112 105" fill="none" stroke="#753a1f" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 92 107 Q 100 111, 108 107" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                <ellipse cx="100" cy="97" rx="3" ry="1.8" fill="#d0865e" filter="url(#realistic3DSkin)" />

                <g id="footer-eyes">
                  <ellipse cx="85.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                  <circle cx={85.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                  <ellipse cx="114.5" cy="87.5" rx="5.5" ry="3.5" fill="#ffffff" />
                  <circle cx={114.5 + mousePosition.x * 1.5} cy={87.5 + mousePosition.y * 1.2} r="2.8" fill="url(#iris3D)" />
                </g>

                <rect x="75" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
                <rect x="103" y="81" width="22" height="13" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.25" filter="url(#glowingGadget3D)" />
                <line x1="97" y1="87" x2="103" y2="87" stroke="#a855f7" strokeWidth="1.5" />

                <path d="M 71 78 C 63 60, 80 50, 100 48 C 120 50, 137 60, 129 78 Z" fill="url(#hairBase3D)" filter="url(#realistic3DHair)" />
                <path d="M 74 74 Q 100 52, 126 74 Z" fill="url(#hairHighlight3D)" filter="url(#realistic3DHair)" />
              </g>

              {/* Hoodie base */}
              <path d="M 52 142 C 40 146, 32 165, 30 195 L 170 195 C 168 165, 160 146, 148 142 Z" fill="url(#hoodieBase3D)" filter="url(#realistic3DClothing)" />
              <path d="M 68 128 Q 100 144, 132 128 Z" fill="#08070d" />

              {/* Waving Hand animation */}
              <g id="waving-arm-footer" transform="translate(136, 115)">
                <g className="animate-wave origin-bottom">
                  {/* Sleeve */}
                  <path d="M 0 35 L 12 12 Q 14 6, 18 10" fill="none" stroke="url(#hoodieBase3D)" strokeWidth="13" strokeLinecap="round" filter="url(#realistic3DClothing)" />
                  {/* Palm */}
                  <circle cx="18" cy="8" r="6.5" fill="url(#skin3D)" filter="url(#realistic3DSkin)" />
                  {/* Fingers */}
                  <line x1="18" y1="8" x2="16" y2="-1" stroke="#ffd2ba" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="21" y1="8" x2="21" y2="-2" stroke="#ffd2ba" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="24" y1="8" x2="25" y2="-1" stroke="#ffd2ba" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </g>
            </g>
          )}
        </svg>

        {/* CSS KEYFRAME INJECTOR FOR EXTRA 3D EFFECTS */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 22s linear infinite;
          }
          
          @keyframes steam {
            0% { transform: translateY(0) scale(0.9); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-15px) scale(1.1); opacity: 0; }
          }
          .animate-steam-1 {
            animation: steam 3.5s infinite ease-out;
          }
          .animate-steam-2 {
            animation: steam 3.5s infinite ease-out;
            animation-delay: 1.7s;
          }

          @keyframes floatLetter {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            20% { opacity: 0.9; }
            100% { transform: translateY(-24px) rotate(35deg); opacity: 0; }
          }
          .animate-float-letter-1 {
            animation: floatLetter 4s infinite ease-out;
          }
          .animate-float-letter-2 {
            animation: floatLetter 4s infinite ease-out;
            animation-delay: 1.3s;
          }
          .animate-float-letter-3 {
            animation: floatLetter 4s infinite ease-out;
            animation-delay: 2.6s;
          }

          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(18deg); }
          }
          .animate-wave {
            animation: wave 1s infinite ease-in-out;
          }
        `}} />
      </motion.div>
    </div>
  );
}
