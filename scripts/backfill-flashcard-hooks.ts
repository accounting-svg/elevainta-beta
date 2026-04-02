/**
 * One-time backfill script: updates memory_hook and board_trap on all
 * opportunity_flashcards rows that are missing them, matching by topic.
 *
 * Run from the elevainta-app directory:
 *   npx tsx scripts/backfill-flashcard-hooks.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

// Read .env.local manually (no dotenv dependency needed)
const envPath = path.resolve(process.cwd(), '.env.local')
const env: Record<string, string> = {}
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) env[key.trim()] = rest.join('=').trim()
})

const supabaseUrl = env['SUPABASE_URL'] || env['NEXT_PUBLIC_SUPABASE_URL']
const serviceRoleKey = env['SUPABASE_SERVICE_ROLE_KEY']

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey)

// Import questions after env is validated
const { boardPassQuestions } = await import('../app/data/boardPassQuestions.js')

// Build lookup map: topic -> { memoryHook, boardTrap }
const lookup = new Map<string, { memoryHook: string; boardTrap: string }>()
for (const q of boardPassQuestions) {
  if (q.topic) lookup.set(q.topic, { memoryHook: q.memoryHook, boardTrap: q.boardTrap })
}

console.log(`Loaded ${lookup.size} unique topics from boardPassQuestions.ts`)

// Fetch all rows missing memory_hook
const { data: rows, error } = await supabase
  .from('opportunity_flashcards')
  .select('id, topic, memory_hook')
  .is('memory_hook', null)

if (error) { console.error('Fetch error:', error.message); process.exit(1) }
if (!rows || rows.length === 0) { console.log('No rows need backfilling.'); process.exit(0) }

console.log(`Found ${rows.length} rows with null memory_hook`)

let updated = 0
let skipped = 0

for (const row of rows) {
  const match = lookup.get(row.topic)
  if (!match) {
    console.warn(`  No match for topic: "${row.topic}" — skipping`)
    skipped++
    continue
  }

  const { error: updateError } = await supabase
    .from('opportunity_flashcards')
    .update({ memory_hook: match.memoryHook, board_trap: match.boardTrap })
    .eq('id', row.id)

  if (updateError) {
    console.error(`  Failed to update id ${row.id}:`, updateError.message)
  } else {
    updated++
  }
}

console.log(`\nDone. Updated: ${updated} | Skipped (no match): ${skipped}`)
