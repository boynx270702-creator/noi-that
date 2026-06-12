const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const userDir = path.join(__dirname, 'src/app/(user)');

walkDir(userDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Replace all main container widths to max-w-[1400px]
    content = content.replace(/max-w-\[1200px\]/g, 'max-w-[1400px]');
    content = content.replace(/max-w-\[1000px\]/g, 'max-w-[1400px]');
    content = content.replace(/max-w-\[900px\]/g, 'max-w-[1400px]');
    content = content.replace(/max-w-\[800px\]/g, 'max-w-[1400px]');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Fixed width in:', filePath);
    }
  }
});
