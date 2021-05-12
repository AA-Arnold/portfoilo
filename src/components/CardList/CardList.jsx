import Card from '../Card/Card.component'
// import {projects} from '../Data/Data'


export default function CardList ({project}){

    const cardComponent = project.map((prj, i) => {
        return (
        <Card 
            key={project[i].id} 
            image={project[i].image} 
            projectName={project[i].projectName} 
            category={project[i].category}
            description={project[i].description} 
            tags={project[i].tags}
            code={project[i].code}
            live={project[i].live}
        />
        )
    })
    return(          
        <div className="container my-12 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {cardComponent}
            </div>
        </div>
    )
}