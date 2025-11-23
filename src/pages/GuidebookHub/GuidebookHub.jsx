import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { unit1 } from '../../data/courses/unit1';
import { unit2 } from '../../data/courses/unit2';
import { unit3 } from '../../data/courses/unit3';
import { unit4 } from '../../data/courses/unit4';

const GuidebookHub = () => {
    const navigate = useNavigate();
    const units = [unit1, unit2, unit3, unit4];

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text)' }}>Guidebooks</h1>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {units.map((unit, index) => (
                    <div
                        key={unit.id}
                        onClick={() => navigate(`/guidebook/${unit.id}`)}
                        style={{
                            background: 'white',
                            border: '2px solid var(--color-border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 4px 0 var(--color-border)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 0 var(--color-border)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 0 var(--color-border)';
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--color-primary)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }}>
                                {index + 1}
                            </div>
                            <div>
                                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{unit.title}</h2>
                                <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)' }}>{unit.description}</p>
                            </div>
                        </div>
                        <ArrowRight color="var(--color-border)" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuidebookHub;
