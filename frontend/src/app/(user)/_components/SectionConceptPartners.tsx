import React from 'react';

const partners = [
  "Poliform", "B&B ITALIA", "Minotti", "Molteni&C", "blum", "HAFELE", "KOHLER", "Dulux", "Eurogold", "Vicostone"
];

export default function SectionConceptPartners() {
  return (
    <section className="relative z-10 w-full bg-transparent py-8 md:py-12">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Sci-Fi Centered Label */}
        <div className="mb-8 md:mb-10 flex flex-col items-center justify-center relative w-full gap-4">
          {/* Animated line behind */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/20 to-transparent -z-10 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate] hidden md:block"></div>
          
          <div className="relative inline-flex items-center justify-center p-[1px] rounded-sm overflow-hidden group">
            {/* Rotating border */}
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative px-8 py-2.5 bg-gradient-to-r from-[#021817]/95 via-[#032624]/95 to-[#021817]/95 border border-[#51d7c4]/30 flex items-center justify-center backdrop-blur-md">
              <h2 className="text-[#51d7c4] drop-shadow-[0_0_8px_rgba(81,215,196,0.4)] text-[18px] md:text-[22px] font-bold tracking-[0.2em] uppercase">
                ĐỐI TÁC TIN CẬY
              </h2>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#51d7c4]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#51d7c4]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#51d7c4]"></div>
            </div>
          </div>
        </div>

        <div 
          className="relative w-full bg-gradient-to-r from-[#021817]/95 via-[#032624]/95 to-[#021817]/95 backdrop-blur-md border border-[#51d7c4]/20 overflow-hidden"
          style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
          }}
        >
          {/* Top and Bottom Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-transparent"></div>
          
          {/* Container for glowing dots on chamfered corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#51d7c4] opacity-50 -translate-x-[22px] -translate-y-[22px] rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#51d7c4] opacity-50 translate-x-[22px] translate-y-[22px] rotate-45"></div>

          <div className="py-8 md:py-10 w-full relative">
            <div className="flex overflow-hidden relative w-full group">
              <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {/* Duplicate the array twice for smooth infinite scrolling */}
                {[...partners, ...partners].map((partner, idx) => (
                  <div key={idx} className="w-[150px] md:w-[200px] lg:w-[250px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-white/5 transition-colors py-4 px-4">
                    <span className="font-serif font-bold text-white text-[18px] md:text-[22px] tracking-wider hover:scale-110 transition-transform drop-shadow-md text-center">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Integrated Sci-Fi Tab Button in bottom right corner */}
          <div className="absolute bottom-0 right-0 z-20 flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3.5 bg-gradient-to-r from-[#021817] to-[#032624] border-t border-l border-[#51d7c4]/40 cursor-pointer group hover:from-[#032624] hover:to-[#51d7c4]/20 transition-all duration-300">
            <span className="text-[#51d7c4] text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] group-hover:text-white transition-colors">
              Khám phá 30+ đối tác
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#51d7c4] group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
