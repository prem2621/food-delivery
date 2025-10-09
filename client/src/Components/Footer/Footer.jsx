import React from 'react'
import './Footer.css'
import {assets} from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <img src={assets.truck} className="footer-img" alt="" />
      <p className="slogan">“Mobile Food, Immovable Taste!”</p>
      <p className="text">
        Food is one of the basic necessities of life. Food contains
        nutrients—substances essential for the growth, repair, and maintenance
        of body tissues and for the regulation of vital processes. Nutrients
        provide the energy our bodies need to function.
      </p>
      <div className="social-icon">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="copy-right">
        CopyRight © 2025 Food Truck | Powered by Food Truck
      </div>
    </div>
  );
}

export default Footer
