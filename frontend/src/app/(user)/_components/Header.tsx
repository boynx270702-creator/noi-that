"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/he-sinh-thai') return pathname?.startsWith('/he-sinh-thai');
    if (path === '/du-an') return pathname?.startsWith('/du-an');
    if (path === '/kien-thuc') return pathname?.startsWith('/kien-thuc') || pathname?.startsWith('/cam-nang');
    return false;
  };

  return (
    <>
      {/* --- MAIN HEADER --- */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#020b0d]/80 backdrop-blur-md border-b border-[#27d6ff]/10 transition-all duration-500">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-24 w-full flex items-center justify-between h-[80px]">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo2.png"
                alt="logo"
                className="h-[70px] w-auto transition-transform group-hover:scale-105 -ml-6"
              />
              <div className="hidden sm:flex flex-col justify-center -ml-10">
                <span className="font-heading text-[14px] font-bold tracking-[0.12em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8]">
                  Arcviet Living Nexus
                </span>
                <span className="font-heading text-[9px] font-medium tracking-[0.25em] text-[#27d6ff] uppercase mt-1 opacity-80">
                  Một kết nối - Vạn giá trị
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full space-x-10">
            {[
              { path: '/', label: 'TRANG CHỦ' },
              { 
                path: '/he-sinh-thai', 
                label: 'HỆ SINH THÁI',
                dropdown: [
                  { path: '/he-sinh-thai#gioi-thieu', label: 'Giới thiệu hệ sinh thái' },
                  { path: '/don-vi-thiet-ke', label: 'Đơn vị thiết kế' },
                  { path: '/don-vi-thi-cong', label: 'Đơn vị thi công' },
                  { path: '/he-sinh-thai#phan-khuc', label: 'Phân khúc dịch vụ' },
                  { path: '/he-sinh-thai#loi-ich', label: 'Lợi ích khách hàng' },
                  { path: '/he-sinh-thai#so-sanh', label: 'So sánh phương án' }
                ]
              },
              { 
                path: '/du-an', 
                label: 'DỰ ÁN TIÊU BIỂU',
                dropdown: [
                  { path: '/lien-ket-doi-tac', label: 'Liên kết đối tác' }
                ]
              },
              { 
                path: '/kien-thuc', 
                label: 'KIẾN THỨC',
                dropdown: [
                  { path: '/cam-nang', label: 'Toàn bộ bài viết' }
                ]
              },
            ].map((item) => (
              <div key={item.path} className="relative group h-full flex items-center">
                <Link 
                  href={item.path} 
                  className={`font-menu h-full flex items-center text-[12px] font-bold tracking-widest transition-colors relative ${isActive(item.path) ? 'text-[#27d6ff]' : 'text-gray-300 hover:text-[#27d6ff]'}`}
                >
                  <span className="relative flex items-center gap-1">
                    {item.label}
                    {item.dropdown && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="m6 9 6 6 6-6"/></svg>
                    )}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#27d6ff]"></span>
                    )}
                  </span>
                </Link>
                {item.dropdown && (
                  <div className="absolute top-[80px] left-0 w-56 bg-[#020b0d]/95 backdrop-blur-md border-t-2 border-[#27d6ff] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-50">
                    {item.dropdown.map((drop, idx) => (
                      <Link 
                        key={idx} 
                        href={drop.path} 
                        className="font-menu px-5 py-2.5 text-[11px] text-gray-300 hover:text-[#27d6ff] hover:bg-white/5 uppercase tracking-wide transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-6">
            <Link
              href="/tu-van"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#27d6ff] to-[#0a8ba8] text-[#020b0d] px-8 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-widest transition-all duration-500 shadow-[0_0_20px_rgba(39,214,255,0.4)] hover:shadow-[0_0_30px_rgba(39,214,255,0.6)] hover:scale-105"
            >
              ĐẶT LỊCH TƯ VẤN
              <ArrowRight className="w-4 h-4 text-[#020b0d]" />
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden text-white hover:text-[#27d6ff] transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 bg-[#020b0d]/95 backdrop-blur-xl z-[100] transition-all duration-300 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full text-white hover:bg-white/10 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center gap-8 w-full px-6 h-full overflow-y-auto py-20">
          {[
            { path: '/', label: 'TRANG CHỦ' },
            { path: '/he-sinh-thai', label: 'HỆ SINH THÁI' },
            { path: '/du-an', label: 'DỰ ÁN TIÊU BIỂU' },
            { path: '/kien-thuc', label: 'KIẾN THỨC' },
          ].map((item) => (
             <Link 
              key={item.path} 
              href={item.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`font-menu text-xl font-bold uppercase tracking-widest transition-all ${isActive(item.path) ? 'text-[#27d6ff]' : 'text-gray-300 hover:text-[#27d6ff]'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/tu-van" onClick={() => setIsMobileMenuOpen(false)} className="font-menu mt-8 bg-transparent border border-[#27d6ff] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest w-full text-center hover:bg-[#27d6ff]/10 transition-colors rounded-full flex justify-center items-center gap-2">
            ĐẶT LỊCH TƯ VẤN <ArrowRight className="w-4 h-4 text-[#27d6ff]" />
          </Link>
        </nav>
      </div>
    </>
  );
}
