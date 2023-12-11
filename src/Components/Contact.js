import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <NavBar />
      <form className='contactForm' action="https://formspree.io/f/mknazdly" method="post">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <h3>Get in touch</h3>
        <p>Let's work together!</p>
        <input type="text" placeholder='Full name' name='name' required/>
        <input type="text" placeholder='Surname' name='surname'required/>
        <input type="text" placeholder='Email adress' name='email' required/>
        <input type="text" placeholder='Phone number' name='contact' required/>
        <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact