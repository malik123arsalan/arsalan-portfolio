import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, Bot } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 mx-auto">
        <Terminal className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
          Error 404 • State Not Found
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Route Unreachable
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
          The requested agent graph node or portfolio page does not exist or has been relocated.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-600/30 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
        >
          <span>View Featured Projects</span>
        </Link>
      </div>
    </div>
  );
}
