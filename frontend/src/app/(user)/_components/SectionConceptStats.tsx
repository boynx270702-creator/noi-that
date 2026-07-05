import React from 'react';

const stats = [
  {
    value: "10+",
    label: "NĂM KINH NGHIỆM",
    desc: "Kiến tạo không gian sống",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
  },
  {
    value: "2000+",
    label: "DỰ ÁN HOÀN THÀNH",
    desc: "Nhà phố, Villa, Penthouse...",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
    )
  },
  {
    value: "50+",
    label: "THƯƠNG HIỆU ĐỐI TÁC",
    desc: "Hàng đầu thế giới",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><path d="M14.5 10c0-1.5-1.5-2.5-3-2.5h-1c-1.5 0-2 1-2 2s.5 2 2 2h3c1.5 0 2 1 2 2s-1.5 2.5-3 2.5h-1c-1.5 0-3-1-3-2.5"/><path d="M12 6v1M12 17v1"/></svg>
    )
  },
  {
    value: "98%",
    label: "KHÁCH HÀNG HÀI LÒNG",
    desc: "Về chất lượng & dịch vụ",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    )
  },
  {
    value: "24/7",
    label: "HỖ TRỢ CHUYÊN GIA",
    desc: "Đồng hành mọi lúc",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
    )
  }
];

export default function SectionConceptStats() {
  return (
    <section className="relative z-10 px-4 md:px-8 max-w-[1440px] mx-auto pb-12 pt-16">
      {/* Sci-Fi Centered Label */}
      <div className="mb-12 flex flex-col items-center justify-center relative w-full">
        {/* Animated line behind */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/20 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate]"></div>
        
        <div className="relative inline-flex items-center justify-center p-[1px] rounded-sm overflow-hidden group">
          {/* Rotating border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
          
          <div className="relative px-8 py-2.5 bg-[#021817]/50 backdrop-blur-md flex items-center justify-center">
            <h2 className="text-white drop-shadow-[0_0_8px_rgba(81,215,196,0.8)] text-[18px] md:text-[22px] font-bold tracking-[0.2em] uppercase animate-[pulse_3s_ease-in-out_infinite]">
              THỐNG KÊ ẤN TƯỢNG
            </h2>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#51d7c4]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#51d7c4]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#51d7c4]"></div>
          </div>
        </div>
      </div>

      {/* Outer wrapper with exact styling from image */}
      <div className="relative bg-transparent backdrop-blur-xl border border-[#51d7c4]/40 rounded-sm shadow-[0_0_20px_rgba(81,215,196,0.15)] overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent opacity-50"></div>
        
        <div className="flex flex-col lg:flex-row lg:divide-x divide-[#51d7c4]/20 p-6 md:p-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center lg:items-start px-4 lg:px-8 py-4 lg:py-0 group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-full border border-[#51d7c4]/30 flex items-center justify-center relative bg-[#011413]/80 shrink-0 group-hover:bg-[#002b29] transition-colors">
                  {/* Spinning dashed ring */}
                  <div className="absolute inset-0 border border-[#51d7c4]/80 border-dashed rounded-full opacity-0 group-hover:opacity-100 animate-[spin_6s_linear_infinite] transition-opacity duration-500"></div>
                  <div className="absolute inset-[3px] border border-[#51d7c4]/20 rounded-full group-hover:border-[#51d7c4]/50 transition-colors duration-500"></div>
                  <div className="relative z-10 scale-90 group-hover:scale-100 group-hover:drop-shadow-[0_0_8px_rgba(81,215,196,0.8)] transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <span className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-none">{stat.value}</span>
              </div>
              <h3 className="text-[12px] md:text-[13px] font-bold text-white tracking-widest uppercase mb-1.5 pl-0 lg:pl-[64px] leading-tight">{stat.label}</h3>
              <p className="text-[11px] md:text-[12px] text-gray-400 font-light pl-0 lg:pl-[64px] leading-tight">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
