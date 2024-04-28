import React, { useEffect } from "react";
import "../styles/MainLandingpage.css";
import NavBar from "../components/Nav_Bar";
import ContactUs from "../components/ContactUs.js";
import Login from "../components/Login";
import CreateAccount from "../components/Create_Account";
import { json } from "react-router-dom/dist/umd/react-router-dom.development.js";
import PublicChannels from "../components/PublicChannels.js";

function MainLandingPage({
  stateShowLoginPopup,
  stateshowCreateAccountPopup,
  onClickLogin,
  onClickCreateAccount,
}) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let payload = "";
    fetch("http://briefly.runasp.net/api/v1/Auth/GenerateRefreshToken", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((Response) => Response.json())
      .then((jsonData) => {
        console.log(jsonData);

        if (jsonData.statusCode !== 404) {
          // success means token doesnot expire
        } else {
          //get new token and refresh it in local storage
        }
      });
  });


  useEffect(()=>{

    //API consume /rss/public
  })
  return (
    <div className="landing-page">
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
        <h1>Be Brief!</h1>
        <h1>Be Brilliant!</h1>
      </div>
      
      <PublicChannels/>
      <ContactUs />

      <div className="scroll-to-top" onClick={handleScrollTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default MainLandingPage;

