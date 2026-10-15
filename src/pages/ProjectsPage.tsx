import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Bot, BrainCircuit, ExternalLink, ArrowRight, Github, Filter, Sparkles, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { AiNeuralMesh } from '../components/AiNeuralMesh';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Agentic AI' | 'Computer Vision & Deep Learning'>('All');

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 relative">
      {/* Interactive Ambient AI Mesh */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden pointer-events-none -z-10">
        <AiNeuralMesh />
      </div>

      {/* Header */}
      <section className="max-w-3xl space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>Case Studies & Systems</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured AI Engineering Projects
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          In-depth architectural breakdowns of production-ready multi-agent workflows, stateful LangGraph graphs, retrieval-augmented intelligence, and transfer learning computer vision models.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setSelectedFilter('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedFilter === 'All'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => setSelectedFilter('Agentic AI')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedFilter === 'Agentic AI'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Agentic AI & LangGraph
          </button>
          <button
            onClick={() => setSelectedFilter('Computer Vision & Deep Learning')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedFilter === 'Computer Vision & Deep Learning'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Computer Vision & Deep Learning
          </button>
        </div>
      </section>

      {/* Live System Telemetry Stream Motion Graphic */}
      <section className="p-4 sm:p-5 rounded-2xl bg-[#090d18] border border-cyan-800/40 relative overflow-hidden shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-200 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>SYSTEM REPRODUCIBILITY & PRODUCTION STATUS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
            <span className="text-cyan-400 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>LangGraph: Cyclic State</span>
            </span>
            <span>•</span>
            <span className="text-blue-400">ChromaDB RAG: Active</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>HITL Safety: Enforced</span>
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="space-y-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="space-y-4">
            <ProjectCard project={project} featured={true} />
          </div>
        ))}
      </section>

      {/* GitHub Repository Spotlight Banner */}
      <section className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Github className="w-4 h-4" />
            <span>Open Source & Reproducibility</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Explore Repositories on GitHub
          </h3>
          <p className="text-sm text-slate-400 max-w-xl">
            All featured projects include clean Python codebases, requirements.txt, architecture diagrams, and reproduction instructions.
          </p>
        </div>

        <a
          href="https://github.com/malik123arsalan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 bg-[#060913] hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all shrink-0 cursor-pointer"
        >
          <Github className="w-4 h-4 text-cyan-400" />
          <span>github.com/malik123arsalan</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </section>
    </div>
  );
}
