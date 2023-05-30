import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/templates/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Lab2dev</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
