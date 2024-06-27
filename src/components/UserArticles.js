import React, { useEffect, useState } from "react";


import Spinner from './Spinner';
import "../styles/ChannelsView.css";
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";

function UserArticles() {
  console.log(`🖌️ UserArticles`) // #debug 

  //default all value means > find allarticles by default
  const [ArticleModalData, setArticleModalData] = useState('')

  const [pageNumber,] = useState(1)

  // v1 set state ,then rerun useeffect based on statechange
  // v2 set state ,then rerun component with the fetch ,change state,rerender
  //v3 pass par to fn then seTstate

 // first cond to avoid bad data:undefined ,value,second avoid if it data entry not exist in localstorage
 let token
 if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null){ 
   token = JSON.parse(localStorage.getItem('data')).token
 }
  const [jsonData, , sendRequest] = useFetch()

  
  function GetRssArticlesById(id) {
    if (id) {
      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${id}&PageNumber=${pageNumber}&PageSize=10`, { method: 'get', name: 'GETuserArticles', token: token })
    }
  }

  useEffect(() => {
    //by default get all articles on /home load 
    GetRssArticlesById('')

  }, []);

  return (


    <>

      {ArticleModalData && <ArticleModal setArticleModalData={setArticleModalData} data={ArticleModalData} />}
      <div >

        {/* no need to flex we need the second a fixed */}
        {/* sets the id of the channel */}
        <SubscribedList GetRssArticlesById={GetRssArticlesById} />

        {
          jsonData.data ?
            <div className={`gallary_items `}>
              {jsonData.data.map((item) => (
                <ArticleCard setArticleModalData
                  ={setArticleModalData} key={item.id} item={item} />
              ))}
            </div>
            :
            <div className={`gallary_items `}>
               <Spinner/>
            </div>

        }
      </div>
    </>
  )
}

export default UserArticles;

