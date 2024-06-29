import React, { useEffect, useState } from 'react';
import '../styles/common.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';
import useFetch from '../customHooks/useFetch';
import { useNavigate } from "react-router-dom";
import Spinner from './Spinner';
function SubscribedList({ GetRssArticlesById, loading }) {
    let token;
    if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
        token = JSON.parse(localStorage.getItem('data')).token;
    }

    const [jsonData, , sendRequest] = useFetch();
    const [activeChannel, setActiveChannel] = useState(null);
    const navigate = useNavigate();

    const getActiveChannelFromStorage = () => {
        const storedActiveChannel = localStorage.getItem('activeChannel');
        return storedActiveChannel ? JSON.parse(storedActiveChannel) : null;
    };

    const setActiveChannelInStorage = (channelId, channelTitle) => {
        localStorage.setItem('activeChannel', JSON.stringify({ id: channelId, title: channelTitle }));
    };

    useEffect(() => {

        sendRequest('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All', { method: 'GET', name: 'GetSubscribedList', token: token, jsonSuccessProp: 'message', jsonFailProp: 'message' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (jsonData.succeeded || jsonData.hasOwnProperty('data')) {
            const storedActiveChannel = getActiveChannelFromStorage();
            if (jsonData.data && jsonData.data.length > 0) {
                console.log('----------------------');

                if (storedActiveChannel) {
                    console.log('----------------------');

                    setActiveChannel(storedActiveChannel);
                    GetRssArticlesById(storedActiveChannel.id, storedActiveChannel.title);
                } else {
                    console.log('----------------------');
                    const firstChannel = jsonData.data[0];
                    setActiveChannel({ id: firstChannel.id, title: firstChannel.title });
                    GetRssArticlesById(firstChannel.id, firstChannel.title);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jsonData]);

    const handleChannelClick = (item) => {
        setActiveChannel({ id: item.id, title: item.title });
        GetRssArticlesById(item.id, item.title);
        setActiveChannelInStorage(item.id, item.title)
    }
    if (loading) {
        return (
            <div className="gallary_items">
                {/* Show spinner while loading */}
                <Spinner />
            </div>
        );
    } else if (jsonData.data && jsonData.data.length > 0) {
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
            <div className='No-channels'
                style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Arial',
                    height: '100vh',
                }}
            >
                <h1>No Subscriptions, Subscribe to show articles </h1>
                <button
                    onClick={() => navigate('/home/discover')}
                >
                    Discover
                </button>
            </div>
        );
    }
}

export default SubscribedList;
