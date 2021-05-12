import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../src/components/Nav/Nav.component";
import Hero from "../src/components/Hero/Hero.component";
import About from "../src/components/About/About.component"
import Skills from "../src/components/Skills/skills.component"
import Project from "../src/components/Project/Project.component"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amasoh.A.Arnold</title>
        <link rel="icon" href="/arnold.jpeg" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
      </main>


      <footer >
        Footer
      </footer>
    </div>
  )
}
