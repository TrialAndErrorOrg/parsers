import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import React from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher'
import { AppShellLayout } from '../components/app-shell-layout/app-shell-layout'
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
            <title>Covertin</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <AppShellLayout>
            <Component {...pageProps} />
          </AppShellLayout>
        </MantineProvider>
      </SWRConfig>
    </SessionProvider>
  )
}
