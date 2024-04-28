import React, { useEffect, useState } from "react";
// import google from "../images/google.svg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Alert from "../routes/Alert";
import { json } from "react-router-dom/dist/umd/react-router-dom.development";
const GLogin = () => {
  const [LoginSuccess, setLoginSuccess] = useState();
  const [gToken, setGtoken] = useState();

  const clienid =
    "65470565009-pjolbjeuuds1s29b764lgv86vo0ova6i.apps.googleusercontent.com";
  return (
    <>
      {LoginSuccess && <Alert alertText={LoginSuccess} type="success" />}

      <div className="signin-container">
        <GoogleOAuthProvider clientId={clienid}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // console.log();
              // setGtoken(credentialResponse.credential);

              fetch(
                `http://briefly.runasp.net/api/v1/Auth/Login-Google?tokenId=${credentialResponse.credential}`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body:JSON.stringify({'test':1})
                }
              )
                .then((response) => response.json())
                .then((jsonData) => {
                  console.log(jsonData);
                });
              setLoginSuccess("Login Success!");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default GLogin;

