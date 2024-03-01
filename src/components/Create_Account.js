// Create_Account.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faLock,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Login_Signup.css";
import Alert from "../routes/Alert";

function Create_Account({ onClose, onSigninClick }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = { firstName, lastName, email, password };

    fetch("https://portfolio-api-xi-ecru.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.error) {
          
          setAlertType("err");
          setAlertMessage(jsonData.error);
        }
        else{
          setAlertType("success");
          setAlertMessage("Account Created ,plz Login");
        }

        
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
      });

           
  };


  return (
    <>
      {alertMessage && <Alert type={alertType} alertText={alertMessage} />}
      <div className="login_assist"></div>

      <div className="form_sign">
        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} id="X" />
        </div>
        <h1 id="title">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon
                icon={faUser}
                beat
                id="awesome1"
                style={{ color: "#1d3ee2" }}
              />
              <input
                type="text"
                required
                placeholder="First Name"
                name="firstName"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon
                icon={faUser}
                beat
                id="awesome1"
                style={{ color: "#1d3ee2" }}
              />
              <input
                type="text"
                required
                

                placeholder="Last Name"
                name="lastName"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon
                icon={faAt}
                beat
                id="awesome1"
                style={{ color: "#0740b0" }}
              />
                
              <input type="email" required placeholder="Email" name="email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} beat id="awesome1" />
              <input
                type={passwordVisible ? "text" : "password"}
                className="pass-key"
                required

                placeholder="Password"
                name="password"
              />
              <span className="show" onClick={togglePasswordVisibility}>
                {passwordVisible ? "hide" : "show"}
              </span>
            </div>
          </div>
          <div className="buttons">
            <a href="/">
              <button type="submit" id="signupBtn">
                Sign Up
              </button>
            </a>
          </div>
        </form>
        <div className="transmit">
          <button type="button" id="signinBtn" onClick={onSigninClick}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Create_Account;

