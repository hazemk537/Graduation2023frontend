import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/discoverChannel.css'
import Alert from "./Alert";
function DiscoverChannels() {
  const [channelsJson, setChannelJson] = useState();


  const [pageNumber, setPageNumber] = useState(1)
  const [alertMessage, ] = useState(false);
  const [alertType, ] = useState(false);
  //to not render success at begining


  async function parrallelDiscover(allAllchannelsJsonPromise, subscribedChannelJsonPromise) {
    //parallel fetch all subscriptions and all channels ,merge them 
    //add subscribed filed in all subscriptions
    let allAllchannelsPromise = fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/GetAll?PageNumber=${pageNumber}&PageSize=7`, {
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

      let Newchannels = allchannelsJson.data.map((item) => {
        if (subscribtionIdArr?.findIndex)//isarray
        {
          isCurrentItemSubscribed = subscribtionIdArr.includes(item.id) === false ? 0 : 1

        }
        
        return { ...item, 'subscribed': isCurrentItemSubscribed }
      })
      allchannelsJson.data=Newchannels
      setChannelJson(allchannelsJson)
      // console.log('Newchannels');
      // console.log(Newchannels);
    }



  }
  let token = JSON.parse(localStorage.getItem('data')).token
  useEffect(() => {
    // http://BrieflyNews.runasp.net/api/v1/Rss/GetAll?PageNumber=1&PageSize=5

    parrallelDiscover()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      {alertType && <Alert alertText={alertMessage} type={alertType} />}
      <ChannelsView  totalPages={channelsJson?.totalPages} pageNumber={pageNumber} setPageNumber={setPageNumber}  parrallelDiscover={parrallelDiscover} type="discover_channels" channels={channelsJson?.data} /></>)
}

export default DiscoverChannels;

