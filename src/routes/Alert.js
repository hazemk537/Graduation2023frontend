
import React from "react";
import "../styles/alert.css";

const Alert = ({ alertText, type }) => {
  return (
    <div className="flex">
      <div className={`alert_component ${type}_class`}>
        <div className="alert_assist"></div>
        <div className={`${type}_class`}>
          <h1>{alertText} </h1>
        </div>
      </div>
    </div>
  );
};

export default Alert;

