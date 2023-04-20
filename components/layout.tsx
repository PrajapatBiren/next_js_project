import styles from '../styles/layout.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar/Navbar'
const name = 'Biren Prajapati';
export const siteTitle = 'First Website';

export default function Layout({ children, home }: any) {
    return (
        <div className={styles.container}>
            <Head>
                <Link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}