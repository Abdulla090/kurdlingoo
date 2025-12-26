import { useCallback } from 'react';
import { speakWithGeminiVoice } from '../utils/geminiVoice';
import { speakWithGoogleCloud } from '../utils/googleTTS';

/**
 * useTextToSpeech - Custom hook for Text-to-Speech
 * Prioritizes Gemini 2.5 Flash Voice (State-of-the-Art native audio).
 */
const useTextToSpeech = () => {
    const speak = useCallback(async (text: string, onEnd?: () => void, voice?: { aiName: string, gender: string, tone: string }) => {
        // 1. Try Premium Gemini 2.5 Flash Voice first (Latest)
        let success = await speakWithGeminiVoice(text, voice);

        // 2. Fallback to Google Cloud TTS
        if (!success) {
            success = await speakWithGoogleCloud(text);
        }

        if (success) {
            if (onEnd) onEnd();
            return;
        }

        // 3. Last fallback to Web Speech API
        if (!('speechSynthesis' in window)) {
            console.error('Speech synthesis not supported in this browser.');
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;

        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en-') && (v.name.includes('Google') || v.name.includes('Premium')));
        if (enVoice) utterance.voice = enVoice;

        if (onEnd) utterance.onend = onEnd;
        window.speechSynthesis.speak(utterance);
    }, []);

    const stop = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }, []);

    return { speak, stop };
};

export default useTextToSpeech;
