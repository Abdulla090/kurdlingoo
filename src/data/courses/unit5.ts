import { Unit } from '../../types';

export const unit5: Unit = {
    id: "unit-5",
    title: "Challenge Arena 🏆",
    description: "Test your skills with fast-paced games — translate phrases, build sentences & speed match!",
    guidebook: {
        introduction: "Welcome to the Challenge Arena! Here, speed and accuracy are king. Master three game modes that test your Kurdish language skills under pressure.",
        sections: [
            {
                id: "arena-modes",
                title: "Game Modes",
                content: "⚡ Translation Blitz — See a Kurdish phrase, pick the right English translation fast!\n\n🧩 Sentence Builder — Arrange scrambled Kurdish words to form the correct sentence.\n\n🔥 Speed Match — Match Kurdish phrases to English meanings in a column-based challenge!"
            },
            {
                id: "arena-scoring",
                title: "How Scoring Works",
                content: "Earn points for each correct answer — bonus points for speed and streaks! Build combos by answering correctly in a row. Higher difficulty phrases earn more points. Climb the leaderboard and beat your high score!"
            }
        ],
        keyPhrases: [
            { english: "Fast", kurdish: "خێرا", pronunciation: "Khêra" },
            { english: "Score", kurdish: "خاڵ", pronunciation: "Khaḷ" },
            { english: "Match", kurdish: "هاوتا", pronunciation: "Hawta" },
            { english: "Win", kurdish: "بردنەوە", pronunciation: "Birdinewe" },
            { english: "Time", kurdish: "کات", pronunciation: "Kat" },
            { english: "Challenge", kurdish: "چالاکی", pronunciation: "Chalakî" }
        ]
    },
    lessons: [
        {
            id: "neuro-match-1",
            title: "Challenge Arena",
            icon: "⚡",
            type: "game",
            gameId: "neuromatch",
            exercises: []
        }
    ]
};
