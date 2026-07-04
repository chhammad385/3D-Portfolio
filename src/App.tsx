import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "education", "certificates", "contact", "footer"];
    
    const handleScroll = () => {
      // Direct sensor for reaching the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection("footer");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#030014] text-white selection:bg-violet-500/30 selection:text-white min-h-screen relative overflow-hidden">
      {/* Floating global ambient glow points */}
      <div className="absolute top-10 left-10 w-96 h-96 glow-sphere-1 blur-3xl rounded-full opacity-40 pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-[40%] right-10 w-96 h-96 glow-sphere-2 blur-3xl rounded-full opacity-30 pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] glow-sphere-1 blur-[140px] rounded-full opacity-20 pointer-events-none -z-10"></div>

      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <Sidebar />
      
      <main className="relative">
        <Hero activeSection={activeSection} />
        <About activeSection={activeSection} />
        <Skills activeSection={activeSection} />
        <Projects activeSection={activeSection} />
        <Education activeSection={activeSection} />
        <Certificates activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </main>

      <Footer activeSection={activeSection} />
    </div>
  );
}
