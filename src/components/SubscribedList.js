import React, { useEffect, useState } from 'react';
import '../styles/common.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';

function SubscribedList({ GetRssArticles }) {
    const [channels, setChannels] = useState();
    const [activeChannel, setActiveChannel] = useState(null); // State to track active channel ID

    const [alertMessage, setAlertMessage] = useState(false);
    const [alertType, setAlertType] = useState(false);
    let token = JSON.parse(localStorage.getItem('data')).token;

    const getActiveChannelFromStorage = () => {
        const storedActiveChannel = localStorage.getItem('activeChannel');
        return storedActiveChannel ? parseInt(storedActiveChannel) : null;
    };

    const setActiveChannelInStorage = (channelId) => {
        localStorage.setItem('activeChannel', channelId.toString());
    };

    function GetSubscriptions() {
        fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (!response.ok) {
                console.log('GetSubscriptions !response.ok ...');
                console.log(response);
                setAlertMessage(response.statusCode);
            } else {
                console.log('GetSubscriptions response.ok ...');
            }
            return response.json();
        }).then((jsonData) => {
            if (jsonData.succeeded || jsonData.hasOwnProperty('data')) {
                console.log('GetSubscriptions jsonData.succeeded...');
                setAlertMessage(jsonData.message);
                setAlertType('success');
                setChannels(jsonData.data);

                const storedActiveChannel = getActiveChannelFromStorage();
                if (storedActiveChannel) {
                    setActiveChannel(storedActiveChannel);
                } else if (jsonData.data && jsonData.data.length > 0) {
                    setActiveChannel(jsonData.data[0].id);
                }
            } else {
                console.log('GetSubscriptions !jsonData.succeeded...');
            }
        }).catch((err) => {
            setAlertMessage(err);
            setAlertType('error');
        });
    }

    useEffect(() => {
        GetSubscriptions();
    }, []);

    useEffect(() => {
        if (activeChannel !== null) {
            setActiveChannelInStorage(activeChannel);
        }
    }, [activeChannel]);

    if (channels) {
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
