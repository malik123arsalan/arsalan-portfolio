import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cpu, Sparkles, FileText, Mail, CheckCircle2, Terminal, Code2, Database, ShieldCheck, Zap } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { projectsData } from '../data/projectsData';
import { d2cServicesData } from '../data/servicesData';
import { ProjectCard } from '../components/ProjectCard';
import { ServiceCard } from '../components/ServiceCard';
import { AiNeuralMesh } from '../components/AiNeuralMesh';
import { AgentWorkflowGraphic } from '../components/AgentWorkflowGraphic';

interface HomePageProps {
  onOpenCV: () => void;
  onOpenHire: () => void;
}

export function HomePage({ onOpenCV, onOpenHire }: HomePageProps) {
  const quickHighlights = [
    { label: 'Agentic AI', icon: <Bot className="w-4 h-4 text-cyan-400" /> },
    { label: 'Python 3.10+', icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
    { label: 'RAG & ChromaDB', icon: <Database className="w-4 h-4 text-cyan-400" /> },
    { label: 'LangGraph', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { label: 'FastAPI', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { label: 'D2C Automation', icon: <Sparkles className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section with Interactive AI Neural Mesh & Motion Graphics */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
        {/* Interactive Neural Mesh Canvas (interactive mouse/ambient network) */}
        <AiNeuralMesh />

        {/* Ambient glow & grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] bg-radial-gradient pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Status chip */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-xs text-cyan-300 font-mono shadow-md backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Agentic AI Roles & D2C Automation Projects</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {resumeData.name}
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-cyan">
              {resumeData.headline}
            </h2>

            {/* Short introduction */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              "{resumeData.introShort}"
            </p>

            {/* Core Action Buttons (View Projects, D2C AI Services, Download CV, Contact Me, Hire Me) */}
            <div className="flex flex-wrap gap-3.5 pt-4">
              <button
                onClick={onOpenHire}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hire Me</span>
              </button>

              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>D2C AI Services</span>
              </Link>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Quick highlights bar */}
            <div className="pt-8 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Core Specialization Pillars
              </div>
              <div className="flex flex-wrap gap-2.5">
                {quickHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-medium text-slate-300"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Agentic Architecture Motion Graphic */}
          <div className="mt-12">
            <AgentWorkflowGraphic />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Production AI Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Engineering Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
          >
            <span>Explore all case studies & architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </section>

      {/* Short Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct-to-Consumer Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              AI Services for D2C Brands
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Eliminate repetitive manual bottlenecks, monitor competitors in real-time, and deploy brand-grounded AI agents.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
          >
            <span>View all 5 D2C AI Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d2cServicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} compact={true} />
          ))}
        </div>
      </section>

      {/* Call To Action for Recruiters & D2C Brands */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0b1224] to-[#080e1c] border border-cyan-800/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* For Recruiters */}
            <div className="space-y-4 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-8 lg:pb-0">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>For Engineering Leaders & Recruiters</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Looking for an Agentic AI Developer?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I build multi-agent graphs with LangGraph, integrate high-precision RAG pipelines using ChromaDB, write deterministic Pydantic schemas, and deploy async FastAPI services.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onOpenHire}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interview / Connect with Arsalan</span>
                </button>
                <button
                  onClick={onOpenCV}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect CV</span>
                </button>
              </div>
            </div>

            {/* For D2C Brands */}
            <div className="space-y-4 pl-0 lg:pl-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>For D2C Founders & Operators</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Want AI Automation For Your Brand?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need real-time competitor price tracking, catalog copy generation, zero-hallucination support chatbots, or automated executive dashboards, let's build your pipeline.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenHire}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Automation Scoping Call</span>
                </button>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-100 bg-slate-900 hover:bg-slate-800 border border-cyan-800/70 hover:border-cyan-600 transition-all cursor-pointer"
                >
                  <span>Explore D2C AI Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
