import React, { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../data/data";
import { reducer } from "./reducer";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const defaultState = { cartData: data, amount: 0, total: 0, loading: false };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartData]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
