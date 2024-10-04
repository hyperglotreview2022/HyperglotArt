import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
        <link rel="icon" href="/ico.ico" />
        <meta property="og:image" content="/ico.ico" />
        <link rel="apple-touch-icon" href="/ico.ico"/>
        <title>Hyperglot Art</title>
  <meta name="description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta name="keywords" content="hyperglot art, hyperglot, art, gallery, VR, AR, digital art" />
  <meta name="author" content="Hyperglot Art" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta property="og:title" content="Hyperglot Art" />
  <meta property="og:description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta property="og:image" content="https://www.hyperglotart.com/HA.jpeg" />
  <meta property="og:url" content="https://www.hyperglotart.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="Hyperglot Art" />
  <meta name="twitter:title" content="Hyperglot Art" />
  <meta name="twitter:description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta name="twitter:image" content="https://www.hyperglotart.com/HA.jpeg" />
  <link rel="canonical" href="https://www.hyperglotart.com" />
  <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
