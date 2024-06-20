import React, { useState, useEffect } from "react";
import "../styles/alert.css"; // Your main alert styles

const Alert = ({ alertText, type}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {visible && (
        <div className="alert_container">
          <div className={`alert_component ${type === '404' ? 'error404_class' : `${type}_class`}` }>
            <div className='text'>{alertText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
