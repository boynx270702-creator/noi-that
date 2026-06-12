const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath, callback);
        else callback(dirPath);
    });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        // Add font-heading to h1, h2, h3
        newContent = newContent.replace(/<(h1|h2|h3)([^>]*)className="([^"]*)"/g, (match, tag, attr, className) => {
            if (!className.includes('font-heading') && !className.includes('font-label') && !className.includes('font-body')) {
                return `<${tag}${attr}className="font-heading ${className}"`;
            }
            return match;
        });

        // Add font-label to h6 (which are used as section labels)
        newContent = newContent.replace(/<h6([^>]*)className="([^"]*)"/g, (match, attr, className) => {
            if (!className.includes('font-label')) {
                return `<h6${attr}className="font-label ${className}"`;
            }
            return match;
        });

        // For Header Menu, apply font-label to items that have uppercase
        if (filePath.includes('Header.tsx') || filePath.includes('Footer.tsx')) {
            newContent = newContent.replace(/className="([^"]*uppercase[^"]*)"/g, (match, className) => {
                if (!className.includes('font-label') && !className.includes('font-heading')) {
                    return `className="font-label ${className}"`;
                }
                return match;
            });
        }
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
});
