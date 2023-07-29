/* eslint-disable react/prop-types */
import Cart from "./Cart";
import CartContext from "../Store/CartContext/CartContext";
import { useContext } from "react";
import Modal from "../Modal/Modal";
const CartContainer = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal>
      {cartCtx.cartItems.map((items) => {
        return (
          <Cart
            id={items.candyName}
            key={items.candyName}
            candyName={items.candyName}
            candyDes={items.candyDes}
            candyPrice={items.candyPrice}
            candyQuantity={items.candyQuantity}
          />
        );
      })}
      <button className="close-btn" onClick={props.hideCartContainer}>
        Close
      </button>
    </Modal>
  );
};

export default CartContainer;
