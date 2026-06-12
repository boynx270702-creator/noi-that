const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove font-['Cinzel',_serif] and clean up extra spaces
        let newContent = content
            .replace(/font-\['Cinzel',_serif\]/g, "")
            .replace(/font-family:\s*'Cinzel',\s*serif;/g, "")
            .replace(/font-family:\s*"Cinzel",\s*serif;/g, "")
            // clean up double spaces inside className strings
            .replace(/className="([^"]*)"/g, (match, p1) => {
                return `className="${p1.replace(/\s+/g, ' ').trim()}"`;
            });
            
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Cleaned:', filePath);
        }
    }
});
