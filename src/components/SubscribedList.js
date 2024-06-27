import React, { useEffect, useState } from 'react'
import '../styles/common.css'
import useFetch from '../customHooks/useFetch'

import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';


function SubscribedList({ GetRssArticlesById }) {
    console.log(`🖌️ subscribedList`) // #debug 
    const [activeChannel, setActiveChannel] = useState(null)

    let token
    // first cond to avoid bad data:undefined ,value,second avoid if it data entry not exist in localstorage
    if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {

        token = JSON.parse(localStorage.getItem('data')).token

    }
    const [jsonData, setData, sendRequest] = useFetch()



    useEffect(() => {
        sendRequest('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All',
            { method: 'get', name: 'GetSubscibedList', token: token })

        //set activeChannel state

        if (localStorage.getItem('activeChannel')!==null&&localStorage.getItem('activeChannel')!==undefined)
            setActiveChannel(null)
        else {

            console.log('😃😃😃😃');
          setActiveChannel(localStorage.getItem('activeChannel'))
        }
    }, [])



    if (jsonData.data) {
        return (
            <div>
                <div className="verticalCards">
                    {jsonData.data.map((item, idx) => (
                        <div
                            className={`channelsHover ${activeChannel === item.id ? 'activeChannel' : ''}`}
                            onClick={() => {
                                localStorage.setItem('activeChannel',item.id)
                                setActiveChannel(item.id);
                                GetRssArticlesById(item.id);
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
