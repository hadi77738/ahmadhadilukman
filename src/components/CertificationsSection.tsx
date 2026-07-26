"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { Award, ShieldCheck, Calendar } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Kredensial & Lisensi
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Sertifikasi Kompetensi Resmi
          </h3>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow transition-all group space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <Award className="w-7 h-7" />
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Terverifikasi
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-blue-400">
                  {cert.issuer}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {cert.title}
                </h4>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-200">Domain Keahlian:</div>
                <div>{cert.badge}</div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-dark-border">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue dark:text-blue-400" />
                  <span>Masa Berlaku: {cert.date}</span>
                </div>
                <span className="font-bold text-amber-600 dark:text-amber-400">Oracle Academy</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
