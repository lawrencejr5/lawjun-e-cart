import React from "react";
import { useGlobalContext } from "./contextApi";
const Nav = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="logo">Lawjun-e</div>
      <div className="no-cart-items">Cart({amount})</div>
    </nav>
  );
};

export default Nav;
