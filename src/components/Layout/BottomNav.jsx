import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, Shield, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Layout.css';

const BottomNav = () => {
    const { t } = useLanguage();

    const navItems = [
        { icon: Home, label: t('learn'), path: '/learn' },
        { icon: Dumbbell, label: t('practice'), path: '/practice' },
        { icon: Shield, label: t('leaderboards'), path: '/leaderboards' },
        { icon: User, label: t('profile'), path: '/profile' },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => (
                <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
                >
                    <item.icon size={24} className="nav-icon" />
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
