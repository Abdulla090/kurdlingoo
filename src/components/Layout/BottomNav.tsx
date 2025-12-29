import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, Target, Store, User, MessageCircle, Book } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Layout.css';

const BottomNav = () => {
    const { t } = useLanguage();

    // Comprehensive list matching Sidebar
    const navItems = [
        { id: 'learn', label: t('learn'), path: '/learn', icon: Home },
        { id: 'guidebook', label: t('guidebook'), path: '/guidebook-hub', icon: BookOpen },
        { id: 'roleplay', label: t('roleplay') || 'Role-Play', path: '/roleplay', icon: MessageCircle },
        { id: 'dictionary', label: t('dictionary'), path: '/dictionary', icon: Book },
        { id: 'leaderboard', label: t('leaderboards'), path: '/leaderboard', icon: Trophy },
        { id: 'quests', label: t('quests'), path: '/quests', icon: Target },
        { id: 'shop', label: t('shop'), path: '/shop', icon: Store },
        { id: 'profile', label: t('profile'), path: '/profile', icon: User },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <Icon size={24} className="nav-icon-mobile" />
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default BottomNav;
