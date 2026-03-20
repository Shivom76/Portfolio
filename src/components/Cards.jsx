import Card from "./Card";

export default function Cards({ text, data }) {
  const items = data || [];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* 10% Accent: The Section Sub-heading */}
      <div className="flex items-center justify-center gap-4 mb-10" data-aos="fade-up">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-sky-500"></div>
        <h3 className="text-xl font-mono font-bold tracking-[0.2em] text-sky-400 uppercase">
          {text}
        </h3>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-sky-500"></div>
      </div>

      {/* Responsive Grid: 1 column on mobile, 2 on large screens */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            <Card title={item.title} content={item.content} />
          </div>
        ))}
      </div>
      
      {/* 30% Secondary: Subtle decorative element */}
      {items.length === 0 && (
        <p className="text-center text-slate-500 italic">No records found in the abyss...</p>
      )}
    </div>
  );
}