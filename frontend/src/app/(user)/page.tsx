import React from 'react';
import HeroConcept from './_components/HeroConcept';
import SectionConceptStats from './_components/SectionConceptStats';
import SectionConceptCategories from './_components/SectionConceptCategories';
import SectionConceptPartners from './_components/SectionConceptPartners';
import SectionConceptCoreValues from './_components/SectionConceptCoreValues';
import SectionConcept7Steps from './_components/SectionConcept7Steps';
import SectionConceptCTA from './_components/SectionConceptCTA';
import SectionStarryMotif from './_components/SectionStarryMotif';

export default function UserHomePage() {
  return (
    <div className="w-full relative min-h-screen bg-transparent">
      {/* Ambient glowing blobs for extra luxury tech feel */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 block pb-10 overflow-hidden w-full">
        {/* Top section: Hero and Stats with background image */}
        <div className="relative w-full pb-12 md:pb-16">
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-100"
            style={{
              backgroundImage: "url('/images/backg_new2.png')",
              backgroundSize: "100% auto", /* Đảm bảo trải dài toàn trang theo tỷ lệ gốc */
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center"
            }}
          />
          <div className="relative z-10 block space-y-12 md:space-y-16">
            <HeroConcept />
            <SectionConceptStats />
          </div>
        </div>

        {/* Bottom sections sit transparently on layout background */}
        <div className="relative w-full">
          <SectionConceptCategories />
          <SectionConceptPartners />
          <SectionConceptCoreValues />
          <SectionConcept7Steps />
          <SectionConceptCTA />
        </div>
      </div>
    </div>
  );
}
