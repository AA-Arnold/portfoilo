import Globe from '../../assets/globe.svg'
import CardList from '../CardList/CardList'
import { projects } from '../Data/Data'
// import {projects} from '../Data/Data'
import styles from './Project.module.css'




 
export default function Project(){


    const [project, setProject] = React.useState(projects)

    // console.log()

    const allClicked = () =>{
        setProject(projects)
    }
    const webClicked = () =>{
        const webFliter = projects
        setProject(webFliter.filter(project => project.category.includes('Web')))
    }
    const mobileClicked = () =>{
        const mobileFilter = projects
        setProject(mobileFilter.filter(project => project.category.includes('Mobile')))
    }

    return(
     <div id='Projects' className=' dark:bg-white bg-purple-pry lg:p-16 '>
         <h1 className='flex justify-center text-white dark:text-black text-3xl font-bold mb-8 rounded-lg'>My Projects</h1>
        

                  {/* <div className="flex justify-center text-white space-x-4 ">
                      
                      
                      <div className="inline-block ...">ALL</div>

                      <div className="inline-block ...">web/laptop 💻</div>
                      <div className="inline-block ...">mobile 📱</div>
                      <div className="inline-block ...">Data science / AI 🤖</div>
                      <div className="inline-block ...">Game 🎮</div>
                      <div className="inline-block ...">Miscellenous / graphics work 🎨</div>

                  </div> */}

                  <ul className="flex justify-center text-sm space-x-2 text-white dark:text-black md:space-x-4 md: ">
                      <li className='hover:underline cursor-pointer '  onClick={allClicked}>All</li>
                      <li className='hover:underline cursor-pointer' onClick={webClicked}>Web</li>
                      <li className='hover:underline cursor-pointer ' onClick={mobileClicked}>Mobile</li>
                      <li className='hover:underline cursor-pointer '>Machine Learning</li>
                      <li className='hover:underline cursor-pointer '>Game</li>
                      <li className='hover:underline cursor-pointer '>Concepts</li>
                  </ul>

                  <CardList project={project} /> 
                  
     </div>
    )
}


 {/* <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="arnold.jpeg" />
                  </div> */}