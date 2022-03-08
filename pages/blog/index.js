import Link from 'next/Link';
import Image from 'next/image'
import Head from 'next/head'

export default function Home(){
    return <div>
        <Head>
            <title>Hakkında</title>
        </Head>
        <Link href="/">
            Geri dön
            </Link>
    </div>
}