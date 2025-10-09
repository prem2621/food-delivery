import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className="about" id="about">
      <img className='about-img' src={assets.about} alt="" />
      <div className="about-content">
      <h2>About Us</h2>
      <h4>Fueling your cravings on wheels!</h4>
      <p>
Welcome to <strong>Tasty Truck</strong> – your go-to mobile kitchen serving mouthwatering street-style delights! Born from the love of good food and travel, our food truck brings gourmet flavors to every corner of the city.
<br/><br/>
Whether you're a fan of juicy burgers, spicy wraps, or refreshing desserts, we’ve got something sizzling for everyone. We believe great food doesn't need a fancy place – just fresh ingredients, passionate chefs, and hungry foodies.
<br/><br/>
Catch us at festivals, parks, and street corners, spreading happiness one bite at a time!
</p>
<em>“Fast, fresh, and unforgettable – that’s the Tasty Truck promise.”</em>
  <img src={assets.signature} className='signature' alt="" />
      </div>
    </div>
  );
}

export default About
