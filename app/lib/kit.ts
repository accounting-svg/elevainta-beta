const BASE = 'https://api.convertkit.com/v4'

async function getSubscriberId(email: string, apiKey: string): Promise<string | null> {
  const res = await fetch(`${BASE}/subscribers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Api-Key ${apiKey}` },
    body: JSON.stringify({ email_address: email }),
  })
  if (!res.ok) return null
  const data = await res.json()
  return data?.subscriber?.id ?? null
}

async function findSubscriberId(email: string, apiKey: string): Promise<string | null> {
  const res = await fetch(`${BASE}/subscribers?email_address=${encodeURIComponent(email)}`, {
    headers: { 'Authorization': `Api-Key ${apiKey}` },
  })
  if (!res.ok) return null
  const data = await res.json()
  return data?.subscribers?.[0]?.id ?? null
}

async function getTagId(name: string, apiKey: string): Promise<string | null> {
  const res = await fetch(`${BASE}/tags`, {
    headers: { 'Authorization': `Api-Key ${apiKey}` },
  })
  if (!res.ok) return null
  const data = await res.json()
  return data?.tags?.find((t: any) => t.name === name)?.id ?? null
}

export async function tagKitSubscriber(email: string, tag: string): Promise<void> {
  try {
    const apiKey = process.env.KIT_API_KEY
    if (!apiKey) { console.error('kit: KIT_API_KEY not set'); return }

    const [subscriberId, tagId] = await Promise.all([
      getSubscriberId(email, apiKey),
      getTagId(tag, apiKey),
    ])

    if (!subscriberId) { console.error(`kit: could not find/create subscriber for ${email}`); return }
    if (!tagId) { console.error(`kit: tag "${tag}" not found`); return }

    await fetch(`${BASE}/tags/${tagId}/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Api-Key ${apiKey}` },
      body: JSON.stringify({ subscriber_id: subscriberId }),
    })

    console.log(`kit: tagged ${email} with "${tag}"`)
  } catch (err) {
    console.error('kit: tagKitSubscriber error (silent):', err)
  }
}

export async function removeKitTag(email: string, tag: string): Promise<void> {
  try {
    const apiKey = process.env.KIT_API_KEY
    if (!apiKey) return

    const [subscriberId, tagId] = await Promise.all([
      findSubscriberId(email, apiKey),
      getTagId(tag, apiKey),
    ])

    if (!subscriberId || !tagId) return

    await fetch(`${BASE}/tags/${tagId}/subscribers/${subscriberId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Api-Key ${apiKey}` },
    })

    console.log(`kit: removed tag "${tag}" from ${email}`)
  } catch (err) {
    console.error('kit: removeKitTag error (silent):', err)
  }
}
