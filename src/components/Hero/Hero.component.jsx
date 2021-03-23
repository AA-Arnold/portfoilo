import styles from './Hero.module.css'
// import Heroo from '../../../assets/hero.svg'

export default function Hero(){
    return(
     <main className='bg-white dark:bg-purple-pry  h-screen  '>

         <div className=' lg:flex justify-center pt-28'>
            <div className='text-black dark:text-white text-2xl lg:text-4xl font-bold ml-8 '>
                <span className='block mb-4'>Hi !<span className={styles.wave}>👋</span> ,</span>
                <span className='block mb-4'>I'm Amasoh.A.Arnold,</span>
                <span className='block mb-4'>Software Developer</span>
                <span className='text-green-high dark:text-purple-high'>[</span><span className='font-light text-xl lg:text-2xl'>I like Frontend & Ui/UX</span><span className='text-green-high dark:text-purple-high'>]</span>
            </div>
            <div className='p-6 mt-20'>
                <img src='hero.svg' width='700px' alt="An SVG of a male using a laptop" />
            </div>
         </div>


         {/* example of adding svg  */}
         {/* <Heroo width={800} height={800} stroke={'green'} /> */}

     </main>
    )
}

{/* <div className='text-white text-4xl font-bold p-6 h-1/3 ml-16 mt-24 lg:w-1/3 '></div> */}
{/* <div className='p-6 mr-32 mt-24 '></div> */}