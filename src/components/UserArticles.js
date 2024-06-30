import React, { useEffect, useState } from "react";
import Spinner from './Spinner';
import ArticleCard from "./ArticleCard";
import SubscribedList from "./SubscribedList";
import useFetch from "../customHooks/useFetch";
import ArticleModal from "./ArticleModal";
import Pagination from "./Pagination";
import '../styles/common.css';

function UserArticles() {
  const [subscribedChannelsExist, setSubscribedChannelsExist] = useState(false);
  const [articleModalData, setArticleModalData] = useState('');
  const [rssTitle, setRssTitle] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Initialize pageNumber to 1
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedChannelId, setSelectedChannelId] = useState(null);

  let token;
  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }

  const [jsonData, , sendRequest] = useFetch();

  function GetRssArticlesById(id, title) {
    setRssTitle(title);
    setSelectedChannelId(id);
    setPageNumber(1); // Reset pageNumber to 1 when selecting a new channel

    if (id) {
      setLoading(true);

      const savedPageNumber = localStorage.getItem(`pageNumber_${id}`) || 1;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, selectedChannelId]);

  useEffect(() => {
    const activeChannel = JSON.parse(localStorage.getItem('activeChannel'));

    if (jsonData.data && jsonData.data.length > 0 && activeChannel) {
      setSubscribedChannelsExist(true);


    } else {
      setSubscribedChannelsExist(false);
      setRssTitle(null);
    }
  }, [jsonData]);

  return (
    <>
      {subscribedChannelsExist && <div className="channel-title"><h2>{rssTitle}</h2></div>}
      {articleModalData && <ArticleModal setArticleModalData={setArticleModalData} data={articleModalData} />}
      <div>
        <div className="subscribedList">       <SubscribedList GetRssArticlesById={GetRssArticlesById} loading={loading} />
        </div>
 
        {
          loading ? (
            <div className="gallary_items">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="articlesNavbar">
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
              </div>
                <div className="gallary_items">
                  {jsonData.data && jsonData.data.map((item) => (
                    <ArticleCard key={item.id} setArticleModalData={setArticleModalData} item={item} />
                  ))}
                </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default UserArticles;
