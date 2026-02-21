import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { getSID, setCookieHeader } from '../../../../lib/ojs-cookies'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('apiToken')
  const url = searchParams.get('url')

  if (!token) return NextResponse.json({ error: 'No token' }, { status: 403 })
  if (!url) return NextResponse.json({ error: 'No url' }, { status: 400 })

  try {
    const ojssid = req.cookies.get('OJSSID')?.value
    const response = await axios.get(`${decodeURIComponent(url)}?apiToken=${token}`, {
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
    return NextResponse.json({ error: 'Failed to fetch publication' }, { status: 500 })
  }
}
