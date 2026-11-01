import React, { useState } from 'react';
import { 
  Database, 
  Code, 
  Wrench, 
  LineChart, 
  Search, 
  CheckCircle2, 
  Layers,
  Terminal,
  FileSpreadsheet,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabOptions = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'data', label: 'Data & Database' },
    { id: 'web', label: 'Web Development' },
    { id: 'analysis', label: 'Analysis & Modeling' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  // Helper to get category icon
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'data':
        return <Database className="w-5 h-5 text-[#58A6FF]" />;
      case 'web':
        return <Code className="w-5 h-5 text-[#534AB7] dark:text-[#a89eff]" />;
      case 'analysis':
        return <LineChart className="w-5 h-5 text-emerald-500" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  const getSkillIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('sql') || lower.includes('database')) return <Database className="w-3.5 h-3.5 opacity-80" />;
    if (lower.includes('excel') || lower.includes('spreadsheet')) return <FileSpreadsheet className="w-3.5 h-3.5 opacity-80" />;
    if (lower.includes('python') || lower.includes('java') || lower.includes('boot') || lower.includes('php') || lower.includes('script')) return <Terminal className="w-3.5 h-3.5 opacity-80" />;
    if (lower.includes('warehouse') || lower.includes('kimball') || lower.includes('model') || lower.includes('erd')) return <Layers className="w-3.5 h-3.5 opacity-80" />;
    return <Cpu className="w-3.5 h-3.5 opacity-80" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#58A6FF] block mb-2">
              Keahlian & Toolkit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Keahlian Teknis & Domain Pengetahuan
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Dipadukan dari mata kuliah kurikulum Sistem Informasi, sertifikasi kecerdasan buatan, dan implementasi langsung pada proyek nyata.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keahlian (cth: Python, ETL)..."
              aria-label="Cari keahlian teknis"
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#58A6FF] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-xl mb-8 overflow-x-auto border border-slate-200/60 dark:border-slate-800 scrollbar-none">
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SKILL_CATEGORIES)
            .filter(([key]) => activeTab === 'all' || activeTab === key)
            .map(([key, category]) => {
              const filteredSkills = category.skills.filter((skill) =>
                skill.name.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (searchQuery && filteredSkills.length === 0) {
                return null;
              }

              return (
                <div
                  key={key}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Category Title & Description */}
                  <div className="flex items-start gap-3.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50">
                      {getCategoryIcon(key)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {filteredSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-[#58A6FF]/10 text-[#2563eb] dark:text-[#58A6FF] border border-[#58A6FF]/30 font-semibold shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        {getSkillIcon(skill.name)}
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <CheckCircle2 className="w-3 h-3 text-[#58A6FF] ml-0.5" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
