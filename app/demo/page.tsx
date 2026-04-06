'use client'

import { useState } from 'react'
import { demoQuestions } from './demoQuestions'

export default function DemoPage() {
  const [questions] = useState(demoQuestions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [view, setView] = useState<'home' | 'question' | 'rationale' | 'strategy' | 'complete' | 'vault'>('home')
  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState(0)
  const [missedQuestions, setMissedQuestions] = useState<any[]>([])
  const [vaultIndex, setVaultIndex] = useState(0)
const [isFlipped, setIsFlipped] = useState(false)
const [explanation, setExplanation] = useState("")
const [loadingExplain, setLoadingExplain] = useState(false)

  const question = questions[currentIndex]
 

  const startBlueprint = () => {
    const shuffled = [...demoQuestions].sort(() => Math.random() - 0.5).slice(0, 7)
    setSelected(null)
    setCurrentIndex(0)
    setScore(0)
    setAttempted(0)
    setQuestionsLocal(shuffled)
    setView('question')
  }

  const [questionsLocal, setQuestionsLocal] = useState(demoQuestions)

  const activeQuestion = questionsLocal[currentIndex]
const handleExplain = async (shouldListen = false) => {
  setLoadingExplain(true);
  setExplanation("");

  try {
    const res = await fetch("/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: activeQuestion.question,
        correctAnswer: activeQuestion.correctAnswer,
      }),
    });

    const data = await res.json();
    const listenSpeech = new SpeechSynthesisUtterance(data.explanation);
    listenSpeech.onend = () => {
  if (shouldListen) {
    handleListen();
  }
};
   

// reuse SAME voice logic as handleExplain
const listenVoices = window.speechSynthesis.getVoices();

const listenPreferredVoice =
  listenVoices.find(v => v.name === "Samantha") ||
  listenVoices.find(v => v.name === "Google US English") ||
  listenVoices.find(v => v.name.includes("Google") && v.name.includes("Female")) ||
  listenVoices.find(v => v.lang === "en-US" && v.name.toLowerCase().includes("female")) ||
  listenVoices.find(v => v.lang === "en-US");

if (listenPreferredVoice) listenSpeech.voice = listenPreferredVoice;

listenSpeech.rate = 0.9;
listenSpeech.pitch = 1.05;
listenSpeech.volume = 1;

if (window.speechSynthesis.speaking) {
  window.speechSynthesis.cancel();
}
window.speechSynthesis.speak(listenSpeech);



// ❌ do NOT speak if error text
if (!data.explanation || data.explanation.includes("Error")) return;


  } catch (error) {
    console.error(error);
    setExplanation("Something went wrong.");
  }

  setLoadingExplain(false);
}; 
const handleListen = () => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice input not supported on this browser");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onresult = async (event: any) => {
    const transcript = event.results[0][0].transcript;

    const res = await fetch("/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: transcript,
        correctAnswer: "",
      }),
    });

  const data = await res.json();

const listenSpeech = new SpeechSynthesisUtterance(data.explanation);

const voices = window.speechSynthesis.getVoices();

const preferredVoice =
  voices.find(v => v.name === "Samantha") ||
  voices.find(v => v.name === "Google US English") ||
  voices.find(v => v.name.includes("Google") && v.name.includes("Female")) ||
  voices.find(v => v.lang === "en-US" && v.name.toLowerCase().includes("female")) ||
  voices.find(v => v.lang === "en-US");

if (preferredVoice) listenSpeech.voice = preferredVoice;

listenSpeech.rate = 0.9;
listenSpeech.pitch = 1.05;
listenSpeech.volume = 1;

if (window.speechSynthesis.speaking) {
  window.speechSynthesis.cancel();
}

listenSpeech.onend = () => {
  setTimeout(() => {
    handleListen();
  }, 400);
};

