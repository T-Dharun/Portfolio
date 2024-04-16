import './Footer.css';
import fb from '../../Assets/fb.png';
import mail from '../../Assets/email.png';
import linkedin from '../../Assets/linkedin.png'
import github from '../../Assets/github.png';
const Footer = () => {
    const openGmail = () => {
        const userEmail = 'dharuneee007@gmail.com';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(userEmail)}`;
        window.open(gmailURL, '_blank');
      };
    return (
        <>
            <section className='footer'>
                <section className='footer-grid'>
                    <article className='footer-grid-name'>
                        <h1>T-DHARUN</h1>
                        <p>
                            Passionate about using software and hardware to create innovative and user-friendly products and solutions
                        </p>
                    </article>
                    <article className='footer-grid-social'>
                        <h1>Social Media</h1>
                        <div className='footer-social'>
                            <a href='https://www.linkedin.com/in/dharun-t' target='_blank'><img src={linkedin}/></a>
                            <a href='https://www.facebook.com/profile.php?id=100093515825766' target='_blank'><img src={fb}/></a>
                            <a href='https://github.com/T-Dharun' target='_blank'><img src={github}/></a>
                            <a onClick={openGmail}><img src={mail}/></a>
                        </div>
                    </article>
                </section>
                <div className='footer-copy'>Design and Developed by <span style={{ fontWeight: "bold" }}>T-Dharun</span></div>
            </section>
        </>
    )
}
export default Footer;
