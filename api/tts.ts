// Vercel Serverless Function for Text-to-Speech - API Key is secure
export const config = {
    runtime: 'edge',
};

interface TTSRequest {
    text: string;
    languageCode?: string;
    voiceName?: string;
    ssmlGender?: string;
}

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { text, languageCode = 'en-US', voiceName = 'en-US-Studio-O', ssmlGender = 'FEMALE' }: TTSRequest = await request.json();

        const apiKey = process.env.GOOGLE_AI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'API key not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const response = await fetch(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text },
                    voice: {
                        languageCode,
                        name: voiceName,
                        ssmlGender
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
            return new Response(JSON.stringify({ error: 'TTS API error', details: data }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({
            audioContent: data.audioContent,
            success: true
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (error: any) {
        console.error('TTS API Error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to process TTS request',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
