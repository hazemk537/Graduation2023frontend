import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";
import ChannelModal from "./ChannelModal";
import Spinner from "./Spinner";

function ChannelsView({ parrallelDiscover, setTriggerFetch, channels, type }) {
  const [ModalData, setModalData] = useState('')
  
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
       <Spinner style={{position:'static',height:'auto'}} />
      </div>
    );
  }
}

export default ChannelsView;

