import React from 'react';
import { useNavigate } from 'react-router-dom';
import { rolePlayScenarios, RolePlayScenario } from '../../data/rolePlayScenarios';
import './RolePlayHub.css';

const RolePlayHub: React.FC = () => {
    const navigate = useNavigate();

    const handleScenarioClick = (id: string) => {
        navigate(`/roleplay/${id}`);
    };

    return (
        <div className="roleplay-hub">
            <header className="hub-header">
                <h1>Practice Your English</h1>
                <p>Choose a scenario and start a voice-powered roleplay with AI.</p>
            </header>

            <div className="scenarios-grid">
                {rolePlayScenarios.map((scenario: RolePlayScenario) => (
                    <div
                        key={scenario.id}
                        className={`scenario-card ${scenario.difficulty}`}
                        onClick={() => handleScenarioClick(scenario.id)}
                    >
                        <div className="scenario-icon">{scenario.icon}</div>
                        <div className="scenario-content">
                            <div className="scenario-header">
                                <span className={`difficulty-badge ${scenario.difficulty}`}>
                                    {scenario.difficulty}
                                </span>
                                <h3>{scenario.title}</h3>
                            </div>
                            <p className="scenario-desc">{scenario.description}</p>
                            <div className="scenario-roles">
                                <span><strong>AI:</strong> {scenario.aiRole}</span>
                                <span><strong>You:</strong> {scenario.userRole}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RolePlayHub;
