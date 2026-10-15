/**
 * TechBadge component for rendering standardized, elegant technology tags.
 */

interface TechBadgeProps {
  label: string;
  variant?: 'cyan' | 'slate' | 'emerald' | 'violet';
  size?: 'sm' | 'md';
}

export function TechBadge({ label, variant = 'slate', size = 'sm' }: TechBadgeProps) {
  const variantStyles = {
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50 hover:border-cyan-700/80',
    slate: 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50 hover:border-emerald-700/80',
    violet: 'bg-indigo-950/40 text-indigo-300 border-indigo-800/50 hover:border-indigo-700/80',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </span>
  );
}
