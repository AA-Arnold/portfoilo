// import {projects} from '../Data/Data'

import Link from "next/link";



export default function Card({key,image,projectName,description,category,code,live,tags }){
    // console.log(key)
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-purple-sec dark:bg-white">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white dark:text-black flex justify-center">{projectName}</div>
                <div className="font-bold text-purple-txt dark:text-black text-xl mb-2 text-black flex justify-center">{category}</div>
                <p className="text-purple-txt dark:text-black ">
                    {description}
                </p>
            </div>
            <div className="px-6 py-1 ">
                {
                    tags.map(tag =><span key={key} className="inline-block bg-purple-pry rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-gray-100">{tag}</span> )
                }
                {/* <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#React</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Redux</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Numpy</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-purple-pry">#Context Api</span> */}
            </div>
            <div className=' mb-3 mt-2 flex justify-end'>
            <a target="_blank" href={code} rel="noopener noreferrer">
                <button className="bg-purple-high py-2 px-6 mr-2 rounded text-sm font-semibold hover:bg-opacity-75 dark:bg-green-high" >Code</button>
            </a>
            <a target="_blank" href={live} rel="noopener noreferrer">
                <button className="bg-purple-high py-2 px-7 mr-2 rounded text-sm font-semibold hover:bg-opacity-75 dark:bg-green-high">Live</button>
            </a>
            </div>
        </div>
    )
}