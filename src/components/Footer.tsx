import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Terminal, ArrowUpRight, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  onOpenCV: () => void;
}

export function Footer({ onOpenCV }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#04060d] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Identity & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-slate-100 group">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block">
                  {resumeData.name}
                </span>
                <span className="text-xs font-mono text-cyan-400 block">
                  {resumeData.headline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Designing deterministic agentic architectures, stateful LangGraph workflows, high-precision RAG pipelines, and automated intelligence for high-growth direct-to-consumer brands.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700/60 transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700/60 transition-all"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-700/60 transition-all"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About & Engineering</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects & Case Studies</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills & Tech Stack</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">D2C AI Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Case Studies & Quick Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Featured Systems
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects/resolvex-ai" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>ResolveX AI Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/projects/crop-health-detection" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>Crop Health AI Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenCV}
                  className="text-left hover:text-cyan-400 transition-colors text-slate-300 font-medium cursor-pointer"
                >
                  Download Complete CV
                </button>
              </li>
              <li>
                <a 
                  href="https://github.com/malik123arsalan" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Arsalan Mustafa Malik. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-cyan-400/80">Built with React, LangGraph & Python Architectures</span>
            <span>•</span>
            <span className="flex items-center gap-1">Designed for high-impact production systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
