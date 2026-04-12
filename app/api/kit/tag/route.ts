import { NextRequest, NextResponse } from 'next/server'

const KIT_BASE = 'https://api.kit.com/v4'

export async function POST(req: NextRequest) {
  try {
    const { email, tag } = await req.json()

    if (!email || !tag) {
      console.error('kit/tag: missing email or tag', { email, tag })
      return NextResponse.json({ error: 'Missing email or tag' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    if (!apiKey) {
      console.error('kit/tag: KIT_API_KEY is not set')
      return NextResponse.json({ error: 'KIT_API_KEY not configured' }, { status: 500 })
    }

    console.log(`kit/tag: starting for email="${email}" tag="${tag}"`)

    // Step 1: Upsert subscriber by email
    const subRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': `${apiKey}` },
      body: JSON.stringify({ email_address: email, first_name: '' }),
    })
    const subData = await subRes.json()
    console.log('kit/tag: step 1 subscriber upsert status', subRes.status)
    console.log('kit/tag: step 1 subscriber response', JSON.stringify(subData, null, 2))

    const subscriberId = subData?.subscriber?.id
    if (!subscriberId) {
      console.error('kit/tag: could not get subscriber ID from response')
      return NextResponse.json({ error: 'Failed to upsert subscriber' }, { status: 500 })
    }
    console.log('kit/tag: subscriber ID', subscriberId)

    // Step 2: Find tag ID by name
    const tagsRes = await fetch(`${KIT_BASE}/tags`, {
      headers: { 'X-Kit-Api-Key': `${apiKey}` },
    })
    const tagsData = await tagsRes.json()
    console.log('kit/tag: step 2 tags list status', tagsRes.status)
    console.log('kit/tag: step 2 tags response', JSON.stringify(tagsData))

    const matchedTag = tagsData?.tags?.find((t: any) => t.name === tag)
    if (!matchedTag) {
      console.error(`kit/tag: tag "${tag}" not found in Kit account`)
      return NextResponse.json({ error: `Tag "${tag}" not found` }, { status: 404 })
    }
    console.log(`kit/tag: found tag "${tag}" with ID`, matchedTag.id)

    // Step 3: Apply tag to subscriber
    const applyRes = await fetch(`${KIT_BASE}/tags/${matchedTag.id}/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': `${apiKey}` },
      body: JSON.stringify({ subscriber_id: subscriberId }),
    })
    const applyData = await applyRes.json()
    console.log('kit/tag: step 3 apply tag status', applyRes.status)
    console.log('kit/tag: step 3 apply tag response', JSON.stringify(applyData))

    console.log(`kit/tag: SUCCESS — tagged ${email} with "${tag}"`)
    return NextResponse.json({ ok: true })

  } catch (err: any) {
    console.error('kit/tag: unexpected error', err?.message ?? err)
    return NextResponse.json({ ok: true }) // silent failure — never break caller
  }
}
