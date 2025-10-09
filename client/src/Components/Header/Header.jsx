import React from 'react'
import { assets } from '../../assets/assets'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1>food truck</h1>
      <img src={assets.truck} className="mainImg" alt="" />
      <div className="text-content">
        <p className="welcome">Welcome</p>
        <p className="text">Order Your favourite food here</p>
      </div>
    </div>
  );
}

export default Header
