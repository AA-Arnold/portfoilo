export default function Hero(){
    return(
     <main className='bg-purple-pry flex justify-between h-screen'>
         <div className='text-white text-4xl font-bold p-6 h-1/3 ml-16 mt-24 w-1/3 '>
            <span className='block mb-4'>Hi ! 👋,</span>
            <span className='block mb-4'>I'm Amasoh.A.Arnold,</span>
            <span className='block mb-4'>Software Developer</span>
            <span className='text-purple-high'>[</span><span className='font-light text-2xl'>I like Frontend & Ui/UX</span><span className='text-purple-high'>]</span>
         </div>
         <div className='p-6 mr-32 mt-24 '>
         <img src='hero.svg' width='700px' alt="An SVG of a male using a laptop" />
         </div>
     </main>
    )
}

