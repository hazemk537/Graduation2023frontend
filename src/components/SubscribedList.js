import React, { useEffect, useState } from 'react'
import '../styles/common.css'
import useFetch from '../customHooks/useFetch'
let horizontalCardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'space-between',



}
//fixed while scrolling
let verticalCardsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    alignItem: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '20%',
    right: '1rem',
    zIndex: '40',
    width: '12%'


}
let channelImage = { width: '4rem' }

function SubscribedList({ GetRssArticlesById }) {

    let token = JSON.parse(localStorage.getItem('data')).token



    const [ChannelsData] = useFetch('https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All', { method: 'get', name: 'GetSubscibedList', token: token })

    
    if (ChannelsData) {
        return (

            <div>

                {/* vertical flex to change and display articles (ALL,per Rss) */}
                <div style={verticalCardsStyle}


                >
                    {/* <div className='allChannelsHover'
                        onClick={() => { GetRssArticles('all') }}

                        style={horizontalCardsStyle} >

                        <svg width='2rem' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z" fill="white " stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> <path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z" fill="white " stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> <path d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z" fill="white " stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> <path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z" fill="white " stroke="#000000" stroke-width="4" stroke-linejoin="round"></path> </g></svg>

                        <span style={{
                            fontSize: '1.4rem',
                        }}>
                            All Channels
                        </span>

                    </div> */}

                    {ChannelsData?.map((item, idx) => {
                        console.log(idx)

                        return (<div className='channelsHover' style={horizontalCardsStyle} key={idx} onClick={() => {
                            GetRssArticlesById(item.id)
                        }}>
                            <div>
                                <img style={channelImage} alt={item.title} src={item.image} />
                            </div>
                            <p style={{
                                fontSize: '1rem',


                            }}>{item.title}</p>



                        </div>)
                    })}





                </div>
            </div>
        )

    } else {

        return (

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundcolor: 'whitesmoke',
                fontFamily: 'fantasy'
            }}>
                <h1>  No Subscriptions</h1>
            </div>
        )

    }


}

export default SubscribedList