/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Spinner from './Spinner';
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";
import Pagination from "./Pagination";
import '../styles/common.css'
function UserArticles() {
  const [, setSubscribedChannelsExist] = useState(true); // Define setSubscribedChannelsExist

  const [ArticleModalData, setArticleModalData] = useState('');
  const [, setRssTitle] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true); // New state for loading

  let token;
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }

  const [jsonData, , sendRequest] = useFetch();

  function GetRssArticlesById(id, title) {
    setRssTitle(title);

    if (id) {
      // https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=5&PageNumber=3&PageSize=10
      // Set loading to true after request succeed
      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${id}&PageNumber=${pageNumber}&PageSize=10`, {
        method: 'get', name: 'GETuserArticles', token: token, jsonSuccessProp: 'message', onSucceed: () => {
          setLoading(false)
        }, jsonFailProp: 'message'
      })

    }
  }

  useEffect(() => {
    // Fetch data on component mount or refresh
    //id is in local storage for persistance
    const activeChannel = JSON.parse(localStorage.getItem('activeChannel'))
    GetRssArticlesById(activeChannel.id, activeChannel.title);
    setRssTitle(activeChannel.title)
  }, [pageNumber]);

  useEffect(() => {
    // Update subscribed channels existence based on fetched data
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
        {/* Pass loading state to SubscribedList */}
        <SubscribedList GetRssArticlesById={GetRssArticlesById} loading={loading} />

        {
          loading ? (
            <div className="gallary_items">
              <Spinner />
            </div>
          ) : (
            <div className="gallary_items">
              <div  className="articlesNavbar">
                {/* <div style={{ textAlign: 'center',   }}>
                  <h1 style={{ color: 'salmon' }}>{RssTitle}</h1>
                </div> */}
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
              </div>

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
