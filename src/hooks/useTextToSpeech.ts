import { useCallback } from 'react';

/**
 * Pick the best available male English voice.
 * Priority: any voice with "male" in name → Microsoft David/Mark → Daniel → Google → first en-* voice.
 */
function pickMaleVoice(): SpeechSynthesisVoice | null {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const en = voices.filter(v => v.lang.startsWith('en'));

    return (
        en.find(v => v.name.toLowerCase().includes('male')) ||
        en.find(v => v.name.includes('Google UK English Male')) ||
        en.find(v => v.name.includes('Microsoft David')) ||
        en.find(v => v.name.includes('Microsoft Mark')) ||
        en.find(v => v.name.includes('Daniel')) ||
        en.find(v => v.name.includes('Google')) ||
        en[0] ||
        null
    );
}

/**
 * Core browser TTS function — always uses the male voice, never Gemini.
 */
function browserSpeak(text: string, onEnd?: () => void): void {
    if (!('speechSynthesis' in window)) { onEnd?.(); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.92;
    utterance.pitch = 0.9; // slightly lower pitch = more masculine

    // Voices may not be loaded on first call — try immediately, then retry after voices load
    const trySetVoice = () => {
        const v = pickMaleVoice();
        if (v) utterance.voice = v;
    };
    trySetVoice();
    if (!utterance.voice) {
        window.speechSynthesis.onvoiceschanged = () => {
            trySetVoice();
            window.speechSynthesis.onvoiceschanged = null;
        };
    }

    if (onEnd) utterance.onend = onEnd;
    window.speechSynthesis.speak(utterance);
}

/**
 * useTextToSpeech — Custom hook for Text-to-Speech.
 *
 * Uses browser Web Speech API ONLY (male voice).
 * Gemini TTS is intentionally NOT used here.
 * Gemini TTS remains only in RoleplayChat (its own `speakText` function).
 */
const useTextToSpeech = () => {
    /**
     * prepareAndSpeak — Calls onReady() then speaks via browser TTS.
     * (signature kept compatible with old API so callers don't need changes)
     */
    const prepareAndSpeak = useCallback((
        text: string,
        onReady: () => void,
        onEnd?: () => void,
        _voice?: unknown,
        _forceNative?: boolean
    ) => {
        onReady();
        browserSpeak(text, onEnd);
    }, []);

    /** speak — Immediate, fire-and-forget */
    const speak = useCallback((text: string, onEnd?: () => void) => {
        browserSpeak(text, onEnd);
    }, []);

    /** stop — Cancel any active speech */
    const stop = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }, []);

    return { speak, prepareAndSpeak, stop };
};

export default useTextToSpeech;
