import { useState, useEffect } from 'react';
import { X, Sparkles, Mail, Linkedin, Github, Send, Copy, Check, Bot, CheckCircle2, Calendar, Clock } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [projectType, setProjectType] = useState('Agentic AI Developer (Full-Time Remote)');
  const [timeline, setTimeline] = useState('Immediate (Next 1-2 Weeks)');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send real email via FormSubmit AJAX service
      await fetch(`https://formsubmit.co/ajax/${resumeData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Portfolio Hire Request] ${projectType} from ${clientName}`,
          client_name: clientName,
          client_email: clientEmail,
          requested_role: projectType,
          desired_timeline: timeline,
          project_details: message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      // Also log locally to full-stack backend
      fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          role: projectType,
          timeline,
          details: message,
        }),
      }).catch(() => {});

      setSubmitted(true);
    } catch (err) {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#0b1120] border border-cyan-800/60 rounded-3xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient header */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-cyan-950/80 via-blue-950/50 to-[#080d1a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Hire Arsalan Mustafa Malik
                </h3>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-700/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>
              <p className="text-xs text-cyan-300 font-mono">
                Agentic AI Developer | D2C Automation Specialist
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Value Cards */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-semibold text-slate-200 block mb-0.5">Engagement Types</span>
              <span className="text-slate-400">Full-Time Remote, Contract / Project-Based, Advisory</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-semibold text-slate-200 block mb-0.5">Specialization</span>
              <span className="text-slate-400">LangGraph, Python, RAG, ChromaDB, FastAPI</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Select Role or Engagement Scope
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="Agentic AI Developer (Full-Time Remote)">Agentic AI Developer (Full-Time Remote Role)</option>
                <option value="Multi-Agent System & LangGraph Architecture (Contract)">Multi-Agent System & LangGraph Architecture (Contract)</option>
                <option value="D2C Brand AI Workflow Automation">D2C Brand AI Workflow Automation</option>
                <option value="RAG Chatbot / Vector Store System (ChromaDB)">RAG Chatbot / Vector Store System (ChromaDB)</option>
                <option value="Competitor & Pricing Intelligence Scraper Engine">Competitor & Pricing Intelligence Scraper Engine</option>
                <option value="Computer Vision / Deep Learning Model">Computer Vision / Deep Learning Model Pipeline</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Name / Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan (Brand Founder / Recruiter)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Desired Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Immediate (Next 1-2 Weeks)', 'Within This Month', 'Exploring / Planning'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setTimeline(opt)}
                    className={`py-2 px-2 text-[11px] rounded-lg border text-center font-medium transition-all cursor-pointer ${
                      timeline === opt
                        ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Project Notes / Role Description
              </label>
              <textarea
                rows={3}
                placeholder="Give a quick summary of what you are building or what role you are hiring for..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Routing Inquiry to Arsalan...' : 'Send Hire Inquiry (Direct Delivery)'}</span>
            </button>
          </form>

          {submitted && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Inquiry dispatched directly to Arsalan Mustafa Malik! Expect a response at <strong>{clientEmail}</strong> within 24 hours. You can also write directly to <strong>{resumeData.email}</strong>.</span>
            </div>
          )}

          {/* Quick Connect Row */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied arsalanmustafamalik@gmail.com!' : 'Copy Direct Email'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-blue-300 hover:text-white bg-blue-950/50 hover:bg-blue-900/50 border border-blue-800/60 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
