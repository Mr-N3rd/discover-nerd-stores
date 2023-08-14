import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>N3rd Coffee</title>
        <meta name="description" content="Find your nexd study location with Nerd Coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.n3rdvana.com">Nerd Coffee!</a>
        </h1>

        <p className={styles.description}>
         Let's find your next favourite coffee and study location
        </p>

        <div className={styles.grid}>
            <h2>Coming Soon &rarr;</h2>

        </div>
      </main>

      <footer className={styles.footer}>


      </footer>
    </div>
  )
}
