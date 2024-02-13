import  {React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav_Bar from "./components/Nav_Bar";
import Login from "./components/Login";
import Create_Account from "./components/Create_Account";
import Reset_Password from './components/Reset_Password';

 function App () {
  
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);

    const handleLoginClick = () => {
      setShowLoginPopup(true);
      document.querySelector('*').style.background = '#999'; // Change background color of the entire page
      document.querySelector('nav').style.background = '#999';
    };

    const handleCreateAccountClick = () => {
      setShowCreateAccountPopup(true);
      document.querySelector('*').style.background = '#999'; // Change background color of the entire page
      document.querySelector('nav').style.background = '#999';
    };

    const handleLoginClose = () => {
      setShowLoginPopup(false);
      document.querySelector('*').style.background = ''; // Reset background color of the entire page
      document.querySelector('nav').style.background = '';
    };

    const handleSignupClose = () => {
      setShowCreateAccountPopup(false);
      document.querySelector('*').style.background = ''; // Reset background color of the entire page
      document.querySelector('nav').style.background = '';
    };

    return (
      <BrowserRouter>
        <header className="App">
          <div><Nav_Bar onLoginClick={handleLoginClick} onCreateAccountClick={handleCreateAccountClick} /></div>

          <Routes>
            <Route path="/Login" element={<Login onClose={handleLoginClose} />} />
            <Route path="/Create_Account" element={<Create_Account onClose={handleSignupClose} />} />
            <Route path="/Reset_Password" element={<Reset_Password />} />
          </Routes>
        </header>

        {/* Popups */}
        {showLoginPopup && <Login onClose={handleLoginClose} />}
        {showCreateAccountPopup && <Create_Account onClose={handleSignupClose} />}
      </BrowserRouter>
    );
  }


export default App;


