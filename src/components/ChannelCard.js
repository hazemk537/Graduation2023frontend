import React, { useEffect, useState } from "react";
import '../styles/ChannelCard.css'
import ModalArticle from "./ModalArticle";
// function ChannelCard({GetSubscriptions,setModalData,key, type, item }) {
function ChannelCard({ parrallelDiscover, GetSubscriptions, setModalData, key, type, item }) {


  const [Subscribed, setSubscribed] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  const [, setSelectedChannel] = useState();

  //to not render success at begining

  let token = JSON.parse(localStorage.getItem('data')).token



  const subscribeHandler = (resolve, id) => {
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
      if (jsonData.succeeded) {
        setAlertMessage(jsonData.message)
        setAlertMessage('success')
        resolve()

      }
      else {
        setAlertMessage(jsonData.message)
        setAlertMessage('error')
      }



    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })

  };
  const unsubscribeHandler = (resolve, id) => {
    // setSelectedChannel(id) no gurantee that the fetch will sendrequest with the value after update
    console.log(id)
    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/RssUserUnSubscribe/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }, method: 'POST'
    }).then((response) => {
      console.log(' response ...')
      if (!response.ok) {

        console.log('GetUnSubscriping !response.ok...')

        console.log(response)
        //#todo if it exist 
        setAlertMessage(response.statusCode)

      }
      else {

        console.log('GetUnSubscriping response.ok...')
      }
      return response.json()

    }).then((jsonData) => {
      if (jsonData.succeeded) {
        console.log('GetUnSubscriping jsonData.succeeded')
        setAlertMessage(jsonData.message)
        setAlertMessage('success')
        resolve()
      }
      else {
        console.log('GetUnSubscriping !jsonData.succeeded')

        setAlertMessage(jsonData.message)
        setAlertMessage('error')
      }



    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })

  };


  return (
    <div className="gallary_item" key={item.id} onClick={() => {
      //allow one articel modal
      // setModalData(item)
    }}>

      <div className="gallary_img_wrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="gallary_item_details">
        <h2 className="gallary_item_headding">{item.title}</h2>
        <p className="gallary_item_description">{item.description}</p>
      </div>
      <div className="gallary_item_actions">



        {type === "subscription_channels" &&
          <button className="subscribe_btn" onClick={
            () => {
              //   //1. send api to unsubscribe
              // unsubscribeHandler(item.id)
              // //2. then remove card from ui
              // GetSubscriptions()

              new Promise((resolve, reject) => {
                unsubscribeHandler(resolve, item.id)
                console.log('bad')


              }).then(() => {
                GetSubscriptions()
              })


            }

          }>
            UnFollow
          </button>}

        {type === "discover_channels" && item.subscribed ? <button className="subscribe_btn" onClick={() => {
          new Promise((resolve, reject) => {
            unsubscribeHandler(resolve, item.id)//resolve inside it

          }).then(() => {
            parrallelDiscover()
          })
        }}>
          UnFollow
        </button>:null }
        {!item.subscribed && type === "discover_channels" && <button className="subscribe_btn" onClick={() => {
          new Promise((resolve, reject) => {
            subscribeHandler(resolve, item.id)//resolve inside it

          }).then(() => {
            parrallelDiscover()
          })

        }}>
          Follow
        </button>}
      </div>
      {/* we cannot add model here, this will make a model per channel ,we need only one,so put on parent */}
    </div>

  );
}

export default ChannelCard;

