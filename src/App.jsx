import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Freelance from './components/Freelance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Ambient Cursor Glow Spotlight */}
      <CursorGlow />

      {/* Floating Pill Header Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={() => setActiveSection('contact')} />
        <About />
        <Skills />
        <Work onSelectProject={setSelectedProject} />
        <Freelance onSelectProject={setSelectedProject} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
