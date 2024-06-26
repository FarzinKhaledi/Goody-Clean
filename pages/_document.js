import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zxx">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/img/favicon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
