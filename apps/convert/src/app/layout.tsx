import { Overpass, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'

import '../styles/globals.css'
import Script from 'next/script'
import { env } from '../env/server.mjs'
import { AnalyticsWrapper } from './Analytics'
import { Shell } from './components/Shell'
// If loading a variable font, you don't need to specify the font weight
const overpass = Overpass({
  //weight: ['600', '900'],
  // style: 'normal',
  // subsets: ['latin'],
  variable: '--font-overpass',
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional',
})

const open_sans = Open_Sans({
  //weight: ['400', '600'],
  //style: 'normal',
  // subsets: ['latin'],
  variable: '--font-open-sans',
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional',
})

// export const ogURL = `${env.OG_URL}/api/og/jote`

export const metadata: Metadata = {
  title: 'Converter | Center of Trial and Error',
  description: 'Convert between different academic file formats',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${open_sans.variable} ${overpass.variable}`}>
      <body className="h-screen">
        <Shell>{children}</Shell>
        <AnalyticsWrapper />
        <Script
          strategy="afterInteractive"
          data-domain="trialanderror.org"
          src="/stats/js/script"
          data-api="/stats/api/event"
        />
      </body>
    </html>
  )
}
