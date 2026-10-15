import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, TrendingUp, Sparkles, MessageSquareCode, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { D2CService } from '../data/servicesData';
import { TechBadge } from './TechBadge';

interface ServiceCardProps {
  service: D2CService;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  if (compact) {
    return (
      <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="h-12 w-12 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            {getIcon(service.iconName)}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            {service.tagline}
          </p>
          <div className="space-y-2 mb-6">
            {service.keyBenefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-3 border-t border-slate-800/80 group-hover:translate-x-1 transition-all"
        >
          <span>Explore Service Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div
      id={service.id}
      className="rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/30 scroll-mt-24"
    >
      {/* Service Header with Image & Title */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-[#0c1527] via-[#09101f] to-[#060a14]">
        {/* Generative AI Graphic Backdrop (Always active behind image) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={`glow-${service.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill={`url(#glow-${service.id})`} />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="20%" cy="30%" r="4" fill="#38bdf8" />
          <circle cx="80%" cy="70%" r="4" fill="#38bdf8" />
          <circle cx="50%" cy="50%" r="6" fill="#06b6d4" />
        </svg>

        {/* Real photo with fallback onError */}
        {!imgError ? (
          <img
            src={service.image}
            alt={service.imageCaption}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center opacity-75 hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900">
            <div className="text-center p-6 space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                {getIcon(service.iconName)}
              </div>
              <p className="text-xs font-mono text-cyan-300">
                {service.imageCaption}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/70 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-cyan-950/80 border border-cyan-700/60 flex items-center justify-center backdrop-blur-md">
              {getIcon(service.iconName)}
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50 backdrop-blur-md">
              D2C Brand Intelligence
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h2>
          <p className="text-sm text-cyan-200/90 font-medium mt-1 max-w-2xl">
            {service.tagline}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Business Problem vs AI Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/70 border border-red-950/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/80" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
              The Business Problem
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.businessProblem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-cyan-950/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/80" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              The AI-Powered Solution
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.aiSolution}
            </p>
          </div>
        </div>

        {/* Practical Use Cases (3-4 items) */}
        <div>
          <h3 className="text-base font-bold text-white mb-4 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>Practical D2C Use Cases</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.practicalUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 mb-1.5">
                    {useCase.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {useCase.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 flex items-center space-x-1.5 text-xs text-cyan-400 font-mono">
                  <span className="font-semibold">Impact:</span>
                  <span className="text-slate-300">{useCase.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Stack */}
        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.techStackHighlight.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all shrink-0 cursor-pointer"
            >
              <span>Discuss Your D2C AI Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
