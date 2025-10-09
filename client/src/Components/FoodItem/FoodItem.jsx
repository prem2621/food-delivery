import React, { useContext} from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

   const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
 
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
           <img src={image} className='food-item-image' alt="" />
 
           {!cartItems[id]
           ? <img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="" />
           : <div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
           </div> 
          }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
           <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
           </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
