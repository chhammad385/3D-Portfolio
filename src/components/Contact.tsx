import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquareHeart, CheckCircle, AlertCircle } from "lucide-react";
import HammadAvatar from "./HammadAvatar";

// Set VITE_WEB3FORMS_ACCESS_KEY in your local .env file or in Vercel project settings.
const WEB3FORMS_ACCESS_KEY = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact({ activeSection }: { activeSection?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "info">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all fields!");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    const finalAccessKey = WEB3FORMS_ACCESS_KEY;

    if (!finalAccessKey) {
      // Elegant fallback mode so they can see how it works immediately
      setTimeout(() => {
        setSubmitStatus("info");
        setStatusMessage("Demo mode: Message received! Add your Web3Forms key later in Vercel or .env to enable real email delivery.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        
        // Scroll to footer after 3 seconds
        setTimeout(() => {
          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
        }, 3000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: finalAccessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage("Success! Your message has been sent to Hammad.");
        setFormData({ name: "", email: "", message: "" });
        
        // Scroll to footer after 3 seconds
        setTimeout(() => {
          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
        }, 3000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-violet-400" />,
      text: "chhammad385@gmail.com",
      href: "mailto:chhammad385@gmail.com"
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5 text-violet-400" />,
      text: "linkedin.com/in/muhammad-hammad-9379a13ab",
      href: "https://www.linkedin.com/in/muhammad-hammad-9379a13ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      id: "github",
      icon: <Github className="w-5 h-5 text-violet-400" />,
      text: "github.com/chhammad385",
      href: "https://github.com/chhammad385"
    },
    {
      id: "location",
      icon: <MapPin className="w-5 h-5 text-violet-400" />,
      text: "Sahiwal, Pakistan",
      href: "#"
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden border-t border-indigo-950/20"
    >
      {/* Stars Background Overlay */}
      <div className="absolute inset-0 bg-stars opacity-30 pointer-events-none -z-20"></div>

      {/* Background Glowing Lights */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full glow-sphere-1 blur-[110px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-xs font-bold text-violet-400 tracking-wider uppercase bg-violet-950/40 px-3 py-1.5 rounded-full border border-violet-800/30 w-fit inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Let's Build Something Amazing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-4 space-y-4 text-left order-2 lg:order-1">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.id}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex items-center space-x-4 bg-[#050515]/50 border border-indigo-950/80 hover:border-violet-500/40 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] group block"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-950/40 border border-violet-900/50 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-400 text-violet-400 group-hover:text-white transition-all duration-300 shadow-md">
                  {info.icon}
                </div>
                <div className="text-left">
                  <span className="text-xs text-gray-500 font-medium block uppercase tracking-wider">
                    {info.id}
                  </span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Middle/Form Column */}
          <div className="lg:col-span-5 order-3 lg:order-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#050515]/60 border border-indigo-950 p-6 md:p-8 rounded-2xl backdrop-blur-md space-y-5 text-left"
            >
              <div className="space-y-1">
                <label htmlFor="form-name" className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-[#030014]/80 border border-indigo-950 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="form-email" className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="form-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full bg-[#030014]/80 border border-indigo-950 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="form-message" className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full bg-[#030014]/80 border border-indigo-950 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  required
                />
              </div>

              {submitStatus !== "idle" && (
                <div className={`p-4 rounded-xl flex items-start space-x-2.5 text-xs leading-relaxed transition-all duration-300 ${
                  submitStatus === "success" 
                    ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-200"
                    : submitStatus === "error"
                      ? "bg-rose-950/40 border border-rose-500/30 text-rose-200"
                      : "bg-indigo-950/60 border border-violet-500/30 text-violet-200"
                }`}>
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${submitStatus === "error" ? "text-rose-400" : "text-violet-400"}`} />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-violet-600/35 hover:translate-y-[-1px] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          </div>

          {/* Right Column: 3D character with arms crossed */}
          <div className="lg:col-span-3 flex flex-col justify-center items-center order-1 lg:order-3 h-[380px] md:h-[480px] relative">
            
            {/* Let's connect handwritten text */}
            <div className="absolute top-0 left-[-10px] transform -rotate-12 bg-indigo-950/80 border border-violet-500/30 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md z-20">
              <span className="font-signature text-2xl md:text-3xl text-violet-300 whitespace-nowrap block select-none">
                Let's connect!
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[240px] h-full rounded-2xl border border-violet-500/20 bg-gradient-to-b from-indigo-950/10 to-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              {activeSection === "contact" ? (
                <HammadAvatar mode="contact" />
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
