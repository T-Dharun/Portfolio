import './Navbar.css';
import { useState } from 'react'
import navIcon from '../../Assets/hamburger.png'
import navClose from '../../Assets/close.png'
const Navbar = () => {
    const [nav, setNav] = useState(true);
    return (
        <>
            <section className='nav'>
                <section className="navbar">
                    <h3>DHARUN</h3>
                    <div onClick={() => { setNav(!nav) }}>
                        {nav ? <img src={navIcon} className="navbar-button" alt='button-open' /> : <img src={navClose} className="navbar-button navbar-button-close" alt='button-close' />}
                    </div>
                    <ul className={nav ? "navbar-content navbar-open" : "navbar-close navbar-content"} onClick={() => setNav(!nav)}>
                        <a href='#'><li>Home</li></a>
                        <a href='#about'><li>About</li></a>
                        <a href='#project'><li>Project</li></a>
                        <a href='#skill' id='nav-skill'><li>Skills</li></a>
                        <a href='#contact' ><li id='nav-contact'>Contact me</li></a>
                    </ul>
                </section>
            </section>
        </>
    );
}
export default Navbar;