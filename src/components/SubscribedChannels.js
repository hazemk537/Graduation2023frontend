import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/subscripedChannels.css'

function SubscripedChannels() {
  const [channels, setChannels] = useState();

  useEffect(() => {
    //API subscribed AUTH channels
    // change channels stateto rerender the component with the new channels updated value
    
    
  });

  return <ChannelsView type="subscription_channels" channels={channels} />;
}

export default SubscripedChannels;

