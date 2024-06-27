import React, { useEffect, useState } from 'react'
import '../styles/common.css'
import useFetch from '../customHooks/useFetch'
import { current } from '@reduxjs/toolkit'
 import '../styles/common.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';
  


function SubscribedList({ GetRssArticlesById }) {
    console.log(`🖌️ subscribedList`) // #debug 

    let token
    // first cond to avoid bad data:undefined ,value,second avoid if it data entry not exist in localstorage
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
  
      token = JSON.parse(localStorage.getItem('data')).token
  
    }
    const [jsonData, setData, sendRequest] = useFetch()



    useEffect(() => {

        sendRequest('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All', {   method: 'get', name: 'GetSubscibedList', token: token })

    }, [])

    useEffect(() => {
        if (activeChannel !== null) {
            setActiveChannelInStorage(activeChannel);
        }
    }, [activeChannel]);

    if (jsonData.data) {
        return (
            <div>
                <div className="verticalCards">
                    {channels.map((item, idx) => (
                        <div
                            className={`channelsHover ${activeChannel === item.id ? 'activeChannel' : ''}`}
                            onClick={() => {
                                setActiveChannel(item.id);
                                GetRssArticles(item.id);
                            }}
                            key={idx}
                        >
     <div>
                                <img
                                    className="channelImage"
                                    src={item.image}
                                    alt=""
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = briefimg;
                                    }}
                                />
                            </div>
                            <p style={{ fontSize: '1rem' }}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'whitesmoke',
                    fontFamily: 'fantasy',
                }}
            >
                <h1>No Subscriptions</h1>
            </div>
        );
    }
}

export default SubscribedList;
