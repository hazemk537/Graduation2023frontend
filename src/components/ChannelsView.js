import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";

function ChannelsView({ channels, type }) {
  const [intialChannels, setintialChannels] = useState([
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
  ]);
  if (channels)
    return (
      <div className={`gallary_items ${type}_class`}>
        {channels.map((item) => (
          <ChannelCard item={item} />
        ))}
      </div>
    );
  else {
    return (
      <div className={`gallary_items ${type}_class`}>
        {intialChannels.map((item) => (
          <ChannelCard item={item} />
        ))}
      </div>
    );
  }
}

export default ChannelsView;

