import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Reset_Password.css";
import Alert from "./Alert";

function ResetPassword() {
  const emailInputRef = useRef(null);
  const NewPasswordRef = useRef(null);
  const confirmationCodeRef = useRef(null);
  const [ErrState, setErrState] = useState(false);
  const [AlertMsg, setAlertMessage] = useState(null);
  const [AlertType, setAlertType] = useState(false);
  const [showCodeField, setCodeField] = useState(false);
  const [showNewPasswordField, setNewPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function checkUserIdentityHandler() {
    fetch("https://BrieflyNews.runasp.net/api/v1/Auth/ConfirmResetPassword", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        code: confirmationCodeRef.current.value,
      }),
      method: "POST",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
        } else {
          setNewPassword(true);
        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
  }

  function requestPassHandler() {
    fetch("https://BrieflyNews.runasp.net/api/v1/Auth/SendResetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInputRef.current.value }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
        } else {
          setCodeField(true);
        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
  }

  function ResetPasswordHandler() {
    fetch("https://BrieflyNews.runasp.net/api/v1/Auth/Resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: NewPasswordRef.current.value,
      }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
          setAlertMessage(jsonData.message);
        } else {
          setAlertType("success");
          navigate('/'); // Navigate to home page on success
        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
  }

  return (
    <>
      {AlertMsg && <Alert alertText={AlertMsg} type={AlertType} />}
      <div className="reset_container">
        <div className="text-center m-5-auto">
          <h2>Reset your password</h2>
          <h5>Enter your email address and we will send you a new password</h5>
          <form className="ress-pass">
            <div className="input-field">
              <FontAwesomeIcon
                icon={faAt}
                beat
                id="awesome1"
                style={{ color: "#0740b0" }}
              />
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                ref={emailInputRef}
              />
            </div>
          </form>
          {!showCodeField && (
            <button id="sub_btn" onClick={requestPassHandler}>
              Send password
            </button>
          )}
          <div>
            <p>
              <Link className="Link" to="/">
                Home
              </Link>
            </p>
          </div>
          <div>
            {showCodeField && (
              <input
                type="text"
                className="resetPassword_input"
                placeholder="Enter Code"
                name="confirmationCode"
                ref={confirmationCodeRef}
              />
            )}
            {showNewPasswordField && (
              <div className="input-field">
                <FontAwesomeIcon
                  icon={faLock}
                  beat
                  id="awesome1"
                  style={{ color: "#0740b0" }}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="pass-key"
                  required
                  placeholder="Password"
                  name="password"
                  ref={NewPasswordRef}
                />
                <span className="show" onClick={togglePasswordVisibility}>
                  {passwordVisible ? "hide" : "show"}
                </span>
              </div>
            )}
            {showCodeField && !showNewPasswordField && (
              <button
                className="resetPassword_btn"
                onClick={checkUserIdentityHandler}
              >
                Submit
              </button>
            )}
            {showNewPasswordField && (
              <button
                className="resetPassword_btn"
                onClick={ResetPasswordHandler}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
