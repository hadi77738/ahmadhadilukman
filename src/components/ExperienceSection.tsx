"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'it' | 'technical' | 'operational'>('all');

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Jejak Karir & Pengalaman
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Pengalaman Kerja & Magang
          </h3>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Semua Pengalaman' },
            { id: 'it', label: 'IT & Software Dev' },
            { id: 'technical', label: 'Teknik & Jaringan' },
            { id: 'operational', label: 'Operasional & Manajemen' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-surface'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-dark-border -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {filteredExperiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-dark-surface border-4 border-brand-blue dark:border-blue-500 shadow-sm z-10 hidden sm:flex items-center justify-center" />

                  {/* Card Content */}
                  <div className="w-full sm:w-[calc(50%-2rem)] bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow transition-all duration-200 group">
                    <div className="space-y-3">
                      
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>

                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-surface text-slate-500 dark:text-slate-400">
                          {exp.category === 'it' ? 'IT / Software' : exp.category === 'technical' ? 'Teknis Optik' : 'Operasional'}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h4>
                        <h5 className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5 text-brand-blue dark:text-blue-400" />
                          {exp.company}
                        </h5>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Job Highlights */}
                      <div className="pt-2.5 border-t border-slate-100 dark:border-dark-border space-y-1">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <ChevronRight className="w-3.5 h-3.5 text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
