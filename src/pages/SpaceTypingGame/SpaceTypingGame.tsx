
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { gameLevels, GameLevel, SpaceWord } from '../../data/spaceGameWords';
import { SpaceshipSvg, AsteroidSvg, PlanetSaturnSvg, PlanetEarthSvg, PlanetRedSvg, PlanetIceSvg, StarSvg } from './SpaceAssets';
import './SpaceTypingGame.css';

// Asset components array for random selection
const ASSET_TYPES = [
    { component: AsteroidSvg, type: 'asteroid', scale: 0.8 },
    { component: AsteroidSvg, type: 'asteroid', scale: 1.0 },
    { component: PlanetSaturnSvg, type: 'planet', scale: 1.3 },
    { component: PlanetEarthSvg, type: 'planet', scale: 1.1 },
    { component: PlanetRedSvg, type: 'planet', scale: 1.0 },
    { component: PlanetIceSvg, type: 'planet', scale: 0.9 },
    { component: StarSvg, type: 'star', scale: 0.7 }
];

interface FallingObject {
    id: string;
    word: SpaceWord;
    x: number;
    y: number;
    baseX: number; // Store spawn X for oscillation
    rotation: number;
    rotationSpeed: number;
    oscillationOffset: number;
    oscillationSpeed: number;
    oscillationAmp: number;
    assetIndex: number;
    speed: number; // pixels per frame
    isActive: boolean;
    isDestroying: boolean;
    typedProgress: number;
    shakeTime: number;
}

interface Particle {
    id: string;
    x: number;
    y: number;
    color: string;
    velocity: { x: number; y: number };
    life: number;
    scale: number;
}

interface Shockwave {
    id: string;
    x: number;
    y: number;
    createdAt: number;
}

interface Laser {
    id: string;
    startX: number;
    startY: number;
    targetX: number;
    targetY: number;
    createdAt: number;
}

interface ScorePopup {
    id: string;
    x: number;
    y: number;
    score: number;
}

