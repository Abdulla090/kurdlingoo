import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Layout.css';

const BottomNav = () => {
    const { t } = useLanguage();

    // Simple clean icons
    const navItems = [
        {
            id: 'learn',
            label: t('learn'),
            path: '/learn',
            icon: (isActive: boolean) => (
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L4 14V28H12V20H20V28H28V14L16 4Z"
                        fill={isActive ? '#1cb0f6' : '#b0b0b0'} />
                    <path d="M12 20H20V28H12V20Z"
                        fill={isActive ? '#0a8fd9' : '#909090'} />
                </svg>
            )
        },
        {
            id: 'shop',
            label: t('shop'),
            path: '/shop',
            icon: (isActive: boolean) => (
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M4 12H28V28H4V12Z" fill={isActive ? '#fafafa' : '#e0e0e0'} />
                    <path d="M2 8L6 12H26L30 8H2Z" fill={isActive ? '#ff4b4b' : '#b0b0b0'} />
                    <path d="M8 12V16C8 17.5 9.5 18.5 11 16V12H8Z" fill={isActive ? '#ff9600' : '#c0c0c0'} />
                    <path d="M14 12V16C14 17.5 15.5 18.5 17 16V12H14Z" fill={isActive ? '#ff4b4b' : '#b0b0b0'} />
                    <path d="M20 12V16C20 17.5 21.5 18.5 23 16V12H20Z" fill={isActive ? '#ff9600' : '#c0c0c0'} />
                    <rect x="12" y="20" width="8" height="8" fill={isActive ? '#1cb0f6' : '#b0b0b0'} />
                </svg>
            )
        },
        {
            id: 'leaderboard',
            label: t('leaderboards'),
            path: '/leaderboard',
            icon: (isActive: boolean) => (
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M10 6H22V14C22 18 19 22 16 22C13 22 10 18 10 14V6Z"
                        fill={isActive ? '#ffc800' : '#b0b0b0'} />
                    <path d="M6 8H10V12C8 12 6 10 6 8Z" fill={isActive ? '#ffc800' : '#b0b0b0'} />
                    <path d="M22 8H26C26 10 24 12 22 12V8Z" fill={isActive ? '#ffc800' : '#b0b0b0'} />
                    <path d="M14 22H18V25H14V22Z" fill={isActive ? '#d9a500' : '#909090'} />
                    <path d="M11 25H21V28H11V25Z" fill={isActive ? '#ffc800' : '#b0b0b0'} />
                </svg>
            )
        },
        {
            id: 'profile',
            label: t('profile'),
            path: '/profile',
            icon: (isActive: boolean) => (
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="11" r="5" fill={isActive ? '#1cb0f6' : '#b0b0b0'} />
                    <path d="M8 28C8 22 11 18 16 18C21 18 24 22 24 28H8Z"
                        fill={isActive ? '#1cb0f6' : '#b0b0b0'} />
                </svg>
            )
        },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
                >
                    {({ isActive }) => (
                        <>
                            {item.icon(isActive)}
                            <span className="nav-label">{item.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
