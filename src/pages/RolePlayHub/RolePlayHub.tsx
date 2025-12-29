import React from 'react';
import { useNavigate } from 'react-router-dom';
import { rolePlayScenarios, RolePlayScenario } from '../../data/rolePlayScenarios';
import { useLanguage } from '../../context/LanguageContext';
import './RolePlayHub.css';

const RolePlayHub: React.FC = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const handleScenarioClick = (id: string) => {
        navigate(`/roleplay/${id}`);
    };

    return (
        <div className="roleplay-hub">
            <header className="hub-header">
                <h1>{t('roleplayTitle')}</h1>
                <p>{t('roleplaySubtitle')}</p>
            </header>

            <div className="scenarios-grid">
                {rolePlayScenarios.map((scenario: RolePlayScenario) => (
                    <div
                        key={scenario.id}
                        className={`scenario-card ${scenario.difficulty}`}
                        onClick={() => handleScenarioClick(scenario.id)}
                    >
                        <div className="scenario-image-container">
                            <img src={scenario.image} alt={scenario.title} className="scenario-image" />
                            <div className="scenario-icon-badge">{scenario.icon}</div>
                        </div>
                        <div className="scenario-content">
                            <div className="scenario-header">
                                <span className={`difficulty-badge ${scenario.difficulty}`}>
                                    {t(scenario.difficulty)}
                                </span>
                                <h3>{language === 'ckb' ? scenario.titleKu : scenario.title}</h3>
                            </div>
                            <p className="scenario-desc">
                                {language === 'ckb' ? scenario.descriptionKu : scenario.description}
                            </p>
                            <div className="scenario-roles">
                                <span><strong>{t('aiLabel')}:</strong> {language === 'ckb' ? scenario.aiRoleKu : scenario.aiRole}</span>
                                <span><strong>{t('youLabel')}:</strong> {language === 'ckb' ? scenario.userRoleKu : scenario.userRole}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RolePlayHub;
