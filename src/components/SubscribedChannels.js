import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/subscripedChannels.css'
import Alert from "./Alert";
import useFetch from "../customHooks/useFetch";

function SubscripedChannels() {
  const [triggerFetch, setTriggerFetch] = useState(false)
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  //to not render success at begining
  let token
  if (localStorage.getItem("data") !== 'undefined') {

    token = JSON.parse(localStorage.getItem('data')).token

  }

  const [jsonData, setData, sendRequest] = useFetch()
  useEffect(() => {

    sendRequest(`https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All?PageNumber=${pageNumber}&PageSize=10`, { method: 'get', name: 'GnewsGetSubscriptionsAPI', token: token })
  }, [triggerFetch])


  if (jsonData.data) {
    return (<>
      {alertType && <Alert alertText={alertMessage} type={alertType} />}
      <ChannelsView
        setTriggerFetch={setTriggerFetch}
        type="subscription_channels"
        channels={jsonData.data} /></>)
  }
  else {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundcolor: 'whitesmoke',
        fontFamily: 'fantasy'
      }}>
        <h1>There are No Subscriptions</h1>
      </div>
    )
  }
}


export default SubscripedChannels;

