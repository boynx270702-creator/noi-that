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
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace old background color with the new one
  content = content.replace(/#F9F8F6/g, '#FAF9F8');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
