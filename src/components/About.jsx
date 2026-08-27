import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Server, 
  Database, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Calendar,
  Layers 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-white/75">
      {/* Top Gradient Divider */}
      <div className="section-divider mb-20 max-w-5xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-gradient-sky">Santhosh Balamurugan</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Passionate Full Stack Java Developer with academic excellence and hands-on production engineering experience.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Education */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Story Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                Professional Summary & Philosophy
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-slate-800 font-semibold">Full Stack Java Developer</strong> with hands-on experience in <strong className="text-sky-700 font-semibold">Java, Spring Boot, Spring Security, React.js, MySQL</strong>, and REST API development. I have successfully delivered two production-grade projects that digitized workflows and drastically cut manual processing.
                </p>
                <p>
                  With a solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, and relational database tuning, I focus on engineering maintainable, secure microservices and reactive user interfaces that perform flawlessly.
                </p>
              </div>

              {/* What I Value Pill Grid */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Spring Security & JWT",
                  "Microservices & REST",
                  "React.js & Tailwind CSS",
                  "MySQL Optimization",
                  "Hibernate & JPA",
                  "Agile / Scrum Flow"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education History Showcase (Where M.Sc belongs) */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-600" />
                <span>Academic Education</span>
              </h3>

              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-gradient-to-r from-sky-50/70 to-slate-50 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">{edu.degree}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{edu.score}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">{edu.institution}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{edu.focus}</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Work Experience & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-300 transition-all text-center flex flex-col justify-center items-center group bg-white"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-gradient-sky tracking-tight group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-800 mt-1">
                    {stat.label}
                  </span>
                  {stat.suffix && (
                    <span className="text-[10px] font-medium text-slate-500 mt-0.5">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Work Experience Timeline */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm bg-white">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-600" />
                <span>Work Experience & Internships</span>
              </h3>

              <div className="space-y-5">
                {PERSONAL_INFO.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 pb-2 border-l-2 border-sky-300 last:border-l-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-2 border-white shadow-sm"></div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-slate-900">{exp.role}</h4>
                      <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-xs font-semibold text-slate-700 mb-2">
                      {exp.company} • <span className="text-slate-500 font-normal">{exp.type}</span>
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-sky-500 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
