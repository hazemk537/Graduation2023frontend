import React, { useRef, useState } from "react";
import addFeed from "../styles/addfeed.css";
import PreviewFeed from "../components/PreviewFeed.js";

// https://www.smh.com.au/rss/feed.xml


const AddFeed = () => {
  const [channel_obj, setChannelObj] = useState({
    channel_img_url: "",
    channel_img_title: "",
    channel_title: "",
    channel_description: "",
    channel_language: "",
    channel_updateDate: ""
  });
  const [showPreview, setShowPreview] = useState(false); // State to control visibility of PreviewFeed

  const inputRef = useRef(null);

  const handleSearch = () => {
    const UrlBase = "https://cors.eu.org/";
    fetch(UrlBase + inputRef.current.value)
      .then((response) => response.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        const channel_obj1 = {
          channel_description: xmlDoc.querySelector("description").textContent,
          channel_img_title: xmlDoc.querySelector("image title ").textContent,
          channel_img_url: xmlDoc.querySelector("image url").textContent,
          channel_title: xmlDoc.querySelector("title").textContent,
          channel_pubDate: xmlDoc.querySelector("pubDate").textContent
        };

        setChannelObj(channel_obj1);
        setShowPreview(true); // Show PreviewFeed after search

        const articles = xmlDoc.querySelectorAll("item");
        for (let i = 0; i < articles.length; i++) {
          const innerHtmlChildren = new DOMParser().parseFromString(articles[i].innerHTML, 'text/html');
          const article_obj1 = {
            article_description: innerHtmlChildren.querySelector("description").textContent,
            article_title: innerHtmlChildren.querySelector("title").textContent,
            article_pubDate: innerHtmlChildren.querySelector("pubDate").textContent
          };
          console.log(article_obj1);
        }

        // Clear the input field after search
        inputRef.current.value = "";
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="addFeed">
      <div className={`RSS-search-wrapper `}>
            {/* search functionallity #todo_4 */}
            <input 
            className="search-input" 
            type="text" 
            ref={inputRef}
          placeholder="Add Rss link"
          onKeyPress={handleKeyPress}
           />

            <svg
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
      
      {showPreview && <PreviewFeed channel_obj={channel_obj} />} 
    </div>
  );
};

export default AddFeed;
// const rssList=["https://feeds.bbci.co.uk/news/world/rss.xml",
// "https://feeds.bbci.co.uk/news/uk/rss.xml",
// "https://feeds.bbci.co.uk/news/business/rss.xml",
// "https://feeds.bbci.co.uk/news/technology/rss.xml",
// "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"]
