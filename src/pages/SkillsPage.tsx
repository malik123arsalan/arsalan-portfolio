import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Sparkles, Code, BrainCircuit, Server, CheckCircle2, ArrowRight, Layers, Terminal } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { TechBadge } from '../components/TechBadge';
import { AiNeuralMesh } from '../components/AiNeuralMesh';
import { SkillsMotionGraphic } from '../components/SkillsMotionGraphic';

export function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.categorySlug === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 relative">
      {/* Interactive Ambient AI Mesh */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden pointer-events-none -z-10">
        <AiNeuralMesh />
      </div>

      {/* Header */}
      <section className="max-w-3xl space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Competency Matrix</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills & Capabilities
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          A granular breakdown of languages, frameworks, agentic orchestration patterns, machine learning pipelines, and commerce automation architectures.
        </p>

        {/* Category switcher */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.categorySlug}
              onClick={() => setActiveCategory(cat.categorySlug)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.categorySlug
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Constellation Motion Graphic */}
      <section className="space-y-4">
        <SkillsMotionGraphic />
      </section>

      {/* Skills Groups */}
      <section className="space-y-12">
        {filteredCategories.map((group) => (
          <div
            key={group.categorySlug}
            className="rounded-3xl bg-[#090d18] border border-slate-800/80 p-6 sm:p-8 space-y-6 shadow-xl"
          >
            {/* Category title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                  {getIcon(group.iconName)}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {group.categoryName}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/50 self-start sm:self-auto">
                {group.skills.length} Core Competencies
              </span>
            </div>

            {/* Skills list cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-white">
                        {skill.name}
                      </h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                        skill.level === 'Expert'
                          ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60'
                          : skill.level === 'Advanced'
                          ? 'bg-blue-950/70 text-blue-300 border border-blue-800/60'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {skill.context}
                    </p>
                  </div>

                  {skill.tags && (
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800/60">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-slate-400 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Applied Practice Callout */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#0c1428] border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Want to see these skills in live systems?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Review the ResolveX LangGraph multi-agent flow or explore our custom D2C AI services.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <Link
            to="/projects/resolvex-ai"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/30 transition-all cursor-pointer"
          >
            ResolveX Case Study
          </Link>
          <Link
            to="/services"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
          >
            D2C Services
          </Link>
        </div>
      </section>
    </div>
  );
}
