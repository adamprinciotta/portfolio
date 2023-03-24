import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../styles/Modal.css";
import { useState } from "react";

import OMO from "../images/OMO.PNG";
import ToDo from "../images/Todo.PNG";
import TechDoc from "../images/TechnicalDoc.PNG";
import Eco from "../images/EcoBottle.PNG";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const [image, setImage] = useState(null)
  

  useEffect(() => {
    console.log(props.header)
    if(props.header === "Online Video Database"){
      setImage(OMO)
    }
    else if(props.header === "To Do List"){
      setImage(ToDo)
    }
    else if(props.header === "Technical Documentation"){
      setImage(TechDoc)
    }
    else if(props.header === "EcoBottle Landing Page"){
      setImage(Eco)
    }

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };


  }, [props]);

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
              <h4 className="modal-title">{props.header}</h4>
            </div>
            {/* <div className="modal-body">
              {props.body} */}
              {props.header === "EcoBottle Landing Page" || props.header === "Online Video Database" ? (
                <div className="modal-body wide">
                  {props.body}
                    <img src={image} className="widePic" alt={props.header} width="50%" height="100%"/>
                </div>
                ) : (
                  <div className="modal-body thin">
                  {props.body}
                    <img src={image} className="thinPic" alt={props.header} width="50%" height="100%"/>
                </div>
                )
              }

              {/* <img src={image} width="50%" height="100%"></img>  */}
            {/* </div> */}
            
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
