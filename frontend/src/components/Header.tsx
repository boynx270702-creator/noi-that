"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Moon, Menu, X, ChevronDown, Circle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="font-display hidden md:block bg-[#021817] border-b border-[#27d6ff]/10 py-2 w-full z-50 relative">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-start gap-8">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Mail className="text-[#27d6ff] w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 text-[13px] font-light">hieunt270702@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <Phone className="text-[#27d6ff] w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 text-[13px] font-light">0334 689 521</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <MapPin className="text-[#27d6ff] w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 text-[13px] font-light">Hà Nội, Việt Nam</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Sticky) */}
      <header
        className={`w-full z-40 transition-all duration-300 ${isScrolled
          ? 'fixed top-0 bg-[#020b0d]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#27d6ff]/20 py-3'
          : 'absolute top-auto bg-transparent py-5'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-1.5 group">
            <img
              src="/images/logo-header2.png"
              alt="Logo"
              className="h-[55px] object-contain transition-all duration-300 group-hover:scale-105"
            />
            <span className="font-heading text-[14px] font-bold tracking-[0.12em] hidden sm:block uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#27d6ff] to-white">
              Arcviet Living Nexus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`font-semibold text-sm uppercase tracking-wide transition-colors text-white hover:text-[#27d6ff]`}>
              Trang Chủ
            </Link>

            <div className="relative group">
              <button className={`flex items-center gap-1 font-semibold text-sm uppercase tracking-wide transition-colors text-white hover:text-[#27d6ff]`}>
                Đơn Vị <ChevronDown className="w-4 h-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-4 w-48 bg-[#021817]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(39,214,255,0.1)] border border-[#27d6ff]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 border-t-2 border-t-[#27d6ff] rounded-b-md">
                <Link href="/he-sinh-thai" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#27d6ff]/20 transition-colors">
                  Hệ Sinh Thái Đơn Vị
                </Link>
                <Link href="/he-sinh-thai" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#27d6ff]/20 transition-colors">
                  Phân Khúc Dịch Vụ
                </Link>
              </div>
            </div>

            <Link href="/giam-sat" className={`font-semibold text-sm uppercase tracking-wide transition-colors text-white hover:text-[#27d6ff]`}>
              Giám Sát
            </Link>
            <Link href="/quy-trinh" className={`font-semibold text-sm uppercase tracking-wide transition-colors text-white hover:text-[#27d6ff]`}>
              Quy Trình
            </Link>
            <Link href="/cam-nang" className={`font-semibold text-sm uppercase tracking-wide transition-colors text-white hover:text-[#27d6ff]`}>
              Cẩm Nang
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className={`transition-colors text-white hover:text-[#27d6ff]`}>
              <Moon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSidePanelOpen(true)}
              className={`transition-colors text-white hover:text-[#27d6ff]`}
            >
              <Circle className="w-5 h-5" />
            </button>
            <Link
              href="/tu-van"
              className="flex items-center gap-2 bg-[#27d6ff] text-[#021817] px-6 py-2.5 rounded-full hover:bg-white hover:text-[#27d6ff] transition-colors font-bold text-[13px] uppercase tracking-wider shadow-[0_0_15px_rgba(39,214,255,0.4)]"
            >
              <Circle className="w-4 h-4" />
              Liên hệ ngay
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 text-white hover:text-[#27d6ff]`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* 3. MOBILE MENU (Full Screen Glassmorphism) */}
      <div
        className={`fixed inset-0 bg-[#020b0d]/95 backdrop-blur-xl z-[100] transition-all duration-500 flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:border-[#27d6ff] hover:text-[#27d6ff] transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center gap-8">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-[#27d6ff] hover:scale-105 transition-all">Trang Chủ</Link>
          <Link href="/he-sinh-thai" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-[#27d6ff] hover:scale-105 transition-all">Hệ Sinh Thái</Link>
          <Link href="/giam-sat" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-[#27d6ff] hover:scale-105 transition-all">Giám Sát</Link>
          <Link href="/quy-trinh" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-[#27d6ff] hover:scale-105 transition-all">Quy Trình</Link>
          <Link href="/cam-nang" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest uppercase text-white hover:text-[#27d6ff] hover:scale-105 transition-all">Cẩm Nang</Link>
        </nav>
      </div>

      {/* 4. SIDE PANEL (Offcanvas) */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#021817]/95 backdrop-blur-xl border-l border-[#27d6ff]/20 z-[100] transform transition-transform duration-500 ease-in-out ${isSidePanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="h-full overflow-y-auto p-10 relative">
          {/* Close button */}
          <button
            onClick={() => setIsSidePanelOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-[#27d6ff] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <img src="/images/logo-header2.png" alt="Logo" className="w-[120px] mb-10" />

          <h2 className="font-heading text-2xl font-bold text-white mb-4 uppercase tracking-wider">Về Chúng Tôi</h2>
          <p className="text-gray-300 text-[14px] leading-relaxed mb-8">
            Hệ sinh thái hơn 30 đơn vị thiết kế – thi công nội thất đã được phân loại theo phân khúc. Chúng tôi giúp bạn kết nối đúng đơn vị, tiết kiệm thời gian và tối ưu chi phí.
          </p>

          <button className="border border-[#27d6ff] text-[#27d6ff] px-6 py-2.5 font-bold uppercase tracking-widest text-[12px] hover:bg-[#27d6ff] hover:text-[#021817] transition-all rounded-full mb-12 shadow-[0_0_15px_rgba(39,214,255,0.2)]">
            Tìm Hiểu Thêm
          </button>

          <h2 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider">Thư Viện</h2>
          <div className="grid grid-cols-3 gap-2 mb-12">
            <img src="/images/main/13.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
            <img src="/images/main/14.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
            <img src="/images/main/15.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
            <img src="/images/main/16.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
            <img src="/images/main/17.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
            <img src="/images/main/18.jpg" alt="Gallery" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 border border-transparent hover:border-[#27d6ff] transition-all cursor-pointer rounded-sm" />
          </div>
        </div>
      </div>

      {/* Side Panel Overlay Backdrop */}
      {isSidePanelOpen && (
        <div
          className="fixed inset-0 bg-[#020b0d]/80 backdrop-blur-sm z-50"
          onClick={() => setIsSidePanelOpen(false)}
        />
      )}
    </>
  );
}