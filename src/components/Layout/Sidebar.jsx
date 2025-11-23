import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, Target, Store, User, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Layout.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
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
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-logo">
                {!isCollapsed && <h1 className="logo-text">KurdLingo</h1>}
                {isCollapsed && <h1 className="logo-text">K</h1>}
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        title={isCollapsed ? item.label : ''}
                    >
                        <item.icon size={28} className="nav-icon" />
                        {!isCollapsed && <span className="nav-label">{item.label}</span>}
                    </NavLink>
                ))}
                <button className="nav-item more-btn">
                    <MoreHorizontal size={28} className="nav-icon" />
                    {!isCollapsed && <span className="nav-label">{t('more')}</span>}
                </button>
            </nav>

            <button className="collapse-btn" onClick={toggleSidebar}>
                {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
        </aside>
    );
};

export default Sidebar;
