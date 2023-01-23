import React from "react";
import { Route, Routes } from "react-router-dom";

//styles
import "./App.css";

//components
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
