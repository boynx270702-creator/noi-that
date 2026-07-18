import React from 'react';
import SectionStarryMotif from './SectionStarryMotif';

const steps = [
  { 
    num: "01", title: "TIẾP NHẬN THÔNG TIN", desc: "Lắng nghe nhu cầu và định hình ý tưởng",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
  },
  { 
    num: "02", title: "TƯ VẤN & KHẢO SÁT", desc: "Phân tích hiện trạng & tư vấn giải pháp tối ưu",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  },
  { 
    num: "03", title: "THIẾT KẾ CONCEPT", desc: "Lên ý tưởng thiết kế & phối cảnh 3D",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
  },
  { 
    num: "04", title: "BÁO GIÁ & KÝ KẾT", desc: "Đề xuất giải pháp & Báo giá chi tiết",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
  },
  { 
    num: "05", title: "SẢN XUẤT & CUNG ỨNG", desc: "Sản xuất, kiểm soát chất lượng nghiêm ngặt",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
  },
  { 
    num: "06", title: "THI CÔNG & LẮP ĐẶT", desc: "Thi công chuyên nghiệp & đúng tiến độ",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20"/><path d="M10 10v4"/><path d="M14 10v4"/><path d="M5 10v4"/><path d="M19 10v4"/><path d="M12 2v8"/><path d="M4 18v-4a8 8 0 0 1 16 0v4"/></svg>
  },
  { 
    num: "07", title: "BÀN GIAO & BẢO HÀNH", desc: "Bàn giao & đồng hành hậu mãi dài hạn",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  }
];

export default function SectionConcept7Steps() {
  return (
    <section className="relative z-10 w-full py-8 md:py-12 bg-transparent">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto relative z-10">
        {/* Sci-Fi Centered Label */}
        <div className="mb-10 flex flex-col items-center justify-center relative w-full">
          {/* Animated line behind */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/20 to-transparent -z-10"></div>
          <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate]"></div>
          
          <div className="relative inline-flex items-center justify-center p-[1px] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative px-8 py-2.5 bg-gradient-to-r from-[#021817]/95 via-[#032624]/95 to-[#021817]/95 border border-[#51d7c4]/30 flex flex-col items-center justify-center backdrop-blur-md">
              <h2 className="text-[#51d7c4] drop-shadow-[0_0_8px_rgba(81,215,196,0.4)] text-[18px] md:text-[22px] font-bold tracking-[0.2em] uppercase mb-1">
                QUY TRÌNH 7 BƯỚC RÕ RÀNG
              </h2>
              <div className="text-[#51d7c4]/70 text-[11px] font-medium uppercase tracking-widest">
                Đồng hành toàn diện
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#51d7c4]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#51d7c4]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#51d7c4]"></div>
            </div>
          </div>
        </div>
        
        {/* Full width container imitating the dark glass block */}
        <div 
          className="relative w-full bg-gradient-to-r from-[#021817]/80 via-[#032624]/80 to-[#021817]/80 backdrop-blur-md border border-[#51d7c4]/20 p-4 md:p-6 overflow-hidden"
          style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent opacity-80"></div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 md:gap-x-3 md:gap-y-6 lg:gap-x-4 lg:gap-y-8 pb-10 pt-6 px-2 md:px-4 w-full">
            {steps.map((step, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="relative flex items-center shrink-0 group z-10 hover:z-50 w-full sm:w-[calc(50%-4px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-12px)]">
                  
                  {/* The Arrow Shape using drop-shadow for border effect */}
                  <div className="relative shrink-0 filter drop-shadow-[0_0_2px_#51d7c4] group-hover:drop-shadow-[0_0_20px_rgba(81,215,196,0.8)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] w-full">
                    <div 
                      className="w-full h-[100px] md:h-[110px] lg:h-[120px] bg-gradient-to-r from-[#003b36]/95 to-[#004f47]/95 flex items-center group-hover:from-[#021817] group-hover:to-[#022b26] transition-colors cursor-default border border-[#51d7c4]/20"
                      style={{
                        clipPath: isFirst 
                          ? 'polygon(10px 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)'
                          : isLast 
                          ? 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)'
                          : 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)',
                        paddingLeft: isFirst ? '20px' : isLast ? '24px' : '28px',
                        paddingRight: isLast ? '20px' : '24px'
                      }}
                    >
                      <div className="flex flex-row items-center justify-start gap-2 lg:gap-3 xl:gap-4 w-full pr-1">
                        {/* Circular Icon */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border border-dashed border-[#51d7c4]/50 flex items-center justify-center shrink-0 group-hover:border-[#51d7c4] transition-colors group-hover:scale-110 duration-500 group-hover:shadow-[0_0_15px_rgba(81,215,196,0.3)] bg-[#021817]/50">
                          <div className="text-[#51d7c4] scale-90 lg:scale-100 group-hover:drop-shadow-[0_0_8px_rgba(81,215,196,0.5)]">
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Text */}
                        <div className="flex flex-col text-left w-full">
                          <span className="text-[#51d7c4] font-black text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] leading-tight drop-shadow-[0_0_5px_rgba(81,215,196,0.5)] mb-0.5 group-hover:text-white transition-colors">{step.num}</span>
                          <span className="text-white font-bold text-[12px] md:text-[13px] lg:text-[12px] xl:text-[13px] uppercase leading-tight tracking-wide mb-1 line-clamp-2">{step.title}</span>
                          <span className="text-white/70 text-[11px] md:text-[12px] lg:text-[11px] xl:text-[12px] leading-tight font-medium pr-1 line-clamp-2">{step.desc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glowing Dot between steps (placed absolutely on the right of the shape, hidden on last item) */}
                  {!isLast && (
                    <div className="absolute right-[-3px] md:right-[-4px] lg:right-[-6px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_8px_3px_#51d7c4] z-10 animate-pulse hidden md:block group-hover:shadow-[0_0_12px_4px_#51d7c4] transition-all"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
