
const blogArticle = [
    {
        heading:'Understand Programming Language Like ABC',
        desc:"There are hundreds of articles on how to use CSS3's FlexBox. But when can we use it? Let's explore.",
        tag:[

        ]
    },
    {
        heading:"Lets Talk Blockchain",
        desc:"There are hundreds of articles on how to use CSS3's FlexBox. But when can we use it? Let's explore.",
        tag:[

        ]
    }
]

export default function Blog(){
    return(
        <div className=' dark:bg-white bg-purple-pry lg:p-16 pb-10'>
            <h1 className='flex justify-center text-white dark:text-black text-3xl font-bold rounded-lg'>
                Blog
            </h1>

            <div className='text-purple-txt dark:text-black md:w-2/4 tracking-wider leading-loose p-4'>
                Once in a while, I write blog articles. Here are the most recent onces:
            </div>
            
            <div className=''>

                <div className='flex flex-col space-y-8 p-2'>
                    <div className='flex'>
                        <img alt='blog image' className=" h-28 w-28 flex-shrink-0 mr-4" src='programs.jpg'/>
                        <div className='flex-grow flex flex-col max-h-28 '>
                        <a target="_blank" href="https://aaatechie.hashnode.dev/understand-programming-language-like-abc" rel="noopener noreferrer">

                                <h2 className="text-white dark:text-black font-semibold text-xs md:text-base">{blogArticle[0].heading}</h2>
                                <div className="text-purple-txt dark:text-black text-xs mt-2 md:text-base md:max-w-prose">
                                So a lot of us would probably have heard of a programming language one way or the other ...
                                </div>
                                <div className=" ">
                                    <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Javascript</span>
                                    <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Python</span>
                                    <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Java</span>
                                    <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#C++</span>
                                </div>
                            </a>
                        </div>                                            
                    </div>

                    <div className='flex'>
                        <img alt='blog image' className=" h-28 w-28 flex-shrink-0 mr-4" src='blockchain.jpg'/>
                        <div className='flex-grow flex flex-col max-h-28 '>
                            <h2 className="text-white dark:text-black font-semibold text-xs md:text-base">{blogArticle[1].heading}</h2>
                            <div className="text-purple-txt dark:text-black text-xs mt-2 md:text-base md:max-w-prose">
                                If you've not been living under the rock you would probably have heard about cryto currencies and bitcoin along the same lines but how ... 
                            </div>
                            <div className=" ">
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#web 3.0</span>
                                <span className="inline-block bg-purple-pry text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">#Blockchain</span>
                            </div>
                        </div>                                            
                    </div>


                </div>

                <div className='flex justify-end'>
                    <a target="_blank" href="https://aaatechie.hashnode.dev/" rel="noopener noreferrer">
                        <button className="bg-purple-high py-2 px-7 mr-2 rounded text-sm font-semibold hover:bg-opacity-75 dark:bg-green-high">More Articules</button>
                     </a>
                </div>

            </div>
        </div>
    )
}