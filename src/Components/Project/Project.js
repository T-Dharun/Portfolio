import './Project.css'
import course from '../../Assets/course.png';
import ebill from '../../Assets/e-bill.png'
const project = [
    {
        name: "Course-Quest ",
        description: "A web-based solution designed for students to discover their ideal courses through personalized assessments, ensuring alignment with their genuine academic interests and career aspirations",
        image: course,
        source:"https://github.com/T-Dharun/Course_AI",
        live:"",
        state:false,
        tech:["HTML","CSS","JS","API","REACT"]
    },
    {
        name: "E-Bill Generator",
        description: "A Standalone application designed to calculate monthly electricity bills for users. By inputting relevant data, such as usage, rates, and additional charges, it generates accurate billing statements efficiently.",
        image: ebill,
        live:"",
        state:false,
        tech:["Java","AWT"],
        source:"https://github.com/T-Dharun/Java_Projectz/tree/main/Electricity_Bill"
    }
]


const Project = () => {
    return (
        <>
            <section className="project-x" id='project'>
                <article className='project'>
                    
                <h3>Projects</h3>
                <h1>My Works</h1>
                <p></p>
                </article>
                {
                    project.map(items => {
                        return (
                            <article className="project-home">
                                <img src={items.image}/>
                                <div className='project-content'>
                                    <section>
                                        <h1>{items.name}</h1>
                                        <p>{items.description}</p>
                                        <h5>Tech stack : <i>
                                            {
                                                items.tech.map(event=><span className='techstack'>{event}</span>)
                                            }
                                            </i> </h5>
                                    </section>
                                    <section className='project-button'>
                                        <a href={items.source} target='_blank'><button className='but-source'>Source code</button></a>
                                        {
                                            items.state&&<a href={items.live}><button className='but-live'>Live link</button></a>
                                        }
                                    </section>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}
export default Project;