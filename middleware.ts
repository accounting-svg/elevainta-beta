import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Validate the session from cookies — safe to use for auth decisions
  const { data: { user } } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  // Protected routes — unauthenticated users go to /signup
  if (
    (pathname.startsWith('/board-pass') || pathname.startsWith('/upgrade')) &&
    !user
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/signup'
    return NextResponse.redirect(url)
  }

  // Auth pages — already-logged-in users go straight to the app
  if (
    (pathname === '/' || pathname === '/login' || pathname === '/signup') &&
    user
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/board-pass'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  // Skip Next.js internals, API routes, and static assets
  matcher: [
    '/((?!_next/static|_next/image|api/|favicon\\.ico|icons/|.*\\.(?:png|jpg|jpeg|svg|webp|ico|json|txt)$).*)',
  ],
}
