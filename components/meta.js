import Head from "next/head";

const name = "Zeyao Li";

export const siteTitle = "Zeyao Li Portfolio";
export const pageDescription = "Zeyao Li's portfolio built with Next.js";

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={pageDescription} />
      {/* Open Graph */}
      <meta name="og:title" content={siteTitle} />
      <meta property="og:url" content="https://zeyaoli.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={pageDescription} />
    </Head>
  );
}
