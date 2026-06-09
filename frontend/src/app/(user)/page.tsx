import React from 'react';
import HeroSlider from './_components/HeroSlider';
import Section2Problem from './_components/Section2Problem';
import Section3Solution from './_components/Section3Solution';
import Section4Benefits from './_components/Section4Benefits';
import Section5Comparison from './_components/Section5Comparison';
import Section6Ecosystem from './_components/Section6Ecosystem';
import Section7Categories from './_components/Section7Categories';
import Section8Supervision from './_components/Section8Supervision';
import Section9Process from './_components/Section9Process';
import Section10CTA from './_components/Section10CTA';
import Stats from './_components/Stats';
import Blog from './_components/Blog';

export default function UserHomePage() {
  return (
    <div className="w-full relative overflow-hidden bg-[#0a0a0a]">
      {/* Ambient Light Blobs for WOW Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D3AE3E]/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#D3AE3E]/5 blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-[#D3AE3E]/5 blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Section 1: Hero Banner */}
        <HeroSlider />
      
      {/* Section 2: Vấn đề */}
      <Section2Problem />
      
      {/* Section 3: Giải pháp */}
      <Section3Solution />
      
      {/* Section 4: Lợi ích */}
      <Section4Benefits />
      
      {/* Section 5: So sánh */}
      <Section5Comparison />
      
      {/* Section 6: Hệ sinh thái */}
      <Section6Ecosystem />
      
      {/* Section 7: Loại hình công trình */}
      <Section7Categories />
      
      {/* Section 8: Giám sát thi công */}
      <Section8Supervision />
      
      {/* Section 9: Quy trình làm việc */}
      <Section9Process />
      
      {/* Stats - Giữ nguyên phong cách */}
      <Stats />
      
      {/* Blog - Cẩm nang */}
      <Blog />
      
      {/* Section 10: CTA */}
      <Section10CTA />
      </div>
    </div>
  );
}
