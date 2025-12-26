import { CONFIG } from '../config';

/**
 * Google Cloud Text-to-Speech Utility
 * Converts text to high-quality AI speech using the provided API Key.
 */
export const speakWithGoogleCloud = async (text: string) => {
    try {
        const response = await fetch(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${CONFIG.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text },
                    voice: {
                        languageCode: 'en-US',
                        name: 'en-US-Neural2-F', // Premium neural voice
                        ssmlGender: 'FEMALE'
                    },
                    audioConfig: { audioEncoding: 'MP3' }
                })
            }
        );

        if (!response.ok) {
            return false;
        }

        const data = await response.json();
        const audioContent = data.audioContent;

        // Convert base64 to blob and play
        const audioBlob = b64ToBlob(audioContent, 'audio/mp3');
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        return new Promise((resolve) => {
            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                resolve(true);
            };
            audio.onerror = () => {
                resolve(false);
            };
            audio.play().catch(() => resolve(false));
        });
    } catch (error) {
        return false;
    }
};

// Helper to convert base64 to Blob
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

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
};
