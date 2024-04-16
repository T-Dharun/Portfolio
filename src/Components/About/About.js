import './About.css'
import resume from '../../Assets/Resume.pdf'
import vector from '../../Assets/vector.png'

const About=()=>{
    const openPdfInNewTab = () => {
        const pdfUrl = resume;
        window.open(pdfUrl, '_blank');
    }
    return(
        <>
            <section className="about">
                <div className="about-image">
                    <img src={vector}/>
                </div>
                <section className="about-content">
                    <p className='about-or'>About me</p>
                    <h1>Hello I'm Dharun</h1>
                    <p className='about-text-content'>
                    I'm  Currectly pursuing a Bachelor's in  Electrical and Electronics Engineering. I'm passionate about using technology to solve real-world problems, always eager to learn and keep up with new developments. I love challenges and innovation, and I'm skilled in both software and hardware. Check out my GitHub and LinkedIn profiles for my coding projects and achievements.
                    </p>
                    <a onClick={openPdfInNewTab}>Resume</a>
                </section>
            </section>
        </>
    )
}
export default About;