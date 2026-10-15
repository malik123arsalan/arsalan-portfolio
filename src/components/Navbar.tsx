import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenHire: () => void;
}

export function Navbar({ onOpenCV, onOpenHire }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'D2C Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#060913]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow flex items-center justify-center">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm sm:text-base tracking-tight flex items-center gap-1.5">
                <span>Arsalan Mustafa Malik</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                Agentic AI Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 hover:text-white transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </button>

            {/* Hire Me Button - Triggers Hire Me Modal with 100% interactive response */}
            <button
              onClick={onOpenHire}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu & Quick Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenHire}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm flex items-center space-x-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Hire Me</span>
            </button>

            <button
              onClick={onOpenCV}
              className="p-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 rounded-lg flex items-center justify-center cursor-pointer"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#080d1a]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenHire();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me (Quick Connect)</span>
            </button>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenCV();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download / View CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
