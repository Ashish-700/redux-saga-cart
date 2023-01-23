import React from "react";
import { Link, Outlet } from "react-router-dom";

//mui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

//styles
import "./Header.css";

//redux
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("redux data in header", result);
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <div className="cart-container">
          <Link to="cart">
            <span>{result.length}</span>
            <AddShoppingCartIcon className="cart-icon" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
