import React from 'react';
import Link from 'next/link';

const steps = [
  { 
    num: "01", title: "TIẾP NHẬN", desc: "THÔNG TIN",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  },
  { 
    num: "02", title: "TƯ VẤN &", desc: "KHẢO SÁT",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  },
  { 
    num: "03", title: "THIẾT KẾ", desc: "CONCEPT",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
  },
  { 
    num: "04", title: "BÁO GIÁ &", desc: "KÝ KẾT",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  },
  { 
    num: "05", title: "SẢN XUẤT &", desc: "CUNG ỨNG",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
  },
  { 
    num: "06", title: "THI CÔNG &", desc: "LẮP ĐẶT",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  },
  { 
    num: "07", title: "BÀN GIAO &", desc: "BẢO HÀNH",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  }
];

export default function SectionConcept7Steps() {
  return (
    <section className="relative z-10 w-full py-16 bg-transparent">
      <div className="px-6 lg:px-24 max-w-[1920px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Title */}
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center text-left relative">
          {/* Decorative side line */}
          <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-gradient-to-b from-[#27d6ff] to-transparent rounded-full opacity-70 -ml-6 hidden lg:block"></div>

          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-widest uppercase mb-6 font-serif leading-[1.15] drop-shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] animate-pulse">QUY TRÌNH</span><br />
            <span className="text-white">7 BƯỚC RÕ RÀNG</span>
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[16px] mb-8 font-medium opacity-90 leading-relaxed pr-4">
            Đồng hành cùng bạn từ ý tưởng đến hiện thực
          </p>
          <Link href="#quy-trinh" className="group flex items-center gap-3 text-[#27d6ff] font-bold text-[13px] tracking-widest uppercase hover:text-white transition-all w-max bg-[#27d6ff]/5 px-6 py-2.5 rounded-sm border border-[#27d6ff]/20 hover:border-[#27d6ff] hover:shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            TÌM HIỂU CHI TIẾT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
        
        {/* Right Column: Timeline Container */}
        <div className="col-span-1 lg:col-span-9 relative lg:pl-10">
          
          {/* Horizontal Dashed Line */}
          <div className="absolute top-[24px] left-10 right-10 h-[1px] border-t border-dashed border-[#27d6ff]/40 hidden md:block"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-2 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-default">
                
                {/* Node with Icon */}
                <div className="w-12 h-12 rounded-full bg-[#020b0d] border border-[#27d6ff]/40 flex flex-col items-center justify-center relative mb-4 group-hover:border-[#27d6ff] group-hover:shadow-[0_0_20px_rgba(39,214,255,0.3)] transition-all duration-300 z-10 text-white group-hover:text-[#27d6ff]">
                  {step.icon}
                  {/* Subtle inner glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-[#27d6ff]/0 group-hover:bg-[#27d6ff]/10 transition-colors"></div>
                </div>
                
                {/* Text Content */}
                <div className="text-center w-full max-w-[120px]">
                  <span className="text-[#27d6ff] font-bold text-[14px] font-serif leading-none block mb-2">{step.num}</span>
                  <h3 className="text-white font-bold text-[11px] md:text-[12px] tracking-wider uppercase leading-tight">{step.title}</h3>
                  <h3 className="text-white font-bold text-[11px] md:text-[12px] tracking-wider uppercase leading-tight">{step.desc}</h3>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
