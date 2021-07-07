import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../src/components/Nav/Nav.component";
import Hero from "../src/components/Hero/Hero.component";
import About from "../src/components/About/About.component"
import Skills from "../src/components/Skills/skills.component"
import Project from "../src/components/Project/Project.component"
import Blog from "../src/components/Blog/Blog.component"
import Contact from "../src/components/Contact/Contact.component"



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amasoh.A.Arnold | software developer using react for frontend applications and deno  </title>
        <meta name='keywords' content='portfolio, aaatechie, using react, software developer' />
        <meta name="description" content={
          `A software developer 👨‍💻 with Bsc in Computer 
        Science who specializes in creating and designing intuitive
         user experience and interfaces for web or mobile using react for
         frontend applications primarily`
        } />

        <link rel="icon" href="/arnold.jpeg" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Blog />
        <Contact />
      </main>


      <footer >
        Footer
      </footer>
    </div>
  )
}
