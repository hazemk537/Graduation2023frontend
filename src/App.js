import  {React, useState } from "react";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Nav_Bar from "./components/Nav_Bar";
import Err from './routes/Err'
import HomePage from "./routes/HomePage"
import Login from "./components/Login";
import Create_Account from "./components/Create_Account";
// #todo : try removing the used components and leave css
import Reset_Password from './components/Reset_Password';
import MainLandingPage from "./routes/MainLandingPage";
import test from "./components/test";
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
     const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLandingPage onLoginClick={showLoginPopup} onClickCreateAccount={showCreateAccountPopup} />,
        errorElement: <Err />,
      },
      {
        path: "home",
        element: <HomePage onClickLogout={setShowLoginPopup} />,
      },
      ,
      {
        path: "login",
        element: <Login onClose={handleLoginClose} />,
      },
      {
        path: "create_account",
        element: <Create_Account onClose={handleSignupClose} />,
      },
    
      {
    
        path:"Reset_Password",
        element:<Reset_Password/>


      }
,
      {
    
        path:"Features" , 
        element:<test/>

        
      }




    ]);
    
    return (
    <RouterProvider router={router}/>
      
    );
  }


export default App;


