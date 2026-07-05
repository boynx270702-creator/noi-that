import React from 'react';

const partners = [
  "Poliform", "B&B ITALIA", "Minotti", "Molteni&C", "blum", "HAFELE", "KOHLER", "Dulux"
];

export default function SectionConceptPartners() {
  return (
    <section className="relative z-10 px-4 md:px-8 max-w-[1440px] mx-auto py-8">
      {/* Sci-Fi Centered Label */}
      <div className="mb-12 flex flex-col items-center justify-center relative w-full">
        {/* Animated line behind */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/20 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate]"></div>
        
        <div className="relative inline-flex items-center justify-center p-[1px] rounded-sm overflow-hidden group">
          {/* Rotating border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
          
          <div className="relative px-8 py-2.5 bg-[#021817]/50 backdrop-blur-md flex flex-col items-center justify-center">
            <h2 className="text-white drop-shadow-[0_0_8px_rgba(81,215,196,0.8)] text-[18px] md:text-[22px] font-bold tracking-[0.2em] uppercase animate-[pulse_3s_ease-in-out_infinite] mb-1">
              ĐỐI TÁC TIN CẬY
            </h2>
            <div className="text-[#51d7c4]/60 text-[11px] font-light uppercase tracking-widest">
              Top thương hiệu
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#51d7c4]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#51d7c4]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#51d7c4]"></div>
          </div>
        </div>
      </div>
      
      {/* Full width content */}
      <div className="w-full relative bg-transparent backdrop-blur-md border border-[#51d7c4]/40 rounded-sm shadow-[0_0_15px_rgba(81,215,196,0.1)] overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-transparent"></div>
        
        <div className="flex flex-row overflow-x-auto divide-x divide-[#51d7c4]/20 [&::-webkit-scrollbar]:hidden">
          {partners.map((partner, idx) => (
            <div key={idx} className="min-w-[140px] lg:flex-1 h-[80px] flex items-center justify-center hover:bg-[#51d7c4]/10 transition-colors cursor-pointer px-4">
              <span className="text-white font-bold text-[18px] md:text-[20px] tracking-wider font-serif text-center whitespace-nowrap drop-shadow-md">{partner}</span>
            </div>
          ))}
          <div className="min-w-[160px] lg:flex-1 h-[80px] flex items-center justify-center hover:bg-[#51d7c4]/10 transition-colors cursor-pointer group px-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full border border-[#51d7c4]/50 group-hover:border-[#51d7c4] flex items-center justify-center text-[16px] text-white group-hover:text-[#51d7c4] transition-colors">+</span>
              <span className="text-gray-300 text-[11px] group-hover:text-[#51d7c4] text-left tracking-widest uppercase leading-tight transition-colors">
                VÀ HƠN 30+<br/>ĐỐI TÁC KHÁC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
