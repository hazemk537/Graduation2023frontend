import React, { useEffect, useState } from "react";
import Spinner from './Spinner';
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";
import Pagination from "./Pagination";
import '../styles/common.css';

function UserArticles() {
  const [, setSubscribedChannelsExist] = useState(true); 
  const [ArticleModalData, setArticleModalData] = useState('');
  const [RssTitle, setRssTitle] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(true); 
  const [selectedChannelId, setSelectedChannelId] = useState(null); 

  let token;
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }

  // if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
  //   totalPages = JSON.parse(localStorage.getItem('data')).totalPages;
  // }

   ;

  const [jsonData, , sendRequest] = useFetch();

  function GetRssArticlesById(id, title) {
    setRssTitle(title);
    setSelectedChannelId(id); 

    if (id) {
      setLoading(true);

      const savedPageNumber = localStorage.getItem(`pageNumber_${id}`) || 1;
      setPageNumber(parseInt(savedPageNumber));

      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${id}&PageNumber=${savedPageNumber}&PageSize=10`, {
        method: 'get', name: 'GETuserArticles', token: token, jsonSuccessProp: 'message', onSucceed: (data) => {
          setLoading(false);
          // Assume response contains total articles count
          setTotalPages(Math.ceil(data.totalPages)); // Adjust according to your API response
        }, jsonFailProp: 'message'
      });
    }
  }

  useEffect(() => {
    const activeChannel = JSON.parse(localStorage.getItem('activeChannel'));
    if (activeChannel) {
      GetRssArticlesById(activeChannel.id, activeChannel.title);
      setRssTitle(activeChannel.title);
    }
  }, []);

  useEffect(() => {
    if (selectedChannelId) {
      localStorage.setItem(`pageNumber_${selectedChannelId}`, pageNumber); 
      sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetAllRssArticles?Rssid=${selectedChannelId}&PageNumber=${pageNumber}&PageSize=10`, {
        method: 'get', name: 'GETuserArticles', token: token, jsonSuccessProp: 'message', onSucceed: (data) => {
          setLoading(false);
          setTotalPages(Math.ceil(data.totalPages));
        }, jsonFailProp: 'message'
      });
    }
  }, [pageNumber, selectedChannelId]);

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
      <div >
        <SubscribedList GetRssArticlesById={GetRssArticlesById} loading={loading} />

        {
          loading ? (
            <div className="gallary_items">
              <Spinner />
            </div>
          ) : (
            <div className="gallary_items">
              <div className="articlesNavbar">
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
              </div>

              {jsonData.data && jsonData.data.map((item) => (
              <div className="articles-view">
                <ArticleCard setArticleModalData={setArticleModalData} key={item.id} item={item} />
              </div>
              ))}
            </div>
          )
        }
      </div>
    </>
  );
}

export default UserArticles;
