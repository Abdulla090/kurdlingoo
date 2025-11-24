# 🎓 KurdLingo

**KurdLingo** is a modern, interactive language learning platform designed to help users learn Kurdish (Sorani) through engaging exercises and beautiful UI.

![Kurdish Language Learning](https://img.shields.io/badge/Language-Kurdish%20(Sorani)-green)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

## ✨ Features

### 🎮 Interactive Learning Exercises
- **Multiple Choice** - Select the correct translation with visual icons
- **Sentence Builder** - Construct sentences by arranging words
- **Match Pairs** - Connect Kurdish words with English translations
- **Image Selection** - Learn vocabulary through visual association
- **Typing Practice** - Write translations to reinforce learning

### 📚 Comprehensive Content
- **4 Complete Units** covering basics to advanced topics
- **Guidebooks** with grammar explanations, cultural notes, and examples
- **Professional Icons** using Lucide React for clean, modern UI
- **RTL Support** for proper Kurdish (Sorani) text display

### 🎨 Premium Design
- **3D Button Effects** with tactile press animations
- **Dark Green Theme** inspired by Duolingo
- **Collapsible Sidebar** for better screen space management
- **Responsive Design** works on desktop and mobile
- **Kurdish Default** - Interface defaults to Kurdish language

### 🏆 Gamification
- **Progress Tracking** with visual progress bars
- **Lives System** to encourage careful learning
- **XP Points** for completed lessons
- **Streak Counter** to maintain daily practice
- **Leaderboard** (coming soon)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdulla090/kurdlingoo.git
cd kurdlingoo

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
# or
npm run build
```

## 📖 Project Structure

```
kurdlingo-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   └── Layout/
│   ├── pages/              # Main application pages
│   │   ├── Learn/          # Learning path with units
│   │   ├── Lesson/         # Exercise interface
│   │   ├── Guidebook/      # Grammar & culture guides
│   │   ├── GuidebookHub/   # Guidebook directory
│   │   ├── Leaderboard/    # Competition rankings
│   │   ├── Quests/         # Daily challenges
│   │   ├── Shop/           # Power-ups store
│   │   └── Profile/        # User statistics
│   ├── data/
│   │   ├── courses/        # Unit content (unit1-4)
│   │   └── translations.js # UI translations
│   ├── context/            # React context providers
│   └── styles/             # Global styles & variables
├── public/                 # Static assets
└── package.json
```

## 🎯 Units Overview

### Unit 1: Basics, Greetings, and Numbers
- Basic greetings and introductions
- Numbers 1-10
- Common phrases
- Colors and days of the week

### Unit 2: Conversations & Daily Life
- Family members
- Shopping and directions
- Weather and time
- Food and dining

### Unit 3: Culture, Work & Travel
- Kurdish cuisine
- Cultural celebrations
- Travel vocabulary
- Professional contexts

### Unit 4: Advanced Topics
- Business and work
- Health and appointments
- Banking and finance
- Opinions and beliefs

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Lucide React** - Icon library
- **CSS Variables** - Theming system
- **LocalStorage** - Data persistence

## 🌍 Localization

The app supports:
- **Kurdish (Sorani)** - ckb (default)
- **English** - en

RTL (Right-to-Left) layout is automatically applied for Kurdish.

## 🎨 Design Philosophy

KurdLingo follows a "Senior Designer" standard with:
- **High contrast** for accessibility (WCAG AAA)
- **3D tactile buttons** for satisfying interactions
- **Clean canvas** with generous white space
- **Professional typography** (Inter, Vazirmatn for Kurdish)
- **Consistent spacing** using 8px grid system

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

**Abdulla**
- GitHub: [@Abdulla090](https://github.com/Abdulla090)

## 🙏 Acknowledgments

- Inspired by Duolingo's gamified learning approach
- Kurdish language content curated for authentic learning
- Built with modern web technologies for optimal performance

---

**Made with ❤️ for Kurdish language learners**
