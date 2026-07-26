"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import { 
  Send, 
  ArrowRight, 
  MapPin, 
  Mail, 
  GraduationCap, 
  CheckCircle2,
  Briefcase,
  Award
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Bio & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for IT Support & Software Engineering Roles</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase">
                Selamat Datang, Saya
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15]">
                {personalDetails.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {personalDetails.title}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalDetails.tagline}
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border">
                <MapPin className="w-4 h-4 text-brand-blue dark:text-blue-400" />
                <span>{personalDetails.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-xl border border-slate-200 dark:border-dark-border">
                <Mail className="w-4 h-4 text-brand-blue dark:text-blue-400" />
                <span>{personalDetails.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi Saya (WhatsApp)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-card border border-slate-300 dark:border-dark-border transition-all"
              >
                <span>Lihat Portofolio Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Photo Profile Card (me.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full lg:w-auto flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-dark-surface p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-dark-border shadow-xl space-y-5">
              
              {/* Photo Frame Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-dark-border group">
                <img
                  src="/me.jpg"
                  alt={personalDetails.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Profile Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border border-slate-200/80 dark:border-dark-border flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      Ahmad Hadi L. H.
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      S1 Teknik Informatika (UNIMUS)
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    IPK 3.76
                  </span>
                </div>
              </div>

              {/* Quick Summary Pills */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border">
                  <div className="text-lg font-extrabold text-brand-blue dark:text-blue-400">
                    3.76
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    IPK Kelulusan
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border">
                  <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400">
                    8+
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    Pengalaman
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border">
                  <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                    2x
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    Oracle Certs
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
