import { useEffect } from "react";
//style
import "./Main.css";

//redux
import { addToCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch, useSelector } from "react-redux";

//components

const item = {
  name: "Iphone 14 Pro Max",
  color: "start",
  price: "140000",
  other: "none",
};

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="main-container">
      <div className="product-container">
        {data.map((data) => (
          <div className="product-item" key={data.id}>
            <img src={data.image} />
            <h2>{data.name}</h2>
            <h4>{data.brand}</h4>
            <p>{`${data.color}, ${data.variant}`}</p>
            <h4>{data.price}</h4>
            <button onClick={() => dispatch(addToCart(data))}>AddToCart</button>
            <button onClick={() => dispatch(removeFromCart(data.id))}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
