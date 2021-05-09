import styles from './skills.module.css'

export default function Skills(){
    return(
     <div className='bg-purple-pry dark:bg-white lg:p-16 '>
         <div className='flex justify-center text-white dark:text-black text-3xl font-bold md:mb-8 rounded-lg md:mt-0'>Skills</div>
         <div className='md:flex '>

             {/*------------------------------------- Left ----------------------------------------- */}


             <div className='text-purple-txt dark:text-black md:w-2/4 tracking-wider leading-loose p-4 md:mt-14'>
                This are some of the languages i've worked with i've needed to learn a couple of 
                them together since no one language is a magic wand(javascript comes close duo)
                i've been doing full stack javascript development the longest building small and 
                medium web apps in react I also have knowledge building cross-platform native mobile application 
                for ios and android using google's flutter & Dart I've done a couple of datascience and ml 
                which has lead me to making a couple of prediction models 
             </div>
          

             {/*------------------------------------------ Right ----------------------------------- */}

             <div className='md:w-2/4'>
                <div className={styles.skillsCircleWrap}>
                        <div className={styles.skillsCircle}>
                            <div className={styles.skillOrbit}>
                                <div className={styles.skillPlanet}><span>JS</span></div>
                            </div>
                            <div className={styles.skillOrbit}>
                                <div className={styles.skillPlanet}><span>CSS</span></div>
                            </div>
                            <div className={styles.skillOrbit}>
                                <div className={styles.skillPlanet}><span>HTML</span></div>
                            </div>
                            <div className={styles.skillOrbit}> 
                                <div className={styles.skillPlanet}><span>Ai</span></div>
                            </div>
                            <div className={styles.skillOrbit}>
                                <div className={styles.skillPlanet}><span>Ps</span></div>
                            </div>
                        </div>
                        <div className={styles.skillsTopCircle }></div>
                </div>
            </div>
   
             

             
         </div>
               
                
     </div>
    )
}