import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
    to: number;
    from?: number;
    direction?: 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}

const CountUp: React.FC<CountUpProps> = ({ to, from = 0, direction = 'up', delay = 0, duration = 2, className = '', startWhen = true, separator = '', onStart, onEnd }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? to : from);
    const springValue = useSpring(motionValue, { damping: 20 + 40 * (1 / duration), stiffness: 100 * (1 / duration) });
    const isInView = useInView(ref, { once: true, margin: '0px' });

    const getDecimalPlaces = (num: number) => {
        const str = num.toString();
        if (str.includes('.')) { const d = str.split('.')[1]; if (parseInt(d) !== 0) return d.length; }
        return 0;
    };
    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

    const formatValue = useCallback((latest: number) => {
        const options: Intl.NumberFormatOptions = { useGrouping: !!separator, minimumFractionDigits: maxDecimals, maximumFractionDigits: maxDecimals };
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
        const unsub = springValue.on('change', (latest: number) => { if (ref.current) ref.current.textContent = formatValue(latest); });
        return () => unsub();
    }, [springValue, formatValue]);

    return <span className={className} ref={ref} />;
};

export default CountUp;
