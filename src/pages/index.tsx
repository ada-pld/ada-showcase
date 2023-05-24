import Head from 'next/head'

import HeroBanner from '@/sections/HeroBanner/HeroBanner';

export default function Home() {
    return (
        <>
            <Head>
                <title>ADA | Showcase</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <HeroBanner />
            </main>
        </>
    );
}
