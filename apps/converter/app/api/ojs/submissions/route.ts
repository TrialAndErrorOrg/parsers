import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { getSID, setCookieHeader } from '../../../../lib/ojs-cookies'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('apiToken')
  const searchPhrase = searchParams.get('searchPhrase')
  const endpoint = searchParams.get('endpoint')

  if (!token) return NextResponse.json({ error: 'No token' }, { status: 403 })
  if (!endpoint) return NextResponse.json({ error: 'No endpoint' }, { status: 400 })

  try {
    const url = `${endpoint}/submissions?apiToken=${token}${
      searchPhrase ? `&searchPhrase=${searchPhrase}` : ''
    }`

    const ojssid = req.cookies.get('OJSSID')?.value
    const response = await axios.get(url, {
      headers: ojssid ? { cookie: `OJSSID=${ojssid}` } : {},
    })

    const res = NextResponse.json(response.data)
    const sid = getSID(response.headers['set-cookie'] || '')
    if (sid) {
      res.headers.set('Set-Cookie', setCookieHeader('OJSSID', sid, { path: '/' }))
    }
    return res
  } catch (e: any) {
    console.error(e?.message || e)
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}
