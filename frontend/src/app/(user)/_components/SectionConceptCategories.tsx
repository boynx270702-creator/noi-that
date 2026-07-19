"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';

const categories = [
  { name: 'VILLA CAO CẤP', desc: 'Không gian sang trọng, đẳng cấp & tinh tế', img: '/images/main/villa1.jpg' },
  { name: 'NHÀ PHỐ', desc: 'Hiện đại & tiện nghi', img: '/images/main/pen1.jpg' },
  { name: 'PENTHOUSE', desc: 'Tinh hoa trên từng tầng cao', img: '/images/main/pen3.jpg' },
  { name: 'CHUNG CƯ', desc: 'Tối ưu công năng, chuẩn phong cách', img: '/images/main/bed1.jpg' },
  { name: 'VĂN PHÒNG', desc: 'Hiệu quả & truyền cảm hứng', img: '/images/main/office.jpg' },
  { name: 'SHOWROOM', desc: 'Trải nghiệm thương hiệu', img: '/images/main/26.jpg' },
];

export default function SectionConceptCategories() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' });

  return (
    <section className="relative w-full py-16 bg-transparent z-10 overflow-hidden">
      <div className="px-6 lg:px-24 max-w-[1920px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Title & Intro */}
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center relative">
          {/* Decorative side line */}
          <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-gradient-to-b from-[#27d6ff] to-transparent rounded-full opacity-70 -ml-6 hidden lg:block"></div>
          
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-widest uppercase mb-6 font-serif leading-[1.15] drop-shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] animate-pulse">DANH MỤC</span><br />
            <span className="text-white">CÔNG TRÌNH</span>
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[16px] mb-8 font-medium opacity-90 leading-relaxed pr-4">
            Giải pháp toàn diện cho mọi loại hình không gian
          </p>
          <Link href="#danh-muc" className="group flex items-center gap-3 text-[#27d6ff] font-bold text-[13px] tracking-widest uppercase hover:text-white transition-all w-max bg-[#27d6ff]/5 px-6 py-2.5 rounded-sm border border-[#27d6ff]/20 hover:border-[#27d6ff] hover:shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            XEM TẤT CẢ
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      
        {/* Right Column: Carousel */}
        <div className="col-span-1 lg:col-span-9 overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex-[0_0_260px] md:flex-[0_0_280px] lg:flex-[0_0_350px] h-[340px] md:h-[450px] relative rounded-[20px] p-[1.5px] bg-gradient-to-br from-[#27d6ff]/80 via-[#27d6ff]/20 to-transparent group hover:from-[#27d6ff] transition-all duration-500 shadow-[0_0_20px_rgba(39,214,255,0.1)] hover:shadow-[0_0_30px_rgba(39,214,255,0.3)] shrink-0">
                
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#020b0d]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.img})` }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-[#020b0d]/70 to-transparent opacity-95 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10 h-full pointer-events-none">
                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#f8d48d] tracking-wider uppercase mb-2 font-serif drop-shadow-md">{cat.name}</h3>
                    <p className="text-gray-300 text-[13px] md:text-[14px] mb-2 leading-relaxed max-w-[80%] font-medium">{cat.desc}</p>
                    
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-[1.5px] border-[#27d6ff]/80 flex items-center justify-center text-white bg-[#020b0d]/60 backdrop-blur-md shadow-[0_0_15px_rgba(39,214,255,0.4),inset_0_0_10px_rgba(39,214,255,0.2)] group-hover:bg-[#27d6ff]/20 group-hover:border-[#27d6ff] transition-all duration-300 pointer-events-auto cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform drop-shadow-md"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
