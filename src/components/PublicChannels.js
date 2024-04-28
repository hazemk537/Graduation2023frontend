import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import "../styles/publicChannels.css";
function PublicChannels() {
  const [channels, setChannels] = useState();

  useEffect(() => {
    //API Public channels
    // change channels stateto rerender the component with the new channels updated value
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (
    <>
      <h1 className="public_channels_h1">Pick Your Favourite Creater...</h1>
      <ChannelsView type="public_channels" channels={channels} />
    </>
  );
}

export default PublicChannels;

