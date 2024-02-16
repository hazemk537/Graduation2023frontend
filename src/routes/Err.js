
import React from 'react';
import "../styles/err.css"

const ConsoleErrorViewer = ({ errText }) => {
  
  return  (
    <div className="err_container">
      <h1 className="err_text">Error Occurred!</h1>
      <p className="err_Message">{errText}</p>
    </div>
  );
};


export default ConsoleErrorViewer;
