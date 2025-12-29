// Vercel Serverless Function for Speech-to-Text - API Key is secure
export const config = {
    runtime: 'edge',
};

interface STTRequest {
    audioBase64: string;
    mimeType?: string;
}

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { audioBase64, mimeType = 'audio/wav' }: STTRequest = await request.json();

        const apiKey = process.env.GOOGLE_AI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'API key not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return new Response(JSON.stringify({
                error: 'Transcription failed',
                details: errorData
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();
        const transcript = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        return new Response(JSON.stringify({
            transcript,
            success: true
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (error: any) {
        console.error('STT API Error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to transcribe audio',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
