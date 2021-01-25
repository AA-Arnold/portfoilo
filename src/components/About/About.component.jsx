import styles from './about.module.css'

export default function About(){
    return(
     <div className='bg-white dark:bg-purple-pry'>
         <div className='flex justify-center text-black dark:text-white text-3xl font-bold mb-8 rounded-lg'>About</div>
         <div className='flex '>
             <div className={`w-52 h-52 shadow-lg p-8 rounded-lg bg-white ${styles.animate}`}>
                 <img src='pin.png' alt='pin' />
             </div>
             <div className='text-purple-txt w-52 ml-5'>
                 Hi i'm Amasoh Arnold, a software developer 
                 with background in computer science with a focus 
                 on building fast, responsive, dynamic and intuitive 
                 user experience and interfaces for web or mobile
             </div>
         </div>
     </div>
    )
}