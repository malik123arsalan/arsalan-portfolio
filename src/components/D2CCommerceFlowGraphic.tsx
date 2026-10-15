import { useState } from 'react';
import { Sparkles, TrendingUp, Cpu, MessageSquareCode, BarChart3, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export function D2CCommerceFlowGraphic() {
  const [activeFlow, setActiveFlow] = useState(0);

  const flows = [
    {
      title: 'Real-Time Courier & Order Exception Agent',
      impact: 'Cuts WISMO tickets by 50%+',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      detail: 'Listens to Shopify & carrier webhooks. If delays occur, agent drafts proactive SMS/Email customer alerts and updates inventory.'
    },
    {
      title: 'Automated Rival Pricing & Stockout Watcher',
      impact: 'Dynamic Margin Protection',
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      detail: 'Monitors competitor storefronts daily. Alerts growth teams when rivals run flash sales or face out-of-stock bestsellers.'
    },
    {
      title: 'Zero-Hallucination RAG Support Concierge',
      impact: '24/7 Conversion Lift',
      icon: <MessageSquareCode className="w-4 h-4 text-blue-400" />,
      detail: 'Grounded strictly in brand sizing charts and return guidelines. Warmly escalates to Gorgias/Zendesk with pre-filled context.'
    },
    {
      title: 'Automated Monday Executive KPI Briefing',
      impact: 'Saves 4 hours/week',
      icon: <BarChart3 className="w-4 h-4 text-amber-400" />,
      detail: 'Pulls blended ROAS, CAC, inventory velocity, and returns directly into Slack or executive email with natural language narrative.'
    }
  ];

  return (
    <div className="rounded-3xl bg-[#090d18] border border-cyan-800/40 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            D2C AUTOMATION ARCHITECTURE
          </span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>High-Velocity Brand Intelligence Loop</span>
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
          <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>Shopify • Klaviyo • Gorgias Synced</span>
        </div>
      </div>

      {/* SVG Animated Laser Stream */}
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
            stroke="url(#d2cLaserGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="30 90"
            className="animate-[dash_2.5s_linear_infinite]"
          />
          <defs>
            <linearGradient id="d2cLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
        {flows.map((flow, idx) => {
          const isSelected = activeFlow === idx;
          return (
            <button
              key={flow.title}
              onClick={() => setActiveFlow(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-950/80 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    {flow.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                    {flow.impact}
                  </span>
                </div>
                <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {flow.title}
                </h4>
              </div>

              {isSelected && (
                <div className="mt-3 pt-2 border-t border-cyan-800/60 text-[11px] text-slate-300 leading-snug">
                  {flow.detail}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
