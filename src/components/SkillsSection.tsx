"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  CheckCircle,
  Sparkles
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "code": <Code2 className="w-5 h-5" />,
  "layers": <Layers className="w-5 h-5" />,
  "globe": <Globe className="w-5 h-5" />,
  "smartphone": <Smartphone className="w-5 h-5" />,
  "database": <Database className="w-5 h-5" />,
  "server": <Server className="w-5 h-5" />,
  "activity": <Activity className="w-5 h-5" />,
  "wifi": <Wifi className="w-5 h-5" />,
  "cpu": <Cpu className="w-5 h-5" />,
  "wrench": <Wrench className="w-5 h-5" />,
  "file-spread-sheet": <FileSpreadsheet className="w-5 h-5" />,
  "file-text": <FileText className="w-5 h-5" />,
  "box": <Box className="w-5 h-5" />,
  "users": <Users className="w-5 h-5" />,
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-dark-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Keahlian Teknis & Alat
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Skill Set & Penguasaan Teknologi
          </h3>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.categoryName}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? "bg-brand-blue dark:bg-blue-600 text-white shadow-sm"
                  : "bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface"
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-blue/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/40">
                  {iconMap[skill.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Terverifikasi Studi & Praktik
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Menguasai
                </span>
                <span className="text-[11px] text-slate-400">Praktik Kerja</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
