import React from "react";
import { motion } from "motion/react";
import { Rocket, Heart } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

export default function Footer({ activeSection }: { activeSection?: string }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#02000d] border-t border-indigo-950/40 pt-16 pb-12 overflow-hidden">
      {/* Background Star effect */}
      <div className="absolute inset-0 bg-stars opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Animated Dotted Trailing Rocket Path */}
        <div className="w-full max-w-lg relative h-12 mb-10 hidden sm:block">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t-2 border-dashed border-violet-500/25"></div>
          
          {/* Moving Rocket */}
          <motion.div
            initial={{ left: 0 }}
            animate={{ left: "100%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-violet-400"
          >
            <Rocket className="w-5 h-5 transform rotate-45 animate-pulse" />
          </motion.div>
        </div>

        {/* Centered Large Interactive 3D Character with reasonable spacing for the speech bubble */}
        <div className="flex flex-col items-center text-center mt-6 mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-56 h-56 rounded-full border border-violet-500/30 bg-gradient-to-b from-indigo-950/30 to-black/50 backdrop-blur-md shadow-2xl flex items-center justify-center mb-6 group"
          >
            {activeSection === "footer" ? (
              <HammadAvatar mode="footer" />
            ) : (
              <div className="w-full h-full" />
            )}
          </motion.div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <span>Thanks for visiting!</span>
              <motion.span
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block origin-bottom-right"
              >
                👋
              </motion.span>
            </h3>
            <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
              I'll be with you on every step.
            </p>
          </div>
        </div>

        {/* Brand credit details */}
        <div className="w-full border-t border-indigo-950/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Hammad. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="text-gray-500 hover:text-violet-400 font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            Back to Top
          </button>

          <p className="flex items-center gap-1.5 font-light">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-violet-500 fill-violet-500" />
            <span>by Hammad</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
