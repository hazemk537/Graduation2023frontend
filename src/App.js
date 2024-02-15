import { React, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Err from "./routes/Err";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";

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
      errorElement: <Err />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;

