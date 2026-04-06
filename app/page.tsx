import { redirect } from 'next/navigation'

export default function Home() {
  // Middleware handles the authenticated case: logged-in users are redirected
  // to /board-pass before this ever renders. Unauthenticated visitors land on signup.
  redirect('/signup')
}
