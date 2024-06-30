import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";
import Spinner from "./Spinner";
import ChannelModal from "./ChannelModal";
import Pagination from "./Pagination";
function ChannelsView({   pageNumber,setPageNumber,parrallelDiscover, setTriggerFetch, channels, type }) {
  const [ModalData, setModalData] = useState('')
  // when state of model updates scrolling behavior updates 
  // #Note_case direct_manipulate_dom
  useEffect(() => {

    const body = document.body;
    if (ModalData) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [ModalData])

  if (channels)
    return (
      <>
        {ModalData && <ChannelModal setModalData={setModalData} data={ModalData} />}

{   type  !=='public_channels'&&   <Pagination  pageNumber={pageNumber} setPageNumber={setPageNumber}/>
}
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

        </div>
      </>
    );
  else {
    return (
      <div className={`gallary_items ${type}_class`}>
        <Spinner style={{ position: 'static', height: 'auto' }} />
      </div>

    );
  }
}

export default ChannelsView;

