import Layout from '@/components/layout';
import Head from 'next/head';


export default function About() {
    return (
        <Layout home={undefined}>
            <Head>
                <title>About Post</title>
            </Head>
            <h1>About Post</h1>
        </Layout>
    );
}