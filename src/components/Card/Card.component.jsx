

const projects = [
    {
        id : 1,
        image : 'smart-brains demo.png',
        projectName : 'Face Recongnision Web App',
        category : 'Web Application',
        description : "Built single page app(SPA) using React that allows you to detect faces in an image with the power of machine learning model Api the backend is  built with deno and oak framework that enables authentications which makes use of MongoDB",
        tags:''
    }
]


export default function Card(){
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 dark:bg-purple-sec ">
            <img class="w-full" src={projects[0].image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-black dark:text-white flex justify-center">{projects[0].projectName}</div>
                <div class="font-bold text-black dark:text-purple-txt text-xl mb-2 text-black flex justify-center">Web Application</div>
                <p class="text-black dark:text-purple-txt ">
                    {projects[0].description}
                </p>
            </div>
            <div class="px-6 py-1 ">
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#React</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Redux</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 dark:bg-purple-pry">#Numpy</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-purple-pry">#Context Api</span>
            </div>
            <div className=' mb-3 mt-2 flex justify-end'>
                <button class="dark:bg-purple-high py-2 px-6 mr-2 rounded text-sm font-semibold hover:bg-opacity-75">Source</button>
                <button class="dark:bg-purple-high py-2 px-7 mr-2 rounded text-sm font-semibold hover:bg-opacity-75">Live</button>
            </div>

        </div>
    )
}