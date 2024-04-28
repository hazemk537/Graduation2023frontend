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
  const [ErrState, setErrState] = useState(false);


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
    const confirmPassword = form.confirmPassword.value;
    const data = {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "password":password,
      "confirmPassword":confirmPassword,
    };

    
    fetch("http://briefly.runasp.net/api/v1/Auth/Register", {
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
        console.log(`Response ... ${jsonData} `);
// #todo_4 use statusCode and message fields
        if (jsonData.statusCode!==201) {
          setErrState(true)

          setAlertType("err");
          setAlertMessage(jsonData.message);
        } 
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true)
      });
      if (!ErrState)
      {

        setAlertType("success");
          setAlertMessage("Account Created , Check Inbox for Confirmation ");}
  };

  return (
    <>
      {alertMessage && <Alert type={alertType} alertText={alertMessage} />}
      <div className="form_sign">
        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} id="X" />
        </div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          {/* firstName */}
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

          {/* lastName */}
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
          {/* email */}
          <div className="input-field">
            <FontAwesomeIcon
              icon={faAt}
              beat
              id="awesome1"
              style={{ color: "#0740b0" }}
            />

            <input type="email" required placeholder="Email" name="email" />
          </div>
          {/* password */}
          <div className="input-field">
            <FontAwesomeIcon
              style={{ color: "#1d3ee2" }}
              icon={faLock}
              beat
              id="awesome1"
            />
            <input
              type={passwordVisible ? "text" : "password"}
              className="pass-key"
              required
              autoComplete="new-password"
              placeholder="Password"
              name="password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? "hide" : "show"}
            </span>
          </div>
          {/* Confirm password */}
          <div className="input-field">
            <FontAwesomeIcon
              icon={faLock}
              beat
              id="awesome1"
              style={{ color: "#1d3ee2" }}
            />
            <input
              type={passwordVisible ? "text" : "password"}
              className="confirm-pass-key"
              required
              autoComplete="new-password"
              placeholder=" Confirm Password"
              name="confirmPassword"
            />
            {/* FIX  */}
            <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? "hide" : "show"}
            </span>
          </div>

          <div className="buttons">
            <a href="/">
              <button type="submit" id="signupBtn">
                Sign Up
              </button>
            </a>
          </div>
        </form>
        <div className="transmitCRT">
          <button type="button" id="signinBtn" onClick={onSigninClick}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Create_Account;

