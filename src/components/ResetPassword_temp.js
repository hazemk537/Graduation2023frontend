
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Reset_Password.css";
import useFetch from "../customHooks/useFetch";
//donot touch file
function ResetPassword() {

  // let emailInputRef = useRef(null);
  // #Note_case provide array with 3 refs
  let inputFields =useRef({});
  // let NewPasswordRef = useRef(null);
  // let  inputFields[2] = useRef(null);

  const [togglesCodeForm, setogglesCodeSent] = useState(0)
  const [toggleEnterPassword, setoggleEnterPassword] = useState(0)
  const [toggleSuccessReset, setoggleSuccessReset] = useState(0)


  const [, , sendgetResetCode] = useFetch()
  const [, , sendNewPassword] = useFetch()
  const [, , sendconfirmResetCode] = useFetch()
useEffect(()=>{
  console.log(inputFields);
})
  function resetPasswordHandler() {
    setoggleSuccessReset(1)
  }
  function verifyCodeHandler() {

    setoggleEnterPassword(1)
  }

  function sendCodeHandler() {
    // #debug console.log('in sendCodeHandler');
    setogglesCodeSent(1)
  }

  return (
    <>
      <div className="reset_container">
        <h2>Reset your password</h2>
        <div>
          <p>
            <Link className="Link" to="/">
              Home
            </Link>
          </p>
          {/* #Note_case reset states */}
          <Link to="/Reset_Password" onClick={() => {
            setoggleEnterPassword(0)
            setoggleSuccessReset(0)
            setogglesCodeSent(0)
          }}>enter other email</Link>
        </div>

        {!togglesCodeForm && <div className="input-field">

          <h5>Enter your email address and we will send you a new password</h5>
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
            ref={(element) => {inputFields['email'].current= element}}
          />
          {/* #Note_case email.current or email.value > gives #react_bug  Converting circular structure to JSON ,"The JSON value could not be converted to System.String. Path: $.email | LineNumber: 0 | BytePositionInLine: 10."*/}
          <button onClick={() => {
            sendgetResetCode(`https://BrieflyNews.runasp.net/api/v1/Auth/SendResetpassword`, { method: 'POST', name: 'POSTsendgetResetCode', body: { 'email': inputFields['email'].current.value }, onSucceed: sendCodeHandler })
          }}>send code </button>
        </div>}

        {/* #Note_case inclusive states , component 1 active if only first one state is active etc*/}

        {togglesCodeForm && !toggleSuccessReset && !toggleSuccessReset ?
          (<div>
            <input
             
              type="text"
              className="resetPassword_input"
              placeholder="Enter Code"
              name="confirmationCode"
              ref={(element) => {inputFields.current[1] = element}}
              />
            <button id="sub_btn" onClick={() => {
              // #debug console.log('enter code btn');
              sendconfirmResetCode(`https://BrieflyNews.runasp.net/api/v1/Auth/ConfirmResetPassword`, { method: 'POST', name: 'POSTsendconfirmResetCode', body: { 'email': inputFields['email'].current.value, 'code':  inputFields['confirmCode'].current.value }, onSucceed: verifyCodeHandler })
            }}>
              Enter Code
            </button>

          </div>) : null
        }
        {toggleEnterPassword && !toggleSuccessReset && !togglesCodeForm ? (<div>
          <input
            type="password"
            className="resetPassword_input"
            placeholder="Enter New Password"
            name="confirmationCode"
            ref={(element) => {inputFields.current[2] = element}}
          />
          <button
            className="resetPassword_btn"
            onClick={() => {
              sendNewPassword(` https://BrieflyNews.runasp.net/api/v1/Auth/Resetpassword`, { method: 'POST', name: 'POSTsendNewPaasword', body: { 'password': inputFields['password'].current.value }, onSucceed: resetPasswordHandler })
            }}
          >
            Submit
          </button>
        </div>) : null
        }

        {toggleSuccessReset &&

          <h1>Password Changed successfully ✔️ </h1>
        }




      </div>
    </>
  );
}

export default ResetPassword;

