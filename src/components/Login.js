
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Login_Signup.css";
import GLogin from "./Google_Login";
import Alert from "../routes/Alert";
import { useNavigate } from "react-router";

function LoginForm({ onClose, onSignupClick }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 const NavigateFn=useNavigate()

const handleSignin=(event)=>{
  // event.target.preventDefault()
  event.preventDefault()
  const form = event.target;
  const firstName = form.email.value;
  const password = form.password.value;
  const data = { firstName, password };

  // #todo_0 auto login
  fetch("https://portfolio-api-xi-ecru.vercel.app/api/auth/signin", {
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
        if(jsonData.token){
        setAlertType("success");
        setAlertMessage("Account Created ,plz Login");
        // console.log(jsonData.token)

        localStorage.setItem("token", JSON.stringify(jsonData.token));
        NavigateFn("/home")


      }
    }
      
    })
    .catch((error) => {
      setAlertType("err");
      setAlertMessage(error);
    });

 

}

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
              <input  type="email" required placeholder="Email" name="email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} beat id="awesome1" style={{ color: "#0740b0" }}
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
              <a className="reset_link" href="/Reset_Password" rel="noopener noreferrer">
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
  )
}

export default LoginForm;
