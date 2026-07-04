import React from "react";
import { motion } from "motion/react";
import { skillsCategories, skillsProgress } from "../data";
import { 
  Code2, Palette, FileCode, Cpu, Layers, Coffee, Leaf, 
  Terminal, Globe, Database, Flame, Box, GitBranch, Github, Wrench, Monitor, Trophy
} from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Skills({ activeSection }: { activeSection?: string }) {
  const getTechIcon = (iconName: string, color: string) => {
    const size = "w-4 h-4";
    const style = { color: iconName === "github" && color === "#FFFFFF" ? "currentColor" : color };
    switch (iconName) {
      case "html": return <Code2 className={size} style={style} />;
      case "css": return <Palette className={size} style={style} />;
      case "javascript": return <FileCode className={size} style={style} />;
      case "react": return <Cpu className={size} style={style} />;
      case "flutter": return <Layers className={size} style={style} />;
      case "java": return <Coffee className={size} style={style} />;
      case "springboot": return <Leaf className={size} style={style} />;
      case "python": return <Terminal className={size} style={style} />;
      case "rest": return <Globe className={size} style={style} />;
      case "mysql": return <Database className={size} style={style} />;
      case "sqlite": return <Database className={size} style={style} />;
      case "firebase": return <Flame className={size} style={style} />;
      case "docker": return <Box className={size} style={style} />;
      case "git": return <GitBranch className={size} style={style} />;
      case "github": return <Github className={size} style={style} />;
      case "maven": return <Wrench className={size} style={style} />;
      case "vscode": return <Monitor className={size} style={style} />;
      default: return <Code2 className={size} style={style} />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Stars Background Overlay */}
      <div className="absolute inset-0 bg-stars bg-cover opacity-30 pointer-events-none -z-20"></div>

      {/* Background Glowing Lights */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full glow-sphere-2 blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Categorized grid of skills */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            {skillsCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                className="bg-[#050515]/50 border border-indigo-950/80 p-5 rounded-2xl backdrop-blur-md"
              >
                <h3 className="text-sm font-semibold tracking-wider text-violet-300 uppercase mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 bg-indigo-950/20 hover:bg-violet-600/10 border border-indigo-950 hover:border-violet-500/30 px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white transition-all duration-300 select-none cursor-pointer"
                    >
                      {getTechIcon(skill.icon, skill.color)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle: 3D character head/avatar */}
          <div className="lg:col-span-3 flex justify-center items-center order-1 lg:order-2 h-[340px] md:h-[400px] lg:h-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-64 md:w-76 md:h-76 lg:w-64 lg:h-64 xl:w-76 xl:h-76 rounded-full border border-violet-500/30 bg-gradient-to-b from-indigo-950/30 to-black/50 backdrop-blur-md shadow-2xl flex items-center justify-center group"
            >
              {activeSection === "skills" ? (
                <HammadAvatar mode="skills" />
              ) : (
                <div className="w-full h-full" />
              )}
            </motion.div>
          </div>

          {/* Right Column: Skill Progress bars */}
          <div className="lg:col-span-4 space-y-6 order-3">
            <div className="bg-[#050515]/50 border border-indigo-950/80 p-6 rounded-2xl backdrop-blur-md space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-violet-300 uppercase">
                Core Proficiency
              </h3>
              
              <div className="space-y-5">
                {skillsProgress.map((skill, index) => (
                  <div key={skill.name} className="space-y-2 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="font-bold text-violet-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 bg-indigo-950/40 rounded-full overflow-hidden border border-indigo-950/80 relative">
                      {/* Active Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-indigo-400 rounded-full relative"
                      >
                        {/* Glow tip */}
                        <div className="absolute right-0 top-0 h-full w-2 bg-white/40 blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
