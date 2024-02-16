import { React, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ConsoleErrorViewer from "./routes/Err";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";
import ResetPassword from './components/Reset_Password';

function App() {
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
    ]);
    
    return (
    <RouterProvider router={router}/>
      
    );
  }


export default App;

