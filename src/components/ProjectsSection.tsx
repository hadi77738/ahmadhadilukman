"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { 
  ExternalLink, 
  Github, 
  FolderGit2, 
  Star, 
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

const categoryIconMap: Record<string, React.ReactNode> = {
  "Web & Education App": <Globe className="w-4 h-4 text-brand-500" />,
  "Mobile Application": <Smartphone className="w-4 h-4 text-emerald-500" />,
  "Web & E-Commerce UMKM": <Globe className="w-4 h-4 text-indigo-500" />,
  "Android Modding & Utility System": <Cpu className="w-4 h-4 text-cyan-500" />,
};

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "Semua Proyek" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile (Flutter)" },
    { id: "system", label: "Android Modding" },
  ];

  const filteredProjects = projects.filter(p => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "web") return p.category.includes("Web");
    if (selectedFilter === "mobile") return p.category.includes("Mobile");
    if (selectedFilter === "system") return p.category.includes("Android") || p.category.includes("Modding");
    return true;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-dark-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Karya & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyek Sistem & Aplikasi Terpilih
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Showcase produk perangkat lunak nyata yang dibangun untuk kebutuhan akademis universitas, 
            klien UMKM, maupun modul sistem tingkat lanjut.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedFilter === opt.id
                  ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-xs"
                  : "bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-light-border dark:border-dark-border"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between hover-glow group">
                  <div className="space-y-4">
                    
                    {/* Mockup Top Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-dark-border">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-card border border-light-border dark:border-dark-border">
                          {categoryIconMap[proj.category] || <FolderGit2 className="w-4 h-4 text-brand-500" />}
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          {proj.category}
                        </span>
                      </div>

                      {proj.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-500" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-light-border dark:border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository GitHub</span>
                    </a>

                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-xs transition-all"
                      >
                        <span>Demo Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
