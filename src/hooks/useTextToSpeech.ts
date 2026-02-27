import { useCallback } from 'react';
import { requestGeminiVoice, playBase64Audio } from '../services/api';

/**
 * useTextToSpeech - Custom hook for Text-to-Speech
 * Prioritizes Gemini 2.5 Flash Voice (State-of-the-Art native audio).
 */
const useTextToSpeech = () => {
    /**
     * prepareAndSpeak - Fetches TTS audio first, then calls onReady right before playback.
     * This ensures the message text doesn't appear until audio is about to play.
     */
    const prepareAndSpeak = useCallback(async (
        text: string,
        onReady: () => void,
        onEnd?: () => void,
        voice?: { aiName: string, gender: string, tone: string }
    ) => {
        try {
            // 1. Fetch audio from Gemini TTS
            const result = await requestGeminiVoice(text, voice);

            if (result.success && result.audioContent) {
                // 2. Audio is ready - show the message NOW
                onReady();

                // 3. Play the audio
                try {
                    await playBase64Audio(result.audioContent, result.mimeType || 'audio/wav');
                } catch (playError) {
                    console.warn('Audio playback failed:', playError);
                }
                if (onEnd) onEnd();
                return;
            }
        } catch (error) {
            console.warn('Gemini TTS failed:', error);
        }

        // Fallback: show message immediately and use Web Speech API
        onReady();
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            const voices = window.speechSynthesis.getVoices();
            const enVoice = voices.find(v => v.lang.startsWith('en-') && (v.name.includes('Google') || v.name.includes('Premium')));
            if (enVoice) utterance.voice = enVoice;
            if (onEnd) utterance.onend = onEnd;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    /**
     * speak - Simple speak that shows message immediately (for re-play button, etc.)
     */
    const speak = useCallback(async (text: string, onEnd?: () => void, voice?: { aiName: string, gender: string, tone: string }) => {
        try {
            const result = await requestGeminiVoice(text, voice);
            if (result.success && result.audioContent) {
                await playBase64Audio(result.audioContent, result.mimeType || 'audio/wav');
                if (onEnd) onEnd();
                return;
            }
        } catch (error) {
            console.warn('Gemini TTS failed:', error);
        }

        // Fallback to Web Speech API
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            const voices = window.speechSynthesis.getVoices();
            const enVoice = voices.find(v => v.lang.startsWith('en-') && (v.name.includes('Google') || v.name.includes('Premium')));
            if (enVoice) utterance.voice = enVoice;
            if (onEnd) utterance.onend = onEnd;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    const stop = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }, []);

    return { speak, prepareAndSpeak, stop };
};

export default useTextToSpeech;
