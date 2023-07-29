import CandyForm from "./Components/CandyForm/CandyForm";
import Header from "./Components/Header/Header";
import ItemsConatiner from "./Components/ItemsContainer/ItemsContainer";
import ItemProvider from "./Components/Store/ItemContext/ItemProvider";
import CartProvider from "./Components/Store/CartContext/CartProvider";
import CartContainer from "./Components/Cart/CartContainer";
import { useState } from "react";

const App = () => {
  const [viewCart, setViewCart] = useState(false);
  const cartContainerShow = () => {
    setViewCart(true);
  };
  const hideCartContainer = () => {
    setViewCart(false);
  };
  return (
    <ItemProvider>
      <CartProvider>
        {viewCart && <CartContainer hideCartContainer={hideCartContainer} />}
        <>
          <Header cartContainerShow={cartContainerShow} />
          <CandyForm />
          <ItemsConatiner />
        </>
      </CartProvider>
    </ItemProvider>
  );
};

export default App;
