import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { tagKitSubscriber } from '../../lib/kit'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const { id, email } = await req.json()

  if (!id || !email) {
    return NextResponse.json({ error: 'Missing id or email' }, { status: 400 })
  }

  // Use service role — bypasses RLS unconditionally, works whether or not
  // the user has confirmed their email yet
  const { error } = await supabaseAdmin
    .from('profiles')
    .upsert({ id, email, subscription_status: 'free' }, { onConflict: 'id' })

  if (error) {
    console.error('Profile creation error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  await tagKitSubscriber(email, 'free_user')

  return NextResponse.json({ ok: true })
}
