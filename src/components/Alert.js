import React, { useState, useEffect } from "react";
import "../styles/alert.css"; // Your main alert styles
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices/NotifySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alertText, type }) => {

  const dispatch = useDispatch()

  return (
    <>
     
      <div className="alert_container"  >
    


        <div   className={`alert_component ${type === '404' ? 'error404_class' : `${type}_class`}`}>
       
          <div className="text">{alertText}</div>
        </div>
      </div>

    </>
  );
};

export default Alert;
