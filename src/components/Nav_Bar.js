import React from "react";
import '../styles/Nav_Bar.css';
import { Link } from 'react-router-dom';
function Nav_Bar({ onLoginClick, onCreateAccountClick }) {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="#" className="logo"> Logo</Link></li>
          <li><Link to="/test" className="Features"> Features</Link></li>
          <li>
            <Link to="/login" onClick={onLoginClick}>Sign in</Link>
          </li>
          
          <li>
            <Link to="/Create_Account" onClick={onCreateAccountClick}>Create Account</Link>
          </li>  

        </ul>
      </nav>
    </div>
  );
}

export default Nav_Bar;
