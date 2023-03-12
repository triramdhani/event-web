import '@/styles/globals.css'
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import createEmotionCache from '../../utility/createEmotionCache'
import { NextPageWithLayout } from './page'
interface AppPropsLayout extends AppProps {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
}
const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
