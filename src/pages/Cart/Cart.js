import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const totalCartAmount = getTotalCartAmount();
  const deliveryFee = totalCartAmount > 499 || totalCartAmount === 0 ? 0 : 90;
  const navigate = useNavigate();
  
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹ {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹ {item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="crossicon"
                    >
                      <CloseIcon />
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have any promo code, use it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
