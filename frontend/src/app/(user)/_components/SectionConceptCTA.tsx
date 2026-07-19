import React from 'react';
import Link from 'next/link';

export default function SectionConceptCTA() {
  return (
    <section className="relative z-10 w-full py-24">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/cta-image.png')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-[#020b0d]/70 to-[#020b0d]/40"></div>
      
      <div className="px-6 lg:px-24 max-w-[1920px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27d6ff]/30 bg-[#020b0d]/60 backdrop-blur-md">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27d6ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27d6ff]"></span>
          </div>
          <span className="text-[#27d6ff] text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
            Tư vấn chuyên gia 24/7
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white leading-tight mb-6 font-serif uppercase drop-shadow-lg">
          BẠN ĐÃ SẴN SÀNG KIẾN TẠO <br />
          <span className="text-[#27d6ff]">KHÔNG GIAN SỐNG?</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-[14px] md:text-[16px] max-w-[600px] mb-10 leading-relaxed font-light">
          Kết nối với chúng tôi ngay hôm nay để nhận giải pháp thiết kế chuyên biệt, báo giá minh bạch và trải nghiệm dịch vụ đẳng cấp nhất.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
          <Link 
            href="/tu-van" 
            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] text-[#020b0d] px-10 py-4 uppercase tracking-widest font-bold text-[13px] md:text-[14px] transition-all duration-500 rounded-sm shadow-[0_0_30px_rgba(39,214,255,0.5)] hover:shadow-[0_0_50px_rgba(39,214,255,0.7)] hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              NHẬN TƯ VẤN MIỄN PHÍ
              <svg className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
          
          <a 
            href="tel:0965743949" 
            className="group relative flex items-center justify-center gap-3 bg-[#020b0d]/60 backdrop-blur-md border border-[#27d6ff]/50 text-white px-10 py-4 uppercase tracking-widest font-bold text-[13px] md:text-[14px] transition-all duration-500 rounded-sm shadow-[0_0_20px_rgba(39,214,255,0.2)] hover:border-[#27d6ff] hover:shadow-[0_0_30px_rgba(39,214,255,0.4)] hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="group-hover:text-[#27d6ff] transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>096 574 39 49</span>
            </span>
            <div className="absolute inset-0 bg-[#27d6ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
        </div>

      </div>
    </section>
  );
}
