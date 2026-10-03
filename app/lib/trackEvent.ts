import { createBrowserClient } from '@supabase/ssr'
import { Capacitor } from '@capacitor/core'

// Tracking must never break the page or a purchase — every failure here is
// swallowed rather than thrown, so this is always safe to call fire-and-forget.
export async function trackEvent(event: string, errorMessage?: string): Promise<void> {
  try {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('usage_events').insert({
      user_id: user.id,
      event,
      platform: Capacitor.getPlatform(),
      error_message: errorMessage ?? null,
    })
  } catch {
    // silent
  }
}
