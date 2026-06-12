import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';

import { ThemeProvider } from './_components/ThemeProvider';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`min-h-screen bg-[#FAF9F8] dark:bg-[#0a0a0a] flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
