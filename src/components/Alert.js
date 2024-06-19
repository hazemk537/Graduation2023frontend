import React, { useState, useEffect } from "react";
import "../styles/alert.css";

const Alert = ({ alertText, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="alert_container">
          <div className={`alert_component ${type}_class`}>
            <p>{alertText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
