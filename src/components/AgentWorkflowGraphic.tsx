import { useState } from 'react';
import { Bot, Cpu, Database, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from 'lucide-react';

export function AgentWorkflowGraphic() {
  const [activeNode, setActiveNode] = useState<number>(1);

  const steps = [
    {
      id: 0,
      title: 'Event / Webhook Trigger',
      subtitle: 'Prometheus Alert / Shopify Webhook',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      color: 'amber',
      metric: '0.4ms Ingest',
      detail: 'Raw telemetry event parsed into typed Pydantic event envelope with UUID, origin, and timestamp.'
    },
    {
      id: 1,
      title: 'LangGraph Orchestrator',
      subtitle: 'Stateful Cyclic Agent Graph',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      color: 'cyan',
      metric: 'Active State',
      detail: 'Maintains bounded context across agent steps, conditional edge routers, and rollback checkpoints.'
    },
    {
      id: 2,
      title: 'ChromaDB Vector Retrieval',
      subtitle: 'RAG Ground-Truth Knowledge',
      icon: <Database className="w-4 h-4 text-blue-400" />,
      color: 'blue',
      metric: '0.94 Similarity',
      detail: 'Semantic search matches incoming anomaly or query against proven historical postmortems & catalog rules.'
    },
    {
      id: 3,
      title: 'Pydantic & HITL Guardrail',
      subtitle: 'Schema Enforcement & Human Signoff',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      color: 'emerald',
      metric: 'Zero-Hallucination',
      detail: 'Validates deterministic JSON structure; halts graph execution for human authorization if high blast radius.'
    },
    {
      id: 4,
      title: 'Deterministic Action',
      subtitle: 'FastAPI Worker / Store API Execution',
      icon: <Bot className="w-4 h-4 text-indigo-400" />,
      color: 'indigo',
      metric: 'Sub-15s MTTR',
      detail: 'Applies idempotent remediation, updates store inventory, or dispatches verified customer resolution.'
    }
  ];

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#090e1c] to-[#060a14] border border-cyan-800/40 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Top telemetry bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-5">
        <div className="flex items-center space-x-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-200">
            AGENTIC PIPELINE ARCHITECTURE
          </span>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
            LIVE SIMULATOR
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>State: Cyclic</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400">Guardrails: Enforced</span>
        </div>
      </div>

      {/* SVG Motion Connection Pipeline */}
      <div className="relative py-2 hidden md:block">
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 800 48" fill="none">
          {/* Background connection track */}
          <path
            d="M 60 24 L 210 24 L 380 24 L 560 24 L 740 24"
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Animated Glowing Laser Data Stream */}
          <path
            d="M 60 24 L 210 24 L 380 24 L 560 24 L 740 24"
            stroke="url(#cyanLaserGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40 120"
            className="animate-[dash_3s_linear_infinite]"
          />

          <defs>
            <linearGradient id="cyanLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Step Nodes Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
        {steps.map((step) => {
          const isSelected = activeNode === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveNode(step.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-950/70 border-cyan-400/80 shadow-lg shadow-cyan-950/80 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    {step.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ${
                    isSelected ? 'text-cyan-300 bg-cyan-900/40' : 'text-slate-500 bg-slate-800/80'
                  }`}>
                    {step.metric}
                  </span>
                </div>

                <div className={`text-xs font-bold leading-tight mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1">
                  {step.subtitle}
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 pt-2 border-t border-cyan-800/60 flex items-center space-x-1 text-[10px] font-mono text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Inspecting Node</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Card */}
      <div className="mt-4 p-4 rounded-xl bg-[#070b16] border border-cyan-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-cyan-400 font-semibold uppercase text-[11px]">
              Active Step Detail: {steps[activeNode].title}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-mono text-[10px]">
              {steps[activeNode].subtitle}
            </span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            {steps[activeNode].detail}
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setActiveNode((prev) => (prev + 1) % steps.length)}
            className="px-3 py-1.5 rounded-lg text-[11px] font-mono text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span>Next Phase</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
