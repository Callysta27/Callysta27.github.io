import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenCvModal }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] rounded-lg"
          >
            <span>{PERSONAL_INFO.shortName}</span>
            <span className="text-[#58A6FF] inline-block transition-transform group-hover:scale-125">.</span>
          </a>

          {/* Zone 2: 4-5 single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] rounded ${
                    isActive
                      ? 'text-[#58A6FF] font-semibold'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#58A6FF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Quick CV Button */}
            <button
              type="button"
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#58A6FF] bg-[#58A6FF]/10 hover:bg-[#58A6FF]/20 rounded-xl transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF] shadow-sm"
            >
              Hubungi Saya
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-lg px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#58A6FF]/10 text-[#58A6FF] font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF]" />}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Curriculum Vitae</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#58A6FF] bg-[#58A6FF]/10 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Lihat CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
