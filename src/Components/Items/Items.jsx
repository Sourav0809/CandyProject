/* eslint-disable react/prop-types */
import "./Items.css";
import CartContext from "../Store/CartContext/CartContext";
import { useContext } from "react";
const Items = (props) => {
  const cartCtx = useContext(CartContext);
  const addOneToCart = () => {
    const addedCandy = {
      candyName: props.candyName,
      candyQuantity: 1,
      candyDes: props.candyDes,
      candyPrice: props.candyPrice,
      id: props.candyName,
    };
    cartCtx.addtoCartOne(addedCandy);
  };
  const addTwoToCart = () => {
    const addedCandy = {
      candyName: props.candyName,
      candyQuantity: 2,
      candyDes: props.candyDes,
      candyPrice: props.candyPrice,
      id: props.candyName,
    };
    cartCtx.addtoCartOne(addedCandy);
  };
  const addThreeToCart = () => {
    const addedCandy = {
      candyName: props.candyName,
      candyQuantity: 3,
      candyDes: props.candyDes,
      candyPrice: props.candyPrice,
      id: props.candyName,
    };
    cartCtx.addtoCartOne(addedCandy);
  };
  return (
    <div className="items-container">
      <h1>{props.candyName}</h1>
      <h1>{props.candyDes}</h1>
      <h1>{props.candyPrice}</h1>
      <button onClick={addOneToCart}>Add One</button>
      <button onClick={addTwoToCart}>Add Two</button>
      <button onClick={addThreeToCart}>Add Three</button>
    </div>
  );
};
export default Items;
