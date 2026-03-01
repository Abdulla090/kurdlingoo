// Vercel Serverless Function for Gemini Voice TTS - API Key is secure
export const config = {
    runtime: 'edge',
};

interface GeminiVoiceRequest {
    text: string;
    voice?: {
        aiName: string;
        gender: string;
        tone: string;
    };
}

export default async function handler(request: Request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { text, voice }: GeminiVoiceRequest = await request.json();

        const apiKey = process.env.GOOGLE_AI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'API key not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

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
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
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

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Gemini Voice API error response:', JSON.stringify(errorData));
            return new Response(JSON.stringify({
                error: 'Gemini Voice TTS failed',
                details: errorData
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();
        const inlineData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        const audioContent = inlineData?.data;
        const mimeType = inlineData?.mimeType || 'audio/wav';

        if (!audioContent) {
            return new Response(JSON.stringify({ error: 'No audio content received' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({
            audioContent,
            mimeType,
            success: true
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (error: any) {
        console.error('Gemini Voice API Error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to process Gemini Voice request',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
