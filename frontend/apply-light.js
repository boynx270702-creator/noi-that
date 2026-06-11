const fs = require('fs');

const files = [
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/HeroSlider.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Section7Categories.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionHotProducts.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionBestSellers.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionPartners.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/SectionPolicies.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Portfolio.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Blog.tsx',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/_components/Section10CTA.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // HeroSlider specific fix (keep text-white for overlay texts if they are on images)
  // Let's actually not blindly replace text-white in HeroSlider if it ruins the overlay.
  // Wait, Japandi light mode usually has white text on dark images or dark text on light images.
  // The Hero images might be light, so dark text is good.
  
  // Replace background colors
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#F9F8F6]');
  content = content.replace(/bg-\[#131313\]/g, 'bg-[#F9F8F6]');
  content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100');
  content = content.replace(/bg-\[#1c1c1c\]/g, 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100');
  content = content.replace(/bg-white\/5/g, 'bg-gray-100');
  content = content.replace(/bg-white\/10/g, 'bg-gray-200');
  
  // Replace text colors
  content = content.replace(/text-white(?!\/)/g, 'text-gray-900');
  content = content.replace(/text-white\/60/g, 'text-gray-500');
  content = content.replace(/text-white\/50/g, 'text-gray-500');
  content = content.replace(/text-white\/40/g, 'text-gray-400');
  content = content.replace(/text-white\/20/g, 'text-gray-300');
  content = content.replace(/text-\[#ccc\]/g, 'text-gray-600');
  content = content.replace(/text-\[#888\]/g, 'text-gray-500');
  
  // Replace border colors
  content = content.replace(/border-white\/10/g, 'border-gray-200');
  content = content.replace(/border-white\/5/g, 'border-gray-200');
  
  // Replace hover states
  content = content.replace(/hover:bg-white\/10/g, 'hover:bg-gray-100');
  content = content.replace(/hover:text-white(?!\/)/g, 'hover:text-gray-900');
  
  // Specific fix for CTA Section (bg-black)
  if (file.includes('Section10CTA')) {
    content = content.replace(/bg-black/g, 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100');
  }

  // Ensure from-black to from-[#F9F8F6] for gradients
  content = content.replace(/from-black\/80/g, 'from-[#F9F8F6]/90');
  content = content.replace(/from-black\/90/g, 'from-[#F9F8F6]/90');
  content = content.replace(/from-black/g, 'from-[#F9F8F6]');
  content = content.replace(/to-transparent/g, 'to-transparent');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
