"use client";

import { personalDetails } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, Send, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-bg py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {personalDetails.fullName}
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              S1 Teknik Informatika UNIMUS | Junior Software Developer & IT Support Specialist
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-dark-surface border border-light-border dark:border-dark-border transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-dark-surface border border-light-border dark:border-dark-border transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-dark-surface border border-light-border dark:border-dark-border transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-blue-400 hover:bg-brand-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white border border-brand-500/20 transition-all ml-2"
              aria-label="Kembali ke Atas"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Dibangun dengan Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
