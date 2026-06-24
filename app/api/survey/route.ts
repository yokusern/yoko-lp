import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { situation, problem, wish, contact } = await req.json()

  const projectId = process.env.FIREBASE_PROJECT_ID
  const apiKey = process.env.FIREBASE_API_KEY

  if (!projectId || !apiKey) {
    console.error('Firebase env vars not set')
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 500 })
  }

  const body = {
    fields: {
      situation:  { stringValue: situation  ?? '' },
      problem:    { stringValue: problem    ?? '' },
      wish:       { stringValue: wish       ?? '' },
      contact:    { stringValue: contact    ?? '' },
      source:     { stringValue: 'yoko-lp' },
      createdAt:  { timestampValue: new Date().toISOString() },
    },
  }

  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/survey_responses?key=${apiKey}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
  )

  if (!res.ok) {
    const err = await res.text()
    console.error('Firestore error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
