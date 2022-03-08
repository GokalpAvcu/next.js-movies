import Link from 'next/Link';
import Head from 'next/head'
export default function Post(){
    return <div>
        <Head>
            <title>Blog Post</title>
        </Head>
        <h3>Post Page</h3>
        <Link href="/">
            Geri dön
            </Link>
    </div>
}