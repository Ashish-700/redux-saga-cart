import React from "react";
import { useSelector, useDispatch } from "react-redux";

//styles
import "./Cart.css";

//redux
import { removeFromCart } from "../redux/action";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  return (
    <div className="cart-page-container">
      <h1>This is Cart</h1>
      <table className="cart-table">
        <tr>
          <td>Name</td>
          <td>color</td>
          <td>Price</td>
          <td>Brand</td>
          <td>Category</td>
        </tr>
        {cartData.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.color}</td>
            <td>{data.price}</td>
            <td>{data.brand}</td>
            <td>{data.category}</td>
            <td>
              <button onClick={() => dispatch(removeFromCart(data.id))}>
                X
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Cart;
