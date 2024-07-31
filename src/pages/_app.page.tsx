import '../lib/dayjs'

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { Header } from '../components/header'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://ignite-call/',
            images: [
              {
                url: '/banner.png',
                width: 900,
                height: 800,
                alt: 'Ignite Call Banner',
                type: 'image/png',
              },
            ],
            siteName: 'Igite Call',
          }}
        />
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
