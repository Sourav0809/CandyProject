/* eslint-disable react/prop-types */

import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addtoCartOne = (newItems) => {
    setCartItems((prevItems) => {
      let alreadyPresent = false;
      const newArr = prevItems.map((items) => {
        if (newItems.id === items.id) {
          alreadyPresent = true;
          items.candyQuantity += newItems.candyQuantity;
        }
        return items;
      });
      if (alreadyPresent === true) {
        return newArr;
      } else {
        return [...prevItems, newItems];
      }
    });
  };

  const addtoCartTwo = (newItems) => {
    setCartItems((prevItems) => {
      let alreadyPresent = false;
      const newArr = prevItems.map((items) => {
        if (newItems.id === items.id) {
          alreadyPresent = true;
          items.candyQuantity += newItems.candyQuantity;
        }
        return items;
      });
      if (alreadyPresent === true) {
        return newArr;
      } else {
        return [...prevItems, newItems];
      }
    });
  };

  const addtoCartThree = (newItems) => {
    setCartItems((prevItems) => {
      let alreadyPresent = false;
      const newArr = prevItems.map((items) => {
        if (newItems.id === items.id) {
          alreadyPresent = true;
          items.candyQuantity += newItems.candyQuantity;
        }
        return items;
      });
      if (alreadyPresent === true) {
        return newArr;
      } else {
        return [...prevItems, newItems];
      }
    });
  };

  const CartProviderValues = {
    cartItems: cartItems,
    addtoCartOne: addtoCartOne,
    addtoCartTwo: addtoCartTwo,
    addtoCartThree: addtoCartThree,
  };
  return (
    <CartContext.Provider value={CartProviderValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
