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
    <section className="relative z-10 w-full pb-10 pt-4">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-24 relative z-10 -mt-16 sm:-mt-24">
        
        {/* Main Glassmorphic Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#020b0d]/70 backdrop-blur-xl border border-[#27d6ff]/20 rounded-2xl p-8 lg:p-12 w-full mx-auto shadow-[0_0_30px_rgba(39,214,255,0.05)]">
          {stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="col-span-1 md:col-span-6 lg:col-span-3 flex flex-row items-center justify-start lg:justify-center gap-4 px-4 group hover:-translate-y-1 transition-transform duration-300">
              
              {/* Icon Wrapper (Circle with gold border) */}
              <div className="w-12 h-12 rounded-full border border-[#f8d48d]/60 flex items-center justify-center shrink-0 text-[#f8d48d] drop-shadow-[0_0_8px_rgba(248,212,141,0.5)]">
                {stat.icon}
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col items-start w-full">
                <span className="text-[#f8d48d] font-bold text-[22px] md:text-[24px] leading-none mb-1 drop-shadow-sm font-serif">
                  {stat.value}
                </span>
                <span className="text-white text-[11px] font-bold tracking-widest uppercase mb-0.5 leading-snug">
                  {stat.label}
                </span>
                <span className="text-gray-400 text-[10px] leading-tight font-medium">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
