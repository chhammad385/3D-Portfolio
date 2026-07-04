import React from "react";
import { motion } from "motion/react";
import { statsData } from "../data";
import { Award, Layers, Rocket, GraduationCap, CornerDownRight } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function About({ activeSection }: { activeSection?: string }) {
  const getIcon = (id: string) => {
    switch (id) {
      case "coding-years":
        return <Layers className="w-5 h-5 text-violet-400" />;
      case "major-projects":
        return <Rocket className="w-5 h-5 text-violet-400" />;
      case "technologies":
        return <Award className="w-5 h-5 text-violet-400" />;
      case "cgpa":
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
      default:
        return <Layers className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full glow-sphere-1 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
            Get To Know Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left stats & description Column */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              I'm a passionate Full Stack Developer who loves solving real-world problems with clean code and modern technologies.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.4)" }}
                  className="bg-[#050515]/60 backdrop-blur-md border border-indigo-950/80 p-6 rounded-2xl flex flex-col justify-between h-[150px] transition-all duration-300 relative group overflow-hidden shadow-lg shadow-black/10"
                >
                  {/* Subtle hover backlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl md:text-4xl font-display font-extrabold bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-900/40 group-hover:bg-violet-900/20 group-hover:border-violet-500/30 transition-colors">
                      {getIcon(stat.id)}
                    </div>
                  </div>
                  
                  <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right 3D Cozy Working Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 h-[350px] md:h-[450px]">
            
            {/* Arrow connecting stats to avatar */}
            <div className="absolute left-[-25px] top-1/2 -translate-y-1/2 hidden xl:block text-violet-500">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest bg-violet-950/40 px-2 py-1 rounded-md border border-violet-900/50 mb-2">
                  Code Life
                </span>
                <CornerDownRight className="w-8 h-8 animate-pulse text-violet-500" />
              </div>
            </div>

            {/* Main Cozy Working Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[350px] h-full rounded-3xl border border-violet-500/20 bg-gradient-to-b from-indigo-950/15 to-black/30 backdrop-blur-sm shadow-2xl flex items-center justify-center"
            >
              {activeSection === "about" ? (
                <HammadAvatar mode="about" />
              ) : (
                <div className="w-full h-full" />
              )}
            </motion.div>

            {/* Glowing ring under image */}
            <div className="absolute -bottom-8 w-2/3 h-4 bg-violet-600/20 blur-xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
