import { useState, useCallback, useRef } from 'react';
import { transcribeWithGemini } from '../utils/geminiVoice';

/**
 * useSpeechRecognition - Custom hook for Speech-to-Text using Gemini 2.5 Flash Voice
 */
const useSpeechRecognition = () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const startListening = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                setIsListening(false);
                setError(null);

                // Use Gemini for the actual transcription
                const text = await transcribeWithGemini(audioBlob);
                setTranscript(text);

                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsListening(true);
            setTranscript('');
        } catch (err) {
            setError('Could not access microphone.');
            console.error(err);
        }
    }, []);

    const stopListening = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
    }, []);

    return {
        transcript,
        isListening,
        error,
        startListening,
        stopListening,
    };
};

export default useSpeechRecognition;
