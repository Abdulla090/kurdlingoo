import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini SDK with the API key from environment variables
const API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);


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
 * Send a chat message directly to Gemini API (Client-side)
 * This bypasses the need for a backend proxy for development
 */
export async function sendChatMessage(
    message: string,
    systemPrompt: string,
    history: ChatMessage[] = []
): Promise<ChatResponse> {
    try {
        if (!API_KEY) {
            throw new Error("Missing VITE_GOOGLE_AI_API_KEY in .env file");
        }

        // Use Gemini 2.5 Flash for speed and cost effectiveness
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: systemPrompt
        });

        // Filter out leading model messages - Gemini requires first message to be 'user'
        const mappedHistory = history.map(msg => ({
            role: (msg.role === 'ai' || msg.role === 'model') ? 'model' : 'user',
            parts: msg.parts
        }));
        // Remove leading model messages
        while (mappedHistory.length > 0 && mappedHistory[0].role === 'model') {
            mappedHistory.shift();
        }

        const chatSession = model.startChat({
            history: mappedHistory,
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        const result = await chatSession.sendMessage(message);
        const responseText = result.response.text();

        return {
            response: responseText,
            success: true
        };
    } catch (error: any) {
        console.error('Gemini Client Error:', error);
        return {
            response: '',
            success: false,
            error: error.message || 'Failed to generate response'
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
        if (!API_KEY) throw new Error("Missing VITE_GOOGLE_AI_API_KEY in .env file");

        const response = await fetch(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text },
                    voice: {
                        languageCode: options.languageCode || 'en-US',
                        name: options.voiceName || 'en-US-Studio-O',
                        ssmlGender: options.ssmlGender || 'FEMALE'
                    },
                    audioConfig: {
                        audioEncoding: 'MP3',
                        speakingRate: 0.95,
                        pitch: 0
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'TTS request failed');
        }

        return {
            audioContent: data.audioContent,
            success: true
        };
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
        if (!API_KEY) throw new Error("Missing VITE_GOOGLE_AI_API_KEY in .env file");

        // Map each scenario character to a consistent Gemini prebuilt voice
        const voiceNameMap: Record<string, string> = {
            // Male voices
            'Sam': 'Puck',           // Upbeat - fits friendly barista
            'Julian': 'Orus',        // Firm - fits sophisticated waiter
            'Dr. Miller': 'Charon',  // Informative - fits experienced doctor
            'Officer Miller': 'Fenrir', // Excitable/Firm - fits security officer
            'David': 'Iapetus',      // Clear - fits tech support
            'Omar': 'Enceladus',     // Breathy - fits charismatic merchant
            'Alex': 'Aoede',         // Breezy - fits adventurous photographer (female)
            // Female voices
            'Elena': 'Leda',         // Youthful - fits professional receptionist
            'Sarah': 'Algieba',      // Smooth - fits HR manager
            'Chloe': 'Zephyr',       // Bright - fits bubbly fashionista
        };

        const voiceName = voice?.aiName ? (voiceNameMap[voice.aiName] || 'Kore') : 'Kore';

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text }]
                    }],
                    generationConfig: {
                        responseModalities: ["AUDIO"],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: {
                                    voiceName
                                }
                            }
                        }
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Gemini Voice request failed');
        }

        const inlineData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        const audioContent = inlineData?.data;
        const mimeType = inlineData?.mimeType || 'audio/wav';

        if (!audioContent) {
            throw new Error('No audio content received from Gemini');
        }

        return {
            audioContent,
            mimeType,
            success: true
        };
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
        if (!API_KEY) throw new Error("Missing VITE_GOOGLE_AI_API_KEY in .env file");

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: "Transcribe this audio clip exactly. If it's English, provide the English text. If it's silence or noise, return an empty string." },
                            { inlineData: { mimeType, data: audioBase64 } }
                        ]
                    }]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'STT request failed');
        }

        const transcript = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        return {
            transcript,
            success: true
        };
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
 * Convert raw PCM base64 data to a WAV blob
 * Gemini TTS returns raw s16le PCM at 24kHz mono
 */
function pcmToWavBlob(base64Pcm: string, sampleRate: number = 24000, numChannels: number = 1, bitsPerSample: number = 16): Blob {
    const binaryStr = atob(base64Pcm);
    const pcmBytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
        pcmBytes[i] = binaryStr.charCodeAt(i);
    }

    const dataLength = pcmBytes.length;
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const headerSize = 44;
    const buffer = new ArrayBuffer(headerSize + dataLength);
    const view = new DataView(buffer);

    // WAV header
    const writeString = (offset: number, str: string) => {
        for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
    };
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + dataLength, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true); // chunk size
    view.setUint16(20, 1, true);  // PCM format
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);
    writeString(36, 'data');
    view.setUint32(40, dataLength, true);

    // Copy PCM data
    new Uint8Array(buffer, headerSize).set(pcmBytes);

    return new Blob([buffer], { type: 'audio/wav' });
}

/**
 * Play audio from base64 string
 * Handles raw PCM from Gemini TTS by converting to WAV
 */
export function playBase64Audio(base64Audio: string, mimeType: string = 'audio/mp3'): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            let audioUrl: string;

            // Gemini TTS returns raw PCM data - convert to WAV for browser playback
            if (mimeType === 'audio/L16' || mimeType === 'audio/pcm' || mimeType.includes('raw')) {
                const wavBlob = pcmToWavBlob(base64Audio);
                audioUrl = URL.createObjectURL(wavBlob);
            } else {
                // Try WAV conversion as default for Gemini TTS responses
                // since the mimeType may not always accurately indicate raw PCM
                try {
                    const wavBlob = pcmToWavBlob(base64Audio);
                    audioUrl = URL.createObjectURL(wavBlob);
                } catch {
                    audioUrl = `data:${mimeType};base64,${base64Audio}`;
                }
            }

            const audio = new Audio(audioUrl);
            audio.onended = () => {
                if (audioUrl.startsWith('blob:')) URL.revokeObjectURL(audioUrl);
                resolve();
            };
            audio.onerror = (e) => {
                // If WAV conversion failed to play, try direct data URI as fallback
                if (audioUrl.startsWith('blob:')) {
                    URL.revokeObjectURL(audioUrl);
                    const fallbackAudio = new Audio(`data:${mimeType};base64,${base64Audio}`);
                    fallbackAudio.onended = () => resolve();
                    fallbackAudio.onerror = (e2) => reject(e2);
                    fallbackAudio.play().catch(reject);
                } else {
                    reject(e);
                }
            };
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

