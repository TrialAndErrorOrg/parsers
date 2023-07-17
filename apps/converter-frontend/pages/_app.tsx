import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher.js'
import { AppShellLayout } from '../components/app-shell-layout/app-shell-layout.js'
import { SessionProvider } from 'next-auth/react'

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Head>
            <title>Academic Converter provided by the Center of Trial and Error</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <AppShellLayout>
            <Component {...pageProps} />
          </AppShellLayout>
        </MantineProvider>
      </SWRConfig>
    </SessionProvider>
  )
}
