import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../src/components/Nav/Nav.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className=" ">  Hello!!!</main>

      <footer >
        Footer
      </footer>
    </div>
  )
}
