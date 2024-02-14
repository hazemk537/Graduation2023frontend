import React from "react";
import '../styles/Nav_Bar.css';
function NavBar({ onClickLogin, onClickCreateAccount }) {

  return (
    <div>
      <nav>
        <ul>
          <li><span to="#" className="logo"> Logo</span></li>
          <li><span to="#" className="Features"> Features</span></li>
          <li>
            <span  onClick={onClickLogin}>Sign in</span>
          </li>
          
          <li>
            <span  onClick={onClickCreateAccount}>Create Account</span>
          </li>  

        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
