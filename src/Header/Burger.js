import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

//styled
import styled from "styled-components";

//context
import CartContextProvider from "../Context/CartContextProvider";
import ProductContextProvider from "../Context/ProductContextProvider";

// components
import Navbar from "./Navbar";
import ProductDetailes from "../components/ProductDetailes";
import Store from "../components/Store";
import ShopCart from "../components/ShopCart";
import Login from "../Form/Login";
import SignUp from "../Form/SignUp";
import Aboute from "../components/Aboute";
import FormLogin from "../Form/FormLogin";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => (props.open ? "black" : "#1567df")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Div open={open} onClick={clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar open={open} />
          <Routes>
            <Route path="/products/:id" element={<ProductDetailes />} />
            <Route path="/products" element={<Store />} />
            <Route path="/Aboute" element={<Aboute />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/FormLogin" element={<FormLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default Burger;
