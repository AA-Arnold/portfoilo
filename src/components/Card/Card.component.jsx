// import {projects} from '../Data/Data'



export default function Card({image,projectName,description }){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 dark:bg-purple-sec ">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black dark:text-white flex justify-center">{projectName}</div>
                <div className="font-bold text-black dark:text-purple-txt text-xl mb-2 text-black flex justify-center">Web Application</div>
                <p className="text-black dark:text-purple-txt ">
                    {description}
                </p>
            </div>
            <div className="px-6 py-1 ">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#React</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Redux</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Numpy</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-purple-pry">#Context Api</span>
            </div>
            <div className=' mb-3 mt-2 flex justify-end'>
                <button className="dark:bg-purple-high py-2 px-6 mr-2 rounded text-sm font-semibold hover:bg-opacity-75">Source</button>
                <button className="dark:bg-purple-high py-2 px-7 mr-2 rounded text-sm font-semibold hover:bg-opacity-75">Live</button>
            </div>

        </div>
    )
}