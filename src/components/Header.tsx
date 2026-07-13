import React, { useState, useEffect } from "react";
import { Sun, Moon, ArrowDownToLine, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ activeSection, theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.setTimeout(() => {
        const headerOffset = 92;
        const elementTop = element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: elementTop, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-[60] pointer-events-auto isolate transition-all duration-300 ${
        scrolled
          ? "bg-[#030014]/85 backdrop-blur-md border-b border-indigo-950/40 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-1 cursor-pointer pl-2 pr-1"
          onClick={() => handleScrollTo("hero")}
        >
          <span className="header-logo signature-title inline-block whitespace-nowrap px-1 py-1 leading-none text-3xl bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
            Hammad
          </span>
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`header-nav-link text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id
                  ? "text-violet-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-indigo-950 hover:bg-indigo-950/40 transition-colors text-gray-400 hover:text-white cursor-pointer btn-header-toggle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5 text-indigo-500 animate-pulse" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>
          <a
            href="/cv.pdf"
            download="Muhammad_Hammad_CV.pdf"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-indigo-950/20 hover:bg-violet-600 border border-violet-500/40 hover:border-violet-500 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 cursor-pointer btn-header-cv"
          >
            <span>Download CV</span>
            <ArrowDownToLine className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-indigo-950 hover:bg-indigo-950/40 text-gray-400 cursor-pointer btn-header-toggle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5 text-indigo-500 animate-pulse" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-indigo-950 text-gray-400 hover:text-white cursor-pointer btn-header-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-[60] md:hidden w-full overflow-hidden bg-[#030014]/95 border-b border-indigo-950/60 backdrop-blur-xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`mobile-nav-link text-left text-base font-medium py-2 border-b border-indigo-950/20 cursor-pointer ${
                    activeSection === item.id
                      ? "text-violet-400 pl-2 border-l-2 border-l-violet-500 border-b-transparent"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download="Muhammad_Hammad_CV.pdf"
                className="flex items-center justify-center space-x-2 w-full py-3 mt-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <span>Download CV</span>
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
