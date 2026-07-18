import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    label: 'Tư vấn chuyên gia\nmiễn phí',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: 'Giải pháp thiết kế\ncá nhân hóa',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="relative z-10 w-full bg-transparent pb-24 pt-8">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto relative z-10">
        
        {/* Sleek Dark Card */}
        <div className="relative overflow-hidden rounded-[16px] bg-[#021817]/90 backdrop-blur-xl border border-[#51d7c4]/20 shadow-[0_20px_60px_rgba(2,24,23,0.5)]">
          
          {/* Subtle Teal Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#51d7c4]/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

          <div className="px-6 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Column: Text + Features */}
            <div className="flex flex-col gap-10 w-full lg:flex-1 shrink-0 lg:pr-8">
              
              {/* Top: Text */}
              <div className="flex flex-col text-center lg:text-left w-full">
                <h6 className="font-label text-[#51d7c4] text-[12px] md:text-[13px] font-bold tracking-[0.25em] uppercase mb-4 opacity-90">
                  Bắt đầu hành trình kiến tạo
                </h6>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight md:leading-[1.2]">
                  Không gian sống lý tưởng <br className="hidden lg:block"/><span className="text-[#51d7c4]">của bạn</span>
                </h2>
              </div>

              {/* Bottom: 3 Features */}
              <div className="flex justify-center lg:justify-start w-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-12 w-fit mx-auto lg:mx-0">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 group/feat justify-start w-full md:w-auto">
                      <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center rounded-full bg-[#51d7c4]/10 border border-[#51d7c4]/20 group-hover/feat:bg-[#51d7c4] transition-colors duration-300">
                        <div className="text-[#51d7c4] group-hover/feat:text-[#021817] transition-colors duration-300">
                          {f.icon}
                        </div>
                      </div>
                      <span className="text-[14px] md:text-[15px] text-white/90 whitespace-pre-line leading-relaxed font-medium">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Button + Text */}
            <div className="shrink-0 flex flex-col items-center lg:items-end justify-center w-full lg:w-auto mt-2 lg:mt-0 gap-5">
              
              <Link 
                href="/tu-van" 
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#17c3b2] to-[#51d7c4] text-[#021817] px-8 py-4 md:px-10 md:py-5 uppercase tracking-[0.15em] font-bold text-[14px] md:text-[15px] transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(81,215,196,0.3)] hover:shadow-[0_0_30px_rgba(81,215,196,0.5)] hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 whitespace-nowrap">Đặt lịch tư vấn ngay</span>
                <svg className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] z-0"></div>
              </Link>

              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#51d7c4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#51d7c4]"></span>
                </div>
                <span className="text-[11px] md:text-[12px] text-[#51d7c4]/80 tracking-[0.15em] uppercase font-semibold">Tư vấn chuyên gia 24/7</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
