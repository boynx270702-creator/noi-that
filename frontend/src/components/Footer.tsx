import React from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020b0d] text-gray-300 py-16 border-t border-[#27d6ff]/20 relative overflow-hidden">
      {/* Subtle tech background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#27d6ff]/50 to-transparent"></div>
      <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#27d6ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 1. Kết Nối Với Chúng Tôi */}
          <div>
            <h3 className="font-heading text-white text-[16px] uppercase tracking-widest font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#27d6ff]">
              Kết Nối Với Chúng Tôi
            </h3>
            <p className="text-gray-400 mb-6 text-[13px] leading-relaxed">
              Luôn sẵn sàng hỗ trợ và đồng hành cùng bạn kiến tạo không gian sống mơ ước.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[13px]">
                <MapPin className="text-[#27d6ff] w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Cầu Giấy, Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-start gap-3 text-[13px]">
                <Phone className="text-[#27d6ff] w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>0334 689 521</span>
              </li>
              <li className="flex items-start gap-3 text-[13px]">
                <Mail className="text-[#27d6ff] w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>hieunt270702@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-[13px]">
                <Clock className="text-[#27d6ff] w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Thứ 2 - Thứ 6 / 9:00 SA - 6:00 CH</span>
              </li>
            </ul>
          </div>

          {/* 2. Bài Viết Gần Đây */}
          <div>
            <h3 className="font-heading text-white text-[16px] uppercase tracking-widest font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#27d6ff]">
              Bài Viết Gần Đây
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-[80px] h-[60px] flex-shrink-0 overflow-hidden rounded-[4px] border border-[#27d6ff]/10 group-hover:border-[#27d6ff]/40 transition-colors">
                  <img src="/images/main/25.jpg" alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <Link href="/cam-nang" className="text-[13px] font-bold text-gray-300 hover:text-[#27d6ff] transition-colors line-clamp-2 leading-snug">
                    Không Gian Sống Đẳng Cấp: Xu Hướng Thiết Kế Mới
                  </Link>
                  <span className="text-[11px] text-[#27d6ff]/70 mt-1 block">26 Tháng 2, 2024</span>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-[80px] h-[60px] flex-shrink-0 overflow-hidden rounded-[4px] border border-[#27d6ff]/10 group-hover:border-[#27d6ff]/40 transition-colors">
                  <img src="/images/main/26.jpg" alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <Link href="/cam-nang" className="text-[13px] font-bold text-gray-300 hover:text-[#27d6ff] transition-colors line-clamp-2 leading-snug">
                    5 Điều Bạn Cần Biết Về Nội Thất Hiện Đại
                  </Link>
                  <span className="text-[11px] text-[#27d6ff]/70 mt-1 block">28 Tháng 8, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Dịch Vụ Của Chúng Tôi */}
          <div>
            <h3 className="font-heading text-white text-[16px] uppercase tracking-widest font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#27d6ff]">
              Dịch Vụ Của Chúng Tôi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/he-sinh-thai" className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-[#27d6ff] transition-colors group">
                  <CheckCircle className="text-[#27d6ff] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Hệ Sinh Thái Đơn Vị
                </Link>
              </li>
              <li>
                <Link href="/giam-sat" className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-[#27d6ff] transition-colors group">
                  <CheckCircle className="text-[#27d6ff] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Dịch Vụ Giám Sát
                </Link>
              </li>
              <li>
                <Link href="/quy-trinh" className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-[#27d6ff] transition-colors group">
                  <CheckCircle className="text-[#27d6ff] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Quy Trình Làm Việc
                </Link>
              </li>
              <li>
                <Link href="/cam-nang" className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-[#27d6ff] transition-colors group">
                  <CheckCircle className="text-[#27d6ff] w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Cẩm Nang Nội Thất
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Thư Viện Ảnh */}
          <div>
            <h3 className="font-heading text-white text-[16px] uppercase tracking-widest font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#27d6ff]">
              Thư Viện Ảnh
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square overflow-hidden rounded-[4px] border border-transparent hover:border-[#27d6ff]/50 transition-colors group cursor-pointer relative">
                <div className="absolute inset-0 bg-[#021817]/40 group-hover:bg-transparent transition-colors z-10" />
                <img src="/images/main/19.jpg" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[4px] border border-transparent hover:border-[#27d6ff]/50 transition-colors group cursor-pointer relative">
                <div className="absolute inset-0 bg-[#021817]/40 group-hover:bg-transparent transition-colors z-10" />
                <img src="/images/main/20.jpg" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[4px] border border-transparent hover:border-[#27d6ff]/50 transition-colors group cursor-pointer relative">
                <div className="absolute inset-0 bg-[#021817]/40 group-hover:bg-transparent transition-colors z-10" />
                <img src="/images/main/21.jpg" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[4px] border border-transparent hover:border-[#27d6ff]/50 transition-colors group cursor-pointer relative">
                <div className="absolute inset-0 bg-[#021817]/40 group-hover:bg-transparent transition-colors z-10" />
                <img src="/images/main/22.jpg" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer Area */}
        <div className="mt-16 pt-8 border-t border-[#27d6ff]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img src="/images/logo-header2.png" alt="Footer Logo" className="h-10 opacity-80 hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(39,214,255,0.3)]" />
          </Link>
          <div className="text-[12px] text-gray-500 font-medium tracking-wider flex flex-wrap justify-center gap-4 uppercase">
            <Link href="#" className="hover:text-[#27d6ff] transition-colors">Terms of use</Link>
            <span className="text-[#27d6ff]/30">|</span>
            <Link href="#" className="hover:text-[#27d6ff] transition-colors">Privacy Environmental Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}