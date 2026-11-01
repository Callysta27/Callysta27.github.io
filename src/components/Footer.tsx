import React from 'react';
import { ArrowUp, Heart, Coffee, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: Branding & Quote */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#58A6FF]" />
              <span>"Turning raw data into decisions, one query at a time." ✨</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start gap-1">
              <span>© 2026 {PERSONAL_INFO.name} · Built with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
              <span>and lots of</span>
              <Coffee className="w-3.5 h-3.5 text-amber-600 inline mx-0.5" />
            </p>
          </div>

          {/* Right: Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-4 h-4 text-[#58A6FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
