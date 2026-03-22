// ─── PRACTICE QUESTIONS ──────────────────────────────────────────────────────
export const PRACTICE_QUESTIONS = [
  {
    id: 1,
    question: "What does 'albeit' mean in academic writing?",
    options: [
      { text: "Therefore", correct: false },
      { text: "Although / even though", correct: true },
      { text: "Because", correct: false },
      { text: "Despite only", correct: false },
    ],
    explanation: "'Albeit' is a formal conjunction meaning 'although'. E.g. 'The result was positive, albeit inconclusive.'"
  },
  {
    id: 2,
    question: "Which tense is: 'She has been studying for three hours'?",
    options: [
      { text: "Past Simple", correct: false },
      { text: "Present Continuous", correct: false },
      { text: "Present Perfect Continuous", correct: true },
      { text: "Past Perfect", correct: false },
    ],
    explanation: "Present Perfect Continuous (has/have + been + -ing) describes an action that started in the past and is still continuing."
  },
  {
    id: 3,
    question: "Choose the correct form: 'Neither the students nor the teacher ___ here yet.'",
    options: [
      { text: "are", correct: false },
      { text: "is", correct: true },
      { text: "were", correct: false },
      { text: "have been", correct: false },
    ],
    explanation: "With 'neither...nor', the verb agrees with the nearest subject. 'Teacher' is singular → 'is'."
  },
  {
    id: 4,
    question: "Which sentence uses the passive voice correctly?",
    options: [
      { text: "The teacher explained the lesson.", correct: false },
      { text: "The lesson was explained by the teacher.", correct: true },
      { text: "The lesson explained itself.", correct: false },
      { text: "The teacher is explaining the lesson.", correct: false },
    ],
    explanation: "Passive: Object + 'to be' + past participle + 'by' + agent."
  },
  {
    id: 5,
    question: "Choose the correct preposition: 'She is interested ___ learning Arabic.'",
    options: [
      { text: "in", correct: true },
      { text: "on", correct: false },
      { text: "at", correct: false },
      { text: "for", correct: false },
    ],
    explanation: "'Interested in' is the fixed collocation."
  },
  {
    id: 6,
    question: "In academic writing, 'however' is used to show:",
    options: [
      { text: "Addition", correct: false },
      { text: "Cause and effect", correct: false },
      { text: "Contrast", correct: true },
      { text: "Illustration", correct: false },
    ],
    explanation: "'However' is a contrast connector, like 'but', 'nevertheless'."
  },
  {
    id: 7,
    question: "Choose the most formal option: 'The results were really good.'",
    options: [
      { text: "very", correct: false },
      { text: "significantly", correct: true },
      { text: "a lot", correct: false },
      { text: "super", correct: false },
    ],
    explanation: "Academic writing avoids 'really/very'. Use: significantly, considerably, substantially."
  },
  {
    id: 8,
    question: "What is the correct third conditional? 'If I ___ earlier, I would not have missed the bus.'",
    options: [
      { text: "left", correct: false },
      { text: "had left", correct: true },
      { text: "have left", correct: false },
      { text: "would leave", correct: false },
    ],
    explanation: "Third conditional: If + past perfect, would have + past participle."
  },
  {
    id: 9,
    question: "Which word best completes: 'The research ___ that exercise reduces stress.'",
    options: [
      { text: "says", correct: false },
      { text: "thinks", correct: false },
      { text: "demonstrates", correct: true },
      { text: "tells", correct: false },
    ],
    explanation: "Academic reporting verbs: demonstrates, suggests, indicates, reveals."
  },
  {
    id: 10,
    question: "Which is a correct example of a relative clause?",
    options: [
      { text: "The student, whose essay was excellent, received full marks.", correct: true },
      { text: "The student, who's essay was excellent, received full marks.", correct: false },
      { text: "The student, which essay was excellent, got full marks.", correct: false },
      { text: "The student whose essay was excellent received full marks.", correct: false },
    ],
    explanation: "'Whose' is the possessive relative pronoun. Non-defining clauses need commas on both sides."
  }
];

// ─── SPEAKING TASKS ──────────────────────────────────────────────────────────
export const SPEAKING_TASKS = [
  {
    id: 1,
    phrase: "My greatest academic strength is my ability to analyze complex information.",
    translation: "تواناتراین خالی فێربوونیم ئەوەیە کە زانیاری ئاڵۆز شی بکەمەوە.",
    tips: ["Stress 'greatest' and 'analyze'", "Link 'ability to' smoothly", "Maintain a steady pace"]
  },
  {
    id: 2,
    phrase: "Higher education plays a significant role in personal and professional development.",
    translation: "خوێندنی بەرز ڕۆلێکی گرنگی هەیە لە گەشەی کەسی و پیشەیی.",
    tips: ["Stress 'significant' and 'development'", "Don't rush 'personal and professional'"]
  },
  {
    id: 3,
    phrase: "I believe that critical thinking skills are essential for success at university.",
    translation: "باوەڕم وایە تواناکانی بیرکردنەوەی رەخنەگرانە زۆر گرنگن بۆ سەرکەوتن لە زانکۆ.",
    tips: ["'Critical' = krit-i-kəl", "Stress 'essential'", "Clear /s/ in 'success'"]
  }
];

