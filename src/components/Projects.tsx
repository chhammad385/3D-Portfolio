import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Projects({ activeSection }: { activeSection?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full glow-sphere-1 blur-[110px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-3">
            <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Projects I've Built
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400 font-semibold uppercase tracking-wider bg-indigo-950/20 border border-indigo-900/40 px-4 py-2 rounded-full backdrop-blur-sm self-start md:self-auto">
            <FolderGit2 className="w-4 h-4 text-violet-400 animate-pulse" />
            <span>5 Major Apps</span>
          </div>
        </div>

        {/* Layout Grid: Projects cards and 3D character on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Projects Cards Area */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8, borderColor: "rgba(139, 92, 246, 0.4)" }}
                className="project-card bg-[#050515]/60 border border-indigo-950 rounded-2xl overflow-hidden transition-all duration-300 relative group flex flex-col justify-between shadow-xl min-h-[480px] h-full"
              >
                {/* Backlight Glow on hover */}
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-violet-600/30 via-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

                {/* Card Thumbnail Frame */}
                <div className="h-[180px] w-full overflow-hidden relative border-b border-indigo-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-[#030014]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-950 text-[10px] font-bold text-gray-300 flex items-center uppercase tracking-wider">
                    <span>Project</span>
                  </div>

                  {/* Actions overlay */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-indigo-950 border border-indigo-900 text-gray-300 hover:text-white hover:bg-violet-600 hover:border-violet-400 transition-all duration-300 shadow-lg cursor-pointer"
                        title="View GitHub Source"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-indigo-950 border border-indigo-900 text-gray-300 hover:text-white hover:bg-violet-600 hover:border-violet-400 transition-all duration-300 shadow-lg cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-2.5">
                    <h3 className="text-base font-semibold text-white group-hover:text-violet-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-violet-400 text-[10px] font-bold tracking-wider uppercase">
                      {project.subtitle}
                    </p>
                    {project.description && (
                      <p className="text-gray-300 text-[11px] leading-relaxed font-light">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Badges/Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-950/55 border border-indigo-900/50 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side: 3D character pointing towards cards */}
          <div className="lg:col-span-4 flex justify-center items-center h-full lg:sticky top-32 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[380px] h-[340px] md:h-[480px] lg:h-[580px] rounded-2xl border border-violet-500/20 bg-gradient-to-b from-indigo-950/10 to-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              {activeSection === "projects" ? (
                <HammadAvatar mode="projects" />
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
