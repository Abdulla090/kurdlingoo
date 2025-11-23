# KurdLingo - Gemini API Setup

To enable AI-powered lesson generation, you need to add your Gemini API key.

## Steps:

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

2. Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

3. Update `LessonCreator.jsx` line 94 to use the environment variable:

```javascript
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
```

4. Restart the dev server

## Alternative (Quick Test):

Replace `'YOUR_GEMINI_API_KEY'` on line 94 of `LessonCreator.jsx` with your actual API key (not recommended for production).