// ─── LISTENING TRACKS ─────────────────────────────────────────────────────────
// Each track has structured turns so Gemini can assign a distinct voice per speaker.
// PINNED VOICES — these never change:
//   Liam  → Charon  (deep, confident American male)
//   Sarah → Aoede   (warm, natural American female)
//   Alex  → Puck    (upbeat, casual American male)
//   Nadia → Kore    (clear, professional American female)

export const LISTENING_TRACKS = [
  {
    id: 1,
    title: "Applying to University",
    badge: "Informational",
    speakerVoices: [
      { speaker: "Liam",  voice: "Charon" },
      { speaker: "Sarah", voice: "Aoede"  },
    ],
    turns: [
      { speaker: "Liam",  line: "Hey Sarah, are you seriously applying to universities overseas this year?" },
      { speaker: "Sarah", line: "Yeah! I've been researching programs all week. Honestly, it's kind of overwhelming." },
      { speaker: "Liam",  line: "I totally get that. Have you sorted out your English test scores yet?" },
      { speaker: "Sarah", line: "Working on it. Most universities want an IELTS or TOEFL score. I'm shooting for band seven on IELTS." },
      { speaker: "Liam",  line: "That's a solid target. Seven is definitely competitive for most programs." },
      { speaker: "Sarah", line: "And then there's the personal statement. That's been the hardest part for me by far." },
      { speaker: "Liam",  line: "Same. My professor helped me revise mine like three times before I was actually happy with it." },
      { speaker: "Sarah", line: "I still need two recommendation letters from my teachers. I keep putting that off." },
      { speaker: "Liam",  line: "Don't wait too long. Most deadlines fall between October and January for the following academic year." },
      { speaker: "Sarah", line: "I've got it all in my calendar, don't worry. Fingers crossed everything goes smoothly." },
    ],
    questions: [
      {
        text: "What English proficiency score is Sarah aiming for?",
        options: [
          { text: "Band 6 on IELTS", correct: false },
          { text: "Band 7 on IELTS", correct: true },
          { text: "Score 100 on TOEFL", correct: false },
          { text: "Band 8 on IELTS", correct: false },
        ]
      },
      {
        text: "According to Liam, when are most application deadlines?",
        options: [
          { text: "March to June", correct: false },
          { text: "June to September", correct: false },
          { text: "October to January", correct: true },
          { text: "February to May", correct: false },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Campus Life – First Semester",
    badge: "Conversational",
    speakerVoices: [
      { speaker: "Alex",  voice: "Puck" },
      { speaker: "Nadia", voice: "Kore" },
    ],
    turns: [
      { speaker: "Alex",  line: "Hey Nadia, how are you finding campus life so far?" },
      { speaker: "Nadia", line: "Honestly? The first semester was way harder than I expected. Managing everything on my own was tough." },
      { speaker: "Alex",  line: "Yeah, it hits different when suddenly you're responsible for your whole schedule." },
      { speaker: "Nadia", line: "Exactly. But the university support services helped a lot. The academic tutoring center especially." },
      { speaker: "Alex",  line: "Yes! I actually used the career guidance office too. They helped me prep for internship interviews." },
      { speaker: "Nadia", line: "Nice. Did you end up joining any clubs or anything?" },
      { speaker: "Alex",  line: "I joined the debate society. My public speaking improved so much. Like, dramatically." },
      { speaker: "Nadia", line: "I joined a study group for my economics module. My grades went up significantly after that." },
      { speaker: "Alex",  line: "That's basically the secret — build connections early. You can't do university alone and survive it." },
      { speaker: "Nadia", line: "Hundred percent. I honestly wish someone had told me that on day one." },
    ],
    questions: [
      {
        text: "What improved significantly for Nadia after joining the study group?",
        options: [
          { text: "Her public speaking", correct: false },
          { text: "Her grades", correct: true },
          { text: "Her time management", correct: false },
          { text: "Her CV writing", correct: false },
        ]
      },
      {
        text: "Which service did Alex use to prepare for internship interviews?",
        options: [
          { text: "Academic tutoring center", correct: false },
          { text: "The debate society", correct: false },
          { text: "Career guidance office", correct: true },
          { text: "A study group", correct: false },
        ]
      }
    ]
  }
];

// ─── WRITING TASKS ────────────────────────────────────────────────────────────
export const WRITING_TASKS = [
  {
    id: 1,
    task: "Some people believe that unpaid community service should be a compulsory part of high school programs. To what extent do you agree or disagree?",
    minWords: 200,
    tips: [
      "State your position clearly in the introduction.",
      "Write 2–3 body paragraphs with specific examples.",
      "Use contrast connectors: 'However', 'On the other hand'.",
      "Conclude by restating your position."
    ]
  },
  {
    id: 2,
    task: "Universities should accept equal numbers of male and female students in every subject. Discuss both views and give your own opinion.",
    minWords: 250,
    tips: [
      "Discuss BOTH views fairly in separate paragraphs.",
      "Use academic vocabulary: 'advocate', 'contend', 'implementation'.",
      "Your opinion should appear in introduction and conclusion.",
      "Avoid first-person overuse — vary with 'It is argued that...'"
    ]
  }
];
