import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";

function ChannelsView({ channels, type }) {
  const [intialChannels, setintialChannels] = useState([
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
    { image: "", description: "", title: "", id: "" },
  ]);

  
  if (channels)
    return (
      <div className={`gallary_items ${type}_class`}>
        {channels.map((item,id) => (
          <ChannelCard key={id}  type={type} item={item} />
        ))}
      </div>
    );
  else {
    return (
      <div className={`gallary_items ${type}_class`}>
        {intialChannels.map((item,id) => (
          <ChannelCard key={id} type={type} item={item} />
        ))}
      </div>
    );
  }
}

export default ChannelsView;

