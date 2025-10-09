import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopUp = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("signup")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successfully");
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };
 
 
 
  
  return (
    <div className='login-popup'>
      <form  onSubmit = { onLogin }  className="login-container">
        <div className="login-title">
            <h4>{currentState}</h4>
            <img src={assets.cross_icon} className='cross' onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="input-content">
            {currentState === "login"?<></> : <input name="name" onChange={onChangeHandler}   value={data.name}  type="text" placeholder="Your Name" required/>}
            <input  type="email" name="email" onChange={onChangeHandler}   value={data.email}  placeholder='Your Email' required/>
            <input   type="password" name="password" onChange={onChangeHandler}   value={data.password}  placeholder='Your Password' required/>
        </div>
        <button type='submit' className='signup'>{currentState}</button>
        <div className="condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "login"
        ? <p>Create a new account? <span onClick={()=>setCurrentState("signup")}>Click here</span> </p>
        : <p>Aldready have an account? <span onClick={()=>setCurrentState("login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp