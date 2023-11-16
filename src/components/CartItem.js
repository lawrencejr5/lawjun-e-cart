import React from "react";
import { useGlobalContext } from "./contextApi";
const CartItem = ({ data }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <div className="cart-item-container">
      {data.map((datum) => {
        const { id, name, amount, price, img } = datum;
        return (
          <div className="cart-item" key={id}>
            <img src={`imgs/${img}`} alt="" />
            <div className="info">
              <p>{name}</p>
              <span>${price}</span>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="btn-container">
              <button className="inc" onClick={() => increase(id)}>
                +
              </button>
              <span>{amount}</span>
              <button className="dec" onClick={() => decrease(id)}>
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
