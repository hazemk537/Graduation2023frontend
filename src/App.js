import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLandingPage from "./routes/MainLandingPage";
import HomePage from "./routes/HomePage";
import ResetPassword from "./components/Reset_Password";
// import Alert from "./components/Alert";
import AddFeed from "./routes/AddFeed";
import "./index.css";
import PricingPage from "./routes/PricingPage";
import Protected from "./components/Protected";
import SubscripedChannels from "./components/SubscribedChannels";
import DiscoverChannels from "./components/DiscoverChannels";
import UserArticles from "./components/UserArticles";
import Notfound from "./components/Error404";

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
      errorElement: (
        <Notfound/>
      ),
    },
    {
      path: "/home",
      element: (
        <Protected showLoginPopupfn={setShowLoginPopup}>
          <HomePage />
        </Protected>
      ),
      children: [
        {
          path: "/home/subscriptions",
          element: <SubscripedChannels />,
        },
        {
          path: "/home",
          element: <UserArticles />,
        },
        {
          path: "/home/addFeed",
          element: <AddFeed />,
        },
        {
          path: "/home/discover",
          element: <DiscoverChannels />,
        },
      ],
    },
    {
      path: "/Reset_Password",
      element: <ResetPassword />,
    },
    {
      path: "/pricing",
      element: <PricingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
