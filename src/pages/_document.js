import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" type="text/css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
