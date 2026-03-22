// Vercel Serverless Function — Gemini Multi-Speaker TTS
// Each character gets a pinned Gemini prebuilt voice that NEVER changes
export const config = { runtime: 'edge' };

interface SpeakerVoice { speaker: string; voice: string; }
interface MultiTTSRequest {
    // Array of { speaker: "Liam", line: "Hey Sarah..." }
    turns: Array<{ speaker: string; line: string }>;
    speakerVoices: SpeakerVoice[]; // e.g. [{speaker:"Liam",voice:"Charon"}]
}

function pcmToWav(base64Pcm: string): string {
    // Convert base64 L16 PCM → base64 WAV so browser can decode it
    const binaryStr = atob(base64Pcm);
    const pcm = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) pcm[i] = binaryStr.charCodeAt(i);
    const sampleRate = 24000, numChannels = 1, bitsPerSample = 16;
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const buf = new ArrayBuffer(44 + pcm.length);
    const v = new DataView(buf);
    const ws = (off: number, s: string) => { for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i)); };
    ws(0, 'RIFF'); v.setUint32(4, 36 + pcm.length, true);
    ws(8, 'WAVE'); ws(12, 'fmt '); v.setUint32(16, 16, true);
    v.setUint16(20, 1, true); v.setUint16(22, numChannels, true);
    v.setUint32(24, sampleRate, true); v.setUint32(28, byteRate, true);
    v.setUint16(32, blockAlign, true); v.setUint16(34, bitsPerSample, true);
    ws(36, 'data'); v.setUint32(40, pcm.length, true);
    new Uint8Array(buf, 44).set(pcm);
    // base64 encode the WAV ArrayBuffer
    let bin = '';
    const bytes = new Uint8Array(buf);
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
}

export default async function handler(request: Request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
    }
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const { turns, speakerVoices }: MultiTTSRequest = await request.json();
        const apiKey = process.env.GOOGLE_AI_API_KEY;
        if (!apiKey) return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });

        // Build the prompt text with speaker labels exactly as Gemini expects
        const promptText = turns.map(t => `${t.speaker}: ${t.line}`).join('\n');

        // Build speakerVoiceConfigs for multiSpeakerVoiceConfig
        const speakerVoiceConfigs = speakerVoices.map(sv => ({
            speaker: sv.speaker,
            voiceConfig: { prebuiltVoiceConfig: { voiceName: sv.voice } }
        }));

        const body = {
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: {
                responseModalities: ['AUDIO'],
                speechConfig: {
                    multiSpeakerVoiceConfig: { speakerVoiceConfigs }
                }
            }
        };

        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
            { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
        );

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            return new Response(JSON.stringify({ error: 'Gemini multi-speaker TTS failed', details: err }), { status: res.status, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
        }

        const data = await res.json();
        const inlineData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        const rawBase64 = inlineData?.data;
        const mimeType: string = inlineData?.mimeType || 'audio/L16';

        if (!rawBase64) {
            return new Response(JSON.stringify({ error: 'No audio content received from Gemini' }), { status: 500 });
        }

        // If raw PCM (L16), convert to WAV so the browser can play it
        let audioContent = rawBase64;
        let finalMime = mimeType;
        if (mimeType.includes('L16') || mimeType.includes('pcm') || mimeType.includes('raw')) {
            audioContent = pcmToWav(rawBase64);
            finalMime = 'audio/wav';
        }

        return new Response(JSON.stringify({ audioContent, mimeType: finalMime, success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Failed to process request', details: error.message }), {
            status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}
