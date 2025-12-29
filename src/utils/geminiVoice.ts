import { requestGeminiVoice, requestSTT, playBase64Audio, blobToBase64 } from '../services/api';

/**
 * Gemini 2.5 Flash Voice - Text-to-Speech Utility
 * Uses secure server-side API proxy - API key is never exposed to client.
 */
export const speakWithGeminiVoice = async (text: string, voice?: { aiName: string, gender: string, tone: string }) => {
    try {
        const result = await requestGeminiVoice(text, voice);

        if (!result.success || !result.audioContent) {
            console.warn('Gemini Voice TTS failed, falling back...');
            return false;
        }

        await playBase64Audio(result.audioContent, result.mimeType || 'audio/wav');
        return true;
    } catch (error) {
        console.error('Gemini Voice Error:', error);
        return false;
    }
};

/**
 * Gemini 2.5 Flash - Speech-to-Text Utility
 * Uses secure server-side API proxy - API key is never exposed to client.
 */
export const transcribeWithGemini = async (audioBlob: Blob) => {
    try {
        const base64Audio = await blobToBase64(audioBlob);
        const result = await requestSTT(base64Audio, 'audio/wav');

        if (!result.success) {
            console.error('Gemini STT Error:', result.error);
            return '';
        }

        return result.transcript;
    } catch (error) {
        console.error('Gemini STT Error:', error);
        return '';
    }
};
