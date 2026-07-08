import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    label: 'Tư vấn chuyên gia\nmiễn phí',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: 'Giải pháp thiết kế\ncá nhân hóa',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: 'Báo giá nhanh\n& minh bạch',
  },
];

export default function SectionConceptCTA() {
  return (
    <section className="relative z-10 px-4 md:px-8 max-w-[1440px] mx-auto pb-24 pt-8">
      {/* Sci-Fi CTA Wrapper */}
      <div className="relative p-[1.5px] rounded-sm overflow-hidden group">
        {/* Rotating conic gradient border */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#51d7c4_20%,transparent_40%,#51d7c4_100%)] animate-[spin_10s_linear_infinite]"></div>

        {/* Inner Glass Box */}
        <div className="relative bg-[#021817]/95 backdrop-blur-xl px-6 py-8 lg:px-10 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[inset_0_0_60px_rgba(81,215,196,0.08)]">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#51d7c4]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#51d7c4]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#51d7c4]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#51d7c4]"></div>

          {/* Glowing Top Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent shadow-[0_0_15px_#51d7c4]"></div>
          {/* Glowing Bottom Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent shadow-[0_0_15px_#51d7c4]"></div>

          {/* Content Wrapper */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 w-full z-10">
            
            {/* Left Column: Text + Features */}
            <div className="flex flex-col gap-8 w-full lg:flex-1 shrink-0 lg:pr-8">
              
              {/* Top: Text */}
              <div className="flex flex-col shrink-0 text-center lg:text-left w-full">
                <h2 className="text-white text-[15px] md:text-[20px] lg:text-[24px] uppercase font-bold tracking-[0.1em] md:tracking-widest mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  Bắt đầu hành trình kiến tạo
                </h2>
                <h3 className="text-[#51d7c4] text-[18px] md:text-[26px] lg:text-[32px] uppercase font-black tracking-wider drop-shadow-[0_0_10px_rgba(81,215,196,0.4)] leading-snug">
                  Không gian sống lý tưởng <br className="hidden lg:block"/><span className="text-white mt-1 md:mt-0 block lg:inline">của bạn</span>
                </h3>
              </div>

              {/* Bottom: 3 Features */}
              <div className="flex justify-center lg:justify-start w-full pt-4 md:pt-0">
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 xl:gap-12 w-fit mx-auto lg:mx-0">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 group/feat justify-start w-full md:w-auto">
                      <div 
                        className="w-12 h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center border border-[#51d7c4]/30 bg-[#51d7c4]/5 group-hover/feat:bg-[#51d7c4]/20 transition-all duration-300 group-hover/feat:shadow-[0_0_15px_rgba(81,215,196,0.3)]"
                        style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}
                      >
                        <div className="text-[#e6b971] group-hover/feat:scale-110 group-hover/feat:text-[#ffe4a0] transition-all drop-shadow-[0_0_5px_rgba(230,185,113,0.5)]">
                          {f.icon}
                        </div>
                      </div>
                      <span className="text-[13px] md:text-[14px] text-white/90 whitespace-pre-line leading-snug tracking-wide group-hover/feat:text-white transition-colors text-left font-medium">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Button + Text */}
            <div className="shrink-0 flex flex-col items-center lg:items-end justify-center w-full lg:w-auto mt-6 lg:mt-0 gap-3 lg:gap-4">
              
              {/* Sci-Fi Spinning Border Wrapper */}
              <div 
                className="relative p-[2px] flex items-center justify-center group/btn overflow-hidden transition-transform duration-500 hover:scale-[1.02] w-fit mx-auto lg:ml-auto lg:mr-0" 
                style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}
              >
                {/* Static Outline */}
                <div className="absolute inset-0 bg-[#51d7c4]/30"></div>
                
                {/* Spinning Dual Rays Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[500%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#ffffff_10%,transparent_20%,transparent_50%,#ffffff_60%,transparent_70%)] animate-[spin_4s_linear_infinite] opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Inner Button Box */}
                <Link href="/tu-van" className="relative block w-full h-full bg-[#021817]" style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
                  <div 
                    className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#17c3b2] via-[#64f4e1] to-[#17c3b2] bg-[length:200%_auto] hover:bg-right px-6 py-3.5 md:px-8 md:py-4 text-[#010d0c] font-black transition-all duration-500 shadow-[0_0_20px_rgba(81,215,196,0.3)] group-hover/btn:shadow-[0_0_35px_rgba(81,215,196,0.6)] overflow-hidden"
                    style={{ clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)' }}
                  >
                    <span className="text-[14px] md:text-[15px] uppercase tracking-[0.15em] relative z-10 whitespace-nowrap">Đặt lịch tư vấn ngay</span>
                    <svg className="group-hover/btn:translate-x-1.5 transition-transform duration-300 relative z-10 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    
                    {/* Sweeping light effect inside button */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover/btn:animate-[shimmer_1.5s_ease-in-out_infinite] z-0"></div>
                  </div>
                </Link>
              </div>

              {/* Added Sci-Fi Indicator Text */}
              <div className="flex items-center gap-2 pr-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#51d7c4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#51d7c4] shadow-[0_0_8px_#51d7c4]"></span>
                </div>
                <span className="text-[10px] md:text-[11px] text-[#51d7c4]/80 tracking-[0.2em] uppercase font-semibold">Tư vấn chuyên gia 24/7</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
