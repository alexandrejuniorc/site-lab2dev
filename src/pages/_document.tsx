import { Html, Head, Main, NextScript } from "next/document";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <main className="py-24 container">
          <Main />
          <NextScript />
        </main>
        <Footer />
      </body>
    </Html>
  );
}
