import './Home.css'
import message from '../../Assets/telegram.png'
const Home=()=>{
    return(
        <>
            <section className="home">
                <div className="home-image">
                    <div className='home-image-inner'></div>
                </div>
                <h1 className="home-head">Hello, This is Dharun Tamilarasan</h1>
                <article className='home-content'>
                Aspiring software engineer dedicated to impactful innovation and inspiring positive change within tech
                </article>
                <div className='home-button'>
                    <a href="#project" className='home-button-1'>My work</a>
                    <a href='#contact' className='home-button-2'>
                        <img src={message}/>
                        Say Hello</a>
                </div>
            </section>
        </>
    );
}
export default Home;