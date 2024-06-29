import React, { useEffect, useState } from "react";
import "../styles/MainLandingpage.css";
import NavBar from "../components/Nav_Bar";
// import ContactUs from "../components/ContactUs.js";
import Login from "../components/Login";
import CreateAccount from "../components/Create_Account";
import PublicChannels from "../components/PublicChannels.js";
import Alert from "../components/Alert.js";
import useFetch from "../customHooks/useFetch.js";
import { useSelector } from "react-redux";

function MainLandingPage({
  stateShowLoginPopup,
  stateshowCreateAccountPopup,
  onClickLogin,
  onClickCreateAccount,
}) {

  const [showWelcomeModal, setWelcomeModal] = useState(false)
  const [showErrModal,] = useState(false)
  const [errContent,] = useState('')
  let notifySliceState = useSelector((state) => state.notifyState)


  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



const [jsonData, , sendRequest] = useFetch()
console.log(jsonData);
useEffect(() => {
  //first step to check token,to have one
  //#Note_Case_only_strict_format only this is allowed by API, if user changed in localStorage 

  // first cond to avoid bad data:undefined ,value,second avoid if it data entry not exist in localstorage
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {


    let TokenData = {
      token: JSON.parse(localStorage.getItem("data"))?.token,
      refreshtoken: JSON.parse(localStorage.getItem("data"))?.refreshToken?.refreshTokenString
    }


    if (TokenData.token && TokenData.refreshToken) {

      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Auth/GenerateRefreshToken`, { method: 'POST', name: 'GenerateRefreshToken', body: TokenData, onSucceed: handleExpiredToken })

    }
  }
}, [])

function handleExpiredToken() {

  localStorage.setItem('data', JSON.stringify(jsonData.data))



}

return (
  <div className="landing-page">
    {notifySliceState.message.payload && <Alert type={notifySliceState.type} alertText={notifySliceState.message.payload} />}

    {stateShowLoginPopup && !stateshowCreateAccountPopup && (
      <Login onClose={onClickLogin} onSignupClick={onClickCreateAccount} />
    )}
    {!stateShowLoginPopup && stateshowCreateAccountPopup && (
      <CreateAccount
        onClose={onClickCreateAccount}
        onSigninClick={onClickLogin}
      />
    )}
    {showWelcomeModal && <Alert onClose={() => {
      setWelcomeModal(false)
      localStorage.setItem('welcomeScreen', 'false')
    }
    } type='welcome' alertText='please, login/signup ' />}
    {showErrModal && <Alert type='err' alertText={errContent} />}

    <NavBar
      onClickLogin={onClickLogin}
      onClickCreateAccount={onClickCreateAccount}
    />
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="quote-landingPage">
        <h1>Be Briefed!</h1>
        <h1>Be Brilliant!</h1>
      </div>
    </div>
    <PublicChannels />
    {/* <ContactUs /> */}

    <div className="scroll-to-top" onClick={handleScrollTop}>
      <i className="fa fa-arrow-up"></i>
    </div>
  </div>
)
}

export default MainLandingPage;

