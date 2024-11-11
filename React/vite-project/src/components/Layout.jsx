import React from "react";
import NavBar from "../styles/navbar.scss";
import { useCart } from "./CartContext";

const Layout = ({ children }) => {
  const { cartItems } = useCart();

  return (
    <>
      <NavBar
        cartItemCount={cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />
      {children}
    </>
  );
};

export default Layout;
