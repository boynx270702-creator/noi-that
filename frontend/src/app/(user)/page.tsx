import React from 'react';
import HeroConcept from './_components/HeroConcept';
import SectionConceptStats from './_components/SectionConceptStats';
import SectionConceptCategories from './_components/SectionConceptCategories';
import SectionConceptPartners from './_components/SectionConceptPartners';
import SectionConceptCoreValues from './_components/SectionConceptCoreValues';
import SectionConcept7Steps from './_components/SectionConcept7Steps';
import SectionConceptCTA from './_components/SectionConceptCTA';
import ScrollReveal from './_components/ScrollReveal';

export default function UserHomePage() {
  return (
    <div className="w-full relative min-h-screen bg-transparent">
      
      {/* 
        Tắt tạm phần keyvisual động (HeroBackground)
        Thay bằng nền tĩnh với image_hero.png
      */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image_hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b0d]/60 via-[#020b0d]/40 to-[#020b0d] pointer-events-none"></div>
        {/* Subtle grid line art motif */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #27d6ff 1px, transparent 1px),
              linear-gradient(to bottom, #27d6ff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020b0d_100%)] pointer-events-none"></div>
      </div>

      <div className="relative z-10 block pb-10 overflow-hidden w-full">
        {/* Top section: Hero and Stats with background image */}
        <div className="relative w-full pb-12 md:pb-16 pt-[80px]">
          <div className="relative z-10 block space-y-12 md:space-y-16">
            <HeroConcept />
            <ScrollReveal animation="fade-up" delay={200} duration={800}>
              <SectionConceptStats />
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom sections sit transparently on layout background */}
        <div className="relative w-full space-y-24 md:space-y-32 pt-24">
          <ScrollReveal animation="fade-up" duration={800}>
            <SectionConceptCategories />
          </ScrollReveal>
          
          <ScrollReveal animation="zoom-in" duration={800} threshold={0.1}>
            <SectionConceptPartners />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" duration={800}>
            <SectionConceptCoreValues />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" duration={800}>
            <SectionConcept7Steps />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" duration={800} delay={200}>
            <SectionConceptCTA />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
