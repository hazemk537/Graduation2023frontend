import React from "react";
import "../styles/MainLandingpage.css";
import NavBar from "../components/Nav_Bar";
import ContactUs from '../components/ContactUs.js'
import Login from "../components/Login";
import CreateAccount from "../components/Create_Account";

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

      <ContactUs />

      
      <div className="scroll-to-top" onClick={handleScrollTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default MainLandingPage;
