import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { Project } from './types';

export default function App() {
  // Theme state: defaults to dark or system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Single-Page Landmarks */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Experience & Certification Section */}
        <Experience />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CV Summary & Download Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
