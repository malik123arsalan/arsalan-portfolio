import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github, Cpu, Layers } from 'lucide-react';
import { ProjectDetail } from '../data/projectsData';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: ProjectDetail;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  // Flatten tech stack for preview chips
  const tags = project.techStack.flatMap((cat) => cat.technologies).slice(0, 6);

  return (
    <div
      className={`group relative rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-cyan-950/20 ${
        featured ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center p-6 sm:p-8' : 'p-6'
      }`}
    >
      {/* Visual media banner */}
      <div
        className={`relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 mb-6 ${
          featured ? 'lg:col-span-5 lg:mb-0 h-64 lg:h-full min-h-[220px]' : 'h-52 w-full'
        }`}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={project.imageCaption || project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-6 text-center">
            <Cpu className="w-8 h-8 text-cyan-400 mb-2 mx-auto" />
            <p className="text-xs font-mono text-cyan-300">{project.shortTitle}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />
        
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#080d1a]/90 text-cyan-400 border border-cyan-800/60 backdrop-blur-md">
            <Cpu className="w-3 h-3" />
            <span>{project.category}</span>
          </span>
        </div>

        {/* Project type flag */}
        <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 font-mono line-clamp-1 bg-[#080d1a]/80 px-2.5 py-1 rounded-md border border-slate-700/50">
          {project.type}
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 justify-between ${featured ? 'lg:col-span-7' : ''}`}>
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm font-medium text-cyan-400/90 mb-3 font-mono">
            {project.headline}
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Quick Problem & Solution snapshot */}
          <div className="space-y-2 mb-6 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 font-semibold uppercase tracking-wider block mb-0.5">Problem:</span>
              <p className="text-slate-300 line-clamp-2">{project.problem}</p>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <TechBadge key={tag} label={tag} variant="slate" size="sm" />
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center flex-wrap gap-3 pt-4 border-t border-slate-800/80">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/25 transition-all cursor-pointer group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-all cursor-pointer"
          >
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
