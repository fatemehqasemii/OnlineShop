import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Landing from "./Header/Landing";


//context
import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import Burger from "./Header/Burger";
import Footer from "./Header/Footer";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Burger />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
