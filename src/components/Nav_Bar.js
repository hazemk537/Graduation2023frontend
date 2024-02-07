import React from "react";
import '../styles/Nav_Bar.css';

function Navigation({ onLoginClick, onCreateAccountClick }) {

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
            <a href="#" onClick={onLoginClick}>Sign in</a>
          </li>
          
          <li>
            <a href="#" onClick={onCreateAccountClick}>Create Account</a>
          </li>  

        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
