"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Activity, 
  Wifi, 
  Box 
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

const categoryIconMap: Record<string, React.ReactNode> = {
  it: <Activity className="w-4 h-4 text-brand-500" />,
  technical: <Wifi className="w-4 h-4 text-cyan-500" />,
  operational: <Box className="w-4 h-4 text-amber-500" />,
};

const categoryBadgeMap: Record<string, { label: string; class: string }> = {
  it: { label: "IT & Software", class: "bg-blue-500/10 text-brand-600 dark:text-blue-400 border-blue-500/20" },
  technical: { label: "Teknik Jaringan", class: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
  operational: { label: "Operasional & QC", class: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
};

export function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'it' | 'technical' | 'operational'>('all');

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jejak Karir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pengalaman Kerja & Magang
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Rekam jejak profesional dari lingkungan medis rumah sakit, jaringan optik telekomunikasi, 
            hingga operasional lapangan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Semua Pengalaman' },
            { id: 'it', label: 'IT & Software Dev' },
            { id: 'technical', label: 'Teknik & Jaringan' },
            { id: 'operational', label: 'Operasional & QC' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === btn.id
                  ? "bg-slate-900 dark:bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-light-border dark:border-dark-border"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-dark-border ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          <AnimatePresence>
            {filteredExperiences.map((exp, idx) => {
              const badge = categoryBadgeMap[exp.category];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Custom Icon Dot on line */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-6 w-7 h-7 rounded-full bg-white dark:bg-dark-surface border-2 border-brand-500 shadow-sm flex items-center justify-center">
                    {categoryIconMap[exp.category] || <Briefcase className="w-3.5 h-3.5 text-brand-500" />}
                  </div>

                  <SpotlightCard className="p-6 sm:p-7 hover-glow">
                    <div className="space-y-4">
                      
                      {/* Top Meta Line: Period & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.class}`}>
                            {badge.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-card px-3 py-1 rounded-full border border-light-border dark:border-dark-border">
                          <Calendar className="w-3.5 h-3.5 text-brand-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company Name */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-brand-600 dark:text-blue-400 flex items-center gap-1.5 mt-0.5">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Action Highlights */}
                      <div className="pt-2 border-t border-slate-100 dark:border-dark-border space-y-2">
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          Tanggung Jawab & Kontribusi Kunci:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-normal">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
