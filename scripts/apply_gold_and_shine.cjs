const fs = require('fs');
const path = require('path');

// 1. Update Learn.tsx for Gold completed lessons
const learnTsxPath = path.join(__dirname, '../src/pages/Learn/Learn.tsx');
let tsxContent = fs.readFileSync(learnTsxPath, 'utf8');

const oldStyleConfig = `'--node-bg': isLocked ? '#e5e7eb' : btnTheme.face,
                                                            '--node-shadow': isLocked ? '#d1d5db' : btnTheme.rim,
                                                            '--node-text': isLocked ? '#9ca3af' : 'white',
                                                            '--node-accent': btnTheme.face`;

const newStyleConfig = `'--node-bg': isLocked ? '#e5e7eb' : (completed ? '#FFC800' : btnTheme.face),
                                                            '--node-shadow': isLocked ? '#d1d5db' : (completed ? '#D29600' : btnTheme.rim),
                                                            '--node-text': isLocked ? '#9ca3af' : 'white',
                                                            '--node-accent': completed ? '#FFC800' : btnTheme.face`;

tsxContent = tsxContent.replace(oldStyleConfig, newStyleConfig);

// Keep badge color matching the gold button
const oldBadge = `<div className="completed-badge" style={{ color: btnTheme.face }}>`;
const newBadge = `<div className="completed-badge" style={{ color: '#FFC800' }}>`;
tsxContent = tsxContent.replace(oldBadge, newBadge);

fs.writeFileSync(learnTsxPath, tsxContent);
console.log('Updated Learn.tsx with Gold properties');

// 2. Add diagonal shine to Learn.css
const learnCssPath = path.join(__dirname, '../src/pages/Learn/Learn.css');
let cssContent = fs.readFileSync(learnCssPath, 'utf8');

const shineCss = `
/* Light diagonal shining bar */
.node-circle::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 20%;
    width: 60%;
    height: 15px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    z-index: 1; /* Stay behind the icon */
    pointer-events: none;
    transform: rotate(-6deg);
}

/* Ensure the icon sits ON TOP of the shine */
.node-circle svg {
    z-index: 2;
    position: relative;
}`;

if (!cssContent.includes('.node-circle::after {') && !cssContent.includes('Light diagonal shining bar')) {
    cssContent += "\n" + shineCss;
    fs.writeFileSync(learnCssPath, cssContent);
    console.log('Updated Learn.css with Shine');
}
