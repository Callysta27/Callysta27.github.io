import React, { useState } from 'react';
import { Database, TrendingUp, Layers, CheckCircle2, Activity, Sparkles } from 'lucide-react';

export const DataDashboardIllustration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'taxi' | 'dw'>('taxi');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative gradient glow behind the card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#58A6FF]/20 via-[#534AB7]/20 to-[#58A6FF]/10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden">
        {/* Terminal / Dashboard Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              analytics_workbench.py
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-medium">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Active Pipeline</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('taxi')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg transition-all ${
                activeTab === 'taxi'
                  ? 'bg-white dark:bg-slate-900 text-[#58A6FF] shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>NYC Taxi EDA (11M+)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dw')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg transition-all ${
                activeTab === 'dw'
                  ? 'bg-white dark:bg-slate-900 text-[#58A6FF] shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Retail ETL & DW</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: NYC Taxi Analysis */}
        {activeTab === 'taxi' && (
          <div className="p-5 pt-2 space-y-4">
            {/* Metric Summary Strips */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Total Analyzed</span>
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tabular-nums">11.4M</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Clean Pass Rate</span>
                <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">94,36%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Manhattan Share</span>
                <span className="font-mono text-sm font-bold text-[#58A6FF] tabular-nums">85,84%</span>
              </div>
            </div>

            {/* Hourly Demand SVG Chart */}
            <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  NYC TLC 24h Demand Curve (Jan–Mar 2026)
                </span>
                <span className="text-[11px] font-mono text-amber-500 font-medium">
                  Peak 18:00 (~7.8×)
                </span>
              </div>

              {/* Vector SVG Line & Bar Chart */}
              <div className="w-full h-36">
                <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="taxiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#58A6FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#58A6FF" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#534AB7" />
                      <stop offset="100%" stopColor="#58A6FF" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />

                  {/* Hourly background bars */}
                  {[
                    { x: 30, h: 22, label: '02h' },
                    { x: 65, h: 14, label: '04h' }, // Lowest
                    { x: 100, h: 32, label: '06h' },
                    { x: 135, h: 62, label: '08h' },
                    { x: 170, h: 58, label: '10h' },
                    { x: 205, h: 68, label: '12h' },
                    { x: 240, h: 72, label: '14h' },
                    { x: 275, h: 88, label: '16h' },
                    { x: 310, h: 108, label: '18h', highlight: true }, // Peak
                    { x: 345, h: 84, label: '20h' },
                    { x: 380, h: 54, label: '22h' },
                  ].map((bar, idx) => (
                    <g key={idx}>
                      <rect
                        x={bar.x - 7}
                        y={110 - bar.h}
                        width="14"
                        height={bar.h}
                        rx="3"
                        className={bar.highlight ? 'fill-[#58A6FF]' : 'fill-slate-200 dark:fill-slate-800'}
                      />
                      <text
                        x={bar.x}
                        y="124"
                        textAnchor="middle"
                        className="font-mono text-[9px] fill-slate-400 dark:fill-slate-500"
                      >
                        {bar.label}
                      </text>
                    </g>
                  ))}

                  {/* Smooth Trend Curve */}
                  <path
                    d="M 30,88 C 65,100 100,75 135,48 C 170,52 205,42 240,38 C 275,22 300,10 310,8 C 325,12 345,30 380,56"
                    fill="none"
                    stroke="#58A6FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Area fill */}
                  <path
                    d="M 30,88 C 65,100 100,75 135,48 C 170,52 205,42 240,38 C 275,22 300,10 310,8 C 325,12 345,30 380,56 L 380,110 L 30,110 Z"
                    fill="url(#taxiGradient)"
                  />

                  {/* Peak Marker Dot */}
                  <circle cx="310" cy="8" r="5" fill="#58A6FF" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="65" cy="96" r="3.5" fill="#f59e0b" />
                </svg>
              </div>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  04:00 Min Demand
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#58A6FF] inline-block" />
                  18:00 Peak Demand (7,8×)
                </span>
                <span className="font-mono text-slate-400">13 Visuals</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Retail Data Warehouse & SSIS */}
        {activeTab === 'dw' && (
          <div className="p-5 pt-2 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Retail Outlets</span>
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white tabular-nums">120+ Cabang</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Kimball Schema</span>
                <span className="font-mono text-sm font-bold text-[#534AB7] dark:text-[#a89eff] tabular-nums">8 Fact / 15 Dim</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Data Loss</span>
                <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">0.00%</span>
              </div>
            </div>

            {/* ETL Architecture Graphic */}
            <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  SSIS Extraction & Dimension Loading Pipeline
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  MERGE · SCD 0/1/2
                </span>
              </div>

              {/* Pipeline Step Visualizer */}
              <div className="space-y-2">
                {[
                  { name: '6 Source Systems (POS, ERP, CRM)', status: 'Extracted', time: '100% Synced', color: 'emerald' },
                  { name: 'Data Staging & Type Validation', status: 'Cleaned', time: 'Zero Loss', color: 'blue' },
                  { name: 'Galaxy Schema Kimball Loading', status: '8 Facts Loaded', time: 'SCD Type 2 Tracked', color: 'purple' },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-medium text-slate-700 dark:text-slate-200">{step.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{step.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#534AB7]" />
                  Star / Galaxy Model
                </span>
                <span>Incremental SSIS MERGE</span>
                <span className="text-emerald-500 font-mono">120+ Outlets Validated</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer info strip */}
        <div className="px-5 py-2.5 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Sparkles className="w-3 h-3 text-[#58A6FF]" />
            Business Intelligence & Analytics
          </span>
          <span className="font-mono text-[11px]">Callysta Dethan</span>
        </div>
      </div>
    </div>
  );
};
