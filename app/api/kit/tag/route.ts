import { NextRequest, NextResponse } from 'next/server'
import { tagKitSubscriber, removeKitTag } from '../../../lib/kit'

export async function POST(req: NextRequest) {
  try {
    const { email, tag, remove } = await req.json()
    if (!email || !tag) return NextResponse.json({ error: 'Missing email or tag' }, { status: 400 })
    if (remove) {
      await removeKitTag(email, tag)
    } else {
      await tagKitSubscriber(email, tag)
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // silent failure
  }
}
