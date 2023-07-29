/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="modal-backdrop">{props.children}</div>;
};

const Overlay = (props) => {
  return (
    <div className="modal-overlay">
      <div className="cart-container-heading">
        <h1>My Cart</h1>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

const portalOverlays = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalOverlays)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalOverlays
      )}
    </>
  );
};
export default Modal;
