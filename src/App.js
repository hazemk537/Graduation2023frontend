import  {React, useState } from "react";
import { RouterProvider , createBrowserRouter } from "react-router-dom";
// #todo : try removing the used components and leave css
import Err from "./routes/Err"
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage"

import Login from "./components/Login";
import ResetPassword from "./components/Reset_Password";
import CreateAccount from "./components/Create_Account";
 function App () {
  
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);

   
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
     const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLandingPage onLoginClick={showLoginPopup} onClickCreateAccount={showCreateAccountPopup} />,
        errorElement: <Err />
      },
      {
        path: "home",
        element: <HomePage onClickLogout={setShowLoginPopup} />
      },
      {
        path: "login",
        element: <Login onClose={handleLoginClose} />
      },
      {
        path: "create_account",
        element: <CreateAccount onClose={handleSignupClose} />
      },
    
      {
    
        path:"Reset_Password",
        element:<ResetPassword/>
      }
    ]);
    
    return (
    <RouterProvider router={router}/>
      
    );
  }


export default App;


