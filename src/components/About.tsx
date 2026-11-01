import React from 'react';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { StatCounter } from './StatCounter';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#58A6FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Mengubah Kumpulan Data Mentah Menjadi Keputusan Terukur
          </h2>
        </div>

        {/* Bio Content & Metadata Strip */}
        <div className="mt-6 max-w-4xl space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-medium text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#58A6FF]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#534AB7] dark:text-[#a89eff]" />
              <span>{PERSONAL_INFO.university} · {PERSONAL_INFO.major}</span>
            </div>
          </div>
        </div>

        {/* 4 Animated Stat Cards */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
