import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../styles/Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  console.log(props.link);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-border" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-exit">
              <button onClick={props.onClose} className="button">
                X
              </button>
            </div>
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-links">
              <a href={props.link} target="_blank" className="link">
                Link to Project
              </a>
              <a href={props.github} target="_blank" className="link">
                Link to Github
              </a>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
