import React from "react";
import { motion } from "motion/react";
import { certificatesData } from "../data";
import { ShieldCheck, ArrowRight, Award, BadgeCheck, Linkedin } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Certificates({ activeSection }: { activeSection?: string }) {
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-hammad-9379a13ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Background Glowing Lights */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full glow-sphere-2 blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Certificates Grid + View All */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.4)" }}
                className="certificate-card bg-[#050515]/60 border border-indigo-950/80 p-5 rounded-2xl flex flex-col justify-between h-[160px] relative group overflow-hidden transition-all duration-300"
              >
                {/* Custom glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between">
                  {/* Brand Letter / Small Logo Box */}
                  <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-900/50 flex items-center justify-center font-mono text-xs font-black text-violet-300">
                    {cert.logo === "In" ? (
                      <Linkedin className="w-5 h-5 text-sky-400 fill-sky-400/10" />
                    ) : (
                      cert.logo
                    )}
                  </div>

                  {/* Verified Indicator */}
                  {cert.verified && (
                    <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-950/65 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                <div className="text-left mt-4">
                  <h3 className="text-sm md:text-base font-bold text-white line-clamp-1 group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light mt-0.5">
                    {cert.organization}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* View All Card */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.6)", backgroundColor: "rgba(139, 92, 246, 0.05)" }}
              className="certificate-view-all bg-[#050515]/30 border border-indigo-950/80 p-5 rounded-2xl flex items-center justify-between h-[160px] relative group overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="text-left space-y-1 z-10">
                <span className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 inline-block mb-1">
                  <Award className="w-5 h-5 text-violet-400 animate-pulse" />
                </span>
                <h3 className="text-base font-bold text-white">
                  View All
                </h3>
                <p className="text-gray-400 text-xs font-light">
                  See additional certifications
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-indigo-950/60 border border-indigo-900 group-hover:bg-violet-600 group-hover:border-violet-400 text-gray-400 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>

          {/* Right Column: 3D character looking at phone */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 h-[350px] md:h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] h-full rounded-3xl border border-violet-500/20 bg-gradient-to-b from-indigo-950/10 to-black/40 backdrop-blur-sm shadow-2xl flex items-center justify-center"
            >
              {activeSection === "certificates" ? (
                <HammadAvatar mode="certificates" />
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
