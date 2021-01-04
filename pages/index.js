import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Find Arnold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" ">  <p className="text-xl font-medium ">Hello!!! </p></main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}
