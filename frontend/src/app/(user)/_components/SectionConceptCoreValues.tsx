import React from 'react';
import Link from 'next/link';

const values = [
  {
    num: "01",
    title: "TƯ VẤN CHUYÊN SÂU",
    desc: "Giải pháp tối ưu theo nhu cầu & ngân sách",
    img: "/images/main/villa1.jpg",
    type: "tall"
  },
  {
    num: "02",
    title: "SẢN PHẨM CHÍNH HÃNG",
    desc: "Đa dạng thương hiệu quốc tế uy tín",
    img: "/images/main/pen1.jpg",
    type: "wide"
  },
  {
    num: "03",
    title: "THIẾT KẾ TINH TẾ",
    desc: "Thẩm mỹ cao - Công năng hoàn hảo",
    img: "/images/main/bed1.jpg",
    type: "wide"
  },
  {
    num: "04",
    title: "THI CÔNG CHUYÊN NGHIỆP",
    desc: "Đúng tiến độ - Đúng chất lượng - Đúng cam kết",
    img: "/images/main/office.jpg",
    type: "tall"
  }
];

export default function SectionConceptCoreValues() {
  return (
    <section className="relative z-10 w-full py-16 bg-transparent">
      <div className="px-6 lg:px-24 max-w-[1920px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Title */}
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center relative">
          {/* Decorative side line */}
          <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-gradient-to-b from-[#27d6ff] to-transparent rounded-full opacity-70 -ml-6 hidden lg:block"></div>
          
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-widest uppercase mb-6 font-serif leading-[1.15] drop-shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] animate-pulse">GIÁ TRỊ</span><br />
            <span className="text-white">VƯỢT TRỘI</span>
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[16px] mb-8 font-medium opacity-90 leading-relaxed pr-4">
            Lợi ích cốt lõi khi đồng hành cùng ARCViet
          </p>
          <Link href="#gia-tri" className="group flex items-center gap-3 text-[#27d6ff] font-bold text-[13px] tracking-widest uppercase hover:text-white transition-all w-max bg-[#27d6ff]/5 px-6 py-2.5 rounded-sm border border-[#27d6ff]/20 hover:border-[#27d6ff] hover:shadow-[0_0_15px_rgba(39,214,255,0.3)]">
            KHÁM PHÁ THÊM
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="col-span-1 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr lg:auto-rows-[192px] h-auto">
          
          {/* Card 01 - Tall */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 min-h-[250px] lg:min-h-0 relative rounded-2xl overflow-hidden group border border-[#27d6ff]/20 hover:border-[#27d6ff]/60 transition-all shadow-lg p-6 flex flex-col">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${values[0].img})` }} />
            <div className="absolute inset-0 bg-[#020b0d]/70 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#27d6ff] font-bold text-[20px] mb-2 font-serif">{values[0].num}</span>
              <h3 className="text-white font-bold text-[16px] tracking-wider uppercase mb-2 font-serif leading-tight">{values[0].title}</h3>
              <p className="text-gray-300 text-[12px] leading-relaxed">{values[0].desc}</p>
              
              <div className="mt-auto w-10 h-10 rounded-md border border-[#27d6ff]/40 flex items-center justify-center bg-[#020b0d]/60 backdrop-blur-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27d6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
            </div>
          </div>

          {/* Card 02 - Wide */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 min-h-[200px] lg:min-h-0 relative rounded-2xl overflow-hidden group border border-[#27d6ff]/20 hover:border-[#27d6ff]/60 transition-all shadow-lg p-6 flex flex-col justify-center">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${values[1].img})` }} />
            <div className="absolute inset-0 bg-[#020b0d]/70 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#27d6ff] font-bold text-[20px] mb-2 font-serif block">{values[1].num}</span>
                <h3 className="text-white font-bold text-[16px] tracking-wider uppercase mb-2 font-serif leading-tight">{values[1].title}</h3>
                <p className="text-gray-300 text-[12px] leading-relaxed">{values[1].desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#27d6ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#27d6ff]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
          
          {/* Card 03 - Wide */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 min-h-[200px] lg:min-h-0 relative rounded-2xl overflow-hidden group border border-[#27d6ff]/20 hover:border-[#27d6ff]/60 transition-all shadow-lg p-6 flex flex-col justify-center">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${values[2].img})` }} />
            <div className="absolute inset-0 bg-[#020b0d]/70 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#27d6ff] font-bold text-[20px] mb-2 font-serif block">{values[2].num}</span>
                <h3 className="text-white font-bold text-[16px] tracking-wider uppercase mb-2 font-serif leading-tight">{values[2].title}</h3>
                <p className="text-gray-300 text-[12px] leading-relaxed">{values[2].desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#27d6ff] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#27d6ff]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Card 04 - Tall */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 min-h-[250px] lg:min-h-0 relative rounded-2xl overflow-hidden group border border-[#27d6ff]/20 hover:border-[#27d6ff]/60 transition-all shadow-lg p-6 flex flex-col">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${values[3].img})` }} />
            <div className="absolute inset-0 bg-[#020b0d]/70 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#27d6ff] font-bold text-[20px] mb-2 font-serif">{values[3].num}</span>
              <h3 className="text-white font-bold text-[16px] tracking-wider uppercase mb-2 font-serif leading-tight">{values[3].title}</h3>
              <p className="text-gray-300 text-[12px] leading-relaxed">{values[3].desc}</p>
              
              <div className="mt-auto w-10 h-10 rounded-md border border-[#27d6ff]/40 flex items-center justify-center bg-[#020b0d]/60 backdrop-blur-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27d6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
