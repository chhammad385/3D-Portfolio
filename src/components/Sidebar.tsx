import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "motion/react";

export default function Sidebar() {
  const socials = [
    {
      id: "github",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/chhammad385",
      label: "GitHub"
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/muhammad-hammad-9379a13ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      label: "LinkedIn"
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:chhammad385@gmail.com",
      label: "Email"
    },
    {
      id: "cv",
      icon: <Download className="w-5 h-5" />,
      url: "/CV.pdf",
      label: "Download CV"
    }
  ];

  return (
    <div className="sidebar-container fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
      <div className="sidebar-line-top w-[1px] h-16 bg-gradient-to-b from-transparent to-indigo-950"></div>
      <div className="flex flex-col space-y-3 bg-[#0a0a16]/40 p-2.5 rounded-full border border-indigo-950/50 backdrop-blur-md">
        {socials.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            whileHover={{ scale: 1.15, y: -2 }}
            className="sidebar-item p-3.5 rounded-full bg-indigo-950/20 hover:bg-violet-600 border border-indigo-950 hover:border-violet-400 text-gray-400 hover:text-white transition-all duration-300 relative group cursor-pointer"
            aria-label={social.label}
          >
            {social.icon}
            
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-indigo-950 border border-violet-500/30 text-xs font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
      <div className="sidebar-line-bottom w-[1px] h-16 bg-gradient-to-t from-transparent to-indigo-950"></div>
    </div>
  );
}
