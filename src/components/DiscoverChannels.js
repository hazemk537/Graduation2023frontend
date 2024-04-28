import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/discoverChannel.css'
function DiscoverChannels() {
  const [channels, setChannels] = useState();

  useEffect(() => {
    //API discover AUTH channels
    // change channels stateto rerender the component with the new channels updated value
    // fetch("https://dummyjson.com/products/1")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  });

  return <ChannelsView type="discover_channels" channels={channels} />;
}

export default DiscoverChannels;

