export default function Card({ title, content }) {
    return (
      <div className="group relative">
        {/* 10% Accent: The "Glow" behind the card on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        
        {/* 30% Secondary: The Card Body */}
        <div className="relative bg-blue-950/20 hover:bg-blue-900/30 text-white shadow-2xl rounded-2xl p-8 backdrop-blur-xl border border-blue-500/10 hover:border-sky-500/30 transition-all duration-500 m-3 max-w-2xl flex flex-col items-center gap-3">
          
          {/* Title with subtle accent color */}
          <div className="title font-bold text-center text-xl tracking-tight text-sky-100 group-hover:text-sky-400 transition-colors duration-300">
            {title}
          </div>
          
          {/* Divider line */}
          <div className="w-12 h-1 bg-sky-500/20 rounded-full group-hover:w-20 group-hover:bg-sky-500/50 transition-all duration-500"></div>
          
          {/* Content - slightly larger for readability */}
          <p className="content text-sm text-center leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
            {content}
          </p>
        </div>
      </div>
    );
  }