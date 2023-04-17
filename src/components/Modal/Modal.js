import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  //   const cssClasses = [
  //     "Modal",
  //     state === "entering"
  //       ? "ModalOpen"
  //       : state === "exiting"
  //       ? "ModalClosed"
  //       : null,
  //   ];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames="fade-slide"
    >
      {/* <div className={cssClasses.join(" ")}> */}
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
