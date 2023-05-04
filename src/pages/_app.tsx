import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext'
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <AutenticacaoProvider>
        <Component {...pageProps} />
      </AutenticacaoProvider>
    </MantineProvider>
  )
}