const SpaceTypingGame = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();

    // Game States
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'victory' | 'gameover'>('menu');
    const [selectedLevel, setSelectedLevel] = useState<GameLevel | null>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [fallingObjects, setFallingObjects] = useState<FallingObject[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [activeInfo, setActiveInfo] = useState<{ id: string | null }>({ id: null });

    // Visual States
    const [particles, setParticles] = useState<Particle[]>([]);
    const [shockwaves, setShockwaves] = useState<Shockwave[]>([]);
    const [lasers, setLasers] = useState<Laser[]>([]);
    const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
    const [wordsCompleted, setWordsCompleted] = useState(0);
    const [muzzleFlash, setMuzzleFlash] = useState(false);

    // Background Stars
    const [stars] = useState(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            layer: Math.floor(Math.random() * 3) + 1,
            delay: Math.random() * 5,
        }));
    });

    // Refs
    const gameLoopRef = useRef<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const gameCanvasRef = useRef<HTMLDivElement>(null);
    const lastTimeRef = useRef<number>(0);
    const fallingObjectsRef = useRef<FallingObject[]>([]);
    const livesRef = useRef(3);

    // Keep refs in sync
    useEffect(() => {
        fallingObjectsRef.current = fallingObjects;
    }, [fallingObjects]);

    useEffect(() => {
        livesRef.current = lives;
    }, [lives]);

    // Start Game
    const startGame = (level: GameLevel) => {
        setSelectedLevel(level);
        setGameState('playing');
        setScore(0);
        setLives(3);
        livesRef.current = 3;
        setFallingObjects([]);
        fallingObjectsRef.current = [];
        setCurrentWordIndex(0);
        setWordsCompleted(0);
        setActiveInfo({ id: null });
        setLasers([]);
        setParticles([]);
        setShockwaves([]);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    // Spawn Object
    const spawnObject = useCallback(() => {
        if (!selectedLevel || currentWordIndex >= selectedLevel.words.length) return;

        const word = selectedLevel.words[currentWordIndex];
        const canvasWidth = window.innerWidth;
        const minX = 100;
        const maxX = canvasWidth - 100;
        const spawnX = Math.random() * (maxX - minX) + minX;

        // Speed: pixels per frame at 60fps
        // Level speed 0.5 = slow (1.5 px/frame), 1.0 = fast (3 px/frame)
        const baseSpeed = 1.0 + selectedLevel.speed * 2.0;

        const newObject: FallingObject = {
            id: `obj-${Date.now()}-${currentWordIndex}`,
            word,
            x: spawnX,
            y: 50, // Start at top, visible immediately
            baseX: spawnX,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 2,
            oscillationOffset: Math.random() * Math.PI * 2,
            oscillationSpeed: 0.5 + Math.random() * 1.5,
            oscillationAmp: 30 + Math.random() * 40,
            assetIndex: Math.floor(Math.random() * ASSET_TYPES.length),
            speed: baseSpeed + (Math.random() - 0.5) * 0.5,
            isActive: false,
            isDestroying: false,
            typedProgress: 0,
            shakeTime: 0
        };

        setFallingObjects(prev => [...prev, newObject]);
        setCurrentWordIndex(prev => prev + 1);
    }, [selectedLevel, currentWordIndex]);

    const addLaser = (targetX: number, targetY: number) => {
        const spaceshipX = window.innerWidth / 2;
        const spaceshipY = window.innerHeight - 80;
        setMuzzleFlash(true);
        setTimeout(() => setMuzzleFlash(false), 50);
        setLasers(prev => [...prev, {
            id: `laser-${Date.now()}-${Math.random()}`,
            startX: spaceshipX,
            startY: spaceshipY,
            targetX,
            targetY,
            createdAt: Date.now()
        }]);
    };

    const destroyObjectEffect = (obj: FallingObject) => {
        const points = obj.word.difficulty === 'easy' ? 10 : obj.word.difficulty === 'medium' ? 20 : 30;
        setScore(s => s + points);
        setWordsCompleted(w => w + 1);

        const newParticles: Particle[] = [];
        const colors = ['#fbbf24', '#f87171', '#94a3b8', '#ffffff', '#f59e0b'];
        for (let i = 0; i < 25; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 3;
            newParticles.push({
                id: `p-${Date.now()}-${i}`,
                x: obj.x,
                y: obj.y,
                color: colors[Math.floor(Math.random() * colors.length)],
                velocity: { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed },
                life: 1.0,
                scale: Math.random() * 0.8 + 0.4
            });
        }
        setParticles(prev => [...prev, ...newParticles]);
        setShockwaves(prev => [...prev, { id: `sw-${Date.now()}`, x: obj.x, y: obj.y, createdAt: Date.now() }]);
        setScorePopups(prev => [...prev, { id: `sp-${Date.now()}`, x: obj.x, y: obj.y, score: points }]);
    };

    const processInput = useCallback((char: string) => {
        const currentObjects = fallingObjectsRef.current;
        const currentActive = currentObjects.find(o => o.id === activeInfo.id && !o.isDestroying);

        let targetId = activeInfo.id;
        let shouldFire = false;
        let targetPos = { x: 0, y: 0 };

        if (currentActive) {
            const requiredChar = currentActive.word.text[currentActive.typedProgress];
            if (char.toLowerCase() === requiredChar.toLowerCase()) {
                shouldFire = true;
                targetPos = { x: currentActive.x, y: currentActive.y };
            }
        } else {
            const candidates = currentObjects.filter(o =>
                !o.isDestroying &&
                o.y > 0 &&
                o.word.text[0].toLowerCase() === char.toLowerCase()
            );
            if (candidates.length > 0) {
                const target = candidates.sort((a, b) => b.y - a.y)[0];
                targetId = target.id;
                shouldFire = true;
                targetPos = { x: target.x, y: target.y };
            }
        }

        if (shouldFire && targetId) {
            addLaser(targetPos.x, targetPos.y);
            if (targetId !== activeInfo.id) setActiveInfo({ id: targetId });

            setFallingObjects(prev => prev.map(o => {
                if (o.id === targetId) {
                    const newProgress = o.typedProgress + 1;
                    if (newProgress >= o.word.text.length) {
                        destroyObjectEffect(o);
                        setActiveInfo({ id: null });
                        return { ...o, typedProgress: newProgress, isDestroying: true };
                    }
                    return { ...o, typedProgress: newProgress, shakeTime: Date.now() };
                }
                return o;
            }));
        } else if (currentActive) {
            setFallingObjects(prev => prev.map(o =>
                o.id === currentActive.id ? { ...o, shakeTime: Date.now() } : o
            ));
        }
    }, [activeInfo]);

    // Main Game Loop
    useEffect(() => {
        if (gameState !== 'playing') {
            lastTimeRef.current = 0;
            return;
        }

        let animationId: number;

        const loop = (time: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = time;
            const deltaTime = Math.min((time - lastTimeRef.current) / 16.67, 3); // Cap at 3x speed
            lastTimeRef.current = time;

            const now = Date.now();
            const canvasHeight = window.innerHeight;
            const floorY = canvasHeight - 150;

            // Update falling objects
            setFallingObjects(prev => {
                const updated: FallingObject[] = [];
                let lostLife = false;

                for (const obj of prev) {
                    if (obj.isDestroying) continue;

                    // Move down
                    const newY = obj.y + obj.speed * deltaTime;

                    // Oscillate X
                    const oscillation = Math.sin((now / 1000) * obj.oscillationSpeed + obj.oscillationOffset);
                    const newX = obj.baseX + oscillation * obj.oscillationAmp;

                    // Rotate
                    const newRotation = obj.rotation + obj.rotationSpeed * deltaTime;

                    // Check if hit floor
                    if (newY > floorY) {
                        lostLife = true;
                        continue; // Don't add to updated array
                    }

                    updated.push({
                        ...obj,
                        x: newX,
                        y: newY,
                        rotation: newRotation
                    });
                }

                if (lostLife) {
                    const currentLives = livesRef.current;
                    if (currentLives > 0) {
                        setLives(currentLives - 1);
                        livesRef.current = currentLives - 1;
                        if (currentLives - 1 <= 0) {
                            setGameState('gameover');
                        }
                    }
                }

                return updated;
            });

            // Update particles
            setParticles(prev => prev.map(p => ({
                ...p,
                x: p.x + p.velocity.x * deltaTime,
                y: p.y + p.velocity.y * deltaTime,
                life: p.life - 0.03 * deltaTime,
                velocity: { x: p.velocity.x * 0.98, y: p.velocity.y + 0.15 * deltaTime }
            })).filter(p => p.life > 0));

            // Clean up lasers and shockwaves
            setLasers(prev => prev.filter(l => now - l.createdAt < 150));
            setShockwaves(prev => prev.filter(s => now - s.createdAt < 500));

            animationId = requestAnimationFrame(loop);
            gameLoopRef.current = animationId;
        };

        animationId = requestAnimationFrame(loop);
        gameLoopRef.current = animationId;

        return () => cancelAnimationFrame(animationId);
    }, [gameState]);

    // Score popup cleanup
    useEffect(() => {
        if (scorePopups.length > 0) {
            const timer = setTimeout(() => setScorePopups(prev => prev.slice(1)), 1000);
            return () => clearTimeout(timer);
        }
    }, [scorePopups]);

    // Spawner
    useEffect(() => {
        if (gameState !== 'playing' || !selectedLevel) return;

        // Spawn first object immediately
        if (fallingObjects.length === 0 && currentWordIndex === 0) {
            spawnObject();
        }

        const interval = setInterval(() => {
            spawnObject();
        }, selectedLevel.spawnRate * 1000);

        return () => clearInterval(interval);
    }, [gameState, selectedLevel, spawnObject, fallingObjects.length, currentWordIndex]);

    // Keyboard Listener
    useEffect(() => {
        if (gameState !== 'playing') return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
                processInput(e.key);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [gameState, processInput]);

    // ==================== RENDER ====================

    // Menu Screen
    if (gameState === 'menu') {
        return (
            <div className="space-game">
                <div className="starfield">
                    {stars.map(star => (
                        <div
                            key={star.id}
                            className={`star layer-${star.layer}`}
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                animationDelay: `-${star.delay * 10}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="level-select-screen">
                    <div className="level-select-header">
                        <div className="level-select-title">🚀 Space Typing 🌟</div>
                        <div className="level-select-subtitle">
                            {language === 'ckb' ? 'ئاستێک هەڵبژێرە و دەست بە یاری بکە!' : 'Select a level and start playing!'}
                        </div>
                    </div>

                    <div className="level-grid">
                        {gameLevels.map((level, index) => (
                            <div
                                key={level.id}
                                className="level-card"
                                onClick={() => startGame(level)}
                            >
                                <div className="level-icon">
                                    {['🌟', '☄️', '🪐', '🌙', '🌌'][index]}
                                </div>
                                <div className="level-name">{level.name}</div>
                                <div className="level-name-ku">{level.nameKu}</div>
                                <div className="level-description">
                                    {language === 'ckb' ? level.descriptionKu : level.description}
                                </div>
                                <div className="level-meta">
                                    <span>📝 {level.words.length} {language === 'ckb' ? 'وشە' : 'words'}</span>
                                    <span>⚡ {level.speed < 0.7 ? (language === 'ckb' ? 'هێواش' : 'Slow') : level.speed < 0.9 ? (language === 'ckb' ? 'ناوەندی' : 'Medium') : (language === 'ckb' ? 'خێرا' : 'Fast')}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="back-to-home" onClick={() => navigate('/learn')}>
                        <ArrowLeft size={18} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                        {language === 'ckb' ? 'گەڕانەوە' : 'Back to Learn'}
                    </button>
                </div>
            </div>
        );
    }

    // Game Over / Victory Screen
    if (gameState === 'gameover' || gameState === 'victory') {
        const isVic = gameState === 'victory';
        return (
            <div className="space-game">
                <div className="starfield">
                    {stars.map(star => (
                        <div key={star.id} className={`star layer-${star.layer}`} style={{ left: `${star.x}%`, top: `${star.y}%` }} />
                    ))}
                </div>

                <div className="game-end-screen">
                    <div className="game-end-icon">{isVic ? '🏆' : '💥'}</div>
                    <h1 className={`game-end-title ${isVic ? 'victory' : 'game-over'}`}>
                        {isVic ? (language === 'ckb' ? 'سەرکەوتوو بوویت!' : 'Victory!') : (language === 'ckb' ? 'یاری کۆتایی هات!' : 'Game Over!')}
                    </h1>
                    <p className="game-end-score">
                        {language === 'ckb' ? 'خاڵەکانت:' : 'Your Score:'} {score}
                    </p>
                    <div className="game-end-buttons">
                        <button className="game-end-btn primary" onClick={() => selectedLevel && startGame(selectedLevel)}>
                            🔄 {language === 'ckb' ? 'دووبارە هەوڵ بدەوە' : 'Try Again'}
                        </button>
                        <button className="game-end-btn secondary" onClick={() => setGameState('menu')}>
                            📋 {language === 'ckb' ? 'ئاستەکان' : 'Levels'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Playing State
    const progress = selectedLevel ? (wordsCompleted / selectedLevel.words.length) * 100 : 0;

    return (
        <div className="space-game" onClick={() => inputRef.current?.focus()}>
            {/* Starfield */}
            <div className="starfield">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className={`star layer-${star.layer}`}
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            animationDelay: `-${star.delay * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="game-header">
                <div className="game-header-left">
                    <button className="back-btn" onClick={() => setGameState('menu')}>
                        <ArrowLeft size={20} />
                    </button>
                    <span className="game-title">
                        {selectedLevel ? (language === 'ckb' ? selectedLevel.nameKu : selectedLevel.name) : 'Space Typing'}
                    </span>
                </div>
                <div className="game-stats">
                    <div className="stat-box score">
                        <Star size={18} className="stat-icon" fill="#58cc02" color="#58cc02" />
                        <span className="stat-value">{score}</span>
                    </div>
                    <div className="stat-box lives">
                        <Heart size={18} className="stat-icon" fill="#ff4b4b" color="#ff4b4b" />
                        <span className="stat-value">{lives}</span>
                    </div>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="game-progress">
                <div className="game-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* Game Canvas */}
            <div className="game-canvas" ref={gameCanvasRef}>
                {/* Falling Objects */}
                {fallingObjects.map(obj => {
                    const AssetType = ASSET_TYPES[obj.assetIndex];
                    const AssetComponent = AssetType.component;
                    const isLocked = obj.id === activeInfo.id;
                    const typed = obj.word.text.substring(0, obj.typedProgress);
                    const untyped = obj.word.text.substring(obj.typedProgress);

                    return (
                        <div
                            key={obj.id}
                            className={`falling-object ${isLocked ? 'active' : ''} ${obj.isDestroying ? 'destroying' : ''}`}
                            style={{
                                left: obj.x,
                                top: obj.y,
                                transform: `translateX(-50%)`,
                            }}
                        >
                            <div className="object-word">
                                <span style={{ color: '#4ade80', textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}>{typed}</span>
                                <span style={{ color: 'white' }}>{untyped}</span>
                                <div className="object-translation">{obj.word.translation}</div>
                            </div>
                            <div
                                className="object-asset-wrapper"
                                style={{
                                    transform: `rotate(${obj.rotation}deg) scale(${AssetType.scale})`
                                }}
                            >
                                <AssetComponent className="game-asset" />
                            </div>
                        </div>
                    );
                })}

                {/* Particles */}
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.x,
                            top: p.y,
                            background: p.color,
                            width: `${10 * p.scale}px`,
                            height: `${10 * p.scale}px`,
                            opacity: p.life,
                        }}
                    />
                ))}

                {/* Shockwaves */}
                {shockwaves.map(s => (
                    <div key={s.id} className="shockwave" style={{ left: s.x, top: s.y }} />
                ))}

                {/* Lasers */}
                {lasers.map(l => {
                    const dx = l.targetX - l.startX;
                    const dy = l.targetY - l.startY;
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    const len = Math.sqrt(dx * dx + dy * dy);

                    return (
                        <div key={l.id} className="laser-beam" style={{
                            left: l.startX,
                            top: l.startY,
                            width: len,
                            height: 4,
                            transformOrigin: '0 50%',
                            transform: `rotate(${angle}deg)`
                        }} />
                    );
                })}

                {/* Score Popups */}
                {scorePopups.map(sp => (
                    <div key={sp.id} className="score-popup" style={{ left: sp.x, top: sp.y }}>
                        +{sp.score}
                    </div>
                ))}
            </div>

            {/* Spaceship */}
            <div className="spaceship-container">
                <div className={`muzzle-flash ${muzzleFlash ? 'active' : ''}`} />
                <div className={`spaceship-wrapper ${muzzleFlash ? 'firing' : ''}`}>
                    <SpaceshipSvg className="spaceship-svg" />
                </div>
            </div>

            {/* Hidden Input */}
            <input
                ref={inputRef}
                type="text"
                className="typing-input"
                style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
                autoComplete="off"
            />
        </div>
    );
};

export default SpaceTypingGame;
