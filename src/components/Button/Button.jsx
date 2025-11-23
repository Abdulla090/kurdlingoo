import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    onClick,
    disabled = false,
    className = ''
}) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="btn-face">
                {children}
            </span>
        </button>
    );
};

export default Button;
