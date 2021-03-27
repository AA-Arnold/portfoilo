import styles from './Project.module.css'
 
export default function Project(){
    return(
     <div className='bg-white dark:bg-purple-pry lg:p-16  mb-24'>
         <div className='flex justify-center text-black dark:text-white text-3xl font-bold mb-8 rounded-lg'>My Projects</div>
        

                  <div className="flex justify-center text-white space-x-4 ">
                      <div className="inline-block w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                          <img src="arnold.jpeg" />
                      </div>
                      <div className="inline-block ...">web</div>
                      <div className="inline-block ...">mobile</div>
                  </div>
     </div>
    )
}


 {/* <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="arnold.jpeg" />
                  </div> */}