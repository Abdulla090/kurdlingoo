import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost' | 'outline' | 'disabled';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    onClick,
    disabled = false,
    className = '',
    ariaLabel,
    type = 'button'
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled || variant === 'disabled'}
            aria-label={ariaLabel}
            aria-disabled={disabled || variant === 'disabled'}
        >
            <span className="btn-face">
                {children}
            </span>
        </button>
    );
};

export default Button;
