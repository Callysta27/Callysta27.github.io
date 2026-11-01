import React from 'react';
import { Award, Users, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#58A6FF] block mb-2">
            Rekam Jejak
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pengalaman Kepemimpinan & Sertifikasi
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Dedikasi kepemimpinan tim dalam proyek rekayasa perangkat lunak serta penguasaan teknologi mutakhir.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {EXPERIENCES_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-[#58A6FF] shadow-sm transition-transform group-hover:scale-125" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === 'leadership' ? (
                        <Users className="w-4 h-4 text-[#58A6FF]" />
                      ) : (
                        <Award className="w-4 h-4 text-[#534AB7] dark:text-[#a89eff]" />
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="ml-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.organization}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.summary}
                </p>

                {/* Highlights list */}
                <div className="mt-4 space-y-2">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#58A6FF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 dark:text-slate-500 mr-1 font-mono">Fokus:</span>
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
