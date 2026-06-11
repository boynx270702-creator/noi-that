const fs = require('fs');

const files = [
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/layout.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/page.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Header.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/HeroSlider.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Section7Categories.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionHotProducts.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionBestSellers.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionPartners.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionPolicies.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Portfolio.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Blog.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Section10CTA.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Footer.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log("NOT FOUND: " + file);
    return;
  }
  let content = fs.readFileSync(file, 'utf8');

  // Prevent double patching
  if (content.includes('dark:bg-[')) {
    console.log("ALREADY PATCHED: " + file);
    // Continue anyway for the sake of completeness if we need updates
  }

  // Replace background colors
  content = content.replace(/bg-\[#F9F8F6\]/g, 'bg-[#F9F8F6] dark:bg-[#0a0a0a]');
  
  // Specific backgrounds
  content = content.replace(/bg-white shadow-\[0_4px_20px_-4px_rgba\(0,0,0,0\.05\)\] border border-gray-100/g, 'bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-gray-100 dark:border-white/10');
  content = content.replace(/bg-white\/95 backdrop-blur-sm border-b border-gray-100/g, 'bg-white/95 dark:bg-[#131313]/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10');
  content = content.replace(/bg-white\/95 backdrop-blur-xl/g, 'bg-white/95 dark:bg-black/95 backdrop-blur-xl');
  content = content.replace(/bg-white border-t-2 border-\[#D3AE3E\] shadow-\[0_10px_40px_-10px_rgba\(0,0,0,0\.1\)\]/g, 'bg-white dark:bg-[#1a1a1a] border-t-2 border-[#D3AE3E] shadow-xl');
  
  // Basic colors
  content = content.replace(/bg-white(?!(\/| dark))/g, 'bg-white dark:bg-[#131313]');
  content = content.replace(/text-gray-900(?! dark)/g, 'text-gray-900 dark:text-white');
  content = content.replace(/text-gray-600(?! dark)/g, 'text-gray-600 dark:text-[#ccc]');
  content = content.replace(/text-gray-500(?! dark)/g, 'text-gray-500 dark:text-[#888]');
  content = content.replace(/text-gray-400(?! dark)/g, 'text-gray-400 dark:text-white/40');
  content = content.replace(/text-gray-300(?! dark)/g, 'text-gray-300 dark:text-white/20');
  
  content = content.replace(/bg-gray-100(?! dark)/g, 'bg-gray-100 dark:bg-[#1a1a1a]');
  content = content.replace(/bg-gray-200(?! dark)/g, 'bg-gray-200 dark:bg-white/10');
  
  content = content.replace(/border-gray-100(?! dark)/g, 'border-gray-100 dark:border-white/10');
  content = content.replace(/border-gray-200(?! dark)/g, 'border-gray-200 dark:border-white/20');
  
  content = content.replace(/hover:bg-gray-100(?! dark)/g, 'hover:bg-gray-100 dark:hover:bg-white/10');
  content = content.replace(/hover:bg-gray-50(?! dark)/g, 'hover:bg-gray-50 dark:hover:bg-white/5');
  content = content.replace(/hover:text-gray-900(?! dark)/g, 'hover:text-gray-900 dark:hover:text-white');
  
  // Hero slider gradients
  content = content.replace(/from-\[#F9F8F6\]\/80 via-white\/60 to-\[#F9F8F6\](?! dark)/g, 'from-[#F9F8F6]/80 via-white/60 to-[#F9F8F6] dark:from-[#0a0a0a]/80 dark:via-black/60 dark:to-[#0a0a0a]');
  content = content.replace(/from-\[#F9F8F6\]\/90 via-black\/20 to-transparent(?! dark)/g, 'from-[#F9F8F6]/90 dark:from-[#0a0a0a]/90 via-black/20 to-transparent');
  content = content.replace(/from-gray-700 to-gray-500(?! dark)/g, 'from-gray-700 to-gray-500 dark:from-white dark:to-white/60');
  
  // Footer
  content = content.replace(/bg-white pt-24 pb-8(?! dark)/g, 'bg-white dark:bg-[#0a0a0a] pt-24 pb-8');
  
  // Clean up double darks if any
  content = content.replace(/dark:bg-\[#131313\] dark:bg-\[#131313\]/g, 'dark:bg-[#131313]');
  content = content.replace(/dark:text-white dark:text-white/g, 'dark:text-white');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
