import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://api.convertkit.com/v3'

export async function POST(req: NextRequest) {
  try {
    const { email, tag } = await req.json()

    if (!email || !tag) {
      console.error('kit/tag: missing email or tag', { email, tag })
      return NextResponse.json({ error: 'Missing email or tag' }, { status: 400 })
    }

    const apiSecret = process.env.KIT_API_KEY
    if (!apiSecret) {
      console.error('kit/tag: KIT_API_KEY is not set')
      return NextResponse.json({ error: 'KIT_API_KEY not configured' }, { status: 500 })
    }

    console.log(`kit/tag: starting for email="${email}" tag="${tag}"`)

    // Step 1: Get all tags, find by name — create if not found
    const tagsRes = await fetch(`${BASE}/tags?api_secret=${apiSecret}`)
    const tagsData = await tagsRes.json()
    console.log('kit/tag: step 1 get tags status', tagsRes.status)
    console.log('kit/tag: step 1 get tags response', JSON.stringify(tagsData, null, 2))

    let matchedTag = tagsData?.tags?.find((t: any) => t.name === tag)

    if (!matchedTag) {
      console.log(`kit/tag: tag "${tag}" not found, creating it`)
      const createRes = await fetch(`${BASE}/tags`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ api_secret: apiSecret, tag: { name: tag } }),
      })
      const createData = await createRes.json()
      console.log('kit/tag: step 1 create tag status', createRes.status)
      console.log('kit/tag: step 1 create tag response', JSON.stringify(createData, null, 2))
      matchedTag = createData
    }

    const tagId = matchedTag?.id
    if (!tagId) {
      console.error(`kit/tag: could not get tag ID for "${tag}"`)
      return NextResponse.json({ error: `Failed to find or create tag "${tag}"` }, { status: 500 })
    }
    console.log(`kit/tag: using tag ID ${tagId} for "${tag}"`)

    // Step 2: Subscribe email and apply tag in one call
    const subRes = await fetch(`${BASE}/tags/${tagId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_secret: apiSecret, email }),
    })
    const subData = await subRes.json()
    console.log('kit/tag: step 2 subscribe+tag status', subRes.status)
    console.log('kit/tag: step 2 subscribe+tag response', JSON.stringify(subData, null, 2))

    console.log(`kit/tag: SUCCESS — subscribed ${email} with tag "${tag}"`)
    return NextResponse.json({ ok: true })

  } catch (err: any) {
    console.error('kit/tag: unexpected error', err?.message ?? err)
    return NextResponse.json({ ok: true }) // silent failure — never break caller
  }
}
