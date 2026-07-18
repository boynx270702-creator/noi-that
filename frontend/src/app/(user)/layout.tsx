import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import PromoPopup from './_components/PromoPopup';
import FloatingContact from './_components/FloatingContact';
import SectionStarryMotif from './_components/SectionStarryMotif';
import ClientToaster from './_components/ClientToaster';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen flex flex-col relative bg-gradient-to-b from-[#021817] via-[#022b26] to-[#004f47] text-white overflow-x-hidden">
      <SectionStarryMotif />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <PromoPopup />
        <FloatingContact />
        <ClientToaster />
      </div>
    </div>
  );
}
