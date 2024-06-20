import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/subscripedChannels.css'
import Alert from "./Alert";

function SubscripedChannels() {
  const [channels, setChannels] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  //to not render success at begining

  let token = JSON.parse(localStorage.getItem('data')).token


  useEffect(() => {
    //API subscribed AUTH channels
    // change channels stateto rerender the component with the new channels updated value

    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All?PageNumber=${pageNumber}&PageSize=10`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      console.log('Subscriping ...')
      if (!response.ok) {
        console.log(response)
        //#todo if it exist 
        setAlertMessage(response.statusCode)

      }
      return response.json()

    }).then((jsonData) => {
      console.log(jsonData)

      if (jsonData.succeeded) {
        setAlertMessage(jsonData.message)
        setAlertMessage('success')
        setChannels(jsonData.data)
      }


    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })


  }, []);

  if (channels) {
    return (<>
      {alertType && <Alert alertText={alertMessage} type={alertType} />}
      <ChannelsView type="subscription_channels" channels={channels} /></>)
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

