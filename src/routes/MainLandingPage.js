import React, { useEffect, useState } from "react";
import "../styles/MainLandingpage.css";
import NavBar from "../components/Nav_Bar";
import ContactUs from "../components/ContactUs.js";
import Login from "../components/Login";
import CreateAccount from "../components/Create_Account";
import PublicChannels from "../components/PublicChannels.js";
import Alert from "../components/Alert.js";
import { useSelector,useDispatch } from "react-redux";

function MainLandingPage({
  stateShowLoginPopup,
  stateshowCreateAccountPopup,
  onClickLogin,
  onClickCreateAccount,
}) {

  const [showWelcomeModal, setWelcomeModal] = useState(false)
  const [showErrModal, setShowErrModal] = useState(false)
  const [errContent, setErrContent] = useState('')
  let notifySliceState=useSelector((state)=>state.notifyState)
  let dispatch=useDispatch()

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let data = JSON.parse(localStorage.getItem("data"));



  useEffect(() => {
    let payload = "";
    if (data&&data.hasOwnProperty('token')) 
      //this means we have data field in the local storage
      {
      fetch("https://BrieflyNews.runasp.net/api/v1/Auth/GenerateRefreshToken", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((Response) => Response.json())
        .then((jsonData) => {
          console.log('Validate Token ... ');
          console.log(jsonData);

          if (jsonData.statusCode === 404) {

            //get new token and refresh it in local storage


          }
        }).catch((err) => {
          setErrContent(err.message)//err is object  
       
          setShowErrModal(true)
        })
    }
    // welcoming scrren

    console.log('welcoming screen....')
    console.log(JSON.parse(localStorage.getItem("welcomeScreen")))
    if (JSON.parse(localStorage.getItem("welcomeScreen")) !== false) {
      setWelcomeModal(true)
    }



  });




  return (
    <div className="landing-page">
      {/* {notifySliceState && <Alert type={notifySliceState.type} alertText={notifySliceState} />} */}

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
          <h1>Be Brief!</h1>
          <h1>Be Brilliant!</h1>
        </div>
      </div>
      <PublicChannels />
      <ContactUs />

      <div className="scroll-to-top" onClick={handleScrollTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default MainLandingPage;

