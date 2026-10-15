import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Leaf, BrainCircuit, ShieldCheck, CheckCircle2, AlertOctagon, Terminal, Database, Layers, GitBranch, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { TechBadge } from '../components/TechBadge';
import { CropDiagnosisVisualizer } from '../components/CropDiagnosisVisualizer';

export function ProjectCropHealth() {
  const project = projectsData.find((p) => p.id === 'crop-health-detection')!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Back button & Breadcrumb */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.type}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-emerald-300 font-medium">
          {project.headline}
        </p>

        <p className="text-slate-300 text-base leading-relaxed">
          {project.fullOverview}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <Link
            to="/contact?service=Computer%20Vision%20Pipeline"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
          >
            <span>Inquire About ML Pipelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Key Metrics / Impact Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.outcomesAndImpact.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 shadow-md text-center sm:text-left space-y-1"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              {item.metric}
            </div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {item.label}
            </div>
            <div className="text-xs text-slate-400">
              {item.description}
            </div>
          </div>
        ))}
      </section>

      {/* Hero Visual Media Banner */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-800 h-80 sm:h-96 w-full shadow-2xl">
        <img
          src={project.image}
          alt={project.imageCaption}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs font-mono text-emerald-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block border border-slate-700">
            {project.imageCaption}
          </p>
        </div>
      </section>

      {/* Problem & Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* The Problem */}
        <div className="p-8 rounded-2xl bg-[#0b1120] border border-rose-950/40 relative overflow-hidden space-y-5">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
          <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <AlertOctagon className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Agricultural Diagnostic Delays</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
          <div className="space-y-2.5 pt-2">
            {project.problemPoints.map((point, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                <span className="text-rose-400 font-bold mt-0.5">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="p-8 rounded-2xl bg-[#0b1120] border border-emerald-950/40 relative overflow-hidden space-y-5">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Computer Vision Solution</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Transfer Learning & Care Engine</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.solution}
          </p>
          <div className="space-y-2.5 pt-2">
            {project.solutionPoints.map((point, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pathology Classification Simulator */}
      <section className="space-y-4">
        <CropDiagnosisVisualizer />
      </section>

      {/* Model Workflow Breakdown */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            <span>Neural Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Model Workflow & Classification Pipeline
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            From raw photographic input to standardized preprocessing, inverted residual feature extraction, and multi-tier treatment output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.architectureSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                  Stage {step.step}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {step.agentOrComponent.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {step.agentOrComponent}
              </h3>

              <p className="text-xs font-mono text-emerald-300">
                {step.description}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-400 mt-0.5">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Specification */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Functional Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Key Features & System Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{feat.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span>Technologies & Libraries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Technical Stack Specification
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.techStack.map((stackGroup) => (
            <div
              key={stackGroup.category}
              className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {stackGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {stackGroup.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="emerald" size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Challenges Solved */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" />
            <span>Computer Vision Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Machine Learning Challenges & Edge Optimization
          </h2>
        </div>

        <div className="space-y-4">
          {project.technicalChallenges.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-3"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-xs">0{idx + 1}.</span>
                <span>{item.challenge}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-5 border-l-2 border-emerald-800/60">
                <strong className="text-emerald-300">Resolution Architecture: </strong>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Nav / Back to ResolveX */}
      <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold"
        >
          <Github className="w-4 h-4" />
          <span>Star this repo on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <Link
          to="/projects/resolvex-ai"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
        >
          <span>View ResolveX AI Agentic Case Study</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </Link>
      </section>
    </div>
  );
}
