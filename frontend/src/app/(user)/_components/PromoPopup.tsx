'use client';
import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import Link from 'next/link';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('promo_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('promo_popup_seen', 'true');
      }, 1500); // delay 1.5s
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      {/* Sci-Fi Container */}
      <div className="relative w-full max-w-md p-[1.5px] rounded-lg overflow-hidden animate-reveal group shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
        {/* Rotating border effect */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(39,214,255,1)_30%,transparent_60%,transparent_100%)] animate-[spin_4s_linear_infinite]"></div>
        
        {/* Inner Box */}
        <div className="relative bg-gradient-to-br from-[#020b0d] to-[#011417] rounded-lg overflow-hidden px-6 py-8 md:p-8 text-center border border-[#27d6ff]/20">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-10 text-gray-400 hover:text-[#27d6ff] transition-colors bg-[#020b0d]/50 p-1.5 rounded-sm border border-transparent hover:border-[#27d6ff]/30"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          {/* Icon Area */}
          <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            {/* Spinning dashed ring */}
            <div className="absolute inset-0 border-2 border-[#27d6ff] border-dashed rounded-full opacity-40 animate-[spin_6s_linear_infinite]"></div>
            <div className="absolute inset-1 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(39,214,255,0.2)_100%)] animate-[spin_2s_linear_infinite]"></div>
            <div className="relative z-10 w-11 h-11 bg-[#020b0d]/90 border border-[#27d6ff]/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(39,214,255,0.3)]">
              <Gift className="w-5 h-5 text-[#27d6ff]" />
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[0.1em] drop-shadow-[0_0_8px_rgba(39,214,255,0.5)]">ƯU ĐÃI ĐẶC BIỆT</h3>
          
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#27d6ff] to-transparent mx-auto mb-6"></div>
          
          <p className="text-gray-300 text-[14px] md:text-[15px] mb-8 leading-[1.8] px-2 font-medium">
            Nhận ngay ưu đãi giảm <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#27d6ff,#0a8ba8)] font-bold text-lg md:text-xl drop-shadow-[0_0_5px_rgba(39,214,255,0.5)] px-1">5%</span> khi kết nối thiết kế và thi công với các đối tác thông qua hệ sinh thái <span className="font-bold text-white tracking-wide">ARCVIET</span>.
          </p>
          
          {/* Button */}
          <Link
            href="/tu-van"
            onClick={() => setIsOpen(false)}
            className="relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#020b0d] to-[#041c21] hover:from-[#082d33] hover:to-[#020b0d] text-white py-3.5 transition-all duration-300 shadow-[0_0_15px_rgba(39,214,255,0.15)] rounded-sm group overflow-hidden border border-[#27d6ff]/30"
          >
            {/* Button Hover Glow */}
            <div className="absolute inset-0 bg-[#27d6ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative text-[13px] md:text-sm font-bold uppercase tracking-widest z-10">Nhận ưu đãi ngay</span>
            <div className="relative z-10 w-7 h-7 rounded-sm bg-[#020b0d] border border-[#27d6ff]/50 flex items-center justify-center text-[#27d6ff] group-hover:bg-[#27d6ff] group-hover:text-[#020b0d] transition-all">
              <svg className="transform group-hover:translate-x-0.5 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#27d6ff]/50 rounded-tl-lg pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#27d6ff]/50 rounded-tr-lg pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#27d6ff]/50 rounded-bl-lg pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#27d6ff]/50 rounded-br-lg pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
