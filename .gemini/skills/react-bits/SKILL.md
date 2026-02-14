---
name: React Bits - Ultimate Component Library
description: Complete skill for using React Bits - 121 animated, interactive React components with full source code access. Includes inline code for top 10 components and registry URLs for all others.
---

# React Bits - Ultimate Professional Component & Animation Skill

React Bits is an open-source collection of **121 premium UI components** — Text Animations, Animations/Effects, Backgrounds, and UI Components — available in 4 variants: JS+CSS, JS+Tailwind, TS+CSS, TS+Tailwind.

## Quick Start

### CLI Installation (Recommended)
```bash
# Install a single component via shadcn CLI
npx shadcn@latest add "https://reactbits.dev/r/<Component>-<LANG>-<STYLE>"

# Examples:
npx shadcn@latest add "https://reactbits.dev/r/SplitText-JS-CSS"
npx shadcn@latest add "https://reactbits.dev/r/SpotlightCard-TS-TW"

# Or via jsrepo:
npx jsrepo@latest add "https://reactbits.dev/r/SplitText-JS-CSS"
```

- `<LANG>`: `JS` or `TS`
- `<STYLE>`: `CSS` or `TW` (Tailwind)
- `<Component>`: PascalCase component name (e.g., `SplitText`, `AnimatedContent`)

### Fetching Source Code (For Manual Copy)
Each component's full source code is available as a JSON registry file:
```
https://reactbits.dev/r/<Component>-<LANG>-<STYLE>
```
The JSON contains: `files[]` array with `path` and `content` for each file (JSX/TSX + CSS), plus `dependencies[]`.

**To get ANY component's code, fetch its JSON and extract the `files[].content` fields.**

### Key Dependencies
| Dependency | Used By | Install |
|---|---|---|
| `gsap` + `@gsap/react` | SplitText, AnimatedContent, FadeContent, ScrollFloat, FallingText | `npm i gsap @gsap/react` |
| `motion` (Framer Motion) | BlurText, ShinyText, GradientText, RotatingText, DecryptedText, CountUp, Dock | `npm i motion` |
| `three` / `@react-three/fiber` | Ballpit, Cubes, Particles, ModelViewer | `npm i three @react-three/fiber` |
| `ogl` | Aurora, Iridescence, LiquidChrome | `npm i ogl` |

---

## Complete Component Registry (121 Components)

### Text Animations (23)
| Component | Description | Dependencies |
|---|---|---|
| `SplitText` | Splits text into chars/words for staggered entrance | gsap, @gsap/react |
| `BlurText` | Text starts blurred then crisply resolves | motion |
| `GradientText` | Animated gradient sweep across text | motion |
| `ShinyText` | Metallic sheen sweeps across text | motion |
| `DecryptedText` | Hacker-style decryption cycling random glyphs | motion |
| `RotatingText` | Cycles through phrases with 3D transitions | motion |
| `CountUp` | Animated number counter with formatting | motion |
| `ASCIIText` | Text with animated ASCII background | — |
| `CircularText` | Characters around a circle with rotation | — |
| `CurvedLoop` | Looping text along a customizable curve | gsap |
| `FallingText` | Characters fall with gravity + bounce | gsap, matter-js |
| `FuzzyText` | Vibrating fuzzy text with hover intensity | — |
| `GlitchText` | RGB split and distortion glitch effect | — |
| `ScrambledText` | Cursor-position distortion effect | motion |
| `ScrollFloat` | Text gently floats on scroll | gsap |
| `ScrollReveal` | Text unblurs and reveals on scroll | gsap |
| `ScrollVelocity` | Marquee speed scales with scroll velocity | motion |
| `Shuffle` | Characters shuffle before settling | motion |
| `TextCursor` | Text follows cursor leaving trail | — |
| `TextPressure` | Characters scale based on pointer pressure | — |
| `TextType` | Typewriter with blinking cursor | — |
| `TrueFocus` | Dynamic blur/clarity over words | motion |
| `VariableProximity` | Letter styling changes with pointer distance | motion |

