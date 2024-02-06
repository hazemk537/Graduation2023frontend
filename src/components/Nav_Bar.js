import React, { useState } from "react";
import '../styles/Nav_Bar.css';
import Login from './Login';
import Create_Account from './Create_Account'

function Navigation() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleLinkClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  return (
    <div>
      
      <nav>
        <ul>
          <li><a to="#" className="logo"> Logo</a></li>
          <li><a to="#" className="Features"> Features</a></li>
          <li><a to="#" className="Pricing"> Pricing</a></li>
          <li><a to="#" className="Discover"> Discover</a></li>
          <li><a to="#" className="Blog"> Blog</a></li>
          <li>
            <a href="#" onClick={() => handleLinkClick('Sign in')}>Sign in</a>
          </li>
          
          <li><a href="#" onClick={() => handleLinkClick('Create Account')}>
                        <button type="submit" id="loginBtn">
                            Create Account
                        </button>
          </a>
          </li>  

        </ul>
      </nav>



      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{popupContent}</h2>
            {/* Render the corresponding component based on the clicked link */}
            {popupContent === 'Sign in' && <Login />}
            {popupContent === 'Create Account' && <Create_Account />} 
            
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default Navigation;
