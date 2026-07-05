import React from 'react';

const steps = [
  { num: "01", title: "TIẾP NHẬN THÔNG TIN", desc: "Lắng nghe nhu cầu và định hình ý tưởng" },
  { num: "02", title: "TƯ VẤN & KHẢO SÁT", desc: "Phân tích hiện trạng & tư vấn giải pháp tối ưu" },
  { num: "03", title: "THIẾT KẾ CONCEPT", desc: "Lên ý tưởng thiết kế & phối cảnh 3D" },
  { num: "04", title: "BÁO GIÁ & KÝ KẾT", desc: "Đề xuất giải pháp & Báo giá chi tiết" },
  { num: "05", title: "SẢN XUẤT & CUNG ỨNG", desc: "Sản xuất, kiểm soát chất lượng nghiêm ngặt" },
  { num: "06", title: "THI CÔNG & LẮP ĐẶT", desc: "Thi công chuyên nghiệp & đúng tiến độ" },
  { num: "07", title: "BÀN GIAO & BẢO HÀNH", desc: "Bàn giao & đồng hành hậu mãi dài hạn" }
];

export default function SectionConcept7Steps() {
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
              QUY TRÌNH 7 BƯỚC RÕ RÀNG
            </h2>
            <div className="text-[#51d7c4]/60 text-[11px] font-light uppercase tracking-widest">
              Đồng hành toàn diện
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
      <div className="w-full relative bg-transparent backdrop-blur-md border border-[#51d7c4]/40 rounded-sm shadow-[0_0_15px_rgba(81,215,196,0.1)] overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-transparent"></div>

        <div className="overflow-x-auto pb-6 pt-6 snap-x flex -space-x-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#51d7c4]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#51d7c4]/60 transition-colors">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="min-w-[200px] max-w-[200px] md:min-w-[240px] md:max-w-[240px] lg:min-w-[160px] lg:max-w-none lg:flex-1 h-[160px] md:h-[180px] bg-transparent backdrop-blur-md border border-[#51d7c4]/30 p-4 lg:p-5 snap-start relative group hover:bg-[#032a28]/40 hover:border-[#51d7c4]/80 transition-all flex flex-col justify-center"
              style={{
                clipPath: idx === 0 
                  ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                  : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
                paddingLeft: idx === 0 ? '20px' : '36px'
              }}
            >
              <div className="absolute top-2 right-6 text-4xl md:text-5xl font-black text-white/5 group-hover:text-[#51d7c4]/10 transition-colors select-none z-0">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 border border-[#51d7c4]/40 flex items-center justify-center text-[#51d7c4] mb-3 bg-[#021d1b]/50 relative group-hover:bg-[#51d7c4]/10 transition-colors">
                  <div className="absolute inset-0 border border-[#51d7c4] border-dashed opacity-0 group-hover:opacity-100 animate-[spin_8s_linear_infinite] transition-opacity"></div>
                  <div className="relative z-10 group-hover:scale-110 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-[12px] md:text-[14px] mb-1.5 leading-tight tracking-wider uppercase">{step.num} <br/> {step.title}</h3>
                <p className="text-gray-400 text-[10px] md:text-[11px] leading-relaxed pr-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
