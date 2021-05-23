import styles from './about.module.css'
import SimpleSlider from '../slider/slider'
 
export default function About(){
    return(
     <div className='bg-purple-pry dark:bg-white pb-14 md:pb-0 lg:p-16'>
         <div className='flex justify-center text-white dark:text-black text-3xl font-bold mb-8 rounded-lg'>About</div>
         <div className='flex '>

             {/*------------------------------------- Left ----------------------------------------- */}

             <div className={`w-2/4  shadow-lg p-5 rounded-lg bg-purple-sec dark:bg-green-high ml-5 h-2/4 ${styles.animate} lg:w-1/4`}>
                 <img src='pin.png' alt='pin' className={styles.pin} />
                 <div className='flex justify-center'>
                     <img src='arnold.jpeg' alt='image of Arnold Amasoh' className='rounded-lg max-h-36' />
                 </div>
                 <div className='mt-4'>
                     <p className='text-purple-high dark:text-black text-center'>Let's connect</p>
                     <ul className='text-purple-txt dark:text-white text-center'>

                        <a target="_blank" href='https://wa.link/uyswyl' rel="noopener noreferrer">
                            <li>WhatsApp</li>
                        </a>
                        <a target="_blank" href='https://www.linkedin.com/in/amasoh-arnold/' rel="noopener noreferrer">
                            <li>LinkedIn</li>
                        </a>
                        <a target="_blank" href='https://github.com/AA-Arnold' rel="noopener noreferrer">
                            <li>Github</li>
                        </a>
                        <a target="_blank" href='https://twitter.com/AAATechie' rel="noopener noreferrer">
                            <li>Twitter</li>
                        </a>

                     </ul>
                 </div>
             </div>


             {/*------------------------------------------ Right ----------------------------------- */}


             <div className='text-purple-txt dark:text-black text-xl w-2/4 ml-5 md:hidden tracking-wider'>
                    <span className='block '>Hello I'm Arnold</span>
                    <span className='block  mt-3'>👈 That's me</span>  
                    <span className='block  mt-3 mb-3'>swinging around</span> 
                    <span className='leading-loose'>waiting for you to connect with me cheers</span>   
             </div>

             <div className=' hidden md:block tracking-wider leading-relaxed text-purple-txt dark:text-black w-2/4 ml-5 lg:w-4/6 lg:pl-14'>
                 Hi i'm Amasoh Arnold, a software developer 
                 with background in computer science with a focus 
                 on building fast, responsive, dynamic and intuitive 
                 user experience and interfaces for web or mobile
                 i'm based in Lagos, Nigeria. I'm also a certified
                web designer from 'HiiT' and I've taken numerous graphic
                design courses that has helped me so much in coming up 
                with great user interfaces I'm very curious about how 
                things work which pushes me to explore new technologies
                that i find intriuging that is taylored to my domain 
                helping me gain insights on merits and demerits of 
                using a particular tool 

                <SimpleSlider />
             </div>
         </div>
               <div className='text-purple-txt dark:text-black p-4 leading-loose  md:hidden'>
                    Alright adding in a little info. I'm a software developer 👨‍💻
                    with background in computer science 🤖 with a focus 
                    on building fast 🚀, responsive 🖇, dynamic and intuitive 
                    user experience 🎢 and interfaces for web or mobile
                    i'm based in Lagos, Nigeria. I'm also a certified
                    web designer 🧾 and I've taken numerous graphic
                    design 👨‍🎨 courses that has helped me so much in coming up 
                    withgreat user interfaces I'm very curious 🧐 about how 
                    things work which pushes me to explore new technologies ⚗
                    that i find intriuging that is taylored to my domain 
                    helping me gain insights on merits and demerits of 
                    using a particular tool 
                </div>
                <div className='ml-8 w-4/5 md:hidden '>
                <SimpleSlider />
                </div>
     </div>
    )
}
