import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Login_Signup.css';
import GLogin from './Google_Login';


function LoginForm({ onClose, onSignupClick }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };  

  return (
    <>
    <div className="login_assist">
      </div>
      <div className="form_sign">
        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} id='X' />
        </div>
        <form>
          <h1 id='title'>Login</h1>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon icon={faAt} beat id="awesome1" style={{ color: "#0740b0" }} />
              <input type="email" required placeholder="Email" name="email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} beat id="awesome1" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="pass-key"
                required
                placeholder="Password"
                name="password"
              />
              <span className="show" onClick={togglePasswordVisibility}>
                {passwordVisible ? 'hide' : 'show'}</span>
            </div>
          </div>
          <div className="buttons">
            <a href="/Home">
              <button type="submit" id="signinBtn">Login</button>
            </a>
            
          </div>
          <div>
            <b className="reset">
              forget password{' '}
              <a href="/Reset_Password" rel="noopener noreferrer">
                click here
              </a>
            </b>
          </div>
        </form>
        <div className="transmit">
          <button type="button" id="signupBtn" onClick={onSignupClick}>Sign up</button>
        </div>
        <GLogin className="Glogin"/>
      </div>
    </>
  );
}

export default LoginForm;