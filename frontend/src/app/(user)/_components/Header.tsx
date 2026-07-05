"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu, Sparkles } from 'lucide-react';

import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/he-sinh-thai') return pathname?.startsWith('/he-sinh-thai') || pathname?.startsWith('/don-vi-thiet-ke');
    if (path === '/dich-vu') return pathname?.startsWith('/giam-sat') || pathname?.startsWith('/lien-ket-doi-tac');
    return pathname?.startsWith(path);
  };

  return (
    <>


      {/* --- MAIN HEADER --- */}
      <div className="w-full sticky top-0 z-50 bg-white/[0.02] backdrop-blur-md border-b border-[#51d7c4]/20 transition-all duration-500 shadow-[0_4px_30px_rgba(81,215,196,0.05)] relative">
        {/* Subtle animated bottom border - cyan glow on right side only */}
        <div className="absolute inset-x-0 bottom-[-1px] h-[1px] overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#51d7c4]/50 to-[#51d7c4]/80 animate-[pulse_2.5s_ease-in-out_infinite]"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo-header-blue.png"
                alt="logo"
                className="h-[55px] w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col justify-center ml-2">
                <span className="font-heading text-[14px] font-bold tracking-[0.12em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#51d7c4] via-[#008f82] to-[#013533]">
                  Arcviet Living Nexus
                </span>
                <span className="font-heading text-[9px] font-medium tracking-[0.25em] text-[#008f82] dark:text-[#51d7c4] uppercase mt-1 opacity-80">
                  Một kết nối - Vạn giá trị
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center h-full space-x-8">
            <Link href="/" className={`font-menu h-full flex items-center text-[13px] font-semibold uppercase tracking-widest transition-colors ${isActive('/') ? 'text-[#008f82] dark:text-[#51d7c4]' : 'text-gray-900 dark:text-white hover:text-[#008f82] dark:hover:text-[#51d7c4]'}`}>
              <span className="relative py-1">
                Trang chủ
                {isActive('/') && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#51d7c4] shadow-[0_0_8px_rgba(81,215,196,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></span>
                )}
              </span>
            </Link>

            <div className="relative group cursor-pointer h-full flex items-center">
              <Link href="/he-sinh-thai" className={`font-menu h-full flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest transition-colors ${isActive('/he-sinh-thai') ? 'text-[#008f82] dark:text-[#51d7c4]' : 'text-gray-900 dark:text-white hover:text-[#008f82] dark:hover:text-[#51d7c4]'}`}>
                <span className="relative py-1 flex items-center gap-1">
                  Hệ sinh thái
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  {isActive('/he-sinh-thai') && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#51d7c4] shadow-[0_0_8px_rgba(81,215,196,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></span>
                  )}
                </span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-white dark:bg-[#021817] border-t-2 border-[#51d7c4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                <Link href="/he-sinh-thai#gioi-thieu" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Giới thiệu hệ sinh thái</Link>
                <Link href="/don-vi-thiet-ke" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Đơn vị thiết kế</Link>
                <Link href="/don-vi-thi-cong" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Đơn vị thi công</Link>
                <Link href="/he-sinh-thai#phan-khuc" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Phân khúc dịch vụ</Link>
                <Link href="/he-sinh-thai#loi-ich" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Lợi ích khách hàng</Link>
                <Link href="/he-sinh-thai#so-sanh" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">So sánh phương án tự triển khai</Link>
              </div>
            </div>

            <div className="relative group cursor-pointer h-full flex items-center">
              <Link href="/san-pham" className={`font-menu h-full flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest transition-colors ${isActive('/san-pham') ? 'text-[#008f82] dark:text-[#51d7c4]' : 'text-gray-900 dark:text-white hover:text-[#008f82] dark:hover:text-[#51d7c4]'}`}>
                <span className="relative py-1 flex items-center gap-1">
                  Quy trình
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  {isActive('/san-pham') && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#51d7c4] shadow-[0_0_8px_rgba(81,215,196,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></span>
                  )}
                </span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-[#021817] border-t-2 border-[#51d7c4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                <Link href="/san-pham" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Tất cả sản phẩm</Link>
              </div>
            </div>

            <div className="relative group cursor-pointer h-full flex items-center">
              <Link href="/dich-vu" className={`font-menu h-full flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest transition-colors ${isActive('/dich-vu') ? 'text-[#008f82] dark:text-[#51d7c4]' : 'text-gray-900 dark:text-white hover:text-[#008f82] dark:hover:text-[#51d7c4]'}`}>
                <span className="relative py-1 flex items-center gap-1">
                  Dự án tiêu biểu
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  {isActive('/dich-vu') && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#51d7c4] shadow-[0_0_8px_rgba(81,215,196,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></span>
                  )}
                </span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-[#021817] border-t-2 border-[#51d7c4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                <Link href="/lien-ket-doi-tac" className="font-menu px-5 py-2.5 text-[12px] text-gray-600 dark:text-[#ccc] hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Liên kết đối tác</Link>
              </div>
            </div>

            <div className="relative group cursor-pointer h-full flex items-center">
              <Link href="/cam-nang" className={`font-menu h-full flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest transition-colors ${isActive('/cam-nang') ? 'text-[#008f82] dark:text-[#51d7c4]' : 'text-gray-900 dark:text-white hover:text-[#008f82] dark:hover:text-[#51d7c4]'}`}>
                <span className="relative py-1 flex items-center gap-1">
                  Kiến thức
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  {isActive('/cam-nang') && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#51d7c4] shadow-[0_0_8px_rgba(81,215,196,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></span>
                  )}
                </span>
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-[#021817] border-t-2 border-[#51d7c4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                <Link href="/cam-nang" className="font-menu px-5 py-2.5 text-[12px] text-gray-900 dark:text-white font-bold hover:text-[#51d7c4] hover:bg-gray-50 dark:hover:bg-white/5 uppercase tracking-wide transition-colors">Toàn bộ bài viết</Link>
              </div>
            </div>

          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4 lg:gap-6">

            <ThemeToggle />

            {/* CTA Button with animated border */}
            <div className="hidden lg:block relative p-[1px] rounded-sm overflow-hidden group">
              {/* Rotating glow border */}
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,#51d7c4,transparent,transparent)] animate-[spin_3s_linear_infinite] opacity-80"></div>
              {/* Steady base border */}
              <div className="absolute inset-0 border border-[#51d7c4]/30 rounded-sm animate-[pulse_2s_ease-in-out_infinite]"></div>
              <Link
                href="/tu-van"
                className="relative font-menu inline-flex items-center gap-2 bg-[#021d1b] text-white px-6 py-3 text-[12px] font-semibold uppercase tracking-widest hover:bg-[#032e2b] transition-colors rounded-sm shadow-[0_0_20px_rgba(81,215,196,0.2)] group-hover:shadow-[0_0_30px_rgba(81,215,196,0.4)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#51d7c4] animate-[pulse_2s_ease-in-out_infinite]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                <span className="animate-[pulse_2.5s_ease-in-out_infinite] drop-shadow-[0_0_6px_rgba(81,215,196,0.6)]">Đặt lịch tư vấn riêng</span>
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden text-gray-900 dark:text-white hover:text-[#D3AE3E] transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (Full Screen Glassmorphism) --- */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-[100] transition-all duration-300 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:bg-[#1a1a1a] dark:hover:bg-white/10 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center gap-8 w-full px-6 h-full overflow-y-auto py-20">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest transition-all ${isActive('/') ? 'text-[#D3AE3E]' : 'text-gray-900 dark:text-white hover:text-[#D3AE3E]'}`}>Trang Chủ</Link>
          <Link href="/he-sinh-thai" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest transition-all ${isActive('/he-sinh-thai') ? 'text-[#D3AE3E]' : 'text-gray-900 dark:text-white hover:text-[#D3AE3E]'}`}>Hệ Sinh Thái</Link>
          <Link href="/san-pham" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest transition-all ${isActive('/san-pham') ? 'text-[#D3AE3E]' : 'text-gray-900 dark:text-white hover:text-[#D3AE3E]'}`}>Đối tác/Hạng mục</Link>
          <Link href="/giam-sat" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest transition-all ${isActive('/dich-vu') ? 'text-[#D3AE3E]' : 'text-gray-900 dark:text-white hover:text-[#D3AE3E]'}`}>Dịch Vụ</Link>
          <Link href="/cam-nang" onClick={() => setIsMobileMenuOpen(false)} className={`font-menu text-2xl font-semibold uppercase tracking-widest transition-all ${isActive('/cam-nang') ? 'text-[#D3AE3E]' : 'text-gray-900 dark:text-white hover:text-[#D3AE3E]'}`}>Cẩm Nang</Link>
          <Link href="/tu-van" onClick={() => setIsMobileMenuOpen(false)} className="font-menu mt-8 bg-[#D3AE3E] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest w-full text-center hover:bg-[#b88c45] transition-colors rounded-[2px]">
            Gửi Nhu Cầu Tư Vấn
          </Link>
        </nav>
      </div>
    </>
  );
}
