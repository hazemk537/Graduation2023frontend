import React from "react";
import '../styles/Nav_Bar.css';
function NavBar({ onClickLogin, onClickCreateAccount }) {
  return (
    <div>

      <nav className="nav_bar">
        <div className="svg-logo">
          {/* <briefimg/> */}
          <span>Briefly</span>
        </div>

        <div className="spans">
        <ul>
          <li>
            <span  className="Signin" onClick={onClickLogin}>Sign in</span>
          </li>

          <li>
            <span className="createAccount" onClick={onClickCreateAccount}>Create Account</span>
          </li>

        </ul>
        </div>


      </nav>
    </div>
  );
}

export default NavBar;