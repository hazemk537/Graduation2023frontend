import React, {useState } from "react";
import Nav_Bar from "./components/Nav_Bar";
import Login from "./components/Login";
import Create_Account from "./components/Create_Account";

function App () {  
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
    // To display  (Login popup)  
    const handleLoginClick = () => {
      setShowLoginPopup(true);
      document.querySelector('*').style.background = '#999'; // Change background color of the entire page
      document.querySelector('nav').style.background = '#999';
    };
    // To display  (Create account popup) 
    const handleCreateAccountClick = () => {
      setShowCreateAccountPopup(true);
      document.querySelector('*').style.background = '#999'; // Change background color of the entire page
      document.querySelector('nav').style.background = '#999';
    };

    // to close ( Login ) popup
    const handleLoginClose = () => {
      setShowLoginPopup(false);
      document.querySelector('*').style.background = ''; // Reset background color of the entire page
      document.querySelector('nav').style.background = '';
    };
    // to close (creating account) popup
    const handleSignupClose = () => {
      setShowCreateAccountPopup(false);
      document.querySelector('*').style.background = ''; // Reset background color of the entire page
    document.querySelector('nav').style.background = '';
  };
  



    return (
      <div className="App">
        <Nav_Bar onLoginClick={handleLoginClick} onCreateAccountClick={handleCreateAccountClick} />
        
        {showLoginPopup && (
          <div >
            <div >
              <Login onClose={handleLoginClose} />
            </div>
          </div>
        )}

        {showCreateAccountPopup && (
          <div >
            <div >
              <Create_Account onClose={handleSignupClose} />
            </div>
          </div>
        )}
      </div>
    );
  }

export default App;
