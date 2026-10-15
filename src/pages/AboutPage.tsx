import { Link } from 'react-router-dom';
import { Bot, Layers, Brain, Database, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Zap, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { TechBadge } from '../components/TechBadge';
import { AiNeuralMesh } from '../components/AiNeuralMesh';
import { AboutMotionGraphic } from '../components/AboutMotionGraphic';

interface AboutPageProps {
  onOpenCV: () => void;
}

export function AboutPage({ onOpenCV }: AboutPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20 relative">
      {/* Interactive Ambient AI Mesh */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden pointer-events-none -z-10">
        <AiNeuralMesh />
      </div>

      {/* Page Title & Positioning */}
      <section className="max-w-3xl space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Bot className="w-4 h-4" />
          <span>Engineering Profile & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Arsalan Mustafa Malik
        </h1>
        <p className="text-lg font-medium text-cyan-300">
          Agentic AI Developer & AI Automation Developer for D2C Brands
        </p>
        <p className="text-slate-300 text-base leading-relaxed">
          I build multi-agent AI systems, LLM-powered applications, RAG workflows, and practical AI automation for real business use cases. My work bridges the gap between frontier AI research and resilient, deterministic software architecture.
        </p>
      </section>

      {/* Narrative & Technical Focus */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm leading-relaxed">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Architectural Focus & Engineering Practice</span>
            </h2>
            <p>
              Rather than treating Large Language Models as simple conversational prompts, I approach them as stochastic reasoning engines that require disciplined state orchestration, strict schema boundaries, and grounded memory retrieval.
            </p>
            <p>
              In my agentic systems, I utilize <strong className="text-white">LangGraph</strong> to define directed cyclic workflows with explicit state transitions, conditional edge routers, and human-in-the-loop checkpoints. This ensures that autonomous agents—such as my multi-agent SRE incident diagnosis system <strong className="text-cyan-300">ResolveX AI</strong>—can autonomously investigate anomalies without executing dangerous, unauthorized commands in production.
            </p>
            <p>
              For <strong className="text-white">Direct-to-Consumer (D2C) brands</strong>, I design automation pipelines that solve acute operational bottlenecks: competitor pricing scrapers, bulk generative catalog enrichment, and zero-hallucination RAG customer support agents backed by ChromaDB vector collections.
            </p>
          </div>

          {/* Continuous Learning & Innovation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Innovation, Problem-Solving & Continuous Learning</span>
            </h2>
            <p>
              The AI landscape evolves weekly. I maintain a rigorous discipline of continuous experimentation with emerging paradigms: from multi-agent consensus protocols and speculative decoding to vision-language models and hybrid sparse-dense vector retrieval.
            </p>
            <p>
              My deep learning background spans computer vision with <strong className="text-white">TensorFlow, Keras, and MobileNetV2</strong>, allowing me to build systems that operate efficiently on edge devices, as demonstrated in my crop disease classification model achieving over 96% validation accuracy.
            </p>
          </div>
        </div>

        {/* Right column: Highlights card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1324] to-[#080d1a] border border-cyan-800/50 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Engineering Highlights</span>
            </h3>

            <div className="space-y-3">
              {resumeData.coreHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={onOpenCV}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/30 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Download Complete CV (PDF)</span>
              </button>
              <Link
                to="/contact"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reasoning Model Motion Graphic */}
      <section className="space-y-4">
        <AboutMotionGraphic />
      </section>

      {/* Clean "What I Work With" Section */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Architecture & Tooling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What I Work With
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            A structured look at how I design, orchestrate, and deploy production AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.whatIWorkWith.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.area}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {item.stack.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Engineering Philosophies */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Core Technical Philosophies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.philosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#0c1428] border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Ready to inspect the code?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Dive into the deep architecture case studies or review the skills breakdown.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/30 transition-all"
          >
            Explore Projects
          </Link>
          <Link
            to="/skills"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            View Skills Matrix
          </Link>
        </div>
      </section>
    </div>
  );
}
