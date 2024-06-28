import React, { useEffect, useState } from "react";
import Spinner from './Spinner';
import "../styles/ChannelsView.css";
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";

function UserArticles() {
  console.log(`🖌️ UserArticles`) // #debug 

  // default all value means > find all articles by default
  const [ArticleModalData, setArticleModalData] = useState('');
  const [RssTitle, setRssTitle] = useState(null);
  const [pageNumber] = useState(1);
  const [subscribedChannelsExist, setSubscribedChannelsExist] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading

  let token;
  // no need to make it a state, it is computed on the fly when 
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }
  const [jsonData, , sendRequest] = useFetch();

  function GetRssArticlesById(id, title) {
    setRssTitle(title);
    if (id) {
      setLoading(true); // Set loading to true before request
      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${id}&PageNumber=${pageNumber}&PageSize=10`, { method: 'get', name: 'GETuserArticles', token: token })
        .finally(() => setLoading(false)); // Set loading to false after request
    }
  }

  useEffect(() => {
    // by default get all articles on /home load 
    GetRssArticlesById('');
  }, []);

  useEffect(() => {
    if (jsonData.data && jsonData.data.length > 0) {
      setSubscribedChannelsExist(true);
    } else {
      setSubscribedChannelsExist(false);
    }
  }, [jsonData]);

  return (
    <>
      {ArticleModalData && <ArticleModal setArticleModalData={setArticleModalData} data={ArticleModalData} />}
      <div>
        <SubscribedList GetRssArticlesById={GetRssArticlesById} />
        <div style={{ textAlign: 'center', marginTop: '120px' }}>
          <h1 style={{ color: 'salmon' }}>{RssTitle}</h1>
        </div>
        {
          loading ? (
            <div className="gallary_items">
              <Spinner />
            </div>
          ) : (
            <div className="gallary_items">
              {jsonData.data && jsonData.data.map((item) => (
                <ArticleCard setArticleModalData={setArticleModalData} key={item.id} item={item} />
              ))}
            </div>
          )
        }
      </div>
    </>
  );
}

export default UserArticles;
