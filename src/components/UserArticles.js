import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";

function UserArticles( ) {
  //default all value means > find allarticles by default
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [articles,setArticles]=useState('')


  const [intialArticles, setIntialArticles] = useState([
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
  ]);

  // v1 set state ,then rerun useeffect based on statechange
  // v2 set state ,then rerun component with the fetch ,change state,rerender
  //v3 pass par to fn then seTstate
  let token = JSON.parse(localStorage.getItem('data')).token


  function GetRssArticlesById(id){
    if(id){
    fetch(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${id}&PageNumber=${pageNumber}&PageSize=10`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (!response.ok) {
      console.log('GetRssArticlesById !response.ok ...')
  
        console.log(response)
        setAlertMessage(response.statusCode)
  
      }
      else{
      console.log('GetRssArticlesById response.ok ...')
  
      }
      return response.json()
  
    }).then((jsonData) => {
      if (jsonData.succeeded||jsonData.hasOwnProperty('data')) {
        console.log('GetRssArticlesById jsonData.succeeded...')
        setAlertMessage(jsonData.message)
        setAlertMessage('success')
        setArticles(jsonData.data)
      }
  else{
    console.log('GetRssArticlesById !jsonData.succeeded...')
  
  }
  
    }).catch((err) => {
      setAlertMessage(err)
      setAlertType('err')
    })
  }
  
  }
    useEffect(() => {
      //by default get all articles on /home load 
      GetRssArticlesById('')
      
    }, []);


  return (

    <div >
      {/* no need to flex we need the second a fixed */}
      {/* sets the id of the channel */}
      <SubscribedList GetRssArticlesById={GetRssArticlesById} />

      {
        articles ?
          <div className={`gallary_items `}>
            {articles.map((item) => (
              <ArticleCard key={item.id} item={item} />
            ))}
          </div>
          :
          <div className={`gallary_items `}>
            <h1 style={{ position: 'fixed',top:'50%',left:'48%',  fontWeight: 'lighter', opacity: '0.5', fontSize: '2rem' }}>No Articles</h1>
          </div>

      }
    </div>
  )
}

export default UserArticles;

