import React from "react";
import ReactDOM from "react-dom";

import classes from "./styles/modal.module.css";

const portalElement = document.getElementById("overlay");

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.handleHideCart} />
);

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handleHideCart={props.handleHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
