# KurdLingo Admin Panel - User Guide

## Overview
The KurdLingo Admin Panel is a powerful, user-friendly interface that allows you to edit all game content directly from the website without touching any code. You can modify units, lessons, and exercises with just a few clicks.

## Accessing the Admin Panel

1. Navigate to the Learn page (`/learn`)
2. Click the **"Admin Panel"** button in the top banner
3. You'll be redirected to `/admin`

## Features

### 1. **Units Management**
- View all units in the left sidebar
- Each unit shows:
  - Title
  - Description
  - Number of lessons
- Click on a unit to view its lessons
- Click the ✏️ button to edit unit details (title, description)

### 2. **Lessons Management**
- After selecting a unit, lessons appear in the middle panel
- Each lesson card shows:
  - Lesson title
  - Number of exercises
- Click on a lesson to view its exercises
- Click the "✏️ Edit" button to modify lesson title

### 3. **Exercises Management**
The most powerful feature! You can:
- **View all exercises** in a selected lesson
- **Search exercises** using the search bar
- **Add new exercises** with the "➕ Add Exercise" button
- **Edit any exercise** by clicking "✏️ Edit"
- **Delete exercises** with the "🗑️ Delete" button

### 4. **Exercise Types Supported**

The admin panel supports editing all these game types:

#### Multiple Choice
- Question text
- Multiple options (add/remove as needed)
- Each option has:
  - Text
  - Image (emoji or URL)
  - Correct/incorrect checkbox

#### Sentence Builder
- Question text
- Source text to translate
- Correct sentence (comma-separated words)
- Available options (word bank)

#### Match Pairs
- Multiple pairs of Kurdish ↔️ English words
- Add/remove pairs dynamically

#### Fill in the Blank
- Question text
- Sentence parts (use `___` for blanks)
- Correct answer
- Multiple choice options

#### And More!
- Listening exercises
- Typing exercises
- Conversation exercises
- Image selection
- And all other game types

### 5. **Data Management**

#### Export Data
- Click "📥 Export Data" to download all your content as JSON
- Useful for backups or sharing

#### Reset to Defaults
- Click "🔄 Reset to Defaults" to restore original content
- **Warning**: This cannot be undone!

## How to Edit Content

### Editing a Unit
1. Click the ✏️ button next to a unit
2. Modify the title or description
3. Click "💾 Save" to apply changes
4. Click "❌ Cancel" to discard changes

### Editing a Lesson
1. Select a unit
2. Click "✏️ Edit" on a lesson card
3. Modify the lesson title
4. Click "💾 Save" or "❌ Cancel"

### Editing an Exercise
1. Select a unit → Select a lesson
2. Click "✏️ Edit" on any exercise
3. The exercise editor will open with all fields
4. Modify any field:
   - **Exercise Type**: Choose from dropdown
   - **Question**: Edit the question text
   - **Options/Pairs**: Add, remove, or modify
5. Click "💾 Save Exercise" when done

### Adding a New Exercise
1. Select a unit → Select a lesson
2. Click "➕ Add Exercise"
3. A new exercise editor opens with default values
4. Set the exercise type and fill in all fields
5. Click "💾 Save Exercise"

### Deleting an Exercise
1. Select a unit → Select a lesson
2. Click "🗑️ Delete" on the exercise you want to remove
3. Confirm the deletion

## Data Storage

All changes are automatically saved to your browser's **localStorage**. This means:
- ✅ Changes persist across page refreshes
- ✅ No server required
- ✅ Instant updates
- ⚠️ Data is stored locally on your computer
- ⚠️ Clearing browser data will erase changes

### Upgrading to Backend Storage
The current implementation uses localStorage, but it's designed to be easily upgraded to a backend API. The data structure is already JSON-based and ready for server integration.

## Tips & Best Practices

1. **Make backups**: Export your data regularly
2. **Test changes**: After editing, go to the Learn page to see your changes live
3. **Use search**: When lessons have many exercises, use the search bar
4. **Be specific**: Write clear, descriptive questions
5. **Consistent formatting**: Keep similar exercises formatted the same way

## Keyboard Shortcuts
- **Escape**: Close edit panels (coming soon)
- **Ctrl+S**: Save changes (coming soon)

## Troubleshooting

### Changes not appearing?
- Make sure you clicked "💾 Save"
- Refresh the Learn page to see updates

### Lost changes?
- Check if you exported a backup
- Use "🔄 Reset to Defaults" if needed (loses all custom changes)

### Exercise not displaying correctly?
- Verify all required fields are filled
- Check that the exercise type matches the data structure

## Future Enhancements

Planned features:
- Drag-and-drop exercise reordering
- Bulk edit operations
- Undo/Redo functionality
- Import data from JSON
- Rich text editor for questions
- Image upload support
- Audio file management
- User authentication
- Cloud sync

---

**Need Help?** The admin panel is designed to be intuitive. Experiment freely - you can always reset to defaults!