### Animations & Effects (28)
| Component | Description | Dependencies |
|---|---|---|
| `AnimatedContent` | Animate children on scroll/mount | gsap |
| `FadeContent` | Directional fade/slide entrance | gsap |
| `ClickSpark` | Particle spark bursts at click position | — |
| `Magnet` | Elements magnetically follow cursor | — |
| `StarBorder` | Animated sparkle border orbiting content | — |
| `Antigravity` | 3D particle field repelling from cursor | three |
| `BlobCursor` | Organic blob following pointer | — |
| `Crosshair` | Custom crosshair cursor | — |
| `Cubes` | 3D rotating cube cluster | three |
| `ElectricBorder` | Jittery electric energy border | — |
| `GhostCursor` | Semi-transparent trailing cursor | — |
| `GlareHover` | Moving glare highlight on hover | — |
| `GradualBlur` | Progressive un-blur on scroll | gsap |
| `ImageTrail` | Cursor-based image trail | gsap |
| `LaserFlow` | Dynamic laser light on surface | — |
| `LogoLoop` | Continuous logo marquee | motion |
| `MagnetLines` | Field lines bend toward cursor | — |
| `MetaBalls` | Liquid metaball blobs | — |
| `MetallicPaint` | Liquid metallic paint shader | — |
| `Noise` | Animated film grain overlay | — |
| `OrbitImages` | SVG path orbiting images | gsap |
| `PixelTrail` | Pixelated cursor trail | — |
| `PixelTransition` | Pixel dissolve transition | gsap |
| `Ribbons` | Flowing ribbons/cursor trail | — |
| `ShapeBlur` | Morphing blurred geometric shape | — |
| `SplashCursor` | Liquid splash at cursor | — |
| `StickerPeel` | Sticker corner lift + peel | gsap |
| `TargetCursor` | Cursor with locking corners | motion |

### UI Components (35)
| Component | Description | Dependencies |
|---|---|---|
| `SpotlightCard` | Spotlight follows cursor on card | — |
| `TiltedCard` | 3D perspective tilt on hover | — |
| `Dock` | macOS magnifying dock | motion |
| `Carousel` | Responsive carousel with gestures | gsap |
| `AnimatedList` | Staggered list item reveals | motion |
| `BounceCards` | Cards bounce in on mount | gsap |
| `BubbleMenu` | Floating circular expanding menu | motion |
| `CardNav` | Expandable navigation with panels | motion |
| `CardSwap` | Cards animate position swapping | motion |
| `ChromaGrid` | Grayscale tiles reveal colors on hover | — |
| `CircularGallery` | Circular orbit rotating gallery | ogl |
| `Counter` | Animated counter with easing | motion |
| `DecayCard` | Hover parallax with disintegration | three |
| `DomeGallery` | 3D dome gallery | three |
| `ElasticSlider` | Elastic stretching slider | motion |
| `FlowingMenu` | Liquid flowing menu indicator | gsap |
| `FluidGlass` | Glassmorphism with liquid distortion | — |
| `FlyingPosters` | 3D posters rotate on scroll | ogl |
| `Folder` | Interactive folder opens to reveal content | motion |
| `GlassIcons` | Frosted glass icon set | — |
| `GlassSurface` | Apple-style glass surface | — |
| `GooeyNav` | Gooey blob navigation transitions | — |
| `InfiniteMenu` | Horizontally looping menu | gsap |
| `Lanyard` | Swinging 3D lanyard/badge | three |
| `MagicBento` | Interactive bento grid tiles | motion |
| `Masonry` | Responsive masonry layout | — |
| `ModelViewer` | Three.js model viewer | three |
| `PillNav` | Pill nav with sliding highlight | motion |
| `PixelCard` | Pixel expansion reveal card | — |
| `ProfileCard` | Animated glare profile card | — |
| `ReflectiveCard` | Webcam reflection card | — |
| `ScrollStack` | Overlapping cards on scroll | gsap |
| `Stack` | Layered swipe stack | motion |
| `StaggeredMenu` | Staggered menu animations | motion |
| `Stepper` | Multi-step progress indicator | motion |

