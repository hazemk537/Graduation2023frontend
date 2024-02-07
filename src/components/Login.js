import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock,faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Login_Signup.css';



function LoginForm({onClose}) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (event) => {

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      const url = "#";
        const data = {  email, password };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        };
        
    return (


        <div className="container">
            <div className="form_sign">
                <div className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} id='X' />
                </div>    
                <form onSubmit={handleLogin} >
                    <h1 id='title' >Login</h1>
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
                            <button type="submit" id="signinBtn">
                                Login
                            </button>
                        </a>
                    </div>
                    <div>
                        <b className="reset">
                            forget password{'    '}
                            <a href="/Reset_Password" rel="noopener noreferrer">
                                click here
                            </a>
                        </b>
                    </div>
                </form>
                <div className="transmit">
                    <a href="/Register">
                        <button type="submit" id="signupBtn">
                            Sign up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;