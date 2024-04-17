import React from "react";
import '../styles/Nav_Bar.css';
import { Link } from "react-router-dom";
function NavBar({ onClickLogin, onClickCreateAccount }) {

  return (
    <div>
      <nav className="nav_bar">
        <ul>
          
          <li><a href="#contact_us" > Contact Us</a></li>
          {/* #todo_2 */}
          <li><Link to="/pricing" > Pricing</Link></li>
          <li>
            <span  onClick={onClickLogin}>Sign in</span>
          </li>
          
          <li>
            <span  className="createAccount" onClick={onClickCreateAccount}>Create Account</span>
          </li>  

        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
