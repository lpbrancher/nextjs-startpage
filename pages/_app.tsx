import '@/styles/globals.css'
import '@/styles/Weather.css'
import '@/styles/LinkCard.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
