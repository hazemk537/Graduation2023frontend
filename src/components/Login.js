import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Login_Signup.css";
import GLogin from "./Google_Login";
import Alert from "../routes/Alert";
import { useNavigate } from "react-router";
import { json } from "react-router/dist/umd/react-router.development";

function LoginForm({ onClose, onSignupClick }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  //to not render success at begining
  const [ErrState, setErrState] = useState(false);
  let UserData;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const NavigateFn = useNavigate();

  const handleSignin = (event) => {
    // event.target.preventDefault()
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //#todo_4 email Email usr_mail >> map
    const data = { Email: email, password: password };

    fetch("http://authnewsapi.runasp.net/api/v1/Auth/Login", {
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

        // #todo_5 .succeeded,.error,status ,statusCode....
        UserData=jsonData.data
        //#TEST
      // console.log(JSON.stringify(UserData));
      // console.log(UserData);



        if (jsonData.statusCode !== 200) {
          setErrState(true);
          setAlertType("err");
          setAlertMessage(jsonData.message);

        }else{

          UserData=jsonData.data
          

        }
      })
      .catch((error) => {
        setAlertType("err");
        setAlertMessage(error);
        setErrState(true);
      });
//go here only after .then sereis finish
// #todo_4 why  the next if result undefined (it run before the chain promise complete )
    // if (!ErrState  ) {
    //   NavigateFn("/home");
    //   localStorage.setItem("userData",JSON.stringify(UserData));
      
    // }
    // #todo_4 why  the next if result with the data without undefined ,this mean the if condition runs twice! before the promise chain complete and after completion
     if (!ErrState  && UserData) {
      NavigateFn("/home");
      localStorage.setItem("userData",JSON.stringify(UserData));
      
    }
  };
  return (
    <>
      {alertMessage && <Alert type={alertType} alertText={alertMessage} />}

      <div className="login_assist"></div>
      <div className="form_sign">
        <div className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} id="X" />
        </div>
        <form onSubmit={handleSignin}>
          <h1 id="title">Login</h1>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon
                icon={faAt}
                beat
                id="awesome1"
                style={{ color: "#0740b0" }}
              />
              <input type="email" required placeholder="Email" 
              value='rakono5650@em2lab.com'
              name="email" />
            </div>
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
                value='Mazefddswef43n@123'
                placeholder="Password"
                name="password"
              />
              <span className="show" onClick={togglePasswordVisibility}>
                {passwordVisible ? "hide" : "show"}
              </span>
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
              forget password{" "}
              <a
                className="reset_link"
                href="/Reset_Password"
                rel="noopener noreferrer"
              >
                click here
              </a>
            </b>
          </div>
        </form>
        <div className="transmit">
          <button type="button" id="signupBtn" onClick={onSignupClick}>
            Sign up
          </button>
        </div>
        <GLogin className="Glogin" />
      </div>
    </>
  );
}

export default LoginForm;

