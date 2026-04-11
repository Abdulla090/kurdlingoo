const fs = require('fs');
let css = fs.readFileSync('src/pages/Lesson/Lesson.css', 'utf8');

// replace cultural text
css = css.replace(
    /background: linear-gradient\(135deg, #fef3c7, #fde68a\);\s*padding: var\(--spacing-lg\);\s*border-radius: var\(--radius-lg\);\s*margin-bottom: var\(--spacing-xl\);\s*border: 2px solid #f59e0b;/g,
    `background: var(--color-surface-variant);\n    padding: var(--spacing-lg);\n    border-radius: var(--radius-lg);\n    margin-bottom: var(--spacing-xl);\n    border: 2px solid var(--color-warning);`
);

// properly duplicate .dark-blue-mode classes starting with pronunciation
css = css.replace(/\.dark-blue-mode (\.pronunciation[a-zA-Z0-9_-]*)/g, '.dark-mode $1, \n.dark-blue-mode $1');

fs.writeFileSync('src/pages/Lesson/Lesson.css', css);
console.log("Done");
