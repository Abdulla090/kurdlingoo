import { CONFIG } from '../config';

/**
 * Gemini 2.5 Flash Voice - Text-to-Speech Utility
 * Uses the latest Gemini 2.5 Flash model for native audio generation.
 */
export const speakWithGeminiVoice = async (text: string, voice?: { aiName: string, gender: string, tone: string }) => {
    try {
        const persona = voice
            ? `[Voice: ${voice.aiName}, a ${voice.gender} with a ${voice.tone} tone] `
            : "[Voice: A natural-sounding native English speaker] ";

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-tts:generateContent?key=${CONFIG.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: persona + text }]
                    }],
                    generationConfig: {
                        responseMimeType: "audio/wav", // Trying wav as it's more standard for the -tts model
                    }
                })
            }
        );

        if (!response.ok) {
            console.warn('Gemini 2.5 Flash Voice TTS failed, falling back...');
            return false;
        }

        const data = await response.json();
        const audioContent = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (!audioContent) return false;

        const audioBlob = b64ToBlob(audioContent, 'audio/wav');
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        return new Promise((resolve) => {
            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                resolve(true);
            };
            audio.onerror = () => resolve(false);
            audio.play().catch(() => resolve(false));
        });
    } catch (error) {
        return false;
    }
};

/**
 * Gemini 2.5 Flash - Speech-to-Text Utility
 * Converts audio blob to text using Gemini's native audio understanding.
 */
export const transcribeWithGemini = async (audioBlob: Blob) => {
    try {
        const reader = new FileReader();
        const base64Audio = await new Promise<string>((resolve) => {
            reader.onloadend = () => {
                const base64 = (reader.result as string).split(',')[1];
                resolve(base64);
            };
            reader.readAsDataURL(audioBlob);
        });

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${CONFIG.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: "Transcribe this audio clip exactly. If it's English, provide the English text. If it's silence or noise, return an empty string." },
                            { inlineData: { mimeType: "audio/wav", data: base64Audio } }
                        ]
                    }]
                })
            }
        );

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } catch (error) {
        console.error('Gemini STT Error:', error);
        return '';
    }
};

const b64ToBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
};
