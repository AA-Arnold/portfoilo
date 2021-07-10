import styles from './Hero.module.css'
// import Heroo from '../../../assets/hero.svg'

export default function Hero(){
    return(
     <div className='bg-purple-pry dark:bg-white  h-screen  '>

         <div className=' lg:flex justify-center pt-28'>
            <div className='text-white dark:text-black text-2xl lg:text-4xl font-bold ml-8 '>
                <span className='block mb-4'>Hi !<span className={styles.wave}>👋</span> ,</span>
                <span className='block mb-4'>I'm Amasoh.A.Arnold,</span>
                <span className='block mb-4'>Software Developer</span>
                <div className={styles.content}>
                    <div className={styles.content__container}>
                        <p className={styles.content__container__text}>
                        I like
                        </p>

                        <ul className={styles.content__container__list}>
                        <li className={styles.content__container__list__item}>
                            front-end &amp; UI/UX ✒
                        </li>
                        <li className={styles.content__container__list__item}>
                            self-development 🤸‍♂️
                        </li>
                        <li className={styles.content__container__list__item}>
                            data science &amp; AI 🤖
                        </li>
                        <li className={styles.content__container__list__item}>
                            learning new things 🧾
                        </li>
                        <li className={styles.content__container__list__item}>
                             tech generally 🌐
                        </li>
                        <li className={styles.content__container__list__item}>
                             Art 🎨
                        </li>
                        <li className={styles.content__container__list__item}>
                            networking 🤝
                        </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='p-6 mt-20'>
                <img src='hero.svg' width='700px' alt="An SVG of a male using a laptop" />
            </div>
         </div>


         {/* example of adding svg  */}
         {/* <Heroo width={800} height={800} stroke={'green'} /> */}

     </div>
    )
}

{/* <div className='text-white text-4xl font-bold p-6 h-1/3 ml-16 mt-24 lg:w-1/3 '></div> */}
{/* <div className='p-6 mr-32 mt-24 '></div> */}