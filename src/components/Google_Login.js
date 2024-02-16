import React from "react";
// import google from "../images/google.svg";
import { GoogleLogin } from "@react-oauth/google";

const GLogin = () => {
  

  return (
    <div className="signin-container">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

export default GLogin;
