import React, { useEffect, useState } from "react";
import '../styles/ChannelCard.css';
import ModalArticle from "./ChannelModal";
import briefimg from  '../assets/Eo_circle_red_white_letter-b.svg';

function ChannelCard({ parrallelDiscover, GetSubscriptions, setModalData, key, type, item }) {
  const [Subscribed, setSubscribed] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  const [, setSelectedChannel] = useState();

  const getToken = () => {
    try {
      const storedData = localStorage.getItem('data');
      if (!storedData) {
        return null;
      }
      const parsedData = JSON.parse(storedData);
      if (!parsedData.token) {
        return null;
      }
      return parsedData.token;
    } catch (error) {
      console.error('Error parsing localStorage data', error);
      return null;
    }
  };

  const token = getToken();

  const subscribeHandler = (resolve, id) => {
    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/RssUserSubscribe/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }, method: 'POST'
    }).then((response) => {
      console.log('Subscribing ...');
      if (!response.ok) {
        console.log(response);
        setAlertMessage(response.status);
        setAlertType('error');
      }
      return response.json();
    }).then((jsonData) => {
      console.log(jsonData);
      if (jsonData.succeeded) {
        setAlertMessage(jsonData.message);
        setAlertType('success');
        resolve();
      } else {
        setAlertMessage(jsonData.message);
        setAlertType('error');
      }
    }).catch((err) => {
      setAlertMessage(err.message);
      setAlertType('error');
    });
  };

  const unsubscribeHandler = (resolve, id) => {
    console.log(id);
    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/RssUserUnSubscribe/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }, method: 'POST'
    }).then((response) => {
      console.log('Unsubscribing ...');
      if (!response.ok) {
        console.log('GetUnSubscribing !response.ok...');
        console.log(response);
        setAlertMessage(response.status);
        setAlertType('error');
      } else {
        console.log('GetUnSubscribing response.ok...');
      }
      return response.json();
    }).then((jsonData) => {
      if (jsonData.succeeded) {
        console.log('GetUnSubscribing jsonData.succeeded');
        setAlertMessage(jsonData.message);
        setAlertType('success');
        resolve();
      } else {
        console.log('GetUnSubscribing !jsonData.succeeded');
        setAlertMessage(jsonData.message);
        setAlertType('error');
      }
    }).catch((err) => {
      setAlertMessage(err.message);
      setAlertType('error');
    });
  };

  return (
    <div>
      <div className="gallary_item"
        key={item.id}
        onClick={() => {
          setModalData(item)
        }}>
        <div className="gallary_img_wrapper">
          <img 
            src={item.image} 
            alt='' 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = briefimg;
            }} 
          />
        </div>
        <div className="gallary_item_details">
          <h2 className="gallary_item_headding">{item.title}</h2>
          <p className="gallary_item_description">{item.description}</p>
        </div>
      </div>
      <div className="gallary_item_actions">
        {type === "subscription_channels" &&
          <button className="subscribe_btn" onClick={() => {
            new Promise((resolve, reject) => {
              unsubscribeHandler(resolve, item.id);
            }).then(() => {
              GetSubscriptions();
            });
          }}>
            UnFollow
          </button>
        }
        {type === "discover_channels" && item.subscribed ?
          <button className="subscribe_btn" onClick={() => {
            new Promise((resolve, reject) => {
              unsubscribeHandler(resolve, item.id);
            }).then(() => {
              parrallelDiscover();
            });
          }}>
            UnFollow
          </button>
          : null
        }
        {!item.subscribed && type === "discover_channels" &&
          <button className="subscribe_btn" onClick={() => {
            new Promise((resolve, reject) => {
              subscribeHandler(resolve, item.id);
            }).then(() => {
              parrallelDiscover();
            });
          }}>
            Follow
          </button>
        }
      </div>
    </div>
  );
}

export default ChannelCard;
