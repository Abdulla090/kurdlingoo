import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { rolePlayScenarios } from '../../data/rolePlayScenarios';
import { CONFIG } from '../../config';
import useSpeechRecognition from '../../hooks/useSpeechRecognition';
import useTextToSpeech from '../../hooks/useTextToSpeech';
import { Mic, Send, ArrowLeft, Play } from 'lucide-react';
import './RolePlayChat.css';

interface Message {
    role: 'ai' | 'user';
    text: string;
    timestamp: Date;
}

const RolePlayChat: React.FC = () => {
    const { scenarioId } = useParams<{ scenarioId: string }>();
    const navigate = useNavigate();
    const scenario = rolePlayScenarios.find(s => s.id === scenarioId);

    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [chatSession, setChatSession] = useState<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { transcript, isListening, startListening, stopListening, error: speechError } = useSpeechRecognition();
    const { speak, stop: stopSpeaking } = useTextToSpeech();

    // Scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize Chat
    useEffect(() => {
        if (!scenario) return;

        const initChat = async () => {
            // Use the API key provided by the user via config
            const apiKey = CONFIG.GEMINI_API_KEY;

            if (!apiKey) {
                alert('Please set your Gemini API key!');
                navigate('/roleplay');
                return;
            }

            try {
                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({
                    model: "gemini-2.5-flash", // Using 2.5-flash to resolve 429 quota issues
                    systemInstruction: scenario.systemPrompt
                });

                const session = model.startChat({
                    history: [],
                });

                setChatSession(session);

                // Initial AI Message
                const initialAI = { role: 'ai' as const, text: scenario.initialMessage, timestamp: new Date() };
                setMessages([initialAI]);
                speak(scenario.initialMessage, undefined, {
                    aiName: scenario.aiName,
                    gender: scenario.gender,
                    tone: scenario.tone
                });
            } catch (err) {
                console.error("Failed to initialize Gemini:", err);
            }
        };

        initChat();

        return () => {
            stopSpeaking();
            stopListening();
        };
    }, [scenario, navigate, speak, stopSpeaking, stopListening]);

    // Handle incoming transcript when speech ends
    useEffect(() => {
        if (transcript && !isListening) {
            handleSendMessage(transcript);
        }
    }, [isListening, transcript]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim() || !chatSession || !scenario) return;

        const userMsg: Message = { role: 'user', text, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        try {
            const result = await chatSession.sendMessage(text);
            const aiResponse = result.response.text();

            const aiMsg: Message = { role: 'ai', text: aiResponse, timestamp: new Date() };
            setMessages(prev => [...prev, aiMsg]);
            speak(aiResponse, undefined, {
                aiName: scenario.aiName,
                gender: scenario.gender,
                tone: scenario.tone
            });
        } catch (err) {
            console.error("Gemini Error:", err);
            setMessages(prev => [...prev, { role: 'ai', text: "I'm sorry, I'm having trouble connecting right now. Let's try again in a moment.", timestamp: new Date() }]);
        } finally {
            setIsTyping(false);
        }
    };

    if (!scenario) return <div>Scenario not found</div>;

    return (
        <div className="roleplay-chat-page">
            <header className="chat-header">
                <button className="back-btn" onClick={() => navigate('/roleplay')}>
                    <ArrowLeft size={24} />
                </button>
                <div className="scenario-info">
                    <span className="scenario-icon-small">{scenario.icon}</span>
                    <div className="scenario-titles">
                        <h2>{scenario.title}</h2>
                        <p>{scenario.aiRole} & {scenario.userRole}</p>
                    </div>
                </div>
                <div className={`difficulty-indicator ${scenario.difficulty}`}>
                    {scenario.difficulty}
                </div>
            </header>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-bubble ${msg.role}`}>
                        <div className="bubble-content">
                            {msg.text}
                        </div>
                        <div className="bubble-meta">
                            {msg.role === 'ai' && (
                                <button className="re-speak-btn" onClick={() => speak(msg.text, undefined, {
                                    aiName: scenario.aiName,
                                    gender: scenario.gender,
                                    tone: scenario.tone
                                })}>
                                    <Play size={12} fill="currentColor" />
                                </button>
                            )}
                            <span className="message-time">
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="message-bubble ai typing">
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <footer className="chat-footer">
                <div className={`record-status ${isListening ? 'active' : ''}`}>
                    {isListening ? "Listening... Speak now" : speechError ? speechError : "Tap the mic to answer by voice"}
                </div>

                <div className="input-row">
                    <button
                        className={`mic-button ${isListening ? 'listening' : ''}`}
                        onClick={isListening ? stopListening : startListening}
                        title="Answer by voice"
                    >
                        <Mic size={32} />
                        {isListening && <div className="pulse-ring"></div>}
                    </button>

                    {/* Optional text input as fallback */}
                    <div className="text-input-fallback">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage((e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = '';
                                }
                            }}
                        />
                        <button className="send-btn">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RolePlayChat;
