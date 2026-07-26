"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import { GraduationCap, Award, CheckCircle2, UserCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Tentang Saya
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Latar Belakang & Perjalanan Profesional
          </h3>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-dark-surface p-8 rounded-3xl border border-slate-200/80 dark:border-dark-border shadow-md flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Profil Singkat
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Dedikasi pada Teknologi Informasi & Software Engineering
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {personalDetails.aboutText}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-dark-border grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Troubleshooting Andal</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Terbiasa menangani software, database, dan jaringan di lingkungan kerja nyata.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Adaptabilitas Kerja Tinggi</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Pengalaman serba bisa dari IT Rumah Sakit, Fiber Optik, hingga Logistik.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-slate-900 dark:bg-dark-card text-white p-8 rounded-3xl shadow-md border border-slate-800 dark:border-dark-border flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Pendidikan Formal
                  </h4>
                  <p className="text-xs text-slate-400">
                    Riwayat Akademik
                  </p>
                </div>
              </div>

              {/* UNIMUS */}
              <div className="p-4 rounded-2xl bg-slate-800/80 dark:bg-dark-surface border border-slate-700/60 dark:border-dark-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400">
                    {personalDetails.educationPeriod}
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    IPK {personalDetails.gpa}
                  </span>
                </div>
                <h5 className="font-bold text-base text-white">
                  Universitas Muhammadiyah Semarang
                </h5>
                <p className="text-xs text-slate-300">
                  {personalDetails.degree}
                </p>
                <p className="text-[12px] text-slate-400 italic">
                  * Aktif dalam kegiatan akreditasi Program Studi dan Fakultas.
                </p>
              </div>

              {/* High school */}
              <div className="p-4 rounded-2xl bg-slate-800/40 dark:bg-dark-surface/50 border border-slate-800 dark:border-dark-border space-y-1">
                <span className="text-xs text-slate-400">Jul 2019 - Mar 2021</span>
                <h5 className="font-semibold text-sm text-slate-200">
                  SMA Islam Sudirman Tanggungharjo
                </h5>
                <p className="text-xs text-slate-400">Pendidikan MIPA (Science Education)</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 dark:border-dark-border text-xs text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Komitmen pada keunggulan akademis dan praktik profesional.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
