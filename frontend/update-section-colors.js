const fs = require('fs');
const path = require('path');

const updates = [
  { file: 'Section7Categories.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#FCFBF8] dark:bg-[#131313] modern-section' },
  { file: 'SectionHotProducts.tsx', from: 'className="py-24 modern-section', to: 'className="py-24 bg-[#F8F6F2] dark:bg-[#1a1a1a] modern-section' },
  { file: 'SectionBestSellers.tsx', from: 'className="py-24 modern-section', to: 'className="py-24 bg-[#F4F1EC] dark:bg-[#131313] modern-section' },
  { file: 'SectionPartners.tsx', from: 'className="py-20 modern-section', to: 'className="py-20 bg-[#FCFBF8] dark:bg-[#1a1a1a] modern-section' },
  { file: 'SectionPolicies.tsx', from: 'className="py-24 modern-section', to: 'className="py-24 bg-[#F6F4F0] dark:bg-[#131313] modern-section' },
  { file: 'Section10CTA.tsx', from: 'bg-white dark:bg-[#1a1a1a]', to: 'bg-[#F8F5F0] dark:bg-[#1a1a1a]' },
  { file: 'Blog.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#F9F8F6] dark:bg-[#131313] modern-section' },
  { file: 'Portfolio.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#F5F4F1] dark:bg-[#1a1a1a] modern-section' },
  { file: 'Section2Problem.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#FDFCFB] dark:bg-[#131313] modern-section' },
  { file: 'Section4Benefits.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#F7F5F0] dark:bg-[#1a1a1a] modern-section' },
  { file: 'Section9Process.tsx', from: 'className="relative py-32 modern-section', to: 'className="relative py-32 bg-[#F4F2EE] dark:bg-[#131313] modern-section' },
  { file: 'page.tsx', from: 'bg-white', to: 'bg-[#FCFBF8]', dir: '../he-sinh-thai' }
];

const componentsDir = 'src/app/(user)/_components';

updates.forEach(update => {
  const targetDir = update.dir ? path.join('src/app/(user)', update.dir) : componentsDir;
  const filePath = path.join(targetDir, update.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(update.from)) {
      content = content.replace(update.from, update.to);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + update.file);
    } else {
      console.log('Could not find string in ' + update.file);
    }
  } else {
    console.log('File not found: ' + filePath);
  }
});
