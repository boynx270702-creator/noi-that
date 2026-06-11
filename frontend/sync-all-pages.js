const fs = require('fs');

const dirs = [
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/cam-nang',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/giam-sat',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/he-sinh-thai',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/quy-trinh',
  'd:/Hieudeptraivl/noithat-main/frontend/src/app/(user)/tu-van'
];

dirs.forEach(dir => {
  const pagePath = dir + '/page.tsx';
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // Prevent double patch
    if (content.includes('dark:bg-[')) {
      console.log('Already patched: ' + pagePath);
      // return; // Let's allow re-patching for safety if needed, but carefully
    }

    // Backgrounds
    content = content.replace(/bg-\[#131313\](?! dark)/g, 'bg-[#FAF9F8] dark:bg-[#131313]');
    content = content.replace(/bg-\[#1c1c1c\](?! dark)/g, 'bg-white dark:bg-[#1c1c1c] shadow-sm dark:shadow-none');
    
    // Gradients
    content = content.replace(/from-\[#1c1c1c\] to-\[#131313\]/g, 'from-white to-[#FAF9F8] dark:from-[#1c1c1c] dark:to-[#131313] shadow-sm dark:shadow-none');

    // Text colors
    content = content.replace(/text-white(?!(\/| dark|-))/g, 'text-gray-900 dark:text-white');
    content = content.replace(/text-white\/80(?! dark)/g, 'text-gray-700 dark:text-white/80');
    content = content.replace(/text-white\/70(?! dark)/g, 'text-gray-600 dark:text-white/70');
    content = content.replace(/text-white\/60(?! dark)/g, 'text-gray-500 dark:text-white/60');
    content = content.replace(/text-white\/50(?! dark)/g, 'text-gray-400 dark:text-white/50');
    content = content.replace(/text-white\/30(?! dark)/g, 'text-gray-300 dark:text-white/30');

    // Borders
    content = content.replace(/border-white\/5(?! dark)/g, 'border-gray-200 dark:border-white/5');
    content = content.replace(/border-white\/10(?! dark)/g, 'border-gray-200 dark:border-white/10');
    content = content.replace(/border-white\/20(?! dark)/g, 'border-gray-300 dark:border-white/20');
    content = content.replace(/border-white\/30(?! dark)/g, 'border-gray-300 dark:border-white/30');

    // Bg alpha
    content = content.replace(/bg-white\/5(?! dark)/g, 'bg-gray-100 dark:bg-white/5');
    content = content.replace(/bg-white\/10(?! dark)/g, 'bg-gray-100 dark:bg-white/10');

    // Form inputs (bg-transparent text-white border-white/20)
    content = content.replace(/bg-transparent border-white\/20 text-white/g, 'bg-transparent border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus:border-[#ce9e51] focus:ring-1 focus:ring-[#ce9e51] outline-none');

    // Fix possible duplicated dark modes
    content = content.replace(/dark:text-white dark:text-white/g, 'dark:text-white');
    content = content.replace(/dark:bg-\[#131313\] dark:bg-\[#131313\]/g, 'dark:bg-[#131313]');
    content = content.replace(/dark:border-white\/10 dark:border-white\/10/g, 'dark:border-white/10');

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log('Updated ' + pagePath);
  }
});
