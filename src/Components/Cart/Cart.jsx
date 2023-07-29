/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "./Cart.css";

const Cart = (props) => {
  return (
    <>
      <div className="cart-container-items">
      <h1>{props.candyName}</h1>
      <h1>{props.candyDes}</h1>
      <h1>{props.candyPrice}</h1>
      <h1>{props.candyQuantity}</h1>

      </div>
      
    </>
  );
};

export default Cart;
