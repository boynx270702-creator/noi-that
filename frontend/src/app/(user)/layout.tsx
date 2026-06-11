import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-montserrat',
});

import { ThemeProvider } from './_components/ThemeProvider';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`min-h-screen bg-[#FAF9F8] dark:bg-[#0a0a0a] dark:bg-[#0a0a0a] flex flex-col ${montserrat.variable}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
