import { useEffect } from 'react';
import { X, Download, Mail, Linkedin, Github, ExternalLink, CheckCircle2, Bot, Layers, Brain, Database } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl my-8 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080d1a] sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
            <span className="font-semibold text-slate-200 text-sm sm:text-base">Curriculum Vitae — Arsalan Mustafa Malik</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-700/60 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b1120] text-slate-300 font-sans print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400 print:text-blue-700 mt-1">
              {resumeData.headline}
            </p>
            <p className="text-sm text-slate-400 print:text-gray-600 mt-1">
              {resumeData.location}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm text-slate-300 print:text-gray-800">
              <a 
                href={`mailto:${resumeData.email}`} 
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{resumeData.email}</span>
              </a>
              <a 
                href={resumeData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/arsalan-mustafa-malik</span>
              </a>
              <a 
                href={resumeData.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>github.com/malik123arsalan</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3 flex items-center gap-2">
              <Bot className="w-4 h-4" /> Professional Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-gray-800">
              {resumeData.summary}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Technical Competencies & Specializations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((category) => (
                <div key={category.categorySlug} className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 print:bg-gray-50 print:border-gray-300">
                  <h3 className="text-xs font-semibold text-slate-200 print:text-black uppercase tracking-wider mb-2">
                    {category.categoryName}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill.name}
                        className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 print:bg-gray-200 print:text-black print:border-gray-400"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3 flex items-center gap-2">
              <Brain className="w-4 h-4" /> Featured Projects & Technical Systems
            </h2>
            <div className="space-y-6">
              {projectsData.map((project) => (
                <div key={project.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base font-bold text-white print:text-black">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 print:text-blue-700">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-gray-600 mb-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800 mb-3">
                    <p><strong className="text-slate-200 print:text-black">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-slate-200 print:text-black">Solution Architecture:</strong> {project.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.flatMap(ts => ts.technologies).slice(0, 7).map((tech) => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 print:bg-gray-200 print:text-black">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-cyan-400 hover:underline"
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Standards */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3 flex items-center gap-2">
              <Database className="w-4 h-4" /> Architectural Standards & Delivery Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {resumeData.philosophies.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 print:border-gray-200">
                  <div className="flex items-center space-x-1.5 font-semibold text-slate-200 print:text-black mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-400 print:text-gray-600 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#080d1a] flex items-center justify-between text-xs text-slate-400">
          <span>Arsalan Mustafa Malik • Agentic AI Developer</span>
          <span>arsalanmustafamalik@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
