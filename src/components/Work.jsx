import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Eye, 
  Code2 
} from 'lucide-react';
import { Github } from './Icons';
import { WORK_PROJECTS } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="work" className="py-20 relative bg-white/70">
      {/* Top Gradient Divider */}
      <div className="section-divider mb-20 max-w-5xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Selected <span className="text-gradient-sky">Work & Projects</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Software engineering projects demonstrating full-stack architecture, computer vision workflows, and secure API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 relative"
            >
              <div>
                {/* Project Image Showcase with Hover Zoom */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>

                  {/* Hover Overlay CTA */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-lg backdrop-blur-sm flex items-center gap-1.5 hover:bg-sky-50 hover:text-sky-700 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      <span>View Details</span>
                    </button>
                    
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-900/90 text-white shadow-lg backdrop-blur-sm hover:bg-black transition-all"
                        aria-label="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Project Number / Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-white/60 shadow-xs text-[10px] font-bold text-slate-700">
                    0{idx + 1}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-sky-600 shrink-0" />
                  </h3>

                  {/* Subtitle / Short Description */}
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {project.github && project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all hover:text-slate-900"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                ) : (
                  <span className="text-[11px] font-medium text-slate-400 italic">
                    Repository Private
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Full Archive CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-slate-50 to-cyan-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/25">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Looking for more repositories?</h4>
              <p className="text-xs text-slate-500">Explore open source scripts, algorithm challenges, and academic codebases.</p>
            </div>
          </div>
          <a
            href="https://github.com/santhosh-15082003"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
