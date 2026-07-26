"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ExternalLink, Github, FolderGit2, Star, Globe } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-dark-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Portofolio & Karya Nyata
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Proyek Sistem & Aplikasi
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Kumpulan proyek nyata yang dikembangkan untuk tugas akademis UNIMUS, UMKM lokal, maupun sistem Android dan Mobile App.
          </p>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>

                  {proj.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-500" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {proj.demoUrl ? (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue/10 dark:bg-blue-500/10 text-brand-blue dark:text-blue-400 hover:bg-brand-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-xs font-semibold border border-brand-blue/20 dark:border-blue-500/20 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Demo Web</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:bg-brand-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all"
                    aria-label="GitHub Repository"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
