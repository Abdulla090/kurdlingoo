const fs = require('fs');
const path = require('path');

const learnTsxPath = path.join(__dirname, '../src/pages/Learn/Learn.tsx');
let tsxContent = fs.readFileSync(learnTsxPath, 'utf8');

const BUTTON_COLORS = `// Unit color schemes exactly like phingo
const BUTTON_FACE_RIM_COLORS = [
    { face: '#58CC02', rim: '#58A700', bg: '#CE82FF' }, // Green
    { face: '#CE82FF', rim: '#A568CC', bg: '#1CB0F6' }, // Mint
    { face: '#1CB0F6', rim: '#1899D6', bg: '#FF4B4B' }, // Blue
    { face: '#FF4B4B', rim: '#EA2B2B', bg: '#FF9600' }, // Red
    { face: '#FF9600', rim: '#CC7800', bg: '#58CC02' }, // Orange
];

const CURVE_AMPLITUDE_RATIO = 0.18;
const ARC_FREQUENCY = Math.PI / 4;
const CURVE_TENSION = 1.25;

const getDynamicOffset = (globalIndex: number, amplitude: number) => {
    const baseSine = Math.sin(globalIndex * ARC_FREQUENCY);
    const adjustedSine = Math.sign(baseSine) * Math.pow(Math.abs(baseSine), CURVE_TENSION);
    return adjustedSine * amplitude * -1;
};`;

tsxContent = tsxContent.replace(/\/\/ Unit color schemes[\s\S]*?];/, BUTTON_COLORS);

const importsAdd = `import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Notebook } from '@phosphor-icons/react';`;

tsxContent = tsxContent.replace(/import React from 'react';/, importsAdd);

const mainRenderStartRegex = /<div className="learn-main">([\s\S]*?)<div className="sidebar-right">/m;

const newMainContent = `<div className="learn-main">
                {/* HomeMainButton pinned to top conceptually, or just rendered normally if we want it scrolling  */}
                {units.length > 0 && (() => {
                    const activeUnitIndex = 0; // Normally tracked via intersection observer, we simplify for now or you can add it
                    const theme = BUTTON_FACE_RIM_COLORS[0];
                    return (
                       <div className="home-main-button-container">
                           <button className="home-main-button" style={{ '--face-color': theme.face, '--rim-color': theme.rim } as React.CSSProperties}>
                               <div className="home-main-button-content">
                                   <div className="home-main-texts">
                                       <span className="unit-label">Unit {units[0]?.id || "1"}</span>
                                       <span className="section-title">{units[0]?.title || "Basics"}</span>
                                   </div>
                               </div>
                           </button>
                           <button className="home-side-button" style={{ '--face-color': theme.face, '--rim-color': theme.rim } as React.CSSProperties} onClick={() => navigate(\`/guidebook/\${units[0]?.id}\`)}>
                               <Notebook size={24} weight="fill" color="white" />
                           </button>
                       </div>
                    );
                })()}

                {units.filter((u: Unit) => !u.id.includes('intermediate')).map((unit, unitIndex) => {
                    const theme = BUTTON_FACE_RIM_COLORS[unitIndex % BUTTON_FACE_RIM_COLORS.length];

                    return (
                        <div className="unit-section" key={unit.id}>
                            {/* Phingo-style subtle divider (only after first unit) */}
                            {unitIndex > 0 && (
                                <div className="list-section-header">
                                    <div className="list-section-line" />
                                    <span className="list-section-title">{unit.title}</span>
                                    <div className="list-section-line" />
                                </div>
                            )}

                            {/* Learning Path */}
                            <div className="learning-path">
                                {/* Lesson Nodes */}
                                {unit.lessons.map((lesson, index) => {
                                    const Icon = getLessonIcon(lesson.title);
                                    const completed = isLessonCompleted(lesson.id);
                                    const unlocked = isLessonUnlocked(lesson.id, unit.lessons);
                                    const isCurrent = unlocked && !completed;
                                    const isLocked = !unlocked;

                                    // Phingo global index calculation (approximation since we don't have a flat map)
                                    let globalIndex = 0;
                                    for(let i=0; i<unitIndex; i++) globalIndex += units[i].lessons.length;
                                    globalIndex += index;

                                    // Dynamic zig-zag
                                    // Screen width approx 400px for calculation inside main area
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
                                                            '--node-bg': isLocked ? '#e5e7eb' : theme.face,
                                                            '--node-shadow': isLocked ? '#d1d5db' : theme.rim,
                                                            '--node-text': isLocked ? '#9ca3af' : 'white',
                                                            '--node-accent': theme.face
                                                        } as React.CSSProperties}
                                                    >
                                                        {isLocked ? (
                                                            <Lock size={32} weight="fill" color="var(--node-text)" />
                                                        ) : (
                                                            <Icon size={36} weight="fill" color="var(--node-text)" />
                                                        )}

                                                        {/* START Bubble for current lesson */}
                                                        {isCurrent && (
                                                            <div className="start-bubble" style={{ color: theme.rim, borderColor: theme.rim }}>
                                                                {t('start') || 'START'}
                                                            </div>
                                                        )}

                                                        {/* Crown sitting on top */}
                                                        {isCurrent && (
                                                            <div className="crown-badge">
                                                                <Crown size={42} weight="fill" color="#fbbf24" style={{ filter: 'drop-shadow(0 2px 0 #b45309)' }} />
                                                            </div>
                                                        )}

                                                        {/* Checkmark for completed */}
                                                        {completed && (
                                                            <div className="completed-badge" style={{ color: theme.face }}>
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

                                {/* Trophy */}
                                <div className={\`path-node-wrapper trophy-wrapper \${isUnitCompleted(unit.lessons) ? 'completed' : ''}\`}>
                                    <div className="path-node trophy-node">
                                        <div className="node-circle" style={{ '--node-bg': '#fbbf24', '--node-shadow': '#d97706' } as React.CSSProperties}>
                                            <Trophy
                                                size={48}
                                                weight="fill"
                                                color={isUnitCompleted(unit.lessons) ? "white" : "#d4d4d4"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ========== RIGHT SIDEBAR ========== */}
            <div className="sidebar-right">`;

