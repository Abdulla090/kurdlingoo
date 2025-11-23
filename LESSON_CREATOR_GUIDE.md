# 🎨 KurdLingo Lesson Creator Feature

## Overview
I've added a powerful **Lesson Creator** system that allows users to create custom lessons both **manually** and with **AI assistance** using Gemini.

## ✨ Features Implemented

### 1. **Manual Lesson Creation**
Users can create custom exercises with full control:

#### Supported Exercise Types:
- ✅ **Multiple Choice** - Add options with correct/incorrect flags
- ✅ **Sentence Builder** - Define correct sentence and word bank
- ✅ **Match Pairs** - Create Kurdish-English matching pairs
- ✅ **Fill in the Blank** - Set sentence parts and correct answer

#### Creator Interface:
- Lesson title input
- Exercise type selector
- Dynamic form fields based on exercise type
- Add/remove options, pairs, etc.
- Preview of all created exercises
- Save to localStorage

### 2. **AI-Powered Generation** 🤖
- **Gemini AI Integration**: Uses `@google/generative-ai` package
- **Topic-Based**: User enters a topic (e.g., "Kurdish colors", "Family members")
- **Auto-Generate**: AI creates 5 exercises automatically
- **Mixed Types**: AI generates different exercise types for variety

### 3. **Custom Lesson Display**
- Custom lessons appear in a special section on the Learn page
- Purple gradient header to distinguish from official content
- Saved to localStorage (persists across sessions)
- Clickable lesson nodes that work with the existing Lesson engine

## 📁 Files Created/Modified

### New Files:
1. `src/pages/LessonCreator/LessonCreator.jsx` - Main creator component
2. `src/pages/LessonCreator/LessonCreator.css` - Creator styles
3. `GEMINI_SETUP.md` - API key setup instructions

### Modified Files:
1. `src/App.jsx` - Added `/create-lesson` route
2. `src/pages/Learn/Learn.jsx` - Shows custom lessons + create button
3. `src/pages/Learn/Learn.css` - Added banner styles
4. `src/pages/Lesson/Lesson.jsx` - Supports loading custom lessons
5. `package.json` - Added `@google/generative-ai` dependency

## 🚀 How to Use

### Manual Creation:
1. Go to `/learn`
2. Click **"Create Your Own Lesson"** button
3. Enter lesson title
4. Select exercise type
5. Fill in question and answers
6. Click "Add Exercise"
7. Repeat for more exercises
8. Click "Save Lesson"

### AI Generation:
1. Go to `/create-lesson`
2. Enter a topic in the AI section
3. Click "Generate with AI"
4. AI creates 5 exercises automatically
5. Review and save

## ⚙️ Gemini API Setup

To enable AI generation, you need to:

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create `.env` file:
```env
VITE_GEMINI_API_KEY=your_key_here
```
3. Update line 94 in `LessonCreator.jsx`:
```javascript
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
```

**Note**: Currently has placeholder `'YOUR_GEMINI_API_KEY'` - replace with actual key or env variable.

## 💾 Data Storage
- Custom lessons saved to `localStorage` under key `'customLessons'`
- Persists across browser sessions
- Each lesson has unique ID: `custom-{timestamp}`

## 🎯 Next Steps
- Add edit/delete functionality for custom lessons
- Export/import lessons as JSON
- Share lessons with other users
- Add more exercise types (audio, images, etc.)
- Improve AI prompts for better Kurdish content
