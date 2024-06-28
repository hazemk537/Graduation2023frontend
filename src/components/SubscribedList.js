import React, { useEffect, useState } from 'react';
import '../styles/common.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';
import useFetch from '../customHooks/useFetch';

function SubscribedList({ GetRssArticlesById }) {
    console.log(`🖌️ subscribedList`); // #debug 

    let token;
    // First condition to avoid bad data: undefined value, second to avoid if the data entry does not exist in localStorage
    if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
        token = JSON.parse(localStorage.getItem('data')).token;
    }

    const [jsonData, setData, sendRequest] = useFetch();
    const [activeChannel, setActiveChannel] = useState(null); // State to track active channel ID
    const [alertMessage, setAlertMessage] = useState(false);
    const [alertType, setAlertType] = useState(false);

    const getActiveChannelFromStorage = () => {
        const storedActiveChannel = localStorage.getItem('activeChannel');
        return storedActiveChannel ? parseInt(storedActiveChannel) : null;
    };

    const setActiveChannelInStorage = (channelId) => {
        localStorage.setItem('activeChannel', JSON.stringify({ id: `${jsonData.data[0].id}`, title: `${jsonData.data[0].title}` }));
    };

    useEffect(() => {
        sendRequest('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All', { method: 'GET', name: 'GetSubscribedList', token: token ,jsonSuccessProp:'message',jsonFailProp:'message'});
    }, []);

    useEffect(() => {
        if (activeChannel !== null) {
            setActiveChannelInStorage(activeChannel);
        }
    }, [activeChannel]);

    useEffect(() => {
        if (jsonData.succeeded || jsonData.hasOwnProperty('data')) {
            setAlertMessage(jsonData.message);
            setAlertType('success');

            const storedActiveChannel = getActiveChannelFromStorage();
            if (jsonData.data && jsonData.data.length > 0) {
                if (storedActiveChannel) {
                    setActiveChannel(storedActiveChannel);
                    GetRssArticlesById(storedActiveChannel.id);
                } else {
                    setActiveChannel({ id: `${jsonData.data[0].id}`, title: `${jsonData.data[0].title}` });
                    GetRssArticlesById(jsonData.data[0].id);
                }
            }
        } else {
            setAlertMessage('Failed to fetch subscriptions');
            setAlertType('error');
        }
    }, [jsonData]);

    if (jsonData.data && jsonData.data.length > 0) {
        return (
            <div>
                <div className="verticalCards">
                    {jsonData.data.map((item, idx) => (
                        <div
                            className={`channelsHover ${activeChannel === item.id ? 'activeChannel' : ''}`}
                            onClick={() => {
                                setActiveChannel({ id: `${jsonData.data[0].id}`, title: `${jsonData.data[0].title}` });

                                GetRssArticlesById(item.id, item.title); // Corrected function call
                            }}
                            key={idx}
                        >
                            <div className='channelImageBox'>
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
                            <div className='channelTitleBox'>
                            <p className='channelTitle'>{item.title}</p>
                            </div>
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
