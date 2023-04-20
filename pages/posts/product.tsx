import Layout from '@/components/layout';
import Head from 'next/head';


export default function product() {
    return (
        <Layout home={undefined}>
            <Head>
                <title>product Post</title>
            </Head>
            <h1>product Post</h1>
        </Layout>
    );
}