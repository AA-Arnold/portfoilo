export default function Contact(){
    return(
        <div className=' dark:bg-white bg-purple-pry lg:p-16 pb-24'>
            
            <h1 className='flex justify-center text-white dark:text-black text-3xl font-bold rounded-lg'>
                Contact
            </h1>

            <div className='text-purple-txt dark:text-black p-4 leading-loose'>
            Did you find my skills worthy? i take freelance opportunities however if you have other request, questions or just want to hang out don't hesitate to reach out
            </div>

            <div className="">
                <div className="p-4 rounded-lg shadow-lg md:w-3/4 lg:w-1/2 mx-auto">
                    <form action="#">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
                            <input type="text" id="name" placeholder="Eg. Jurgen Stephine" className="border border-gray-300 shadow p-3 w-full rounded"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Email</label>
                            <input type="text" id="Email" placeholder="" className="border border-red-300 shadow p-3 w-full rounded"/>
                            {/* <p className="text-sm text-red-400 mt-2">Twitter username is required.</p> */}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Subject</label>
                            <input type="text" id="Subject" placeholder="" className="border border-gray-300 shadow p-3 w-full rounded"/>
                        </div>
                        <div className="mb-10">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Message</label>
                            <input type="text" id="Message" placeholder="" className="border border-red-300 shadow p-9 w-full rounded"/>
                        </div>
                        <button className="block w-full bg-purple-high hover:bg-opacity-75 dark:bg-green-high text-white dark:text-black font-bold p-4 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}