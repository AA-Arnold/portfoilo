import Card from '../Card/Card.component'
import {projects} from '../Data/Data'


export default function CardList (){

    const cardArray = projects.map((project, i) => {
        return (
        <Card 
            key={projects[i].id} 
            image={projects[i].image} 
            projectName={projects[i].projectName} 
            description={projects[i].description}
        />
        )
    })

    // console.log(projects[0].image)
    return(
            
        <div className="container my-12 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {cardArray}
            </div>
        </div>
    )
}