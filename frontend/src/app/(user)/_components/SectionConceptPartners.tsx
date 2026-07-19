'use client';
import React, { useState, useEffect } from 'react';

export default function SectionConceptPartners() {
  const [partners, setPartners] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAvatarUrl = (avatar: any) => {
    if (Array.isArray(avatar) && avatar.length > 0) {
      return typeof avatar[0] === 'string' ? avatar[0] : avatar[0].url;
    }
    if (typeof avatar === 'string') {
      try {
        const parsed = JSON.parse(avatar);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return typeof parsed[0] === 'string' ? parsed[0] : parsed[0].url;
        }
      } catch (e) { return avatar; }
    }
    return avatar?.url || avatar || null;
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1'}/units`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered = data.filter((u: any) => 
            u.projectType && (u.projectType.toLowerCase().includes('thi công') || u.projectType.toLowerCase().includes('thiết kế'))
          );
          setPartners(filtered.slice(0, 30));
        }
      } catch (error) {
        console.warn('Failed to fetch partners (backend might not be ready):', error instanceof Error ? error.message : error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPartners();
  }, []);

  return (
    <section className="relative z-10 w-full py-10 bg-transparent overflow-hidden">
      <div className="px-6 lg:px-24 max-w-[1920px] mx-auto relative z-10">
        
        <div className="relative w-full bg-[#020b0d]/70 backdrop-blur-xl border border-[#27d6ff]/20 rounded-xl shadow-[0_0_30px_rgba(39,214,255,0.05)] mt-6">
          
          {/* Floating Title intersecting the top border */}
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-[#020b0d] px-4">
            <h2 className="text-white text-[14px] md:text-[15px] font-bold tracking-widest uppercase">
              30+ ĐỐI TÁC <span className="text-[#27d6ff]">TIN CẬY</span>
            </h2>
          </div>

          <div className="px-4 py-6 md:py-8 flex items-center justify-between">
            {/* Left Arrow */}
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/50 hover:text-white hover:border-white transition-all cursor-pointer hidden md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </div>

            {/* Marquee Content */}
            <div className="flex-grow overflow-hidden relative w-full group mx-6">
              {isLoading ? (
                <div className="flex items-center justify-center h-[50px] text-gray-500">
                  Đang tải danh sách đối tác...
                </div>
              ) : partners.length > 0 ? (
                <div className="flex items-center gap-12 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] pr-12">
                  {[...partners, ...partners].map((partner, idx) => (
                    <div 
                      key={`${partner.id}-${idx}`} 
                      onClick={() => window.location.href = `/don-vi-thiet-ke/${partner.id}`}
                      className="h-[40px] md:h-[50px] flex items-center justify-center shrink-0 cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    >
                      {getAvatarUrl(partner.avatar) ? (
                        <>
                          <img 
                            src={getAvatarUrl(partner.avatar)} 
                            alt={partner.name} 
                            className="max-w-[140px] max-h-full object-contain drop-shadow-md"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                            }}
                          />
                          <span className="fallback-text hidden font-sans font-bold text-white text-[16px] text-center whitespace-nowrap">
                            {partner.name}
                          </span>
                        </>
                      ) : (
                        <span className="font-sans font-bold text-white text-[16px] text-center whitespace-nowrap">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-[50px] text-gray-500">
                  Chưa có dữ liệu đối tác.
                </div>
              )}
            </div>

            {/* Right Arrow */}
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/50 hover:text-white hover:border-white transition-all cursor-pointer hidden md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
          
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
