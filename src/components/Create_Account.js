// Create_Account.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faLock,
  faTimes,
  fa0,
  faIdCard,
  faPerson,
  faCode,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Login_Signup.css";
import Alert from "../routes/Alert";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons/faPassport";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons/faIdBadge";

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
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const data = {
      "firstName":firstName,
      "lastName":lastName,
      "userName":userName,
      "email":email,
      "password":password,
      "confirmPassword":confirmPassword,
    };
// #todo_0 hazem auth api errs
// confirm email messaage
// 0. store email to local storage
// 1. input code from email
// 2. send code,email to api
// 3. msg confirmed or not
// 4. forget password css
//5. API end points 

    fetch("http://www.newsauth.somee.com/api/v1/Auth/Register", {
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
        } else {
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
          {/* userName */}
          <div className="input-field">
            <FontAwesomeIcon
              icon={faIdBadge}
              beat
              id="awesome1"
              style={{ color: "#1d3ee2" }}
            />
            <input
              type="text"
              required
              placeholder="User Name"
              name="userName"
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
              className="pass-key"
              required
              placeholder=" Confirm Password"
              name="confirmPassword"
            />
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

