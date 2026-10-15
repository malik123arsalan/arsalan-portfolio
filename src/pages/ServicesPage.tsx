import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Zap, BarChart3, TrendingUp, Cpu } from 'lucide-react';
import { d2cServicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { AiNeuralMesh } from '../components/AiNeuralMesh';
import { D2CCommerceFlowGraphic } from '../components/D2CCommerceFlowGraphic';

export function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20 relative">
      {/* Interactive Ambient AI Mesh */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden pointer-events-none -z-10">
        <AiNeuralMesh />
      </div>

      {/* Header */}
      <section className="max-w-3xl space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>High-Leverage Commerce Automation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          AI Services for D2C Brands
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          I partner with direct-to-consumer eCommerce brands, modern retail operators, and high-velocity digital teams to deploy reliable, high-ROI AI automation systems. No generic chatbots—only deterministic workflows engineered for scale.
        </p>

        {/* Quick jumps */}
        <div className="flex flex-wrap gap-2 pt-2">
          {d2cServicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              {s.shortTitle}
            </a>
          ))}
        </div>
      </section>

      {/* Value Pillars Banner */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-2">
          <div className="h-9 w-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-white">Direct Operational ROI</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every system is designed to replace hundreds of manual repetitive hours or capture revenue otherwise lost to stockouts and slow triage.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-2">
          <div className="h-9 w-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-white">Zero-Hallucination RAG</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All customer and operational responses are anchored strictly to your verified product manuals, catalog databases, and store policies.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800/80 space-y-2">
          <div className="h-9 w-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3">
            <Cpu className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-white">Native Stack Integration</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Integrates directly into your existing Shopify Admin, Klaviyo, Gorgias, Zendesk, PostgreSQL, and Slack channels.
          </p>
        </div>
      </section>

      {/* Autonomous Commerce Loop Motion Graphic */}
      <section className="space-y-4">
        <D2CCommerceFlowGraphic />
      </section>

      {/* Services List (Complete detailed breakdowns) */}
      <section className="space-y-16">
        {d2cServicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      {/* How We Work Together */}
      <section className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Delivery Framework
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How We Implement AI in Your Brand
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            A battle-tested 4-step delivery pipeline ensuring rapid implementation with minimal disruption to your daily operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">01 / AUDIT</span>
            <h4 className="text-sm font-bold text-white">Workflow Bottleneck Audit</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We identify your most repetitive time-sinks across support, inventory sync, pricing, or catalog generation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">02 / PROTOTYPE</span>
            <h4 className="text-sm font-bold text-white">Working POC in 7 Days</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              I build and demonstrate a working prototype connected to sample data and webhooks so your team can test real outputs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">03 / HARDENING</span>
            <h4 className="text-sm font-bold text-white">Guardrails & Edge Cases</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We implement Pydantic validation, human-in-the-loop review screens, and fallback alerts for zero unexpected failures.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">04 / HANDOFF</span>
            <h4 className="text-sm font-bold text-white">Deployment & Documentation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete deployment to your infrastructure, automated logging, and comprehensive video/written documentation for your team.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
          <span className="text-xs text-slate-400">
            Have a custom workflow that isn't listed here? Let's discuss your custom architecture.
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <span>Discuss Your D2C AI Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
