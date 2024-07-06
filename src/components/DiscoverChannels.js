import React, { useEffect, useRef, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/discoverChannel.css'
import '../styles/common.css'
import Alert from "./Alert";
function DiscoverChannels() {
  const [searchTrigger, setSearchTrigger] = useState()
  const [channelsJson, setChannelJson] = useState();


  const [pageNumber, setPageNumber] = useState(1)
  const [alertMessage,] = useState(false);
  const [alertType,] = useState(false);
  let searchInputRef=useRef()
  //to not render success at begining

  let token = JSON.parse(localStorage.getItem('data')).token

  async function parrallelDiscover(allAllchannelsJsonPromise, subscribedChannelJsonPromise) {
    //parallel fetch all subscriptions and all channels ,merge them 
    //add subscribed filed in all subscriptions
    let allAllchannelsPromise
    
     allAllchannelsPromise = fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/GetAll?search=${searchInputRef.current.value}&PageNumber=${pageNumber}&PageSize=7`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  
    let subscribedChannelsPromise = fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/SubscribedRss/All`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    let [allChannelsResponse, subscribedChannelsResponse] = await Promise.all([allAllchannelsPromise, subscribedChannelsPromise])
    if (allChannelsResponse.ok) {
      console.log('allChannelsResponse.ok...')

    }



    if (subscribedChannelsResponse.ok) {
      console.log('subscribedChannelsResponse.ok...')


    }
    if (allChannelsResponse.ok & subscribedChannelsResponse.ok) {

      //add subscribed field to all channels json
      //  setState(Newchannels)
      let allchannelsJson = await allChannelsResponse.json()
      let subscribedChannelJson = await subscribedChannelsResponse.json()

      // if data empty  subscribedChannelJson.data will be undefined
      let subscribtionIdArr = subscribedChannelJson.data?.map((item) => item.id)

      console.log('subscribtionIdArr ...');
      console.log(subscribtionIdArr);

      let isCurrentItemSubscribed = 0

      let Newchannels = allchannelsJson?.data?.map((item) => {
        if (subscribtionIdArr?.findIndex)//isarray
        {
          isCurrentItemSubscribed = subscribtionIdArr.includes(item.id) === false ? 0 : 1

        }

        return { ...item, 'subscribed': isCurrentItemSubscribed }
      })
      allchannelsJson.data = Newchannels
      setChannelJson(allchannelsJson)
      // console.log('Newchannels');
      // console.log(Newchannels);
    }



  }
  useEffect(() => {
    // http://BrieflyNews.runasp.net/api/v1/Rss/GetAll?PageNumber=1&PageSize=5

    parrallelDiscover()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber,searchTrigger]);

  return (
    <>
      {alertType && <Alert alertText={alertMessage} type={alertType} />}

      <div className="channel-title"><h2>Discover Our Channels</h2></div>
      <div
        className={`homepage-search-wrapper   `}
      >
        {/* search functionallity #todo_4 */}
        <input ref={searchInputRef} className="search-input" type="text" placeholder="Search" />

        <svg
        onClick={()=>{
        setSearchTrigger((old)=>!old)


        }}
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx={11} cy={11} r={8} />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
        <ChannelsView 
        className={'gallary_items_discover_channels'}
        totalPages={channelsJson?.totalPages}
         pageNumber={pageNumber} setPageNumber={setPageNumber} 
         parrallelDiscover={parrallelDiscover} type="discover_channels" 
         channels={channelsJson?.data} /></>)
}

export default DiscoverChannels;

