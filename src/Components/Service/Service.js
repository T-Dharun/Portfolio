import './Service.css'
import a from '../../Assets/student.png';
import engineer from '../../Assets/engineer.png';
import developer from '../../Assets/developer.png';
const Service=()=>{
    return(
        <>
            <section className='service' id='about'>
                <article className='service-head'>
                <h3>Responsiblities</h3>
                <h2>My Roles! Let's check it out</h2>
                </article>
                <section className='service-page'>
                    <article className='service-content'>
                    <img src={developer}/>
                        <h2>Developer</h2>
                        <p>
                        To design and develop innovative web products aimed at solving real-world problems.
                        </p>
                    </article>
                    <article className='service-content service-unique'>
                        <img src={a}/>
                        <h2>Student</h2>
                        <p>
                        To continually acquire knowledge and effectively apply it to solve diverse problems
                        </p>
                    </article>
                    <article className='service-content'>
                    <img src={engineer}/>
                        <h2>Hardware Engineer</h2>
                        <p>
                        To meticulously design and develop embedded circuitry aimed at efficiently implementing innovative solutions
                        </p>
                    </article>
                </section>
            </section>
        </>
    );
}
export default Service;