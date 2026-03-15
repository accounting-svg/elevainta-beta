'use client'
import { useState, useEffect } from 'react'
import { boardPassQuestions } from '../data/boardPassQuestions'
import StrategyFeedback from '../components/StrategyFeedback'
import { createBrowserClient } from '@supabase/ssr'

export default function BoardPassPage() {
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set())
  const [questions, setQuestions] = useState<any[]>([]);
  const [subject, setSubject] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [view, setView] = useState<'question' | 'rationale' | 'strategy' | 'complete' | 'vault_flashcard' | 'create_experience'>('question')
  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState(0)
  const [sessionMissed, setSessionMissed] = useState<any[]>([])
  const [isFlipped, setIsFlipped] = useState(false)
  const [customCounts, setCustomCounts] = useState<Record<string, number>>({})

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  )

  const categories = [
    'Oral Disease Mastery', 'Radiology & Structural Analysis', 'Clinical Execution & Materials',
    'Pharmacology & Patient Safety', 'Prevention Science & Public Health', 'Ethics & Professional Practice', 'Anatomy & Physiology'
  ];

  const getCoachFeedback = () => {
    const accuracy = attempted > 0 ? (score / attempted) * 100 : 0;
    if (accuracy === 100) return { title: "EXCEPTIONAL EXECUTION", msg: "Perfect alignment. Continue this trajectory." };
    if (accuracy >= 80) return { title: "STRONG PERFORMANCE", msg: "Firm grasp. Close the minor gaps now." };
    return { title: "REINFORCEMENT NEEDED", msg: "Slow down and review rationales to build logic." };
  };

  const coach = getCoachFeedback();

  const startAutomatedBlueprint = () => {
    const pool = [...boardPassQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
    setQuestions(pool);
    setSubject("Suggested Blueprint");
    resetState('question');
  };

  const startCustomExperience = () => {
    let pool: any[] = [];
    Object.entries(customCounts).forEach(([cat, count]) => {
      const catQuestions = boardPassQuestions
        .filter(q => q.subject === cat)
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
      pool = [...pool, ...catQuestions];
    });
    if (pool.length === 0) return alert("Select at least one question.");
    setQuestions(pool.sort(() => Math.random() - 0.5));
    setSubject("Custom Experience");
    setCurrentIndex(0);
    setScore(0);
    setAttempted(0);
    setSessionMissed([]);
    setView('question');
  };

  const resetState = (v: any) => {
    setCurrentIndex(0); setScore(0); setAttempted(0); setView(v);
    setSelected(null); setSessionMissed([]); setIsFlipped(false);
  };

  const handleAnswer = async (key: string) => {
    const q = questions[currentIndex];
    setSelected(key);
    setAttempted(prev => prev + 1);

    if (key === q.correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setSessionMissed(prev => [...prev, q]);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('opportunity_flashcards').upsert({
          user_id: user.id, topic: q.topic, question_text: q.question,
          correct_answer: q.correctAnswer, rationale: q.rationale,
          memory_hook: q.memoryHook, board_trap: q.boardTrap, mastery_level: 0
        });
      }
    }
    setView('rationale');
  };

  const handleMasteryHit = async (cardId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: card } = await supabase
      .from('opportunity_flashcards')
      .select('mastery_level')
      .eq('id', cardId)
      .single();

    const newLevel = (card?.mastery_level || 0) + 1;

    if (newLevel >= 3) {
      await supabase.from('opportunity_flashcards').delete().eq('id', cardId);
      alert("Concept Mastered! This has been retired from your Vault.");
    } else {
      await supabase.from('opportunity_flashcards').update({ mastery_level: newLevel }).eq('id', cardId);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setSubject(null);
    }
  };

  const question = questions[currentIndex];
  const masteryPercent = attempted > 0 ? (score / attempted) * 100 : 0;
  const barColor = masteryPercent < 50 ? '#ef4444' : masteryPercent < 80 ? '#eab308' : '#22c55e';

  // --- HOME / CONCIERGE ---
  if (!subject) {
    return (
      <main style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
        <h1 style={{ color: '#C5A46D', fontSize: '3.5rem' }}>Coach Elevé</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
          <button
            onClick={startAutomatedBlueprint}
            className="gold-button"
            style={{ width: '100%', fontWeight: '600', letterSpacing: '0.5px', backgroundColor: '#C5A46D', color: '#171717' }}
          >
            Suggested Blueprint
          </button>

          <button
            onClick={() => {
              setSubject("Custom Experience");
              setQuestions([]);
              setView('create_experience');
              setCustomCounts({});
            }}
            className="secondary-button"
            style={{ border: '1px solid #C5A46D' }}
          >
            Create Your Own Experience
          </button>

          <button
            onClick={async () => {
              const { data: { user } } = await supabase.auth.getUser();
              if (user) {
                const { data } = await supabase
                  .from('opportunity_flashcards')
                  .select('*')
                  .eq('user_id', user.id)
                  .order('mastery_level', { ascending: true });

                if (data && data.length > 0) {
                  setQuestions(data.sort(() => Math.random() - 0.5));
                  setSubject("Opportunity Vault");
                  setCurrentIndex(0);
                  setIsFlipped(false);
                  setView('vault_flashcard');
                } else {
                  alert("Your Vault is currently empty. Miss some questions to add them here!");
                }
              }
            }}
            className="gold-button"
            style={{ backgroundColor: '#171717', color: '#ccae7a', marginTop: '5px' }}
          >
            Review Opportunity Vault
          </button>
        </div>
      </main>
    );
  }

  // --- CUSTOM EXPERIENCE BUILDER ---
  if (subject === "Custom Experience" && questions.length === 0 && view !== 'complete') {
    return (
      <main style={{ maxWidth: 600, margin: '40px auto' }}>
        <h2 style={{ textAlign: 'center', color: '#C5A46D' }}>Customize Your Session</h2>
        {categories.map(cat => (
          <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <span>{cat}</span>
            <input
              type="number" min="0" max="20" placeholder="0"
              onChange={(e) => setCustomCounts(prev => ({ ...prev, [cat]: parseInt(e.target.value) || 0 }))}
              style={{ width: '60px', textAlign: 'center' }}
            />
          </div>
        ))}
        <button onClick={startCustomExperience} className="gold-button" style={{ width: '100%', marginTop: '30px' }}>Start Custom Session</button>
        <button onClick={() => setSubject(null)} style={{ display: 'block', margin: '20px auto', background: 'none', border: 'none', color: 'grey', cursor: 'pointer' }}>Cancel</button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '0.9rem', color: '#C5A46D' }}>{subject?.toUpperCase()}</h2>
        <button onClick={() => setView('complete')} style={{ color: 'red', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer' }}>END SESSION</button>
      </header>

      {view !== 'complete' && questions.length > 0 && (
        <div style={{ height: 14, width: '100%', backgroundColor: '#eee', borderRadius: 7, marginBottom: 30, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            backgroundColor: barColor,
            transition: '0.5s'
          }} />
        </div>
      )}

      {view === 'question' && question && (
        <div className="blueprint-card">
          <h2>{question.question}</h2>
          {question.choices.map((c: any) => (
            <button key={c.key} onClick={() => handleAnswer(c.key)} className="choice-button-style" style={{ width: '100%', textAlign: 'left', marginBottom: 12 }}>
              <strong>{c.key}.</strong> {c.text}
            </button>
          ))}
        </div>
      )}

      {view === 'rationale' && question && (
        <div className="blueprint-card">
          <h2 style={{ color: selected === question.correctAnswer ? 'green' : 'red', textAlign: 'center' }}>{selected === question.correctAnswer ? 'SECURED' : 'WRONG'}</h2>
          {question.choices.map((c: any) => (
            <div key={c.key} style={{ padding: 15, border: '2px solid', marginBottom: 10, borderRadius: 8, borderColor: c.key === question.correctAnswer ? 'green' : c.key === selected ? 'red' : '#eee', background: c.key === question.correctAnswer ? '#f0f9f1' : c.key === selected ? '#fff5f5' : '#fff' }}>
              <p><strong>{c.key}. {c.text}</strong></p>
              <p style={{ fontSize: '0.95rem', marginTop: '8px', color: '#444' }}>
                {c.key === question.correctAnswer ? question.rationale : question.incorrectRationales?.[c.key]}
              </p>
            </div>
          ))}
          <button onClick={() => setView('strategy')} className="gold-button" style={{ width: '100%', marginTop: 20 }}>View Strategy</button>
        </div>
      )}

      {view === 'strategy' && (
        <div className="blueprint-card">
          <StrategyFeedback boardTrap={question.boardTrap} memoryHook={question.memoryHook} />
          <button
            onClick={() => {
              if (currentIndex + 1 < questions.length) {
                setCurrentIndex(v => v + 1);
                setSelected(null);
                setView('question');
              } else {
                setView('complete');
              }
            }}
            className="gold-button"
            style={{ width: '100%', marginTop: 35 }}
          >
            Next Question
          </button>
        </div>
      )}

      {view === 'vault_flashcard' && question && (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              position: 'relative', width: '100%', height: '400px',
              transition: 'transform 0.6s', transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              cursor: 'pointer'
            }}
          >
            <div className="blueprint-card" style={{ position: 'absolute', backfaceVisibility: 'hidden', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', border: '1px solid #eee' }}>
              <span style={{ color: '#C5A46D', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px' }}>OPPORTUNITY CONCEPT</span>
              <h2 style={{ padding: '0 30px', textAlign: 'center', color: '#171717', fontSize: '1.8rem' }}>{question.topic}</h2>
              <p style={{ marginTop: 40, fontSize: '0.8rem', color: '#C5A46D', fontWeight: '600' }}>CLICK TO REVEAL LOGIC</p>
            </div>

            <div className="blueprint-card" style={{ position: 'absolute', backfaceVisibility: 'hidden', width: '100%', height: '100%', transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px solid #C5A46D', backgroundColor: '#F8F5F0' }}>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '15px' }}>
                {[1, 2, 3].map((dot) => (
                  <div key={dot} style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #C5A46D', backgroundColor: (question.mastery_level || 0) >= dot ? '#C5A46D' : 'transparent' }} />
                ))}
                <span style={{ fontSize: '0.7rem', color: '#C5A46D', marginLeft: '5px', fontWeight: 'bold' }}>MASTERY: {question.mastery_level || 0}/3</span>
              </div>
              <h4 style={{ color: '#C5A46D', marginBottom: '10px' }}>THE LOGIC</h4>
              <p style={{ padding: '0 25px', fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>{question.rationale}</p>
              <div style={{ marginTop: 25, padding: '15px', backgroundColor: '#fff', borderLeft: '4px solid #C5A46D', margin: '0 25px' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#171717', marginBottom: '5px' }}>MEMORY HOOK:</p>
                <p style={{ fontSize: '1rem', color: '#444', fontStyle: 'italic' }}>{question.memoryHook}</p>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <button onClick={(e) => { e.stopPropagation(); handleMasteryHit(question.id); }} className="gold-button" style={{ width: '80%', margin: 0 }}>I Mastered This Concept</button>
                <button onClick={(e) => { e.stopPropagation(); if (currentIndex + 1 < questions.length) { setCurrentIndex(p => p + 1); setIsFlipped(false); } else { setSubject(null); } }} className="secondary-button" style={{ width: '80%', border: '1px solid #C5A46D', color: '#C5A46D', background: 'white', padding: '10px 0', borderRadius: '5px' }}>Next Concept (Keep in Vault)</button>
              </div>
            </div>
          </div>
          <button onClick={() => setSubject(null)} style={{ display: 'block', margin: '30px auto', background: 'none', border: 'none', color: 'grey', cursor: 'pointer', fontSize: '0.9rem' }}>Return to Concierge</button>
        </div>
      )}

      {view === 'complete' && (
        <div className="blueprint-card" style={{ textAlign: 'center', paddingTop: 40 }}>
          <img src="/coach-eleve-logo.png" alt="Coach Eleve Logo" style={{ width: 110, marginBottom: 10, opacity: 0.95 }} />
          <h2 style={{ color: '#171717', fontSize: '1.8rem', letterSpacing: '1px', marginBottom: 25 }}>Session Analysis</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
            <thead style={{ background: '#171717', color: '#C5A46D' }}>
              <tr><th style={{ padding: '15px', textAlign: 'left' }}>MISSED CONCEPTS</th></tr>
            </thead>
            <tbody>
              {sessionMissed.map((m: any, i: number) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '15px', textAlign: 'left' }}>{m.topic}</td></tr>
              ))}
            </tbody>
          </table>
          <div style={{ backgroundColor: '#F8F5F0', padding: 25, border: '1px solid #C5A46D', marginTop: 30, textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold', color: '#C5A46D' }}>{coach.title}</p>
            <p style={{ fontStyle: 'italic' }}>{coach.msg}</p>
          </div>
          <button
            onClick={() => { setSubject("Opportunity Vault"); setView('vault_flashcard'); }}
            className="gold-button"
            style={{ width: '100%', marginTop: '30px', backgroundColor: '#171717', color: '#C5A46D' }}
          >
            Review Opportunity Vault Now
          </button>
          <button onClick={() => setSubject(null)} className="gold-button" style={{ marginTop: 10, width: '100%' }}>Return to Concierge</button>
        </div>
      )}
    </main>
  )
}