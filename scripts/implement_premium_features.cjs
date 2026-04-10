const fs = require('fs');
const path = require('path');

const learnTsxPath = path.join(__dirname, '../src/pages/Learn/Learn.tsx');
let tsxContent = fs.readFileSync(learnTsxPath, 'utf8');

// 1. Add playPop utility
const popUtility = `
const playPopSound = () => {
    try {
        if (typeof window !== 'undefined') {
            if (navigator.vibrate) navigator.vibrate(15);
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContext) {
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
                gain.gain.setValueAtTime(0.3, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
                osc.start();
                osc.stop(ctx.currentTime + 0.08);
            }
        }
    } catch(e) {}
};
`;

if (!tsxContent.includes('playPopSound')) {
    tsxContent = tsxContent.replace('const Learn: React.FC = () => {', popUtility + '\nconst Learn: React.FC = () => {');
}

// 2. Modify map iteration to compute SVG paths
const lessonMapRegex = /const handleClick = \(e: React\.MouseEvent\) => \{[\s\S]*?className=\{`path-node/;

// Find index of learning path to inject next offsets
const nextOffsetLogic = `
                                    const nextGlobalIndex = globalIndex + 1;
                                    const nextXOffset = getDynamicOffset(nextGlobalIndex, amplitude);
                                    
                                    // True logic for determining path colors (Gold if completed, otherwise face color, gray if next is locked)
                                    // Next node tells us if the curve should be gray/dotted
                                    const isNextLocked = index + 1 < unit.lessons.length ? !isLessonUnlocked(unit.lessons[index + 1].id, unit.lessons) : true;
                                    const isNextCompleted = index + 1 < unit.lessons.length ? isLessonCompleted(unit.lessons[index + 1].id) : false;
                                    
                                    const pathColor = completed ? '#FFC800' : btnTheme.face;
                                    const nextDiffX = (nextXOffset - xOffset) * flip;

                                    const handleClick = (e: React.MouseEvent) => {
                                        playPopSound();
                                        if (isLocked) e.preventDefault();
                                    };

                                    const lessonPath = lesson.type === 'game' && lesson.gameId === 'neuromatch'
                                        ? '/neuromatch'
                                        : \`/lesson/\${lesson.id}\`;
                                        
                                    // Make spring stagger delay relative to absolute count (up to 15 nodes for UX)
                                    const staggerDelay = Math.min(index * 0.08, 1.5);
                                    
                                    const isLastLesson = index === unit.lessons.length - 1;

                                    return (
                                        <React.Fragment key={lesson.id}>
                                            <div className="path-node-wrapper" style={{ transform: \`translateX(\${xOffset * flip}px)\` }}>
                                                {/* Thick SVG Curve connection to the next node */}
                                                {!isLastLesson && (
                                                    <svg style={{ position: 'absolute', top: '50%', left: '50%', width: '0', height: '140px', overflow: 'visible', zIndex: -1, pointerEvents: 'none' }}>
                                                        <path 
                                                            d={\`M 0 0 C 0 80, \${nextDiffX} 60, \${nextDiffX} 140\`}
                                                            fill="none"
                                                            stroke={isNextLocked ? '#e5e7eb' : pathColor}
                                                            strokeWidth="18"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                                
                                                <Link`;

tsxContent = tsxContent.replace(/const handleClick = \(e: React\.MouseEvent\) => \{[\s\S]*?<Link/, nextOffsetLogic);

// Add stagger delay inline property
const nodeCircleStyleOld = `'--node-accent': completed ? '#FFC800' : btnTheme.face
                                                        } as React.CSSProperties}`;
                                                        
const nodeCircleStyleNew = `'--node-accent': completed ? '#FFC800' : btnTheme.face,
                                                            'animationDelay': \`\${staggerDelay}s\`
                                                        } as React.CSSProperties}`;
tsxContent = tsxContent.replace(nodeCircleStyleOld, nodeCircleStyleNew);


// Fix trophy connection
// For the trophy to connect natively, we can draw an SVG at the final node.
// We'll just draw it manually before the Trophy div if there's lessons
const pathNodeWrapperEnd = `</div>
                                        </React.Fragment>`;
                                        
const trophyRegex = /\{\/\* Trophy \*\/\}([\s\S]*?)<div className=\{`path-node-wrapper trophy-wrapper/;

if (tsxContent.match(trophyRegex)) {
    const trophySVGAdd = `{/* Trophy Connection Line */}
                                {unit.lessons.length > 0 && (
                                    <div className="path-node-wrapper" style={{ height: 0, minHeight: 0, margin: 0, transform: \`translateX(\${getDynamicOffset(globalIndex - 1 + 1 /* essentially previous node index */, window.innerWidth * CURVE_AMPLITUDE_RATIO > 75 ? 75 : window.innerWidth * CURVE_AMPLITUDE_RATIO) * (document.documentElement.dir === 'rtl' || document.body.dir === 'rtl' ? -1 : 1)}px)\` }}>
                                         <svg style={{ position: 'absolute', top: '-70px', left: '50%', width: '0', height: '140px', overflow: 'visible', zIndex: -1, pointerEvents: 'none' }}>
                                            <path 
                                                d={\`M 0 0 C 0 80, 0 60, 0 140\`}
                                                fill="none"
                                                stroke={isUnitCompleted(unit.lessons) ? '#FFC800' : '#e5e7eb'}
                                                strokeWidth="18"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                                {/* Trophy */}
                                <div className={\`path-node-wrapper trophy-wrapper`;
                                
    tsxContent = tsxContent.replace(/\{\/\* Trophy \*\/\}([\s\S]*?)<div className=\{`path-node-wrapper trophy-wrapper/, trophySVGAdd);
}


fs.writeFileSync(learnTsxPath, tsxContent);
console.log('Updated Learn.tsx wrapper SVG Paths and Hooks');

// 3. Modifying CSS for Spring Nodes, Fixed spacing, and Sticky Header
const learnCssPath = path.join(__dirname, '../src/pages/Learn/Learn.css');
let cssContent = fs.readFileSync(learnCssPath, 'utf8');

// The sticky header feature
const stickyHeaderCss = `
.unit-header {
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    backdrop-filter: blur(8px);
}
/* Ensure the guide button animates when pressed now that it's sticky */
.btn-guidebook {
    transition: transform 0.1s, filter 0.1s;
}
.btn-guidebook:active {
    transform: scale(0.95);
    filter: brightness(0.9);
}

/* Stagger Spring Animation definition */
@keyframes spring-pop {
    0% { transform: scale(0); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}

.path-node {
    animation: spring-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
    /* Delay gets injected via CSS var or inline style */
}
`;

if (!cssContent.includes('spring-pop')) {
    cssContent += "\n" + stickyHeaderCss;
}

// Ensure the vertical height of wrappers is strictly locked for mathematically accurate SVGs
const CSS_WRAPPER_FIX = `
.path-node-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    height: 140px; /* Locked precise size for SVG alignments */
    min-height: 140px;
    z-index: 2;
    position: relative;
}`;

cssContent = cssContent.replace(/\.path-node-wrapper\s*\{[^}]*\}/, CSS_WRAPPER_FIX.trim());


fs.writeFileSync(learnCssPath, cssContent);
console.log('Updated Learn.css Physics & Stickiness');
