import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Award, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#58A6FF]/10 text-[#58A6FF]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Curriculum Vitae Preview
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.name} · {PERSONAL_INFO.major}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="CV_Callysta_Dethan.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#58A6FF] hover:bg-[#4a8fe0] rounded-xl transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup preview CV"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Header block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-[#58A6FF] mt-1">
              Data Analytics & Business Intelligence Enthusiast · Web Developer
            </p>
            <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🔗 github.com/Callysta27</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <GraduationCap className="w-4 h-4 text-[#58A6FF]" />
              Pendidikan
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Universitas Tarumanagara (UNTAR)
                </span>
                <span className="text-xs font-mono text-slate-500">2023 – Sekarang (Semester 5)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Program Studi Sistem Informasi · Fakultas Teknologi Informasi
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
                <span>IPK Kumulatif: 3,82 / 4,00</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <Award className="w-4 h-4 text-[#534AB7]" />
              Kompetensi Utama
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Data & ETL:</span>
                <span className="text-slate-600 dark:text-slate-300">
                  SQL Server, SSIS, Python (Pandas), Oracle PL/SQL, MySQL, Kimball Galaxy Schema, Data Cleaning, EDA.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Web & Software:</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Java, Spring Boot MVC, PHP, JavaScript, Docker, Bootstrap, HTML5/CSS3, Git/GitHub.
                </span>
              </div>
            </div>
          </div>

          {/* Project Leadership & Experience */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              <Briefcase className="w-4 h-4 text-[#58A6FF]" />
              Kepemimpinan Proyek & Sertifikasi
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    4× Project Team Lead (Kuliah FTI UNTAR)
                  </span>
                  <span className="font-mono text-slate-500">2024 – 2026</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Memimpin tim dalam proyek GoRent (Spring Boot), Basis Data Kos (Oracle), Money Changer (Java), dan Antriless Canteen.
                </p>
                <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Mengoordinasi sprint backlog, review PR Git, dan requirement gathering.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Analisis 11 juta+ baris data taksi NYC dengan 94,36% data pass rate.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Workshop AI & Technology Skills · Codepolitan
                  </span>
                  <span className="font-mono text-slate-500">2026</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Sertifikasi Generative AI, Prompt Engineering, dan Responsible AI Ethics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Format: PDF A4 Ready
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Tutup
            </button>
            <a
              href="/cv.pdf"
              download="CV_Callysta_Dethan.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#58A6FF] hover:bg-[#4a8fe0] rounded-xl transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (.pdf)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
