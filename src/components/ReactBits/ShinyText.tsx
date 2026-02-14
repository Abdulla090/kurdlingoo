import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    color?: string;
    shineColor?: string;
    spread?: number;
    yoyo?: boolean;
    pauseOnHover?: boolean;
    direction?: 'left' | 'right';
    delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 2, className = '', color = '#b5b5b5', shineColor = '#ffffff', spread = 120, yoyo = false, pauseOnHover = false, direction = 'left', delay = 0 }) => {
    const [isPaused, setIsPaused] = useState(false);
    const progress = useMotionValue(0);
    const elapsedRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);
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
        <motion.span
            className={className}
            style={{
                display: 'inline-block',
                backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundPosition
            }}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            {text}
        </motion.span>
    );
};

export default ShinyText;
