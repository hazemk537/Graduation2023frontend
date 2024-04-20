import React from 'react'
import { Link } from 'react-router-dom'
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../styles/Reset_Password.css"

 function ResetPassword() {
    return (

        <div className="reset_container">
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/" class="ress-pass">

                <div className="input-field">
                    <FontAwesomeIcon icon={faAt} beat  id="awesome1" style={{ color: "#0740b0" }} />
                    <input type="email" required placeholder="Email"  name="email" />
                </div>

                <div>
                    <button id="sub_btn" type="submit"> Send password</button>
                </div>
            </form>
            <div >
                <p><Link className="Link" to="/">Remembered my password</Link></p>
            </div>
        </div>
        </div>
    )
}

export default ResetPassword;