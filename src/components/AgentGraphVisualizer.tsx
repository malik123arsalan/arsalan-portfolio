import { useState } from 'react';
import { Bot, Search, FileCode, UserCheck, ShieldAlert, Check, Play, RefreshCw } from 'lucide-react';

interface GraphNode {
  id: string;
  name: string;
  agent: string;
  type: 'agent' | 'rag' | 'human' | 'action';
  summary: string;
  payload: string;
  stateUpdates: string[];
}

export function AgentGraphVisualizer() {
  const [activeNode, setActiveNode] = useState<string>('detective');
  const [isSimulating, setIsSimulating] = useState(false);

  const nodes: GraphNode[] = [
    {
      id: 'monitoring',
      name: '01. Telemetry Ingestion',
      agent: 'Monitoring Agent',
      type: 'agent',
      summary: 'Aggregates Prometheus & CloudWatch metrics. Filters transient anomalies from severe degradations.',
      payload: JSON.stringify({
        incident_id: "INC-8942",
        trigger: "p99_latency_spike",
        service: "checkout-api",
        metric_value: "3480ms (threshold: 400ms)",
        error_rate_5xx: "14.2%",
        timestamp: "2026-10-13T19:40:00Z"
      }, null, 2),
      stateUpdates: [
        'incident_state.status = "TRIGGERED"',
        'incident_state.severity = "P1_CRITICAL"',
        'incident_state.telemetry_fingerprint = "CHECKOUT_LATENCY_5XX"'
      ]
    },
    {
      id: 'detective',
      name: '02. Root-Cause Analysis',
      agent: 'Detective Agent + ChromaDB RAG',
      type: 'rag',
      summary: 'Executes dense vector search across historical incident postmortems in ChromaDB to identify failure pattern.',
      payload: JSON.stringify({
        vector_query: "checkout-api p99 latency spike database connection pool exhaustion",
        chroma_matches: [
          { postmortem_id: "PM-2025-11", similarity: 0.94, cause: "HikariCP pool leak during high concurrency" },
          { postmortem_id: "PM-2025-04", similarity: 0.81, cause: "Slow query lock on promo_redemptions table" }
        ],
        root_cause_hypothesis: "PostgreSQL active connection saturation due to unclosed session in discount evaluation worker.",
        confidence_score: 0.92
      }, null, 2),
      stateUpdates: [
        'incident_state.root_cause = "DB_CONNECTION_POOL_EXHAUSTION"',
        'incident_state.similar_postmortems = ["PM-2025-11"]',
        'incident_state.diagnosis_confidence = 0.92'
      ]
    },
    {
      id: 'planner',
      name: '03. Remediation Planning',
      agent: 'Planner Agent',
      type: 'agent',
      summary: 'Synthesizes step-by-step remediation runbook using structured Pydantic schema validation.',
      payload: JSON.stringify({
        remediation_id: "REM-8942-A",
        action_type: "RESTART_AND_SCALE_POOL",
        commands: [
          "kubectl scale deployment discount-worker --replicas=0 -n prod",
          "ALTER SYSTEM SET max_connections = '250';",
          "SELECT pg_reload_conf();",
          "kubectl scale deployment discount-worker --replicas=3 -n prod"
        ],
        blast_radius: "MEDIUM_LOCAL",
        rollback_plan: "Revert replica count and restore default postgresql.conf"
      }, null, 2),
      stateUpdates: [
        'incident_state.plan_generated = True',
        'incident_state.requires_human_approval = True',
        'incident_state.status = "AWAITING_APPROVAL"'
      ]
    },
    {
      id: 'hitl',
      name: '04. Human-In-The-Loop Signoff',
      agent: 'FastAPI HITL Guardrail',
      type: 'human',
      summary: 'Interrupts graph execution. Pushes complete incident dossier to on-call engineer for approval or manual edit.',
      payload: JSON.stringify({
        approval_gate_status: "PAUSED_FOR_OPERATOR",
        authorized_by: "oncall-lead@enterprise.com",
        review_timestamp: "2026-10-13T19:40:45Z",
        approval_decision: "APPROVED_WITH_LOGGING",
        audit_hash: "sha256:4f8e91a27c0e81b6..."
      }, null, 2),
      stateUpdates: [
        'incident_state.operator_approved = True',
        'incident_state.status = "EXECUTING_REMEDIATION"'
      ]
    },
    {
      id: 'action',
      name: '05. Verified Resolution & Postmortem',
      agent: 'Execution Worker & Audit Engine',
      type: 'action',
      summary: 'Applies validated commands, tracks telemetry return to baseline, and writes new postmortem record back into ChromaDB.',
      payload: JSON.stringify({
        execution_status: "SUCCESS",
        p99_latency_post_fix: "210ms",
        error_rate_post_fix: "0.01%",
        new_postmortem_indexed: "PM-2026-8942",
        mttr_duration: "1 minute 42 seconds"
      }, null, 2),
      stateUpdates: [
        'incident_state.status = "RESOLVED"',
        'incident_state.mttr = "102s"',
        'chromadb.index("PM-2026-8942")'
      ]
    }
  ];

  const current = nodes.find((n) => n.id === activeNode) || nodes[0];

  const runSimulation = () => {
    setIsSimulating(true);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index < nodes.length) {
        setActiveNode(nodes[index].id);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1500);
  };

  return (
    <div className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive LangGraph State Machine</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            ResolveX Multi-Agent Orchestration Flow
          </h3>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 transition-all cursor-pointer self-start sm:self-auto"
        >
          {isSimulating ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Simulating Transitions...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>Simulate Incident Walkthrough</span>
            </>
          )}
        </button>
      </div>

      {/* Nodes visual timeline buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-950/60 border-cyan-500/80 shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono uppercase font-bold ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                  {node.agent.split(' ')[0]}
                </span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
              </div>
              <div className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {node.name.split('. ')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#060913] rounded-xl border border-slate-800/80 p-5">
        {/* Left: Summary & State delta */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              Active Agent Node
            </div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{current.agent}</span>
            </h4>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {current.summary}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              LangGraph State Transitions
            </div>
            <div className="space-y-1.5">
              {current.stateUpdates.map((update, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1.5 rounded-md">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{update}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Real Structured Payload Inspection */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
            <span>Payload & Telemetry Snapshot</span>
            <span className="text-cyan-400">Pydantic v2 Schema</span>
          </div>
          <pre className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto max-h-64 leading-tight">
            <code>{current.payload}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
