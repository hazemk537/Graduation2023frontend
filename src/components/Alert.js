
import React, { useEffect } from "react";
import "../styles/alert.css";


const Alert = ({ alertText, type, onClose }) => {
  console.log('alertText....')
  // console.log(typeof(alertText))

 
  return (
    <>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100

      }}>
        <div style={{
          display: 'flex',
          width: '900px',
        }}>
          <div className={`alert_component ${type}_class`}>
            <div className={`${type}_class`}>
              <div onClick={onClose}>
                <svg style={{ position: 'absolute', top: 1, right: 1 }} width='30' height='30' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </div>

              <p>{alertText.message} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;

