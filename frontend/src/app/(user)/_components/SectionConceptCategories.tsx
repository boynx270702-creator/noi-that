import React from 'react';

const categories = [
  { name: 'CHUNG CƯ', img: '/images/main/bed1.jpg' },
  { name: 'NHÀ PHỐ', img: '/images/main/pen1.jpg' },
  { name: 'VILLA', img: '/images/main/villa1.jpg' },
  { name: 'PENTHOUSE', img: '/images/main/pen3.jpg' },
  { name: 'VĂN PHÒNG', img: '/images/main/office.jpg' },
  { name: 'SHOWROOM', img: '/images/main/26.jpg' },
];

export default function SectionConceptCategories() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#f0fdfb] via-white to-[#f0fdfb] z-10">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Sci-Fi Centered Label */}
      <div className="mb-12 flex flex-col items-center justify-center relative w-full">
        {/* Animated line behind */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/20 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate]"></div>
        
        <div className="relative inline-flex items-center justify-center p-[1px] rounded-sm overflow-hidden group">
          {/* Rotating border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
          
          <div className="relative px-8 py-2.5 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center border border-[#008f82]/20 shadow-[0_5px_15px_rgba(0,143,130,0.05)]">
            <h2 className="text-[#006e64] text-[18px] md:text-[22px] font-bold tracking-[0.2em] uppercase mb-1">
              DANH MỤC CÔNG TRÌNH
            </h2>
            <div className="text-[#008f82]/80 text-[11px] font-bold uppercase tracking-widest">
              Giải pháp toàn diện
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#008f82]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#008f82]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#008f82]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#008f82]"></div>
          </div>
        </div>
      </div>
      
      {/* Full width content */}
      <div className="w-full relative bg-white/60 backdrop-blur-md border border-[#008f82]/20 rounded-sm shadow-[0_15px_40px_rgba(0,143,130,0.08)] overflow-hidden p-4">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008f82]/30 to-transparent"></div>

        <div className="overflow-x-auto pb-2 pt-2 snap-x [&::-webkit-scrollbar]:hidden flex gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="min-w-[220px] md:min-w-[280px] h-[160px] md:h-[200px] relative rounded-sm overflow-hidden group snap-start cursor-pointer border border-[#008f82]/20 hover:border-[#008f82]/60 hover:shadow-[0_10px_20px_rgba(0,143,130,0.15)] transition-all">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              <div className="absolute inset-0 bg-[#00100f]/10 group-hover:bg-[#002b29]/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center">
                <h3 className="text-[14px] md:text-[16px] font-bold text-white tracking-widest drop-shadow-md uppercase">{cat.name}</h3>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#006e64] transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
