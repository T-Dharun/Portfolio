import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
export default  function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sy1yufd', 'template_bxeuq1b', form.current, {
        publicKey: 'FpzAqUmpxmnQ5WZ_6',
      })
      .then(
        () => {
            alert('Your message  was sended succesfully : )');
            document.querySelector('form').reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          document.querySelector('form').reset();
        },
      );
  };

  return (
    <>
   <section className='cont' id='contact'>
   <section className='contact'>
        <h3>CONTACT</h3>
        <h1>Get in touch with me</h1>
    </section>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <input type="text" name="user_name" placeholder='Full Name' required/>
      <input type="email" name="user_email" placeholder='Email Id' required/>
      <textarea name="message" placeholder='Message here' required/>
      <input type="submit" value="Send" className='button'/>
    </form>
   </section>
    </>
    
  );
};