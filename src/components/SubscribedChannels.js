import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/subscripedChannels.css';
import Alert from "./Alert";
import useFetch from "../customHooks/useFetch";

function SubscripedChannels() {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage] = useState(false);
  const [alertType] = useState(false);
  let token;

  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }

  const [jsonData, , sendRequest] = useFetch();

  useEffect(() => {
    sendRequest(`https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All?PageNumber=${pageNumber}&PageSize=10`, { method: 'get', name: 'GETSubscribedRss', token: token });
    console.log(pageNumber);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerFetch, pageNumber]);

  if (jsonData.data) {
    return (<>
    <div className="title-subscribed-channels">    <h2>Subscribed Channels</h2>
    </div>

      {alertType && <Alert alertText={alertMessage} type={alertType} />}
      <ChannelsView
      pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setTriggerFetch={setTriggerFetch}
        type="subscription_channels"
        channels={jsonData.data} /></>)
  }
  else {
    return (
      <div className='no-sub-txt'>
        <h1>There are No Subscriptions</h1>
      </div>
    );
  }
}

export default SubscripedChannels;