window.speechSynthesis.speak(listenSpeech);
};
   

  recognition.start();
};
 const handleAnswer = (key: string) => {
  setSelected(key)
  setAttempted(prev => prev + 1)

  if (key === activeQuestion.correctAnswer) {
    setScore(prev => prev + 1)
  } else {
    setMissedQuestions(prev => [...prev, activeQuestion])
  }

  setView('rationale')
}
  const goToNextStep = () => {
    setView('strategy')
  }

  const nextQuestion = () => {
    if (attempted >= 7) {
      setView('complete')
      return
    }

    if (currentIndex + 1 < questionsLocal.length) {
      setCurrentIndex(prev => prev + 1)
      setSelected(null)
      setView('question')
    } else {
      setView('complete')
    }
  }

  const returnHome = () => {
    setSelected(null)
    setCurrentIndex(0)
    setScore(0)
    setAttempted(0)
    setQuestionsLocal(demoQuestions)
    setView('home')
  }

  const progressPercent = questionsLocal.length > 0
    ? ((currentIndex + 1) / questionsLocal.length) * 100
    : 0

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
      {view === 'home' && (
        <main style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
          <h1 style={{ color: '#C5A46D', fontSize: '3.5rem' }}>Coach Elevé</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '30px' }}>
              
        
{/* 1. WORKING BUTTON */}
  <div>
    <button
      onClick={startBlueprint}
      className="gold-button"
      style={{
        width: '100%',
        fontWeight: '700',
        fontSize: '1.1rem',
        letterSpacing: '0.5px',
        backgroundColor: '#C5A46D',
        padding: '12px 0',
        color: '#000000'
      }}
    >
      Suggested Blueprint
    </button>
    <p style={{ marginTop: 8, color: '#555', fontSize: '0.95rem' }}>
      15 random questions chosen for you
    </p>
  </div>

  {/* 2. DEAD BUTTON */}
  <div>
    <button
      onClick={() => alert('Available in full Board Pass')}
      className="secondary-button"
      style={{
        width: '100%',
        border: '2px solid #C5A46D',
        fontWeight: '700',
        fontSize: '1.1rem',
        padding: '12px 0',
        color: '#171717',
        backgroundColor: '#ffffff'
      }}
    >
      Create Your Own Experience
    </button>
    <p style={{ marginTop: 8, color: '#555', fontSize: '0.95rem' }}>
      You choose subject and number of questions
    </p>
  </div>

  {/* 3. VAULT BUTTON (ADDED BACK) */}
  <div>
    <button
      onClick={() => alert('Available in full Board Pass')}
      className="gold-button"
      style={{
        width: '100%',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: '1.1rem',
        padding: '12px 0',
        border: '1px solid #C5A46D'
      }}
    >
      Review Flashcards
    </button>
 </div>
 </div>   
