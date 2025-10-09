import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
     <div className="content">
     <img src={assets.delivery} className='delivery' alt="" />
     <p>30 MINUTES FAST <span>DELIVERY</span> CHALLANGE</p>
     </div>
      <form className="contact-form">
  <h2>Contact Us</h2>
  <p>Book our truck, give feedback, or just say hi 👋</p>

  <div className="form-row">
    <input type="text" placeholder="First Name" required />
    <input type="text" placeholder="Last Name" />
  </div>
  <div className="form-row">
    <input type="email" placeholder="Email Address" required />
    <input type="tel" placeholder="Phone Number (optional)" />
  </div>
  <textarea placeholder="Your Message" rows="5" required></textarea>

  <button type="submit">Send Message</button>
</form>

    </div>
  )
}

export default Contact
