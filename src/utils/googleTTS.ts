import { requestTTS, playBase64Audio } from '../services/api';

/**
 * Google Cloud Text-to-Speech Utility
 * Uses secure server-side API proxy - API key is never exposed to client.
 */
export const speakWithGoogleCloud = async (text: string) => {
    try {
        const result = await requestTTS(text, {
            languageCode: 'en-US',
            voiceName: 'en-US-Neural2-F',
            ssmlGender: 'FEMALE'
        });

        if (!result.success || !result.audioContent) {
            return false;
        }

        await playBase64Audio(result.audioContent, 'audio/mp3');
        return true;
    } catch (error) {
        console.error('Google TTS Error:', error);
        return false;
    }
};
