import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almendra+Display&family=Archivo:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
