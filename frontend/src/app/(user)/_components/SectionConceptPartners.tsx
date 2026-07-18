'use client';
import React, { useState, useEffect } from 'react';
import SectionStarryMotif from './SectionStarryMotif';
import Link from 'next/link';

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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/units`);
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered = data.filter((u: any) => 
            u.projectType && (u.projectType.toLowerCase().includes('thi công') || u.projectType.toLowerCase().includes('thiết kế'))
          );
          // Lấy tối đa 30 đơn vị cho phần marquee
          setPartners(filtered.slice(0, 30));
        }
      } catch (error) {
        console.error('Failed to fetch partners:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPartners();
  }, []);

  return (
    <section className="relative z-10 w-full py-8 md:py-12 bg-transparent">
      <div className="px-4 md:px-8 max-w-[1440px] mx-auto relative z-10">
        {/* Title */}
        <div className="mb-8 md:mb-10 flex flex-col items-center justify-center relative w-full gap-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C7A25C]/20 to-transparent -z-10 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#C7A25C] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate] hidden md:block"></div>
          
          <div className="relative inline-flex items-center justify-center p-[1px] rounded-[4px] overflow-hidden group">
            <div className="relative px-8 py-2.5 bg-white/95 dark:bg-[#131313]/95 border border-[#ECE7DE] dark:border-white/10 flex items-center justify-center backdrop-blur-md rounded-[4px]">
              <h2 className="text-[#1F1F1F] dark:text-white text-[16px] md:text-[20px] font-bold tracking-[0.2em] uppercase">
                30+ ĐỐI TÁC <span className="text-[#C7A25C]">TIN CẬY</span>
              </h2>
            </div>
          </div>
        </div>

        <div 
          className="relative w-full bg-white/50 dark:bg-[#131313]/50 backdrop-blur-md border border-[#ECE7DE] dark:border-white/10 overflow-hidden rounded-[8px]"
        >
          {/* Top and Bottom Borders */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A25C]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A25C]/20 to-transparent"></div>

          <div className="py-10 md:py-12 w-full relative">
            {isLoading ? (
              <div className="flex items-center justify-center h-[60px] text-gray-500">
                Đang tải danh sách đối tác...
              </div>
            ) : partners.length > 0 ? (
              <div className="flex overflow-hidden relative w-full group">
                <div className="flex items-center gap-10 w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] pr-10">
                  {/* Duplicate the array twice for smooth infinite scrolling */}
                  {[...partners, ...partners].map((partner, idx) => (
                    <div 
                      key={`${partner.id}-${idx}`} 
                      onClick={() => window.location.href = `/don-vi-thiet-ke/${partner.id}`}
                      className="w-[120px] md:w-[150px] lg:w-[180px] h-[70px] md:h-[90px] flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-500 bg-white dark:bg-white/5 rounded-[8px] border border-gray-100 dark:border-white/10 p-3 md:p-4 hover:border-[#C7A25C]/50 hover:bg-[#C7A25C]/5 dark:hover:bg-[#C7A25C]/10 group/card relative z-30"
                    >
                      {getAvatarUrl(partner.avatar) ? (
                        <>
                          <img 
                            src={getAvatarUrl(partner.avatar)} 
                            alt={partner.name} 
                            className="max-w-full max-h-full object-contain filter transition-opacity duration-300 group-hover/card:opacity-80"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                            }}
                          />
                          <span className="fallback-text hidden font-heading font-bold text-gray-800 dark:text-white text-[14px] md:text-[16px] text-center line-clamp-2">
                            {partner.name}
                          </span>
                        </>
                      ) : (
                        <span className="font-heading font-bold text-gray-800 dark:text-white text-[14px] md:text-[16px] text-center line-clamp-2">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[60px] text-gray-500">
                Chưa có dữ liệu đối tác.
              </div>
            )}
          </div>
          
          {/* Integrated Button in bottom right corner */}
          <Link href="/don-vi-thiet-ke" className="absolute bottom-0 right-0 z-20 flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#C7A25C] text-white cursor-pointer group hover:bg-[#b08d4b] transition-all duration-300 rounded-tl-[8px]">
            <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] transition-colors">
              Khám phá tất cả
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
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
