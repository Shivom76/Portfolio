import React from 'react';

export default function SkillProgress({ skill, percentage }) {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="mb-6 group">
      {/* Skill Name & Percentage Label */}
      <div className="flex justify-between items-end mb-2 px-1">
        <span className="text-sm font-bold tracking-wide text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
          {skill}
        </span>
        <span className="text-xs font-mono text-sky-500/80">
          {normalizedPercentage}%
        </span>
      </div>

      {/* Progress Bar Container - 30% Secondary Area */}
      <div className="w-full bg-blue-950/40 rounded-full h-2 border border-white/5 overflow-hidden">
        {/* Progress Fill - 10% Accent Area */}
        <div 
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 
                     relative shadow-[0_0_15px_rgba(56,189,248,0.5)]
                     transition-all duration-1000 ease-out" 
          style={{ width: `${normalizedPercentage}%` }}
          aria-valuenow={normalizedPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
        >
          {/* Animated "Pulse" effect on the bar tip */}
          <div className="absolute right-0 top-0 h-full w-2 bg-white/20 blur-sm"></div>
        </div>
      </div>
    </div>
  );
}