import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, Sparkles, Save } from 'lucide-react';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import './LessonCreator.css';

const LessonCreator = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const [lessonTitle, setLessonTitle] = useState('');
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState({
        type: 'multiple-choice',
        question: '',
        options: [{ text: '', correct: false }],
        pairs: [],
        correctSentence: [],
        sentenceParts: [],
        correctOption: ''
    });

    const [aiTopic, setAiTopic] = useState('');
    const [aiLoading, setAiLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState('gemini-2.5-pro');

    const exerciseTypes = [
        { value: 'multiple-choice', label: 'Multiple Choice' },
        { value: 'sentence-builder', label: 'Sentence Builder' },
        { value: 'match-pairs', label: 'Match Pairs' },
        { value: 'fill-blank', label: 'Fill in the Blank' }
    ];

    const addOption = () => {
        setCurrentExercise({
            ...currentExercise,
            options: [...currentExercise.options, { text: '', correct: false }]
        });
    };

    const updateOption = (index, field, value) => {
        const newOptions = [...currentExercise.options];
        newOptions[index][field] = value;
        setCurrentExercise({ ...currentExercise, options: newOptions });
    };

    const removeOption = (index) => {
        const newOptions = currentExercise.options.filter((_, i) => i !== index);
        setCurrentExercise({ ...currentExercise, options: newOptions });
    };

    const addPair = () => {
        setCurrentExercise({
            ...currentExercise,
            pairs: [...currentExercise.pairs, { kurdish: '', english: '' }]
        });
    };

    const updatePair = (index, field, value) => {
        const newPairs = [...currentExercise.pairs];
        newPairs[index][field] = value;
        setCurrentExercise({ ...currentExercise, pairs: newPairs });
    };

    const removePair = (index) => {
        const newPairs = currentExercise.pairs.filter((_, i) => i !== index);
        setCurrentExercise({ ...currentExercise, pairs: newPairs });
    };

    const addExercise = () => {
        if (!currentExercise.question) {
            alert('Please add a question!');
            return;
        }

        setExercises([...exercises, { ...currentExercise, id: Date.now() }]);
        setCurrentExercise({
            type: 'multiple-choice',
            question: '',
            options: [{ text: '', correct: false }],
            pairs: [],
            correctSentence: [],
            sentenceParts: [],
            correctOption: ''
        });
    };

    const removeExercise = (id) => {
        setExercises(exercises.filter(ex => ex.id !== id));
    };

    const generateWithAI = async () => {
        if (!aiTopic) {
            alert('Please enter a topic!');
            return;
        }

        setAiLoading(true);

        try {
            const { GoogleGenerativeAI } = await import('@google/generative-ai');

            const genAI = new GoogleGenerativeAI('AIzaSyAXZtxt_Zu4ta0pVF6gtLGRcIGFe0TJZzQ');
            const model = genAI.getGenerativeModel({ model: selectedModel });

            const prompt = `You are a Kurdish language expert. Create exactly 5 diverse exercises about "${aiTopic}" in Kurdish Sorani and English.

Return ONLY valid JSON (no markdown, no code blocks):

[
  {
    "type": "multiple-choice",
    "question": "What is 'X' in Kurdish?",
    "options": [
      {"text": "ئاو", "image": "💧", "correct": true},
      {"text": "نان", "image": "🍞", "correct": false}
    ]
  },
  {
    "type": "match-pairs",
    "pairs": [
      {"kurdish": "سوور", "english": "Red"},
      {"kurdish": "شین", "english": "Blue"}
    ]
  },
  {
    "type": "sentence-builder",
    "question": "Translate: 'I am happy'",
    "sourceText": "I am happy",
    "correctSentence": ["من", "دڵخۆشم"],
    "options": ["من", "دڵخۆشم", "تۆ", "خەمبارم"]
  },
  {
    "type": "fill-blank",
    "question": "Complete: '___ باش' (Good morning)",
    "sentenceParts": ["___", "باش"],
    "correctOption": "بەیانی",
    "options": ["بەیانی", "شەو", "ڕۆژ"]
  }
]

Mix all 4 types. Use Kurdish Sorani script. Include emojis where appropriate.`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text = response.text();

            text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

            try {
                const generatedExercises = JSON.parse(text);

                if (Array.isArray(generatedExercises) && generatedExercises.length > 0) {
                    setExercises([...exercises, ...generatedExercises.map((ex, i) => ({ ...ex, id: Date.now() + i }))]);
                    alert(`✅ Generated ${generatedExercises.length} exercises!`);
                } else {
                    throw new Error('Invalid format');
                }
            } catch (parseError) {
                console.error('Parse Error:', parseError);
                console.log('Response:', text);
                alert('Failed to parse AI response. Check console.');
            }
        } catch (error) {
            console.error('AI Error:', error);
            alert('Failed to generate. Error: ' + error.message);
        } finally {
            setAiLoading(false);
        }
    };

    const saveLesson = () => {
        if (!lessonTitle || exercises.length === 0) {
            alert('Please add a title and at least one exercise!');
            return;
        }

        const lesson = {
            id: `custom-${Date.now()}`,
            title: lessonTitle,
            exercises: exercises
        };

        const savedLessons = JSON.parse(localStorage.getItem('customLessons') || '[]');
        savedLessons.push(lesson);
        localStorage.setItem('customLessons', JSON.stringify(savedLessons));

        alert('✅ Lesson saved!');
        navigate('/learn');
    };

    return (
        <div className="lesson-creator">
            <header className="creator-header">
                <h1>🎨 Lesson Creator</h1>
                <Button variant="outline" onClick={() => navigate('/learn')}>
                    Back to Learn
                </Button>
            </header>

            <div className="creator-container">
                <section className="creator-section">
                    <h2>Lesson Information</h2>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Lesson Title (e.g., 'Colors in Kurdish')"
                        value={lessonTitle}
                        onChange={(e) => setLessonTitle(e.target.value)}
                    />
                </section>

                <section className="creator-section ai-section">
                    <h2><Sparkles size={20} /> AI Exercise Generator</h2>

                    <div className="form-group">
                        <label style={{ color: 'white' }}>AI Model</label>
                        <select
                            className="input-field"
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                        >
                            <option value="gemini-2.5-pro">Gemini 2.5 Pro (Recommended)</option>
                            <option value="gemini-3-pro-preview">Gemini 3 Pro Preview (Experimental)</option>
                        </select>
                    </div>

                    <div className="ai-input-group">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Topic (e.g., 'Kurdish colors', 'Family members')"
                            value={aiTopic}
                            onChange={(e) => setAiTopic(e.target.value)}
                        />
                        <Button
                            variant="primary"
                            onClick={generateWithAI}
                            disabled={aiLoading}
                        >
                            <Sparkles size={18} style={{ marginRight: '8px' }} />
                            {aiLoading ? 'Generating...' : 'Generate with AI'}
                        </Button>
                    </div>
                    <p className="ai-hint">
                        💡 {selectedModel === 'gemini-3-pro-preview'
                            ? 'Gemini 3 Pro Preview - Most intelligent, experimental'
                            : 'Gemini 2.5 Pro - Stable, production-ready'}
                    </p>
                </section>

                <section className="creator-section">
                    <h2>Manual Exercise Creator</h2>

                    <div className="form-group">
                        <label>Exercise Type</label>
                        <select
                            className="input-field"
                            value={currentExercise.type}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, type: e.target.value })}
                        >
                            {exerciseTypes.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Question</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Enter your question"
                            value={currentExercise.question}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, question: e.target.value })}
                        />
                    </div>

                    {currentExercise.type === 'multiple-choice' && (
                        <div className="form-group">
                            <label>Options</label>
                            {currentExercise.options.map((option, index) => (
                                <div key={index} className="option-row">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder={`Option ${index + 1}`}
                                        value={option.text}
                                        onChange={(e) => updateOption(index, 'text', e.target.value)}
                                    />
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={option.correct}
                                            onChange={(e) => updateOption(index, 'correct', e.target.checked)}
                                        />
                                        Correct
                                    </label>
                                    <button className="icon-btn" onClick={() => removeOption(index)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                            <Button variant="outline" size="sm" onClick={addOption}>
                                <Plus size={18} /> Add Option
                            </Button>
                        </div>
                    )}

                    {currentExercise.type === 'match-pairs' && (
                        <div className="form-group">
                            <label>Pairs (Kurdish - English)</label>
                            {currentExercise.pairs.map((pair, index) => (
                                <div key={index} className="pair-row">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Kurdish"
                                        value={pair.kurdish}
                                        onChange={(e) => updatePair(index, 'kurdish', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="English"
                                        value={pair.english}
                                        onChange={(e) => updatePair(index, 'english', e.target.value)}
                                    />
                                    <button className="icon-btn" onClick={() => removePair(index)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                            <Button variant="outline" size="sm" onClick={addPair}>
                                <Plus size={18} /> Add Pair
                            </Button>
                        </div>
                    )}

                    {currentExercise.type === 'sentence-builder' && (
                        <div className="form-group">
                            <label>Correct Sentence (comma-separated)</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g., من, کوڕم"
                                value={currentExercise.correctSentence.join(', ')}
                                onChange={(e) => setCurrentExercise({
                                    ...currentExercise,
                                    correctSentence: e.target.value.split(',').map(w => w.trim())
                                })}
                            />
                            <label>Available Options (comma-separated)</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g., من, کوڕم, کچم, تۆ"
                                value={currentExercise.options?.join?.(', ') || ''}
                                onChange={(e) => setCurrentExercise({
                                    ...currentExercise,
                                    options: e.target.value.split(',').map(w => w.trim())
                                })}
                            />
                        </div>
                    )}

                    {currentExercise.type === 'fill-blank' && (
                        <div className="form-group">
                            <label>Sentence Parts (use ___ for blank)</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g., من, ___, دەخۆم"
                                value={currentExercise.sentenceParts.join(', ')}
                                onChange={(e) => setCurrentExercise({
                                    ...currentExercise,
                                    sentenceParts: e.target.value.split(',').map(w => w.trim())
                                })}
                            />
                            <label>Correct Answer</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Correct word"
                                value={currentExercise.correctOption}
                                onChange={(e) => setCurrentExercise({ ...currentExercise, correctOption: e.target.value })}
                            />
                            <label>Options (comma-separated)</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g., نان, ئاو, چا"
                                value={currentExercise.options?.join?.(', ') || ''}
                                onChange={(e) => setCurrentExercise({
                                    ...currentExercise,
                                    options: e.target.value.split(',').map(w => w.trim())
                                })}
                            />
                        </div>
                    )}

                    <Button variant="secondary" onClick={addExercise}>
                        <Plus size={18} /> Add Exercise
                    </Button>
                </section>

                {exercises.length > 0 && (
                    <section className="creator-section">
                        <h2>Exercises ({exercises.length})</h2>
                        <div className="exercise-list">
                            {exercises.map((ex, index) => (
                                <div key={ex.id} className="exercise-card">
                                    <div className="exercise-card-header">
                                        <span className="exercise-number">#{index + 1}</span>
                                        <span className="exercise-type">{ex.type}</span>
                                        <button className="icon-btn" onClick={() => removeExercise(ex.id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <p className="exercise-question">{ex.question}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="creator-actions">
                    <Button variant="primary" size="lg" onClick={saveLesson}>
                        <Save size={20} style={{ marginRight: '8px' }} />
                        Save Lesson
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LessonCreator;
