import React from "react";
import "../styles/Cart.scss";

const Cart = ({ count }) => {
  const total = 125 * count;

  return (
    <div className="cart-container">
      {count > 0 && (
        <div className="cart">
          <div className="cart-title">
            <p>Cart</p>
          </div>

          <div className="cart-result">
            <div className="thumbnail">
              <img src="../images/image-product-1-thumbnail.jpg" alt="" />
            </div>
            <div className="cart-description">
              <div className="name">
                <p>Fall limited Edition Sneakers</p>
              </div>
              <div className="price">
                <p>
                  $125.00 x {count} <span className="space"> ${total}.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="button">
            <button>Checkout</button>
          </div>
        </div>
      )}
      {count === 0 && (
        <div className="empty-cart">
          <div className="cart-title">
            <p>Cart</p>
          </div>

          <div className="cart-result">
            {" "}
            <p>Your cart is empty</p>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
