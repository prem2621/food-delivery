import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className="location" id="location">
      <h2>Find Us</h2>
      <h3>"We’re Closer Than You Think"</h3>
      <p>
        We’re rolling through the streets to serve you hot, fresh, and delicious
        meals! Catch our food truck near you, or visit us at our base spot
        below.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26169.81406308058!2d78.75802019788979!3d10.78462642735976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf33a01787211%3A0xc8d02fbe926010!2sThiruverumbur%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1754305151708!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "5px", marginTop: "20px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href="https://www.google.com/maps?q=Thiruverumbur" target="_blank" rel="noopener noreferrer">
        <button className="map-button">Get Directions</button>
      </a>
    </div>
  );
}

export default Location
