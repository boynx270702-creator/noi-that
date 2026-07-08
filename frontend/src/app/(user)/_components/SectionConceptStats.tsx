import React from 'react';

const stats = [
  {
    value: "10+",
    label: "NĂM KINH NGHIỆM",
    desc: "Kiến tạo không gian sống",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/><path d="M2 9h20"/></svg>
    )
  },
  {
    value: "2000+",
    label: "DỰ ÁN HOÀN THÀNH",
    desc: "Nhà phố, Villa, Penthouse...",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
    )
  },
  {
    value: "50+",
    label: "THƯƠNG HIỆU ĐỐI TÁC",
    desc: "Hàng đầu thế giới",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a2.12 2.12 0 1 0 3-3L15 9l-1 1"/><path d="m2 12 7-7a1.5 1.5 0 0 1 2.12 0L14 8"/><path d="M11 11 8.88 8.88a1.25 1.25 0 0 0-1.76 0l-4.24 4.24a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.25 1.25 0 0 0 1.76 0l4.24-4.24"/><path d="m5 15 2 2a1 1 0 1 0 3-3"/></svg>
    )
  },
  {
    value: "98%",
    label: "KHÁCH HÀNG HÀI LÒNG",
    desc: "Về chất lượng & dịch vụ",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/><path d="M12 5.5l1 1.5 1.5 .5 -1 1 .5 1.5 -1.5 -1 -1.5 1 .5 -1.5 -1 -1 1.5 -.5z"/></svg>
    )
  },
  {
    value: "24/7",
    label: "HỖ TRỢ CHUYÊN GIA",
    desc: "Đồng hành mọi lúc",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
    )
  }
];

export default function SectionConceptStats() {
  return (
    <section className="relative z-10 w-full bg-transparent py-8 md:py-12">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto">
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

          <div className="py-8 px-4 md:px-10 lg:px-12 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-3 md:gap-8 lg:gap-0 lg:divide-x lg:divide-[#51d7c4]/30">
              {stats.map((stat, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-4 xl:gap-5 group hover:scale-105 transition-transform duration-300 lg:px-4 xl:px-6 first:lg:pl-0 last:lg:pr-0 justify-start lg:justify-center text-center lg:text-left ${idx === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}>
                  {/* Icon Wrapper */}
                  <div className="relative w-14 h-14 md:w-[72px] md:h-[72px] flex items-center justify-center shrink-0">
                    {/* Dashed outer ring */}
                    <div className="absolute inset-0 border border-dashed border-[#51d7c4]/40 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-[#51d7c4]/80 transition-colors"></div>
                    {/* Glowing dot on the ring */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#51d7c4] rounded-full shadow-[0_0_8px_#51d7c4]"></div>
                    {/* Small dot on the bottom-left of the ring */}
                    <div className="absolute bottom-1 left-2 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#51d7c4] rounded-full opacity-60"></div>
                    
                    <div className="text-[#f8d48d] drop-shadow-[0_0_10px_rgba(248,212,141,0.5)] scale-100 md:scale-125 group-hover:scale-125 md:group-hover:scale-150 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col items-center lg:items-start w-full">
                    <span className="text-[#f8d48d] font-bold text-[24px] md:text-[34px] leading-none mb-1.5 md:mb-2 drop-shadow-sm">
                      {stat.value}
                    </span>
                    <span className="text-white text-[11px] md:text-[14px] font-bold tracking-widest uppercase mb-1 leading-snug">
                      {stat.label}
                    </span>
                    <span className="text-[#51d7c4]/80 lg:text-gray-400 text-[10px] md:text-[13px] leading-tight font-medium px-2 lg:px-0">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
