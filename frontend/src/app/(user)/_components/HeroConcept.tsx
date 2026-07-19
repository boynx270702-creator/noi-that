import React from 'react';
import Link from 'next/link';
import { Play, ArrowRight, Mouse } from 'lucide-react';

export default function HeroConcept() {
  return (
    <div className="relative w-full min-h-[80vh] lg:min-h-[800px] bg-transparent overflow-hidden pb-32 pt-32 lg:pt-40">
      
      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-24 relative z-10 w-full h-full flex items-center">
        
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="mb-6 flex items-center relative w-full">
              <div className="relative inline-flex items-center px-4 py-1.5 border border-[#27d6ff]/40 rounded-full bg-transparent">
                <span className="text-[#27d6ff] text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase">
                  KIẾN TẠO KHÔNG GIAN SỐNG THÔNG MINH & BỀN VỮNG
                </span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6 drop-shadow-md font-serif tracking-wide">
              KẾT NỐI ĐÚNG <br />
              <span className="text-[#27d6ff]">HỆ SINH THÁI NỘI THẤT</span> <br />
              CHO CÔNG TRÌNH <br />
              CỦA BẠN
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-[14px] md:text-[15px] max-w-[550px] mb-10 leading-[1.8] font-medium opacity-90">
              ARCVIET Living Nexus quy tụ những thương hiệu nội thất hàng đầu 
              và giải pháp công nghệ tiên tiến, mang đến trải nghiệm sống tinh tế, 
              thông minh và bền vững cho mọi không gian.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
              <Link href="#he-sinh-thai" className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] text-[#020b0d] px-10 py-4 rounded-sm transition-all duration-500 font-bold text-[14px] tracking-widest uppercase w-full sm:w-auto shadow-[0_0_30px_rgba(39,214,255,0.6)] hover:shadow-[0_0_50px_rgba(39,214,255,0.8)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  KHÁM PHÁ HỆ SINH THÁI
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
              
              <Link href="#du-an" className="group relative flex items-center justify-center gap-3 bg-[#020b0d]/60 backdrop-blur-md border border-[#27d6ff]/50 text-white px-10 py-4 rounded-sm transition-all duration-500 font-bold text-[14px] tracking-widest uppercase w-full sm:w-auto shadow-[0_0_20px_rgba(39,214,255,0.2)] hover:border-[#27d6ff] hover:shadow-[0_0_30px_rgba(39,214,255,0.4)] hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:text-[#27d6ff] transition-colors" />
                  XEM DỰ ÁN TIÊU BIỂU
                </span>
                <div className="absolute inset-0 bg-[#27d6ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
            </div>
            
            {/* Partners */}
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-gray-400 text-[11px]">Trusted by 2.000+ khách hàng & đối tác</span>
              <div className="flex flex-wrap items-center gap-4 opacity-80">
                <div className="text-white font-serif font-bold text-base uppercase tracking-wider">LACOSTE</div>
                <div className="w-1 h-1 bg-[#27d6ff] rounded-full"></div>
                <div className="text-white font-sans font-medium text-lg tracking-tighter">Poliform</div>
                <div className="w-1 h-1 bg-[#27d6ff] rounded-full"></div>
                <div className="text-white font-bold text-base tracking-widest">HÄFELE</div>
                <div className="w-1 h-1 bg-[#27d6ff] rounded-full"></div>
                <div className="text-white font-serif italic text-lg">GROHE</div>
                <div className="w-1 h-1 bg-[#27d6ff] rounded-full"></div>
                <div className="text-white font-bold text-base tracking-widest">KOHLER</div>
                <span className="text-gray-500 font-light">+</span>
              </div>
            </div>
          </div>

          {/* Right Floating Elements (4 Cards) */}
          <div className="col-span-12 lg:col-span-5 relative flex flex-col justify-center gap-4 lg:gap-8 z-10 items-center lg:items-end mt-12 lg:mt-0 lg:-mt-20">
            
            {[
              { title: "SMART LIVING", sub1: "AI & IoT", sub2: "Điều khiển thông minh", icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>, offsetClass: "lg:mr-12 xl:mr-20", anim: "animate-[floating_4s_ease-in-out_infinite]" },
              { title: "TIẾT KIỆM NĂNG LƯỢNG", sub1: "Giải pháp xanh", sub2: "Tiết kiệm đến 30%", icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>, offsetClass: "lg:mr-0 xl:mr-4", anim: "animate-[floating_5s_ease-in-out_infinite_0.5s]" },
              { title: "CÁ NHÂN HÓA", sub1: "Thiết kế riêng biệt", sub2: "Theo phong cách của bạn", icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>, offsetClass: "lg:mr-16 xl:mr-32", anim: "animate-[floating_4.5s_ease-in-out_infinite_1s]" },
              { title: "THIẾT KẾ TINH TẾ", sub1: "Thẩm mỹ & Công năng", sub2: "Hài hòa trong từng chi tiết", icon: <path d="M6 3h12l4 6-10 13L2 9Z"/>, offsetClass: "lg:mr-8 xl:mr-10", anim: "animate-[floating_5.5s_ease-in-out_infinite_1.5s]" },
            ].map((card, idx) => (
              <div 
                key={idx} 
                className={`relative flex items-center bg-[#020b0d]/70 backdrop-blur-md border border-[#27d6ff]/20 rounded-xl p-4 lg:p-5 gap-4 lg:gap-5 transform transition-transform hover:scale-105 hover:border-[#27d6ff]/50 hover:shadow-[0_0_25px_rgba(39,214,255,0.2)] cursor-default w-full max-w-[380px] ${card.offsetClass} ${card.anim}`}
              >
                {/* Line connector simulation - Only visible on LG */}
                <div className="absolute -left-16 w-16 h-[1.5px] bg-gradient-to-l from-[#27d6ff]/60 to-transparent hidden lg:block"></div>
                <div className="absolute -left-16 -ml-1.5 w-3 h-3 rounded-full border border-[#27d6ff] bg-[#020b0d] shadow-[0_0_10px_rgba(39,214,255,0.5)] hidden lg:block"></div>

                {/* Icon Container */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#27d6ff]/40 flex items-center justify-center shrink-0 bg-[#020b0d]/50 shadow-inner">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#27d6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-[22px] lg:h-[22px]">
                    {card.icon}
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-white text-[13px] lg:text-[14px] font-bold tracking-widest mb-1 drop-shadow-sm">{card.title}</span>
                  <span className="text-[#27d6ff] text-[11px] lg:text-[12px] uppercase font-medium">{card.sub1}</span>
                  <span className="text-gray-400 text-[10px] lg:text-[11px] mt-0.5">{card.sub2}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce">
        <Mouse className="w-6 h-6 text-white" />
        <span className="text-white text-[9px] font-bold tracking-widest uppercase">SCROLL</span>
      </div>
    </div>
  );
}
