import { useState } from 'react';
import { Cpu, Database, ShieldCheck, Zap, Activity } from 'lucide-react';

export function AboutMotionGraphic() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: 'Stochastic Reasoning',
      subtitle: 'LLM Multi-Agent Graphs',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      detail: 'Decomposing non-deterministic tasks into specialized autonomous sub-agents with bounded state.',
      latency: '24ms'
    },
    {
      title: 'Dense Vector Grounding',
      subtitle: 'ChromaDB Hybrid Search',
      icon: <Database className="w-4 h-4 text-blue-400" />,
      detail: 'Injecting verified runbook postmortems & product catalogs to eliminate speculative hallucinations.',
      latency: '12ms'
    },
    {
      title: 'Deterministic Guardrails',
      subtitle: 'Pydantic v2 & HITL Gates',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      detail: 'Enforcing strict structural schemas and mandatory human sign-off before executing critical actions.',
      latency: '0.4ms'
    },
    {
      title: 'Async Operational Impact',
      subtitle: 'FastAPI & Webhook Workers',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      detail: 'Streaming low-latency actions directly into production infrastructure and eCommerce stores.',
      latency: '48ms'
    }
  ];

  return (
    <div className="rounded-2xl bg-[#090d18] border border-cyan-800/40 p-5 sm:p-6 shadow-xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-200">
            ENGINEERING EXECUTION MODEL
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
          <Activity className="w-3 h-3 animate-spin" />
          <span>Continuous State Graph</span>
        </div>
      </div>

      {/* SVG Animated Circuit Stream */}
      <div className="relative py-1 hidden sm:block">
        <svg className="w-full h-8 overflow-visible" viewBox="0 0 600 32" fill="none">
          <path
            d="M 50 16 L 200 16 L 380 16 L 550 16"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 50 16 L 200 16 L 380 16 L 550 16"
            stroke="url(#aboutLaserGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="30 90"
            className="animate-[dash_2.5s_linear_infinite]"
          />
          <defs>
            <linearGradient id="aboutLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.title}
              onClick={() => setActiveStage(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-950/60'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    {stage.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">
                    {stage.latency}
                  </span>
                </div>
                <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {stage.title}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {stage.subtitle}
                </div>
              </div>

              {isSelected && (
                <div className="mt-2.5 pt-2 border-t border-cyan-800/60 text-[10px] text-slate-300 leading-snug">
                  {stage.detail}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
