import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.warn("productList action called");
  return {
    type: PRODUCT_LIST,
  };
};

export const setProductList = (data) => {
  console.warn("Got data from saga to setProductList", data);
  return {
    type: SET_PRODUCT_LIST,
    data: data,
  };
};
