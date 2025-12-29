// Secure API client - All requests go through server-side proxy
// The API key is NEVER exposed to the client

const API_BASE = '/api';

interface ChatMessage {
    role: string;
    parts: Array<{ text: string }>;
}

interface ChatResponse {
    response: string;
    success: boolean;
    error?: string;
}

interface TTSResponse {
    audioContent: string;
    success: boolean;
    error?: string;
}

interface GeminiVoiceResponse {
    audioContent: string;
    mimeType: string;
    success: boolean;
    error?: string;
}

interface STTResponse {
    transcript: string;
    success: boolean;
    error?: string;
}

/**
 * Send a chat message through the secure API proxy
 */
export async function sendChatMessage(
    message: string,
    systemPrompt: string,
    history: ChatMessage[] = []
): Promise<ChatResponse> {
    try {
        const response = await fetch(`${API_BASE}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                systemPrompt,
                history
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Chat request failed');
        }

        return data;
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return {
            response: '',
            success: false,
            error: error.message
        };
    }
}

/**
 * Request Google Cloud text-to-speech through the secure API proxy
 */
export async function requestTTS(
    text: string,
    options: {
        languageCode?: string;
        voiceName?: string;
        ssmlGender?: string;
    } = {}
): Promise<TTSResponse> {
    try {
        const response = await fetch(`${API_BASE}/tts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                ...options
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'TTS request failed');
        }

        return data;
    } catch (error: any) {
        console.error('TTS API Error:', error);
        return {
            audioContent: '',
            success: false,
            error: error.message
        };
    }
}

/**
 * Request Gemini Voice TTS through the secure API proxy
 * This uses Gemini's native voice generation capabilities
 */
export async function requestGeminiVoice(
    text: string,
    voice?: {
        aiName: string;
        gender: string;
        tone: string;
    }
): Promise<GeminiVoiceResponse> {
    try {
        const response = await fetch(`${API_BASE}/gemini-voice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text,
                voice
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Gemini Voice request failed');
        }

        return data;
    } catch (error: any) {
        console.error('Gemini Voice API Error:', error);
        return {
            audioContent: '',
            mimeType: '',
            success: false,
            error: error.message
        };
    }
}

/**
 * Request speech-to-text transcription through the secure API proxy
 */
export async function requestSTT(
    audioBase64: string,
    mimeType: string = 'audio/wav'
): Promise<STTResponse> {
    try {
        const response = await fetch(`${API_BASE}/stt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                audioBase64,
                mimeType
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'STT request failed');
        }

        return data;
    } catch (error: any) {
        console.error('STT API Error:', error);
        return {
            transcript: '',
            success: false,
            error: error.message
        };
    }
}

/**
 * Play audio from base64 string
 */
export function playBase64Audio(base64Audio: string, mimeType: string = 'audio/mp3'): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            const audio = new Audio(`data:${mimeType};base64,${base64Audio}`);
            audio.onended = () => resolve();
            audio.onerror = (e) => reject(e);
            audio.play().catch(reject);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * Convert blob to base64 string
 */
export function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = (reader.result as string).split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

