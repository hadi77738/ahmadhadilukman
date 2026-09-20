"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { Award, ShieldCheck, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kredensial Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sertifikasi Oracle Academy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Bukti kompetensi formal berstandar internasional dalam Rekayasa Perangkat Lunak Java 
            dan Pengelolaan Database Relasional Oracle.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between hover-glow space-y-6">
                <div className="space-y-4">
                  {/* Top Badge & Issuer */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <Award className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-4 h-4" />
                      Terverifikasi Resmi
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-blue-400">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Competency box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Cakupan Kurikulum & Kompetensi:</span>
                    </div>
                    <div className="leading-relaxed pl-5 text-slate-500 dark:text-slate-400">
                      {cert.badge}
                    </div>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-dark-border">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>Masa Berlaku: {cert.date}</span>
                  </div>
                  <span className="font-bold text-amber-600 dark:text-amber-400">Oracle Academy</span>
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
