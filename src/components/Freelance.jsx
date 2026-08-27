import React from 'react';
import { 
  Briefcase, 
  Sparkles, 
  ExternalLink, 
  Eye, 
  ArrowUpRight, 
  CheckCircle, 
  Award,
  Users
} from 'lucide-react';
import { Github } from './Icons';
import { FREELANCE_PROJECTS } from '../data/portfolioData';

export default function Freelance({ onSelectProject }) {
  return (
    <section id="freelance" className="py-20 relative bg-slate-50/70 bg-grid-pattern">
      {/* Top Gradient Divider */}
      <div className="section-divider mb-20 max-w-5xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/70 border border-cyan-300/80 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Client & Commercial Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Freelance <span className="text-gradient-sky">Projects</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl font-medium">
            Independent work for real clients — engineering responsive, brand-aligned software solutions for businesses and educational platforms.
          </p>
        </div>

        {/* Freelance Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FREELANCE_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden border-2 border-sky-200/90 shadow-md hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative bg-white"
            >
              {/* Distinct Client Ribbon / Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white text-[11px] font-bold shadow-md shadow-sky-500/25 flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                <span>Client Project</span>
              </div>

              <div>
                {/* Project Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-lg backdrop-blur-sm flex items-center gap-1.5 hover:bg-sky-50 hover:text-sky-700 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-sky-600 shrink-0" />
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-semibold text-sky-700 mt-1">
                    {project.subtitle} • {project.clientName}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                >
                  <span>Project Case Study</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all hover:scale-105"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition-all hover:scale-105"
                      title="Visit Live Project"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}

          {/* Placeholder Card for Future Freelance Inquiries */}
          <div className="glass-card rounded-3xl border-2 border-dashed border-sky-300/80 p-8 flex flex-col items-center justify-center text-center group hover:border-sky-500 hover:bg-sky-50/40 transition-all min-h-[380px]">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-xs mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Have a project in mind?</h3>
            <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">
              Available for full-stack engineering, custom web applications, API integrations, and frontend development.
            </p>
            <a
              href="#contact"
              className="mt-6 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-500/25 transition-all hover:scale-105"
            >
              Hire for Freelance
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
