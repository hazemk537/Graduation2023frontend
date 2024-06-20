import React, { useEffect, useState } from "react";
import '../styles/ChannelCard.css'
import ModalArticle from "./ModalArticle";
function ChannelCard({ type, item }) {
  const [modalVisible, setModalVisible] = useState(false)

  const [Subscribed, setSubscribed] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  const [, setSelectedChannel] = useState();

  //to not render success at begining

  let token = JSON.parse(localStorage.getItem('data')).token



  const subscribeHandler = (id) => {
    // setSelectedChannel(id) no gurantee that the fetch will sendrequest with the value after update
    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/RssUserSubscribe/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }, method: 'POST'
    }).then((response) => {
      console.log('Subscriping ...')
      if (!response.ok) {
        console.log(response)
        //#todo if it exist 
        setAlertMessage(response.statusCode)

      }
      return response.json()

    }).then((jsonData) => {
      console.log(jsonData)
      if (jsonData.succeeded){
            setAlertMessage(jsonData.message)
            setAlertMessage('success')
      }
      else{
        setAlertMessage(jsonData.message)
        setAlertMessage('error')
      }



    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })

  };
  const unsubscribeHandler = (id) => {
    // setSelectedChannel(id) no gurantee that the fetch will sendrequest with the value after update
    console.log(id)
    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/RssUserUnSubscribe/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }, method: 'POST'
    }).then((response) => {
      console.log('unSubscriping ...')
      if (!response.ok) {
        console.log(response)
        //#todo if it exist 
        setAlertMessage(response.statusCode)

      }
      return response.json()

    }).then((jsonData) => {
      console.log(jsonData)
      if (jsonData.succeeded){
            setAlertMessage(jsonData.message)
            setAlertMessage('success')
      }
      else{
        setAlertMessage(jsonData.message)
        setAlertMessage('error')
      }



    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })

  };
  const ViewChannelInfo = (id) => {
    //API
    console.log(id);
  };

  return (
    <div className="gallary_item" key={item.id} onClick={() => {
      //allow one articel modal
      setModalVisible((old) => !old)
    }}>
      <div

        key={item.id}
        className="receive_click_div_helper"
        onClick={() => {
          ViewChannelInfo(item.id);
        }}
      ></div>
      <div className="gallary_img_wrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="gallary_item_details">
        <h2 className="gallary_item_headding">{item.title}</h2>
        <p className="gallary_item_description">{item.description}</p>
      </div>
      <div className="gallary_item_actions">
        {type === "subscription_channels" && <button className="subscribe_btn" onClick={unsubscribeHandler.bind(this, item.id)}>
          UnFollow
        </button>}
        {type === "discover_channels" && <button className="subscribe_btn" onClick={subscribeHandler.bind(this, item.id)}>
          Follow
        </button>}
      </div>

      {modalVisible && <ModalArticle data={item} />
      }    </div>

  );
}

export default ChannelCard;