### Backgrounds (35)
| Component | Description | Dependencies |
|---|---|---|
| `Aurora` | Flowing aurora gradient | ogl |
| `Particles` | Configurable particle system | three |
| `Squares` | Animated scaling squares | — |
| `LetterGlitch` | Matrix-style letter animation | — |
| `Balatro` | Balatro shader, interactive | — |
| `Ballpit` | Physics ball pit simulation | three |
| `Beams` | Crossing animated ribbons | — |
| `ColorBends` | Vibrant flowing color bends | — |
| `DarkVeil` | Dark background with animation | — |
| `Dither` | Retro dithered noise shader | — |
| `DotGrid` | Animated dot grid with cursor | — |
| `FaultyTerminal` | CRT scanline effect | — |
| `FloatingLines` | 3D lines reacting to cursor | three |
| `Galaxy` | Parallax starfield | — |
| `GradientBlinds` | Gradient blinds with spotlight | — |
| `Grainient` | Grainy gradient swirls | — |
| `GridDistortion` | Warped grid reacting to cursor | ogl |
| `GridMotion` | Perspective grid lines | — |
| `GridScan` | 3D grid scan effect | three |
| `Hyperspeed` | Hyperspace lines on click | ogl |
| `Iridescence` | Iridescent shifting waves | ogl |
| `Lightning` | Procedural lightning bolts | — |
| `LightPillar` | Vertical pillar of light | — |
| `LightRays` | Volumetric light rays | — |
| `LiquidChrome` | Liquid metallic chrome | ogl |
| `LiquidEther` | Interactive liquid shader | — |
| `Orb` | Floating energy orb | — |
| `PixelBlast` | Exploding pixel bursts | — |
| `PixelSnow` | Falling pixelated snow | — |
| `Plasma` | Organic plasma gradients | — |
| `Prism` | Rotating prism | three |
| `PrismaticBurst` | Burst of light rays | — |
| `RippleGrid` | Grid with ripple animation | — |
| `Silk` | Smooth waves background | — |
| `Threads` | Animated fabric-like lines | — |
| `Waves` | Layered wave patterns | — |

---

## INLINE SOURCE CODE — Top 10 Most Popular Components

### 1. SpotlightCard
**Dependencies:** None
**CSS File: `SpotlightCard.css`**
```css
.card-spotlight {
  position: relative;
  border-radius: 1.5rem;
  border: 1px solid #222;
  background-color: #111;
  padding: 2rem;
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: rgba(255, 255, 255, 0.05);
}
.card-spotlight::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.card-spotlight:hover::before,
.card-spotlight:focus-within::before {
  opacity: 0.6;
}
```
**JSX File: `SpotlightCard.jsx`**
```jsx
import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    divRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    divRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };
  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};
export default SpotlightCard;
```
**Usage:**
```jsx
<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <h2>Premium Card</h2>
  <p>Hover to see the spotlight effect</p>
</SpotlightCard>
```

---

