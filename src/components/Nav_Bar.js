import React from "react";
import '../styles/Nav_Bar.css';
import { Link } from 'react-router-dom';
function Nav_Bar({ onLoginClick, onCreateAccountClick }) {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="#" className="logo"> Logo</Link></li>
          <li><Link to="#" className="Features"> Features</Link></li>
          <li><Link to="#" className="Pricing"> Pricing</Link></li>
          <li><Link to="#" className="Discover"> Discover</Link></li>
          <li><Link to="/Reset_Password" className="Blog"> Blog</Link></li>
          <li>
            <Link href="#" onClick={onLoginClick}>Sign in</Link>
          </li>
          
          <li>
            <Link href="#" onClick={onCreateAccountClick}>Create Account</Link>
          </li>  

        </ul>
      </nav>
    </div>
  );
}

export default Nav_Bar;
