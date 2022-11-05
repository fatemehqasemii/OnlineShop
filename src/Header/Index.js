import React from "react";
import Footer from "../Header/Footer";
import Burger from "../Header/Burger";

const Layout = ({ children }) => {
  return (
    <>
      <Burger />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
