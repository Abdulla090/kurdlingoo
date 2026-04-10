const fs = require('fs');
const path = require('path');

const learnTsxPath = path.join(__dirname, '../src/pages/Learn/Learn.tsx');
let tsxContent = fs.readFileSync(learnTsxPath, 'utf8');

// 1. ADD THEME COLORS CONSTANTS
const newThemeLogic = `// Unit color schemes
const UNIT_THEMES = [
    { gradient: 'linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)', color: '#1a73e8', shadow: '#1557b0' },
    { gradient: 'linear-gradient(135deg, #ff9600 0%, #cc7800 100%)', color: '#ff9600', shadow: '#cc7800' },
    { gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: '#ef4444', shadow: '#b91c1c' },
    { gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', color: '#a855f7', shadow: '#7c3aed' },
    { gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: '#f59e0b', shadow: '#b45309' },
];

const BUTTON_FACE_RIM_COLORS = [
    { face: '#58CC02', rim: '#58A700' }, // Green
    { face: '#CE82FF', rim: '#A568CC' }, // Mint
    { face: '#1CB0F6', rim: '#1899D6' }, // Blue
    { face: '#FF4B4B', rim: '#EA2B2B' }, // Red
    { face: '#FF9600', rim: '#CC7800' }, // Orange
];

const CURVE_AMPLITUDE_RATIO = 0.18;
const ARC_FREQUENCY = Math.PI / 4;
const CURVE_TENSION = 1.25;

const getDynamicOffset = (globalIndex: number, amplitude: number) => {
    const baseSine = Math.sin(globalIndex * ARC_FREQUENCY);
    const adjustedSine = Math.sign(baseSine) * Math.pow(Math.abs(baseSine), CURVE_TENSION);
    return adjustedSine * amplitude * -1;
};`;

tsxContent = tsxContent.replace(/\/\/ Unit color schemes[\s\S]*?];/, newThemeLogic);


// 2. REPLACE THE LESSON MAPPER
const lessonMapRegex = /\{unit\.lessons\.map\(\(lesson, index\) => \{([\s\S]*?)\{\/\* Trophy \*\//;

const newLessonMap = `{unit.lessons.map((lesson, index) => {
                                    const Icon = getLessonIcon(lesson.title);
                                    const completed = isLessonCompleted(lesson.id);
                                    const unlocked = isLessonUnlocked(lesson.id, unit.lessons);
                                    const isCurrent = unlocked && !completed;
                                    const isLocked = !unlocked;

                                    // Phingo global index calculation (approximation)
                                    let globalIndex = 0;
                                    for(let i=0; i<unitIndex; i++) globalIndex += units[i].lessons.length;
                                    globalIndex += index;

                                    const amplitude = Math.min(window.innerWidth * CURVE_AMPLITUDE_RATIO, 75);
                                    const xOffset = getDynamicOffset(globalIndex, amplitude);
                                    const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
                                    const flip = isRTL ? -1 : 1;

                                    const handleClick = (e: React.MouseEvent) => {
                                        if (isLocked) e.preventDefault();
                                    };

                                    const lessonPath = lesson.type === 'game' && lesson.gameId === 'neuromatch'
                                        ? '/neuromatch'
                                        : \`/lesson/\${lesson.id}\`;
                                        
                                    // Use mobile math physics button theme
                                    const btnTheme = BUTTON_FACE_RIM_COLORS[unitIndex % BUTTON_FACE_RIM_COLORS.length];

                                    return (
                                        <React.Fragment key={lesson.id}>
                                            <div className="path-node-wrapper" style={{ transform: \`translateX(\${xOffset * flip}px)\` }}>
                                                <Link
                                                    ref={(lastCompletedId ? lesson.id === lastCompletedId : isCurrent) ? activeNodeRef : null}
                                                    to={isLocked ? '#' : lessonPath}
                                                    className={\`path-node \${isCurrent ? 'current' : ''} \${isLocked ? 'locked' : ''} \${completed ? 'completed' : ''}\`}
                                                    onClick={handleClick}
                                                    aria-disabled={isLocked}
                                                >
                                                    <div
                                                        className="node-circle"
                                                        style={{
                                                            '--node-bg': isLocked ? '#e5e7eb' : btnTheme.face,
                                                            '--node-shadow': isLocked ? '#d1d5db' : btnTheme.rim,
                                                            '--node-text': isLocked ? '#9ca3af' : 'white',
                                                            '--node-accent': btnTheme.face
                                                        } as React.CSSProperties}
                                                    >
                                                        {isLocked ? (
                                                            <Lock size={32} weight="fill" color="var(--node-text)" />
                                                        ) : (
                                                            <Icon size={36} weight="fill" color="var(--node-text)" />
                                                        )}

                                                        {isCurrent && (
                                                            <div className="start-bubble" style={{ color: btnTheme.rim, borderColor: btnTheme.rim }}>
                                                                {t('start') || 'START'}
                                                            </div>
                                                        )}

                                                        {isCurrent && (
                                                            <div className="crown-badge">
                                                                <Crown size={42} weight="fill" color="#fbbf24" style={{ filter: 'drop-shadow(0 2px 0 #b45309)' }} />
                                                            </div>
                                                        )}

                                                        {completed && (
                                                            <div className="completed-badge" style={{ color: btnTheme.face }}>
                                                                <CheckCircle size={24} weight="fill" color="currentColor" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="node-tooltip">{lesson.title}</div>
                                                </Link>
                                            </div>
                                        </React.Fragment>
                                    );
                                })}

                                {/* Trophy */`;

tsxContent = tsxContent.replace(lessonMapRegex, newLessonMap);
fs.writeFileSync(learnTsxPath, tsxContent);
console.log('Updated Learn.tsx wrapper map');

// 3. UPDATE Learn.css ONLY FOR NODE PHYSICS!
const learnCssPath = path.join(__dirname, '../src/pages/Learn/Learn.css');
let cssContent = fs.readFileSync(learnCssPath, 'utf8');

const cssAdditions = `
/* ================ PHINGO Exact Math Nodes Override ================ */
.path-snake {
    display: none !important; /* Hide old SVG snakes since we use phingo math */
}

.path-node-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: -10px;
    z-index: 2;
    position: relative;
}

.node-circle {
    width: 80px !important;
    height: 80px !important;
    border-radius: 50% !important;
    box-shadow: 0 8px 0 var(--node-shadow) !important;
    background: var(--node-bg) !important;
    color: var(--node-text) !important;
    border: none !important;
    transform: translateY(0) !important;
    transition: transform 0.1s, box-shadow 0.1s !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.path-node:hover:not(.locked) .node-circle {
    transform: none !important;
    box-shadow: 0 8px 0 var(--node-shadow) !important;
    filter: none !important;
}

.path-node:active:not(.locked) .node-circle {
    transform: translateY(8px) !important;
    box-shadow: 0 0 0 var(--node-shadow) !important;
}

.path-node svg {
    filter: drop-shadow(0 2px 0 rgba(0,0,0,0.1));
}

.path-node:hover:not(.locked) .node-circle svg,
.path-node:active:not(.locked) .node-circle svg {
    transform: none !important;
}

/* Remove old left/right offsets because we use exact inline translates now! */
.path-node.left, .path-node.right {
    transform: none !important;
}
.path-node.left:hover, .path-node.right:hover {
    transform: none !important;
}
`;

if (!cssContent.includes('.path-node-wrapper')) {
    cssContent += "\n" + cssAdditions;
    fs.writeFileSync(learnCssPath, cssContent);
    console.log('Updated Learn.css Physics');
}
