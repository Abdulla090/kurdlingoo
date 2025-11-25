import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, Target, Store, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Layout.css';

const BottomNav = () => {
    const { t } = useLanguage();

    const navItems = [
        { icon: Home, label: t('learn'), path: '/learn' },
        { icon: BookOpen, label: t('guidebook'), path: '/guidebook-hub' },
        { icon: Trophy, label: t('leaderboards'), path: '/leaderboard' },
        { icon: Target, label: t('quests'), path: '/quests' },
        { icon: Store, label: t('shop'), path: '/shop' },
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
