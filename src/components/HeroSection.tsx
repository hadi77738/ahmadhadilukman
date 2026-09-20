"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import { 
  Send, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Copy, 
  Check, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Activity,
  Terminal
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Intro & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Dev & IT Support Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-blue-400 flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4" />
                <span>Portofolio & Rekam Jejak</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Ahmad Hadi <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                  Lukmanul Hakim
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300">
                Junior Software Developer & IT Support Specialist
              </p>
            </div>

            {/* Tagline / Bio Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Lulusan S1 Teknik Informatika UNIMUS (<strong className="text-slate-800 dark:text-slate-200">IPK 3.76</strong>). 
              Berpengalaman langsung di bidang Software Engineering (Web & Mobile), Database Management, 
              serta Infrastruktur IT & SIMRS di Rumah Sakit Roemani Muhammadiyah & RS PKU Gubug.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
                <span>Grobogan, Jawa Tengah</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-600 dark:text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>UNIMUS (2022 - 2026)</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-card hover:bg-slate-200 dark:hover:bg-dark-surface border border-light-border dark:border-dark-border text-xs text-slate-600 dark:text-slate-400 transition-colors"
                title="Salin Alamat Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>ahmad.hadi77738@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 active:scale-95 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-dark-surface border border-light-border dark:border-dark-border shadow-xs active:scale-95 transition-all duration-200"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 text-brand-600 dark:text-blue-400" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Bento Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/30 via-indigo-500/20 to-cyan-500/30 blur-xl opacity-70 -z-10"></div>

              {/* Main Card Container */}
              <div className="rounded-[2rem] bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border p-5 sm:p-6 shadow-xl space-y-5">
                
                {/* Photo frame with verified tag */}
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden group shadow-inner border border-slate-200/80 dark:border-dark-border">
                  <img
                    src="/me.jpg"
                    alt={personalDetails.fullName}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Profile overlay details */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-dark-card/90 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
                        Ahmad Hadi L. H.
                      </h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                        Teknik Informatika UNIMUS
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-black bg-brand-500/10 text-brand-600 dark:text-blue-400 border border-brand-500/20">
                      IPK 3.76
                    </span>
                  </div>
                </div>

                {/* Micro Stat Highlights */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border">
                    <div className="text-base sm:text-lg font-black text-brand-600 dark:text-blue-400">
                      3.76
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      IPK Kelulusan
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border">
                    <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                      2x
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      Oracle Certs
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border">
                    <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                      6+
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      Pengalaman
                    </div>
                  </div>
                </div>

                {/* Field Tags */}
                <div className="pt-2 border-t border-slate-100 dark:border-dark-border flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-brand-500" />
                    IT RS & SIMRS
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    Next.js & Flutter
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

