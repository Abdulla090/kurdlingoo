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

        const persona = voice
            ? `[Voice: ${voice.aiName}, a ${voice.gender} with a ${voice.tone} tone] `
            : "[Voice: A natural-sounding native English speaker] ";

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-tts:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: persona + text }]
                    }],
                    generationConfig: {
                        responseMimeType: "audio/wav",
                    }
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return new Response(JSON.stringify({
                error: 'Gemini Voice TTS failed',
                details: errorData
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();
        const audioContent = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (!audioContent) {
            return new Response(JSON.stringify({ error: 'No audio content received' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({
            audioContent,
            mimeType: 'audio/wav',
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
