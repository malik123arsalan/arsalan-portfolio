import { useState } from 'react';
import { Bot, Terminal, Database, Code2, BrainCircuit, Sparkles, CheckCircle2 } from 'lucide-react';

export function SkillsMotionGraphic() {
  const [selectedOrbit, setSelectedOrbit] = useState('langgraph');

  const satellites = [
    {
      id: 'langgraph',
      name: 'LangGraph Multi-Agent',
      category: 'Agentic AI',
      icon: <Bot className="w-4 h-4 text-cyan-400" />,
      description: 'Cyclic state machines, conditional routing, checkpointing & human approval gates.',
      stat: 'Enterprise SRE & Ops'
    },
    {
      id: 'chromadb',
      name: 'ChromaDB & RAG',
      category: 'Vector Memory',
      icon: <Database className="w-4 h-4 text-blue-400" />,
      description: 'Hybrid chunking, cosine embeddings & zero-hallucination factual grounding.',
      stat: '0.94 Similarity Score'
    },
    {
      id: 'fastapi',
      name: 'FastAPI Microservices',
      category: 'Backend & APIs',
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      description: 'Asynchronous event streaming, webhook ingestion, and Pydantic v2 schema validation.',
      stat: 'Sub-15ms Latency'
    },
    {
      id: 'mobilenet',
      name: 'MobileNetV2 Vision',
      category: 'Deep Learning',
      icon: <BrainCircuit className="w-4 h-4 text-indigo-400" />,
      description: 'Transfer learning, depthwise separable convolutions & lightweight edge inference.',
      stat: '96.2% Val Accuracy'
    }
  ];

  const current = satellites.find((s) => s.id === selectedOrbit) || satellites[0];

  return (
    <div className="rounded-3xl bg-[#090d18] border border-cyan-800/40 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            CORE ARCHITECTURAL CONSTELLATION
          </span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Python-Centric Intelligence Architecture</span>
          </h3>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Synchronized Tech Orbit</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Core Hub Representation */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-[#070b14] border border-cyan-800/60 relative overflow-hidden flex flex-col justify-between space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Central Engine</span>
              <h4 className="text-base font-bold text-white">Python 3.11 Runtime</h4>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
            <div className="flex items-center justify-between text-cyan-300 font-mono text-[11px]">
              <span>Active Node:</span>
              <span className="font-semibold">{current.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px] pt-1">
              {current.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Specialization Focus:</span>
            <span className="text-cyan-400 font-semibold">{current.stat}</span>
          </div>
        </div>

        {/* Orbiting Satellites Selector */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {satellites.map((s) => {
            const isSelected = selectedOrbit === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedOrbit(s.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-950/80 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">
                      {s.category}
                    </span>
                  </div>
                  <h5 className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {s.name}
                  </h5>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                    {s.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-500'}>
                    {s.stat}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
