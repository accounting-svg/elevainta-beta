import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signOut } from '@/app/actions/signOut'
import Link from 'next/link'


export default async function DashboardPage() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
       
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main>
      <h1>Elevainta Dashboard</h1>
      <p>Welcome back, {user.email}</p>

      <form action={signOut}>
  <button type="submit">Sign out</button>
</form>

<div style={{ marginTop: 20 }}>
  <Link href="/board-pass">
    <button>Start Board Pass</button>
  </Link>
</div>

    </main>
  )
}
