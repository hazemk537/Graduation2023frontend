import React from "react";
import useFetch from "../customHooks/useFetch";
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg';
import SaveDelBtn from './SaveDelBtn';
import LikeDislikeBtn from './LikeDislikeBtn'
function ArticleCard({ item, setArticleModalData }) { // Removed the `key` prop here as it's not used

  console.log(`🖌️ ArticleCard`); // #debug
  let token;


  if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
    token = JSON.parse(localStorage.getItem('data')).token;
  }

  const [, , sendRequest] = useFetch()
  function handleSetModalData(jsonData) {
    setArticleModalData(jsonData);
  }

  const checkImageUrl = (item) => {
    let src = item?.image;
    if (!src?.match(/http(\w|\W)+/)) {
      src = briefimg;
    }
    return src;
  }

  return (
    <div className="gallary_item" key={item.id} // Ensure a unique key for each item
      onClick={() => {
        sendRequest(`https://BrieflyNews.runasp.net/api/v1/Article/GetRssArticle/${item?.id}`, { method: 'get', name: 'GetArticleData', token: token, onSucceed: handleSetModalData });
      }}
    >
      <div className="gallary_img_wrapper">
        <img
          src={checkImageUrl(item)}
          alt=''
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = briefimg;
          }} />
      </div>
      <div className="gallary_item_details">
        <h2 style={{ height: '5.3rem' }} className="gallary_item_headding">{item?.title}</h2>


        <p >{item?.description.substring(0, 90)} ...</p>

      </div>

      <div className="gallary_item_actions">
        <div>
          {item?.createdAt?.match(/\d+-\d+-\d+/) ? <span>{item?.createdAt?.match(/\d+-\d+-\d+/)[0]}</span> : 'no date'}
        </div>

        <div><SaveDelBtn articleId={item?.id} /></div>
        <div><LikeDislikeBtn articleId={item?.id}/></div>
        <svg
          className="gallary_item_action_comment"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#5c5757"
          stroke="#5c5757"
        >
          <g strokeWidth={0} />
          <g strokeLinecap="round" strokeLinejoin="round" />
          <g stroke="none" fillRule="evenodd" transform="translate(-308 -255)">
            <path d="M327.494 279.633 324 284l-3.494-4.367c-6.042-1.278-10.514-5.77-10.514-11.132 0-6.355 6.272-11.507 14.008-11.507s14.008 5.152 14.008 11.507c0 5.362-4.472 9.854-10.514 11.132M324 255c-8.837 0-16 6.143-16 13.72">
            </path>
          </g>
        </svg>

      </div>
    </div>
  );
}

export default ArticleCard;
