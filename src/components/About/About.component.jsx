import styles from './about.module.css'
import SimpleSlider from '../slider/slider'
 
export default function About(){
    return(
     <div className='bg-white dark:bg-purple-pry lg:p-16'>
         <div className='flex justify-center text-black dark:text-white text-3xl font-bold mb-8 rounded-lg'>About</div>
         <div className='flex '>

             {/*------------------------------------- Left ----------------------------------------- */}

             <div className={`w-2/4  shadow-lg p-5 rounded-lg bg-green-high dark:bg-purple-sec ml-5 h-2/4 ${styles.animate} lg:w-1/4`}>
                 <img src='pin.png' alt='pin' className={styles.pin} />
                 <div className='flex justify-center'>
                     <img src='arnold.jpeg' alt='image of Arnold Amasoh' className='rounded-lg' />
                 </div>
                 <div className='mt-4'>
                     <p className='text-black dark:text-purple-high text-center'>Let's connect</p>
                     <ul className='text-white dark:text-purple-txt text-center'>
                         <li>Gmail</li>
                         <li>LinkedIn</li>
                         <li>Github</li>
                         <li>Twitter</li>
                     </ul>
                 </div>
             </div>


             {/*------------------------------------------ Right ----------------------------------- */}


             <div className='text-black dark:text-purple-txt text-xl w-2/4 ml-5 md:hidden tracking-wider'>
                    <span className='block '>Hello I'm Arnold</span>
                    <span className='block  mt-3'>👈 That's me</span>  
                    <span className='block  mt-3 mb-3'>swinging around</span> 
                    <span className='leading-loose'>waiting for you to connect with me cheers</span>   
             </div>

             <div className=' hidden md:block tracking-wider leading-relaxed text-black dark:text-purple-txt w-2/4 ml-5 lg:w-4/6 lg:pl-14'>
                 Hi i'm Amasoh Arnold, a software developer 
                 with background in computer science with a focus 
                 on building fast, responsive, dynamic and intuitive 
                 user experience and interfaces for web or mobile
                 i'm based in Lagos, Nigeria. I'm also a certified
                web designer from 'HiiT' and I've taken numerous graphic
                design courses that has helped me so much in coming up 
                withgreat user interfaces I'm very curious about how 
                things work which pushes me to explore new technologies
                that i find intriuging that is taylored to my domain 
                helping me gain insights on merits and demerits of 
                using a particular tool 

                <SimpleSlider />
             </div>
         </div>
               <div className='text-black dark:text-purple-txt p-4 leading-relaxed  md:hidden'>
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