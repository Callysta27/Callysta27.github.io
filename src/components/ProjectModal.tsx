import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, BarChart3, Users } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-3.5 pr-6">
            <span className="text-3xl p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 shrink-0">
              {project.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                <span>{project.category === 'data' ? 'Data Analytics & BI' : 'Web Development'}</span>
                {project.role && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-[#58A6FF] font-medium">
                      <Users className="w-3.5 h-3.5" />
                      {project.role}
                    </span>
                  </>
                )}
              </div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center"
              >
                <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                  {m.label}
                </span>
                <span className="font-mono text-base font-bold text-slate-900 dark:text-white tabular-nums">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem Section */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Latar Belakang & Tantangan
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problem}
            </p>
          </div>

          {/* Solution Section */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <Cpu className="w-4 h-4 text-[#58A6FF]" />
              Solusi & Pendekatan Teknis
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.solution}
            </p>
          </div>

          {/* Key Insights / Architecture Points */}
          <div className="space-y-2.5">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <BarChart3 className="w-4 h-4 text-[#534AB7] dark:text-[#a89eff]" />
              Wawasan Utama & Capaian
            </h3>
            <div className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Teknologi & Alat
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                <span>Lihat Repository GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#58A6FF] hover:bg-[#4a8fe0] rounded-xl transition-colors shadow-sm shadow-[#58A6FF]/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