</main>
)}

      {(view === 'question' || view === 'rationale' || view === 'strategy') && questionsLocal.length > 0 && (
        <>
          <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.9rem', color: '#C5A46D' }}>DEMO SESSION</h2>
            <button
              onClick={returnHome}
              style={{ color: 'red', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer' }}
            >
              RETURN TO HOME PAGE
            </button>
          </header>

          <div style={{ height: 14, width: '100%', backgroundColor: '#eee', borderRadius: 7, marginBottom: 30, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                backgroundColor: '#C5A46D',
                transition: '0.5s'
              }}
            />
          </div>
        </>
      )}

      {view === 'question' && activeQuestion && (
        <div className="blueprint-card">
          <h2>{activeQuestion.question}</h2>

          {activeQuestion.choices.map((c: any) => (
            <button
              key={c.key}
              onClick={() => handleAnswer(c.key)}
              className="choice-button-style"
              style={{ width: '100%', textAlign: 'left', marginBottom: 12 }}
            >
              <strong>{c.key}.</strong> {c.text}
            </button>
          ))}
        </div>
      )}

      {view === 'rationale' && activeQuestion && (
        <div className="blueprint-card">
          <h2
            style={{
              color: selected === activeQuestion.correctAnswer ? 'green' : 'red',
              textAlign: 'center'
            }}
          >
            {selected === activeQuestion.correctAnswer ? 'SECURED' : 'WRONG'}
          </h2>

          {activeQuestion.choices.map((c: any) => (
            <div
              key={c.key}
              style={{
                padding: 15,
                border: '2px solid',
                marginBottom: 10,
                borderRadius: 8,
                borderColor:
                  c.key === activeQuestion.correctAnswer
                    ? 'green'
                    : c.key === selected
                    ? 'red'
                    : '#eee',
                backgroundColor:
                  c.key === activeQuestion.correctAnswer
                    ? '#f0f9f1'
                    : c.key === selected
                    ? '#fff5f5'
                    : '#fff'
              }}
            >
              <p>
                <strong>{c.key}. {c.text}</strong>
              </p>

              <p style={{ fontSize: '0.95rem', marginTop: 8, color: '#444' }}>
                {c.key === activeQuestion.correctAnswer
                  ? activeQuestion.rationale
                  : (activeQuestion.incorrectRationales as any)?.[c.key]}
              </p>
            </div>
          ))}

          <button
            onClick={goToNextStep}
            className="gold-button"
            style={{
              width: '100%',
              marginTop: 24,
              padding: '18px 0',
              fontWeight: '800',
              fontSize: '1.2rem',
              letterSpacing: '0.5px'
            }}
          >
            Next
          </button>
        </div>
      )}

      {view === 'strategy' && activeQuestion && (
        <div className="blueprint-card">
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#C5A46D', marginBottom: 10 }}>Board Trap</h3>
            <p style={{ color: '#333', lineHeight: '1.6' }}>{activeQuestion.boardTrap}</p>
          </div>

          <div style={{ marginBottom: 28, padding: '18px', backgroundColor: '#F8F5F0', borderLeft: '4px solid #C5A46D' }}>
            <h3 style={{ color: '#C5A46D', marginBottom: 10 }}>Memory Hook</h3>
            <p style={{ color: '#333', fontStyle: 'italic', lineHeight: '1.6' }}>{activeQuestion.memoryHook}</p>
          </div>

          <button
            onClick={nextQuestion}
            className="gold-button"
            style={{
              width: '100%',
              marginTop: 10,
              padding: '18px 0',
              fontWeight: '800',
              fontSize: '1.2rem',
              letterSpacing: '0.5px'
            }}
          >
            Next
          </button>
</div>
)}

{/* REVIEW VAULT */}
{view === 'vault' && missedQuestions.length > 0 && (
  <div className="blueprint-card" style={{ textAlign: 'center' }}>

    {/* FLASHCARD */}
    {view === 'vault' && (
    <div
      onClick={() => setIsFlipped(prev => !prev)}
      style={{
        border: '2px solid #C5A46D',
        borderRadius: 12,
        padding: 30,
        minHeight: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: isFlipped ? '#F8F5F0' : '#ffffff'
      }}
    >{!isFlipped ? (
  <div>
    <h3 style={{ color: '#C5A46D' }}>Concept</h3>
    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
      {missedQuestions[vaultIndex].topic}
    </p>

    <button
      onClick={(e) => {
        e.stopPropagation()
        setIsFlipped(true)
      }}
      style={{
        marginTop: 14,
        padding: '12px 0',
        width: '100%',
        backgroundColor: '#C5A46D',
        color: '#000',
        fontWeight: 700,
        border: 'none',
        borderRadius: 8,
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}
    
    >
      Reveal Answer
    </button>
  </div>
) : (
  <div style={{ textAlign: 'left' }}>
    <p>
      {missedQuestions[vaultIndex].rationale
        ?.replace(/^\*\*[A-D]\.\s.*?\*\*\s*/i, '')
        ?.replace(/^[A-D]\.\s.*/i, '')
      }
    </p>

    <div style={{ borderLeft: '4px solid #C5A46D', paddingLeft: 10 }}>
      <strong>Memory Hook</strong>
      <p style={{ fontStyle: 'italic' }}>
        {missedQuestions[vaultIndex].memoryHook}
      </p>
    </div>
  </div>
)}
</div>
)}

    {/* BUTTONS */}

     
 <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  marginTop: 10,
  width: '100%',
  maxWidth: 320,
  marginLeft: 'auto',
  marginRight: 'auto'
}}>

  


  

 <button
  onClick={() => {
    const updated = [...missedQuestions]
    updated.splice(vaultIndex, 1)
    setMissedQuestions(updated)
    setIsFlipped(false)

    if (updated.length === 0) {
      setView('complete')
      return
    }

    setVaultIndex(0)
  }}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 150,
    padding: '0 16px',
    border: '1.5px solid #C5A46D',
    borderRadius: 6,
    backgroundColor: '#fff',
    fontWeight: 600,
    fontSize: '0.95rem',
    letterSpacing: '0.3px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  }}
>
  <span style={{
    backgroundColor: '#C5A46D',
    color: '#000',
    borderRadius: 4,
    padding: '4px 8px',
    marginRight: 8
  }}>
    ✓
  </span>
  Mastered
</button>


  <button
    onClick={() => {
      setIsFlipped(false)

      if (vaultIndex + 1 < missedQuestions.length) {
        setVaultIndex(vaultIndex + 1)
      } else {
        setView('complete')
      }
    }}
    style={{
 padding: '12px 16px',
  backgroundColor: '#ffffff',
  border: '1.5px solid #C5A46D',
  borderRadius: 6,
  height: 44,
  width: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontSize: '0.95rem',
  letterSpacing: '0.3px',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginLeft: 6,
  lineHeight: '1',
 
}}
  >
    Next →
  </button>

    </div>
    

  <div
    onClick={() => {
  handleExplain(true);
}}
  style={{
  width: '100%',
  marginTop: 10,
  display: 'none'
}}
>
    
   <div style={{ textAlign: 'center', marginTop: 20 }}>
  <img
    src="/coach-eleve-logo.png"
    alt="Coach Elevé"
    style={{
      width: 110,
      height: 110,
      borderRadius: '50%',
      objectFit: 'cover',
     border: '2px solid #C5A46D'
    }}
  />

  <div style={{ marginTop: 10, fontSize: '1.1rem', fontWeight: 500 }}>
    Ask Coach Elevé
 </div>
</div>

    </div>

    <button
      onClick={returnHome}
      style={{
        display: 'block',
        margin: '20px auto 0 auto',
        background: 'none',
        border: 'none',
        color: 'blackS',
        cursor: 'pointer'
      }}
    >
      Return to Home Page
    </button>
</div>
 
)}

     {view === 'complete' && (
  <div className="blueprint-card" style={{ textAlign: 'center', paddingTop: 40 }}>
    <img
      src="/coach-eleve-logo.png"
      alt="Coach Eleve Logo"
      style={{ width: 110, marginBottom: 10, opacity: 0.95 }}
    />

    <h2
      style={{
        color: '#171717',
        fontSize: '1.8rem',
        letterSpacing: '1px',
        marginBottom: 20
      }}
    >
      Demo Complete
    </h2>

    <p style={{ fontSize: '1.1rem', marginBottom: 10 }}>
      Score: <strong>{score} / {attempted}</strong>
    </p>

    <p style={{ color: '#555', marginBottom: 25 }}>
      You experienced the Elevainta method: question logic, rationale, board trap, and memory hook.
    </p>

    {/* REVIEW VAULT BUTTON (ONLY IF MISSED QUESTIONS EXIST) */}
    {missedQuestions.length > 0 && (
      <button
        onClick={() => setView('vault')}
        className="gold-button"
        style={{
          width: '100%',
          marginBottom: 12,
          backgroundColor: '#171717',
          color: '#FFFFFF',
          border: '1px solid #C5A46D'
        }}
      >
        Review Flashcards
      </button>
    )}

   {/* CONVERSION BUTTON */}
    <a
      href="/signup"
      style={{
        display: 'block',
        width: '100%',
        padding: '14px 0',
        backgroundColor: '#C5A46D',
        color: '#000',
        fontWeight: 800,
        fontSize: '1.05rem',
        letterSpacing: '0.5px',
        borderRadius: 8,
        textDecoration: 'none',
        marginBottom: 12,
      }}
    >
      Start Free Account
    </a>

    <button
      onClick={returnHome}
      style={{
        display: 'block',
        margin: '20px auto 0 auto',
        background: 'none',
        border: 'none',
        color: 'grey',
        cursor: 'pointer'
      }}
    >
      Return to Home Page
    </button>
 </div>
)}

</div> 
)
}