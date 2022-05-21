import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/GothamRounded/GothamRounded-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body className="loading" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
