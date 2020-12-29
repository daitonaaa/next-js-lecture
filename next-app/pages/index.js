import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App 2</title>
      </Head>
      <Link href="/users">
        <a>users</a>
      </Link>
    </div>
  )
}
