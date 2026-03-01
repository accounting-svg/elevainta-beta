'use client'
import { updatePerformance } from "@/app/actions/updatePerformance";

import { useState, useEffect } from 'react'
import { boardPassQuestions } from '../data/boardPassQuestions'
import RationaleFeedback from '../components/RationaleFeedback'
import StrategyFeedback from '../components/StrategyFeedback'
import { createBrowserClient } from '@supabase/ssr'
export default function BoardPassPage() {
  const [questions, setQuestions] = useState<typeof boardPassQuestions>([])

  const [subject, setSubject] = useState<string | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [view, setView] = useState<'question' | 'rationale' | 'strategy' | 'complete'>('question')

  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState(0)
  const [missedTopics, setMissedTopics] = useState<Record<string, number>>({})
  const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const handleLogout = async () => {
  await supabase.auth.signOut()
  window.location.href = '/login'
}


 useEffect(() => {
  if (!subject) return

  console.log(
    "Clinical Execution count:",
    boardPassQuestions.filter(
      q => q.subject === "Clinical Execution & Materials"
    ).length
  )

  const filtered = boardPassQuestions.filter(
    (q) => q.subject === subject
  )

  const shuffled = [...filtered].sort(() => Math.random() - 0.5)

  setQuestions(shuffled)
  setCurrentIndex(0)
}, [subject])


  if (!subject) {
  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1>Board Pass</h1>
      <h2>Choose Your Subject</h2>

      {[
        'Oral Disease Mastery',
        'Radiology & Structural Analysis',
        'Clinical Execution & Materials',
        'Pharmacology & Patient Safety',
        'Prevention Science & Public Health',
        'Ethics & Professional Practice',
      ].map((sub) => (
        <div key={sub} style={{ marginBottom: 12 }}>
          <button
            onClick={() => setSubject(sub)}
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#eee',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {sub}
          </button>
        </div>
      ))}
    </main>
  )
}


  const question = questions[currentIndex]
  if (subject && questions.length === 0) {
  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1>{subject}</h1>
      <p>No questions available for this subject yet.</p>
      <button onClick={() => setSubject(null)} style={{ marginTop: 20 }}>
        Choose Another Subject
      </button>
    </main>
  )
}

  const totalQuestions = questions.length

  const submitAnswer = async (key: string) => {
  if (!question || !subject) return

  setSelected(key)
  setAttempted(prev => prev + 1)

  const isCorrect = key === question.correctAnswer

  if (isCorrect) {
    setScore(prev => prev + 1)
  } else {
    setMissedTopics(prev => ({
      ...prev,
      [question.topic]: (prev[question.topic] || 0) + 1,
    }))
  }

  // ✅ THIS IS THE FIX
  await updatePerformance(
    subject,
    question.topic,
    1,                         // attempted
    isCorrect ? 1 : 0,         // correct
    isCorrect ? 0 : 1          // missed
  )

  setView('rationale')
}
const endSession = async () => {
  if (subject) {
    for (const [topic, missedCount] of Object.entries(missedTopics)) {
      await updatePerformance(
        subject,
        topic,
        missedCount,
        0,
        missedCount
      )
    }
  }

  setView('complete')
}

 const nextQuestion = async () => {

   if (currentIndex + 1 >= totalQuestions) {

  if (subject) {
    for (const [topic, missedCount] of Object.entries(missedTopics)) {
      await updatePerformance(
        subject,
        topic,
        missedCount,
        0,
        missedCount
      )
    }
  }

  setView('complete')
  return
}


    setSelected(null)
    setView('question')
    setCurrentIndex(prev => prev + 1)
  }
if (!subject) {
  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1>Board Pass</h1>
      <h2>Choose Your Subject</h2>

   {[
  'Oral Disease Mastery',
  'Radiology & Structural Analysis',
  'Clinical Execution & Materials',
  'Pharmacology & Patient Safety',
  'Prevention Science & Public Health',
  'Ethics & Professional Practice'
].map((sub) => (


        <div key={sub} style={{ marginBottom: 12 }}>
          <button
            onClick={() => setSubject(sub)}
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#eee',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {sub}
          </button>
        </div>
      ))}
    </main>
  )
}

  if (!question) {
    return <main style={{ padding: 24 }}>Loading...</main>
  }

  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <h1>Board Pass</h1>
