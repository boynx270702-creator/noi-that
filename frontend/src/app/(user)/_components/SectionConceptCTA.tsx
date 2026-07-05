import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: 'Tư vấn chuyên gia miễn phí',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    label: 'Giải pháp cá nhân hóa',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    label: 'Báo giá minh bạch',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Bảo hành dài hạn',
  },
];

export default function SectionConceptCTA() {
  return (
    <section className="relative z-10 px-4 md:px-8 max-w-[1440px] mx-auto pb-24 pt-8">
      {/* Sci-Fi CTA Wrapper */}
      <div className="relative p-[1.5px] rounded-sm overflow-hidden">
        {/* Rotating conic gradient border - slow */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#51d7c4_40%,transparent_60%,#51d7c4_100%)] animate-[spin_14s_linear_infinite]"></div>

        {/* Inner Glass Box */}
        <div className="relative bg-[#010d0c]/80 backdrop-blur-xl px-8 py-10 md:px-14 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[inset_0_0_60px_rgba(81,215,196,0.04)]">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#51d7c4]"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#51d7c4]"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#51d7c4]"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#51d7c4]"></div>

          {/* Scanning line animation */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4]/30 to-transparent animate-[shimmer_5s_ease-in-out_infinite]"></div>

          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#51d7c4] animate-pulse shadow-[0_0_6px_#51d7c4]"></div>
              <span className="text-[#51d7c4] text-[11px] tracking-[0.25em] uppercase font-medium">Hành trình kiến tạo</span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 uppercase tracking-wider leading-tight">
              BẮT ĐẦU HÀNH TRÌNH KIẾN TẠO
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#008f82_0%,#51d7c4_50%,#008f82_100%)] bg-[length:200%_auto] animate-[gradientFlow_4s_linear_infinite]">
                KHÔNG GIAN SỐNG LÝ TƯỞNG CỦA BẠN
              </span>
            </h2>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 group">
                  {/* Icon container with hover spin border */}
                  <div className="relative w-9 h-9 shrink-0">
                    <div className="absolute inset-0 border border-[#51d7c4]/20 group-hover:border-[#51d7c4]/60 transition-colors rounded-sm bg-[#021817]/60"></div>
                    <div className="absolute inset-0 border border-[#51d7c4] border-dashed opacity-0 group-hover:opacity-100 animate-[spin_8s_linear_infinite] rounded-sm transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[#51d7c4] group-hover:scale-110 transition-transform">
                      {f.icon}
                    </div>
                  </div>
                  <span className="text-[11px] md:text-[12px] text-white/70 group-hover:text-[#51d7c4] tracking-wide uppercase font-medium transition-colors leading-tight">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0 relative z-10 w-full lg:w-auto flex flex-col items-center gap-4">
            {/* Decorative radar ring */}
            <div className="relative w-32 h-32 hidden lg:flex items-center justify-center mb-2">
              <div className="absolute inset-0 rounded-full border border-[#51d7c4]/10 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-[#51d7c4]/15 animate-[pulse_3s_ease-in-out_infinite_0.5s]"></div>
              <div className="absolute inset-8 rounded-full border border-[#51d7c4]/20 animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
              <div className="w-10 h-10 rounded-full bg-[#021817] border border-[#51d7c4]/50 flex items-center justify-center shadow-[0_0_20px_rgba(81,215,196,0.3)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#51d7c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative p-[1.5px] rounded-sm overflow-hidden cursor-pointer inline-flex w-full lg:w-auto">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#51d7c4_30%,transparent_100%)] animate-[spin_3s_linear_infinite]"></div>
              <Link href="/tu-van" className="relative w-full flex items-center justify-center gap-3 bg-[#012624] hover:bg-[#021d1b] text-white pl-6 pr-2 py-2 transition-all duration-300 shadow-[0_0_20px_rgba(81,215,196,0.15)] rounded-[1px] h-[52px] group">
                <span className="text-[12px] md:text-[13px] font-bold tracking-widest uppercase drop-shadow-[0_0_6px_rgba(81,215,196,0.4)]">ĐẶT LỊCH TƯ VẤN NGAY</span>
                <div className="w-9 h-9 rounded-sm bg-[#00100f] border border-[#51d7c4]/50 flex items-center justify-center text-[#51d7c4] group-hover:bg-[#51d7c4] group-hover:text-[#00100f] transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            </div>

            <p className="text-[10px] text-white/30 tracking-widest uppercase text-center">Phản hồi trong vòng 24 giờ</p>
          </div>

        </div>
      </div>
    </section>
  );
}
