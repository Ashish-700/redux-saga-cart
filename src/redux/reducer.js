import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...initialState, action.data];

    case REMOVE_FROM_CART:
      console.log("remove from cart data", action.data);
      const remains = initialState.filter((item) => item.id !== action.data);
      return [...remains];

    default:
      return initialState;
  }
};
