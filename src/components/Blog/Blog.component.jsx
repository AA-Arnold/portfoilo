
const blogArticle = [
    {
        heading:'CSS FLEXBOX -A GENERAL USAGE GUIDE',
        desc:"There are hundreds of articles on how to use CSS3's FlexBox. But when can we use it? Let's explore.",
        tag:[

        ]
    }
]

export default function Blog(){
    return(
        <div className=' dark:bg-white bg-purple-pry lg:p-16 pb-10'>
            <div className='flex justify-center text-white dark:text-black text-3xl font-bold rounded-lg'>
                Blog
            </div>

            <div className='text-purple-txt dark:text-black md:w-2/4 tracking-wider leading-loose p-4'>
                Once in a while, I write blog articles. Here are the most recent onces:
            </div>
            
            <div className=''>

                <div className='flex flex-col space-y-8 p-2'>
                    <div className='flex'>
                        <img alt='blog image' className=" h-28 w-28 flex-shrink-0 mr-4" src='arnold.jpeg'/>
                        <div className='flex-grow flex flex-col max-h-28 '>
                            <h2 className="text-white dark:text-black font-semibold text-xs md:text-base">{blogArticle[0].heading}</h2>
                            <div className="text-purple-txt dark:text-black text-xs mt-2 md:text-base md:max-w-prose">
                                There are hundreds of articles on how to use CSS3's FlexBox. 
                                But when can we use it? Let's explore.
                            </div>
                            <div className=" ">
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Redux</span>
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Numpy</span>
                            </div>
                        </div>                                            
                    </div>

                    <div className='flex'>
                        <img alt='blog image' className=" h-28 w-28 flex-shrink-0 mr-4" src='arnold.jpeg'/>
                        <div className='flex-grow flex flex-col max-h-28 '>
                            <h2 className="text-white dark:text-black font-semibold text-xs md:text-base">{blogArticle[0].heading}</h2>
                            <div className="text-purple-txt dark:text-black text-xs mt-2 md:text-base md:max-w-prose">
                                There are hundreds of articles on how to use CSS3's FlexBox. 
                                But when can we use it? Let's explore.
                            </div>
                            <div className=" ">
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Redux</span>
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Numpy</span>
                            </div>
                        </div>                                            
                    </div>


                </div>

                <div className='flex justify-end'>
                    <button className="bg-purple-high py-2 px-7 mr-2 rounded text-sm font-semibold hover:bg-opacity-75 dark:bg-green-high">More Articules</button>
                </div>

            </div>
        </div>
    )
}