export const CONFIG = {
    // API key is loaded from environment variable for security
    // Set VITE_GOOGLE_AI_API_KEY in your .env file
    GEMINI_API_KEY: import.meta.env.VITE_GOOGLE_AI_API_KEY || '',
};
