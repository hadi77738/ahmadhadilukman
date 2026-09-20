"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { 
  Code2, 
  Layers, 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Activity, 
  Wifi, 
  Cpu, 
  Wrench, 
  FileSpreadsheet, 
  FileText, 
  Box, 
  Users,
  CheckCircle2,
  Sparkles,
  Search
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

const iconMap: Record<string, React.ReactNode> = {
  "code": <Code2 className="w-5 h-5 text-brand-500" />,
  "layers": <Layers className="w-5 h-5 text-indigo-500" />,
  "globe": <Globe className="w-5 h-5 text-cyan-500" />,
  "smartphone": <Smartphone className="w-5 h-5 text-emerald-500" />,
  "database": <Database className="w-5 h-5 text-blue-500" />,
  "server": <Server className="w-5 h-5 text-purple-500" />,
  "activity": <Activity className="w-5 h-5 text-rose-500" />,
  "wifi": <Wifi className="w-5 h-5 text-sky-500" />,
  "cpu": <Cpu className="w-5 h-5 text-amber-500" />,
  "wrench": <Wrench className="w-5 h-5 text-slate-500" />,
  "file-spread-sheet": <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
  "file-text": <FileText className="w-5 h-5 text-blue-600" />,
  "box": <Box className="w-5 h-5 text-amber-600" />,
  "users": <Users className="w-5 h-5 text-indigo-600" />,
};

const contextBadges: Record<string, string> = {
  "PHP": "Backend & SIMRS",
  "Laravel Framework": "Web Application",
  "Flutter & Mobile Dev": "Absensi Smart",
  "WordPress Development": "CMS & Web Profile",
  "MySQL Database": "Database SIMRS & Web",
  "Oracle Database": "Oracle Academy Certified",
  "Firebase Backend": "Realtime Auth & DB",
  "SIMRS (Sistem Informasi RS)": "RS Roemani & RS PKU",
  "Jaringan Fiber Optik (Indihome)": "OTDR & ONT Drop Core",
  "Hardware & Server Maintenance": "Infrastruktur Rumah Sakit",
  "Troubleshooting Software": "Diagnosis Klinis & Teknis",
  "Microsoft Excel & Data": "Data Cleaning & Rekap",
  "Microsoft Word & Office": "Dokumentasi Teknis",
  "Logistik & Quality Control": "Manufaktur & Presisi",
  "Operational Leadership": "Manajemen Tim Kerja",
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = skillCategories[activeTab];
  const allSkills = skillCategories.flatMap(c => c.skills);

  const displayedSkills = searchQuery.trim()
    ? allSkills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    : currentCategory.skills;

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-dark-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian Teknis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skill Set & Kompetensi Utama
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Daftar teknologi, infrastruktur, dan perangkat yang dikuasai baik secara teoritis akademis 
            maupun pengalaman lapangan secara langsung.
          </p>
        </div>

        {/* Category Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xs w-full sm:w-auto">
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.categoryName}
                onClick={() => {
                  setActiveTab(idx);
                  setSearchQuery("");
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === idx && !searchQuery
                    ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-dark-surface"
                }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari skill atau tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchQuery ? "search" : activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {displayedSkills.map((skill, idx) => (
              <SpotlightCard
                key={skill.name}
                className="p-5 flex flex-col justify-between hover-glow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center">
                      {iconMap[skill.iconName] || <Sparkles className="w-5 h-5 text-brand-500" />}
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Kompeten
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] font-medium text-brand-600 dark:text-blue-400 mt-0.5">
                      {contextBadges[skill.name] || "Praktik & Studi"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Implementasi Nyata</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Teruji</span>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
