"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Sertifikasi", href: "#certifications" },
  { name: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "glass-panel shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-white/40 dark:bg-dark-surface/40 backdrop-blur-md border border-light-border/60 dark:border-dark-border/60"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-500/30 dark:ring-blue-400/40 group-hover:ring-brand-500 transition-all duration-300 shadow-sm">
                <img
                  src="/me.jpg"
                  alt={personalDetails.fullName}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-dark-surface rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 tracking-tight leading-tight group-hover:text-brand-500 dark:group-hover:text-blue-400 transition-colors">
                {personalDetails.shortName}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                <span>IT & Dev</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Available</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 dark:bg-dark-card/60 p-1 rounded-full border border-light-border/60 dark:border-dark-border/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-brand-600 dark:text-blue-400 bg-white dark:bg-dark-surface shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-dark-surface/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-sm hover:shadow-md hover:shadow-brand-500/20 active:scale-95 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hubungi</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto glass-panel rounded-3xl p-5 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-dark-card transition-all"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-slate-200 dark:border-dark-border">
                <a
                  href={personalDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
