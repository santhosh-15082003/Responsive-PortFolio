import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  FileCode, 
  Braces, 
  Layout, 
  Palette, 
  Coffee, 
  Server, 
  Network, 
  ShieldCheck, 
  Database, 
  Layers, 
  TableProperties, 
  GitBranch, 
  Send, 
  Package, 
  Terminal,
  Check
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

// Icon mapper helper
const ICON_MAP = {
  Code2,
  FileCode,
  Braces,
  Layout,
  Palette,
  Coffee,
  Server,
  Network,
  ShieldCheck,
  Database,
  Layers,
  TableProperties,
  GitBranch,
  Send,
  Package,
  Terminal
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA.flatMap(c => c.skills.map(s => ({ ...s, categoryName: c.category })))
    : SKILLS_DATA.find(c => c.id === selectedCategory)?.skills.map(s => ({ ...s, categoryName: SKILLS_DATA.find(c => c.id === selectedCategory).category })) || [];

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 bg-dots-pattern">
      {/* Top Gradient Divider */}
      <div className="section-divider mb-20 max-w-5xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-gradient-sky">Technologies</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            A comprehensive overview of the programming languages, frameworks, libraries, and developer tools I utilize to engineer full-stack systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-sky-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 border border-slate-200/90 shadow-sm glass-card-hover group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Glow accent on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-400/10 rounded-full blur-xl group-hover:bg-sky-400/20 transition-all pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-800 transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400">
                  <span>{skill.categoryName}</span>
                  <div className="flex items-center gap-1 text-sky-600">
                    <Check className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