### 2. StarBorder
**Dependencies:** None
**CSS File: `StarBorder.css`**
```css
.star-border-container {
  display: inline-block;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.border-gradient-bottom {
  position: absolute;
  width: 300%; height: 50%;
  opacity: 0.7;
  bottom: -12px; right: -250%;
  border-radius: 50%;
  animation: star-movement-bottom linear infinite alternate;
  z-index: 0;
}
.border-gradient-top {
  position: absolute;
  opacity: 0.7;
  width: 300%; height: 50%;
  top: -12px; left: -250%;
  border-radius: 50%;
  animation: star-movement-top linear infinite alternate;
  z-index: 0;
}
.inner-content {
  position: relative;
  border: 1px solid #222;
  background: #000;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 16px 26px;
  border-radius: 20px;
  z-index: 1;
}
@keyframes star-movement-bottom {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(-100%, 0%); opacity: 0; }
}
@keyframes star-movement-top {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(100%, 0%); opacity: 0; }
}
```
**JSX File: `StarBorder.jsx`**
```jsx
import './StarBorder.css';

const StarBorder = ({ as: Component = 'button', className = '', color = 'white', speed = '6s', thickness = 1, children, ...rest }) => {
  return (
    <Component className={`star-border-container ${className}`} style={{ padding: `${thickness}px 0`, ...rest.style }} {...rest}>
      <div className="border-gradient-bottom" style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }} />
      <div className="border-gradient-top" style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }} />
      <div className="inner-content">{children}</div>
    </Component>
  );
};
export default StarBorder;
```

---

### 3. ClickSpark
**Dependencies:** None
```jsx
import { useRef, useEffect, useCallback } from 'react';

const ClickSpark = ({ sparkColor = '#fff', sparkSize = 10, sparkRadius = 15, sparkCount = 8, duration = 400, easing = 'ease-out', extraScale = 1.0, children }) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const resizeCanvas = () => { const { width, height } = parent.getBoundingClientRect(); canvas.width = width; canvas.height = height; };
    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(parent);
    resizeCanvas();
    return () => ro.disconnect();
  }, []);

  const easeFunc = useCallback((t) => {
    switch (easing) {
      case 'linear': return t;
      case 'ease-in': return t * t;
      case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default: return t * (2 - t);
    }
  }, [easing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;
        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        return true;
      });
      animationId = requestAnimationFrame(draw);
    };
    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const now = performance.now();
    sparksRef.current.push(...Array.from({ length: sparkCount }, (_, i) => ({ x, y, angle: (2 * Math.PI * i) / sparkCount, startTime: now })));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} onClick={handleClick}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', userSelect: 'none', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />
      {children}
    </div>
  );
};
export default ClickSpark;
```

---

### 4. CountUp
**Dependencies:** `motion`
```jsx
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({ to, from = 0, direction = 'up', delay = 0, duration = 2, className = '', startWhen = true, separator = '', onStart, onEnd }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const springValue = useSpring(motionValue, { damping: 20 + 40 * (1 / duration), stiffness: 100 * (1 / duration) });
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const maxDecimals = Math.max(...[from, to].map(n => { const s = n.toString(); return s.includes('.') ? s.split('.')[1].length : 0; }));

  const formatValue = useCallback((latest) => {
    const options = { useGrouping: !!separator, minimumFractionDigits: maxDecimals, maximumFractionDigits: maxDecimals };
    const formatted = Intl.NumberFormat('en-US', options).format(latest);
    return separator ? formatted.replace(/,/g, separator) : formatted;
  }, [maxDecimals, separator]);

  useEffect(() => { if (ref.current) ref.current.textContent = formatValue(direction === 'down' ? to : from); }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.();
      const t1 = setTimeout(() => motionValue.set(direction === 'down' ? from : to), delay * 1000);
      const t2 = setTimeout(() => onEnd?.(), (delay + duration) * 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => { if (ref.current) ref.current.textContent = formatValue(latest); });
    return () => unsub();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
```
**Usage:** `<CountUp from={0} to={1000} separator="," duration={2} />`

---

