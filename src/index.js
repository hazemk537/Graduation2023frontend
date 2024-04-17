/* eslint-disable */

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clienid =
  "938401369733-f3mj4an80f1e4l5fqvku6rcjr29dm22s.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={clienid}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

