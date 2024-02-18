import { React, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";
import ResetPassword from './components/Reset_Password';
import Alert from "./routes/Alert";



function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);

  const ToggleLoginPopup = () => {
    setShowLoginPopup((old) => {
      if (old) {
        setShowCreateAccountPopup(false)
        return !old;
      } else {
        setShowCreateAccountPopup(false)
        return !old;
      }
    });

  };

  const ToggleSignupPopup = () => {
    setShowCreateAccountPopup((old) => {
      if (old) {
        setShowLoginPopup(false)
        return !old;
      } else {
        setShowLoginPopup(false)
        return !old;
      }
    });

  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLandingPage
          stateShowLoginPopup={showLoginPopup}
          stateshowCreateAccountPopup={showCreateAccountPopup}
          onClickLogin={ToggleLoginPopup}
          onClickCreateAccount={ToggleSignupPopup}
        />
      ),
      errorElement: <Alert alertText={"404 Page Not Found "} type="err"/>,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/Reset_Password",
      element: <ResetPassword />,
    },
  ]);
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;