### 5. GradientText
**Dependencies:** `motion`
**CSS File: `GradientText.css`**
```css
.animated-gradient-text {
  position: relative; margin: 0 auto; display: flex; max-width: fit-content;
  flex-direction: row; align-items: center; justify-content: center;
  border-radius: 1.25rem; font-weight: 500; backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease-out; overflow: hidden; cursor: pointer;
}
.animated-gradient-text.with-border { padding: 0.35rem 0.75rem; }
.gradient-overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit; z-index: 0; pointer-events: none;
}
.gradient-overlay::before {
  content: ''; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  border-radius: inherit; width: calc(100% - 2px); height: calc(100% - 2px);
  background-color: #060010; z-index: -1;
}
.text-content {
  display: inline-block; position: relative; z-index: 2;
  background-clip: text; -webkit-background-clip: text; color: transparent;
}
```
**JSX File: `GradientText.jsx`**
```jsx
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './GradientText.css';

export default function GradientText({ children, className = '', colors = ['#5227FF', '#FF9FFC', '#B19EEF'], animationSpeed = 8, showBorder = false, direction = 'horizontal', pauseOnHover = false, yoyo = true }) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) { lastTimeRef.current = null; return; }
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    const dt = time - lastTimeRef.current; lastTimeRef.current = time; elapsedRef.current += dt;
    if (yoyo) {
      const ct = elapsedRef.current % (animationDuration * 2);
      progress.set(ct < animationDuration ? (ct / animationDuration) * 100 : 100 - ((ct - animationDuration) / animationDuration) * 100);
    } else { progress.set((elapsedRef.current / animationDuration) * 100); }
  });

  useEffect(() => { elapsedRef.current = 0; progress.set(0); }, [animationSpeed, progress, yoyo]);

  const backgroundPosition = useTransform(progress, (p) => direction === 'vertical' ? `50% ${p}%` : `${p}% 50%`);
  const gradientAngle = direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  const gradientColors = [...colors, colors[0]].join(', ');
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'vertical' ? '100% 300%' : '300% 100%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)} onMouseLeave={() => pauseOnHover && setIsPaused(false)}>
      {showBorder && <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />}
      <motion.div className="text-content" style={{ ...gradientStyle, backgroundPosition }}>{children}</motion.div>
    </motion.div>
  );
}
```
**Usage:** `<GradientText colors={['#ff6b6b', '#feca57', '#48dbfb']}>Hello World</GradientText>`

---

### 6. ShinyText
**Dependencies:** `motion`
```jsx
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

const ShinyText = ({ text, disabled = false, speed = 2, className = '', color = '#b5b5b5', shineColor = '#ffffff', spread = 120, yoyo = false, pauseOnHover = false, direction = 'left', delay = 0 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);
  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame((time) => {
    if (disabled || isPaused) { lastTimeRef.current = null; return; }
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    const dt = time - lastTimeRef.current; lastTimeRef.current = time; elapsedRef.current += dt;
    const cycleDuration = animationDuration + delayDuration;
    if (yoyo) {
      const ct = elapsedRef.current % (cycleDuration * 2);
      if (ct < animationDuration) { const p = (ct / animationDuration) * 100; progress.set(directionRef.current === 1 ? p : 100 - p); }
      else if (ct < cycleDuration) { progress.set(directionRef.current === 1 ? 100 : 0); }
      else if (ct < cycleDuration + animationDuration) { const p = 100 - ((ct - cycleDuration) / animationDuration) * 100; progress.set(directionRef.current === 1 ? p : 100 - p); }
      else { progress.set(directionRef.current === 1 ? 0 : 100); }
    } else {
      const ct = elapsedRef.current % cycleDuration;
      if (ct < animationDuration) { const p = (ct / animationDuration) * 100; progress.set(directionRef.current === 1 ? p : 100 - p); }
      else { progress.set(directionRef.current === 1 ? 100 : 0); }
    }
  });

  useEffect(() => { directionRef.current = direction === 'left' ? 1 : -1; elapsedRef.current = 0; progress.set(0); }, [direction]);
  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  return (
    <motion.span className={`shiny-text ${className}`} style={{ display: 'inline-block', backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundPosition }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)} onMouseLeave={() => pauseOnHover && setIsPaused(false)}>
      {text}
    </motion.span>
  );
};
export default ShinyText;
```
**Usage:** `<ShinyText text="Shiny" speed={3} />`

