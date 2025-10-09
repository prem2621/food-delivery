import React from 'react'
import "./ExploreMoreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMoreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverce menu featuring a detactable a dishes. Our mission is to satisfy your cravings and elevate your dining experince</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>{setCategory(prev=>prev === item.menu_name?"All":item.menu_name)}} key={index} className="explore-menu-list-item">
                    <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default ExploreMoreMenu
