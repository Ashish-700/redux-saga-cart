import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("ADD action called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  console.warn("Remove action called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
