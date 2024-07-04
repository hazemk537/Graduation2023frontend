import React from "react";
import "../styles/alert.css"; // Your main alert styles

const Alert = ({ alertText, type }) => {
  // console.log(typeof(alertText));
  // console.log(alertText);
  return (
    <>

      {typeof(alertText)==='string' &&type&& alertText !== undefined ?
        (<div className="alert_container"  >
          <div className={`alert_component ${type === '404' ? 'error404_class' : `${type}_class`}`}>
            {/* escape undefined messages */}
            <div className="text">{alertText}

            </div>
          </div>
        </div>) : null}

    </>
  );
};

export default Alert;
