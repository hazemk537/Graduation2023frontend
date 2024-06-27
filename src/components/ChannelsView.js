import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";
import ChannelModal from "./ChannelModal";

function ChannelsView({ parrallelDiscover, setTriggerFetch, channels, type }) {
  const [ModalData, setModalData] = useState('')
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

        {channels.map((item, id) => (
          <ChannelCard
            parrallelDiscover={parrallelDiscover}
            setTriggerFetch={setTriggerFetch}
            setModalData={(dataFromChild) => { setModalData(dataFromChild) }}
            key={id}
            type={type}
            item={item} />
        ))}
        {ModalData && <ChannelModal setModalData={setModalData} data={ModalData} />
        }
      </div>
    );
  else {
    return (
      <div className={`gallary_items ${type}_class`}>
        {intialChannels.map((item, id) => (
          <ChannelCard key={id} type={type} item={item} />
        ))}
      </div>
    );
  }
}

export default ChannelsView;

