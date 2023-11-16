import React from "react";
import { useGlobalContext } from "./contextApi";
import CartItem from "./CartItem";
const Cart = () => {
  const { cartData, clearCart, total } = useGlobalContext();
  return (
    <>
      <section className="cart-container">
        <div className="cart">
          <h2>My Cart</h2>
          {cartData.length === 0 ? (
            <h4 style={{ textAlign: "center" }}>My cart is empty</h4>
          ) : (
            <>
              <CartItem data={cartData} />
              <hr />
              <div className="total">
                <span className="text">Total</span>
                <span className="amount">${total}</span>
              </div>
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
