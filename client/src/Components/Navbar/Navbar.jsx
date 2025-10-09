import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from '../../Context/StoreContext'
import { toast } from "react-toastify";


const Navbar = ({setShowLogin}) => {

   const [menu, setMenu] = useState("home")
   const { getTotalAmount, token, setToken } = useContext(StoreContext);
 
   const navigate = useNavigate();

   const logout = () => {
     localStorage.removeItem("token");
     setToken("");
     toast.success("Logout Successfully");
     navigate("/");
   };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} className="logo" alt="" /></Link>
      <div className="nav-row">
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>{setMenu("home")}} className={menu === "home"?"active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu === "menu"?"active" : ""}>Menu</a>
          <a href='#location' onClick={()=>{setMenu("location")}} className={menu === "location"?"active" : ""}>Location</a>
          <a href='#about' onClick={()=>{setMenu("about")}} className={menu === "about"?"active" : ""}>About</a>
          <a href='#contact' onClick={()=>{setMenu("contact")}} className={menu === "contact"?"active" : ""}>Contact</a>
        </ul>
        <div className="navbar-right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link to='/cart'><div className="navbar-search-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className={getTotalAmount()===0?"":"dot"}></div>
          </div></Link>
           {!token ? <button onClick={()=>setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
            <i class="fa-solid fa-user"></i>
            <ul className='nav-profile-dropdown'>
              <li onClick={()=> navigate('/myorders')}><img src= {assets.bag_icon} alt="" />Orders</li>
              <hr />
              <li  onClick={logout}><img src= {assets.logout_icon} alt="" />Logout</li>
            </ul>
          </div> }
           
        </div>
      </div>
    </div>
  );
}

export default Navbar

