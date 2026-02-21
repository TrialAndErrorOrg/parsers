import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import qs from 'querystring'
import { getSID, setCookieHeader } from '../../../../lib/ojs-cookies'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('apiToken')
  const endpoint = searchParams.get('endpoint')
  const submissionId = searchParams.get('submissionId')

  if (!token) return NextResponse.json({ error: 'No token' }, { status: 403 })
  if (!endpoint) return NextResponse.json({ error: 'No endpoint' }, { status: 400 })

  try {
    const decodedEndpoint = decodeURIComponent(endpoint)
    const url = `${decodedEndpoint}/submissions/${submissionId}/files?${qs.stringify({
      apiToken: token,
    })}`

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
    return NextResponse.json({ error: 'Failed to fetch files' }, { status: 500 })
  }
}
