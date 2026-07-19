const fs = require('fs');
const path = require('path');

const targetDir = 'd:/Hieudeptraivl/noithat-main/frontend/src';

const replacements = [
  { search: /#D3AE3E/gi, replace: '#27d6ff' },
  { search: /#c7a25c/gi, replace: '#1bbce0' },
  { search: /#f1be6d/gi, replace: '#4fe2ff' },
  { search: /#1c1918/gi, replace: '#021817' },
  { search: /#1a1a1a/gi, replace: '#020b0d' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(targetDir);

let updatedFilesCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  replacements.forEach(({ search, replace }) => {
    newContent = newContent.replace(search, replace);
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    updatedFilesCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Finished. Updated ${updatedFilesCount} files.`);
