import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLandingPage from "./routes/MainLandingPage";
import Err from "./routes/Err";
import HomePage from "./routes/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLandingPage />,
    errorElement:<Err/>
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

