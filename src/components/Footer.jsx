import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="pb-12 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's collaborate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to take your next digital product to the next level?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Available for full-time opportunities, engineering contracts, and freelance projects.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/25 transition-all hover:scale-105 shrink-0"
          >
            Start a Conversation
          </a>
        </div>

        {/* Middle Footer Navigation & Socials */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-bold text-slate-950 text-sm">
                S
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">Santhosh Balamurugan</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full Stack Java Developer. Designing scalable web applications with React.js, Spring Boot, REST APIs, and MySQL.
            </p>
          </div>

          {/* Navigation Links with Hover Underline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {['Home', 'About', 'Skills', 'Work', 'Freelance', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-sky-300 transition-colors inline-block relative py-0.5 group"
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">Connect</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-sky-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Santhosh Balamurugan. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
