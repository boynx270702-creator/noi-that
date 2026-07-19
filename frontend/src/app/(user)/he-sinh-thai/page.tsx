import React from 'react';
import Link from 'next/link';
import Section6Ecosystem from '../_components/Section6Ecosystem';
import Section2Problem from '../_components/Section2Problem';
import Section3Solution from '../_components/Section3Solution';
import Section4Benefits from '../_components/Section4Benefits';
import Section5Comparison from '../_components/Section5Comparison';
import Section9Process from '../_components/Section9Process';

export default function HeSinhThaiPage() {
  return (
    <div className="overflow-hidden relative min-h-screen bg-transparent text-white">
      {/* Các nội dung giới thiệu hệ sinh thái */}
      <div id="gioi-thieu"><Section6Ecosystem /></div>
      <Section2Problem />
      <Section3Solution />
      <div id="loi-ich"><Section4Benefits /></div>
      <div id="so-sanh"><Section5Comparison /></div>
      <Section9Process />

      {/* CTA Chuyển sang trang Đơn vị thiết kế */}
      <section className="relative py-32 overflow-hidden border-t border-[#27d6ff]/15 bg-[#020b0d]/40 backdrop-blur-md">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
            Khám phá Hệ sinh thái <span className="text-[#27d6ff]">30+ Đơn vị</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Xem hồ sơ chi tiết, so sánh năng lực và tìm kiếm đơn vị thiết kế thi công nội thất phù hợp nhất với nhu cầu của bạn.
          </p>
          <Link
            href="/don-vi-thiet-ke"
            className="inline-flex items-center justify-center gap-2 bg-[#27d6ff] hover:bg-[#0a8ba8] text-[#010d0c] font-black text-[13px] uppercase tracking-[2px] py-4 px-8 rounded-[2px] shadow-[0_0_20px_rgba(81,215,196,0.3)] transition-colors"
          >
            Xem danh sách đơn vị thiết kế
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
