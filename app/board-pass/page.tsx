'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { boardPassQuestions, SUBJECTS } from '../data/boardPassQuestions'
import StrategyFeedback from '../components/StrategyFeedback'
import { createBrowserClient } from '@supabase/ssr'

export default function BoardPassPage() {
  const router = useRouter()
  const [authChecked, setAuthChecked] = useState(false)
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set())
  const [questions, setQuestions] = useState<any[]>([]);
  const [subject, setSubject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<'question' | 'rationale' | 'strategy' | 'complete' | 'vault_flashcard' | 'create_experience' | 'paywall'>('question');
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [sessionMissed, setSessionMissed] = useState<any[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [customCounts, setCustomCounts] = useState<Record<string, number>>({});
  const [categoryStats, setCategoryStats] = useState<Record<string, { correct: number, attempted: number }>>({});
  const [lifetimeStats, setLifetimeStats] = useState<{ accuracy: number | null, weakCategories: string[] } | null>(null);
  const [lifetimeAnswered, setLifetimeAnswered] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null);
  const [showA2HS, setShowA2HS] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  // Auth gate — runs once on mount before any content is shown.
  // This is belt-and-suspenders alongside the proxy: the proxy protects at
  // the routing layer, this protects at the component layer so unauthenticated
  // users never see questions even if the proxy is bypassed.
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.replace('/signup')
      } else {
        setAuthChecked(true)
      }
    })
  }, [])

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) return;
    if (localStorage.getItem('a2hs_dismissed')) return;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));
    setShowA2HS(true);
  }, []);

  const trackEvent = async (event: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from('usage_events').insert({ user_id: user.id, event });
  };

  const openVault = async () => {
    trackEvent("vault_review_start");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase
      .from('opportunity_flashcards')
      .select('*')
      .eq('user_id', user.id)
      .order('mastery_level', { ascending: true });
    if (!data || data.length === 0) {
      alert("Your Vault is currently empty. Miss some questions to add them here!");
      return;
    }
    const seen = new Set<string>();
    const deduped = data.filter((row: any) => {
      if (seen.has(row.topic)) return false;
      seen.add(row.topic);
      return true;
    });
    setQuestions(deduped.sort(() => Math.random() - 0.5));
    setSubject("Flashcards");
    setCurrentIndex(0);
    setIsFlipped(false);
    setView('vault_flashcard');
  };

  const handleManageSubscription = async () => {
    const res = await fetch('/api/stripe/portal', { method: 'POST' });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Could not open billing portal. Please try again.');
    }
  };

  const categories = [
    'Periodontics', 'Oral Pathology', 'Radiology', 'Head & Neck Anatomy',
    'Pharmacology', 'Microbiology & Immunology', 'Community Health & Prevention',
    'Nutrition', 'Ethics & Professional Practice', 'Instrumentation', 'Dental Materials'
  ];

  // Fetch lifetime stats whenever we return to home
  useEffect(() => {
    if (subject !== null) return;
    const fetchLifetimeStats = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_status')
        .eq('id', user.id)
        .single();
      if (profile) setSubscriptionStatus(profile.subscription_status);

      const { data: events } = await supabase
        .from('usage_events')
        .select('event')
        .eq('user_id', user.id)
        .in('event', ['answer_correct', 'answer_incorrect']);

      let accuracy: number | null = null;
      if (events && events.length > 0) {
        const correct = events.filter(e => e.event === 'answer_correct').length;
        accuracy = Math.round((correct / events.length) * 100);
      }
      setLifetimeAnswered(events?.length ?? 0);

      const { data: flashcards } = await supabase
        .from('opportunity_flashcards')
        .select('subject')
        .eq('user_id', user.id);

      const normalizeSubject = (raw: string): string => {
        const match = SUBJECTS.find(s => s.toLowerCase() === raw.toLowerCase())
        return match ?? raw
      }

      let weakCategories: string[] = [];
      if (flashcards && flashcards.length > 0) {
        const catCounts: Record<string, number> = {};
        flashcards.forEach((f: any) => {
          if (f.subject) {
            const normalized = normalizeSubject(f.subject)
            catCounts[normalized] = (catCounts[normalized] || 0) + 1
          }
        });
        weakCategories = Object.entries(catCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([cat]) => cat);
      }

      setLifetimeStats({ accuracy, weakCategories });
    };
    fetchLifetimeStats();
  }, [subject]);

  const getCoachFeedback = () => {
    const accuracy = attempted > 0 ? (score / attempted) * 100 : 0;
    if (accuracy === 100) return { title: "EXCEPTIONAL EXECUTION", msg: "Perfect alignment. Continue this trajectory." };
    if (accuracy >= 80) return { title: "STRONG PERFORMANCE", msg: "Firm grasp. Close the minor gaps now." };
    return { title: "REINFORCEMENT NEEDED", msg: "Slow down and review rationales to build logic." };
  };

  const coach = getCoachFeedback();

  // 15 QUESTION RANDOM BLUEPRINT
  const startAutomatedBlueprint = () => {
    trackEvent("blueprint_start");
    const pool = [...boardPassQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
    setQuestions(pool);
    setSubject("Suggested Blueprint");
    resetState('question');
  };

  // CUSTOM EXPERIENCE LOGIC
  const startCustomExperience = () => {
    trackEvent("custom_session_start");
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
    setCategoryStats({});
    setView('question');
  };

  const resetState = (v: any) => {
    setCurrentIndex(0); setScore(0); setAttempted(0); setView(v);
    setSelected(null); setSessionMissed([]); setIsFlipped(false); setCategoryStats({});
  };

  const handleAnswer = async (key: string) => {
    const q = questions[currentIndex];
    setSelected(key);
    setAttempted(prev => prev + 1);
    const isCorrect = key === q.correctAnswer;

    // Track per-category stats
    setCategoryStats(prev => {
      const cat = q.subject || 'Unknown';
      const existing = prev[cat] || { correct: 0, attempted: 0 };
      return {
        ...prev,
        [cat]: { attempted: existing.attempted + 1, correct: existing.correct + (isCorrect ? 1 : 0) }
      };
    });

    if (isCorrect) {
      setScore(prev => prev + 1);
      trackEvent('answer_correct');
    } else {
      setSessionMissed(prev => [...prev, q]);
      trackEvent('answer_incorrect');
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { error } = await supabase.from('opportunity_flashcards').upsert({
          user_id: user.id,
          topic: q.topic,
          question_text: q.question,
          correct_answer: q.correctAnswer,
          rationale: q.rationale,
          memory_hook: q.memoryHook,
          board_trap: q.boardTrap,
          mastery_level: 0,
          subject: q.subject
        });
        if (error) console.error('Vault save error:', error);
      }
    }
    // If already known to be active, skip the count check entirely.
    if (subscriptionStatus === 'active') {
      setView('rationale');
      return;
    }

    if (lifetimeAnswered + attempted + 1 >= 50) {
      // Re-fetch subscription status fresh from DB — the cached value can be stale
      // if the Stripe webhook fired after the page loaded.
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      let freshStatus = subscriptionStatus;
      if (currentUser) {
        const { data: freshProfile } = await supabase
          .from('profiles')
          .select('subscription_status')
          .eq('id', currentUser.id)
          .single();
        if (freshProfile) {
          freshStatus = freshProfile.subscription_status;
          setSubscriptionStatus(freshStatus);
        }
      }
      if (freshStatus === 'active') {
        setView('rationale');
      } else {
        setView('paywall');
      }
    } else {
      setView('rationale');
    }
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

  const accuracyColor = (pct: number) => pct >= 80 ? '#22c55e' : pct >= 60 ? '#eab308' : '#ef4444';
  const accuracyLabel = (pct: number) => pct >= 80 ? 'STRONG' : pct >= 60 ? 'NEEDS WORK' : 'WEAK';

  const A2HSBanner = showA2HS ? (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: '#171717', borderTop: '1px solid #C5A46D',
      padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <img src="/coach-eleve-logo.png" alt="Coach Elevé" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #C5A46D', objectFit: 'cover', flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <p style={{ color: '#C5A46D', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.4px', marginBottom: 2 }}>
          Add Coach Elevé to your home screen
        </p>
        <p style={{ color: '#aaa', fontSize: '0.75rem', lineHeight: 1.4 }}>
          {isIOS
            ? 'Tap the Share button then "Add to Home Screen"'
            : 'Tap the menu then "Add to Home Screen"'}
        </p>
      </div>
      <button
        onClick={() => { localStorage.setItem('a2hs_dismissed', '1'); setShowA2HS(false); }}
        style={{ background: 'none', border: 'none', color: '#888', fontSize: '1.2rem', cursor: 'pointer', padding: '4px 8px', flexShrink: 0, lineHeight: 1 }}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  ) : null;

  // Block all rendering until the auth check completes.
  // Prevents unauthenticated users from seeing questions during the async check.
  if (!authChecked) return null

  // --- HOME / CONCIERGE ---
  if (!subject) {
    return (
      <main style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ color: '#C5A46D', fontSize: '3.5rem' }}>Coach Elevé</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>

          {/* 1. MAIN START */}
          <button
            onClick={startAutomatedBlueprint}
            className="gold-button"
            style={{
              width: '100%', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '0.5px',
              backgroundColor: '#C5A46D', padding: '12px 0', color: '#000000'
            }}
          >
            Suggested Blueprint
          </button>
          <p style={{ marginTop: 8, color: '#555', fontSize: '0.95rem' }}>
            15 random questions chosen for you
          </p>

          {/* 2. CUSTOM START */}
          <button
            onClick={() => {
              setSubject("Custom Experience");
              setQuestions([]);
              setView('create_experience');
              setCustomCounts({});
            }}
            className="secondary-button"
            style={{
              width: '100%', border: '2px solid #C5A46D', fontWeight: '700',
              fontSize: '1.1rem', padding: '12px 0', color: '#171717', backgroundColor: '#ffffff'
            }}
          >
            Create Your Own Experience
          </button>
          <p style={{ marginTop: 10, color: '#555', fontSize: '0.95rem' }}>
            You choose subject and number of questions
          </p>

          {/* 3. REVIEW VAULT */}
          <button
            onClick={openVault}
            className="gold-button"
            style={{
              width: '100%', backgroundColor: '#171717', color: '#FFFFFF',
              fontWeight: '700', fontSize: '1.1rem', padding: '12px 0',
              marginTop: '5px', border: '1px solid #C5A46D'
            }}
          >
            Review Flashcards
          </button>
          <p style={{ marginTop: 10, color: '#555', fontSize: '0.95rem' }}>
            Review flashcards and reinforce weak areas
          </p>
        </div>

        {/* MANAGE SUBSCRIPTION */}
        {subscriptionStatus === 'active' && (
          <button
            onClick={handleManageSubscription}
            style={{
              marginTop: 16,
              background: 'none',
              border: 'none',
              color: '#C5A46D',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              letterSpacing: '0.5px',
            }}
          >
            Manage Subscription
          </button>
        )}

        {/* LIFETIME STATS */}
        {lifetimeStats && (lifetimeStats.accuracy !== null || lifetimeStats.weakCategories.length > 0) && (
          <div style={{ marginTop: 40, border: '1px solid #C5A46D', borderRadius: 10, padding: '20px 24px', backgroundColor: '#faf8f4', textAlign: 'left' }}>
            <p style={{ fontWeight: 700, color: '#C5A46D', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: 14 }}>YOUR LIFETIME STATS</p>

            {lifetimeStats.accuracy !== null && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ color: '#555', fontSize: '0.95rem' }}>Overall Accuracy</span>
                <span style={{
                  fontWeight: 700, fontSize: '1.1rem',
                  color: accuracyColor(lifetimeStats.accuracy)
                }}>
                  {lifetimeStats.accuracy}%
                </span>
              </div>
            )}

            {lifetimeStats.weakCategories.length > 0 && (
              <div>
                <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: 8 }}>Top areas to review:</p>
                {lifetimeStats.weakCategories.map((cat, i) => (
                  <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ backgroundColor: '#ef4444', color: '#fff', borderRadius: 4, padding: '2px 7px', fontSize: '0.75rem', fontWeight: 700 }}>{i + 1}</span>
                    <span style={{ fontWeight: 600, color: '#171717', fontSize: '0.95rem' }}>{cat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {A2HSBanner}
      </main>
    );
  }

  if (subject === "Custom Experience" && questions.length === 0) {
    return (
      <main style={{ maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#C5A46D', marginBottom: '30px', fontWeight: 'bold' }}>Customize Your Session</h2>
        {categories.map(cat => {
          const totalAvailable = boardPassQuestions.filter(q => q.subject === cat).length;
          return (
            <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '700', color: '#171717' }}>{cat}</span>
                <span
                  onClick={() => setCustomCounts(prev => ({ ...prev, [cat]: totalAvailable }))}
                  style={{ fontSize: '0.8rem', color: '#C5A46D', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Select All ({totalAvailable})
                </span>
              </div>
              <input
                type="number" min="0" max={totalAvailable}
                value={customCounts[cat] || 0}
                onChange={(e) => setCustomCounts(prev => ({ ...prev, [cat]: parseInt(e.target.value) || 0 }))}
                style={{ width: '60px', textAlign: 'center', border: '2px solid #8a7550', fontWeight: 'bold' }}
              />
            </div>
          );
        })}
        <button onClick={startCustomExperience} className="gold-button" style={{ width: '100%', marginTop: '30px', padding: '15px', fontWeight: '700' }}>
          Start Custom Session
        </button>
        <button onClick={() => setSubject(null)} style={{ display: 'block', margin: '20px auto', background: 'none', border: 'none', color: 'grey', cursor: 'pointer' }}>
          Cancel
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 700, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '0.9rem', color: '#C5A46D' }}>{subject.toUpperCase()}</h2>
        <button onClick={() => setView('complete')} style={{ color: 'red', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer' }}>END SESSION</button>
      </header>

      {view === 'vault_flashcard' && questions.length > 0 && (
        <p style={{ textAlign: 'center', color: '#C5A46D', fontWeight: 600, marginBottom: 20 }}>
          Card {currentIndex + 1} of {questions.length}
        </p>
      )}

      {view !== 'complete' && view !== 'vault_flashcard' && questions.length > 0 && (
        <>
          <div style={{ height: 14, width: '100%', backgroundColor: '#eee', borderRadius: 7, marginBottom: 10, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              backgroundColor: barColor,
              transition: '0.5s'
            }} />
          </div>
          {/* LIVE STATS BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: '0.85rem', color: '#555' }}>
              Question {currentIndex + 1} of {questions.length}
            </span>
            {attempted > 0 && (
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: barColor }}>
                {Math.round(masteryPercent)}% Accuracy ({score}/{attempted})
              </span>
            )}
          </div>
        </>
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

      {(view as string) === 'rationale' && question && (
        <div className="blueprint-card">
          <h2 style={{ color: selected === question.correctAnswer ? 'green' : 'red', textAlign: 'center' }}>{selected === question.correctAnswer ? 'SECURED' : 'WRONG'}</h2>
          {question.choices.map((c: any) => (
            <div key={c.key} style={{ padding: 15, border: '2px solid', marginBottom: 10, borderRadius: 8, borderColor: c.key === question.correctAnswer ? 'green' : c.key === selected ? 'red' : '#eee', background: c.key === question.correctAnswer ? '#f0f9f1' : c.key === selected ? '#fff5f5' : '#fff' }}>
              <p><strong>{c.key}. {c.text}</strong></p>
              <p style={{ fontSize: '0.95rem', marginTop: '8px', color: '#444', display: 'block' }}>
                {c.key === question.correctAnswer
                  ? question.rationale
                  : question.incorrectRationales?.[c.key]}
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

      {view === 'paywall' && (
        <div className="blueprint-card" style={{ textAlign: 'center', paddingTop: 40 }}>
          <img src="/coach-eleve-logo.png" alt="Coach Elevé" style={{ width: 110, marginBottom: 16, opacity: 0.95 }} />
          <h2 style={{ color: '#C5A46D', fontSize: '1.8rem', letterSpacing: '1px', marginBottom: 12 }}>
            You've completed 50 free questions!
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', maxWidth: 400, margin: '0 auto 32px', lineHeight: 1.6 }}>
            You're building real momentum. Unlock the full question bank, all 11 domains, and detailed rationales to finish your prep strong.
          </p>
          <a
            href="/upgrade"
            style={{
              display: 'block',
              width: '100%',
              padding: '14px 0',
              backgroundColor: '#C5A46D',
              color: '#000',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.5px',
              borderRadius: 8,
              textDecoration: 'none',
              marginBottom: 16,
            }}
          >
            Unlock Full Access — $49/month
          </a>
          <button
            onClick={() => setSubject(null)}
            style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.9rem', cursor: 'pointer' }}
          >
            Return Home
          </button>
        </div>
      )}

      {view === 'vault_flashcard' && question && (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              position: 'relative', width: '100%', minHeight: 180, display: 'flex',
              justifyContent: 'center',
              transition: 'transform 0.6s', transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              cursor: 'pointer'
            }}
          >
            {/* FRONT OF CARD */}
            <div style={{
              border: '2px solid #C5A46D', borderRadius: 12, padding: 30, minHeight: 180,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}>
              <h3 style={{ color: '#C5A46D' }}>Concept</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, textAlign: 'center' }}>{question.topic}</p>
              <button
                onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                style={{
                  marginTop: 14, padding: '12px 0', width: '200px',
                  backgroundColor: '#C5A46D', color: '#000', fontWeight: 700,
                  border: 'none', borderRadius: 8, cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}
              >
                Reveal Answer
              </button>
            </div>
            {/* BACK OF CARD */}
            <div className="blueprint-card" style={{ position: 'absolute', backfaceVisibility: 'hidden', width: '100%', minHeight: 180, transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px solid #C5A46D', backgroundColor: '#F8F5F0', padding: 24 }}>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '15px' }}>
                {[1, 2, 3].map((dot) => (
                  <div key={dot} style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #C5A46D', backgroundColor: (question.mastery_level || 0) >= dot ? '#C5A46D' : 'transparent' }} />
                ))}
                <span style={{ fontSize: '0.7rem', color: '#C5A46D', marginLeft: '5px', fontWeight: 'bold' }}>MASTERY: {question.mastery_level || 0}/3</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#333', marginBottom: 16 }}>
                {question.rationale
                  .split('\n')
                  .filter((line: string, i: number) => !(i === 0 && line.trimStart().startsWith('**')))
                  .join('\n')
                  .trimStart()
                  .replace(/—/g, '-')}
              </p>
              <div style={{ borderLeft: '3px solid #C5A46D', paddingLeft: 16 }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#C5A46D', marginBottom: 4 }}>MEMORY HOOK</div>
                <div style={{ fontStyle: 'italic', color: '#444', fontSize: '0.95rem' }}>
                  {question.memory_hook || question.memoryHook}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
            <button
              onClick={() => handleMasteryHit(question.id)}
              style={{ padding: '10px 16px', border: '1px solid #C5A46D', borderRadius: 8, backgroundColor: '#fff', cursor: 'pointer', fontWeight: 600 }}
            >
              <span style={{ backgroundColor: '#C5A46D', color: '#000', borderRadius: 4, padding: '4px 8px', marginRight: 6 }}>✓</span>
              Mastered
            </button>
            <button
              onClick={() => {
                if (currentIndex + 1 < questions.length) {
                  setCurrentIndex(p => p + 1);
                  setIsFlipped(false);
                } else {
                  setSubject(null);
                }
              }}
              style={{
                padding: '12px 16px', backgroundColor: '#ffffff', border: '1.5px solid #C5A46D',
                borderRadius: 6, height: 44, width: 150, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontWeight: 600, fontSize: '0.95rem',
                letterSpacing: '0.3px', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                marginLeft: 6, lineHeight: '1',
              }}
            >
              Next →
            </button>
          </div>

          <div style={{ display: 'none' }}>
            <div onClick={() => alert('Ask Coach Elevé voice preview coming soon')} style={{ width: '100%', marginTop: 10 }}>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <img src="/coach-eleve-logo.png" alt="Coach Elevé" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '2px solid #C5A46D' }} />
              </div>
              <p style={{ marginTop: 10, textAlign: 'center' }}>Ask Coach Elevé</p>
            </div>
          </div>

          <button onClick={() => setSubject(null)} style={{ display: 'block', margin: '30px auto', background: 'none', border: 'none', color: 'black', cursor: 'pointer', fontSize: '0.9rem' }}>Return to Home Page</button>
        </div>
      )}

      {view === 'complete' && (
        <div className="blueprint-card" style={{ textAlign: 'center', paddingTop: 40 }}>
          <img src="/coach-eleve-logo.png" alt="Coach Eleve Logo" style={{ width: 110, marginBottom: 10, opacity: 0.95 }} />

          <h2 style={{ color: '#171717', fontSize: '1.8rem', letterSpacing: '1px', marginBottom: 10 }}>
            Session Analysis
          </h2>

          {/* OVERALL SCORE */}
          {attempted > 0 && (
            <div style={{ margin: '20px auto', display: 'inline-block' }}>
              <div style={{
                fontSize: '4rem', fontWeight: 800,
                color: accuracyColor(Math.round(masteryPercent)),
                lineHeight: 1
              }}>
                {Math.round(masteryPercent)}%
              </div>
              <div style={{ color: '#555', fontSize: '0.9rem', marginTop: 4 }}>
                {score} correct out of {attempted} attempted
              </div>
            </div>
          )}

          {/* PER-CATEGORY BREAKDOWN */}
          {Object.keys(categoryStats).length > 0 && (
            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <p style={{ fontWeight: 700, color: '#C5A46D', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: 10 }}>CATEGORY BREAKDOWN</p>
              {Object.entries(categoryStats).map(([cat, stats]) => {
                const pct = Math.round((stats.correct / stats.attempted) * 100);
                const color = accuracyColor(pct);
                const label = accuracyLabel(pct);
                return (
                  <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <span style={{ fontWeight: 600, color: '#171717', fontSize: '0.9rem' }}>{cat}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: '#555', fontSize: '0.85rem' }}>{stats.correct}/{stats.attempted}</span>
                      <span style={{ backgroundColor: color, color: '#fff', borderRadius: 4, padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700, minWidth: 90, textAlign: 'center' }}>
                        {label} {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* MISSED CONCEPTS */}
          {sessionMissed.length > 0 && (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
              <thead style={{ background: '#171717', color: '#C5A46D' }}>
                <tr><th style={{ padding: '15px', textAlign: 'left' }}>MISSED CONCEPTS</th></tr>
              </thead>
              <tbody>
                {sessionMissed.map((m: any, i: number) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', textAlign: 'left' }}>{m.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div style={{ backgroundColor: '#F8F5F0', padding: 25, border: '1px solid #C5A46D', marginTop: 30, textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold', color: '#C5A46D' }}>{coach.title}</p>
            <p style={{ fontStyle: 'italic' }}>{coach.msg}</p>
          </div>

          <button
            onClick={openVault}
            className="gold-button"
            style={{ width: '100%', marginTop: '30px', backgroundColor: '#171717', color: '#C5A46D' }}
          >
            Review Flashcards
          </button>
          <button onClick={() => setSubject(null)} className="gold-button" style={{ marginTop: 10, width: '100%' }}>
            Return Home
          </button>
        </div>
      )}
      {A2HSBanner}
    </main>
  );
}
