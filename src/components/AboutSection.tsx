"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Activity, 
  Wifi, 
  ShieldCheck, 
  Sparkles,
  Server,
  Zap,
  Code2
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latar Belakang & Profil Lengkap
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Kombinasi unik antara ketajaman akademis (IPK 3.76), keahlian software engineering, 
            serta keandalan penanganan sistem IT rumah sakit dan infrastruktur jaringan riil di lapangan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Card 1: Academic & Engineering Core (Col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="md:col-span-7"
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-blue-400 flex items-center justify-center border border-brand-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-brand-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                    {personalDetails.educationPeriod}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Pendidikan Akademik Formal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {personalDetails.degree}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-blue-400 mt-0.5">
                    {personalDetails.university}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Lulus dengan predikat kelulusan sangat memuaskan (<strong className="text-slate-900 dark:text-white">IPK {personalDetails.gpa}</strong>). 
                  Fokus komprehensif pada Rekayasa Perangkat Lunak, Arsitektur Database Relasional, 
                  Mobile Development (Flutter & Dart), dan Pemeliharaan Sistem IT.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>IPK 3.76 (Predikat Cumlaude)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>2x Sertifikasi Resmi Oracle</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 2: Healthcare & Hospital IT Systems (Col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:col-span-5"
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Activity className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Healthcare IT & SIMRS
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    RS Roemani & RS PKU Gubug
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pengalaman nyata menangani infrastruktur sistem rumah sakit: pemeliharaan SIMRS, 
                  troubleshooting database & modul medis, serta memastikan keandalan sistem pelayanan pasien.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Server className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span>Pengecekan server berkala & kestabilan database sistem.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Dukungan teknis cepat dokter, perawat, & staf medis.</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 3: Network & Field Infrastructure (Col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="md:col-span-6"
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <Wifi className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Infrastruktur & Jaringan Lapangan
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Teknisi Jaringan Fiber Optik
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Putra Jaya Raharja (Mitra Resmi Indihome)
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Keahlian instalasi kabel drop core, konfigurasi modem ONT, serta pengukuran redaman sinyal optik 
                  menggunakan instrumen OTDR & OPM berstandar telekomunikasi.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 4: Operational Resilience & Leadership (Col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="md:col-span-6"
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                  <Zap className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Etos Kerja & Adaptabilitas Luas
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Ketahanan Kerja & Kedisiplinan
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Logistik Industri, Teknisi AC, & Operasional Tim
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rekam jejak kepemimpinan operasional tim, presisi quality control manufaktur, 
                  hingga kerja teknis fisik yang membentuk karakter kerja teliti, solutif, dan pantang menyerah.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
