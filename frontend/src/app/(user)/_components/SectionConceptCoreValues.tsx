import React from 'react';

const values = [
  {
    title: "TUYỂN CHỌN TINH HOA",
    desc: "Hệ sinh thái sản phẩm cao cấp từ những thương hiệu hàng đầu thế giới.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
  },
  {
    title: "THIẾT KẾ CÁ NHÂN HÓA",
    desc: "Giải pháp thiết kế riêng biệt phù hợp với phong cách và nhu cầu của bạn.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    )
  },
  {
    title: "CÔNG NGHỆ THÔNG MINH",
    desc: "Ứng dụng công nghệ tiên tiến nâng tầm tiện nghi và trải nghiệm sống.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    )
  },
  {
    title: "TRẢI NGHIỆM TRỌN GÓI",
    desc: "Tư vấn, thiết kế, cung cấp đến thi công và hậu mãi chuyên nghiệp.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    )
  }
];

export default function SectionConceptCoreValues() {
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
              GIÁ TRỊ VƯỢT TRỘI DÀNH CHO BẠN
            </h2>
            <div className="text-[#51d7c4]/60 text-[11px] font-light uppercase tracking-widest">
              Lợi ích cốt lõi
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
      <div className="w-full relative bg-transparent backdrop-blur-md border border-[#51d7c4]/40 rounded-sm shadow-[0_0_15px_rgba(81,215,196,0.1)] p-4 md:p-6 overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-transparent"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="relative border border-[#51d7c4]/30 bg-transparent backdrop-blur-md rounded-sm p-6 hover:border-[#51d7c4] hover:shadow-[0_0_25px_rgba(81,215,196,0.2)] transition-all group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-[#51d7c4]/30 flex items-center justify-center relative bg-[#011413]/80 shrink-0 group-hover:bg-[#002b29] transition-colors">
                    {/* Spinning dashed ring */}
                    <div className="absolute inset-0 border border-[#51d7c4]/80 border-dashed rounded-full opacity-0 group-hover:opacity-100 animate-[spin_6s_linear_infinite_reverse] transition-opacity duration-500"></div>
                    <div className="absolute inset-[3px] border border-[#51d7c4]/20 rounded-full group-hover:border-[#51d7c4]/50 transition-colors duration-500"></div>
                    <div className="relative z-10 scale-90 group-hover:scale-100 group-hover:drop-shadow-[0_0_8px_rgba(81,215,196,0.8)] transition-all duration-300">
                      {val.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-[13px] uppercase tracking-widest leading-tight drop-shadow-md">{val.title}</h3>
                </div>
                <p className="text-gray-400 text-[12px] leading-[1.6]">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
