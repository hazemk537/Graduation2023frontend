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
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [codeInput, setCodeInput] = useState();
  let inputFields = useState();
  // let NewPasswordRef = useRef(null);
  // let  inputFields[2] = useRef(null);

  const [togglesCodeForm, setogglesCodeSent] = useState(0)
  const [toggleEnterPassword, setoggleEnterPassword] = useState(0)
  const [toggleSuccessReset, setoggleSuccessReset] = useState(0)


  const [, , sendgetResetCode] = useFetch()
  const [, , sendNewPassword] = useFetch()
  const [, , sendconfirmResetCode] = useFetch()

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
            setEmailInput('')
            setCodeInput('')
            setPasswordInput('')
          }}>enter other email</Link>
        </div>
        {/* disappear when  togglesCodeForm =1 */}
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
            onChange={(event) => setEmailInput(event.target.value)}

            value={emailInput} />

          {/* #Note_case email.current or email.value > gives #react_bug  Converting circular structure to JSON ,"The JSON value could not be converted to System.String. Path: $.email | LineNumber: 0 | BytePositionInLine: 10."*/}
          <button onClick={() => {
            sendgetResetCode(`https://BrieflyNews.runasp.net/api/v1/Auth/SendResetpassword`, { method: 'POST', name: 'POSTsendgetResetCode', body: { 'email': emailInput }, onSucceed: sendCodeHandler })
          }}>send code </button>
        </div>}

        {/* #Note_case inclusive states , component 1 active if only first one state is active etc*/}

        {/* disappear when  toggleEnterPassword =1 */}
        {/* appear when  togglesCodeForm =1 */}
        {togglesCodeForm && !toggleEnterPassword ?
          (<div>
            <input

              type="text"
              className="resetPassword_input"
              placeholder="Enter Code"
              name="confirmationCode"
              onChange={(event) => setCodeInput(event.target.value)}

              value={codeInput} />

            <button id="sub_btn" onClick={() => {
              // #debug console.log('enter code btn');
              sendconfirmResetCode(`https://BrieflyNews.runasp.net/api/v1/Auth/ConfirmResetPassword`, { method: 'POST', name: 'POSTsendconfirmResetCode', body: { 'email': emailInput, 'code': codeInput }, onSucceed: verifyCodeHandler })
            }}>
              Enter Code
            </button>
            </div>):null
            }
        {toggleEnterPassword && !toggleSuccessReset ? (<div>
          <input
            type="password"
            className="resetPassword_input"
            placeholder="Enter New Password"
            name="confirmationCode"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
          />

          <button
            className="resetPassword_btn"
            onClick={() => {
              sendNewPassword(` https://BrieflyNews.runasp.net/api/v1/Auth/Resetpassword`, { method: 'POST', name: 'POSTsendNewPaasword', body: { 'email': emailInput, 'password': passwordInput }, onSucceed: resetPasswordHandler })
            }}
          >
            Submit
          </button>
        </div>) : null
        }

        {toggleSuccessReset ?

          <h1>Password Changed successfully ✔️ </h1> : null
        }
      </div>
    </>
  )
}

export default ResetPassword;
