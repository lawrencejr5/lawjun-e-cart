export const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cartData: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    let filteredCartData = state.cartData.filter((cartDatum) => {
      if (cartDatum.id !== action.payload) {
        return cartDatum;
      }
    });
    return { ...state, cartData: filteredCartData };
  }

  if (action.type === "INCREASE") {
    const tempData = state.cartData.map((datum) => {
      if (datum.id === action.payload) {
        return { ...datum, amount: datum.amount + 1 };
      }
      return datum;
    });
    return { ...state, cartData: tempData };
  }

  if (action.type === "DECREASE") {
    let tempData = state.cartData
      .map((datum) => {
        if (datum.id === action.payload) {
          return { ...datum, amount: datum.amount - 1 };
        }
        return datum;
      })
      .filter((datum) => {
        if (datum.amount !== 0) {
          return datum;
        }
      });

    return { ...state, cartData: tempData };
  }

  if (action.type === "GET_TOTAL") {
    let cartRoundup = state.cartData.reduce(
      (cartTotal, cartItem) => {
        let { price, amount } = cartItem;
        cartTotal.total += price * amount;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    const { total, amount } = cartRoundup;
    return { ...state, total, amount };
  }

  return state;
};