---

### 7. AnimatedContent
**Dependencies:** `gsap`
```jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({ children, distance = 100, direction = 'vertical', reverse = false, duration = 0.8, ease = 'power3.out', initialOpacity = 0, animateOpacity = true, scale = 1, threshold = 0.1, delay = 0, className = '', ...props }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    gsap.set(el, { [axis]: offset, scale, opacity: animateOpacity ? initialOpacity : 1, visibility: 'visible' });
    const tl = gsap.timeline({ paused: true, delay });
    tl.to(el, { [axis]: 0, scale: 1, opacity: 1, duration, ease });
    const st = ScrollTrigger.create({ trigger: el, start: `top ${(1 - threshold) * 100}%`, once: true, onEnter: () => tl.play() });
    return () => { st.kill(); tl.kill(); };
  }, [distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay]);
  return <div ref={ref} className={className} style={{ visibility: 'hidden' }} {...props}>{children}</div>;
};
export default AnimatedContent;
```
**Usage:** `<AnimatedContent distance={80} direction="vertical"><h1>Animate Me</h1></AnimatedContent>`

---

### 8. FadeContent
**Dependencies:** `gsap`
```jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({ children, blur = false, duration = 1000, ease = 'power2.out', delay = 0, threshold = 0.1, initialOpacity = 0, className = '', style, ...props }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const getSeconds = (v) => (typeof v === 'number' && v > 10 ? v / 1000 : v);
    gsap.set(el, { autoAlpha: initialOpacity, filter: blur ? 'blur(10px)' : 'blur(0px)' });
    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) });
    tl.to(el, { autoAlpha: 1, filter: 'blur(0px)', duration: getSeconds(duration), ease });
    const st = ScrollTrigger.create({ trigger: el, start: `top ${(1 - threshold) * 100}%`, once: true, onEnter: () => tl.play() });
    return () => { st.kill(); tl.kill(); gsap.killTweensOf(el); };
  }, []);
  return <div ref={ref} className={className} style={style} {...props}>{children}</div>;
};
export default FadeContent;
```

---

### 9. BlurText
**Dependencies:** `motion`
*Fetch full code:* `https://reactbits.dev/r/BlurText-JS-CSS`
```jsx
// Usage Example:
import BlurText from './BlurText';
<BlurText text="Hello World" delay={150} animateBy="words" direction="top" />
```

### 10. DecryptedText
**Dependencies:** `motion`
*Fetch full code:* `https://reactbits.dev/r/DecryptedText-JS-CSS`
```jsx
// Usage Example:
import DecryptedText from './DecryptedText';
<DecryptedText text="Secret Message" speed={50} maxIterations={10} animateOn="view" />
```

---

## Best Practices

### Performance
- Lazy-load heavy components (Particles, Aurora, Ballpit) with `React.lazy()` + `Suspense`
- Use `will-change: transform` sparingly — React Bits components handle this internally
- Prefer CSS-variant components over Tailwind when bundle size matters

### Composition Patterns
```jsx
// Layer multiple effects
<ClickSpark sparkColor="#00e5ff">
  <SpotlightCard>
    <AnimatedContent distance={50}>
      <GradientText colors={['#ff6b6b', '#feca57']}>
        <CountUp to={9999} separator="," />
      </GradientText>
    </AnimatedContent>
  </SpotlightCard>
</ClickSpark>
```

### Accessibility
- Most components include `aria-hidden` for decorative elements
- Screen-reader-only text is provided for animated text components
- Always test with keyboard navigation

## Resources
- **Documentation:** https://reactbits.dev
- **GitHub:** https://github.com/DavidHDev/react-bits
- **LLM Reference:** https://reactbits.dev/llms.txt
- **Component Registry Pattern:** `https://reactbits.dev/r/{Component}-{JS|TS}-{CSS|TW}`
