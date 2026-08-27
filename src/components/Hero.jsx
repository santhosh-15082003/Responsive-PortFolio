import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Download, 
  Sparkles, 
  Mail, 
  Briefcase, 
  Code2,
  Server,
  Database,
  Layers,
  ArrowRight,
  Terminal
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typewriter effect
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 35 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const handleDownloadCV = () => {
    // Triggers direct download/preview of the real uploaded 2-page resume
    const link = document.createElement('a');
    link.href = '/Santhosh_Resume.pdf';
    link.target = '_blank';
    link.download = 'Santhosh_Balamurugan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[94vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* 🌟 Dynamic Graphic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Animated Aurora Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-sky-200/50 via-cyan-100/40 to-blue-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-12 right-12 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-16 left-12 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        {/* Cyber Mesh & Tech Floating Pills */}
        <div className="hidden xl:block absolute top-36 left-16 px-3.5 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md text-xs font-mono font-bold text-sky-700 animate-float">
          &lt;React.js /&gt;
        </div>
        <div className="hidden xl:block absolute bottom-32 left-28 px-3.5 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md text-xs font-mono font-bold text-slate-800 animate-float animation-delay-2000">
          &#123; Spring Boot &#125;
        </div>
        <div className="hidden xl:block absolute top-48 right-16 px-3.5 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md text-xs font-mono font-bold text-cyan-700 animate-float animation-delay-3000">
          [ RESTful APIs ]
        </div>
        <div className="hidden xl:block absolute bottom-40 right-28 px-3.5 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md text-xs font-mono font-bold text-emerald-700 animate-float animation-delay-4000">
          ( MySQL Database )
        </div>

        {/* Ambient Decorative Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M -100 200 C 300 100, 700 400, 1400 150" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          <path d="M 0 500 C 400 450, 800 650, 1500 480" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Available for work badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 shadow-sm text-sky-800 text-xs font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span>Available for Full-time Roles & Freelance Work</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4">
              Hi, I'm <span className="text-gradient-sky">Santhosh</span>
            </h1>

            {/* Typewriter Role Title (NO M.Sc mention here) */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">
                I am a{' '}
                <span className="text-sky-600 font-bold underline decoration-sky-300 decoration-wavy underline-offset-4">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-6 bg-sky-600 ml-1 animate-pulse"></span>
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Full Stack Java Developer specializing in engineering scalable web applications with <strong className="text-slate-800 font-semibold">React.js</strong>, <strong className="text-slate-800 font-semibold">Spring Boot</strong>, <strong className="text-slate-800 font-semibold">REST APIs</strong>, and <strong className="text-slate-800 font-semibold">MySQL</strong>. Passionate about clean architecture and high-performance digital products.
            </p>

            {/* CTAs & Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full">
              <button
                onClick={() => scrollToSection('work')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <Briefcase className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 hover:text-sky-700 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-xl bg-sky-50 hover:bg-sky-100/80 text-sky-800 font-semibold text-sm border border-sky-200/80 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Pill Links with Exact IDs */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-200/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-sm transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-sm transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:shadow-sm transition-all"
                title="Instagram Profile"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-sm transition-all"
                title="Send Email"
                aria-label="Email Santhosh"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Exact Uploaded Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/35 via-cyan-300/25 to-blue-400/35 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Photo Container Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-white/90 via-sky-100/60 to-white/90 border-2 border-sky-300/80 shadow-2xl shadow-sky-500/20">
              
              {/* Inner Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src="/assets/santhosh-portrait.jpg"
                  alt="Santhosh Balamurugan - Full Stack Java Developer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle soft gradient fade at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-65"></div>
                
                {/* Floating Inset Badge on Photo (Full Stack Dev instead of M.Sc) */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/70 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold shadow-md">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Full Stack Developer</p>
                      <p className="text-[10px] font-medium text-slate-500">React.js · Spring Boot</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full border border-sky-200">
                    Java & SQL
                  </span>
                </div>
              </div>

              {/* Decorative Corner Glow Accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50 border-2 border-white"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50 border-2 border-white"></div>

            </div>

          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-sky-600 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider">Scroll Down</span>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-sky-300 group-hover:bg-sky-50 transition-all animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
