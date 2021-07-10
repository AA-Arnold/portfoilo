// import Link from 'next/link'
import styles from './Nav.module.css'
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'
import Home from '../../assets/home.svg'
import About from '../../assets/help-circle.svg'
import Skills from '../../assets/tool.svg'
import Project from '../../assets/code.svg'
import Blog from '../../assets/edit.svg'
import Contact from '../../assets/mail.svg'
import { Link } from "react-scroll";


import { useEffect, useState } from "react";

import { useTheme } from "next-themes";



export default function Nav(){

    const [homeState, setHomeState] = useState('Home')
    const [aboutState, setAboutState] = useState('About')
    const [skillsState, setSkillsState] = useState('Skills')
    const [projectState, setProjectState] = useState('Projects')
    const [blogState, setBlogState] = useState('Blog')
    const [contactState, setContactState] = useState('Contact')


    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  useEffect(() => {
      setIsMounted(true);
    }, []);
  const switchTheme = () => {
      if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    return(
        <header className='py-4 flex items-center px-5 w-full mx-auto fixed z-10 bg-purple-sec dark:bg-white'>
            <Link href='/'>
                <a aria-current='page' className="flex items-center  text-purple-high dark:text-green-high font-bold text-lg mr-6 border:0">
                    {/* <div className={`${styles.image} overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-green-high dark:border-purple-high`}>
                        <img src='arnold.jpeg' width='300px' alt="Profile picture of Amasoh Asama Arnold" className={`object-cover h-full ${styles.realImage}`}/>
                    </div> */}
                    <div className="inline-block w-10 h-10 mr-2 rounded-full overflow-hidden flex-shrink-0 border-2  border-purple-high dark:border-green-high">
                          <img alt="Profile picture of Amasoh Asama Arnold" src="arnold.jpeg" />
                      </div>
                    <span>Amasoh Arnold</span>
                </a> 
            </Link>
            <div className='flex-1'></div>
            <nav>
                {/*-------------------------------- top nav ---------------------------------------*/}

                    <div className='flex flex-col sm:flex-row items-center'>
                        <ul className={`top-navigation items-center flex-wrap space-x-4 sm:space-x-6 sm:mt-0 w-full items-center justify-end nav-items ${styles.navItems}`}>

                            
                            <li  className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a onMouseOver={()=>setHomeState(<Home/>)} onMouseOut={()=>setHomeState('Home')} href="" className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {homeState}
                                    </a>
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a href="" onMouseOver={()=>setAboutState(<About/>)} onMouseOut={()=>setAboutState('About')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {aboutState}
                                    </a>
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a href="" onMouseOver={()=>setSkillsState(<Skills/>)} onMouseOut={()=>setSkillsState('Skills')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {skillsState}
                                    </a>
                                </Link>
                            </li>
                                
                                <li className="hidden sm:inline-block">
                                    <Link href='/'>
                                        <a href="#Projects" onMouseOver={()=>setProjectState(<Project/>)} onMouseOut={()=>setProjectState('Project')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                        {projectState}
                                        </a>
                                    </Link>
                                </li>
                                <li className="hidden sm:inline-block">
                                    <Link href='/'>
                                        <a href="" onMouseOver={()=>setBlogState(<Blog/>)} onMouseOut={()=>setBlogState('Blog')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                        {blogState}
                                        </a>
                                    </Link>
                                </li>
                                <li className={`hidden sm:inline-block ${styles.navItem}`}>
                                <Link
                                    activeClass={styles.active}
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                 <a  onMouseOver={()=>setContactState(<Contact/>)} onMouseOut={()=>setContactState('Contact')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-white hover:border-light-secondary dark:text-black dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                        {contactState}
                                </a>
                                </Link>
                                </li>

                                <li className="inline-block text-lg sm:text-base ">
                                <button onClick={switchTheme}  className="text-orange-400 transition-colors duration-300 ease-linear focus:outline-none">
                                    <span className="hidden">
                                        <Moon/>
                                    </span> 
                                    
                                    <span className="block">
                                        <Sun/>
                                    </span>
                               </button>
                            </li>
                        </ul>
                    </div>


                     {/*-------------------------------- bottom nav ---------------------------------------*/}

                    <ul className={`${styles.bottomNavigation} fixed bottom-0 left-0 z-20  bg-purple-sec  dark:bg-white w-full flex items-center justify-evenly sm:hidden h-20`}>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Home stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        Home
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <About stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        About
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Skills stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        Skills
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Project stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        Projects
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Blog stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        Blog
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-purple-txt dark:text-green-high font-bold'>
                                <Link
                                    activeClass={styles.active}
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Contact stroke={(theme === 'dark') ? '#0EB108' : '#AF97BF'}/>
                                    <div>
                                        Contact
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}