<button
  onClick={handleLogout}
  style={{
    float: 'right',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    padding: 6,
    cursor: 'pointer'
  }}
>
  Logout
</button>
      <p style={{ fontWeight: 600 }}>
        Score: {score} / {attempted}
      </p>

      {view === 'question' && (
        <>
          <h2>{question.question}</h2>

          {question.choices.map(choice => (
            <div key={choice.key} style={{ marginBottom: 12 }}>
              <button
                onClick={() => submitAnswer(choice.key)}
                style={{
                  width: '100%',
                  padding: 12,
                  backgroundColor: '#eee',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                {choice.key}. {choice.text}
              </button>
            </div>
          ))}
  
<button
  onClick={endSession}
  style={{
    marginTop: 20,
    backgroundColor: '#f8d7da',
    border: '1px solid #c82333',
    padding: 10,
    cursor: 'pointer',
  }}
>
  End Session
</button>

        </>
      )}

      {view === 'rationale' && (
        <>
          <h3
            style={{
              color:
                selected === question.correctAnswer ? 'green' : 'crimson',
              fontWeight: 'bold',
            }}
          >
            {selected === question.correctAnswer
              ? 'Excellent work. You recognized the key concept.'
              : 'Not quite this time — and that’s okay. This is how we grow.'}
          </h3>

          {/* ✅ CORRECT ANSWER BLOCK */}
          <div
            style={{
              backgroundColor: '#e6f7ea',
              borderLeft: '6px solid #2e7d32',
              padding: '16px',
              borderRadius: '6px',
              marginBottom: '20px'
            }}
          >
            <h3>Correct Answer: {question.correctAnswer}</h3>
            <p>
              <strong>Rationale:</strong> {question.rationale}
            </p>
          </div>

          {/* ❌ INCORRECT SECTION */}
          <h4>Why the other answers are incorrect</h4>

          <ul>
            {question.choices
              .filter(choice => choice.key !== question.correctAnswer)
              .map(choice => (
                <li key={choice.key} style={{ marginBottom: 10 }}>
                  <strong>
                    {choice.key}. {choice.text}
                  </strong>
                  <p style={{ margin: 0 }}>
                    {question.incorrectRationales[choice.key]}
                  </p>
                </li>
              ))}
          </ul>

          <button onClick={() => setView('strategy')} style={{ marginTop: 20 }}>

            Continue
          </button>
        </>
      )}
{view === 'strategy' && (
  <>
    <StrategyFeedback
      boardTrap={question.boardTrap}
      memoryHook={question.memoryHook}
    />

    <button
      onClick={nextQuestion}
      style={{ marginTop: 20 }}
    >
      Continue
    </button>
  </>
)}

      {view === 'complete' && (
        <>
          <h2>Session Complete 🎉</h2>
          <p>
            Final Score: {score} / {attempted}
          </p>
          <p>Total Questions Loaded: {totalQuestions}</p>

          {Object.keys(missedTopics).length > 0 && (
  <div style={{ marginTop: 20 }}>
    <h3>Weak Areas (Session)</h3>
    <ul>
      {Object.entries(missedTopics).map(([topic, count]) => (
        <li key={topic}>
          {topic}: {count} missed
        </li>
      ))}
    </ul>
  </div>
)}


         <div style={{ marginTop: 20 }}>
  <button
    onClick={() => {
      setCurrentIndex(0)
      setSelected(null)
      setScore(0)
      setAttempted(0)
      setView('question')

      const reshuffled = [...questions].sort(() => Math.random() - 0.5)
      setQuestions(reshuffled)
    }}
    style={{ marginRight: 12 }}
  >
    Restart This Subject
  </button>

  <button
    onClick={() => {
      setSubject(null)
      setQuestions([])
      setCurrentIndex(0)
      setSelected(null)
      setScore(0)
      setAttempted(0)
      setView('question')
    }}
  >
    Choose Another Subject
  </button>
</div>

        </>
      )}
    </main>
  )
}
