import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Navigate,
  useActionData,
} from "react-router-dom/dist/umd/react-router-dom.development";

function Protected({ children, showLoginPopupfn }) {
  const [isReturn, setIsReturn] = useState();
  let token = JSON.parse(localStorage.getItem("userData")).token;
  if (token) {
    fetch(
      `http://authnewsapi.runasp.net/api/v1/Auth/CheckValidationToken?token=${token}`,
      { method: "GET" }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.statusCode !== 200) {
          showLoginPopupfn(true);
          return <Navigate to="/" />;
        } else {
          console.log(jsonData);
          setIsReturn(true);
          // return  children; donot work caz .then will return promise
        }
      });
    //check token if exist in background
  } else {
    showLoginPopupfn(true);
    return <Navigate to="/" />;
  }

  if (isReturn) return children;
}

export default Protected;

