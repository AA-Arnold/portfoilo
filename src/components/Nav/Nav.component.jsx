import Link from 'next/link'
import styles from './Nav.module.css'
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'
import Home from '../../assets/home.svg'
import About from '../../assets/help-circle.svg'
import Skills from '../../assets/tool.svg'
import Project from '../../assets/code.svg'
import Blog from '../../assets/edit.svg'
import Contact from '../../assets/mail.svg'


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
        <header className='py-4 flex items-center px-5 w-full mx-auto fixed z-10 bg-white dark:bg-purple-sec'>
            <Link href='/'>
                <a aria-current='page' className="flex items-center text-green-high  dark:text-purple-high font-bold text-lg mr-6 border:0">
                    <div className={`${styles.image} overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-green-high dark:border-purple-high`}>
                        <img src='arnold.jpeg' width='300px' alt="Profile picture of Amasoh Asama Arnold" className={`object-cover h-full ${styles.realImage}`}/>
                    </div>
                    <span>Amasoh Arnold</span>
                </a>
            </Link>
            <div className='flex-1'></div>
            <nav>
                {/*-------------------------------- top nav ---------------------------------------*/}

                    <div className='flex flex-col sm:flex-row items-center'>
                        <ul className="top-navigation items-center flex-wrap space-x-4 sm:space-x-6 sm:mt-0 w-full items-center justify-end">

                            
                            <li  className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a onMouseOver={()=>setHomeState(<Home/>)} onMouseOut={()=>setHomeState('Home')} href="" className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {homeState}
                                    </a>
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a href="" onMouseOver={()=>setAboutState(<About/>)} onMouseOut={()=>setAboutState('About')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {aboutState}
                                    </a>
                                </Link>
                            </li>
                            <li className="hidden sm:inline-block">
                                <Link href='/'>
                                    <a href="" onMouseOver={()=>setSkillsState(<Skills/>)} onMouseOut={()=>setSkillsState('Skills')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                       {skillsState}
                                    </a>
                                </Link>
                            </li>
                                
                                <li className="hidden sm:inline-block">
                                    <Link href='/'>
                                        <a href="" onMouseOver={()=>setProjectState(<Project/>)} onMouseOut={()=>setProjectState('Project')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                        {projectState}
                                        </a>
                                    </Link>
                                </li>
                                <li className="hidden sm:inline-block">
                                    <Link href='/'>
                                        <a href="" onMouseOver={()=>setBlogState(<Blog/>)} onMouseOut={()=>setBlogState('Blog')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                                        {blogState}
                                        </a>
                                    </Link>
                                </li>
                                <li className="hidden sm:inline-block">
                                    <Link href='/'>
                                        <a href="" onMouseOver={()=>setContactState(<Contact/>)} onMouseOut={()=>setContactState('Contact')} className="blog border-b-2 font-bold border-transparent border-b-transparent text-green hover:border-light-secondary dark:text-white dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
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

                    <ul className={`${styles.bottomNavigation} fixed bottom-0 left-0 z-20  bg-white dark:bg-purple-sec w-full flex items-center justify-evenly sm:hidden h-20`}>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Home stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
                                    <div>
                                        Home
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <About stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
                                    <div>
                                        About
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Skills stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
                                    <div>
                                        Skills
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Project stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
                                    <div>
                                        Projects
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Blog stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
                                    <div>
                                        Blog
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className='nav-bar-bottom-item text-green-high dark:text-purple-txt font-bold'>
                            <Link href=''>
                                <a className="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                                    <Contact stroke={(theme === 'dark') ? '#AF97BF' : '#0EB108'}/>
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

/*
<header class="py-6 flex items-center px-5 w-full mx-auto">
    <a href="/" aria-current="page" class="flex items-center text-light-accent dark:text-dark-accent font-bold text-lg mr-6 nuxt-link-exact-active nuxt-link-active" style="border:0">
        <div class="responsive-image-container overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-light-accent dark:border-dark-accent">
            <img src="https://res.cloudinary.com/marcba/image/upload/c_scale,e_blur:2000,w_200/v1/website/profile" alt="Profile picture of Marc Backes (very handsome)" class="object-cover h-full responsive-image-placeholder"> 
            <img alt="Profile picture of Marc Backes (very handsome)" class="object-cover h-full responsive-image-real" style="opacity: 1;" src=""> 
            <!----> <!---->
        </div> 
        <span>Marc Backes</span>
    </a> 
    <div class="flex-1"></div> 
    <nav>
        <div class="flex flex-col sm:flex-row items-center">
            <ul class="top-navigation items-center flex-wrap space-x-4 sm:space-x-6 sm:mt-0 w-full items-center justify-end">
                <li class="inline-block text-lg sm:text-base">
                    <button aria-label="Enable light mode" class="text-orange-400 transition-colors duration-300 ease-linear focus:outline-none">
                        <span class="hidden">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-moon fa-w-16">
                                <path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" class="">
                                    </path>
                            </svg>
                        </span> 
                        
                        <span class="block">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sun fa-w-16"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" class="">
                                </path>
                            </svg>
                        </span>
                    </button>
                    
                </li> 
                
                
               <li class="hidden sm:inline-block">
                   <a href="/blog" class="blog border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                    Blog
                    </a>
               </li>
               <li class="hidden sm:inline-block">
                   <a href="/about" class="border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                     About
                   </a>
               </li> 
               <li class="hidden sm:inline-block">
                   <a href="/uses" class="border-b-2 font-bold border-transparent border-b-transparent text-light-secondary hover:border-light-secondary dark:text-dark-primary dark-hover:border-dark-secondary text-base transition-all transition-duration-300 transition duration-500 ease-in-out">
                      Uses
                   </a>
               </li>
               <li class="hidden sm:inline-block">
                   <a href="/get-in-touch" class="bg-transparent text-light-accent dark:text-dark-accent font-semibold py-2 px-4 border-2 border-light-accent dark:border-dark-accent transition transition-all duration-300 rounded-lg hover:border-transparent hover:bg-light-accent dark-hover:bg-dark-accent hover:text-light-onAccent dark-hover:text-dark-onAccent get-in-touch text-base sm:text-base">
                       Get in touch
                    </a>
                </li>
            </ul>
        </div> 
              <ul class="bottom-navigation fixed bottom-0 left-0 z-20 bg-light-elevatedSurface dark:bg-dark-elevatedSurface w-full flex items-center justify-evenly sm:hidden h-20" style="box-shadow:0 -10px 10px rgba(0,0,0,.2)">
                  <li class="nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold">
                      <a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home fa-w-18">
                              <path fill="currentColor" d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z" class="">
                              </path>
                          </svg>
                        
                                    <div>
                                    Home
                                </div>
                      </a>
                  </li> 
                  <li class="nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold">
                      <a href="/blog" class="blog flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="feather" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-feather fa-w-16">
                              <path fill="currentColor" d="M467.1 44.9C438.24 16.04 401.59 0 361.59 0c-46.7 0-97.98 21.85-146.78 70.66l-85.75 85.76C54 231.47 56.69 352.92 72.69 405.37L7.03 471.03c-9.37 9.37-9.37 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0l65.6-65.6c17.44 5.3 42.43 9.15 70.88 9.15 57.19 0 128.04-15.48 178.13-65.57l85.76-85.75c90.61-90.62 88.32-189.75 25.76-252.3zM147.37 398.57L193.94 352h124.12c-44.62 41.83-106.87 48.46-140.61 48.46-11.41.01-21.29-.81-30.08-1.89zM350.58 320H225.94l64-64h123.81c-2.23 2.4-4.01 4.83-6.39 7.21L350.58 320zm88.31-96H321.94l22.51-22.51c9.37-9.37 9.37-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0l-197 197c-5.27-45.97-.29-124.34 49.52-174.15 0 0 18.71-18.71 85.75-85.76 37.02-37.02 76.03-56.58 112.8-56.58 26.63 0 51.37 10.66 71.53 30.82 39.17 39.16 40.02 92.25 5.78 145.12z" class="">
                                </path>
                         </svg> 
                            <div>
                                Blog
                            </div>
                      </a>
                  </li> 
                  <li class="nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold">
                      <a href="/about" class="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-info-circle fa-w-16">
                                <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class="">
                                </path>
                          </svg> 
                          <div>About</div>
                      </a>
                  </li> 
                  <li class="nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold">
                      <a href="/uses" class="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-laptop fa-w-20">
                              <path fill="currentColor" d="M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16z" class="">
                                  </path>
                          </svg> 
                          <div> Uses</div>
                      </a>
                  </li> 
                  <li class="nav-bar-bottom-item text-light-secondary dark:text-dark-secondary font-bold">
                      <a href="/get-in-touch" class="flex flex-col items-center justify-center flex-nowrap transition transition-all duration-500 ease-in-out">
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope-open-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope-open-text fa-w-16">
                              <path fill="currentColor" d="M494.59 164.52c-1.52-1.26-13.86-11.2-30.59-24.66V96c0-26.51-21.49-48-48-48h-66.13C327.24 28.85 293.77 0 256 0c-37.65 0-70.9 28.63-93.85 48H96c-26.51 0-48 21.49-48 48v43.85c-16.81 13.52-29.15 23.46-30.48 24.56A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM96 96h320v156.66c-36.26 29.32-78.69 63.67-86.59 69.95C311.25 337.12 279.6 368 256 368c-23.69 0-55.86-31.37-73.41-45.39-7.9-6.28-50.33-40.64-86.59-69.97V96zm368 362c0 3.31-2.69 6-6 6H54c-3.31 0-6-2.69-6-6V275.56c38.96 31.48 95.95 77.65 104.66 84.58C174.71 377.76 212.55 416 256 416c43.21 0 80.64-37.72 103.34-55.86 9-7.15 65.84-53.19 104.66-84.56V458zM176 192h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm176 64v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16z" class="">
                              </path>
                         </svg>
                          <div>Contact</div>
                      </a>
                  </li>
             </ul>
     </nav>
</header>

*/