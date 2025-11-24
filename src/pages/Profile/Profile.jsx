import React from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, CheckCircle, Flame, Zap, Plus, Settings } from 'lucide-react';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import './Profile.css';

const Profile = () => {
    const { t } = useLanguage();

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-avatar">
                    👤
                </div>
                <div className="profile-info">
                    <h1>{t('you')}</h1>
                    <p className="profile-joined">{t('joined')} November 2025</p>
                    <div className="profile-stats-row">
                        <span className="stat-badge"><Flame color="#ff9600" fill="#ff9600" /> 5</span>
                        <span className="stat-badge"><Zap color="#ffc800" fill="#ffc800" /> 450 XP</span>
                    </div>
                </div>
            </div>

            <h2 className="section-title">{t('statistics')}</h2>
            <div className="stats-grid">
                <div className="stat-card">
                    <Flame size={32} color="#ff9600" />
                    <div>
                        <div className="stat-value">5</div>
                        <div className="stat-label">{t('dayStreak')}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <Zap size={32} color="#ffc800" />
                    <div>
                        <div className="stat-value">450</div>
                        <div className="stat-label">{t('totalXp')}</div>
                    </div>
                </div>
            </div>

            <h2 className="section-title">{t('adminControls')}</h2>
            <div className="admin-controls-grid">
                <Link to="/create-lesson" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" fullWidth size="lg">
                        <Plus size={20} style={{ marginRight: '8px' }} />
                        {t('createLesson')}
                    </Button>
                </Link>
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <Button variant="outline" fullWidth size="lg">
                        <Settings size={20} style={{ marginRight: '8px' }} />
                        {t('adminPanel')}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
