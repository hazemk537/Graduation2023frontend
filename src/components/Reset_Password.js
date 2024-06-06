import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Reset_Password.css";
import {
  json,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import Alert from "./Alert";
function ResetPassword() {
  let emailInputRef = useRef(null);
  let NewPasswordRef = useRef(null);
  let confirmationCodeRef = useRef(null);
  const [ErrState, setErrState] = useState(false);
  const [AlertMsg, setAlertMessage] = useState(null);
  const [AlertType, setAlertType] = useState(false);
  const [showCodeField, setCodeField] = useState(false);
  const [showNewPasswordField, setNewPassword] = useState(false);
  let NavigateFn = useNavigate();
  function checkUserIdentityHandler() {
    fetch("https://briefly.runasp.net/api/v1/Auth/ConfirmResetPassword", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        code: confirmationCodeRef.current.value,
      }),

      method: "POST",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(`Response `);
        console.log(jsonData);
        setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
        }
        else{
          setNewPassword(true);

        }
      })

      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
    if (!ErrState) {
      setAlertType("success");
      console.log(ErrState);
      // new input field
    }
  }
  function requestPassHandler() {
    console.log(emailInputRef.current.value);

    fetch("https://briefly.runasp.net/api/v1/Auth/SendResetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInputRef.current.value }),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        // #todo_4 code 200/201
        // direct get the msg from response
        setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
        }
        //only if success
        else {
          // 1.disable the code field and change style
          // 2. hidedn btn 1
          // 3. displat btn2
        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
    if (!ErrState) {
      setAlertType("success");
      console.log(ErrState);
      setCodeField(true);
    }
  }

  function ResetPasswordHandler() {
    // NewPasswordRef
    fetch("https://briefly.runasp.net/api/v1/Auth/Resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: NewPasswordRef.current.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
      setAlertMessage(jsonData.message);

        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
          setAlertMessage(jsonData.message);
        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
    if (!ErrState) {
      setAlertType("success");
      console.log(ErrState);
    }
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
              <input
                type="password"
                className="resetPassword_input"
                placeholder="Enter New Password"
                name="confirmationCode"
                ref={NewPasswordRef}
              />
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

