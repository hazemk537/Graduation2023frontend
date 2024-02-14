import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Login_Signup.css';
import { Link } from 'react-router-dom';

function Login({ onClose }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    

        // Perform login logic here
    };

    return (
        <div className="login_logout_container">
            <div className="form_sign">
                <div className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} id='X' />
                </div>
                <form onSubmit={handleLogin}>
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
                        <button type="submit" id="signinBtn">
                            Login
                        </button>
                    </div>
                    <div>
                        <b className="reset">
                            forget password{'    '}
                            <Link to="/Reset_Password" rel="noopener noreferrer">
                                click here
                            </Link>
                        </b>
                    </div>
                </form>
                <div className="transmit">
                    <Link to="/Create_Account">
                        <button type="submit" id="signupBtn">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
