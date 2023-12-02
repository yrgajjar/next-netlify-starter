import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>YRGajjar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Site!" />
        <p className="description">
          Under Devlop By <code>YRGajjar</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
