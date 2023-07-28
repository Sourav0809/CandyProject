import { useContext, useState } from "react";
import "./CandyForm.css";
import ItemContext from "../Store/ItemContext/ItemContext";
const CandyForm = () => {
  const [candyName, setCandyName] = useState("");
  const [candyDes, setCandyDes] = useState("");
  const [candyPrice, setCandyPrice] = useState("");
  // using the itemsprovider value
  const ItemCtx = useContext(ItemContext);
  //input change functions
  const candyNameHandeler = (e) => {
    setCandyName(e.target.value);
  };

  const candyDesHandeler = (e) => {
    setCandyDes(e.target.value);
  };

  const candyPriceHandeler = (e) => {
    setCandyPrice(e.target.value);
  };
  const addCandy = (e) => {
    e.preventDefault();
    const submitedCandy = {
      addedCandyName: candyName,
      addedCandyDes: candyDes,
      addedCandyPrice: candyPrice,
      id: Math.random(),
    };
    ItemCtx.addToList(submitedCandy);
  };

  return (
    <>
      <form className="candy-form" onSubmit={addCandy}>
        <div className="form-name-container">
          <label htmlFor="CandyName">CandyName</label>
          <input type="text" onChange={candyNameHandeler} />
        </div>
        <div>
          <label htmlFor="CandyDes">CandyDes</label>
          <input type="text" onChange={candyDesHandeler} />
        </div>
        <div>
          <label htmlFor="CandyName">CandyPrice</label>
          <input type="number" onChange={candyPriceHandeler} />
        </div>
        <button type="submit">Add Candy</button>
      </form>
    </>
  );
};

export default CandyForm;
