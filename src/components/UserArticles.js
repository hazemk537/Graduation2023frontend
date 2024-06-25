import React, { useEffect, useState } from "react";
import "../styles/ChannelsView.css";
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";

function UserArticles() {
  //default all value means > find allarticles by default
  const [ArticleModalData, setArticleModalData] = useState(false)
  const [pageNumber,] = useState(1)

  console.log(ArticleModalData);
  // v1 set state ,then rerun useeffect based on statechange
  // v2 set state ,then rerun component with the fetch ,change state,rerender
  //v3 pass par to fn then seTstate
  let token = JSON.parse(localStorage.getItem('data')).token

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
              <h1 style={{ position: 'fixed', top: '50%', left: '48%', fontWeight: 'lighter', opacity: '0.5', fontSize: '2rem' }}>No Articles</h1>
            </div>

        }
      </div>
    </>
  )
}

export default UserArticles;

