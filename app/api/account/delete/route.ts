import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import Stripe from 'stripe'

// Tables that hold rows tied to a specific auth user, keyed by `user_id`
// (confirmed against the live schema — grepping app code alone misses
// `learner_progress`, since no current page reads or writes it).
const USER_ID_TABLES = ['usage_events', 'opportunity_flashcards', 'user_topic_performance', 'learner_progress']

export async function POST(_req: NextRequest) {
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

  // The user id comes only from the authenticated session — never from the
  // request body — so one signed-in user can never delete another account.
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const userId = user.id

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', userId)
    .single()

  if (profile?.stripe_customer_id) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2026-03-25.dahlia',
      })
      const subscriptions = await stripe.subscriptions.list({
        customer: profile.stripe_customer_id,
        status: 'all',
      })
      for (const sub of subscriptions.data) {
        if (sub.status === 'active' || sub.status === 'trialing') {
          await stripe.subscriptions.cancel(sub.id)
        }
      }
    } catch (err) {
      // Best-effort — a Stripe hiccup shouldn't trap the user unable to
      // delete their account. The subscription just outlives the account
      // until it's caught and canceled manually.
      console.error('delete-account: Stripe cancellation failed', err)
    }
  }

  for (const table of USER_ID_TABLES) {
    const { error } = await supabaseAdmin.from(table).delete().eq('user_id', userId)
    if (error) {
      console.error(`delete-account: failed to delete from ${table}`, error)
    }
  }

  const { error: profileError } = await supabaseAdmin.from('profiles').delete().eq('id', userId)
  if (profileError) {
    console.error('delete-account: failed to delete profile row', profileError)
  }

  const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId)
  if (authError) {
    console.error('delete-account: failed to delete auth user', authError)
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
