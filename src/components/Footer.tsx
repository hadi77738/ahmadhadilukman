"use client";

import { personalDetails } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {personalDetails.fullName}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              S1 Teknik Informatika | Junior Software Developer & IT Support Specialist
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 hover:bg-brand-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all ml-2"
              aria-label="Back to Top"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border text-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalDetails.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
