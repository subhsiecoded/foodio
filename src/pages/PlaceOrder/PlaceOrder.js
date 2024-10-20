import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const totalCartAmount = getTotalCartAmount();
  const deliveryFee = totalCartAmount > 499 || totalCartAmount === 0 ? 0 : 90;


  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Landmark' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
            <h2> Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>₹ {totalCartAmount}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee <br/> (Free delivery on orders above ₹ 499)</p>
                <p>₹ {deliveryFee}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹ {totalCartAmount + deliveryFee}</p>
              </div>
            </div>
            <button>Proceed To Payment</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder