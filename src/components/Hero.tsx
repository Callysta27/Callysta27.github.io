import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DataDashboardIllustration } from './DataDashboardIllustration';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  const strings = PERSONAL_INFO.typingTexts;

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(strings[0]);
      return;
    }

    const currentString = strings[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentString.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentString.length) {
          // Pause at end of sentence
          setTypingSpeed(2200);
          setIsDeleting(true);
        } else {
          setTypingSpeed(65);
        }
      } else {
        // Deleting
        setDisplayText(currentString.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % strings.length);
          setTypingSpeed(450);
        } else {
          setTypingSpeed(35);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed, strings]);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle Data Grid Background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #58A6FF 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#58A6FF]">
              <span>Hi, I'm Callysta Dethan</span>
              <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>👋</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight text-balance">
              Information Systems Student{' '}
              <span className="text-slate-400 dark:text-slate-500 font-normal">·</span>{' '}
              <span className="bg-gradient-to-r from-[#58A6FF] via-[#534AB7] to-[#58A6FF] bg-clip-text text-transparent">
                Data Analytics & BI Enthusiast
              </span>
            </h1>

            {/* Rotating Typing Text */}
            <div className="h-10 flex items-center">
              <p className="font-mono text-base sm:text-lg text-slate-700 dark:text-slate-300 flex items-center">
                <span>{displayText}</span>
                <span className="inline-block w-2 h-5 ml-1 bg-[#58A6FF] animate-pulse" />
              </p>
            </div>

            {/* Subtitle / Intro Lead */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Fokus pada analisis data skala besar, arsitektur data warehouse (Kimball), ETL pipelines, serta rancang bangun aplikasi web modern berorientasi objek.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#58A6FF] hover:bg-[#4a8fe0] rounded-xl transition-all shadow-md shadow-[#58A6FF]/25 hover:shadow-lg hover:shadow-[#58A6FF]/35 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
              >
                <span>Lihat Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-1.5">
                <a
                  href="/cv.pdf"
                  download="CV_Callysta_Dethan.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl transition-all shadow-sm hover:border-[#58A6FF]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
                >
                  <Download className="w-4 h-4 text-[#58A6FF]" />
                  <span>Download CV</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCvModal}
                  aria-label="Preview Ringkasan CV"
                  title="Lihat Ringkasan CV"
                  className="p-3 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl transition-colors hover:border-[#58A6FF]/40"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-3 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Hubungi:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Profil GitHub Callysta Dethan"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Profil LinkedIn Callysta Dethan"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Kirim Email ke Callysta Dethan"
                className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Data Dashboard Illustration */}
          <div className="lg:col-span-5">
            <DataDashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
