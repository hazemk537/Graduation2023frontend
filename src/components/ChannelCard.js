import React, { useState } from "react";
import '../styles/ChannelCard.css'
import ModalArticle from "./ModalArticle";
function ChannelCard({ type, item }) {
  const [modalVisible, setModalVisible] = useState(false)

  const [Subscribed, setSubscribed] = useState(false);

  const subscribeHandler = () => {
    // #todo_1 left state up
  };
  const unsubscribeHandler = () => {
    // #todo_1 left state up
  };
  const ViewChannelInfo = (id) => {
    //API
    console.log(id);
  };

  return (
    <div className="gallary_item" key={item.id} onClick={() => {
        //allow one articel modal
      setModalVisible((old)=>!old)
    }}>
      <div

        key={item.id}
        className="receive_click_div_helper"
        onClick={() => {
          ViewChannelInfo(item.id);
        }}
      ></div>
      <div className="gallary_img_wrapper">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="gallary_item_details">
        <h2 className="gallary_item_headding">{item.title}</h2>
        <p className="gallary_item_description">{item.description}</p>
      </div>
      <div className="gallary_item_actions">
        {type !== "public_channels" && <button className="subscribe_btn" onClick={subscribeHandler}>
          {type === "subscription_channels" ? "Unsubscribe" : "subscribe"}
        </button>}
      </div>

      {modalVisible && <ModalArticle data={item} />
      }    </div>

  );
}

export default ChannelCard;