tsxContent = tsxContent.replace(mainRenderStartRegex, newMainContent);

fs.writeFileSync(learnTsxPath, tsxContent);
console.log('Updated Learn.tsx');

const learnCssPath = path.join(__dirname, '../src/pages/Learn/Learn.css');
let cssContent = fs.readFileSync(learnCssPath, 'utf8');

const cssReplacements = `
/* ================ PHINGO EXACT MATCH STYLES ================ */
.learn-page {
    background: #ffffff !important;
}
.learn-page::before {
    display: none;
}

/* Home Main Button Phingo Style */
.home-main-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px auto 20px;
    width: 100%;
    max-width: 500px;
    gap: 0;
    filter: drop-shadow(0 4px 0 var(--rim-color, #1899D6));
}

.home-main-button {
    flex: 1;
    height: 78px;
    background: var(--face-color, #1CB0F6);
    border: none;
    border-radius: 13px 0 0 13px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-right: 2px solid rgba(0,0,0,0.1);
}

.home-main-button:active, .home-side-button:active {
    transform: translateY(4px);
    filter: drop-shadow(0 0px 0 var(--rim-color));
}

.home-main-texts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.unit-label {
    font-size: 1.1rem;
    color: #ecffde;
    font-weight: 600;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: white;
}

.home-side-button {
    width: 55px;
    height: 78px;
    background: var(--face-color, #1CB0F6);
    border: none;
    border-radius: 0 13px 13px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

/* Subtle Section Divider instead of big gradient block */
.list-section-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 96px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    background-color: #ffffff;
}

.list-section-line {
    height: 2px;
    width: 56px;
    background-color: #e5e5e5;
}

.list-section-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #afafaf;
}

.learning-path {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 20px 0;
    gap: 16px;
}

.path-node-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: -10px; /* Compress the list a bit */
}

/* Button exact size */
.node-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 8px 0 var(--node-shadow);
    background: var(--node-bg);
    color: var(--node-text);
    border: none;
    transform: translateY(0);
    transition: transform 0.1s, box-shadow 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.path-node:hover:not(.locked) .node-circle {
    transform: none; /* No hover lift, Native feel */
    box-shadow: 0 8px 0 var(--node-shadow);
    filter: none;
}

.path-node:active:not(.locked) .node-circle {
    transform: translateY(8px);
    box-shadow: 0 0 0 var(--node-shadow);
}

.path-node svg {
    filter: drop-shadow(0 2px 0 rgba(0,0,0,0.1));
}

.path-node:hover:not(.locked) .node-circle svg {
    transform: none;
}

.path-node:active:not(.locked) .node-circle svg {
    transform: none;
}
`;

cssContent = cssContent + "\n" + cssReplacements;

fs.writeFileSync(learnCssPath, cssContent);
console.log('Updated Learn.css');
