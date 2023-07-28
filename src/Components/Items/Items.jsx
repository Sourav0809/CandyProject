/* eslint-disable react/prop-types */
import "./Items.css";

const Items = (props) => {
  return (
    <div className="items-container">
      <h1>{props.candyName}</h1>
      <h1>{props.candyDes}</h1>
      <h1>{props.candyPrice}</h1>
      <button>Add One</button>
      <button>Add Two</button>
      <button>Add Three</button>
    </div>
  );
};
export default Items;
