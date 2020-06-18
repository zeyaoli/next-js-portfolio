import Head from 'next/head';

const name = 'Zeyao Li';

export const siteTitle = 'Zeyao Li Portfolio';

export default function Meta() {
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content="Zeyao Li's portfolio built with Next.js" />
			<meta name="og:title" content={siteTitle} />
		</Head>
	);
}
