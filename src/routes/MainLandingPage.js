
import React, { useEffect, useState } from "react";
import "../styles/MainLandingpage.css";
import NavBar from "../components/Nav_Bar";
import ContactUs from '../components/ContactUs.js'
import Login from "../components/Login";
// import ResetPassword from "./components/Reset_Password";
import CreateAccount from "../components/Create_Account";

function MainLandingPage({
  stateShowLoginPopup,
  stateshowCreateAccountPopup,
  onClickLogin,
  onClickCreateAccount,
}) {
 

  return (
    < div className="landing-page">

      {stateShowLoginPopup && !stateshowCreateAccountPopup && (
        <Login onClose={onClickLogin} onSignupClick={onClickCreateAccount} />
      )}
      {!stateShowLoginPopup && stateshowCreateAccountPopup && (
        <CreateAccount
          onClose={onClickCreateAccount}
          onSigninClick={onClickLogin}
        />
      )}

      <NavBar
        onClickLogin={onClickLogin}
        onClickCreateAccount={onClickCreateAccount}
      />

      
<div className="quote-landingPage">
<h1>Be Briefly  !</h1>
<h1>Be Brillient  !</h1>
</div>
<ContactUs/>

     
    </div>
  );
}

export default MainLandingPage;

