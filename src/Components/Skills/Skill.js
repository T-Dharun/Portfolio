import html from '../../Assets/html-5.png';
import java from '../../Assets/java.png';
import python from '../../Assets/python.png';
import c from '../../Assets/c.png';
import node from '../../Assets/node-js.png';
import js from '../../Assets/js.png';
import git from '../../Assets/social.png';
import react from '../../Assets/science.png';
import './Skill.css'
let mySkill=[c,java,python,html,git,react,node,js];
const Skill=()=>{
    return(
        <>
        <section className='skills' id='skill'>
            <section className='skill'>
                <h3>Skills</h3>
                <h1>My Expert Areas</h1>
            </section>
            <section className='skill-items'>
                {
                    mySkill.map(items=><img src={items}/>)
                }
            </section>
            
        </section>
        </>
    )
}
export default Skill;