import React, { useEffect, useState } from 'react';
import '../styles/common.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';
import useFetch from '../customHooks/useFetch';

function SubscribedList({ GetRssArticlesById }) {
    console.log(`🖌️ subscribedList`); // #debug 

    let token;
    if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
        token = JSON.parse(localStorage.getItem('data')).token;
    }

    const [jsonData, setData, sendRequest] = useFetch();
    const [activeChannel, setActiveChannel] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const getActiveChannelFromStorage = () => {
        const storedActiveChannel = localStorage.getItem('activeChannel');
        return storedActiveChannel ? JSON.parse(storedActiveChannel) : null;
    };

    const setActiveChannelInStorage = (channelId, channelTitle) => {
        localStorage.setItem('activeChannel', JSON.stringify({ id: channelId, title: channelTitle }));
    };

    useEffect(() => {
        sendRequest('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All', { method: 'GET', name: 'GetSubscribedList', token: token });
    }, []);

    useEffect(() => {
        if (activeChannel !== null) {
            setActiveChannelInStorage(activeChannel.id, activeChannel.title);
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
                    GetRssArticlesById(storedActiveChannel.id, storedActiveChannel.title);
                } else {
                    // Set the active channel to the first channel in the list
                    const firstChannel = jsonData.data[0];
                    setActiveChannel({ id: firstChannel.id, title: firstChannel.title });
                    GetRssArticlesById(firstChannel.id, firstChannel.title);
                }
            }
        } else {
            setAlertMessage('Failed to fetch subscriptions');
            setAlertType('error');
        }
    }, [jsonData]);

    const handleChannelClick = (item) => {
        setActiveChannel({ id: item.id, title: item.title });
        GetRssArticlesById(item.id, item.title);
    };

    if (jsonData.data && jsonData.data.length > 0) {
        return (
            <div>
                <div className="verticalCards">
                    {jsonData.data.map((item, idx) => (
                        <div
                            className={`channelsHover ${activeChannel && activeChannel.id === item.id ? 'activeChannel' : ''}`}
                            onClick={() => handleChannelClick(item)}
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
                    height: '100vh', // Ensure it takes up full height of viewport
                }}
            >
                <h1>No Subscriptions</h1>
            </div>
        );
    }
}

export default SubscribedList;
