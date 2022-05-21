import { ChainId, Config, DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../global.css'

const config: Config = {
  // @ts-ignore
  readOnlyChain: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      'https://rinkeby.infura.io/v3/67670d7cc2cb439b9c40f1fc6a5717c9',
  },
}
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  )
}
