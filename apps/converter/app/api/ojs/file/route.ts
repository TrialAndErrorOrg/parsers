import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { getSID, setCookieHeader } from '../../../../lib/ojs-cookies'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const url = searchParams.get('url')

  if (!url) return NextResponse.json({ error: 'No url' }, { status: 400 })

  try {
    const ojssid = req.cookies.get('OJSSID')?.value
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        ...(ojssid ? { cookie: `OJSSID=${ojssid}` } : {}),
        Accept: 'application/octet-stream,*/*',
      },
    })

    const res = new NextResponse(response.data, {
      status: 200,
      headers: { 'Content-Type': 'application/octet-stream' },
    })
    const sid = getSID(response.headers['set-cookie'] || '')
    if (sid) {
      res.headers.set('Set-Cookie', setCookieHeader('OJSSID', sid, { path: '/' }))
    }
    return res
  } catch (e: any) {
    console.error(e?.message || e)
    return NextResponse.json({ error: 'Failed to fetch file' }, { status: 500 })
  }
}
