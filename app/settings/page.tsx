import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/navigation'
import { signOut } from '../actions/signOut'

export default async function SettingsPage() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafaf8',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 400,
        padding: '40px 36px',
        backgroundColor: '#ffffff',
        border: '1px solid #C5A46D',
        borderRadius: 4,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      }}>
        <h1 style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          color: '#171717',
          textAlign: 'center',
          marginBottom: 6,
        }}>
          ACCOUNT
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '0.9rem',
          marginBottom: 28,
        }}>
          {user.email}
        </p>

        <form action={signOut}>
          <button
            type="submit"
            className="gold-button"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#C5A46D',
              color: '#fff',
              border: 'none',
              borderRadius: 3,
              fontSize: '0.9rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              cursor: 'pointer',
            }}
          >
            SIGN OUT
          </button>
        </form>
      </div>
    </main>
  )
}
