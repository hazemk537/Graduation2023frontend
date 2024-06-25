import React, { useEffect, useState } from "react";
import {
  Navigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import useFetch from "../customHooks/useFetch";

function Protected({ children, showLoginPopupfn }) {
  const [jsonData, , sendRequest] = useFetch()
  let token
  // handle json.parse(undefined),throw err
  if (localStorage.getItem("data") !== 'undefined') {

    let data = JSON.parse(localStorage.getItem("data"))
    token = data.token

  }


  useEffect(() => {

    sendRequest(`https://BrieflyNews.runasp.net/api/v1/Auth/CheckValidationToken?token=${token}`, { method: 'POST', name: 'POSTcheckToken', onSuccess: handleCorrectToken, onFailed: handleBadToken })

  }, [])





  function handleCorrectToken() {
    return (children);
  }

  function handleBadToken() {
    return ({children});
  }

  //solve fncs not work
    return children


}

export default Protected;

