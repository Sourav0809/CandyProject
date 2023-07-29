import { useContext } from "react";
import Items from "../Items/Items";
import ItemContext from "../Store/ItemContext/ItemContext";

const ItemsConatiner = () => {
  const itemCtx = useContext(ItemContext);
  return (
    <>
      {itemCtx.candyList.map((candies) => {
        return (
          <Items
            id={candies.addedCandyName}
            key={candies.id}
            candyName={candies.addedCandyName}
            candyDes={candies.addedCandyDes}
            candyPrice={candies.addedCandyPrice}
          />
        );
      })}
    </>
  );
};

export default ItemsConatiner;
