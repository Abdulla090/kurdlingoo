// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Mic, MicOff, Play, Pause, RotateCcw, Volume2, Loader2 } from 'lucide-react';
import { sendChatMessage, requestMultiTTS } from '../../services/api';
import { PRACTICE_QUESTIONS, SPEAKING_TASKS, LISTENING_TRACKS, WRITING_TASKS } from './eltisData';
import './Eltis.css';

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
}

function browserSpeak(text: string, rate = 0.9) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US'; utt.rate = rate; utt.pitch = 0.95;
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang.startsWith('en'));
  const male = en.find(v => /David|Mark|Daniel|Google UK English Male/i.test(v.name)) || en[0];
  if (male) utt.voice = male;
  window.speechSynthesis.speak(utt);
}

function WaveBars({ active }: { active: boolean }) {
  return (
    <div className="eltis-waveform">
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} className={`eltis-wave-bar ${active ? 'recording' : 'idle'}`}
          style={{ animationDelay: `${i * 0.07}s`, animationDuration: active ? `${0.3 + (i % 5) * 0.07}s` : `${1 + (i % 4) * 0.3}s` }} />
      ))}
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
type View = 'hero' | 'practice' | 'speaking' | 'listening' | 'writing';

export default function Eltis() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>('hero');
  const [pts, setPts] = useState(0);
  const addPts = (n: number) => setPts(p => p + n);
  const goBack = () => setView('hero');

  return (
    <div className="eltis-page">
      <header className="eltis-header">
        <button className="eltis-back-btn" onClick={view === 'hero' ? () => navigate(-1) : goBack} aria-label="Back">
          {view === 'hero' ? <X size={22} /> : <ChevronLeft size={22} />}
        </button>
        <div className="eltis-header-center">
          <div className="eltis-header-title">ELTIS</div>
          {view !== 'hero' && (
            <div className="eltis-header-sub">
              {{ practice: 'Practice Quiz', speaking: 'Speaking', listening: 'Listening', writing: 'Writing' }[view]}
            </div>
          )}
        </div>
        <div className="eltis-header-right">
          {view !== 'hero' && <div className="eltis-progress-pill">🌟 {pts} pts</div>}
        </div>
      </header>

      <div className="eltis-content">
        {view === 'hero'      && <HeroView onSelect={v => { setView(v); setPts(0); }} />}
        {view === 'practice'  && <PracticeShell addPts={addPts} />}
        {view === 'speaking'  && <SpeakingShell addPts={addPts} />}
        {view === 'listening' && <ListeningShell addPts={addPts} />}
        {view === 'writing'   && <WritingShell addPts={addPts} />}
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroView({ onSelect }) {
  const programs = [
    { id: 'practice',  icon: '🎯', name: 'Practice',  desc: '10 ELTIS-style grammar & vocabulary questions with AI explanations' },
    { id: 'speaking',  icon: '🎙️', name: 'Speaking',  desc: 'Record yourself, get live transcript and AI pronunciation feedback' },
    { id: 'listening', icon: '🎧', name: 'Listening', desc: 'Real Gemini AI multi-speaker audio dialogues with comprehension questions' },
    { id: 'writing',   icon: '✍️', name: 'Writing',   desc: 'Essay prompts with live word count and Gemini AI band score analysis' },
  ];
  return (
    <section className="eltis-hero">
      <h1 className="eltis-hero-heading">Train like the<br />exam is tomorrow.</h1>
      <p className="eltis-hero-sub">Choose a program and start a focused session.</p>
      <div className="eltis-program-grid">
        {programs.map(p => (
          <button key={p.id} className="eltis-program-card" onClick={() => onSelect(p.id)}>
            <div className="eltis-program-icon">{p.icon}</div>
            <div className="eltis-program-name">{p.name}</div>
            <div className="eltis-program-desc">{p.desc}</div>
            <div className="eltis-program-arrow">Start →</div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── PRACTICE ─────────────────────────────────────────────────────────────────
function PracticeShell({ addPts }) {
  const [questions] = useState(() => shuffle(PRACTICE_QUESTIONS));
  const [shuffledOpts] = useState(() => questions.map(q => shuffle(q.options)));
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const q = questions[qIdx];

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (shuffledOpts[qIdx][i].correct) { setScore(s => s + 1); addPts(10); }
  };

  const handleNext = () => {
    const next = qIdx + 1;
    if (next >= questions.length) { clearInterval(timerRef.current); setDone(true); }
    else { setQIdx(next); setSelected(null); setAnswered(false); }
  };

  if (done) return (
    <div className="eltis-complete">
      <div className="eltis-complete-icon">🏆</div>
      <h2>Quiz Complete!</h2>
      <div className="eltis-complete-xp">+{score * 10} XP</div>
      <div className="eltis-complete-score">{score}/{questions.length} correct &nbsp;•&nbsp; ⏱ {fmtTime(timer)}</div>
      <button className="eltis-btn-primary" onClick={() => { setQIdx(0); setScore(0); setSelected(null); setAnswered(false); setDone(false); setTimer(0); }}>Try Again</button>
    </div>
  );

  return (
    <div style={{ paddingTop: 12 }}>
      <div className="eltis-quiz-progress-track">
        <div className="eltis-quiz-progress-fill" style={{ width: `${Math.max((qIdx / questions.length) * 100, 2)}%` }} />
      </div>
      <div className="eltis-question-card" key={q.id}>
        <div className="eltis-question-label">Question {qIdx + 1}/{questions.length} &nbsp;•&nbsp; ⏱ {fmtTime(timer)}</div>
        <div className="eltis-question-text">{q.question}</div>
        <div className="eltis-options-list">
          {shuffledOpts[qIdx].map((opt, i) => {
            let cls = 'eltis-option';
            if (answered) cls += opt.correct ? ' correct' : i === selected ? ' wrong' : '';
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={answered}>
                <div className="eltis-option-indicator" />{opt.text}
              </button>
            );
          })}
        </div>
        {answered && <div className="eltis-explanation">💡 <strong>Explanation:</strong> {q.explanation}</div>}
        {answered && (
          <button className="eltis-next-btn" onClick={handleNext}>
            {qIdx + 1 >= questions.length ? 'See Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── SPEAKING ─────────────────────────────────────────────────────────────────
function SpeakingShell({ addPts }) {
  const [taskIdx, setTaskIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [aiFeedback, setAiFeedback] = useState<{ score: string; bullets: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const recRef = useRef<any>(null);
  const finalTranscriptRef = useRef('');
  const task = SPEAKING_TASKS[taskIdx];

  const startRec = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert('Speech recognition requires Chrome or Edge browser.'); return; }
    const rec = new SR();
    recRef.current = rec;
    rec.lang = 'en-US'; rec.continuous = false; rec.interimResults = true;
    rec.onstart = () => { setRecording(true); setTranscript(''); setConfidence(null); setAiFeedback(null); finalTranscriptRef.current = ''; };
    rec.onresult = (e) => {
      let inter = '', fin = '';
      for (const r of e.results) {
        if (r.isFinal) { fin += r[0].transcript; setConfidence(Math.round(r[0].confidence * 100)); }
        else inter += r[0].transcript;
      }
      const combined = fin || inter;
      setTranscript(combined);
      if (fin) finalTranscriptRef.current = fin;
    };
    rec.onerror = () => setRecording(false);
    rec.onend = async () => {
      setRecording(false);
      const text = finalTranscriptRef.current || transcript;
      if (!text.trim()) return;
      setLoading(true);
      addPts(15);
      setCompletedCount(c => c + 1);
      try {
        const prompt = `You are an ELTIS English speaking coach. The student was asked to say:
"${task.phrase}"
They said: "${text}"
Give concise feedback as JSON only (no markdown):
{"score":"X/10","bullets":["specific tip 1","specific tip 2","specific tip 3"]}
Focus on pronunciation accuracy, fluency, and any grammar issues.`;
        const res = await sendChatMessage(prompt, 'You are a strict JSON generator. Return ONLY valid JSON with no markdown fencing.');
        const clean = res.response.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(clean);
        setAiFeedback(parsed);
      } catch {
        setAiFeedback({ score: `${confidence ?? 7}/10`, bullets: task.tips });
      } finally { setLoading(false); }
    };
    rec.start();
  };

  const stopRec = () => recRef.current?.stop();

  const handleNext = () => {
    if (taskIdx + 1 >= SPEAKING_TASKS.length) setDone(true);
    else { setTaskIdx(i => i + 1); setTranscript(''); setConfidence(null); setAiFeedback(null); }
  };

  if (done) return (
    <div className="eltis-complete">
      <div className="eltis-complete-icon">🎙️</div>
      <h2>Speaking Complete!</h2>
      <div className="eltis-complete-xp">+{completedCount * 15} XP</div>
      <div className="eltis-complete-score">{completedCount} tasks completed</div>
      <button className="eltis-btn-primary" onClick={() => { setTaskIdx(0); setDone(false); setTranscript(''); setAiFeedback(null); setCompletedCount(0); }}>Practice Again</button>
    </div>
  );

  return (
    <div className="eltis-speaking-wrap">
      <div className="eltis-quiz-progress-track">
        <div className="eltis-quiz-progress-fill" style={{ width: `${(taskIdx / SPEAKING_TASKS.length) * 100}%` }} />
      </div>
      <div className="eltis-speaking-prompt-card">
        <div className="eltis-speak-label">📢 Say this phrase &nbsp;•&nbsp; Task {taskIdx + 1}/{SPEAKING_TASKS.length}</div>
        <div className="eltis-speak-phrase">{task.phrase}</div>
        <div className="eltis-speak-translation">{task.translation}</div>
      </div>
      <div className="eltis-waveform-area">
        <WaveBars active={recording} />
        <button className={`eltis-record-btn ${recording ? 'recording' : ''}`}
          onClick={recording ? stopRec : startRec} aria-label={recording ? 'Stop' : 'Record'}>
          {recording ? <MicOff size={30} /> : <Mic size={30} />}
        </button>
        <div className="eltis-record-instruction">
          {recording ? '🔴 Recording… tap to stop' : 'Tap the mic and speak clearly in English'}
        </div>
        <button className="eltis-tts-model-btn" onClick={() => browserSpeak(task.phrase, 0.85)}>
          <Volume2 size={16} /> Hear model pronunciation
        </button>
      </div>

      <div className={`eltis-transcript-box ${transcript ? 'has-text' : ''}`}>
        {transcript || 'Your speech will appear here as you speak…'}
      </div>

      {loading && <div className="eltis-ai-loading"><Loader2 size={20} className="spin" /> Analysing with Gemini AI…</div>}

      {aiFeedback && !loading && (
        <div className="eltis-speak-feedback">
          <div className="eltis-score-badge">{aiFeedback.score}</div>
          <ul className="eltis-feedback-bullets">
            {aiFeedback.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}

      {!transcript && !recording && (
        <div className="eltis-explanation">
          📌 <strong>Tips:</strong>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>{task.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
      )}

      {(aiFeedback || confidence !== null) && !loading && (
        <button className="eltis-next-btn" onClick={handleNext}>
          {taskIdx + 1 >= SPEAKING_TASKS.length ? 'Finish →' : 'Next Task →'}
        </button>
      )}
    </div>
  );
}

// ─── LISTENING ────────────────────────────────────────────────────────────────
// Uses Gemini multi-speaker TTS: each character has a PINNED voice that never changes.
// Track 1: Liam = Charon (deep male), Sarah = Aoede (warm female)
// Track 2: Alex = Puck (upbeat male), Nadia = Kore (clear female)

function ListeningShell({ addPts }) {
  const [trackIdx, setTrackIdx]   = useState(0);
  const [audioUrl, setAudioUrl]   = useState<string | null>(null);
  const [loading, setLoading]     = useState(false);
  const [genError, setGenError]   = useState('');
  const [playing, setPlaying]     = useState(false);
  const [elapsed, setElapsed]     = useState(0);
  const [duration, setDuration]   = useState(0);
  const [speed, setSpeed]         = useState(1);
  const [showScript, setShowScript] = useState(false);
  const [answers, setAnswers]     = useState<Record<number,number>>({});
  const [results, setResults]     = useState<Record<number,boolean>>({});
  const [done, setDone]           = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevUrlRef = useRef<string | null>(null);

  const track = LISTENING_TRACKS[trackIdx];

  // Build plain-text script for display
  const scriptText = track.turns.map(t => `${t.speaker}: ${t.line}`).join('\n\n');

  // Called once per track: generate audio from Gemini multi-speaker TTS
  const generateAudio = async () => {
    setLoading(true); setGenError(''); setAudioUrl(null);
    setPlaying(false); setElapsed(0); setDuration(0);

    try {
      const res = await requestMultiTTS(track.turns, track.speakerVoices);

      if (!res.success || !res.audioContent) throw new Error(res.error || 'No audio returned');

      // Decode base64 → Blob → Object URL
      const bin = atob(res.audioContent);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const blob = new Blob([bytes], { type: res.mimeType || 'audio/wav' });
      const url  = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (e: any) {
      setGenError(e.message || 'Gemini TTS failed — using browser voice fallback');
      setAudioUrl('BROWSER_TTS');
    } finally {
      setLoading(false);
    }
  };

  // Reset & generate whenever track changes
  useEffect(() => {
    if (prevUrlRef.current && prevUrlRef.current !== 'BROWSER_TTS') {
      URL.revokeObjectURL(prevUrlRef.current);
    }
    prevUrlRef.current = null;
    setAnswers({}); setResults({}); setShowScript(false);
    generateAudio();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIdx]);

  // Wire the audio element whenever we get a real URL
  useEffect(() => {
    if (!audioUrl || audioUrl === 'BROWSER_TTS') return;
    prevUrlRef.current = audioUrl;

    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    audio.playbackRate = speed;
    audio.onloadedmetadata = () => setDuration(audio.duration);
    audio.ontimeupdate    = () => setElapsed(audio.currentTime);
    audio.onended         = () => setPlaying(false);
    audio.onpause         = () => setPlaying(false);
    audio.onplay          = () => setPlaying(true);

    return () => { audio.pause(); audioRef.current = null; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUrl]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  const togglePlay = () => {
    if (audioUrl === 'BROWSER_TTS') {
      if (playing) { window.speechSynthesis.cancel(); setPlaying(false); }
      else { browserSpeak(scriptText, speed * 0.85); setPlaying(true); }
      return;
    }
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || audioUrl === 'BROWSER_TTS' || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const t = ((e.clientX - rect.left) / rect.width) * duration;
    audioRef.current.currentTime = t;
    setElapsed(t);
  };

  const handleRestart = () => {
    window.speechSynthesis.cancel();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    setElapsed(0); setPlaying(false);
  };

  const handleAnswer = (qi: number, oi: number, correct: boolean) => {
    if (answers[qi] !== undefined) return;
    setAnswers(a => ({ ...a, [qi]: oi }));
    setResults(r => ({ ...r, [qi]: correct }));
    if (correct) addPts(10);
  };

  const allAnswered = track.questions.every((_, i) => answers[i] !== undefined);
  const fillPct = duration > 0 ? Math.min((elapsed / duration) * 100, 100) : 0;

  const handleNextTrack = () => {
    if (trackIdx + 1 >= LISTENING_TRACKS.length) setDone(true);
    else setTrackIdx(i => i + 1);
  };

  if (done) return (
    <div className="eltis-complete">
      <div className="eltis-complete-icon">🎧</div>
      <h2>Listening Complete!</h2>
      <div className="eltis-complete-xp">+{Object.values(results).filter(Boolean).length * 10} XP</div>
      <div className="eltis-complete-score">{Object.values(results).filter(Boolean).length} correct answers</div>
      <button className="eltis-btn-primary" onClick={() => { setTrackIdx(0); setDone(false); }}>Listen Again</button>
    </div>
  );

  return (
    <div className="eltis-listening-wrap">
      <div className="eltis-quiz-progress-track">
        <div className="eltis-quiz-progress-fill" style={{ width: `${(trackIdx / LISTENING_TRACKS.length) * 100}%` }} />
      </div>

      <div className="eltis-audio-player">
        <div className="eltis-audio-header">
          <div>
            <div className="eltis-audio-title">{track.title}</div>
            {/* Show which voices are being used */}
            <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
              {track.speakerVoices.map(sv => (
                <span key={sv.speaker} className="eltis-voice-chip">
                  {sv.speaker} <span style={{ opacity: 0.6 }}>· {sv.voice}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="eltis-audio-badge">{track.badge}</div>
        </div>

        {loading && (
          <div className="eltis-ai-loading">
            <Loader2 size={18} className="spin" />
            Generating AI voices with Gemini ({track.speakerVoices.map(v => v.voice).join(' + ')})…
          </div>
        )}

        {genError && !loading && (
          <div className="eltis-explanation" style={{ marginBottom: 12 }}>⚠️ {genError}</div>
        )}

        {!loading && (
          <>
            <div className="eltis-audio-controls" style={{ marginTop: 16 }}>
              <button className="eltis-btn-play" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
                {playing ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="eltis-scrubber" onClick={handleScrub} role="slider" aria-label="Seek audio">
                <div className="eltis-scrubber-track">
                  <div className="eltis-scrubber-fill" style={{ width: `${fillPct}%` }} />
                </div>
              </div>
              <button
                style={{ background: 'none', border: '2px solid var(--color-border)', borderRadius: 8, padding: '6px 10px', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={handleRestart} aria-label="Restart">
                <RotateCcw size={14} />
              </button>
            </div>

            <div className="eltis-audio-times">
              <span>{fmtTime(elapsed)}</span>
              <span>{duration > 0 ? fmtTime(duration) : '--:--'}</span>
            </div>

            <div className="eltis-speed-controls">
              {[0.75, 1, 1.25, 1.5].map(s => (
                <button key={s} className={`eltis-speed-btn ${speed === s ? 'active' : ''}`}
                  onClick={() => setSpeed(s)}>{s}x
                </button>
              ))}
            </div>
          </>
        )}

        {/* Re-generate button in case of error */}
        {!loading && (
          <button className="eltis-transcript-toggle" style={{ marginTop: 14 }} onClick={generateAudio}>
            🔄 Re-generate audio
          </button>
        )}

        {/* Script toggle */}
        <div style={{ marginTop: 10 }}>
          <button className="eltis-transcript-toggle" onClick={() => setShowScript(v => !v)}>
            📄 {showScript ? 'Hide script ↑' : 'Show script ↓'}
          </button>
          {showScript && (
            <div className="eltis-transcript-text" style={{ whiteSpace: 'pre-line' }}>
              {track.turns.map((t, i) => (
                <span key={i}>
                  <strong style={{ color: 'var(--color-primary)' }}>{t.speaker}:</strong> {t.line}{'\n\n'}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Comprehension questions */}
      <div className="eltis-listening-questions">
        <h3>🧠 Comprehension Questions</h3>
        {track.questions.map((q, qi) => (
          <div key={qi} style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>{q.text}</div>
            {q.options.map((opt, oi) => {
              let cls = 'eltis-mc-option';
              if (answers[qi] !== undefined) cls += opt.correct ? ' correct' : oi === answers[qi] ? ' wrong' : '';
              return (
                <button key={oi} className={cls} disabled={answers[qi] !== undefined}
                  onClick={() => handleAnswer(qi, oi, opt.correct)}>
                  <div className="eltis-option-indicator" />{opt.text}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {allAnswered && (
        <button className="eltis-next-btn" onClick={handleNextTrack}>
          {trackIdx + 1 >= LISTENING_TRACKS.length ? 'Finish →' : 'Next Track →'}
        </button>
      )}
    </div>
  );
}

// ─── WRITING ─────────────────────────────────────────────────────────────────
function WritingShell({ addPts }) {
  const [taskIdx, setTaskIdx]     = useState(0);
  const [text, setText]           = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [analysis, setAnalysis]   = useState<any>(null);
  const [done, setDone]           = useState(false);

  const task = WRITING_TASKS[taskIdx];
  const words   = text.trim() ? text.trim().split(/\s+/).length : 0;
  const fillPct = Math.min((words / task.minWords) * 100, 100);
  const canSubmit = words >= Math.max(10, task.minWords * 0.4) && !submitted;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const prompt = `You are an ELTIS / IELTS writing examiner. Evaluate this student essay.
Task: "${task.task}"
Essay: """${text}"""
Return ONLY valid JSON (no markdown fencing):
{
  "band": "6.5",
  "taskAchievement": 6.5,
  "coherence": 6,
  "lexicalResource": 7,
  "grammaticalRange": 6.5,
  "feedback": "2-3 sentence paragraph of specific actionable feedback addressing the student's essay directly."
}
All numeric scores are 0–9 in 0.5 increments.`;
      const res = await sendChatMessage(prompt, 'You are a strict JSON generator. Return ONLY valid JSON with no markdown fencing or extra text.');
      const clean = res.response.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      setAnalysis(parsed);
      addPts(20);
    } catch {
      const ta = Math.min(9, 5 + (words >= task.minWords ? 1.5 : 0));
      const cc = Math.min(9, 5 + (/(however|therefore|furthermore|in contrast|as a result)/i.test(text) ? 1.5 : 0));
      const lr = Math.min(9, 5 + (text.split(' ').filter(w => w.length > 7).length > 10 ? 1.5 : 0.5));
      const gr = Math.min(9, 5 + (text.split(/[.!?]/).length > 4 ? 1.5 : 0.5));
      setAnalysis({ band: ((ta + cc + lr + gr) / 4).toFixed(1), taskAchievement: ta, coherence: cc, lexicalResource: lr, grammaticalRange: gr, feedback: 'Try to use a wider range of academic vocabulary and discourse markers such as "furthermore", "in contrast", and "consequently" to improve coherence and band score.' });
      addPts(15);
    } finally { setLoading(false); setSubmitted(true); }
  };

  const handleNext = () => {
    if (taskIdx + 1 >= WRITING_TASKS.length) setDone(true);
    else { setTaskIdx(i => i + 1); setText(''); setSubmitted(false); setAnalysis(null); }
  };

  if (done) return (
    <div className="eltis-complete">
      <div className="eltis-complete-icon">✍️</div>
      <h2>Writing Complete!</h2>
      <div className="eltis-complete-xp">+{(taskIdx + 1) * 20} XP</div>
      <div className="eltis-complete-score">{taskIdx + 1} essay task(s) submitted</div>
      <button className="eltis-btn-primary" onClick={() => { setTaskIdx(0); setText(''); setSubmitted(false); setAnalysis(null); setDone(false); }}>Write Again</button>
    </div>
  );

  return (
    <div className="eltis-writing-wrap">
      <div className="eltis-quiz-progress-track">
        <div className="eltis-quiz-progress-fill" style={{ width: `${(taskIdx / WRITING_TASKS.length) * 100}%` }} />
      </div>

      <div className="eltis-writing-prompt">
        <div className="eltis-writing-prompt-label">✍️ Essay Task {taskIdx + 1}/{WRITING_TASKS.length} &nbsp;•&nbsp; Min {task.minWords} words</div>
        <div className="eltis-writing-prompt-text">{task.task}</div>
      </div>

      <div className="eltis-explanation">
        📌 <strong>Writing tips:</strong>
        <ul style={{ marginTop: 8, paddingLeft: 20 }}>{task.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </div>

      <textarea className="eltis-textarea" value={text} onChange={e => setText(e.target.value)}
        placeholder="Start writing your essay here…" disabled={submitted} rows={10} />

      {!submitted && (
        <div className="eltis-writing-footer">
          <div className="eltis-word-count">
            <span style={{ color: words >= task.minWords ? '#58cc02' : 'var(--color-text-secondary)' }}>
              {words}/{task.minWords} words{words >= task.minWords ? ' ✓' : ''}
            </span>
            <div className="eltis-word-bar-bg"><div className="eltis-word-bar-fill" style={{ width: `${fillPct}%` }} /></div>
          </div>
          <button className="eltis-btn-submit" disabled={!canSubmit || loading} onClick={handleSubmit}>
            {loading ? <><Loader2 size={16} className="spin" style={{ marginRight: 6 }} />Analysing…</> : 'Submit Essay'}
          </button>
        </div>
      )}

      {submitted && analysis && (
        <div className="eltis-analysis-card">
          <div className="eltis-analysis-header">
            <div className="eltis-band-badge">{analysis.band}</div>
            <div><h3>Band Score Estimate</h3><div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: 4 }}>{words} words written</div></div>
          </div>
          <div className="eltis-score-bars">
            {[
              { label: 'Task Achievement', score: analysis.taskAchievement },
              { label: 'Coherence',        score: analysis.coherence },
              { label: 'Lexical Resource', score: analysis.lexicalResource },
              { label: 'Grammar Range',    score: analysis.grammaticalRange },
            ].map(({ label, score }) => (
              <div className="eltis-score-row" key={label}>
                <div className="eltis-score-label" style={{ width: 140, fontSize: '0.82rem' }}>{label}</div>
                <div className="eltis-score-track"><div className="eltis-score-fill" style={{ width: `${(Number(score) / 9) * 100}%` }} /></div>
                <div className="eltis-score-val">{Number(score).toFixed(1)}</div>
              </div>
            ))}
          </div>
          <div className="eltis-analysis-feedback">{analysis.feedback}</div>
          <button className="eltis-next-btn" style={{ marginTop: 20 }} onClick={handleNext}>
            {taskIdx + 1 >= WRITING_TASKS.length ? 'Finish →' : 'Next Task →'}
          </button>
        </div>
      )}
    </div>
  );
}
