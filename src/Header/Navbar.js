import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// icons
import ShopIcon from "../assets/icons/shop.svg";

// context
import { CartContext } from "../Context/CartContextProvider";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #9e9e9e;
  align-items: center;
  padding: 0 50px;
`;

const DivUl = styled.div``;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  z-index: 15;
  li {
    padding: 25px;
    cursor: pointer;
  }
  div {
    display: none;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    position: fixed;
    transition: all 0.3s linear;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    margin: 0;
    text-align: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 1px 2px #bbb;
    top: 0;
    right: 0;
    height: 100vh;
    width: 330px;
    padding-top: 3.5rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 80px 50px;
      img {
        width: 50px;
        padding: 5px;
      }
    }
    a {
      text-decoration: none;
      span {
        background-color: rgb(62, 62, 202);
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
const DivShop = styled.div`
  position: relative;
  img {
    width: 50px;
    padding: 5px;
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0b499b;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 0.75rem;
    text-align: center;
    font-weight: bold;
    color: #fff;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
    span {
      display: none;
    }
  }
`;

const DivForm = styled.div`
  a {
    text-decoration: none;
    color: #fff;
  }
  span {
    background-color: rgb(62, 62, 202);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;

const Navbar = ({ open }) => {
  const { state } = useContext(CartContext);
  return (
    <Header>
      <DivForm>
        <Link to="/FormLogin">
          <span>Login | SignUp</span>
        </Link>
      </DivForm>
      <DivUl>
        <Ul open={open}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/Aboute">
            <li>Aboute Us</li>
          </Link>
          <div>
            <Link to="/cart">
              <img src={ShopIcon} alt="shop" />
            </Link>
            <Link to="/FormLogin">
              <span>Login | SignUp</span>
            </Link>
          </div>
        </Ul>
      </DivUl>
      <DivShop>
        <Link to="/cart">
          <img src={ShopIcon} alt="shop" />
        </Link>
        <span>{state.itemsCounter}</span>
      </DivShop>
    </Header>
  );
};

export default Navbar;
