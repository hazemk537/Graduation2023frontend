/* eslint-disable */

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ChannelCard from "./components/ChannelCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
      

    </React.StrictMode>
);

