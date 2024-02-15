import { React, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ConsoleErrorViewer from "./routes/Err";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";
import ResetPassword from './components/Reset_Password';

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
      errorElement: <ConsoleErrorViewer />,
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

