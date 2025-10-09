import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

     const { food_list, cartItems, removeFromCart, getTotalAmount,url } = useContext(StoreContext);

     const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
                <div key={index} className="cart-item-title cart-item-list">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='remove'>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalAmount()===0?0:3}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()===0?0:getTotalAmount()+3}</b>
              </div>
            </div>
            <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have promo code, Enter it here </p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code'/>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
