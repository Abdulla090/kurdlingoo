const fs = require('fs');
const path = require('path');

const cssFiles = [];
function findCSS(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules')) findCSS(full);
    } else if (f.endsWith('.css')) {
      cssFiles.push(full);
    }
  }
}
findCSS('src');

cssFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  // Backgrounds
  content = content.replace(/background(-color)?:\s*(#fff|#ffffff|white)\b/ig, 'background$1: var(--color-surface)');
  content = content.replace(/background(-color)?:\s*(#f7f7f7)\b/ig, 'background$1: var(--color-background)');
  
  // Borders & Shadows
  content = content.replace(/border(-color)?:\s*(.*?)#e5e5e5\b/ig, 'border$1: $2var(--color-border)');
  content = content.replace(/border(-top|-bottom|-left|-right):\s*(.*?)#e5e5e5\b/ig, 'border$1: $2var(--color-border)');
  content = content.replace(/box-shadow:\s*(.*?)#e5e5e5\b/ig, 'box-shadow: $1var(--color-border)');
  
  // Text colors
  content = content.replace(/color:\s*#3c3c3c\b/ig, 'color: var(--color-text-main)');
  content = content.replace(/color:\s*#4b4b4b\b/ig, 'color: var(--color-text-main)');
  content = content.replace(/color:\s*#777(777)?\b/ig, 'color: var(--color-text-secondary)');
  content = content.replace(/color:\s*#555(555)?\b/ig, 'color: var(--color-text-light)');
  content = content.replace(/color:\s*#888(888)?\b/ig, 'color: var(--color-text-light)');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed:', f);
  }
});
console.log('Done mapping hardcoded colors!');
