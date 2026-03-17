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
    if (attempted >= 5) {
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
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
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
      Review Opportunity Vault
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
  <div className="blueprint-card">
    <h2 style={{ marginBottom: 20 }}>Review Opportunity Vault</h2>

    <h3 style={{ color: '#C5A46D' }}>
      {missedQuestions[vaultIndex].topic}
    </h3>

    <p>{missedQuestions[vaultIndex].rationale}</p>

    <div style={{ borderLeft: '4px solid #C5A46D', paddingLeft: 12, marginBottom: 20 }}>
      <strong>Memory Hook</strong>
      <p style={{ fontStyle: 'italic' }}>
        {missedQuestions[vaultIndex].memoryHook}
      </p>
    </div>

    <button
      onClick={() => {
        if (vaultIndex + 1 < missedQuestions.length) {
          setVaultIndex(vaultIndex + 1)
        } else {
          setView('complete')
        }
      }}
      className="gold-button"
      style={{ width: '100%', marginBottom: 10 }}
    >
      Next Concept
    </button>

    <button
      onClick={() => alert('Ask Coach Elevé voice preview coming soon')}
      className="secondary-button"
      style={{ width: '100%', marginBottom: 10 }}
    >
      Ask Coach Elevé
    </button>

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

    {/* 🔥 REVIEW VAULT BUTTON (ONLY IF MISSED QUESTIONS EXIST) */}
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
        Review Opportunity Vault
      </button>
    )}

   {/* CONVERSION BUTTON */}
    <button
      onClick={() => window.location.href = 'https://your-real-app-link.com'}
      className="gold-button"
      style={{
        width: '100%',
        marginBottom: 10,
        fontWeight: '800'
      }}
    >
      Continue Board Pass Training
    </button>

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
</main>
)
}