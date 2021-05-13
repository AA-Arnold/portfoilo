

export default function Blog(){
    return(
        <div className=' dark:bg-white bg-purple-pry lg:p-16 '>
            <div className='flex justify-center text-white dark:text-black text-3xl font-bold rounded-lg'>
                Blog
            </div>

            <div className='text-purple-txt dark:text-black md:w-2/4 tracking-wider leading-loose p-4'>
                Once in a while, I write blog articles. Here are the most recent onces:
            </div>
            
            <div className='border-2 '>

                <div className='flex'>
                    <div className="border-2"> 
                        <img className="object-cover h-24 w-28" src='arnold.jpeg'/>
                    </div>
                    <div className='ml-6'>
                        <h2 className="text-white ">CSS FLEXBOX - A GENERAL USAGE GUIDE</h2>
                        <div className="text-purple-txt dark:text-black ">
                            There are hundreds of articles on how to use CSS3's FlexBox. 
                            But when can we use it? Let's explore.
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-row w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                    <div className="w-full"> 
                        <img className="object-cover h-full w-full" src='arnold.jpeg'/>
                    </div>
                    <div className="w-full p-5">
                    <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
                    <div className="flex flex-wrap justify-between items-center mt-6">

                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}