import React from 'react';

interface ColorfulIconProps {
    emoji: string;
    size?: number | string;
    className?: string;
}

export const ColorfulIcon: React.FC<ColorfulIconProps> = ({ emoji, size = 32, className = '' }) => {
    if (!emoji) return null;
    
    // Clean string
    const cleanEmoji = emoji.trim();

    // In case the passed string isn't an emoji (e.g. it's already an img tag or something else)
    const isEmoji = /\p{Extended_Pictographic}/u.test(cleanEmoji);
    
    if (!isEmoji) {
        return <span className={className} style={{ fontSize: size }}>{cleanEmoji}</span>;
    }

    return (
        <span 
            className={`colorful-icon-wrapper ${className}`} 
            data-emoji={cleanEmoji} 
            style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: size,
                height: size
            }}
        >
            <img 
                src={`https://emojicdn.elk.sh/${encodeURIComponent(cleanEmoji)}?style=apple`}
                alt={cleanEmoji}
                aria-hidden="true"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15)) drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                    transform: 'scale(1.15)', // slightly enlarge it to fill its container
                }}
                loading="lazy"
                onError={(e) => {
                    // Fallback to text emoji if the CDN fails for any obscure ZWJ sequence
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.setAttribute('data-failed', 'true');
                }}
            />
            <style>
                {`
                    .colorful-icon-wrapper[data-failed="true"]::after {
                        content: attr(data-emoji);
                        font-size: 1.25em; 
                    }
                `}
            </style>
        </span>
    );
};
