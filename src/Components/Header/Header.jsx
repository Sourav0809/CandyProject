/* eslint-disable react/prop-types */
import "./Header.css";
import CartContext from "../Store/CartContext/CartContext";
import { useContext } from "react";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemQuantity = cartCtx.cartItems.reduce((currNum, values) => {
    return Number(currNum) + Number(values.candyQuantity);
  }, 0);

  return (
    <header className="header">
      <h2>Candy Shop</h2>
      <div className="cart-icons-container" onClick={props.cartContainerShow}>
        <h2>Cart</h2>
        <h2>{cartItemQuantity}</h2>
      </div>
    </header>
  );
};

export default Header;
