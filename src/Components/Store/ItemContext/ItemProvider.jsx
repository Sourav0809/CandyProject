/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemContext from "./ItemContext";

const ItemProvider = (props) => {
  const [candyList, setCandyList] = useState([]);

  const addToList = (addedCandy) => {
    setCandyList((prevCandy) => {
      return [...prevCandy, addedCandy];
    });
  };

  const ItemContextValues = {
    candyList: candyList,
    addToList: addToList,
  };

  return (
    <ItemContext.Provider value={ItemContextValues}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
