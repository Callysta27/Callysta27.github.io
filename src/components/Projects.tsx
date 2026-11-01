import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Database, Code, Users } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#58A6FF] block mb-2">
              Karya Pilihan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Proyek Data & Pengembangan Web
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Studi kasus mendalam dari analisis jutaan baris data, pipeline ETL pergudangan data, hingga sistem web produksi.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Semua ({PROJECTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('data')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] ${
                filter === 'data'
                  ? 'bg-white dark:bg-slate-800 text-[#58A6FF] shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Data ({PROJECTS_DATA.filter((p) => p.category === 'data').length})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] ${
                filter === 'web'
                  ? 'bg-white dark:bg-slate-800 text-[#534AB7] dark:text-[#a89eff] shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Web ({PROJECTS_DATA.filter((p) => p.category === 'web').length})</span>
            </button>
          </div>
        </div>

        {/* Projects Grid: 3 cols desktop (>=1200), 2 cols tablet (768-1199), 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-[#58A6FF]/40 dark:hover:border-[#58A6FF]/50 shadow-sm hover:shadow-xl hover:shadow-[#58A6FF]/5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div>
                {/* Top Row: Emoji Icon + Category / Role tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {project.emoji}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    {project.role && (
                      <span className="inline-flex items-center gap-1 font-semibold text-xs text-[#58A6FF] bg-[#58A6FF]/10 px-2.5 py-1 rounded-md">
                        <Users className="w-3 h-3" />
                        {project.role}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                      {project.category === 'data' ? 'Data & BI' : 'Web Dev'}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#58A6FF] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* 2-line Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight Metric Badge / Stat */}
                <div className="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <span className="block font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                    ⚡ {project.stats}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div
                className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#58A6FF] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Detail Studi Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Repository GitHub untuk ${project.title}`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Live Demo untuk ${project.title}`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-[#58A6FF] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
