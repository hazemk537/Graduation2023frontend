import { React, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";
import ResetPassword from "./components/Reset_Password";
import Alert from "./routes/Alert";
import DiscoverView from "./routes/DiscoverView";
import FeedView from "./routes/FeedView";

// login (token and data)
// logout logic and dlt token

// fetch user data
// parse rss links
// display user data

//ai:https://getstream.io/get_started/
//3dmodel: reposition resize
//Alert component : center alert
//Alert component : autohide
// protected route :protect home cildren
//backend: add  jsonData.error if error happens
//gauth::::how to fetch data from dackend :::
// login success msg after gauth
//failed msg after gauth
//css tutorial::: https://www.youtube.com/watch?v=OXGznpKZ_sA&pp=ygUcY3NzIHlvdXR1YmUgb25lIGZyZWVjb2RlY2FtcA%3D%3D
function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);

  const ToggleLoginPopup = () => {
    setShowLoginPopup((old) => {
      if (old) {
        setShowCreateAccountPopup(false);
        return !old;
      } else {
        setShowCreateAccountPopup(false);
        return !old;
      }
    });
  };

  const ToggleSignupPopup = () => {
    setShowCreateAccountPopup((old) => {
      if (old) {
        setShowLoginPopup(false);
        return !old;
      } else {
        setShowLoginPopup(false);
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
      errorElement: <Alert alertText={"404 Page Not Found "} type="err" />,
    },
    {
      path: "/home",
      element: <HomePage />,
      children: [
        {
          path: "/home/",
        element:<FeedView />

        },

        {
          path: "/home/discover",
          element: <DiscoverView /> },
      ],
    },
    {
      path: "/Reset_Password",
      element: <ResetPassword />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

