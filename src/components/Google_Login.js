
import React, { useState } from "react";
// import google from "../images/google.svg";
import { GoogleLogin } from "@react-oauth/google";
import Alert from "../routes/Alert";

const GLogin = () => {
  const [LoginSuccess,setLoginSuccess]=useState()

  return (
    <>
     { LoginSuccess && <Alert alertText={LoginSuccess} type="success"/>}

    <div className="signin-container">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          setLoginSuccess("Login Success!")
          
          
        }}
        onError={() => {
          console.log("Login Failed");
          
        }}
        />
      ;
    </div>
        </>
  );
};

export default GLogin;
