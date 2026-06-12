const fs = require('fs');
const path = require('path');

const filesToFix = [
    'Section2Problem.tsx',
    'Section3Solution.tsx',
    'Section4Benefits.tsx',
    'Section5Comparison.tsx',
    'Section6Ecosystem.tsx',
    'Section8Supervision.tsx',
    'Section9Process.tsx'
];

const dir = path.join(__dirname, 'src/app/(user)/_components');

filesToFix.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Safe replacements
    // Backgrounds
    content = content.replace(/bg-\[#131313\]/g, 'bg-[#F8F6F2] dark:bg-[#131313]');
    content = content.replace(/bg-\[#0a0a0a\]\/50/g, 'bg-[#FFFFFF] dark:bg-[#0a0a0a]/50');
    
    // Text colors
    // Need to avoid replacing text-white on gold buttons.
    // Replace text-white only if it has a space before it or a quote, to prevent matching text-white/50
    // Actually, it's safer to just replace all `text-white ` with `text-[#1F1F1F] dark:text-white ` 
    // and `text-white"` with `text-[#1F1F1F] dark:text-white"`
    content = content.replace(/text-white(\s|")/g, 'text-[#1F1F1F] dark:text-white$1');
    content = content.replace(/text-\[#999\]/g, 'text-gray-600 dark:text-[#999]');
    content = content.replace(/text-\[#888\]/g, 'text-gray-500 dark:text-[#888]');
    content = content.replace(/text-white\/(\d+)/g, 'text-[#1F1F1F]/$1 dark:text-white/$1');

    // Borders
    content = content.replace(/border-white\/(\d+)/g, 'border-[#ECE7DE] dark:border-white/$1');
    content = content.replace(/border-\[#D3AE3E\]\/(\d+)/g, 'border-[#C7A25C]/$1');
    
    // Gold color
    content = content.replace(/text-\[#D3AE3E\]/g, 'text-[#C7A25C]');
    content = content.replace(/bg-\[#D3AE3E\]/g, 'bg-[#C7A25C]');
    content = content.replace(/border-\[#D3AE3E\]/g, 'border-[#C7A25C]');

    // Fix the double dark:text-white if we accidentally added it
    content = content.replace(/dark:text-\[#1F1F1F\] dark:dark:text-white/g, 'dark:text-white');
    content = content.replace(/text-\[#1F1F1F\] dark:text-[#1F1F1F] dark:text-white/g, 'text-[#1F1F1F] dark:text-white');

    // But wait, what if the button is Gold?
    // If bg-[#C7A25C] text-[#1F1F1F] dark:text-white -> wait, gold buttons look good with text-white in both modes.
    // Let's fix that back.
    content = content.replace(/bg-\[#C7A25C\] text-\[#1F1F1F\] dark:text-white/g, 'bg-[#C7A25C] text-white');
    content = content.replace(/bg-\[#C7A25C\](\s+.*)text-\[#1F1F1F\] dark:text-white/g, 'bg-[#C7A25C]$1text-white');
    
    // Turn dark inner cards into .card for light mode
    // Example: bg-[#F8F6F2] dark:bg-[#131313] p-8 text-center border-b -> we can just replace bg-[#F8F6F2] dark:bg-[#131313] with card dark:bg-[#131313] inside SpotlightCards
    content = content.replace(/bg-\[#F8F6F2\] dark:bg-\[#131313\]/g, 'card dark:bg-[#131313]');
    // Wait, the main section wrapper shouldn't be .card. The main section wrapper has py-32 bg-[#131313] initially.
    content = content.replace(/className="([^"]*)card dark:bg-\[#131313\]([^"]*)py-32/g, 'className="$1bg-[#F8F6F2] dark:bg-[#131313]$2py-32');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', file);
});
