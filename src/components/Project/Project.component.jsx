import Globe from '../../assets/globe.svg'
import Card from '../Card/Card.component'
import {projects} from '../Data/Data'
import styles from './Project.module.css'
 
export default function Project(){
    return(
     <div className='bg-white dark:bg-purple-pry lg:p-16  mb-24'>
         <div className='flex justify-center text-black dark:text-white text-3xl font-bold mb-8 rounded-lg'>My Projects</div>
        

                  {/* <div className="flex justify-center text-white space-x-4 ">
                      
                      
                      <div className="inline-block ...">ALL</div>

                      <div className="inline-block ...">web/laptop 💻</div>
                      <div className="inline-block ...">mobile 📱</div>
                      <div className="inline-block ...">Data science / AI 🤖</div>
                      <div className="inline-block ...">Game 🎮</div>
                      <div className="inline-block ...">Miscellenous / graphics work 🎨</div>

                  </div> */}

                  <ul className="flex justify-center text-white text-sm space-x-2 md:space-x-4 md: ">
                      <li className='hover:underline cursor-pointer '>All</li>
                      <li className='hover:underline cursor-pointer '>Web</li>
                      <li className='hover:underline cursor-pointer '>Mobile</li>
                      <li className='hover:underline cursor-pointer '>Machine Learning</li>
                      <li className='hover:underline cursor-pointer '>Game</li>
                      <li className='hover:underline cursor-pointer '>Concepts</li>
                  </ul>

                  <Card image={projects[0].image} projectName={projects[0].projectName} description={projects[0].description}/>
                  
     </div>
    )
}


 {/* <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="arnold.jpeg" />
                  </div> */}