import React from "react";
import { motion } from "motion/react";
import { educationData } from "../data";
import { GraduationCap, School, BookOpen, Calendar, Award } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Education({ activeSection }: { activeSection?: string }) {
  const getTimelineIcon = (id: string) => {
    switch (id) {
      case "comsats-edu":
        return <GraduationCap className="w-5 h-5 text-violet-400 animate-pulse" />;
      case "fsc-edu":
        return <School className="w-5 h-5 text-violet-400" />;
      case "matric-edu":
        return <BookOpen className="w-5 h-5 text-violet-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section
      id="education"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Stars Background Overlay */}
      <div className="absolute inset-0 bg-stars opacity-30 pointer-events-none -z-20"></div>

      {/* Background Glowing Lights */}
      <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] rounded-full glow-sphere-1 blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
            My Academic Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Timeline list */}
          <div className="lg:col-span-7 space-y-8 relative order-2 lg:order-1 pl-4 md:pl-8">
            {/* Timeline Vertical Path line */}
            <div className="absolute left-[23px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-600 via-indigo-950 to-transparent"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-4 md:gap-8 group"
              >
                {/* Timeline Icon Point */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border bg-[#050515] border-indigo-950/80 group-hover:border-violet-500/40 group-hover:shadow-lg group-hover:shadow-violet-600/20 transition-all duration-300 z-10 self-start">
                  {getTimelineIcon(edu.id)}
                </div>

                {/* Timeline Glassmorphic Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(139, 92, 246, 0.3)" }}
                  className="flex-1 bg-[#050515]/50 border border-indigo-950/80 p-6 rounded-2xl backdrop-blur-md text-left transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-1.5 text-xs text-violet-400 font-semibold tracking-wider uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.id === "comsats-edu" && (
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-violet-600 px-2.5 py-1 rounded-full text-white shadow-md shadow-violet-600/20 animate-pulse">
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xs md:text-sm text-gray-300 font-medium mb-3">
                    {edu.institution}
                  </h4>

                  {edu.details && (
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono bg-indigo-950/20 border border-indigo-950 px-3 py-1.5 rounded-lg w-max">
                      <Award className="w-4 h-4 text-violet-400" />
                      <span>{edu.details}</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D character reading an open book */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 h-[350px] md:h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] h-full rounded-3xl border border-violet-500/20 bg-gradient-to-b from-indigo-950/10 to-black/40 backdrop-blur-sm shadow-2xl flex items-center justify-center"
            >
              {activeSection === "education" ? (
                <HammadAvatar mode="education" />
              ) : (
                <div className="w-full h-full" />
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
