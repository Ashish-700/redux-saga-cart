import { combineReducers } from "redux";

//reducers
import { cartData } from "./reducer";
import { productData } from "./peoductReducer";

export default combineReducers({
  cartData,
  productData,
});
